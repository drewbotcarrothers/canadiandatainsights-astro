# DRAFT — do not publish

Status: outline only. This file lives under `docs/` and is not a blog post. It is not imported by `src/lib/blog-data.ts`, it is not a page, and it is not in the sitemap.

Suggested title: Who owns, who rents, and where shelter takes 30% of income
Suggested slug, if Andrew later approves a post: `homeownership-and-shelter-costs-by-cma`
Byline, if published: Andrew
Reference period: 2021 Census
Extract date: 2026-11-01
Geographies in the extract: 166 (Canada, 13 provinces and territories, 41 census metropolitan areas, 111 census agglomerations)

Every figure below is copied from `src/data/statcan/housing.json`, produced by `scripts/ingest_statcan.py` from the Statistics Canada CSV downloads. Shares are `part / published household total`, rounded to one decimal the same way the location pages do. Census counts are randomly rounded, so owner plus renter can differ slightly from the household total. Do not fill that gap.

## Sources

- Table [98-10-0252-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=9810025201), Shelter-cost-to-income ratio by tenure. Household counts, tenure, and the count spending 30% or more of income on shelter.
- Table [98-10-0253-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=9810025301), Shelter cost by tenure including presence of mortgage payments and subsidized housing. Median monthly shelter cost.
- Open Government Licence – Canada. This would not be an endorsement by Statistics Canada.

## Headline figures

1. **Canada, owners 66.5%.** 9,807,720 owner households of 14,744,570 private households. Renters are 4,936,850 (33.5%). Table 98-10-0252-01. [Canada housing](/location/canada/#housing).
2. **Canada, shelter burden 20.9%.** 3,074,715 households spent 30% or more of income on shelter. Among owners the share is 14.8% (1,450,000 of 9,807,720). Among renters it is 32.9% (1,624,715 of 4,936,850). Table 98-10-0252-01. Median monthly shelter cost is $1,160 (owners $1,240, renters $1,070). Table 98-10-0253-01. [Canada housing](/location/canada/#housing).
3. **Toronto CMA has the highest 30% burden in the extract, 30.3%.** 685,435 of 2,261,220 households in Toronto (CMA), Ont. Renters in that CMA: 40.0% (315,910 of 789,420). Owners: 25.1% (369,525 of 1,471,805). Median shelter cost $1,700. Tables 98-10-0252-01 and 98-10-0253-01. The Toronto page names the CMA; it is not the City of Toronto alone. [Toronto housing](/location/toronto/#housing).
4. **Montréal CMA is the lowest-ownership census metropolitan area in the extract, 54.4%.** 997,205 owner households of 1,834,620. Renters are 837,420. Shelter burden is 19.5% (357,915). Median shelter cost is $1,010, and the renter median is $880. Tables 98-10-0252-01 and 98-10-0253-01. Some smaller census agglomerations are lower still. The lowest owner share in the extract is Saint-Hyacinthe (CA), Que., at 49.6% (13,820 of 27,855). That place is not one of the deep links below. [Montréal housing](/location/montr-al/#housing).
5. **Vancouver CMA is close to Toronto on burden, and Calgary is not.** Vancouver (CMA), B.C.: 29.6% spending 30% or more (307,440 of 1,037,535), median shelter cost $1,550, owners 62.1% (644,275 of 1,037,535). Calgary (CMA), Alta.: owners 70.5% (396,760 of 562,780), burden 22.4% (126,110), median $1,550. Tables 98-10-0252-01 and 98-10-0253-01. [Vancouver housing](/location/vancouver/#housing). [Calgary housing](/location/calgary/#housing).

Ontario, for the province section: 3,718,255 owner households of 5,440,255 (68.3%). Spending 30% or more: 1,312,095 (24.1%). Median shelter cost $1,370. [Ontario housing](/location/ontario/#housing).

## What the post must not do

Mississauga is inside the Toronto census metropolitan area, and its location page does not show Toronto CMA figures. There is no `#housing` anchor on [Mississauga](/location/mississauga/). Same rule for any census subdivision whose name is not the published geography. Do not write Mississauga's ownership or shelter cost from the Toronto CMA row.

Do not compare these 2021 shelter costs with the monthly Consumer Price Index. The index is a different table (18-10-0004-01, reference month 2026-09 on this extract) and lives on [the cost-of-living page](/cost-of-living/). A later CPI-pulse post would use that page, not these census counts.

## Outline

1. **Open on the national split.** 66.5% of private households owned, 33.5% rented, and 20.9% spent 30% or more of income on shelter. Median shelter cost $1,160 a month. Say that both shares are calculated here from the published counts.
2. **Toronto versus Montréal.** Same census, two large CMAs. Toronto's 30% burden is 30.3% and its median is $1,700. Montréal's owner share is 54.4% and its median is $1,010. Point at the two location anchors and say each block is the CMA, not the city boundary.
3. **The province around Toronto.** Ontario's burden is 24.1% and its median is $1,370, both below the Toronto CMA. Use that to show why a metro figure should not be pasted onto a suburb.
4. **Vancouver and Calgary.** Vancouver's burden is 29.6%. Calgary's owner share is 70.5% with the same $1,550 median as Vancouver. One number (the median) does not describe tenure or the 30% ratio.
5. **How to read a matching page.** Name tables 98-10-0252-01 and 98-10-0253-01, reference period 2021, and the extract date. Link Canada, Ontario, Toronto, Montréal, Vancouver, and Calgary. State that Mississauga has no housing block because the table does not publish Mississauga on its own.
6. **Close.** Owners with a mortgage in Canada: 5,881,675. Median shelter cost for that group: $1,840. Owners without a mortgage: 3,926,045, median $584. Table 98-10-0253-01 for the medians and the mortgage split. Invite the reader to open the location page rather than treat this post as the full table.

## Checks before anyone publishes this

- Re-read each count against `src/data/statcan/housing.json` after a fresh `npm run ingest:statcan`.
- Confirm each deep link still renders a housing section whose `data-housing-geo` matches the geography named in the sentence.
- Keep the byline as Andrew.
