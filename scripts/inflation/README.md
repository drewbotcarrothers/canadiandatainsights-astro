# Inflation section

Refreshes `/inflation/` from the Statistics Canada Web Data Service. The script copies published values. It does not fill suppressed cells. Percent changes, approximate basket contributions, and real-wage changes are calculated from those published levels and labelled in `src/data/inflation/inflation.json`.

The Canada all-items index must match `src/data/release/cpi.json`. Refresh the CPI release page first when that file is behind the Web Data Service.

## Commands

```bash
python3 scripts/release-pages/ingest.py --only cpi
python3 scripts/inflation/ingest.py
```

`npm run ingest:inflation` is the second command. `npm run check:inflation` checks the calculator rounding and that the stored 12-month changes still match the published indexes.

`npm run ingest:release` refreshes the CPI, jobs, and housing release pages and then this section. `python3 scripts/release-pages/ingest.py --only cpi` does not refresh the inflation pages.

After a refresh, run `npm run build`.

## Tables

| Table | What is used |
| --- | --- |
| 18-10-0004-01 | Monthly all-items and component indexes for Canada, the provinces, Whitehorse, Yellowknife, Iqaluit, and the city price geographies. |
| 18-10-0005-01 | Annual average all-items index back to the start of the table, for the long-run chart and the purchasing-power calculator. Recent annual food, shelter, energy, rent, and transportation indexes are included. |
| 18-10-0006-01 | Seasonally adjusted all-items index. The 1-month change is calculated here. |
| 18-10-0007-01 | Latest basket link-month weights, distribution to selected geographies. |
| 18-10-0256-01 | Published CPI-trim, CPI-median, and CPI-common year-over-year percent changes. These rates are copied, not recalculated. |
| 18-10-0245-01 | Monthly average retail prices for a fixed grocery list, Canada. |
| 14-10-0063-01 | Average hourly wage, median hourly wage, and average weekly wage, employees aged 15 and over, both full- and part-time, all industries. Provincial rows are the average hourly wage. |

Table 14-10-0064-01 is the annual version of the wage table and is not used. The monthly table is current through the same month as the CPI.

## Output

- `src/data/inflation/inflation.json`
- `public/data/inflation-components.csv`
- `public/data/inflation-annual.csv`
- `public/data/inflation-places.csv`
- `public/data/inflation-core.csv`
- `public/data/inflation-groceries.csv`
- `public/data/inflation-wages.csv`

Each CSV starts and ends with the Statistics Canada Open Licence attribution. Licence: https://www.statcan.gc.ca/en/terms-conditions/open-licence
