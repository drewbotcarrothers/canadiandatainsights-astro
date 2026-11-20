# Release-day pages

Refreshes the Consumer Price Index, Labour Force Survey, and housing-starts pages from the Statistics Canada Web Data Service. The script copies published values. It does not fill suppressed cells. Percent changes and month-to-month differences are calculated from those published levels.

Where a series has scalar factor “thousands”, the stored level is the published cell multiplied by 1,000 (21,100.1 thousand persons becomes 21,100,100 persons; 230.883 thousand units becomes 230,883 units). The unscaled cell is kept beside it.

## Commands

Refresh everything:

```bash
python3 scripts/release-pages/ingest.py
```

Refresh one dataset on the next release day:

```bash
python3 scripts/release-pages/ingest.py --only cpi
python3 scripts/release-pages/ingest.py --only jobs
python3 scripts/release-pages/ingest.py --only housing
python3 scripts/release-pages/ingest.py --only inflation
```

`npm run ingest:release` runs the three release pages and then the [inflation section](../inflation/README.md). `--only cpi` does not refresh `/inflation/`. After a CPI release, run the CPI command and then `python3 scripts/inflation/ingest.py` (or `npm run ingest:inflation`). The inflation ingest stops if its Canada all-items index does not match `src/data/release/cpi.json`. After a refresh, run `npm run build` and deploy.

## Tables

| Page | Table | What is used |
| --- | --- | --- |
| `/data/cpi/` | 18-10-0004-01 | All-items index, every geography in the table. Also refreshes `src/data/statcan/cpi.json` for location pages and the cost-of-living page, through `cpi_payload()` in `scripts/ingest_statcan.py`. |
| `/data/jobs/` | 14-10-0287-01 | Canada, seasonally adjusted, 15 years and over: employment and the unemployment rate. |
| `/data/jobs/` | 14-10-0459-01 | Census metropolitan area unemployment rates, three-month moving average, seasonally adjusted. Table 14-10-0380-01 is archived (ended December 2024) and is not used. |
| `/data/housing-starts/` | 34-10-0156-01 | Canada seasonally adjusted annual rate, total units, centres of 10,000 and over. This is not an all-areas rate. |
| `/data/housing-starts/` | 34-10-0154-01 | Actual monthly housing starts, total units, for the selected census metropolitan areas. |

## Output

- `src/data/release/cpi.json`, `jobs.json`, `housing-starts.json`
- `src/data/statcan/cpi.json` (CPI run only)
- `public/data/cpi.csv`, `jobs.csv`, `housing-starts.csv`

Each CSV starts and ends with the Statistics Canada Open Licence attribution: source table, “as is” wording, and the adapted-from line when a figure was calculated or rescaled. Licence: https://www.statcan.gc.ca/en/terms-conditions/open-licence
