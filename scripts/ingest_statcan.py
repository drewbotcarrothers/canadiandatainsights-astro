#!/usr/bin/env python3
"""Refresh housing and price extracts from Statistics Canada open data.

Downloads (or reuses) the official CSV zip files and writes compact JSON the
site builds from. Values are copied from the published tables. Empty cells and
suppression symbols (.., ..., x, F) become null. Nothing is estimated.

Tables:
  98-10-0252-01  Shelter-cost-to-income ratio by tenure (Census 2021)
  98-10-0253-01  Shelter cost by tenure (Census 2021)
  18-10-0004-01  Consumer Price Index, monthly, not seasonally adjusted
  18-10-0245-01  Monthly average retail prices for selected products

Usage:
  python3 scripts/ingest_statcan.py
  python3 scripts/ingest_statcan.py --cache /tmp/statcan/zips
"""

from __future__ import annotations

import argparse
import csv
import io
import json
import sys
import zipfile
from datetime import date
from pathlib import Path
from urllib.request import urlopen

csv.field_size_limit(10 * 1024 * 1024)

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "src" / "data" / "statcan"

ZIPS = {
    "98100252-eng.zip": "https://www150.statcan.gc.ca/n1/tbl/csv/98100252-eng.zip",
    "98100253-eng.zip": "https://www150.statcan.gc.ca/n1/tbl/csv/98100253-eng.zip",
    "18100004-eng.zip": "https://www150.statcan.gc.ca/n1/tbl/csv/18100004-eng.zip",
    "18100245-eng.zip": "https://www150.statcan.gc.ca/n1/tbl/csv/18100245-eng.zip",
}

# Grocery staples, in display order. Names must match the published product labels.
BASKET = [
    "Ground beef, per kilogram",
    "Whole chicken, per kilogram",
    "Chicken breasts, per kilogram",
    "Milk, 2 litres",
    "Eggs, 1 dozen",
    "White bread, 675 grams",
    "Butter, 454 grams",
    "Apples, per kilogram",
    "Bananas, per kilogram",
    "Potatoes, per kilogram",
    "Tomatoes, per kilogram",
    "White rice, 2 kilograms",
    "Dry or fresh pasta, 500 grams",
    "Roasted or ground coffee, 340 grams",
]
COMPARISON_PRODUCTS = [
    "Ground beef, per kilogram",
    "Milk, 2 litres",
    "Eggs, 1 dozen",
    "White bread, 675 grams",
]

SHELTER_BANDS = [
    "Less than $500",
    "$500 to $749",
    "$750 to $999",
    "$1,000 to $1,249",
    "$1,250 to $1,499",
    "$1,500 to $1,999",
    "$2,000 to $2,499",
    "$2,500 to $2,999",
    "$3,000 and over",
]

SUPPRESSED = {"..", "...", "x", "X", "F"}

TENURE_0252 = {1: "total", 2: "owner", 3: "renter"}
TENURE_0253 = {
    1: "total",
    2: "owner",
    3: "withMortgage",
    4: "withoutMortgage",
    5: "renter",
    6: "subsidized",
    7: "notSubsidized",
}


def download(url: str, dest: Path) -> None:
    print(f"downloading {url}", file=sys.stderr)
    dest.parent.mkdir(parents=True, exist_ok=True)
    with urlopen(url) as response, dest.open("wb") as handle:
        while True:
            chunk = response.read(1024 * 1024)
            if not chunk:
                break
            handle.write(chunk)


def zip_path(cache: Path, name: str) -> Path:
    path = cache / name
    if not path.exists():
        download(ZIPS[name], path)
    return path


def parse_cell(value: str, symbol: str):
    symbol = (symbol or "").strip()
    value = (value or "").strip()
    if value == "" or symbol in SUPPRESSED:
        return None
    number = float(value)
    if number.is_integer():
        return int(number)
    return round(number, 2)


def header_index(header: list[str], name: str) -> int:
    try:
        return header.index(name)
    except ValueError as exc:
        raise SystemExit(f"Missing column {name!r}") from exc


def tenure_pairs(header: list[str], mapping: dict[int, str]) -> list[tuple[str, int, int]]:
    pairs: list[tuple[str, int, int]] = []
    for index, name in enumerate(header):
        if "[" not in name or not name.endswith("]"):
            continue
        bracket = name[name.rfind("[") + 1 : -1]
        if not bracket.isdigit():
            continue
        key = mapping.get(int(bracket))
        if key is None:
            continue
        if index + 1 >= len(header) or header[index + 1] != "Symbol":
            raise SystemExit(f"Expected a Symbol column after {name!r}")
        pairs.append((key, index, index + 1))
    if len(pairs) != len(mapping):
        raise SystemExit(f"Tenure columns incomplete: found {pairs}")
    return pairs


def read_values(row: list[str], pairs: list[tuple[str, int, int]]) -> dict[str, int | float | None]:
    return {key: parse_cell(row[value_i], row[symbol_i]) for key, value_i, symbol_i in pairs}


def blank_housing(geo: str, dguid: str) -> dict:
    record = {
        "geo": geo,
        "dguid": dguid,
        "households": None,
        "owner": None,
        "renter": None,
        "spendUnder30": None,
        "spend30Plus": None,
        "spendNotApplicable": None,
        "ownerSpendUnder30": None,
        "ownerSpend30Plus": None,
        "ownerSpendNotApplicable": None,
        "renterSpendUnder30": None,
        "renterSpend30Plus": None,
        "renterSpendNotApplicable": None,
        "ownerWithMortgage": None,
        "ownerWithoutMortgage": None,
        "renterSubsidized": None,
        "renterNotSubsidized": None,
        "averageShelter": None,
        "medianShelter": None,
        "ownerAverageShelter": None,
        "ownerMedianShelter": None,
        "renterAverageShelter": None,
        "renterMedianShelter": None,
        "mortgageAverageShelter": None,
        "mortgageMedianShelter": None,
        "noMortgageAverageShelter": None,
        "noMortgageMedianShelter": None,
        "subsidizedAverageShelter": None,
        "subsidizedMedianShelter": None,
        "notSubsidizedAverageShelter": None,
        "notSubsidizedMedianShelter": None,
        "shelterBands": [
            {"label": label, "households": None, "owner": None, "renter": None}
            for label in SHELTER_BANDS
        ],
    }
    return record


def ingest_0252(path: Path, geos: dict[str, dict]) -> None:
    print("reading 98-10-0252-01", file=sys.stderr)
    with zipfile.ZipFile(path) as archive:
        with archive.open("98100252.csv") as raw:
            text = io.TextIOWrapper(raw, encoding="utf-8-sig", newline="")
            header = next(csv.reader([text.readline()]))
            geo_i = header_index(header, "GEO")
            dguid_i = header_index(header, "DGUID")
            income_i = header_index(header, "Household total income groups (14)")
            hh_i = header_index(header, "Household type including census family structure (16)")
            suit_i = header_index(header, "Housing suitability (3)")
            cond_i = header_index(header, "Dwelling condition (3)")
            stat_i = header_index(header, "Statistics (3C)")
            stir_i = header_index(header, "Shelter-cost-to-income ratio (5)")
            pairs = tenure_pairs(header, TENURE_0252)
            seen = 0
            for line_no, line in enumerate(text, start=2):
                if line_no % 2_000_000 == 0:
                    print(f"  0252 line {line_no}", file=sys.stderr)
                if "Number of private households" not in line:
                    continue
                if "Total - Total income of household" not in line:
                    continue
                if "Total - Housing suitability" not in line:
                    continue
                row = next(csv.reader([line]))
                if row[stat_i] != "Number of private households":
                    continue
                if row[income_i] != "Total - Total income of household":
                    continue
                if not row[hh_i].startswith("Total - Household type"):
                    continue
                if not row[suit_i].startswith("Total - Housing suitability"):
                    continue
                if not row[cond_i].startswith("Total - Dwelling condition"):
                    continue
                stir = row[stir_i]
                if stir not in {
                    "Total - Shelter-cost-to-income ratio",
                    "Spending less than 30% of income on shelter costs",
                    "Spending 30% or more of income on shelter costs",
                    "Not applicable",
                }:
                    continue
                geo = row[geo_i]
                record = geos.get(geo)
                if record is None:
                    record = blank_housing(geo, row[dguid_i])
                    geos[geo] = record
                values = read_values(row, pairs)
                if stir.startswith("Total - Shelter-cost"):
                    record["households"] = values["total"]
                    record["owner"] = values["owner"]
                    record["renter"] = values["renter"]
                elif stir.startswith("Spending less than 30%"):
                    record["spendUnder30"] = values["total"]
                    record["ownerSpendUnder30"] = values["owner"]
                    record["renterSpendUnder30"] = values["renter"]
                elif stir.startswith("Spending 30% or more"):
                    record["spend30Plus"] = values["total"]
                    record["ownerSpend30Plus"] = values["owner"]
                    record["renterSpend30Plus"] = values["renter"]
                else:
                    record["spendNotApplicable"] = values["total"]
                    record["ownerSpendNotApplicable"] = values["owner"]
                    record["renterSpendNotApplicable"] = values["renter"]
                seen += 1
            print(f"  0252 kept {seen} rows, {len(geos)} geos", file=sys.stderr)


def ingest_0253(path: Path, geos: dict[str, dict]) -> None:
    print("reading 98-10-0253-01", file=sys.stderr)
    band_index = {label: index for index, label in enumerate(SHELTER_BANDS)}
    with zipfile.ZipFile(path) as archive:
        with archive.open("98100253.csv") as raw:
            text = io.TextIOWrapper(raw, encoding="utf-8-sig", newline="")
            header = next(csv.reader([text.readline()]))
            geo_i = header_index(header, "GEO")
            dguid_i = header_index(header, "DGUID")
            stir_i = header_index(header, "Shelter-cost-to-income ratio (9)")
            hh_i = header_index(header, "Household type including census family structure (16)")
            stat_i = header_index(header, "Statistics (3C)")
            income_i = header_index(header, "Household total income groups (14)")
            cost_i = header_index(header, "Shelter cost (12)")
            pairs = tenure_pairs(header, TENURE_0253)
            seen = 0
            for line_no, line in enumerate(text, start=2):
                if line_no % 2_000_000 == 0:
                    print(f"  0253 line {line_no}", file=sys.stderr)
                if "Number of private households" not in line:
                    continue
                if "Total - Total income of household" not in line:
                    continue
                if "Total - Shelter-cost-to-income ratio" not in line:
                    continue
                row = next(csv.reader([line]))
                if row[stat_i] != "Number of private households":
                    continue
                if row[income_i] != "Total - Total income of household":
                    continue
                if row[stir_i] != "Total - Shelter-cost-to-income ratio":
                    continue
                if not row[hh_i].startswith("Total - Household type"):
                    continue
                cost = row[cost_i]
                geo = row[geo_i]
                record = geos.get(geo)
                if record is None:
                    record = blank_housing(geo, row[dguid_i])
                    geos[geo] = record
                values = read_values(row, pairs)
                if cost == "Average shelter cost":
                    record["averageShelter"] = values["total"]
                    record["ownerAverageShelter"] = values["owner"]
                    record["renterAverageShelter"] = values["renter"]
                    record["mortgageAverageShelter"] = values["withMortgage"]
                    record["noMortgageAverageShelter"] = values["withoutMortgage"]
                    record["subsidizedAverageShelter"] = values["subsidized"]
                    record["notSubsidizedAverageShelter"] = values["notSubsidized"]
                elif cost == "Median shelter cost":
                    record["medianShelter"] = values["total"]
                    record["ownerMedianShelter"] = values["owner"]
                    record["renterMedianShelter"] = values["renter"]
                    record["mortgageMedianShelter"] = values["withMortgage"]
                    record["noMortgageMedianShelter"] = values["withoutMortgage"]
                    record["subsidizedMedianShelter"] = values["subsidized"]
                    record["notSubsidizedMedianShelter"] = values["notSubsidized"]
                elif cost == "Total - Shelter cost":
                    record["ownerWithMortgage"] = values["withMortgage"]
                    record["ownerWithoutMortgage"] = values["withoutMortgage"]
                    record["renterSubsidized"] = values["subsidized"]
                    record["renterNotSubsidized"] = values["notSubsidized"]
                elif cost in band_index:
                    band = record["shelterBands"][band_index[cost]]
                    band["households"] = values["total"]
                    band["owner"] = values["owner"]
                    band["renter"] = values["renter"]
                else:
                    continue
                seen += 1
            print(f"  0253 kept {seen} rows", file=sys.stderr)


def year_ago(ref: str) -> str:
    year, month = ref.split("-")
    return f"{int(year) - 1}-{month}"


def ingest_cpi(path: Path) -> dict:
    print("reading 18-10-0004-01", file=sys.stderr)
    series: dict[tuple[str, str], dict[str, float]] = {}
    dguids: dict[str, str] = {}
    with zipfile.ZipFile(path) as archive:
        with archive.open("18100004.csv") as raw:
            text = io.TextIOWrapper(raw, encoding="utf-8-sig", newline="")
            reader = csv.DictReader(text)
            for row in reader:
                product = row["Products and product groups"]
                if product not in {"All-items", "Food"}:
                    continue
                if row["UOM"] != "2002=100":
                    continue
                if (row.get("TERMINATED") or "").strip():
                    continue
                if (row.get("STATUS") or "").strip() not in {"", "e", "E", "r"}:
                    continue
                if not (row.get("VALUE") or "").strip():
                    continue
                geo = row["GEO"]
                dguids[geo] = row["DGUID"]
                series.setdefault((geo, product), {})[row["REF_DATE"]] = float(row["VALUE"])

    geos = []
    latest_month = ""
    for geo in sorted(set(dguids)):
        all_items = series.get((geo, "All-items"), {})
        food = series.get((geo, "Food"), {})
        if not all_items:
            continue
        ref = max(all_items)
        latest_month = max(latest_month, ref)
        ago = year_ago(ref)
        food_ref = max(food) if food else None
        geos.append(
            {
                "geo": geo,
                "dguid": dguids[geo],
                "refDate": ref,
                "allItems": round(all_items[ref], 1),
                "allItemsYearAgo": round(all_items[ago], 1) if ago in all_items else None,
                "food": round(food[food_ref], 1) if food_ref else None,
                "foodRefDate": food_ref,
                "foodYearAgo": (
                    round(food[year_ago(food_ref)], 1)
                    if food_ref and year_ago(food_ref) in food
                    else None
                ),
            }
        )
    # Keep one reference month: the newest all-items month, which should be shared.
    shared = [item for item in geos if item["refDate"] == latest_month]
    print(f"  CPI geos {len(shared)} at {latest_month}", file=sys.stderr)
    return {
        "retrieved": date.today().isoformat(),
        "table": {
            "id": "18-10-0004-01",
            "title": "Consumer Price Index, monthly, not seasonally adjusted",
            "url": "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1810000401",
            "uom": "2002=100",
        },
        "referenceMonth": latest_month,
        "comparisonMonth": year_ago(latest_month),
        "geographies": shared,
    }


def ingest_food(path: Path) -> dict:
    print("reading 18-10-0245-01", file=sys.stderr)
    wanted = set(BASKET)
    latest: dict[tuple[str, str], tuple[str, float]] = {}
    with zipfile.ZipFile(path) as archive:
        with archive.open("18100245.csv") as raw:
            text = io.TextIOWrapper(raw, encoding="utf-8-sig", newline="")
            reader = csv.DictReader(text)
            for row in reader:
                product = (row["Products"] or "").strip()
                if product not in wanted:
                    continue
                if (row.get("STATUS") or "").strip() not in {"", "e", "E", "r"}:
                    continue
                if not (row.get("VALUE") or "").strip():
                    continue
                if (row.get("UOM") or "") != "Dollars":
                    continue
                key = (row["GEO"], product)
                ref = row["REF_DATE"]
                price = round(float(row["VALUE"]), 2)
                current = latest.get(key)
                if current is None or ref > current[0]:
                    latest[key] = (ref, price)

    present = [product for product in BASKET if ("Canada", product) in latest]
    missing = [product for product in BASKET if product not in present]
    if missing:
        print(f"  basket products missing for Canada: {missing}", file=sys.stderr)
    rows = [
        {"geo": geo, "product": product, "refDate": ref, "price": price}
        for (geo, product), (ref, price) in sorted(latest.items())
        if product in present
    ]
    print(f"  food rows {len(rows)} products {len(present)}", file=sys.stderr)
    return {
        "retrieved": date.today().isoformat(),
        "table": {
            "id": "18-10-0245-01",
            "title": "Monthly average retail prices for selected products",
            "url": "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1810024501",
            "uom": "Dollars",
        },
        "products": present,
        "comparisonProducts": [product for product in COMPARISON_PRODUCTS if product in present],
        "rows": rows,
    }


def assert_canada(geos: dict[str, dict], cpi: dict, food: dict) -> None:
    canada = geos["Canada"]
    expectations = {
        "households": 14_744_570,
        "owner": 9_807_720,
        "renter": 4_936_850,
        "spend30Plus": 3_074_715,
        "ownerSpend30Plus": 1_450_000,
        "renterSpend30Plus": 1_624_715,
        "averageShelter": 1402,
        "ownerAverageShelter": 1498,
        "renterAverageShelter": 1209,
        "ownerWithMortgage": 5_881_675,
        "ownerWithoutMortgage": 3_926_045,
        "renterSubsidized": 579_190,
        "renterNotSubsidized": 4_357_660,
    }
    for key, expected in expectations.items():
        if canada[key] != expected:
            raise SystemExit(f"Canada {key} is {canada[key]!r}, expected {expected}")
    if not isinstance(canada["medianShelter"], int) or not 800 <= canada["medianShelter"] <= 4000:
        raise SystemExit(f"Canada median shelter looks wrong: {canada['medianShelter']!r}")
    band_sum = sum(band["households"] or 0 for band in canada["shelterBands"])
    if abs(band_sum - canada["households"]) > 50:
        raise SystemExit(f"Canada shelter bands sum to {band_sum}, households {canada['households']}")
    if len(geos) < 160:
        raise SystemExit(f"Expected about 166 housing geographies, found {len(geos)}")

    canada_cpi = next(item for item in cpi["geographies"] if item["geo"] == "Canada")
    if canada_cpi["allItems"] is None or canada_cpi["allItemsYearAgo"] is None:
        raise SystemExit(f"Canada CPI incomplete: {canada_cpi}")
    if not 120 <= canada_cpi["allItems"] <= 220:
        raise SystemExit(f"Canada CPI out of range: {canada_cpi['allItems']}")
    if canada_cpi["food"] is None:
        raise SystemExit("Canada food CPI missing")

    if len(food["products"]) < 8:
        raise SystemExit(f"Too few grocery products: {food['products']}")
    milk = next(row for row in food["rows"] if row["geo"] == "Canada" and row["product"] == "Milk, 2 litres")
    if not 1 <= milk["price"] <= 20:
        raise SystemExit(f"Milk price looks wrong: {milk}")

    print("Canada housing median shelter", canada["medianShelter"], file=sys.stderr)
    print("Canada CPI", canada_cpi["refDate"], canada_cpi["allItems"], "year ago", canada_cpi["allItemsYearAgo"], file=sys.stderr)
    print("Canada food CPI", canada_cpi["foodRefDate"], canada_cpi["food"], file=sys.stderr)
    print("Canada milk", milk["refDate"], milk["price"], file=sys.stderr)


def write_json(path: Path, payload: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_suffix(path.suffix + ".tmp")
    temporary.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    temporary.replace(path)
    print(f"wrote {path} ({path.stat().st_size} bytes)", file=sys.stderr)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--cache", type=Path, default=ROOT / ".cache" / "statcan")
    args = parser.parse_args()
    args.cache.mkdir(parents=True, exist_ok=True)

    geos: dict[str, dict] = {}
    ingest_0252(zip_path(args.cache, "98100252-eng.zip"), geos)
    ingest_0253(zip_path(args.cache, "98100253-eng.zip"), geos)
    cpi = ingest_cpi(zip_path(args.cache, "18100004-eng.zip"))
    food = ingest_food(zip_path(args.cache, "18100245-eng.zip"))
    assert_canada(geos, cpi, food)

    housing = {
        "retrieved": date.today().isoformat(),
        "reference": "2021",
        "tables": [
            {
                "id": "98-10-0252-01",
                "title": "Shelter-cost-to-income ratio by tenure: Canada, provinces and territories, census metropolitan areas and census agglomerations",
                "url": "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=9810025201",
            },
            {
                "id": "98-10-0253-01",
                "title": "Shelter cost by tenure including presence of mortgage payments and subsidized housing: Canada, provinces and territories, census metropolitan areas and census agglomerations",
                "url": "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=9810025301",
            },
        ],
        "geographies": [geos[name] for name in sorted(geos)],
    }
    write_json(OUT_DIR / "housing.json", housing)
    write_json(OUT_DIR / "cpi.json", cpi)
    write_json(OUT_DIR / "food-prices.json", food)


if __name__ == "__main__":
    main()
