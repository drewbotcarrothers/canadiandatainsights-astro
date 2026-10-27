/** Census 2021 profile fields already stored on each location row. */

export function metric(record: { [key: string]: unknown }, key: string): number | null {
  const value = record[key];
  return typeof value === 'number' && Number.isFinite(value) ? value : null;
}

export const educationBars = [
  { key: 'EDU_NO_CERTIFICATE', label: 'No certificate, diploma or degree' },
  { key: 'EDU_HIGH_SCHOOL', label: 'High school diploma or equivalency' },
  { key: 'EDU_APPRENTICESHIP_TRADES', label: 'Apprenticeship or trades certificate' },
  { key: 'EDU_COLLEGE_CEGEP', label: 'College, CEGEP or other non-university' },
  { key: 'EDU_UNIVERSITY_BELOW_BACHELOR', label: 'University certificate below bachelor' },
  { key: 'EDU_BACHELOR_OR_HIGHER', label: "Bachelor's degree or higher" },
] as const;

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
] as const;

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
] as const;

export const commuteBars = [
  { key: 'COMMUTE_USUAL_PLACE', label: 'Usual place of work' },
  { key: 'COMMUTE_WORK_AT_HOME', label: 'Worked at home' },
  { key: 'COMMUTE_NO_FIXED_ADDRESS', label: 'No fixed workplace address' },
  { key: 'COMMUTE_OUTSIDE_CANADA', label: 'Worked outside Canada' },
] as const;
