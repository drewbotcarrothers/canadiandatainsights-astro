import cpiFile from '../data/release/cpi.json';
import jobsFile from '../data/release/jobs.json';
import housingFile from '../data/release/housing-starts.json';
import { changeClause, formatIndex, formatNumber, formatRefMonth, formatSignedPercentPoints } from './utils';

export const cpiRelease = cpiFile;
export const jobsRelease = jobsFile;
export const housingRelease = housingFile;

export const EMBED_HEIGHT = 420;

export function formatReleaseDate(iso: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!match) return iso;
  const date = new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3])));
  return new Intl.DateTimeFormat('en-CA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

export function asOfLine(referenceMonth: string, releaseDate: string): string {
  return `As of ${formatRefMonth(referenceMonth)}, released ${formatReleaseDate(releaseDate)}`;
}

export function formatRate(num: number | null | undefined): string {
  if (num == null || Number.isNaN(num)) return '—';
  return new Intl.NumberFormat('en-CA', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(num);
}

export function formatSignedPoints(num: number | null | undefined): string {
  if (num == null || Number.isNaN(num)) return '—';
  return new Intl.NumberFormat('en-CA', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
    signDisplay: 'exceptZero',
  }).format(num);
}

export function formatSignedNumber(num: number | null | undefined): string {
  if (num == null || Number.isNaN(num)) return '—';
  return new Intl.NumberFormat('en-CA', {
    signDisplay: 'exceptZero',
    maximumFractionDigits: 0,
  }).format(num);
}

export function countMovement(change: number | null | undefined, noun: string): string {
  if (change == null) return 'with no published comparison';
  if (change === 0) return `unchanged`;
  const amount = formatNumber(Math.abs(change));
  return change > 0 ? `up ${amount} ${noun}` : `down ${amount} ${noun}`;
}

function withoutLeadingComma(clause: string): string {
  return clause.startsWith(', ') ? clause.slice(2) : clause;
}

function joinNames(names: string[]): string {
  if (names.length <= 1) return names[0] ?? '';
  if (names.length === 2) return `${names[0]} and ${names[1]}`;
  if (names.length === 3) return `${names[0]}, ${names[1]}, and ${names[2]}`;
  return `${names[0]}, ${names[1]}, and ${names.length - 2} others`;
}

function extremes<T>(rows: T[], read: (row: T) => number | null): { high: T[]; low: T[] } {
  const usable = rows.filter((row) => read(row) != null);
  if (usable.length === 0) return { high: [], low: [] };
  const values = usable.map((row) => read(row) as number);
  const max = Math.max(...values);
  const min = Math.min(...values);
  return {
    high: usable.filter((row) => read(row) === max),
    low: usable.filter((row) => read(row) === min),
  };
}

function symbolNote(symbol: string | null): string {
  if (symbol === 'p') return ' The latest figure is marked preliminary.';
  if (symbol === 'r') return ' The latest figure is marked revised.';
  return '';
}

export function cpiSummary(): string {
  const file = cpiRelease;
  const month = formatRefMonth(file.referenceMonth);
  const yoy = withoutLeadingComma(changeClause(file.canada.yoyPct, formatRefMonth(file.yearAgoMonth)));
  const mom = withoutLeadingComma(changeClause(file.canada.momPct, formatRefMonth(file.previousMonth)));
  const { high, low } = extremes(file.rows, (row) => row.yoyPct);
  let spread = '';
  if (high.length && low.length && high[0].yoyPct === low[0].yoyPct) {
    spread = ` Every provincial and city series in this table shows a 12-month change of ${formatSignedPercentPoints(high[0].yoyPct)}.`;
  } else if (high.length && low.length) {
    spread = ` Across ${file.rows.length} provincial and city series, the largest 12-month change was ${formatSignedPercentPoints(high[0].yoyPct)} in ${joinNames(high.map((row) => row.geo))}, and the smallest was ${formatSignedPercentPoints(low[0].yoyPct)} in ${joinNames(low.map((row) => row.geo))}.`;
  }
  return `In ${month}, the all-items Consumer Price Index for Canada was ${formatIndex(file.canada.index)} (2002=100), ${yoy} and ${mom}. The percent changes are calculated from the published index.${spread}${symbolNote(file.canada.symbol)}`;
}

export function jobsSummary(): string {
  const file = jobsRelease;
  const month = formatRefMonth(file.referenceMonth);
  const earlier = formatRefMonth(file.previousMonth);
  const canada = file.canada;
  const { high, low } = extremes(file.rows, (row) => row.unemploymentRate);
  let spread = '';
  if (high.length && low.length && high[0].unemploymentRate === low[0].unemploymentRate) {
    spread = ` Every census metropolitan area in this table was at ${formatRate(high[0].unemploymentRate)}%.`;
  } else if (high.length && low.length) {
    spread = ` The highest rate was ${formatRate(high[0].unemploymentRate)}% in ${joinNames(high.map((row) => row.geo))}. The lowest was ${formatRate(low[0].unemploymentRate)}% in ${joinNames(low.map((row) => row.geo))}.`;
  }
  return `In ${month}, seasonally adjusted employment in Canada, for people aged 15 and over, was ${formatNumber(canada.employmentPersons)} persons (${formatRate(canada.employmentThousands)} thousand in the source table), ${countMovement(canada.employmentChangePersons, 'persons')} from ${earlier}. The unemployment rate was ${formatRate(canada.unemploymentRate)}%, compared with ${formatRate(canada.unemploymentRatePrevious)}% in ${earlier}. The difference is ${formatSignedPoints(canada.monthChangePoints)} percentage points.${spread}${symbolNote(canada.symbol)}`;
}

export function housingSummary(): string {
  const file = housingRelease;
  const month = formatRefMonth(file.referenceMonth);
  const earlier = formatRefMonth(file.previousMonth);
  const canada = file.canada;
  const total = file.cmaTotal;
  const { high, low } = extremes(file.rows, (row) => row.starts);
  let spread = '';
  if (high.length && low.length) {
    spread = ` Among ${file.rows.length} census metropolitan areas, actual starts were highest in ${joinNames(high.map((row) => row.geo))} at ${formatNumber(high[0].starts)} and lowest in ${joinNames(low.map((row) => row.geo))} at ${formatNumber(low[0].starts)}.`;
  }
  return `In ${month}, the seasonally adjusted annual rate of housing starts in centres of 10,000 and over was ${formatNumber(canada.saarUnits)} units, ${countMovement(canada.saarChangeUnits, 'units')} from ${earlier}. The published total for selected census metropolitan areas was ${formatNumber(total.starts)} actual starts, ${countMovement(total.change, 'units')} from ${earlier}.${spread}${symbolNote(canada.symbol)}`;
}

export function embedSnippet(slug: string, title: string): string {
  return `<iframe src="https://canadiandatainsights.com/embed/${slug}/" width="100%" height="${EMBED_HEIGHT}" loading="lazy" title="${title}"></iframe>\n<p>Chart: <a href="https://canadiandatainsights.com/data/${slug}/">Canadian Data Insights</a>. Source: Statistics Canada.</p>`;
}

export function chartAxisLabel(month: string): string {
  const match = /^(\d{4})-(\d{2})$/.exec(month);
  if (!match) return month;
  const date = new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, 1));
  return new Intl.DateTimeFormat('en-CA', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

export const cpiChartTitle = 'Canada all-items Consumer Price Index, last 24 months';
export const jobsChartTitle = 'Canada unemployment rate, seasonally adjusted, last 24 months';
export const housingChartTitle =
  'Canada housing starts, seasonally adjusted annual rate, centres of 10,000 and over, last 24 months';
