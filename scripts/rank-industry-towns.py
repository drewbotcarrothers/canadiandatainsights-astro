#!/usr/bin/env python3
"""Rank census subdivisions by 2021 Census industry share.

Shares are published industry counts divided by IND_TOTAL (the labour force
aged 15 and over), rounded to one decimal the same way location pages do
(half away from zero). Census subdivisions only. The headline list is places
with POP_2021 of at least 50,000. The smaller list is 10,000 to 49,999.

Source file: Data/locations.csv
"""

from __future__ import annotations

import csv
import re
import sys
from decimal import Decimal, ROUND_HALF_UP
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CSV_PATH = ROOT / "Data" / "locations.csv"

INDUSTRY_KEYS = (
    "IND_AGRICULTURE",
    "IND_MINING_OIL_GAS",
    "IND_UTILITIES",
    "IND_CONSTRUCTION",
    "IND_MANUFACTURING",
    "IND_WHOLESALE",
    "IND_RETAIL",
    "IND_TRANSPORTATION",
    "IND_INFORMATION_CULTURE",
    "IND_FINANCE_INSURANCE",
    "IND_REAL_ESTATE",
    "IND_PROFESSIONAL_SCIENTIFIC",
    "IND_MANAGEMENT",
    "IND_ADMIN_WASTE",
    "IND_EDUCATION",
    "IND_HEALTHCARE",
    "IND_ARTS_ENTERTAINMENT",
    "IND_ACCOMMODATION_FOOD",
    "IND_OTHER_SERVICES",
    "IND_PUBLIC_ADMIN",
)

FOCUS = (
    "IND_MINING_OIL_GAS",
    "IND_HEALTHCARE",
    "IND_PUBLIC_ADMIN",
)


def generate_slug(name: str) -> str:
    """Match src/lib/locations.ts generateSlug."""
    target = name
    if "," in name:
        parts = name.split(",")
        suffix = parts[1].strip()
        if re.match(r"^(City|Ville|Cité)", suffix, re.I):
            target = parts[0]
    return re.sub(r"[^a-z0-9]+", "-", target.lower()).strip("-")


def as_int(value: str | None) -> int | None:
    if value is None or value == "":
        return None
    return int(float(value))


def share_percent(part: int, total: int) -> float:
    return (part / total) * 100


def format_share(part: int, total: int) -> str:
    """One decimal, half away from zero, matching JS toFixed(1) for these counts."""
    rounded = Decimal(str(share_percent(part, total))).quantize(
        Decimal("0.1"), rounding=ROUND_HALF_UP
    )
    return f"{rounded}%"


def load_places() -> list[dict]:
    places = []
    with CSV_PATH.open(newline="", encoding="utf-8") as handle:
        for row in csv.DictReader(handle):
            if not row.get("GEO_NAME"):
                continue
            place = {
                "name": row["GEO_NAME"],
                "short": row["GEO_NAME"].split(",")[0].strip(),
                "slug": generate_slug(row["GEO_NAME"]),
                "level": row["GEO_LEVEL"],
                "province": row.get("PROVINCE") or "",
                "pop": as_int(row.get("POP_2021")),
                "total": as_int(row.get("IND_TOTAL")),
                "occ_total": as_int(row.get("OCC_TOTAL")),
                "occ_trades": as_int(row.get("OCC_TRADES_TRANSPORT")),
            }
            for key in INDUSTRY_KEYS:
                place[key] = as_int(row.get(key))
            places.append(place)
    return places


def census_subdivisions(places: list[dict]) -> list[dict]:
    return [
        place
        for place in places
        if place["level"] == "Census subdivision" and place["pop"] and place["total"]
    ]


def band(places: list[dict], low: int, high: int | None) -> list[dict]:
    rows = []
    for place in places:
        pop = place["pop"]
        if pop < low:
            continue
        if high is not None and pop > high:
            continue
        rows.append(place)
    return rows


def rank_by(places: list[dict], key: str) -> list[dict]:
    ranked = []
    for place in places:
        part = place[key]
        total = place["total"]
        if part is None or not total:
            continue
        ranked.append(place)
    ranked.sort(
        key=lambda place: (
            -share_percent(place[key], place["total"]),
            -place[key],
            place["name"],
        )
    )
    return ranked


def print_ranking(title: str, ranked: list[dict], key: str, limit: int) -> None:
    print(f"\n{title}")
    for index, place in enumerate(ranked[:limit], start=1):
        part = place[key]
        total = place["total"]
        print(
            f"{index:3}  {format_share(part, total):>6}  "
            f"{part:8,} / {total:<8,}  pop {place['pop']:8,}  "
            f"{place['province'][:22]:22}  {place['short']}"
        )


def main() -> None:
    places = load_places()
    canada = next(place for place in places if place["level"] == "Country")
    csds = census_subdivisions(places)
    big = band(csds, 50000, None)
    mid = band(csds, 10000, 49999)
    print(f"CSDs {len(csds)}  50,000+ {len(big)}  10,000–49,999 {len(mid)}")
    print(
        f"Canada pop {canada['pop']:,}  labour force {canada['total']:,}  "
        f"IND_TOTAL equals OCC_TOTAL: {canada['total'] == canada['occ_total']}"
    )
    for key in FOCUS + ("IND_MANUFACTURING", "IND_AGRICULTURE"):
        print(
            f"  {key} {canada[key]:,}  {format_share(canada[key], canada['total'])}"
        )
    for key in FOCUS:
        print_ranking(f"50,000+ {key}", rank_by(big, key), key, 5)
        print_ranking(f"10,000–49,999 {key}", rank_by(mid, key), key, 5)


if __name__ == "__main__":
    main()
