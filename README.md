# Canadian Data Insights (Astro)

Fresh Astro static-site foundation for [canadiandatainsights.com](https://canadiandatainsights.com). This is the **first slice** of a Next.js → Astro migration — not a clone of the existing app.

## Stack

- Astro (latest stable) + TypeScript
- Tailwind CSS v4 via `@tailwindcss/vite`
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

- Homepage shell with brand, pitch, KPI placeholders, links to Sources / About
- `/about/` — mission, data integrity, contact (`mailto:hello@canadiandatainsights.com`)
- `/sources/` — Census Methodology (StatsCan 2021, OGL, attribution, limitations)
- `/privacy/` — Privacy Policy (last updated September 2026)
- `/terms/` — Terms of Service (acceptance, data limitations, IP, OGL)
- Shared Header + Footer (no Comparisons / Blog links — avoids 404s)
- `public/robots.txt`, `src/pages/sitemap.xml.ts`
- GA placeholder (`G-VQKEMEP3K9`) and GSC meta verification in layout

Subtle homepage banner notes that **location atlas / compare** come in a later slice.

## What this slice excludes

- Location / atlas pages from CSV
- Compare island / interactive comparisons
- Blog
- Map
- Cloning or porting the full Next.js app

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

## Next slices (planned)

1. Location pages generated from census CSV
2. Compare island (client-side)
3. Blog
4. Map

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Production static build → `dist/` |
| `npm run preview` | Preview the production build |
