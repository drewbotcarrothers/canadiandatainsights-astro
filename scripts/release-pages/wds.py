"""Minimal client for the Statistics Canada Web Data Service.

https://www150.statcan.gc.ca/t1/wds/rest/

Figures returned here are the published series. This module does not fill gaps.
"""

from __future__ import annotations

import json
import urllib.error
import urllib.request
from typing import Any

ROOT = "https://www150.statcan.gc.ca/t1/wds/rest"
USER_AGENT = "CanadianDataInsights/1.0 (release-page ingest; +https://canadiandatainsights.com)"


class WdsError(RuntimeError):
    pass


def _request(url: str, body: Any | None = None, timeout: int = 180) -> Any:
    data = None if body is None else json.dumps(body).encode()
    headers = {"User-Agent": USER_AGENT}
    if data is not None:
        headers["Content-Type"] = "application/json"
    req = urllib.request.Request(url, data=data, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=timeout) as response:
            return json.load(response)
    except urllib.error.HTTPError as exc:
        detail = exc.read().decode("utf-8", errors="replace")[:500]
        raise WdsError(f"HTTP {exc.code} for {url}: {detail}") from exc


def get_code_sets() -> dict[str, Any]:
    payload = _request(f"{ROOT}/getCodeSets")
    if payload.get("status") != "SUCCESS":
        raise WdsError(f"getCodeSets failed: {payload.get('status')}")
    return payload["object"]


def get_cube(product_id: int) -> dict[str, Any]:
    payload = _request(f"{ROOT}/getCubeMetadata", [{"productId": product_id}])
    item = payload[0]
    if item.get("status") != "SUCCESS":
        raise WdsError(f"Cube {product_id} metadata failed: {item.get('object') or item}")
    return item["object"]


def coordinate(member_ids: list[int]) -> str:
    padded = list(member_ids) + [0] * (10 - len(member_ids))
    if len(padded) != 10:
        raise WdsError(f"Coordinate needs at most 10 members, got {member_ids}")
    return ".".join(str(member) for member in padded)


def series_info(product_id: int, coordinates: list[str]) -> list[dict[str, Any]]:
    """Return series info keyed back to the requested coordinates.

    The service does not promise response order, so callers must read `coordinate`.
    """
    found: dict[str, dict[str, Any]] = {}
    step = 80
    for start in range(0, len(coordinates), step):
        chunk = coordinates[start : start + step]
        payload = _request(
            f"{ROOT}/getSeriesInfoFromCubePidCoord",
            [{"productId": product_id, "coordinate": coord} for coord in chunk],
        )
        for item in payload:
            if item.get("status") != "SUCCESS":
                raise WdsError(f"Series info failed for {product_id}: {item}")
            obj = item["object"]
            found[obj["coordinate"]] = obj
    missing = [coord for coord in coordinates if coord not in found]
    if missing:
        raise WdsError(f"Cube {product_id} returned no series for {missing[:5]}")
    return [found[coord] for coord in coordinates]


def data_points(vector_ids: list[int], latest_n: int) -> dict[int, list[dict[str, Any]]]:
    found: dict[int, list[dict[str, Any]]] = {}
    step = 50
    for start in range(0, len(vector_ids), step):
        chunk = vector_ids[start : start + step]
        payload = _request(
            f"{ROOT}/getDataFromVectorsAndLatestNPeriods",
            [{"vectorId": vector_id, "latestN": latest_n} for vector_id in chunk],
        )
        for item in payload:
            if item.get("status") != "SUCCESS":
                raise WdsError(f"Vector data failed: {item}")
            obj = item["object"]
            found[int(obj["vectorId"])] = obj.get("vectorDataPoint") or []
    missing = [vector_id for vector_id in vector_ids if vector_id not in found]
    if missing:
        raise WdsError(f"No data for vectors {missing[:5]}")
    return found
