# Canadian Data Insights (Astro)

Fresh Astro static-site foundation for [canadiandatainsights.com](https://canadiandatainsights.com). This is a Next.js → Astro migration — not a clone of the existing app.

## Stack

- Astro (latest stable) + TypeScript
- React islands via `@astrojs/react` (Interactive Atlas map, compare tool, blog charts via `recharts`)
- `react-simple-maps` for Canada geography + city markers
- Tailwind CSS v4 via `@tailwindcss/vite`
- Papa Parse for census CSV at build time
- Static output (`dist/`) for Hostinger FTP
- `trailingSlash: 'always'`
- `site: https://canadiandatainsights.com`

## Design tokens

| Token | Value |
| --- | --- |
| Primary navy | `#003461` |
| Tertiary maple red | `#6e000b` |
| Background | `#f9f9fd` |
| Text | `#191c1e` |
| Headings | Manrope (Google Fonts) |
| Body | Inter (Google Fonts) |

## What this slice includes

- Homepage with national KPIs, **Interactive Atlas** (React island), **provinces/territories**, and **top cities** linked to profiles
- Atlas map: `react-simple-maps` + top-15 city markers, hover panel, click-through to `/location/{slug}/`
- Canada outlines load client-side from GeoJSON (CDN); the island hydrates with `client:load`
- **~702 location profile pages** at `/location/[slug]/` generated at build from census CSV
- Profile sections: Population, Households, Incomes, Employment/Labour, Languages, Dwellings
- `/about/`, `/sources/`, `/privacy/`, `/terms/`
- **Blog** at `/blog/` + `/blog/[slug]/` (3 posts with hero images + recharts islands)
- **Location Comparison** at `/compare/` — React island that fetches slim census JSON
- Shared Header + Footer (Comparisons + Blog in nav)
- `public/robots.txt`, `src/pages/sitemap.xml.ts` (includes location + blog + compare URLs)
- Build-time endpoint `src/pages/data/compare-locations.json.ts` → `dist/data/compare-locations.json`
- GA placeholder (`G-VQKEMEP3K9`) and GSC meta verification in layout

## Data requirement

**`Data/locations.csv` is required for `npm run build`.**

- Path: project-root `Data/locations.csv` (same layout as the Next.js site)
- ~702 rows of Statistics Canada 2021 Census geography profiles
- Committed in this repo (not gitignored)
- Slugs are generated with the same `generateSlug` rules as Next.js so URLs like `/location/toronto/` stay stable

Without the CSV, location pages and homepage province/city lists will fail at build.

## Interactive Atlas notes

- Component: `src/components/home/CanadaMap.tsx` (React island)
- City coordinates: `src/lib/city-coordinates.ts`
- Geography URL (runtime CDN dependency):
  `https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/canada.geojson`
- Marker navigation uses `window.location` to `/location/{slug}/` (trailing slash)

## What this slice excludes

- AdSense
- Shareable `/compare/{a}-vs-{b}` URLs (client-only select UI, matching current Next.js)
- New blog posts beyond the 3 ported from the Next.js site

## Develop

```bash
npm install
npm run dev
```

## Build & deploy

```bash
npm install
npm run build
```

Deploy the contents of **`dist/`** to Hostinger via FTP (static hosting). No Node server required.

Expect `dist/location/*/index.html` for every geography in the CSV (plus static pages).

## Compare tool notes

- Page: `src/pages/compare/index.astro`
- Island: `src/components/compare/ComparisonInterface.tsx` (`client:load`)
- Slim records (~46 fields) are written at build to `/data/compare-locations.json` and fetched client-side (avoids huge HTML props)
- Select geo level + two same-level locations for side-by-side population, household, income, employment, and language stats

## Blog notes

- Content + chart data: `src/lib/blog-data.ts`
- Chart island: `src/components/blog/BlogVisualization.tsx` (`client:visible`, `recharts`)
- Hero images: `public/images/blog/`
- Slugs match the live Next.js site

## Next slices (planned)

1. AdSense (optional)
2. Shareable compare deep-links (optional)

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Production static build → `dist/` |
| `npm run preview` | Preview the production build |
