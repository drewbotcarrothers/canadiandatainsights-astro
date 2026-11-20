import type { APIRoute } from 'astro';
import { getAllLocations, generateSlug } from '../lib/locations';
import { blogPosts } from '../lib/blog-data';
import { inflationPages } from '../lib/inflation';

const staticPages = [
  '/',
  '/about/',
  '/sources/',
  '/privacy/',
  '/terms/',
  '/blog/',
  '/compare/',
  '/cost-of-living/',
  '/data/',
  '/data/cpi/',
  '/data/jobs/',
  '/data/housing-starts/',
];

export const GET: APIRoute = async () => {
  const site = 'https://canadiandatainsights.com';
  const lastmod = new Date().toISOString().slice(0, 10);

  const locations = await getAllLocations();
  const seen = new Set<string>();
  const locationPaths: string[] = [];
  for (const loc of locations) {
    const path = `/location/${generateSlug(loc.GEO_NAME)}/`;
    if (seen.has(path)) continue;
    seen.add(path);
    locationPaths.push(path);
  }

  const blogPaths = blogPosts.map((post) => `/blog/${post.slug}/`);
  const inflationPaths = inflationPages.map((page) => page.href);

  const urls = [...staticPages, ...inflationPaths, ...blogPaths, ...locationPaths]
    .map(
      (path) => `  <url>
    <loc>${site}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
  </url>`
    )
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
