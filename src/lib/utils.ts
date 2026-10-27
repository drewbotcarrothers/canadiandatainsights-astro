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

/** 12-month percent change calculated from two published index levels. */
export function indexChange(
  latest: number | null | undefined,
  earlier: number | null | undefined
): number | null {
  if (
    latest == null ||
    earlier == null ||
    !Number.isFinite(latest) ||
    !Number.isFinite(earlier) ||
    earlier === 0
  ) {
    return null;
  }
  return ((latest - earlier) / earlier) * 100;
}

export function formatIndex(num: number | null | undefined): string {
  if (num == null || Number.isNaN(num)) return '—';
  return new Intl.NumberFormat('en-CA', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(num);
}

export function formatSignedPercentPoints(num: number | null | undefined): string {
  if (num == null || Number.isNaN(num)) return '—';
  const formatted = new Intl.NumberFormat('en-CA', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
    signDisplay: 'exceptZero',
  }).format(num);
  return `${formatted}%`;
}

export function formatPrice(num: number | null | undefined): string {
  if (num == null || Number.isNaN(num)) return '—';
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num);
}

/** `2026-09` → `September 2026` */
export function formatRefMonth(ref: string | null | undefined): string {
  if (!ref) return '—';
  const match = /^(\d{4})-(\d{2})$/.exec(ref);
  if (!match) return ref;
  const date = new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, 1));
  return new Intl.DateTimeFormat('en-CA', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

export function changeClause(change: number | null, earlierLabel: string): string {
  if (change == null) return '';
  const amount = new Intl.NumberFormat('en-CA', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(Math.abs(change));
  if (change > 0) return `, up ${amount}% from ${earlierLabel}`;
  if (change < 0) return `, down ${amount}% from ${earlierLabel}`;
  return `, unchanged from ${earlierLabel}`;
}

/** Simple className join (clsx-style) */
export function cn(...inputs: Array<string | false | null | undefined>): string {
  return inputs.filter(Boolean).join(' ');
}
