/** Purchasing-power and personal-basket math.

Rounding is half away from zero, matching the ingest script's ROUND_HALF_UP
on positive and negative values. These functions do not fetch data.
*/

export function roundHalfAway(value: number, places: number): number {
  if (!Number.isFinite(value)) return Number.NaN;
  const factor = 10 ** places;
  const sign = value < 0 ? -1 : 1;
  return (sign * Math.round(Math.abs(value) * factor)) / factor;
}

export function purchasingPower(amount: number, thenIndex: number, nowIndex: number): number | null {
  if (!Number.isFinite(amount) || amount <= 0 || amount > 1_000_000_000_000) return null;
  if (!Number.isFinite(thenIndex) || thenIndex <= 0) return null;
  if (!Number.isFinite(nowIndex) || nowIndex <= 0) return null;
  return roundHalfAway((amount * nowIndex) / thenIndex, 2);
}

export function totalChangePercent(thenIndex: number, nowIndex: number): number | null {
  if (!Number.isFinite(thenIndex) || thenIndex <= 0) return null;
  if (!Number.isFinite(nowIndex) || nowIndex <= 0) return null;
  return roundHalfAway(((nowIndex - thenIndex) / thenIndex) * 100, 1);
}

export function indexRatio(thenIndex: number, nowIndex: number): number | null {
  if (!Number.isFinite(thenIndex) || thenIndex <= 0) return null;
  if (!Number.isFinite(nowIndex) || nowIndex <= 0) return null;
  return roundHalfAway(nowIndex / thenIndex, 2);
}

export function approximateContribution(weight: number, yoyPct: number): number | null {
  if (!Number.isFinite(weight) || !Number.isFinite(yoyPct)) return null;
  return roundHalfAway((weight * yoyPct) / 100, 1);
}

/** Weighted average of published 12-month changes. Shares are renormalized. */
export function personalRate(items: { yoyPct: number; share: number }[]): number | null {
  const usable = items.filter(
    (item) => Number.isFinite(item.share) && item.share > 0 && Number.isFinite(item.yoyPct)
  );
  const total = usable.reduce((sum, item) => sum + item.share, 0);
  if (total <= 0) return null;
  const raw = usable.reduce((sum, item) => sum + item.share * item.yoyPct, 0) / total;
  return roundHalfAway(raw, 1);
}
