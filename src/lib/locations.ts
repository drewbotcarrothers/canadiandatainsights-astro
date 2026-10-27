import fs from 'node:fs';
import path from 'node:path';
import Papa from 'papaparse';
import { linksFor, type GeoLink } from './geo-links';

export interface LocationData {
  ALT_GEO_CODE: string | number;
  GEO_NAME: string;
  GEO_LEVEL: string;
  PROVINCE?: string;
  POP_2021: number;
  POP_2016: number;
  POP_CHANGE_PCT: number;
  POP_CHANGE_ABS: number;
  HH_INCOME_MEDIAN_AFTER_TAX: number;
  HH_INCOME_AVG_AFTER_TAX: number;
  POP_AVG_AGE: number;
  RANK_POPULATION: number;
  RANK_POP_GROWTH: number;
  RANK_AVG_AGE: number;
  RANK_HH_INCOME: number;
  RANK_TOTAL_IN_GEO_LEVEL: number;
  HH_AVG_SIZE: number;
  POP_MALE_TO_FEMALE_RATIO: number;
  LABOUR_EMPLOYMENT_RATE: number;
  LABOUR_UNEMPLOYMENT_RATE: number;
  [key: string]: unknown;
}

const DATA_PATH = path.join(process.cwd(), 'Data', 'locations.csv');

let cachedLocations: LocationData[] | null = null;

/**
 * Must match Next.js `generateSlug` exactly so URLs stay stable
 * (e.g. `/location/toronto/`).
 */
export function generateSlug(name: string): string {
  if (!name) return 'unknown';

  let targetName = name;
  if (name.includes(',')) {
    const parts = name.split(',');
    const suffix = parts[1].trim();
    // Use short name for Cities/Villes, otherwise full name to prevent collisions.
    if (/^(City|Ville|Cité)/i.test(suffix)) {
      targetName = parts[0];
    }
  }

  return targetName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export async function getAllLocations(): Promise<LocationData[]> {
  if (cachedLocations) return cachedLocations;

  if (!fs.existsSync(DATA_PATH)) {
    throw new Error(
      `Missing Data/locations.csv at ${DATA_PATH}. Required for location pages — see README.`
    );
  }

  const fileContent = fs.readFileSync(DATA_PATH, 'utf8');

  const data = await new Promise<LocationData[]>((resolve, reject) => {
    Papa.parse(fileContent, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: (results) => {
        const rows = (results.data as LocationData[]).filter((loc) => loc.GEO_NAME);
        resolve(rows);
      },
      error: (error: Error) => {
        reject(error);
      },
    });
  });

  cachedLocations = data;
  return data;
}

export async function getLocationBySlug(slug: string): Promise<LocationData | undefined> {
  const locations = await getAllLocations();
  return locations.find((loc) => generateSlug(loc.GEO_NAME) === slug);
}

export async function getProvinces(): Promise<LocationData[]> {
  const locations = await getAllLocations();
  return locations.filter(
    (loc) => loc.GEO_LEVEL === 'Province' || loc.GEO_LEVEL === 'Territory'
  );
}

export async function getTopCities(limit = 10): Promise<LocationData[]> {
  const locations = await getAllLocations();
  return locations
    .filter((loc) => loc.GEO_LEVEL === 'Census subdivision')
    .sort((a, b) => (b.POP_2021 || 0) - (a.POP_2021 || 0))
    .slice(0, limit);
}

export async function getSearchIndex() {
  const locations = await getAllLocations();
  return locations.map((loc) => ({
    name: loc.GEO_NAME,
    level: loc.GEO_LEVEL,
    slug: generateSlug(loc.GEO_NAME),
  }));
}

export async function getLocationsByProvince(provinceName: string): Promise<LocationData[]> {
  const locations = await getAllLocations();
  return locations
    .filter(
      (loc) => loc.GEO_LEVEL === 'Census subdivision' && loc.PROVINCE === provinceName
    )
    .sort((a, b) => (b.POP_2021 || 0) - (a.POP_2021 || 0));
}

export function displayName(geoName: string): string {
  return geoName.split(',')[0];
}

/** Fields used by the compare island — keep HTML/JSON payloads slim */
export const COMPARE_FIELDS = [
  'ALT_GEO_CODE',
  'GEO_NAME',
  'GEO_LEVEL',
  'POP_2021',
  'POP_CHANGE_PCT',
  'RANK_POP_GROWTH',
  'POP_AVG_AGE',
  'POP_MEDIAN_AGE',
  'RANK_AVG_AGE',
  'POP_MALE_PCT',
  'POP_FEMALE_PCT',
  'POP_MALE_TO_FEMALE_RATIO',
  'HH_AVG_SIZE',
  'TOTAL_PRIVATE_DWELLINGS',
  'HH_SIZE_1_PERSON',
  'HH_SIZE_2_PERSONS',
  'HH_SIZE_3_PERSONS',
  'HH_SIZE_4_PERSONS',
  'HH_SIZE_5_PLUS_PERSONS',
  'HH_SIZE_TOTAL',
  'HH_TYPE_COUPLE_WITH_CHILDREN',
  'HH_TYPE_ONE_PARENT',
  'HH_TYPE_TOTAL',
  'HH_INCOME_AVG_AFTER_TAX',
  'HH_INCOME_MEDIAN_AFTER_TAX',
  'INCOME_AVG_AFTER_TAX',
  'INCOME_MEDIAN_AFTER_TAX',
  'RANK_HH_INCOME',
  'INCOME_COMP_MARKET_PCT',
  'INCOME_COMP_EMPLOYMENT_PCT',
  'INCOME_COMP_GOVT_TRANSFERS_PCT',
  'LABOUR_EMPLOYMENT_RATE',
  'LABOUR_UNEMPLOYMENT_RATE',
  'LABOUR_IN_FORCE',
  'LOW_INCOME_PCT',
  'LOW_INCOME_0_17_PCT',
  'LOW_INCOME_65_PLUS_PCT',
  'LANG_KNOWLEDGE_EN_ONLY',
  'LANG_KNOWLEDGE_FR_ONLY',
  'LANG_KNOWLEDGE_EN_AND_FR',
  'LANG_KNOWLEDGE_NEITHER',
  'LANG_KNOWLEDGE_TOTAL',
  'MOTHER_TONGUE_EN',
  'MOTHER_TONGUE_FR',
  'MOTHER_TONGUE_NON_OFFICIAL',
  'MOTHER_TONGUE_TOTAL',
  'EDU_TOTAL_15_PLUS',
  'EDU_NO_CERTIFICATE',
  'EDU_HIGH_SCHOOL',
  'EDU_POSTSECONDARY',
  'EDU_BACHELOR_OR_HIGHER',
  'EDU_BACHELOR',
  'EDU_MASTERS',
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
  'OCC_SALES_SERVICE',
  'OCC_TRADES_TRANSPORT',
  'OCC_MANUFACTURING',
  'IND_TOTAL',
  'IND_CONSTRUCTION',
  'IND_MANUFACTURING',
  'IND_RETAIL',
  'IND_PROFESSIONAL_SCIENTIFIC',
  'IND_HEALTHCARE',
  'IND_ACCOMMODATION_FOOD',
  'IND_PUBLIC_ADMIN',
  'IND_EDUCATION',
] as const;

export type CompareLocation = {
  ALT_GEO_CODE: string | number;
  GEO_NAME: string;
  GEO_LEVEL: string;
  POP_2021?: number | null;
  POP_CHANGE_PCT?: number | null;
  RANK_POP_GROWTH?: number | null;
  POP_AVG_AGE?: number | null;
  POP_MEDIAN_AGE?: number | null;
  RANK_AVG_AGE?: number | null;
  POP_MALE_PCT?: number | null;
  POP_FEMALE_PCT?: number | null;
  POP_MALE_TO_FEMALE_RATIO?: number | null;
  HH_AVG_SIZE?: number | null;
  TOTAL_PRIVATE_DWELLINGS?: number | null;
  HH_SIZE_1_PERSON?: number | null;
  HH_SIZE_2_PERSONS?: number | null;
  HH_SIZE_3_PERSONS?: number | null;
  HH_SIZE_4_PERSONS?: number | null;
  HH_SIZE_5_PLUS_PERSONS?: number | null;
  HH_SIZE_TOTAL?: number | null;
  HH_TYPE_COUPLE_WITH_CHILDREN?: number | null;
  HH_TYPE_ONE_PARENT?: number | null;
  HH_TYPE_TOTAL?: number | null;
  HH_INCOME_AVG_AFTER_TAX?: number | null;
  HH_INCOME_MEDIAN_AFTER_TAX?: number | null;
  INCOME_AVG_AFTER_TAX?: number | null;
  INCOME_MEDIAN_AFTER_TAX?: number | null;
  RANK_HH_INCOME?: number | null;
  INCOME_COMP_MARKET_PCT?: number | null;
  INCOME_COMP_EMPLOYMENT_PCT?: number | null;
  INCOME_COMP_GOVT_TRANSFERS_PCT?: number | null;
  LABOUR_EMPLOYMENT_RATE?: number | null;
  LABOUR_UNEMPLOYMENT_RATE?: number | null;
  LABOUR_IN_FORCE?: number | null;
  LOW_INCOME_PCT?: number | null;
  LOW_INCOME_0_17_PCT?: number | null;
  LOW_INCOME_65_PLUS_PCT?: number | null;
  LANG_KNOWLEDGE_EN_ONLY?: number | null;
  LANG_KNOWLEDGE_FR_ONLY?: number | null;
  LANG_KNOWLEDGE_EN_AND_FR?: number | null;
  LANG_KNOWLEDGE_NEITHER?: number | null;
  LANG_KNOWLEDGE_TOTAL?: number | null;
  MOTHER_TONGUE_EN?: number | null;
  MOTHER_TONGUE_FR?: number | null;
  MOTHER_TONGUE_NON_OFFICIAL?: number | null;
  MOTHER_TONGUE_TOTAL?: number | null;
  EDU_TOTAL_15_PLUS?: number | null;
  EDU_NO_CERTIFICATE?: number | null;
  EDU_HIGH_SCHOOL?: number | null;
  EDU_POSTSECONDARY?: number | null;
  EDU_BACHELOR_OR_HIGHER?: number | null;
  EDU_BACHELOR?: number | null;
  EDU_MASTERS?: number | null;
  COMMUTE_TOTAL?: number | null;
  COMMUTE_WORK_AT_HOME?: number | null;
  COMMUTE_USUAL_PLACE?: number | null;
  COMMUTE_NO_FIXED_ADDRESS?: number | null;
  COMMUTE_OUTSIDE_CANADA?: number | null;
  OCC_TOTAL?: number | null;
  OCC_MANAGEMENT?: number | null;
  OCC_BUSINESS_FINANCE?: number | null;
  OCC_SCIENCES?: number | null;
  OCC_HEALTH?: number | null;
  OCC_EDUCATION_LAW_SOCIAL?: number | null;
  OCC_SALES_SERVICE?: number | null;
  OCC_TRADES_TRANSPORT?: number | null;
  OCC_MANUFACTURING?: number | null;
  IND_TOTAL?: number | null;
  IND_CONSTRUCTION?: number | null;
  IND_MANUFACTURING?: number | null;
  IND_RETAIL?: number | null;
  IND_PROFESSIONAL_SCIENTIFIC?: number | null;
  IND_HEALTHCARE?: number | null;
  IND_ACCOMMODATION_FOOD?: number | null;
  IND_PUBLIC_ADMIN?: number | null;
  IND_EDUCATION?: number | null;
  HOUSING_GEO?: string | null;
  HOUSING_HOUSEHOLDS?: number | null;
  HOUSING_OWNER?: number | null;
  HOUSING_RENTER?: number | null;
  HOUSING_SPEND_30_PLUS?: number | null;
  HOUSING_OWNER_SPEND_30_PLUS?: number | null;
  HOUSING_RENTER_SPEND_30_PLUS?: number | null;
  HOUSING_MEDIAN_SHELTER?: number | null;
  HOUSING_OWNER_MEDIAN_SHELTER?: number | null;
  HOUSING_RENTER_MEDIAN_SHELTER?: number | null;
  HOUSING_OWNER_WITH_MORTGAGE?: number | null;
  HOUSING_RENTER_SUBSIDIZED?: number | null;
};

export function toCompareLocation(loc: LocationData, link?: GeoLink | null): CompareLocation {
  const out: Record<string, unknown> = {};
  for (const field of COMPARE_FIELDS) {
    const val = loc[field];
    out[field] = val === undefined ? null : val;
  }
  const housing = link?.housing;
  out.HOUSING_GEO = housing?.geo ?? null;
  out.HOUSING_HOUSEHOLDS = housing?.households ?? null;
  out.HOUSING_OWNER = housing?.owner ?? null;
  out.HOUSING_RENTER = housing?.renter ?? null;
  out.HOUSING_SPEND_30_PLUS = housing?.spend30Plus ?? null;
  out.HOUSING_OWNER_SPEND_30_PLUS = housing?.ownerSpend30Plus ?? null;
  out.HOUSING_RENTER_SPEND_30_PLUS = housing?.renterSpend30Plus ?? null;
  out.HOUSING_MEDIAN_SHELTER = housing?.medianShelter ?? null;
  out.HOUSING_OWNER_MEDIAN_SHELTER = housing?.ownerMedianShelter ?? null;
  out.HOUSING_RENTER_MEDIAN_SHELTER = housing?.renterMedianShelter ?? null;
  out.HOUSING_OWNER_WITH_MORTGAGE = housing?.ownerWithMortgage ?? null;
  out.HOUSING_RENTER_SUBSIDIZED = housing?.renterSubsidized ?? null;
  return out as CompareLocation;
}

export async function getCompareLocations(): Promise<CompareLocation[]> {
  const locations = await getAllLocations();
  const links = linksFor(locations);
  return locations.map((loc) => toCompareLocation(loc, links.get(String(loc.ALT_GEO_CODE))));
}
