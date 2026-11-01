import housingFile from '../data/statcan/housing.json';
import cpiFile from '../data/statcan/cpi.json';
import {
  csdPriority,
  describeCpi,
  describeHousing,
  placeKeys,
  type GeoParts,
} from './geo-match';

export type HousingRecord = (typeof housingFile.geographies)[number];
export type CpiRecord = (typeof cpiFile.geographies)[number];

export const housingExtract = {
  retrieved: housingFile.retrieved,
  reference: housingFile.reference,
  tables: housingFile.tables,
};

export const cpiExtract = {
  retrieved: cpiFile.retrieved,
  table: cpiFile.table,
  referenceMonth: cpiFile.referenceMonth,
  comparisonMonth: cpiFile.comparisonMonth,
  geographies: cpiFile.geographies,
};

export interface GeoLink {
  housing: HousingRecord | null;
  cpi: CpiRecord | null;
}

interface Loc {
  ALT_GEO_CODE: string | number;
  GEO_NAME: string;
  GEO_LEVEL: string;
  PROVINCE?: string;
}

let cacheKey: Loc[] | null = null;
let cache: Map<string, GeoLink> | null = null;

function indexByPlace<T extends { geo: string }>(
  records: T[],
  describe: (geo: string) => GeoParts
): Map<string, T[]> {
  const index = new Map<string, T[]>();
  for (const record of records) {
    const parts = describe(record.geo);
    if (parts.kind !== 'metro' && parts.kind !== 'city') continue;
    if (parts.provinces.length === 0 || parts.places.length === 0) {
      throw new Error(`Could not parse published geography “${record.geo}”`);
    }
    for (const province of parts.provinces) {
      for (const place of parts.places) {
        const id = `${province}|${place}`;
        const list = index.get(id) ?? [];
        list.push(record);
        index.set(id, list);
      }
    }
  }
  return index;
}

function indexRegions<T extends { geo: string }>(
  records: T[],
  describe: (geo: string) => GeoParts
): Map<string, T> {
  const index = new Map<string, T>();
  for (const record of records) {
    const parts = describe(record.geo);
    if (parts.kind === 'country') index.set('Canada', record);
    if (parts.kind === 'region') index.set(record.geo, record);
  }
  return index;
}

function pickPlace<T extends { geo: string }>(
  loc: Loc,
  bestRank: Map<string, number>,
  index: Map<string, T[]>,
  describe: (geo: string) => GeoParts
): T | null {
  const province = loc.PROVINCE ?? '';
  const priority = csdPriority(loc.GEO_NAME);
  const found = new Map<string, T>();
  for (const key of placeKeys(loc.GEO_NAME)) {
    const id = `${province}|${key}`;
    if ((bestRank.get(id) ?? 0) > priority) continue;
    for (const record of index.get(id) ?? []) found.set(record.geo, record);
  }
  const records = [...found.values()];
  if (records.length === 0) return null;
  records.sort((a, b) => describe(a.geo).places.length - describe(b.geo).places.length);
  const best = records[0];
  const next = records[1];
  if (next && describe(best.geo).places.length === describe(next.geo).places.length) {
    throw new Error(
      `Ambiguous geography for ${loc.GEO_NAME}: ${records.map((record) => record.geo).join(' | ')}`
    );
  }
  return best;
}

function expectLink(
  locations: Loc[],
  links: Map<string, GeoLink>,
  geoName: string,
  housing: string | null,
  cpi: string | null
) {
  const loc = locations.find((item) => item.GEO_NAME === geoName);
  if (!loc) throw new Error(`Assert location missing from census file: ${geoName}`);
  const link = links.get(String(loc.ALT_GEO_CODE));
  const gotHousing = link?.housing?.geo ?? null;
  const gotCpi = link?.cpi?.geo ?? null;
  if (gotHousing !== housing || gotCpi !== cpi) {
    throw new Error(
      `Geography link for ${geoName}: housing ${gotHousing ?? 'none'} (expected ${housing ?? 'none'}), CPI ${gotCpi ?? 'none'} (expected ${cpi ?? 'none'})`
    );
  }
}

function assertKnownLinks(locations: Loc[], links: Map<string, GeoLink>) {
  const cases: Array<[string, string | null, string | null]> = [
    ['Canada', 'Canada', 'Canada'],
    ['Ontario', 'Ontario', 'Ontario'],
    ['Quebec', 'Quebec', 'Quebec'],
    ['Nunavut', 'Nunavut', null],
    ['Toronto, City (C)', 'Toronto (CMA), Ont.', 'Toronto, Ontario'],
    ['Mississauga, City (CY)', null, null],
    ['Ottawa, City (CV)', 'Ottawa - Gatineau (CMA), Ont./Que.', 'Ottawa-Gatineau, Ontario part, Ontario/Quebec'],
    ['Gatineau, Ville (V)', 'Ottawa - Gatineau (CMA), Ont./Que.', null],
    ['Hamilton, City (C)', 'Hamilton (CMA), Ont.', null],
    ['Hamilton, Township (TP)', null, null],
    ['Montréal, Ville (V)', 'Montréal (CMA), Que.', 'Montréal, Quebec'],
    ['Québec, Ville (V)', 'Québec (CMA), Que.', 'Québec, Quebec'],
    ['Vancouver, City (CY)', 'Vancouver (CMA), B.C.', 'Vancouver, British Columbia'],
    ['Halifax, Regional municipality (RGM)', 'Halifax (CMA), N.S.', 'Halifax, Nova Scotia'],
    ["St. John's, City (CY)", "St. John's (CMA), N.L.", "St. John's, Newfoundland and Labrador"],
    ['Saint John, City (C)', 'Saint John (CMA), N.B.', 'Saint John, New Brunswick'],
    ['Charlottetown, City (CY)', 'Charlottetown (CA), P.E.I.', 'Charlottetown and Summerside, Prince Edward Island'],
    ['Summerside, City (CY)', 'Summerside (CA), P.E.I.', 'Charlottetown and Summerside, Prince Edward Island'],
    ['Whitehorse, City (CY)', 'Whitehorse (CA), Y.T.', 'Whitehorse, Yukon'],
    ['Iqaluit, City (CY)', null, 'Iqaluit, Nunavut'],
    ['Kitchener, City (CY)', 'Kitchener - Cambridge - Waterloo (CMA), Ont.', null],
    ['Cambridge, City (CY)', 'Kitchener - Cambridge - Waterloo (CMA), Ont.', null],
    ['Niagara Falls, City (CY)', null, null],
    ['Greater Sudbury / Grand Sudbury, City (CV)', 'Greater Sudbury (CMA), Ont.', null],
    ['Quinte West, City (CY)', 'Belleville - Quinte West (CMA), Ont.', null],
    ['London, City (CY)', 'London (CMA), Ont.', null],
    ['Thunder Bay, City (CY)', 'Thunder Bay (CMA), Ont.', 'Thunder Bay, Ontario'],
    ['Thunder Bay, Unorganized, Unorganized (NO)', null, null],
  ];
  for (const [geoName, housing, cpi] of cases) {
    expectLink(locations, links, geoName, housing, cpi);
  }
}

export function linksFor(locations: Loc[]): Map<string, GeoLink> {
  if (cache && cacheKey === locations) return cache;

  const bestRank = new Map<string, number>();
  for (const loc of locations) {
    if (loc.GEO_LEVEL !== 'Census subdivision') continue;
    const province = loc.PROVINCE ?? '';
    for (const key of placeKeys(loc.GEO_NAME)) {
      const id = `${province}|${key}`;
      bestRank.set(id, Math.max(bestRank.get(id) ?? 0, csdPriority(loc.GEO_NAME)));
    }
  }

  const housingPlaces = indexByPlace(housingFile.geographies, describeHousing);
  const cpiPlaces = indexByPlace(cpiFile.geographies, describeCpi);
  const housingRegions = indexRegions(housingFile.geographies, describeHousing);
  const cpiRegions = indexRegions(cpiFile.geographies, describeCpi);

  const links = new Map<string, GeoLink>();
  for (const loc of locations) {
    let housing: HousingRecord | null = null;
    let cpi: CpiRecord | null = null;
    if (loc.GEO_LEVEL === 'Country') {
      housing = housingRegions.get('Canada') ?? null;
      cpi = cpiRegions.get('Canada') ?? null;
    } else if (loc.GEO_LEVEL === 'Province' || loc.GEO_LEVEL === 'Territory') {
      housing = housingRegions.get(loc.GEO_NAME) ?? null;
      cpi = cpiRegions.get(loc.GEO_NAME) ?? null;
    } else if (loc.GEO_LEVEL === 'Census subdivision') {
      housing = pickPlace(loc, bestRank, housingPlaces, describeHousing);
      cpi = pickPlace(loc, bestRank, cpiPlaces, describeCpi);
    }
    links.set(String(loc.ALT_GEO_CODE), { housing, cpi });
  }

  assertKnownLinks(locations, links);
  cacheKey = locations;
  cache = links;
  return links;
}
