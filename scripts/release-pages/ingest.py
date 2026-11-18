#!/usr/bin/env python3
"""Refresh the release-day Statistics Canada pages.

Fetches published series from the Web Data Service and writes:

  src/data/statcan/cpi.json          location-page CPI extract (same schema)
  src/data/release/cpi.json          CPI release page
  src/data/release/jobs.json         Labour Force Survey release page
  src/data/release/housing-starts.json
  public/data/cpi.csv
  public/data/jobs.csv
  public/data/housing-starts.csv

Nothing is estimated. A suppressed or missing cell stays null. Percent changes
and month-to-month differences are calculated from the published levels.

Usage:
  python3 scripts/release-pages/ingest.py
  python3 scripts/release-pages/ingest.py --only cpi
  python3 scripts/release-pages/ingest.py --only jobs
  python3 scripts/release-pages/ingest.py --only housing
"""

from __future__ import annotations

import argparse
import csv
import json
import sys
from datetime import date
from decimal import Decimal, ROUND_HALF_UP
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / "scripts"))
sys.path.insert(0, str(Path(__file__).resolve().parent))

from ingest_statcan import cpi_payload  # noqa: E402
from wds import coordinate, data_points, get_cube, series_info  # noqa: E402

RELEASE_DIR = ROOT / "src" / "data" / "release"
PUBLIC_DIR = ROOT / "public" / "data"
CPI_EXTRACT = ROOT / "src" / "data" / "statcan" / "cpi.json"
LICENCE = "https://www.statcan.gc.ca/en/terms-conditions/open-licence"

# Status codes that mean the cell is not a publishable number.
UNUSABLE_STATUS = {1, 8, 9}
SCALAR = {code: Decimal(10) ** code for code in range(0, 10)}
SYMBOL = {0: None, 1: "p", 3: "r"}

SOURCE_LINE = (
    'Source: Statistics Canada, Table {table}. Reproduced and distributed on an '
    '"as is" basis with the permission of Statistics Canada.'
)


def self_check() -> None:
    if pct(Decimal("110"), Decimal("100")) != Decimal("10.0"):
        raise SystemExit("percent-change self-check failed")
    if pct(Decimal("100"), Decimal("110")) != Decimal("-9.1"):
        raise SystemExit("percent-change rounding self-check failed")
    published, scaled = scale(230.883, decimals=3, scalar_code=3)
    if published != Decimal("230.883") or scaled != Decimal("230883"):
        raise SystemExit(f"scalar self-check failed: {published} {scaled}")
    published, scaled = scale(21100.1, decimals=1, scalar_code=3)
    if published != Decimal("21100.1") or scaled != Decimal("21100100"):
        raise SystemExit(f"employment scalar self-check failed: {published} {scaled}")


def quantize(value: Decimal, places: int) -> Decimal:
    return value.quantize(Decimal(10) ** -places, rounding=ROUND_HALF_UP)


def scale(value: float, decimals: int, scalar_code: int) -> tuple[Decimal, Decimal]:
    """Return (published cell, cell × scalar).

    The Web Data Service value is the table cell. `scalarFactorCode` 3 means
    that cell is in thousands of the base unit. Applying it once converts
    230.883 thousand units to 230,883 units, and 21,100.1 thousand persons to
    21,100,100 persons. It is not applied a second time.
    """
    if scalar_code not in SCALAR:
        raise SystemExit(f"Unknown scalar factor {scalar_code}")
    published = quantize(Decimal(str(value)), decimals)
    scaled_places = max(0, decimals - scalar_code)
    scaled = quantize(published * SCALAR[scalar_code], scaled_places)
    return published, scaled


def pct(latest: Decimal, earlier: Decimal) -> Decimal | None:
    if earlier == 0:
        return None
    return quantize((latest - earlier) / earlier * Decimal(100), 1)


def json_num(value: Decimal | None) -> int | float | None:
    if value is None:
        return None
    if value == value.to_integral():
        return int(value)
    return float(value)


def shift_month(ref: str, delta: int) -> str:
    year, month = (int(part) for part in ref.split("-"))
    index = year * 12 + (month - 1) + delta
    return f"{index // 12:04d}-{index % 12 + 1:02d}"


def month_key(ref_per: str) -> str:
    # "2026-10-01" -> "2026-10"
    return ref_per[:7]


def write_json(path: Path, payload: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_suffix(path.suffix + ".tmp")
    temporary.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    temporary.replace(path)
    print(f"wrote {path.relative_to(ROOT)}", file=sys.stderr)


def write_csv(path: Path, preamble: list[str], header: list[str], rows: list[list[object]], footer: list[str]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_suffix(path.suffix + ".tmp")
    with temporary.open("w", encoding="utf-8", newline="") as handle:
        for line in preamble:
            handle.write(f"# {line}\n")
        writer = csv.writer(handle)
        writer.writerow(header)
        for row in rows:
            writer.writerow("" if cell is None else cell for cell in row)
        for line in footer:
            handle.write(f"# {line}\n")
    temporary.replace(path)
    print(f"wrote {path.relative_to(ROOT)}", file=sys.stderr)


def members(cube: dict, dimension_name: str) -> list[dict]:
    for dimension in cube["dimension"]:
        if dimension["dimensionNameEn"] == dimension_name:
            return [member for member in dimension["member"] if not member.get("terminated")]
    raise SystemExit(f"Cube {cube['productId']} has no dimension {dimension_name!r}")


def member_id(cube: dict, dimension_name: str, name: str) -> int:
    for item in members(cube, dimension_name):
        if item["memberNameEn"].strip() == name:
            return int(item["memberId"])
    raise SystemExit(f"Cube {cube['productId']} dimension {dimension_name!r} has no {name!r}")


def table_meta(cube: dict) -> dict:
    product = int(cube["productId"])
    # 18100004 -> 18-10-0004-01
    text = f"{product:08d}"
    table_id = f"{text[0:2]}-{text[2:4]}-{text[4:8]}-01"
    return {
        "id": table_id,
        "title": cube["cubeTitleEn"],
        "url": f"https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid={product}01",
    }


class Series:
    def __init__(self, info: dict, points: list[dict]):
        self.title = info["SeriesTitleEn"]
        self.uom_code = int(info["memberUomCode"])
        self.decimals = int(info["decimals"])
        self.scalar_code = int(info["scalarFactorCode"])
        self.by_month: dict[str, dict] = {}
        for point in points:
            if point.get("value") is None:
                continue
            status = int(point.get("statusCode") or 0)
            security = int(point.get("securityLevelCode") or 0)
            if status in UNUSABLE_STATUS or security == 1:
                continue
            published, scaled = scale(point["value"], int(point["decimals"]), int(point["scalarFactorCode"]))
            self.by_month[month_key(point["refPer"])] = {
                "published": published,
                "scaled": scaled,
                "release": str(point.get("releaseTime") or "")[:10],
                "symbol": SYMBOL.get(int(point.get("symbolCode") or 0), None),
                "caution": status == 7,
            }

    def at(self, month: str) -> dict | None:
        return self.by_month.get(month)

    def require(self, month: str) -> dict:
        point = self.at(month)
        if point is None:
            raise SystemExit(f"Missing {month} for {self.title}")
        return point


def load_series(product_id: int, coordinates: list[str], latest_n: int) -> list[Series]:
    infos = series_info(product_id, coordinates)
    vectors = [int(info["vectorId"]) for info in infos if int(info.get("vectorId") or 0) > 0]
    points = data_points(vectors, latest_n) if vectors else {}
    loaded = []
    for info in infos:
        vector_id = int(info.get("vectorId") or 0)
        if vector_id <= 0:
            # The coordinate is not a published series (for example city food CPI).
            loaded.append(
                Series(
                    {
                        "SeriesTitleEn": info.get("coordinate") or "unpublished",
                        "memberUomCode": 0,
                        "decimals": 1,
                        "scalarFactorCode": 0,
                    },
                    [],
                )
            )
            continue
        loaded.append(Series(info, points[vector_id]))
    return loaded


def require_consecutive(series: Series, months: list[str]) -> None:
    for earlier, later in zip(months, months[1:]):
        if shift_month(earlier, 1) != later:
            raise SystemExit(f"{series.title} has a gap between {earlier} and {later}")


def is_city(name: str) -> bool:
    lowered = name.lower()
    if "," not in name:
        return False
    if " part," in lowered or "excluding" in lowered:
        return False
    return True


def kind_of(name: str) -> str:
    if name == "Canada":
        return "country"
    if is_city(name):
        return "city"
    return "province"


def ingest_cpi() -> None:
    cube = get_cube(18100004)
    table = table_meta(cube)
    if table["id"] != "18-10-0004-01":
        raise SystemExit(f"Unexpected CPI table id {table['id']}")
    geos = members(cube, "Geography")
    all_items = member_id(cube, "Products and product groups", "All-items")
    food = member_id(cube, "Products and product groups", "Food")
    coordinates = []
    labels = []
    for geo in geos:
        geo_id = int(geo["memberId"])
        name = geo["memberNameEn"].strip()
        for product_id, product_name in ((all_items, "All-items"), (food, "Food")):
            coordinates.append(coordinate([geo_id, product_id]))
            labels.append((name, product_name))
    loaded = load_series(18100004, coordinates, 26)
    levels: dict[tuple[str, str], dict[str, float]] = {}
    release_series: dict[str, Series] = {}
    for (name, product_name), series in zip(labels, loaded):
        if product_name == "All-items":
            release_series[name] = series
        month_map: dict[str, float] = {}
        for month, point in series.by_month.items():
            month_map[month] = float(point["published"])
        if month_map:
            levels[(name, product_name)] = month_map

    previous_dguids = {}
    if CPI_EXTRACT.exists():
        previous = json.loads(CPI_EXTRACT.read_text(encoding="utf-8"))
        previous_dguids = {row["geo"]: row.get("dguid") or "" for row in previous["geographies"]}
    extract = cpi_payload(levels, previous_dguids)
    canada = release_series.get("Canada")
    if canada is None:
        raise SystemExit("Canada all-items CPI series missing")
    months = sorted(canada.by_month)
    if len(months) < 24:
        raise SystemExit(f"Canada CPI has {len(months)} months; need 24")
    trend_months = months[-24:]
    require_consecutive(canada, trend_months)
    reference = trend_months[-1]
    if extract["referenceMonth"] != reference:
        raise SystemExit(
            f"CPI extract month {extract['referenceMonth']} != release month {reference}"
        )
    previous = shift_month(reference, -1)
    year_ago = shift_month(reference, -12)
    canada_now = canada.require(reference)
    canada_prev = canada.require(previous)
    canada_ago = canada.require(year_ago)
    if not (Decimal("120") <= canada_now["published"] <= Decimal("250")):
        raise SystemExit(f"Canada CPI out of range: {canada_now['published']}")

    def row(name: str, series: Series) -> dict | None:
        now = series.at(reference)
        if now is None:
            return None
        prev = series.at(previous)
        ago = series.at(year_ago)
        return {
            "geo": name,
            "kind": kind_of(name),
            "index": json_num(now["published"]),
            "previousIndex": json_num(prev["published"]) if prev else None,
            "yearAgoIndex": json_num(ago["published"]) if ago else None,
            "momPct": json_num(pct(now["published"], prev["published"])) if prev else None,
            "yoyPct": json_num(pct(now["published"], ago["published"])) if ago else None,
            "caution": bool(now["caution"]),
        }

    rows = []
    for name, series in release_series.items():
        if name == "Canada":
            continue
        item = row(name, series)
        if item is not None:
            rows.append(item)
    if len(rows) < 20:
        raise SystemExit(f"Only {len(rows)} CPI geographies at {reference}")
    rows.sort(key=lambda item: (item["yoyPct"] is None, -(item["yoyPct"] or 0), item["geo"]))
    canada_row = row("Canada", canada)
    assert canada_row is not None
    payload = {
        "slug": "cpi",
        "retrieved": date.today().isoformat(),
        "referenceMonth": reference,
        "previousMonth": previous,
        "yearAgoMonth": year_ago,
        "releaseDate": canada_now["release"],
        "licence": LICENCE,
        "table": {**table, "uom": "2002=100"},
        "adapted": (
            "12-month and 1-month percent changes are calculated by Canadian Data Insights "
            "from the published all-items index (2002=100). They are not a separate "
            "Statistics Canada percent-change series."
        ),
        "canada": {
            "geo": "Canada",
            "index": canada_row["index"],
            "previousIndex": canada_row["previousIndex"],
            "yearAgoIndex": canada_row["yearAgoIndex"],
            "momPct": canada_row["momPct"],
            "yoyPct": canada_row["yoyPct"],
            "symbol": canada_now["symbol"],
        },
        "trend": [
            {"month": month, "value": json_num(canada.at(month)["published"])}
            for month in trend_months
        ],
        "rows": rows,
    }
    if any(point["value"] is None for point in payload["trend"]):
        raise SystemExit("Canada CPI trend has a missing month")
    write_json(CPI_EXTRACT, extract)
    write_json(RELEASE_DIR / "cpi.json", payload)
    source = SOURCE_LINE.format(table=table["id"])
    csv_rows: list[list[object]] = []
    for item in [canada_row, *rows]:
        csv_rows.append(
            [
                "latest",
                item["geo"],
                item["kind"],
                reference,
                item["index"],
                item["previousIndex"],
                item["momPct"],
                item["yearAgoIndex"],
                item["yoyPct"],
            ]
        )
    for point in payload["trend"]:
        csv_rows.append(["trend", "Canada", "country", point["month"], point["value"], None, None, None, None])
    write_csv(
        PUBLIC_DIR / "cpi.csv",
        [
            "Canadian Data Insights — Consumer Price Index, all-items",
            source,
            "Adapted from Statistics Canada. " + payload["adapted"],
            f"Licence: {LICENCE}",
            f"Reference month: {reference}. Released: {canada_now['release']}. Retrieved: {payload['retrieved']}.",
            "record_type trend is the Canada all-items index for that month. Change columns are blank on trend rows.",
        ],
        [
            "record_type",
            "geography",
            "kind",
            "month",
            "index_2002_100",
            "previous_month_index",
            "one_month_percent_change",
            "year_ago_index",
            "twelve_month_percent_change",
        ],
        csv_rows,
        [source],
    )
    print(
        f"CPI {reference} released {canada_now['release']} Canada index {canada_row['index']}",
        file=sys.stderr,
    )


def ingest_jobs() -> None:
    national_cube = get_cube(14100287)
    cma_cube = get_cube(14100459)
    national_table = table_meta(national_cube)
    cma_table = table_meta(cma_cube)
    if national_table["id"] != "14-10-0287-01" or cma_table["id"] != "14-10-0459-01":
        raise SystemExit(f"Unexpected LFS tables {national_table['id']} {cma_table['id']}")
    if "inactive" in national_cube.get("archiveStatusEn", "").lower():
        raise SystemExit("National LFS table is archived")
    if "inactive" in cma_cube.get("archiveStatusEn", "").lower():
        raise SystemExit("CMA LFS table is archived")

    def national_coordinate(characteristic: str) -> str:
        return coordinate(
            [
                member_id(national_cube, "Geography", "Canada"),
                member_id(national_cube, "Labour force characteristics", characteristic),
                member_id(national_cube, "Gender", "Total - Gender"),
                member_id(national_cube, "Age group", "15 years and over"),
                member_id(national_cube, "Statistics", "Estimate"),
                member_id(national_cube, "Data type", "Seasonally adjusted"),
            ]
        )

    employment, unemployment = load_series(
        14100287,
        [national_coordinate("Employment"), national_coordinate("Unemployment rate")],
        26,
    )
    rate_months = sorted(unemployment.by_month)
    if len(rate_months) < 24:
        raise SystemExit(f"Canada unemployment rate has {len(rate_months)} months")
    trend_months = rate_months[-24:]
    require_consecutive(unemployment, trend_months)
    reference = trend_months[-1]
    previous = shift_month(reference, -1)
    year_ago = shift_month(reference, -12)
    rate_now = unemployment.require(reference)
    rate_prev = unemployment.require(previous)
    rate_ago = unemployment.require(year_ago)
    jobs_now = employment.require(reference)
    jobs_prev = employment.require(previous)
    if jobs_now["scaled"] < Decimal("15000000") or jobs_now["scaled"] > Decimal("30000000"):
        raise SystemExit(f"Canada employment looks wrong: {jobs_now['scaled']}")
    if not (Decimal("2") <= rate_now["published"] <= Decimal("20")):
        raise SystemExit(f"Canada unemployment rate looks wrong: {rate_now['published']}")
    release_dates = {rate_now["release"], jobs_now["release"]}
    if len(release_dates) != 1 or not rate_now["release"]:
        raise SystemExit(f"National LFS release dates disagree: {release_dates}")

    char_id = member_id(cma_cube, "Labour force characteristics", "Unemployment rate")
    stat_id = member_id(cma_cube, "Statistics", "Estimate")
    adjusted_id = member_id(cma_cube, "Data type", "Seasonally adjusted")
    cma_names = []
    cma_coords = []
    for geo in members(cma_cube, "Geography"):
        name = geo["memberNameEn"].strip()
        if not is_city(name):
            continue
        cma_names.append(name)
        cma_coords.append(coordinate([int(geo["memberId"]), char_id, stat_id, adjusted_id]))
    cma_series = load_series(14100459, cma_coords, 14)
    rows = []
    for name, series in zip(cma_names, cma_series):
        now = series.at(reference)
        if now is None:
            continue
        prev_point = series.at(previous)
        ago = series.at(year_ago)
        if now["scaled"] < Decimal("1") or now["scaled"] > Decimal("30"):
            raise SystemExit(f"{name} unemployment rate looks wrong: {now['published']}")
        month_change = quantize(now["published"] - prev_point["published"], 1) if prev_point else None
        year_change = quantize(now["published"] - ago["published"], 1) if ago else None
        rows.append(
            {
                "geo": name,
                "unemploymentRate": json_num(now["published"]),
                "unemploymentRatePrevious": json_num(prev_point["published"]) if prev_point else None,
                "unemploymentRateYearAgo": json_num(ago["published"]) if ago else None,
                "monthChangePoints": json_num(month_change),
                "yearChangePoints": json_num(year_change),
                "caution": bool(now["caution"]),
            }
        )
    if len(rows) < 20:
        raise SystemExit(f"Only {len(rows)} CMA unemployment rates at {reference}")
    rows.sort(key=lambda item: (-item["unemploymentRate"], item["geo"]))
    change_persons = jobs_now["scaled"] - jobs_prev["scaled"]
    payload = {
        "slug": "jobs",
        "retrieved": date.today().isoformat(),
        "referenceMonth": reference,
        "previousMonth": previous,
        "yearAgoMonth": year_ago,
        "releaseDate": rate_now["release"],
        "licence": LICENCE,
        "tables": [
            {**national_table, "role": "national"},
            {**cma_table, "role": "cma"},
        ],
        "adapted": (
            "The employment change is the difference of the published seasonally adjusted "
            "employment estimates. Person counts are the published thousands multiplied by "
            "1,000, the Web Data Service scalar for this series. The change in the "
            "unemployment rate, in percentage points, is the difference of the published rates. "
            "Census metropolitan area rates are the published three-month moving average, "
            "seasonally adjusted. Ottawa-Gatineau provincial parts are omitted because the "
            "table also publishes the combined census metropolitan area."
        ),
        "canada": {
            "employmentThousands": json_num(jobs_now["published"]),
            "employmentPersons": json_num(jobs_now["scaled"]),
            "employmentPreviousPersons": json_num(jobs_prev["scaled"]),
            "employmentChangePersons": json_num(change_persons),
            "unemploymentRate": json_num(rate_now["published"]),
            "unemploymentRatePrevious": json_num(rate_prev["published"]),
            "unemploymentRateYearAgo": json_num(rate_ago["published"]),
            "monthChangePoints": json_num(quantize(rate_now["published"] - rate_prev["published"], 1)),
            "yearChangePoints": json_num(quantize(rate_now["published"] - rate_ago["published"], 1)),
            "symbol": rate_now["symbol"],
        },
        "trend": [
            {"month": month, "value": json_num(unemployment.at(month)["published"])}
            for month in trend_months
        ],
        "rows": rows,
    }
    write_json(RELEASE_DIR / "jobs.json", payload)
    source_national = SOURCE_LINE.format(table=national_table["id"])
    source_cma = SOURCE_LINE.format(table=cma_table["id"])
    def jobs_csv_row(record_type: str, geo: str, month: str, item: dict | None, trend_rate: object = None) -> list[object]:
        if item is None:
            return [record_type, geo, month, trend_rate, None, None, None, None, None, None, None]
        return [
            record_type,
            geo,
            month,
            item["unemploymentRate"],
            item["unemploymentRatePrevious"],
            item["monthChangePoints"],
            item["unemploymentRateYearAgo"],
            item["yearChangePoints"],
            item.get("employmentThousands"),
            item.get("employmentPersons"),
            item.get("employmentChangePersons"),
        ]

    csv_rows = [
        jobs_csv_row("canada", "Canada", reference, payload["canada"]),
        *[jobs_csv_row("cma", item["geo"], reference, item) for item in rows],
        *[
            jobs_csv_row("trend", "Canada", point["month"], None, point["value"])
            for point in payload["trend"]
        ],
    ]
    write_csv(
        PUBLIC_DIR / "jobs.csv",
        [
            "Canadian Data Insights — Labour Force Survey",
            source_national,
            source_cma,
            "Adapted from Statistics Canada. " + payload["adapted"],
            f"Licence: {LICENCE}",
            (
                f"Reference month: {reference}. Released: {rate_now['release']}. "
                f"Retrieved: {payload['retrieved']}."
            ),
            "National employment and the unemployment rate are seasonally adjusted, 15 years and over, all genders, estimates.",
            "CMA unemployment rates are the three-month moving average, seasonally adjusted.",
            "month_change_percentage_points compares the reference month with the previous month. year_change_percentage_points compares it with the same month a year earlier.",
            "employment_persons = employment_thousands × 1,000. Employment columns are blank except on the Canada row.",
        ],
        [
            "record_type",
            "geography",
            "month",
            "unemployment_rate_percent",
            "previous_month_unemployment_rate_percent",
            "month_change_percentage_points",
            "year_ago_unemployment_rate_percent",
            "year_change_percentage_points",
            "employment_thousands",
            "employment_persons",
            "employment_change_persons",
        ],
        csv_rows,
        [source_national, source_cma],
    )
    print(
        f"LFS {reference} released {rate_now['release']} unemployment {payload['canada']['unemploymentRate']}",
        file=sys.stderr,
    )


def ingest_housing() -> None:
    saar_cube = get_cube(34100156)
    starts_cube = get_cube(34100154)
    saar_table = table_meta(saar_cube)
    starts_table = table_meta(starts_cube)
    if saar_table["id"] != "34-10-0156-01" or starts_table["id"] != "34-10-0154-01":
        raise SystemExit(f"Unexpected housing tables {saar_table['id']} {starts_table['id']}")

    saar_unit = member_id(saar_cube, "Type of unit", "Total units")
    canada_id = member_id(saar_cube, "Geography", "Canada")
    (canada_saar,) = load_series(34100156, [coordinate([canada_id, saar_unit])], 26)
    months = sorted(canada_saar.by_month)
    if len(months) < 24:
        raise SystemExit(f"Canada housing SAAR has {len(months)} months")
    trend_months = months[-24:]
    require_consecutive(canada_saar, trend_months)
    reference = trend_months[-1]
    previous = shift_month(reference, -1)
    now = canada_saar.require(reference)
    prev = canada_saar.require(previous)
    if now["scaled"] < Decimal("50000") or now["scaled"] > Decimal("500000"):
        raise SystemExit(f"Canada housing SAAR looks wrong: {now['scaled']} (published {now['published']})")

    starts_estimate = member_id(starts_cube, "Housing estimates", "Housing starts")
    starts_unit = member_id(starts_cube, "Type of unit", "Total units")
    city_names = []
    city_coords = []
    total_name = None
    total_coord = None
    for geo in members(starts_cube, "Geography"):
        name = geo["memberNameEn"].strip()
        coord = coordinate([int(geo["memberId"]), starts_estimate, starts_unit])
        if name == "Census metropolitan areas":
            total_name = name
            total_coord = coord
            continue
        if not is_city(name):
            continue
        city_names.append(name)
        city_coords.append(coord)
    if total_coord is None:
        raise SystemExit("Housing-starts table has no census metropolitan area total")
    loaded = load_series(34100154, [total_coord, *city_coords], 3)
    total_series, city_series = loaded[0], loaded[1:]
    total_now = total_series.at(reference)
    total_prev = total_series.at(previous)
    if total_now is None:
        raise SystemExit(f"CMA housing-starts total missing for {reference}")
    rows = []
    for name, series in zip(city_names, city_series):
        current = series.at(reference)
        if current is None:
            continue
        earlier = series.at(previous)
        if current["scaled"] < 0 or current["scaled"] > Decimal("20000"):
            raise SystemExit(f"{name} housing starts look wrong: {current['scaled']}")
        change = current["scaled"] - earlier["scaled"] if earlier else None
        rows.append(
            {
                "geo": name,
                "starts": json_num(current["scaled"]),
                "previousStarts": json_num(earlier["scaled"]) if earlier else None,
                "change": json_num(change),
                "caution": bool(current["caution"]),
            }
        )
    if len(rows) < 15:
        raise SystemExit(f"Only {len(rows)} CMA housing-starts rows at {reference}")
    rows.sort(key=lambda item: (-(item["starts"] or 0), item["geo"]))
    payload = {
        "slug": "housing-starts",
        "retrieved": date.today().isoformat(),
        "referenceMonth": reference,
        "previousMonth": previous,
        "releaseDate": now["release"],
        "licence": LICENCE,
        "tables": [
            {
                **saar_table,
                "role": "saar",
                "universe": "Housing starts in all centres of 10,000 and over, seasonally adjusted at annual rates",
            },
            {
                **starts_table,
                "role": "starts",
                "universe": "Actual housing starts in selected census metropolitan areas, not seasonally adjusted",
            },
        ],
        "adapted": (
            "The national seasonally adjusted annual rate is the published value multiplied by "
            "1,000, because the Web Data Service reports that series with a scalar factor of "
            "thousands. The month-to-month changes are the differences of those published "
            "figures. Actual census metropolitan area starts are the published unit counts. "
            "Ottawa-Gatineau provincial parts are omitted because the starts table also "
            "publishes the combined census metropolitan area. The national rate covers centres "
            "of 10,000 and over; it is not an all-areas rate and it is not the sum of the "
            "census metropolitan area rows."
        ),
        "canada": {
            "saarUnits": json_num(now["scaled"]),
            "saarPreviousUnits": json_num(prev["scaled"]),
            "saarChangeUnits": json_num(now["scaled"] - prev["scaled"]),
            "publishedThousands": json_num(now["published"]),
            "symbol": now["symbol"],
        },
        "cmaTotal": {
            "geo": total_name,
            "starts": json_num(total_now["scaled"]),
            "previousStarts": json_num(total_prev["scaled"]) if total_prev else None,
            "change": json_num(total_now["scaled"] - total_prev["scaled"]) if total_prev else None,
        },
        "trend": [
            {"month": month, "value": json_num(canada_saar.at(month)["scaled"])}
            for month in trend_months
        ],
        "rows": rows,
    }
    if now["release"] != total_now["release"]:
        raise SystemExit(
            f"Housing release dates disagree: SAAR {now['release']} starts {total_now['release']}"
        )
    write_json(RELEASE_DIR / "housing-starts.json", payload)
    source_saar = SOURCE_LINE.format(table=saar_table["id"])
    source_starts = SOURCE_LINE.format(table=starts_table["id"])
    csv_rows: list[list[object]] = [
        [
            "canada_saar",
            "Canada",
            reference,
            payload["canada"]["saarUnits"],
            payload["canada"]["saarChangeUnits"],
            None,
            None,
            None,
        ],
        [
            "cma_total",
            total_name,
            reference,
            None,
            None,
            payload["cmaTotal"]["starts"],
            payload["cmaTotal"]["previousStarts"],
            payload["cmaTotal"]["change"],
        ],
    ]
    for item in rows:
        csv_rows.append(
            [
                "cma",
                item["geo"],
                reference,
                None,
                None,
                item["starts"],
                item["previousStarts"],
                item["change"],
            ]
        )
    for point in payload["trend"]:
        csv_rows.append(["trend", "Canada", point["month"], point["value"], None, None, None, None])
    write_csv(
        PUBLIC_DIR / "housing-starts.csv",
        [
            "Canadian Data Insights — housing starts",
            source_saar,
            source_starts,
            "Adapted from Statistics Canada. " + payload["adapted"],
            f"Licence: {LICENCE}",
            f"Reference month: {reference}. Released: {now['release']}. Retrieved: {payload['retrieved']}.",
            "saar_units is the seasonally adjusted annual rate for centres of 10,000 and over, in units.",
            "housing_starts is the actual monthly count of total units for that census metropolitan area.",
        ],
        [
            "record_type",
            "geography",
            "month",
            "saar_units",
            "saar_change_units",
            "housing_starts",
            "housing_starts_previous",
            "housing_starts_change",
        ],
        csv_rows,
        [source_saar, source_starts],
    )
    print(
        f"Housing {reference} released {now['release']} SAAR {payload['canada']['saarUnits']}",
        file=sys.stderr,
    )


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--only", choices=("cpi", "jobs", "housing"), help="Refresh one dataset")
    args = parser.parse_args()
    self_check()
    selected = {args.only} if args.only else {"cpi", "jobs", "housing"}
    if "cpi" in selected:
        ingest_cpi()
    if "jobs" in selected:
        ingest_jobs()
    if "housing" in selected:
        ingest_housing()


if __name__ == "__main__":
    main()
