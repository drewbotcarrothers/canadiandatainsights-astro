/** Sitewide SEO / JSON-LD helpers for Canadian Data Insights */

export const SITE_URL = 'https://canadiandatainsights.com';
export const SITE_NAME = 'Canadian Data Insights';
export const CONTACT_EMAIL = 'hello@canadiandatainsights.com';
export const OGL_LICENSE_URL =
  'https://open.canada.ca/en/open-government-licence-canada';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`;
export const YOUTUBE_URL =
  'https://www.youtube.com/channel/UCkKDB5U853YVBnfAPIlPHTw';

export const organization = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  email: CONTACT_EMAIL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/favicon.svg`,
  },
  sameAs: [YOUTUBE_URL],
};

export const website = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  description:
    'Interactive Statistics Canada census insights — population, growth, income, and demographics for Canadian communities.',
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-CA',
};

/** Sitewide Organization + WebSite (no SearchAction — site has no search URL). */
export function siteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [organization, website],
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[]
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: new URL(item.path, SITE_URL).toString(),
    })),
  };
}

export function locationJsonLd(opts: {
  name: string;
  slug: string;
  geoLevel: string;
  province?: string;
  population?: number | null;
  medianIncome?: number | null;
  description: string;
}): Record<string, unknown>[] {
  const pageUrl = `${SITE_URL}/location/${opts.slug}/`;
  const placeType =
    opts.geoLevel === 'Province' || opts.geoLevel === 'Territory'
      ? 'AdministrativeArea'
      : opts.geoLevel === 'Country'
        ? 'Country'
        : 'City';

  const additionalProperty: Record<string, unknown>[] = [];
  if (opts.population != null && Number.isFinite(opts.population)) {
    additionalProperty.push({
      '@type': 'PropertyValue',
      name: 'Population (2021)',
      value: opts.population,
    });
  }
  if (opts.medianIncome != null && Number.isFinite(opts.medianIncome) && opts.medianIncome > 0) {
    additionalProperty.push({
      '@type': 'PropertyValue',
      name: 'Median household income after tax (2021)',
      value: opts.medianIncome,
      unitText: 'CAD',
    });
  }

  const place: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': placeType,
    name: opts.name,
    url: pageUrl,
    description: opts.description,
    containedInPlace:
      opts.province && opts.geoLevel !== 'Province' && opts.geoLevel !== 'Territory'
        ? { '@type': 'AdministrativeArea', name: opts.province }
        : { '@type': 'Country', name: 'Canada' },
  };
  if (additionalProperty.length) {
    place.additionalProperty = additionalProperty;
  }

  const dataset: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: `${opts.name} — population & demographics profile`,
    description: opts.description,
    url: pageUrl,
    license: OGL_LICENSE_URL,
    creator: { '@id': `${SITE_URL}/#organization` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    isBasedOn: {
      '@type': 'WebPage',
      name: 'Sources & methodology',
      url: `${SITE_URL}/sources/`,
    },
    temporalCoverage: '2021',
    spatialCoverage: {
      '@type': placeType,
      name: opts.name,
    },
    variableMeasured: additionalProperty.length
      ? additionalProperty.map((p) => (p as { name: string }).name)
      : ['Population', 'Household income', 'Demographics'],
  };

  const crumbs = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: opts.name, path: `/location/${opts.slug}/` },
  ]);

  return [place, dataset, crumbs];
}

export function blogPostingJsonLd(opts: {
  title: string;
  slug: string;
  description: string;
  datePublished: string;
  image?: string;
}): Record<string, unknown>[] {
  const pageUrl = `${SITE_URL}/blog/${opts.slug}/`;
  const imageUrl = opts.image
    ? opts.image.startsWith('http')
      ? opts.image
      : `${SITE_URL}${opts.image}`
    : DEFAULT_OG_IMAGE;

  // Blog dates are human strings like "September 25, 2025" — keep as-is for datePublished text;
  // ISO if parseable.
  let isoDate = opts.datePublished;
  const parsed = Date.parse(opts.datePublished);
  if (!Number.isNaN(parsed)) {
    isoDate = new Date(parsed).toISOString().slice(0, 10);
  }

  const article = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: opts.title,
    description: opts.description,
    image: imageUrl,
    datePublished: isoDate,
    author: organization,
    publisher: organization,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
    url: pageUrl,
    inLanguage: 'en-CA',
  };

  const crumbs = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog/' },
    { name: opts.title, path: `/blog/${opts.slug}/` },
  ]);

  return [article, crumbs];
}

export function sourcesJsonLd(): Record<string, unknown>[] {
  const pageUrl = `${SITE_URL}/sources/`;
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Census Methodology & Sources',
      url: pageUrl,
      description:
        'How Canadian Data Insights sources, processes, and presents Statistics Canada 2021 Census data under the Open Government Licence - Canada.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: {
        '@type': 'Dataset',
        name: 'Statistics Canada Census of Population, 2021',
        license: OGL_LICENSE_URL,
        creator: {
          '@type': 'Organization',
          name: 'Statistics Canada',
          url: 'https://www.statcan.gc.ca/',
        },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Dataset',
      name: 'Canadian Data Insights — processed Census 2021 location profiles',
      description:
        'Location-level profiles derived from Statistics Canada Census of Population 2021, presented under the Open Government Licence - Canada.',
      url: pageUrl,
      license: OGL_LICENSE_URL,
      creator: {
        '@type': 'Organization',
        name: 'Statistics Canada',
        url: 'https://www.statcan.gc.ca/',
      },
      publisher: organization,
      isBasedOn: {
        '@type': 'CreativeWork',
        name: 'Census of Population, 2021',
        creator: { '@type': 'Organization', name: 'Statistics Canada' },
      },
      temporalCoverage: '2021',
      spatialCoverage: { '@type': 'Country', name: 'Canada' },
    },
  ];
}
