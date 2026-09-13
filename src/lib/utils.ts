export function formatNumber(num: number | null | undefined): string {
  if (num == null || Number.isNaN(num)) return '—';
  return new Intl.NumberFormat('en-CA').format(num);
}

export function formatPercent(num: number | null | undefined): string {
  if (num == null || Number.isNaN(num)) return '—';
  return new Intl.NumberFormat('en-CA', {
    style: 'percent',
    signDisplay: 'exceptZero',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(num / 100);
}

export function formatCurrency(num: number | null | undefined): string {
  if (num == null || Number.isNaN(num)) return '—';
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    maximumFractionDigits: 0,
  }).format(num);
}

/** Safe part/total percentage string */
export function pct(part: number | null | undefined, total: number | null | undefined): string {
  if (part == null || !total || total === 0) return '—';
  return ((part / total) * 100).toFixed(1) + '%';
}

/** Simple className join (clsx-style) */
export function cn(...inputs: Array<string | false | null | undefined>): string {
  return inputs.filter(Boolean).join(' ');
}
