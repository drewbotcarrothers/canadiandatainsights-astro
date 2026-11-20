#!/usr/bin/env python3
"""Refresh the Canadian inflation section from Statistics Canada.

Writes src/data/inflation/inflation.json and the CSV downloads under public/data/.
Figures are copied from the Web Data Service. Suppressed cells stay empty.
Percent changes, approximate contributions, and real-wage changes are calculated
here from the published levels and are labelled as such in the JSON.

Usage:
  python3 scripts/inflation/ingest.py
"""

from __future__ import annotations

import json
import sys
import time
from datetime import date
from decimal import Decimal
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / "scripts"))
sys.path.insert(0, str(ROOT / "scripts" / "release-pages"))

from ingest import (  # noqa: E402
    LICENCE,
    SOURCE_LINE,
    Series,
    json_num,
    load_series,
    member_id,
    members,
    pct,
    quantize,
    self_check,
    shift_month,
    table_meta,
    write_csv,
    write_json,
)
from wds import WdsError, coordinate, get_cube  # noqa: E402

OUT_JSON = ROOT / "src" / "data" / "inflation" / "inflation.json"
PUBLIC = ROOT / "public" / "data"
RELEASE_CPI = ROOT / "src" / "data" / "release" / "cpi.json"

# Months of index needed for a 10-year year-over-year chart, plus one year of lag.
LONG_N = 132
# Current, previous, and year-ago, with one spare month.
SHORT_N = 14
GROCERY_N = 37

PROVINCES = [
    "Newfoundland and Labrador",
    "Prince Edward Island",
    "Nova Scotia",
    "New Brunswick",
    "Quebec",
    "Ontario",
    "Manitoba",
    "Saskatchewan",
    "Alberta",
    "British Columbia",
]
TERRITORIAL = [
    "Whitehorse, Yukon",
    "Yellowknife, Northwest Territories",
    "Iqaluit, Nunavut",
]

# id, published name, group, keep a 10-year history
CANADA_PRODUCTS: list[tuple[str, str, str, bool]] = [
    ("food", "Food", "major", True),
    ("shelter", "Shelter", "major", True),
    ("household", "Household operations, furnishings and equipment", "major", False),
    ("clothing", "Clothing and footwear", "major", False),
    ("transportation", "Transportation", "major", True),
    ("health", "Health and personal care", "major", False),
    ("recreation", "Recreation, education and reading", "major", False),
    ("alcohol", "Alcoholic beverages, tobacco products and recreational cannabis", "major", False),
    ("allItemsExFoodEnergy", "All-items excluding food and energy", "special", True),
    ("allItemsExFood", "All-items excluding food", "special", False),
    ("allItemsExEnergy", "All-items excluding energy", "special", False),
    ("allItemsExGasoline", "All-items excluding gasoline", "special", False),
    ("energy", "Energy", "special", True),
    ("gasoline", "Gasoline", "special", True),
    ("goods", "Goods", "special", False),
    ("services", "Services", "special", True),
    ("foodStores", "Food purchased from stores", "food", True),
    ("foodRestaurants", "Food purchased from restaurants", "food", True),
    ("meat", "Meat", "food", False),
    ("dairyEggs", "Dairy products and eggs", "food", False),
    ("bakery", "Bakery and cereal products (excluding baby food)", "food", False),
    ("fruit", "Fruit, fruit preparations and nuts", "food", False),
    ("vegetables", "Vegetables and vegetable preparations", "food", False),
    ("coffeeTea", "Coffee and tea", "food", False),
    ("rented", "Rented accommodation", "shelter", False),
    ("rent", "Rent", "shelter", True),
    ("owned", "Owned accommodation", "shelter", False),
    ("mortgage", "Mortgage interest cost", "shelter", True),
    ("replacement", "Homeowners' replacement cost", "shelter", False),
    ("propertyTax", "Property taxes and other special charges", "shelter", False),
    ("homeInsurance", "Homeowners' home and mortgage insurance", "shelter", False),
    ("waterFuel", "Water, fuel and electricity", "shelter", False),
    ("electricity", "Electricity", "shelter", False),
    ("naturalGas", "Natural gas", "shelter", False),
    ("fuelOil", "Fuel oil and other fuels", "shelter", False),
]

ANNUAL_PRODUCTS = [
    ("allItems", "All-items"),
    ("food", "Food"),
    ("shelter", "Shelter"),
    ("energy", "Energy"),
    ("rent", "Rent"),
    ("transportation", "Transportation"),
]

CORE_MEASURES = [
    (
        "trim",
        "CPI-trim",
        "Measure of core inflation based on a trimmed mean approach, CPI-trim (year-over-year percent change)",
    ),
    (
        "median",
        "CPI-median",
        "Measure of core inflation based on a weighted median approach, CPI-median (year-over-year percent change)",
    ),
    (
        "common",
        "CPI-common",
        "Measure of core inflation based on a factor model, CPI-common (year-over-year percent change)",
    ),
]

GROCERIES = [
    "Ground beef, per kilogram",
    "Whole chicken, per kilogram",
    "Chicken breasts, per kilogram",
    "Milk, 2 litres",
    "Eggs, 1 dozen",
    "Butter, 454 grams",
    "White bread, 675 grams",
    "White rice, 2 kilograms",
    "Dry or fresh pasta, 500 grams",
    "Apples, per kilogram",
    "Bananas, per kilogram",
    "Potatoes, per kilogram",
    "Tomatoes, per kilogram",
    "Roasted or ground coffee, 340 grams",
]

PLACE_PRODUCTS = [
    ("allItems", "All-items"),
    ("food", "Food"),
    ("shelter", "Shelter"),
    ("transportation", "Transportation"),
    ("energy", "Energy"),
    ("rent", "Rent"),
]


def retry(label: str, func):
    last: Exception | None = None
    for attempt in range(4):
        try:
            return func()
        except (WdsError, TimeoutError, OSError) as exc:
            last = exc
            wait = 2 ** attempt
            print(f"{label} failed ({exc}); retry in {wait}s", file=sys.stderr)
            time.sleep(wait)
    raise SystemExit(f"{label} failed after retries: {last}")


def fetch(product_id: int, specs: list[tuple[str, list[int]]], latest_n: int) -> dict[str, Series]:
    if not specs:
        return {}
    coordinates = [coordinate(member_ids) for _, member_ids in specs]
    loaded = retry(
        f"cube {product_id} n={latest_n} series={len(specs)}",
        lambda: load_series(product_id, coordinates, latest_n),
    )
    return {key: series for (key, _), series in zip(specs, loaded)}


def year_of(month: str) -> int:
    return int(month[:4])


def snapshot(series: Series, month: str) -> dict | None:
    now = series.at(month)
    if now is None:
        return None
    previous = shift_month(month, -1)
    year_ago = shift_month(month, -12)
    prev = series.at(previous)
    ago = series.at(year_ago)
    return {
        "index": json_num(now["published"]),
        "previousIndex": json_num(prev["published"]) if prev else None,
        "yearAgoIndex": json_num(ago["published"]) if ago else None,
        "momPct": json_num(pct(now["published"], prev["published"])) if prev else None,
        "yoyPct": json_num(pct(now["published"], ago["published"])) if ago else None,
        "symbol": now["symbol"],
        "caution": bool(now["caution"]),
    }


def index_history(series: Series, months: list[str]) -> list[dict]:
    rows = []
    for month in months:
        point = series.at(month)
        if point is None:
            rows.append({"month": month, "index": None, "yoyPct": None})
            continue
        ago = series.at(shift_month(month, -12))
        rows.append(
            {
                "month": month,
                "index": json_num(point["published"]),
                "yoyPct": json_num(pct(point["published"], ago["published"])) if ago else None,
            }
        )
    return rows


def value_history(series: Series, months: list[str]) -> list[dict]:
    """History for a series whose published value is already the figure we show."""
    rows = []
    for month in months:
        point = series.at(month)
        rows.append(
            {
                "month": month,
                "value": json_num(point["published"]) if point else None,
            }
        )
    return rows


def require_range(label: str, value: Decimal, low: Decimal, high: Decimal) -> None:
    if not (low <= value <= high):
        raise SystemExit(f"{label} {value} is outside {low}..{high}")


def contribution(weight: Decimal | None, yoy: Decimal | None) -> Decimal | None:
    if weight is None or yoy is None:
        return None
    return quantize(weight * yoy / Decimal(100), 1)


def real_change(latest: Decimal, earlier: Decimal, price_latest: Decimal, price_earlier: Decimal) -> Decimal | None:
    if earlier == 0 or price_earlier == 0 or price_latest == 0:
        return None
    ratio = (latest / earlier) / (price_latest / price_earlier) - 1
    return quantize(ratio * Decimal(100), 1)


def consecutive_months(series: Series, count: int) -> list[str]:
    months = sorted(series.by_month)
    if len(months) < count:
        raise SystemExit(f"{series.title} has {len(months)} months; need {count}")
    chosen = months[-count:]
    for earlier, later in zip(chosen, chosen[1:]):
        if shift_month(earlier, 1) != later:
            raise SystemExit(f"{series.title} has a gap between {earlier} and {later}")
    return chosen


def kind_of(name: str) -> str:
    if name in TERRITORIAL:
        return "territorial"
    if "," in name:
        return "city"
    return "province"


def run() -> None:
    self_check()
    monthly_cube = retry("CPI cube", lambda: get_cube(18100004))
    annual_cube = retry("annual CPI cube", lambda: get_cube(18100005))
    adjusted_cube = retry("seasonally adjusted CPI cube", lambda: get_cube(18100006))
    weight_cube = retry("basket weight cube", lambda: get_cube(18100007))
    core_cube = retry("core CPI cube", lambda: get_cube(18100256))
    price_cube = retry("retail price cube", lambda: get_cube(18100245))
    wage_cube = retry("wage cube", lambda: get_cube(14100063))

    monthly_table = table_meta(monthly_cube)
    annual_table = table_meta(annual_cube)
    adjusted_table = table_meta(adjusted_cube)
    weight_table = table_meta(weight_cube)
    core_table = table_meta(core_cube)
    price_table = table_meta(price_cube)
    wage_table = table_meta(wage_cube)
    for table, expected in (
        (monthly_table, "18-10-0004-01"),
        (annual_table, "18-10-0005-01"),
        (adjusted_table, "18-10-0006-01"),
        (weight_table, "18-10-0007-01"),
        (core_table, "18-10-0256-01"),
        (price_table, "18-10-0245-01"),
        (wage_table, "14-10-0063-01"),
    ):
        if table["id"] != expected:
            raise SystemExit(f"Expected table {expected}, got {table['id']}")

    canada = member_id(monthly_cube, "Geography", "Canada")
    all_items_id = member_id(monthly_cube, "Products and product groups", "All-items")
    all_items = fetch(18100004, [("allItems", [canada, all_items_id])], LONG_N)["allItems"]
    if not all_items.by_month:
        raise SystemExit("Canada all-items CPI is empty")
    months = consecutive_months(all_items, LONG_N)
    reference = months[-1]
    previous = shift_month(reference, -1)
    year_ago = shift_month(reference, -12)
    canada_now = all_items.require(reference)
    require_range("Canada all-items CPI", canada_now["published"], Decimal("100"), Decimal("300"))
    headline = snapshot(all_items, reference)
    assert headline is not None
    if headline["yoyPct"] is None or headline["momPct"] is None:
        raise SystemExit("Canada all-items is missing a 12-month or 1-month change")
    require_range("Canada CPI 12-month change", Decimal(str(headline["yoyPct"])), Decimal("-15"), Decimal("25"))

    if not RELEASE_CPI.exists():
        raise SystemExit(f"Missing {RELEASE_CPI}. Run the CPI release ingest first.")
    release = json.loads(RELEASE_CPI.read_text(encoding="utf-8"))
    if release.get("referenceMonth") != reference or Decimal(str(release["canada"]["index"])) != canada_now["published"]:
        raise SystemExit(
            "The inflation extract does not match src/data/release/cpi.json "
            f"({release.get('referenceMonth')} index {release.get('canada', {}).get('index')} "
            f"vs {reference} index {canada_now['published']}). "
            "Run python3 scripts/release-pages/ingest.py --only cpi first."
        )
    if Decimal(str(release["canada"]["yoyPct"])) != Decimal(str(headline["yoyPct"])):
        raise SystemExit("Canada 12-month change does not match the CPI release page")

    uom = all_items.uom_code
    long_specs = []
    short_specs = []
    product_ids: dict[str, int] = {"allItems": all_items_id}
    for key, name, _group, long in CANADA_PRODUCTS:
        product_ids[key] = member_id(monthly_cube, "Products and product groups", name)
        spec = (key, [canada, product_ids[key]])
        (long_specs if long else short_specs).append(spec)
    long_loaded = fetch(18100004, long_specs, LONG_N)
    short_loaded = fetch(18100004, short_specs, SHORT_N)
    loaded = {**long_loaded, **short_loaded}

    for key, series in loaded.items():
        if series.uom_code != uom:
            raise SystemExit(f"{key} uses UOM {series.uom_code}, not the all-items UOM {uom}")
        if not series.by_month:
            raise SystemExit(f"Canada series {key} is empty")

    # Basket weights: latest link-month weights, distributed to the geography.
    link_prices = member_id(weight_cube, "Price period of weight", "Weight at basket link month prices")
    distribution = member_id(
        weight_cube, "Geographic distribution of weight", "Distribution to selected geographies"
    )
    weight_canada = member_id(weight_cube, "Geography", "Canada")
    weight_names = ["All-items", *[name for _key, name, _group, _long in CANADA_PRODUCTS]]
    weight_specs = []
    weight_keys = []
    for name in weight_names:
        product = member_id(weight_cube, "Products and product groups", name)
        weight_keys.append(name)
        weight_specs.append((name, [weight_canada, product, link_prices, distribution]))
    weight_series = fetch(18100007, weight_specs, 6)
    all_items_weight = weight_series["All-items"]
    if not all_items_weight.by_month:
        raise SystemExit("Canada all-items basket weight is empty")
    weight_month = sorted(all_items_weight.by_month)[-1]
    weight_year = str(year_of(weight_month))
    all_items_weight_value = all_items_weight.require(weight_month)["published"]
    if all_items_weight_value != Decimal("100"):
        raise SystemExit(f"All-items basket weight is {all_items_weight_value}, not 100")

    weights: dict[str, Decimal | None] = {}
    for name in weight_names:
        point = weight_series[name].at(weight_month)
        weights[name] = point["published"] if point else None
    major_weight_sum = Decimal(0)
    for _key, name, group, _long in CANADA_PRODUCTS:
        if group == "major":
            value = weights.get(name)
            if value is None:
                raise SystemExit(f"Missing basket weight for {name}")
            major_weight_sum += value
    if not (Decimal("98") <= major_weight_sum <= Decimal("102")):
        raise SystemExit(f"Eight major basket weights sum to {major_weight_sum}")

    components = []
    for key, name, group, _long in CANADA_PRODUCTS:
        shot = snapshot(loaded[key], reference)
        if shot is None:
            raise SystemExit(f"{name} has no value in {reference}")
        weight = weights.get(name)
        approx = contribution(weight, Decimal(str(shot["yoyPct"])) if shot["yoyPct"] is not None else None)
        if group != "major":
            approx = None
        history_months = months if _long else months[-SHORT_N:]
        components.append(
            {
                "id": key,
                "name": name,
                "group": group,
                "weight": json_num(weight) if weight is not None else None,
                "approxContributionPp": json_num(approx) if approx is not None else None,
                **shot,
                "history": index_history(loaded[key], history_months),
            }
        )

    # Provinces, territorial capitals, and cities.
    geo_ids = {
        item["memberNameEn"].strip(): int(item["memberId"])
        for item in members(monthly_cube, "Geography")
    }
    city_names = [
        name
        for name in geo_ids
        if kind_of(name) == "city"
    ]
    place_names = [*PROVINCES, *TERRITORIAL, *sorted(city_names)]
    for name in place_names:
        if name not in geo_ids:
            raise SystemExit(f"CPI geography {name!r} is not in table 18-10-0004-01")
    place_specs = []
    place_labels = []
    for geo_name in place_names:
        for key, product_name in PLACE_PRODUCTS:
            place_specs.append((f"{geo_name}|{key}", [geo_ids[geo_name], product_ids[key]]))
            place_labels.append((geo_name, key))
    place_loaded = fetch(18100004, place_specs, SHORT_N)

    def place_row(geo_name: str) -> dict:
        products = {}
        for key, _product_name in PLACE_PRODUCTS:
            series = place_loaded[f"{geo_name}|{key}"]
            products[key] = snapshot(series, reference) if series.by_month else None
        return {"geo": geo_name, "kind": kind_of(geo_name), **products}

    provinces = [place_row(name) for name in PROVINCES]
    territorial = [place_row(name) for name in TERRITORIAL]
    cities = [place_row(name) for name in sorted(city_names)]
    if any(row["allItems"] is None or row["allItems"]["yoyPct"] is None for row in provinces):
        raise SystemExit("A province is missing an all-items 12-month change")
    if any(row["allItems"] is None for row in territorial):
        raise SystemExit("A territorial capital is missing the all-items index")
    if len(cities) < 10:
        raise SystemExit(f"Only {len(cities)} CPI cities")

    # Annual averages. All-items back to the start of the table; components for recent decades.
    annual_canada = member_id(annual_cube, "Geography", "Canada")
    annual_ids = {
        key: member_id(annual_cube, "Products and product groups", name) for key, name in ANNUAL_PRODUCTS
    }
    annual_all = fetch(18100005, [("allItems", [annual_canada, annual_ids["allItems"]])], 130)["allItems"]
    annual_rest = fetch(
        18100005,
        [(key, [annual_canada, annual_ids[key]]) for key, _name in ANNUAL_PRODUCTS if key != "allItems"],
        50,
    )
    annual_series = {"allItems": annual_all, **annual_rest}
    if annual_all.uom_code != uom:
        raise SystemExit("Annual all-items UOM does not match the monthly index")
    annual_years = sorted(year_of(month) for month in annual_all.by_month)
    if len(annual_years) < 100:
        raise SystemExit(f"Annual CPI has only {len(annual_years)} years")
    if annual_years[-1] >= year_of(reference):
        raise SystemExit("Annual CPI includes the current reference year; the purchasing-power year list would overlap the latest month")
    by_year: dict[str, dict[int, Decimal]] = {}
    for key, series in annual_series.items():
        by_year[key] = {year_of(month): point["published"] for month, point in series.by_month.items()}
    annual_rows = []
    for year in annual_years:
        row: dict[str, int | float | None] = {"year": year}
        for key in ("allItems", "food", "shelter", "energy", "rent", "transportation"):
            value = by_year[key].get(year)
            prior = by_year[key].get(year - 1)
            row[key] = json_num(value) if value is not None else None
            change = pct(value, prior) if value is not None and prior is not None else None
            row[f"{key}Yoy"] = json_num(change) if change is not None else None
        annual_rows.append(row)

    # Seasonally adjusted all-items, 1-month change calculated from the index.
    sa_canada = member_id(adjusted_cube, "Geography", "Canada")
    sa_all = member_id(adjusted_cube, "Products and product groups", "All-items")
    sa_series = fetch(18100006, [("allItems", [sa_canada, sa_all])], SHORT_N)["allItems"]
    sa_shot = snapshot(sa_series, reference)
    if sa_shot is None or sa_shot["momPct"] is None:
        raise SystemExit(f"Seasonally adjusted all-items is missing {reference}")

    # Bank of Canada core measures. The published cell is already the 12-month percent change.
    core_canada = member_id(core_cube, "Geography", "Canada")
    core_specs = []
    for key, _short, full_name in CORE_MEASURES:
        core_specs.append((key, [core_canada, member_id(core_cube, "Alternative measures", full_name)]))
    core_loaded = fetch(18100256, core_specs, LONG_N)
    core_rows = []
    for key, short_name, full_name in CORE_MEASURES:
        series = core_loaded[key]
        point = series.at(reference)
        if key in {"trim", "median"} and point is None:
            raise SystemExit(f"{short_name} is missing {reference}")
        if point is None:
            core_rows.append(
                {
                    "id": key,
                    "name": short_name,
                    "fullName": full_name,
                    "value": None,
                    "previous": None,
                    "symbol": None,
                    "history": [],
                }
            )
            continue
        require_range(short_name, point["published"], Decimal("-5"), Decimal("30"))
        prev_point = series.at(previous)
        core_rows.append(
            {
                "id": key,
                "name": short_name,
                "fullName": full_name,
                "value": json_num(point["published"]),
                "previous": json_num(prev_point["published"]) if prev_point else None,
                "symbol": point["symbol"],
                "history": value_history(series, months),
            }
        )

    # Retail prices, Canada.
    price_canada = member_id(price_cube, "Geography", "Canada")
    grocery_specs = []
    grocery_found = []
    for name in GROCERIES:
        grocery_specs.append((name, [price_canada, member_id(price_cube, "Products", name)]))
        grocery_found.append(name)
    grocery_loaded = fetch(18100245, grocery_specs, GROCERY_N)
    grocery_months = sorted(
        {month for series in grocery_loaded.values() for month in series.by_month}
    )
    if not grocery_months:
        raise SystemExit("No grocery prices were returned")
    grocery_reference = grocery_months[-1]
    grocery_rows = []
    for name in grocery_found:
        series = grocery_loaded[name]
        point = series.at(grocery_reference)
        if point is None:
            print(f"grocery product missing at {grocery_reference}: {name}", file=sys.stderr)
            continue
        ago = series.at(shift_month(grocery_reference, -12))
        change = pct(point["published"], ago["published"]) if ago else None
        grocery_rows.append(
            {
                "name": name,
                "price": json_num(point["published"]),
                "yearAgoPrice": json_num(ago["published"]) if ago else None,
                "yoyPct": json_num(change) if change is not None else None,
                "symbol": point["symbol"],
                "history": [
                    {
                        "month": month,
                        "price": json_num(series.at(month)["published"]) if series.at(month) else None,
                    }
                    for month in grocery_months[-GROCERY_N:]
                ],
            }
        )
    if len(grocery_rows) < 10:
        raise SystemExit(f"Only {len(grocery_rows)} grocery products at {grocery_reference}")

    # Labour Force Survey wages.
    wage_geo = member_id(wage_cube, "Geography", "Canada")
    hourly_id = member_id(wage_cube, "Wages", "Average hourly wage rate")
    weekly_id = member_id(wage_cube, "Wages", "Average weekly wage rate")
    median_id = member_id(wage_cube, "Wages", "Median hourly wage rate")
    work_id = member_id(wage_cube, "Type of work", "Both full- and part-time employees")
    industry_id = member_id(wage_cube, "North American Industry Classification System (NAICS)", "Total employees, all industries")
    gender_id = member_id(wage_cube, "Gender", "Total - Gender")
    age_id = member_id(wage_cube, "Age group", "15 years and over")

    def wage_coord(geo: int, wage: int) -> list[int]:
        return [geo, wage, work_id, industry_id, gender_id, age_id]

    wage_loaded = fetch(
        14100063,
        [
            ("hourly", wage_coord(wage_geo, hourly_id)),
            ("weekly", wage_coord(wage_geo, weekly_id)),
            ("medianHourly", wage_coord(wage_geo, median_id)),
        ],
        LONG_N,
    )
    for key, low, high in (
        ("hourly", Decimal("15"), Decimal("80")),
        ("weekly", Decimal("400"), Decimal("4000")),
        ("medianHourly", Decimal("15"), Decimal("80")),
    ):
        point = wage_loaded[key].at(reference)
        if point is None:
            raise SystemExit(f"Canada {key} wage is missing {reference}")
        require_range(key, point["published"], low, high)

    def wage_block(key: str) -> dict:
        series = wage_loaded[key]
        now = series.require(reference)
        ago = series.at(year_ago)
        change = pct(now["published"], ago["published"]) if ago else None
        cpi_now = all_items.require(reference)["published"]
        cpi_ago = all_items.at(year_ago)
        real = None
        if ago is not None and cpi_ago is not None and change is not None:
            real = real_change(now["published"], ago["published"], cpi_now, cpi_ago["published"])
        history = []
        for month in months:
            point = series.at(month)
            earlier = series.at(shift_month(month, -12))
            price = all_items.at(month)
            price_earlier = all_items.at(shift_month(month, -12))
            yoy = pct(point["published"], earlier["published"]) if point and earlier else None
            real_yoy = None
            if point and earlier and price and price_earlier and yoy is not None:
                real_yoy = real_change(
                    point["published"], earlier["published"], price["published"], price_earlier["published"]
                )
            history.append(
                {
                    "month": month,
                    "value": json_num(point["published"]) if point else None,
                    "yoyPct": json_num(yoy) if yoy is not None else None,
                    "realYoyPct": json_num(real_yoy) if real_yoy is not None else None,
                }
            )
        return {
            "value": json_num(now["published"]),
            "yearAgo": json_num(ago["published"]) if ago else None,
            "yoyPct": json_num(change) if change is not None else None,
            "realYoyPct": json_num(real) if real is not None else None,
            "symbol": now["symbol"],
            "history": history,
        }

    wage_provinces = []
    province_specs = []
    for name in PROVINCES:
        geo = member_id(wage_cube, "Geography", name)
        province_specs.append((name, wage_coord(geo, hourly_id)))
    province_wages = fetch(14100063, province_specs, SHORT_N)
    for name in PROVINCES:
        series = province_wages[name]
        now = series.at(reference)
        ago = series.at(year_ago)
        if now is None:
            raise SystemExit(f"{name} average hourly wage is missing {reference}")
        change = pct(now["published"], ago["published"]) if ago else None
        wage_provinces.append(
            {
                "geo": name,
                "value": json_num(now["published"]),
                "yearAgo": json_num(ago["published"]) if ago else None,
                "yoyPct": json_num(change) if change is not None else None,
                "symbol": now["symbol"],
            }
        )

    cpi_at_wage = headline["yoyPct"]
    tables = [
        {**monthly_table, "usedFor": "Monthly all-items and component indexes for Canada, provinces, territorial capitals, and cities."},
        {**annual_table, "usedFor": "Annual average all-items index back to the start of the table, used for the long-run chart and the purchasing-power calculator. Recent annual food, shelter, energy, rent, and transportation indexes are included."},
        {**adjusted_table, "usedFor": "Seasonally adjusted all-items index. The 1-month change is calculated here."},
        {**weight_table, "usedFor": f"Latest basket-link-month weights ({weight_year}), distribution to selected geographies. Used as the default shares in the personal calculator and for the approximate contribution of the eight major components."},
        {**core_table, "usedFor": "Published Bank of Canada CPI-trim, CPI-median, and CPI-common year-over-year percent changes. These rates are copied, not recalculated."},
        {**price_table, "usedFor": "Monthly average retail prices for a fixed list of grocery products, Canada."},
        {**wage_table, "usedFor": "Average hourly wage, median hourly wage, and average weekly wage for employees aged 15 and over, both full- and part-time, all industries. Provincial rows are the average hourly wage on the same cut."},
    ]

    payload = {
        "retrieved": date.today().isoformat(),
        "licence": LICENCE,
        "referenceMonth": reference,
        "previousMonth": previous,
        "yearAgoMonth": year_ago,
        "releaseDate": canada_now["release"],
        "indexBase": "2002=100",
        "weightYear": weight_year,
        "weightMonth": weight_month,
        "groceryMonth": grocery_reference,
        "tables": tables,
        "adapted": [
            "12-month and 1-month percent changes on CPI indexes are calculated by Canadian Data Insights from the published index levels. They are not a separate Statistics Canada percent-change series.",
            "The seasonally adjusted 1-month change is calculated the same way from table 18-10-0006-01.",
            "CPI-trim, CPI-median, and CPI-common are the published year-over-year percent changes in table 18-10-0256-01.",
            f"Approximate percentage-point contributions multiply the {weight_year} basket weight by the calculated 12-month component change and divide by 100. They are not Statistics Canada's published contributions, and they are shown only for the eight major components, which partition the basket. Energy, gasoline, goods, and services overlap those components and are not added in.",
            "Real wage changes divide the wage ratio by the all-items CPI ratio over the same 12 months. The result is calculated here.",
            "The purchasing-power calculator multiplies a dollar amount by the latest monthly all-items index and divides by the chosen year's published annual average all-items index. Both indexes are 2002=100.",
            "The personal calculator is a weighted average of the eight published major-component 12-month changes, using either the latest basket weights or shares entered on the page. It is not the official Consumer Price Index.",
        ],
        "headline": {
            **headline,
            "history": index_history(all_items, months),
            "saIndex": sa_shot["index"],
            "saPreviousIndex": sa_shot["previousIndex"],
            "saMomPct": sa_shot["momPct"],
        },
        "core": core_rows,
        "components": components,
        "annual": annual_rows,
        "provinces": provinces,
        "territorial": territorial,
        "cities": cities,
        "groceries": grocery_rows,
        "wages": {
            "referenceMonth": reference,
            "releaseDate": wage_loaded["hourly"].require(reference)["release"],
            "population": "Employees aged 15 and over, both full- and part-time, all industries",
            "hourly": wage_block("hourly"),
            "weekly": wage_block("weekly"),
            "medianHourly": wage_block("medianHourly"),
            "cpiYoyPct": cpi_at_wage,
            "provinces": wage_provinces,
        },
    }

    write_json(OUT_JSON, payload)
    write_csvs(payload, tables)
    trim = next(row["value"] for row in core_rows if row["id"] == "trim")
    median = next(row["value"] for row in core_rows if row["id"] == "median")
    print(
        f"Inflation {reference} CPI {headline['index']} y/y {headline['yoyPct']} "
        f"m/m {headline['momPct']} trim {trim} median {median} "
        f"hourly {payload['wages']['hourly']['value']}",
        file=sys.stderr,
    )


def write_csvs(payload: dict, tables: list[dict]) -> None:
    by_id = {table["id"]: table for table in tables}
    monthly = by_id["18-10-0004-01"]
    annual = by_id["18-10-0005-01"]
    weights = by_id["18-10-0007-01"]
    core = by_id["18-10-0256-01"]
    prices = by_id["18-10-0245-01"]
    wages = by_id["14-10-0063-01"]
    adjusted = by_id["18-10-0006-01"]
    retrieved = payload["retrieved"]
    reference = payload["referenceMonth"]

    def preamble(title: str, source_tables: list[dict], extra: list[str]) -> list[str]:
        lines = [
            f"Canadian Data Insights — {title}",
            *[SOURCE_LINE.format(table=table["id"]) for table in source_tables],
            "Adapted from Statistics Canada. " + " ".join(payload["adapted"]),
            f"Licence: {LICENCE}",
            f"CPI reference month: {reference}. Retrieved: {retrieved}.",
            *extra,
        ]
        return lines

    annual_header = [
        "year",
        "all_items_index",
        "all_items_annual_percent_change",
        "food_index",
        "food_annual_percent_change",
        "shelter_index",
        "shelter_annual_percent_change",
        "energy_index",
        "energy_annual_percent_change",
        "rent_index",
        "rent_annual_percent_change",
        "transportation_index",
        "transportation_annual_percent_change",
    ]
    annual_csv = []
    for row in payload["annual"]:
        annual_csv.append(
            [
                row["year"],
                row["allItems"],
                row["allItemsYoy"],
                row["food"],
                row["foodYoy"],
                row["shelter"],
                row["shelterYoy"],
                row["energy"],
                row["energyYoy"],
                row["rent"],
                row["rentYoy"],
                row["transportation"],
                row["transportationYoy"],
            ]
        )
    write_csv(
        PUBLIC / "inflation-annual.csv",
        preamble(
            "Annual average Consumer Price Index",
            [annual],
            ["Annual percent changes are calculated from the published annual average indexes."],
        ),
        annual_header,
        annual_csv,
        [SOURCE_LINE.format(table=annual["id"])],
    )

    component_rows: list[list[object]] = []
    headline = payload["headline"]
    component_rows.append(
        [
            "latest",
            "headline",
            "allItems",
            "All-items",
            reference,
            headline["index"],
            headline["previousIndex"],
            headline["momPct"],
            headline["yearAgoIndex"],
            headline["yoyPct"],
            100,
            payload["weightYear"],
            None,
        ]
    )
    for row in payload["components"]:
        component_rows.append(
            [
                "latest",
                row["group"],
                row["id"],
                row["name"],
                reference,
                row["index"],
                row["previousIndex"],
                row["momPct"],
                row["yearAgoIndex"],
                row["yoyPct"],
                row["weight"],
                payload["weightYear"],
                row["approxContributionPp"],
            ]
        )
        for point in row["history"]:
            component_rows.append(
                [
                    "history",
                    row["group"],
                    row["id"],
                    row["name"],
                    point["month"],
                    point["index"],
                    None,
                    None,
                    None,
                    point["yoyPct"],
                    row["weight"],
                    payload["weightYear"],
                    None,
                ]
            )
    for point in headline["history"]:
        component_rows.append(
            [
                "history",
                "headline",
                "allItems",
                "All-items",
                point["month"],
                point["index"],
                None,
                None,
                None,
                point["yoyPct"],
                100,
                payload["weightYear"],
                None,
            ]
        )
    write_csv(
        PUBLIC / "inflation-components.csv",
        preamble(
            "CPI components",
            [monthly, weights],
            [
                f"Basket weights are {payload['weightYear']} link-month weights.",
                "approximate_contribution_percentage_points is weight × 12-month change / 100, for the eight major components only.",
                f"Seasonally adjusted all-items index {headline['saIndex']}, 1-month change {headline['saMomPct']}, from table {adjusted['id']}.",
            ],
        ),
        [
            "record_type",
            "group",
            "id",
            "name",
            "month",
            "index_2002_100",
            "previous_month_index",
            "one_month_percent_change",
            "year_ago_index",
            "twelve_month_percent_change",
            "basket_weight_percent",
            "basket_weight_year",
            "approximate_contribution_percentage_points",
        ],
        component_rows,
        [SOURCE_LINE.format(table=monthly["id"]), SOURCE_LINE.format(table=weights["id"])],
    )

    place_rows: list[list[object]] = []
    for group in (payload["provinces"], payload["territorial"], payload["cities"]):
        for row in group:
            for key, label in PLACE_PRODUCTS:
                shot = row.get(key)
                if shot is None:
                    continue
                place_rows.append(
                    [
                        row["kind"],
                        row["geo"],
                        label,
                        reference,
                        shot["index"],
                        shot["momPct"],
                        shot["yoyPct"],
                    ]
                )
    write_csv(
        PUBLIC / "inflation-places.csv",
        preamble(
            "CPI by geography",
            [monthly],
            ["City names are Statistics Canada price-index geographies, which are wider than a municipal boundary."],
        ),
        ["kind", "geography", "product", "month", "index_2002_100", "one_month_percent_change", "twelve_month_percent_change"],
        place_rows,
        [SOURCE_LINE.format(table=monthly["id"])],
    )

    core_rows: list[list[object]] = []
    for row in payload["core"]:
        core_rows.append(["latest", row["id"], row["name"], reference, row["value"]])
        for point in row["history"]:
            if point["value"] is None:
                continue
            core_rows.append(["history", row["id"], row["name"], point["month"], point["value"]])
    write_csv(
        PUBLIC / "inflation-core.csv",
        preamble(
            "Bank of Canada core inflation measures",
            [core],
            ["Values are the published year-over-year percent change, not an index."],
        ),
        ["record_type", "id", "measure", "month", "published_twelve_month_percent_change"],
        core_rows,
        [SOURCE_LINE.format(table=core["id"])],
    )

    grocery_rows: list[list[object]] = []
    for row in payload["groceries"]:
        grocery_rows.append(
            ["latest", row["name"], payload["groceryMonth"], row["price"], row["yearAgoPrice"], row["yoyPct"]]
        )
        for point in row["history"]:
            grocery_rows.append(["history", row["name"], point["month"], point["price"], None, None])
    write_csv(
        PUBLIC / "inflation-groceries.csv",
        preamble(
            "Average retail prices, Canada",
            [prices],
            [f"Latest grocery month in this extract: {payload['groceryMonth']}. 12-month changes are calculated from the published prices."],
        ),
        ["record_type", "product", "month", "price_dollars", "year_ago_price_dollars", "twelve_month_percent_change"],
        grocery_rows,
        [SOURCE_LINE.format(table=prices["id"])],
    )

    wage = payload["wages"]
    wage_rows: list[list[object]] = []
    for measure, block in (
        ("average_hourly_dollars", wage["hourly"]),
        ("median_hourly_dollars", wage["medianHourly"]),
        ("average_weekly_dollars", wage["weekly"]),
    ):
        wage_rows.append(
            [
                "latest",
                "Canada",
                measure,
                wage["referenceMonth"],
                block["value"],
                block["yearAgo"],
                block["yoyPct"],
                wage["cpiYoyPct"],
                block["realYoyPct"],
            ]
        )
        for point in block["history"]:
            wage_rows.append(
                [
                    "history",
                    "Canada",
                    measure,
                    point["month"],
                    point["value"],
                    None,
                    point["yoyPct"],
                    None,
                    point["realYoyPct"],
                ]
            )
    for row in wage["provinces"]:
        wage_rows.append(
            ["latest", row["geo"], "average_hourly_dollars", wage["referenceMonth"], row["value"], row["yearAgo"], row["yoyPct"], None, None]
        )
    write_csv(
        PUBLIC / "inflation-wages.csv",
        preamble(
            "Wages and inflation",
            [wages, monthly],
            [
                "Wages are for employees aged 15 and over, both full- and part-time, all industries, not seasonally adjusted.",
                "real_twelve_month_percent_change divides the wage ratio by the all-items CPI ratio.",
            ],
        ),
        [
            "record_type",
            "geography",
            "measure",
            "month",
            "dollars",
            "year_ago_dollars",
            "twelve_month_percent_change",
            "cpi_twelve_month_percent_change",
            "real_twelve_month_percent_change",
        ],
        wage_rows,
        [SOURCE_LINE.format(table=wages["id"]), SOURCE_LINE.format(table=monthly["id"])],
    )


if __name__ == "__main__":
    run()
