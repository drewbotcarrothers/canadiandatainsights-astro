import { formatCurrency, formatNumber, formatPercent } from './utils';

/** Visible title length before the site brand suffix. Province titles follow a fixed pattern. */
const CITY_TITLE_MAX = 65;

export function possessiveName(name: string): string {
  return /s$/i.test(name) ? `${name}'` : `${name}'s`;
}

/** "up 7.6% since 2016" / "down 1.8% since 2016" / "unchanged since 2016". */
export function growthSince2016(growthPct: number | null | undefined): string | null {
  if (growthPct == null || Number.isNaN(Number(growthPct))) return null;
  const n = Number(growthPct);
  if (n === 0) return 'unchanged since 2016';
  const abs = formatPercent(Math.abs(n)).replace(/^\+/, '');
  return n > 0 ? `up ${abs} since 2016` : `down ${abs} since 2016`;
}

function growthParen(growthPct: number | null | undefined): string {
  if (growthPct == null || Number.isNaN(Number(growthPct))) return '';
  return ` (${formatPercent(Number(growthPct))})`;
}

/**
 * Province/territory document title (brand suffix is added by the layout).
 * Pattern: "{Name} Population: {pop} (+{growth}%) – Cities & Demographics".
 */
export function provincePageTitle(
  name: string,
  population: number | null | undefined,
  growthPct: number | null | undefined
): string {
  return `${name} Population: ${formatNumber(population)}${growthParen(growthPct)} – Cities & Demographics`;
}

/**
 * City and other location titles. Leads with "{Name} Population: {pop}".
 * Drops the growth and "Demographics" tails when the full pattern would run past ~65 characters.
 */
export function placePageTitle(
  name: string,
  population: number | null | undefined,
  growthPct: number | null | undefined
): string {
  const pop = formatNumber(population);
  const lead = `${name} Population: ${pop}`;
  const withGrowth = `${lead}${growthParen(growthPct)}`;
  const full = `${withGrowth} – Demographics`;
  if (full.length <= CITY_TITLE_MAX) return full;
  if (withGrowth.length <= CITY_TITLE_MAX) return withGrowth;
  return lead;
}

export function placeMetaDescription(opts: {
  name: string;
  population: number | null | undefined;
  growthPct: number | null | undefined;
  medianIncome?: number | null;
  seoSummary?: string | null;
}): string {
  const pop = formatNumber(opts.population);
  const growth = growthSince2016(opts.growthPct);
  const lead = growth
    ? `${possessiveName(opts.name)} population is ${pop}, ${growth}.`
    : `${possessiveName(opts.name)} population is ${pop}.`;
  const bits = [lead];
  if (opts.medianIncome != null && Number.isFinite(opts.medianIncome) && opts.medianIncome > 0) {
    bits.push(`Median household income is ${formatCurrency(opts.medianIncome)}.`);
  }
  const summary = opts.seoSummary?.trim();
  bits.push(summary || 'Explore households, employment, languages, and age.');
  return bits.join(' ');
}

export function provinceMetaDescription(opts: {
  name: string;
  population: number | null | undefined;
  growthPct: number | null | undefined;
  topCities: { name: string; population: number | null | undefined }[];
}): string {
  const pop = formatNumber(opts.population);
  const growth = growthSince2016(opts.growthPct);
  let text = growth
    ? `${possessiveName(opts.name)} population is ${pop}, ${growth}.`
    : `${possessiveName(opts.name)} population is ${pop}.`;

  const cities = opts.topCities.filter((city) => city.name);
  if (cities.length) {
    const bits = cities.map((city) => `${city.name} (${formatNumber(city.population)})`);
    const list =
      bits.length === 1
        ? bits[0]
        : bits.length === 2
          ? `${bits[0]} and ${bits[1]}`
          : `${bits.slice(0, -1).join(', ')}, and ${bits[bits.length - 1]}`;
    const noun = bits.length === 1 ? 'city' : 'cities';
    const verb = bits.length === 1 ? 'is' : 'are';
    text += ` The largest ${noun} ${verb} ${list}.`;
  }
  return text;
}
