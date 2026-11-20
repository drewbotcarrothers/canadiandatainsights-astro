import inflationFile from '../data/inflation/inflation.json';
import { approximateContribution } from './inflation-calc';
import { formatIndex, formatRefMonth, formatSignedPercentPoints } from './utils';

export const inflation = inflationFile;

export const inflationCsv = {
  annual: '/data/inflation-annual.csv',
  components: '/data/inflation-components.csv',
  places: '/data/inflation-places.csv',
  core: '/data/inflation-core.csv',
  groceries: '/data/inflation-groceries.csv',
  wages: '/data/inflation-wages.csv',
} as const;

export const inflationPages = [
  { href: '/inflation/', label: 'Overview' },
  { href: '/inflation/components/', label: 'Components' },
  { href: '/inflation/places/', label: 'Places' },
  { href: '/inflation/food/', label: 'Food' },
  { href: '/inflation/shelter/', label: 'Shelter' },
  { href: '/inflation/wages/', label: 'Wages' },
  { href: '/inflation/groceries/', label: 'Groceries' },
  { href: '/inflation/purchasing-power/', label: 'Purchasing power' },
  { href: '/inflation/basket/', label: 'Your basket' },
  { href: '/inflation/methodology/', label: 'Methodology' },
] as const;

type ComponentRow = (typeof inflation.components)[number];
type CoreRow = (typeof inflation.core)[number];

export function monthLabel(month: string = inflation.referenceMonth): string {
  return formatRefMonth(month);
}

export function axisLabel(month: string): string {
  const match = /^(\d{4})-(\d{2})$/.exec(month);
  if (!match) return month;
  const date = new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, 1));
  return new Intl.DateTimeFormat('en-CA', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

export function formatDollars(num: number | null | undefined): string {
  if (num == null || Number.isNaN(num)) return '—';
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num);
}

export function formatWeight(num: number | null | undefined): string {
  if (num == null || Number.isNaN(num)) return '—';
  return `${new Intl.NumberFormat('en-CA', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num)}%`;
}

export function formatPp(num: number | null | undefined): string {
  if (num == null || Number.isNaN(num)) return '—';
  const formatted = new Intl.NumberFormat('en-CA', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
    signDisplay: 'exceptZero',
  }).format(num);
  return `${formatted} percentage points`;
}

/** "up 3.1%", "down 1.2%", or "unchanged". */
export function moved(pct: number | null | undefined): string {
  if (pct == null || Number.isNaN(pct)) return 'with no published comparison';
  if (pct === 0) return 'unchanged';
  const amount = formatIndex(Math.abs(pct));
  return pct > 0 ? `up ${amount}%` : `down ${amount}%`;
}

export function joinNames(names: string[]): string {
  if (names.length <= 1) return names[0] ?? '';
  if (names.length === 2) return `${names[0]} and ${names[1]}`;
  if (names.length === 3) return `${names[0]}, ${names[1]}, and ${names[2]}`;
  return `${names[0]}, ${names[1]}, and ${names.length - 2} others`;
}

export function extremes<T>(rows: T[], read: (row: T) => number | null | undefined): { high: T[]; low: T[] } {
  const usable = rows.filter((row) => {
    const value = read(row);
    return value != null && !Number.isNaN(value);
  });
  if (usable.length === 0) return { high: [], low: [] };
  const values = usable.map((row) => read(row) as number);
  const max = Math.max(...values);
  const min = Math.min(...values);
  return {
    high: usable.filter((row) => read(row) === max),
    low: usable.filter((row) => read(row) === min),
  };
}

export function component(id: string): ComponentRow & { yoyPct: number; index: number } {
  const row = inflation.components.find((item) => item.id === id);
  if (!row || row.yoyPct == null || row.index == null) {
    throw new Error(`Inflation component ${id} is missing a published index or 12-month change`);
  }
  return row as ComponentRow & { yoyPct: number; index: number };
}

export function coreMeasure(id: string): CoreRow & { value: number } {
  const row = inflation.core.find((item) => item.id === id);
  if (!row || row.value == null) {
    throw new Error(`Core measure ${id} is missing a published 12-month change`);
  }
  return row as CoreRow & { value: number };
}

export function componentsIn(group: string): ComponentRow[] {
  return inflation.components.filter((row) => row.group === group);
}

export function inflationCoverage(): string {
  return `${inflation.annual[0].year}/${inflation.referenceMonth}`;
}

export function inflationTables(ids: string[]) {
  return ids.map((id) => {
    const table = tableById(id);
    return { name: `${table.id}. ${table.title}`, url: table.url };
  });
}

export function tableById(id: string) {
  const table = inflation.tables.find((item) => item.id === id);
  if (!table) throw new Error(`Missing table ${id} in the inflation extract`);
  return table;
}

export interface ChartPoint {
  label: string;
  value: number | null;
}

export interface ChartSeries {
  name: string;
  color: string;
  points: ChartPoint[];
}

export function alignedYoy(
  specs: { name: string; color: string; history: { month: string; yoyPct: number | null }[] }[]
): ChartSeries[] {
  const months = specs[0].history.filter((point) => point.yoyPct != null).map((point) => point.month);
  if (months.length < 2) {
    throw new Error(`Chart “${specs[0].name}” needs at least two 12-month changes`);
  }
  return specs.map((spec) => {
    const byMonth = new Map(spec.history.map((point) => [point.month, point.yoyPct]));
    return {
      name: spec.name,
      color: spec.color,
      points: months.map((month) => ({ label: axisLabel(month), value: byMonth.get(month) ?? null })),
    };
  });
}

export function alignedAnnual(
  specs: { key: 'allItemsYoy' | 'foodYoy' | 'shelterYoy' | 'energyYoy' | 'rentYoy' | 'transportationYoy'; name: string; color: string }[],
  fromYear: number
): ChartSeries[] {
  const years = inflation.annual
    .filter((row) => row.year >= fromYear && specs.every((spec) => row[spec.key] != null))
    .map((row) => row.year);
  if (years.length < 2) throw new Error('Annual comparison chart has too few years');
  return specs.map((spec) => ({
    name: spec.name,
    color: spec.color,
    points: years.map((year) => {
      const row = inflation.annual.find((item) => item.year === year);
      return { label: String(year), value: (row?.[spec.key] ?? null) as number | null };
    }),
  }));
}

export function annualSeries(
  key: 'allItemsYoy' | 'foodYoy' | 'shelterYoy' | 'energyYoy' | 'rentYoy' | 'transportationYoy',
  fromYear: number,
  name: string,
  color: string
): ChartSeries {
  const points = inflation.annual
    .filter((row) => row.year >= fromYear && row[key] != null)
    .map((row) => ({ label: String(row.year), value: row[key] as number }));
  if (points.length < 2) throw new Error(`Annual chart ${key} has too few years`);
  return { name, color, points };
}

const NAVY = '#003461';
const RED = '#6e000b';
const GREEN = '#1d6a4f';
const BROWN = '#8a5a12';

export const chartColors = { navy: NAVY, red: RED, green: GREEN, brown: BROWN };

export function overviewDescription(): string {
  const file = inflation;
  const month = monthLabel();
  const earlier = monthLabel(file.yearAgoMonth);
  const previous = monthLabel(file.previousMonth);
  const trim = coreMeasure('trim');
  const median = coreMeasure('median');
  return `In ${month}, Canada's all-items Consumer Price Index was ${formatIndex(file.headline.index)} (2002=100), ${moved(file.headline.yoyPct)} from ${earlier} and ${moved(file.headline.momPct)} from ${previous}. CPI-trim was ${moved(trim.value)} and CPI-median was ${moved(median.value)}.`;
}

export function overviewPoints(): string[] {
  const file = inflation;
  const month = monthLabel();
  const previous = monthLabel(file.previousMonth);
  const trim = coreMeasure('trim');
  const median = coreMeasure('median');
  const common = coreMeasure('common');
  const majors = componentsIn('major').filter((row) => row.yoyPct != null);
  const { high, low } = extremes(majors, (row) => row.yoyPct);
  const energy = component('energy');
  const gasoline = component('gasoline');
  const exFoodEnergy = component('allItemsExFoodEnergy');
  const shelter = component('shelter');
  const food = component('food');
  const mortgage = component('mortgage');
  const provinces = file.provinces.filter((row) => row.allItems?.yoyPct != null);
  const provinceSpread = extremes(provinces, (row) => row.allItems?.yoyPct);
  const hourly = file.wages.hourly;
  const points: string[] = [];

  const trimSide = trim.value === file.headline.yoyPct ? 'matching' : trim.value < (file.headline.yoyPct ?? 0) ? 'below' : 'above';
  const medianSide = median.value === file.headline.yoyPct ? 'matching' : median.value < (file.headline.yoyPct ?? 0) ? 'below' : 'above';
  let coreLine = `CPI-trim was ${formatSignedPercentPoints(trim.value)} and CPI-median was ${formatSignedPercentPoints(median.value)} in the 12 months to ${month}. `;
  if (trimSide === medianSide && trimSide !== 'matching') {
    coreLine += `Both are ${trimSide} the all-items rate of ${formatSignedPercentPoints(file.headline.yoyPct)}. `;
  } else if (trim.value === file.headline.yoyPct && median.value === file.headline.yoyPct) {
    coreLine += 'Both match the all-items rate. ';
  } else {
    coreLine += `The all-items rate was ${formatSignedPercentPoints(file.headline.yoyPct)}. `;
  }
  coreLine += `CPI-common was ${formatSignedPercentPoints(common.value)}. These three rates are copied from table ${tableById('18-10-0256-01').id}. They are not recalculated on this site.`;
  points.push(coreLine);

  const saSame = file.headline.saMomPct === file.headline.momPct;
  points.push(
    saSame
      ? `The seasonally adjusted all-items index was ${formatIndex(file.headline.saIndex)}. Its 1-month change, calculated here from table 18-10-0006-01, was also ${formatSignedPercentPoints(file.headline.saMomPct)}.`
      : `The seasonally adjusted all-items index was ${formatIndex(file.headline.saIndex)}. Its 1-month change, calculated here from table 18-10-0006-01, was ${formatSignedPercentPoints(file.headline.saMomPct)}, compared with ${formatSignedPercentPoints(file.headline.momPct)} before seasonal adjustment.`
  );

  if (high[0] && low[0] && high[0].yoyPct != null && low[0].yoyPct != null) {
    const leader = high[0];
    const trailer = low[0];
    let driver = `Among the eight major components, ${joinNames(high.map((row) => row.name))} ${high.length > 1 ? 'were' : 'was'} the fastest, ${moved(leader.yoyPct)}.`;
    if (leader.weight != null && leader.approxContributionPp != null) {
      driver += ` ${leader.name} is ${formatWeight(leader.weight)} of the ${file.weightYear} basket, an approximate contribution of ${formatPp(leader.approxContributionPp)}.`;
    }
    driver += ` The slowest was ${joinNames(low.map((row) => row.name))}, ${moved(trailer.yoyPct)}.`;
    driver += ` Gasoline was ${moved(gasoline.yoyPct)} and energy was ${moved(energy.yoyPct)}. Those indexes overlap the eight components.`;
    if (exFoodEnergy.yoyPct === trim.value) {
      driver += ` All-items excluding food and energy was ${formatSignedPercentPoints(exFoodEnergy.yoyPct)}, the same as CPI-trim.`;
    } else {
      driver += ` All-items excluding food and energy was ${formatSignedPercentPoints(exFoodEnergy.yoyPct)}.`;
    }
    points.push(driver);
  }

  let shelterLine = `Shelter was ${moved(shelter.yoyPct)} and food was ${moved(food.yoyPct)} over the same 12 months.`;
  if (mortgage.yoyPct === 0) {
    shelterLine += ' Mortgage interest cost was unchanged.';
  } else {
    shelterLine += ` Mortgage interest cost was ${moved(mortgage.yoyPct)}.`;
  }
  points.push(shelterLine);

  if (provinceSpread.high[0]?.allItems && provinceSpread.low[0]?.allItems) {
    const highValue = provinceSpread.high[0].allItems.yoyPct;
    const lowValue = provinceSpread.low[0].allItems.yoyPct;
    if (highValue === lowValue) {
      points.push(`Every province's all-items 12-month change was ${formatSignedPercentPoints(highValue)}.`);
    } else {
      points.push(
        `The largest provincial 12-month change was ${formatSignedPercentPoints(highValue)} in ${joinNames(provinceSpread.high.map((row) => row.geo))}. The smallest was ${formatSignedPercentPoints(lowValue)} in ${joinNames(provinceSpread.low.map((row) => row.geo))}.`
      );
    }
  }

  if (hourly.yoyPct != null && hourly.realYoyPct != null && file.wages.cpiYoyPct != null) {
    points.push(
      `Average hourly wages were ${formatDollars(hourly.value)}, ${moved(hourly.yoyPct)} from a year earlier. Consumer prices were ${moved(file.wages.cpiYoyPct)} over those same 12 months, so real average hourly wages, calculated from the two published levels, were ${moved(hourly.realYoyPct)}.`
    );
  }

  const latestAnnual = file.annual[file.annual.length - 1];
  if (latestAnnual?.allItemsYoy != null) {
    points.push(
      `The ${latestAnnual.year} annual average index was ${moved(latestAnnual.allItemsYoy)} from ${latestAnnual.year - 1}. The annual table stops at ${latestAnnual.year}, so that rate is not the ${formatSignedPercentPoints(file.headline.yoyPct)} change in the 12 months to ${month}.`
    );
  }

  if (file.groceryMonth !== file.referenceMonth) {
    const fastest = extremes(file.groceries, (row) => row.yoyPct).high[0];
    if (fastest?.yoyPct != null) {
      points.push(
        `Average retail prices in the grocery tracker are for ${monthLabel(file.groceryMonth)}, one month behind this CPI reference month. In that list, ${fastest.name} was ${moved(fastest.yoyPct)}, to ${formatDollars(fastest.price)}.`
      );
    }
  }

  return points;
}

export function comparedRate(current: number, previous: number | null, previousLabel: string): string {
  if (previous == null) return formatSignedPercentPoints(current);
  if (previous === current) return `${formatSignedPercentPoints(current)}, the same as in ${previousLabel}`;
  return `${formatSignedPercentPoints(current)}, compared with ${formatSignedPercentPoints(previous)} in ${previousLabel}`;
}

export function detailContribution(row: { weight: number | null; yoyPct: number | null }): number | null {
  if (row.weight == null || row.yoyPct == null) return null;
  return approximateContribution(row.weight, row.yoyPct);
}
