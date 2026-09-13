import type { APIRoute } from 'astro';

const pages = ['/', '/about/', '/sources/', '/privacy/', '/terms/'];

export const GET: APIRoute = () => {
  const site = 'https://canadiandatainsights.com';
  const lastmod = new Date().toISOString().slice(0, 10);

  const urls = pages
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
