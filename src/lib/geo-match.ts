/**
 * Match a location profile to a published Statistics Canada geography.
 * Municipality pages only receive a metro or CPI-city series when a place
 * name matches. A lower-tier census subdivision (township, parish,
 * unorganized) loses to a city of the same name in the same province.
 */

export interface GeoParts {
  kind: 'country' | 'region' | 'metro' | 'city';
  /** Full province or territory names this series belongs to. */
  provinces: string[];
  /** Normalized place names for census-subdivision matching. */
  places: string[];
}

const PROVINCE_ABBR: Record<string, string> = {
  nl: 'Newfoundland and Labrador',
  pei: 'Prince Edward Island',
  ns: 'Nova Scotia',
  nb: 'New Brunswick',
  que: 'Quebec',
  ont: 'Ontario',
  man: 'Manitoba',
  sask: 'Saskatchewan',
  alta: 'Alberta',
  bc: 'British Columbia',
  yt: 'Yukon',
  nwt: 'Northwest Territories',
  nu: 'Nunavut',
};

export function normPlace(value: string): string {
  return value
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/['’.']/g, '')
    .replace(/-/g, ' ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .replace(/\s+/g, ' ');
}

export function placeKeys(geoName: string): string[] {
  const display = geoName.split(',')[0] ?? geoName;
  return display
    .split('/')
    .map((part) => normPlace(part))
    .filter(Boolean);
}

/** Higher wins when two subdivisions share a place name. */
export function csdPriority(geoName: string): number {
  const suffix = geoName.split(',').slice(1).join(',');
  if (/\b(city|ville|cite|cité)\b/i.test(suffix)) return 3;
  if (/town|municipalit|district municipality|regional municipality|specialized municipality/i.test(suffix)) {
    return 2;
  }
  return 1;
}

function abbrToProvince(token: string): string | null {
  const key = normPlace(token).replace(/ /g, '');
  return PROVINCE_ABBR[key] ?? null;
}

/** Housing table geography, e.g. "Toronto (CMA), Ont." or "Ontario". */
export function describeHousing(geo: string): GeoParts {
  if (geo === 'Canada') return { kind: 'country', provinces: [], places: [] };
  const metro = geo.match(/^(.*) \((?:CMA|CA)\), (.+)$/);
  if (metro) {
    const places = metro[1].split(' - ').map((part) => normPlace(part)).filter(Boolean);
    const provinces = metro[2]
      .split('/')
      .map((part) => abbrToProvince(part))
      .filter((part): part is string => Boolean(part));
    return { kind: 'metro', provinces, places };
  }
  return { kind: 'region', provinces: [geo], places: [] };
}

/** CPI geography, e.g. "Toronto, Ontario" or "Quebec". */
export function describeCpi(geo: string): GeoParts {
  if (geo === 'Canada') return { kind: 'country', provinces: [], places: [] };
  if (geo === 'Ottawa-Gatineau, Ontario part, Ontario/Quebec') {
    return { kind: 'city', provinces: ['Ontario'], places: [normPlace('Ottawa')] };
  }
  if (geo === 'Charlottetown and Summerside, Prince Edward Island') {
    return {
      kind: 'city',
      provinces: ['Prince Edward Island'],
      places: [normPlace('Charlottetown'), normPlace('Summerside')],
    };
  }
  if (!geo.includes(',')) return { kind: 'region', provinces: [geo], places: [] };
  const comma = geo.indexOf(',');
  const place = normPlace(geo.slice(0, comma));
  const provinces = geo
    .slice(comma + 1)
    .split('/')
    .map((part) => part.trim())
    .filter(Boolean);
  return { kind: 'city', provinces, places: [place] };
}

export function geoAnchor(geo: string): string {
  return normPlace(geo).replace(/ /g, '-');
}
