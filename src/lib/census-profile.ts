/**
 * Census 2021 education, commute, occupation, and industry fields
 * already stored on each location row in Data/locations.csv.
 *
 * Shares are calculated from those published counts. This module does not
 * estimate residuals when a group of categories does not add to its total.
 *
 * Stable deep-link ids, on location pages and on the compare tool:
 * #education  #commute  #occupation  #industry
 */
import { formatNumber } from './utils';

export const WORK_PROFILE_ANCHORS = {
  education: 'education',
  commute: 'commute',
  occupation: 'occupation',
  industry: 'industry',
} as const;

export type WorkProfileAnchor =
  (typeof WORK_PROFILE_ANCHORS)[keyof typeof WORK_PROFILE_ANCHORS];

export const WORK_PROFILE_FIELDS = [
  'EDU_TOTAL_15_PLUS',
  'EDU_NO_CERTIFICATE',
  'EDU_HIGH_SCHOOL',
  'EDU_POSTSECONDARY',
  'EDU_APPRENTICESHIP_TRADES',
  'EDU_COLLEGE_CEGEP',
  'EDU_UNIVERSITY_BELOW_BACHELOR',
  'EDU_BACHELOR_OR_HIGHER',
  'EDU_BACHELOR',
  'EDU_MASTERS',
  'EDU_MEDICINE_DENTISTRY_VET',
  'COMMUTE_TOTAL',
  'COMMUTE_WORK_AT_HOME',
  'COMMUTE_USUAL_PLACE',
  'COMMUTE_NO_FIXED_ADDRESS',
  'COMMUTE_OUTSIDE_CANADA',
  'OCC_TOTAL',
  'OCC_MANAGEMENT',
  'OCC_BUSINESS_FINANCE',
  'OCC_SCIENCES',
  'OCC_HEALTH',
  'OCC_EDUCATION_LAW_SOCIAL',
  'OCC_ART_CULTURE_RECREATION',
  'OCC_SALES_SERVICE',
  'OCC_TRADES_TRANSPORT',
  'OCC_NATURAL_RESOURCES',
  'OCC_MANUFACTURING',
  'IND_TOTAL',
  'IND_AGRICULTURE',
  'IND_MINING_OIL_GAS',
  'IND_UTILITIES',
  'IND_CONSTRUCTION',
  'IND_MANUFACTURING',
  'IND_WHOLESALE',
  'IND_RETAIL',
  'IND_TRANSPORTATION',
  'IND_INFORMATION_CULTURE',
  'IND_FINANCE_INSURANCE',
  'IND_REAL_ESTATE',
  'IND_PROFESSIONAL_SCIENTIFIC',
  'IND_MANAGEMENT',
  'IND_ADMIN_WASTE',
  'IND_EDUCATION',
  'IND_HEALTHCARE',
  'IND_ARTS_ENTERTAINMENT',
  'IND_ACCOMMODATION_FOOD',
  'IND_OTHER_SERVICES',
  'IND_PUBLIC_ADMIN',
] as const;

export type WorkProfileField = (typeof WORK_PROFILE_FIELDS)[number];

export type MetricRecord = { [key: string]: unknown };

export function metric(record: object, key: string): number | null {
  const value = (record as MetricRecord)[key];
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string' && value.trim() !== '') {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) return parsed;
  }
  return null;
}

/** Share of a published count, in percent. Null when the denominator is missing or zero. */
export function shareOf(part: number | null, total: number | null): number | null {
  if (
    part == null ||
    total == null ||
    !Number.isFinite(part) ||
    !Number.isFinite(total) ||
    total === 0
  ) {
    return null;
  }
  return (part / total) * 100;
}

export function formatSharePercent(part: number | null, total: number | null): string | null {
  const share = shareOf(part, total);
  if (share == null) return null;
  return `${share.toFixed(1)}%`;
}

/** "1,234 (12.3%)" from a published count and its published denominator. */
export function countShare(part: number | null, total: number | null): string | null {
  if (part == null) return null;
  const share = formatSharePercent(part, total);
  if (share == null) return formatNumber(part);
  return `${formatNumber(part)} (${share})`;
}

export type ProfileBar = {
  key: WorkProfileField;
  label: string;
};

export type ProfileRow = ProfileBar & { value: number };

export function presentRows(record: object, bars: readonly ProfileBar[]): ProfileRow[] {
  const rows: ProfileRow[] = [];
  for (const bar of bars) {
    const value = metric(record, bar.key);
    if (value == null) continue;
    rows.push({ ...bar, value });
  }
  return rows;
}

/** Published parts of the postsecondary total. Mutually exclusive with each other. */
export const postsecondaryParts = [
  { key: 'EDU_APPRENTICESHIP_TRADES', label: 'Apprenticeship or trades certificate' },
  { key: 'EDU_COLLEGE_CEGEP', label: 'College, CEGEP or other non-university' },
  { key: 'EDU_UNIVERSITY_BELOW_BACHELOR', label: 'University certificate below bachelor' },
  { key: 'EDU_BACHELOR_OR_HIGHER', label: "Bachelor's degree or higher" },
] as const satisfies readonly ProfileBar[];

/** Mutually exclusive highest-credential groups. They partition the population aged 15+. */
export const educationBars = [
  { key: 'EDU_NO_CERTIFICATE', label: 'No certificate, diploma or degree' },
  { key: 'EDU_HIGH_SCHOOL', label: 'High school diploma or equivalency' },
  ...postsecondaryParts,
] as const satisfies readonly ProfileBar[];

/** Published three-way rollup. Postsecondary equals the last four educationBars, within rounding. */
export const educationRollup = [
  { key: 'EDU_NO_CERTIFICATE', label: 'No certificate, diploma or degree' },
  { key: 'EDU_HIGH_SCHOOL', label: 'High school diploma or equivalency' },
  { key: 'EDU_POSTSECONDARY', label: 'Postsecondary credential' },
] as const satisfies readonly ProfileBar[];

/**
 * Published parts of bachelor's degree or higher. They are not a complete split:
 * earned doctorates and other university credentials above the bachelor level
 * are not separate columns in this extract.
 */
export const bachelorParts = [
  { key: 'EDU_BACHELOR', label: "Bachelor's degree" },
  { key: 'EDU_MASTERS', label: "Master's degree" },
  { key: 'EDU_MEDICINE_DENTISTRY_VET', label: 'Medicine, dentistry or veterinary medicine' },
] as const satisfies readonly ProfileBar[];

export const commuteBars = [
  { key: 'COMMUTE_WORK_AT_HOME', label: 'Worked at home' },
  { key: 'COMMUTE_USUAL_PLACE', label: 'Usual place of work' },
  { key: 'COMMUTE_NO_FIXED_ADDRESS', label: 'No fixed workplace address' },
  { key: 'COMMUTE_OUTSIDE_CANADA', label: 'Worked outside Canada' },
] as const satisfies readonly ProfileBar[];

export const occupationBars = [
  { key: 'OCC_MANAGEMENT', label: 'Legislative and senior management' },
  { key: 'OCC_BUSINESS_FINANCE', label: 'Business, finance and administration' },
  { key: 'OCC_SCIENCES', label: 'Natural and applied sciences' },
  { key: 'OCC_HEALTH', label: 'Health' },
  { key: 'OCC_EDUCATION_LAW_SOCIAL', label: 'Education, law and social, community and government services' },
  { key: 'OCC_ART_CULTURE_RECREATION', label: 'Art, culture, recreation and sport' },
  { key: 'OCC_SALES_SERVICE', label: 'Sales and service' },
  { key: 'OCC_TRADES_TRANSPORT', label: 'Trades, transport and equipment operators' },
  { key: 'OCC_NATURAL_RESOURCES', label: 'Natural resources, agriculture and related production' },
  { key: 'OCC_MANUFACTURING', label: 'Manufacturing and utilities' },
] as const satisfies readonly ProfileBar[];

export const industryBars = [
  { key: 'IND_AGRICULTURE', label: 'Agriculture, forestry, fishing and hunting' },
  { key: 'IND_MINING_OIL_GAS', label: 'Mining, quarrying, and oil and gas extraction' },
  { key: 'IND_UTILITIES', label: 'Utilities' },
  { key: 'IND_CONSTRUCTION', label: 'Construction' },
  { key: 'IND_MANUFACTURING', label: 'Manufacturing' },
  { key: 'IND_WHOLESALE', label: 'Wholesale trade' },
  { key: 'IND_RETAIL', label: 'Retail trade' },
  { key: 'IND_TRANSPORTATION', label: 'Transportation and warehousing' },
  { key: 'IND_INFORMATION_CULTURE', label: 'Information and cultural industries' },
  { key: 'IND_FINANCE_INSURANCE', label: 'Finance and insurance' },
  { key: 'IND_REAL_ESTATE', label: 'Real estate and rental and leasing' },
  { key: 'IND_PROFESSIONAL_SCIENTIFIC', label: 'Professional, scientific and technical services' },
  { key: 'IND_MANAGEMENT', label: 'Management of companies and enterprises' },
  {
    key: 'IND_ADMIN_WASTE',
    label: 'Administrative and support, waste management and remediation',
  },
  { key: 'IND_EDUCATION', label: 'Educational services' },
  { key: 'IND_HEALTHCARE', label: 'Health care and social assistance' },
  { key: 'IND_ARTS_ENTERTAINMENT', label: 'Arts, entertainment and recreation' },
  { key: 'IND_ACCOMMODATION_FOOD', label: 'Accommodation and food services' },
  { key: 'IND_OTHER_SERVICES', label: 'Other services (except public administration)' },
  { key: 'IND_PUBLIC_ADMIN', label: 'Public administration' },
] as const satisfies readonly ProfileBar[];

export const ROUNDING_NOTE =
  'Shares are calculated on this site from the published counts. Statistics Canada randomly rounds census counts, so parts can miss the published total by a few people.';

export const CLASSIFIED_GAP_NOTE =
  'These categories do not add up to that total. Counts are randomly rounded, and people with no classified category stay in the published total. This page does not estimate that remainder.';

export type CompareShareRow = {
  key: WorkProfileField;
  label: string;
  denominator: WorkProfileField;
};

export type CompareBlock = {
  heading: string;
  note?: string;
  rows: readonly CompareShareRow[];
};

export type CompareTheme = {
  id: WorkProfileAnchor;
  title: string;
  intro: string;
  totalKey: WorkProfileField;
  totalLabel: string;
  blocks: readonly CompareBlock[];
};

const shareRows = (
  bars: readonly ProfileBar[],
  denominator: WorkProfileField
): CompareShareRow[] => bars.map((bar) => ({ ...bar, denominator }));

export const compareThemes: readonly CompareTheme[] = [
  {
    id: 'education',
    title: 'Education',
    intro: `Highest certificate, diploma or degree for the population aged 15 and over, Census 2021. The highest-credential groups are mutually exclusive. Bachelor's degree, master's degree, and medicine, dentistry or veterinary medicine sit inside “bachelor's degree or higher” and are not extra slices of the population. ${ROUNDING_NOTE}`,
    totalKey: 'EDU_TOTAL_15_PLUS',
    totalLabel: 'Population aged 15 and over',
    blocks: [
      {
        heading: 'Highest credential',
        rows: shareRows(educationRollup, 'EDU_TOTAL_15_PLUS'),
      },
      {
        heading: 'Parts of postsecondary',
        note: 'These four groups are the published parts of the postsecondary total.',
        rows: shareRows(postsecondaryParts, 'EDU_TOTAL_15_PLUS'),
      },
      {
        heading: "Within bachelor's degree or higher",
        note: "Shares below still use the population aged 15 and over, so the two places stay on the same base. These credentials do not add up to the bachelor's-or-higher count. Earned doctorates and other university credentials above the bachelor level are not separate columns in this extract.",
        rows: shareRows(bachelorParts, 'EDU_TOTAL_15_PLUS'),
      },
    ],
  },
  {
    id: 'commute',
    title: 'Commute',
    intro: `Place of work for the employed labour force aged 15 and over, Census 2021. Worked at home is the census count of people who worked at home, shown as a share of that employed labour force. ${ROUNDING_NOTE}`,
    totalKey: 'COMMUTE_TOTAL',
    totalLabel: 'Employed labour force',
    blocks: [
      {
        heading: 'Place of work',
        rows: shareRows(commuteBars, 'COMMUTE_TOTAL'),
      },
    ],
  },
  {
    id: 'occupation',
    title: 'Occupation',
    intro: `Broad category for the labour force aged 15 and over, Census 2021, using the National Occupational Classification (NOC) 2021. Legislative and senior management is broad category 0, not every job with “manager” in the title. Shares use the published labour-force total. ${CLASSIFIED_GAP_NOTE}`,
    totalKey: 'OCC_TOTAL',
    totalLabel: 'Labour force',
    blocks: [
      {
        heading: 'Broad category',
        rows: shareRows(occupationBars, 'OCC_TOTAL'),
      },
    ],
  },
  {
    id: 'industry',
    title: 'Industry',
    intro: `Industry sector for the labour force aged 15 and over, Census 2021. Shares use the published labour-force total. ${CLASSIFIED_GAP_NOTE}`,
    totalKey: 'IND_TOTAL',
    totalLabel: 'Labour force',
    blocks: [
      {
        heading: 'Sector',
        rows: shareRows(industryBars, 'IND_TOTAL'),
      },
    ],
  },
];

export function themeCopy(id: WorkProfileAnchor): CompareTheme {
  const theme = compareThemes.find((item) => item.id === id);
  if (!theme) throw new Error(`Unknown work-profile section: ${id}`);
  return theme;
}
