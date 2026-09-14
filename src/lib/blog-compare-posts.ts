import type { BlogPost } from './blog-data';

/**
 * City-vs-city SEO compare posts. Stats pulled from Data/locations.csv
 * (POP_2021, POP_CHANGE_PCT, HH_INCOME_MEDIAN_AFTER_TAX, POP_AVG_AGE)
 * via generateSlug matching in locations.ts. Do not invent figures.
 */
export const compareBlogPosts: BlogPost[] = [
 {
 title: "Toronto vs Montréal: Population & Income Compared",
 slug: "toronto-vs-montreal-2021-census",
 date: "September 15, 2026",
 category: "Comparisons",
 readTime: "6 min read",
 heroImage: "/images/blog/compare/toronto-vs-montreal-2021-census.png",
 chartType: 'bar',
 chartTitle: "Toronto vs Montréal — Key Metrics",
 chartData: [
 { name: "Toronto pop. (M)", value: 2.79 },
 { name: "Montréal pop. (M)", value: 1.76 },
 { name: "Toronto growth %", value: 2.3 },
 { name: "Montréal growth %", value: 3.4 },
 { name: "Toronto med. HH $k", value: 74 },
 { name: "Montréal med. HH $k", value: 56 },
 ],
 excerpt: "Side-by-side 2021 figures for Toronto and Montréal: population, growth, median household income, and average age — with links to full profiles and the comparison tool.",
 content: `
 <p>Toronto and Montréal anchor Canada's two largest municipal populations — one in Ontario, one in Quebec — with very different income and growth profiles in 2021. Here is a clear head-to-head.</p>

 <h2>Population &amp; growth</h2>
 <p><a href="/location/toronto/"><strong>Toronto</strong></a> counted <strong>2,794,356</strong> residents in 2021, compared with <a href="/location/montr-al/"><strong>Montréal</strong></a> at <strong>1,762,949</strong>. Size, however, is not the same as momentum. Toronto's population rose <strong>2.3%</strong> from 2016 to 2021, while Montréal grew <strong>3.4%</strong> over the same period.</p>

 <p>In short: Toronto leads on municipal population; Montréal grew faster during the last census cycle.</p>

 <h2>Income</h2>
 <p>Median after-tax household income tells another part of the story. Toronto households sat at <strong>$74,000</strong> (median after tax), versus <strong>$56,000</strong> in Montréal. That gap matters for cost-of-living and labour-market conversations across the two cities.</p>

 <h2>Age profile</h2>
 <p>Average age was <strong>41.5</strong> years in Toronto and <strong>40.6</strong> in Montréal. Montréal's younger profile contrasts with Toronto in this census snapshot.</p>

 <h2>Quick comparison table</h2>
 <ul>
 <li><strong>Population (2021):</strong> Toronto 2,794,356 · Montréal 1,762,949</li>
 <li><strong>Growth 2016–2021:</strong> Toronto 2.3% · Montréal 3.4%</li>
 <li><strong>Median HH income (after tax):</strong> Toronto $74,000 · Montréal $56,000</li>
 <li><strong>Average age:</strong> Toronto 41.5 · Montréal 40.6</li>
 </ul>

 <blockquote>Toronto leads on population and median household income; Montréal grew slightly faster over 2016–2021 and has a modestly younger average age — all from the same 2021 data release.</blockquote>

 <h2>Explore the full datasets</h2>
 <p>Dig into every section (households, labour, languages, dwellings) on the location profiles, or build your own side-by-side:</p>
 <ul>
 <li><a href="/location/toronto/">Toronto demographic profile</a></li>
 <li><a href="/location/montr-al/">Montréal demographic profile</a></li>
 <li><a href="/compare/">Location Comparison tool</a> — select Census subdivision, then Toronto and Montréal</li>
 </ul>
 `,
 },
 {
 title: "Vancouver vs Calgary: Population & Income Compared",
 slug: "vancouver-vs-calgary-2021-census",
 date: "September 17, 2026",
 category: "Comparisons",
 readTime: "5 min read",
 heroImage: "/images/blog/compare/vancouver-vs-calgary-2021-census.png",
 chartType: 'bar',
 chartTitle: "Vancouver vs Calgary — Key Metrics",
 chartData: [
 { name: "Vancouver pop. (M)", value: 0.66 },
 { name: "Calgary pop. (M)", value: 1.31 },
 { name: "Vancouver growth %", value: 4.9 },
 { name: "Calgary growth %", value: 5.5 },
 { name: "Vancouver med. HH $k", value: 72 },
 { name: "Calgary med. HH $k", value: 85 },
 ],
 excerpt: "Side-by-side 2021 figures for Vancouver and Calgary: population, growth, median household income, and average age — with links to full profiles and the comparison tool.",
 content: `
 <p>Vancouver and Calgary are West Coast and Prairie powerhouses that often compete for talent and capital. The numbers show a clear scale-versus-income contrast. Here is a clear head-to-head.</p>

 <h2>Population &amp; growth</h2>
 <p><a href="/location/vancouver/"><strong>Vancouver</strong></a> counted <strong>662,248</strong> residents in 2021, compared with <a href="/location/calgary/"><strong>Calgary</strong></a> at <strong>1,306,784</strong>. Size, however, is not the same as momentum. Vancouver's population rose <strong>4.9%</strong> from 2016 to 2021, while Calgary grew <strong>5.5%</strong> over the same period.</p>

 <p>In short: Calgary remains more than twice as large; Calgary added people faster from 2016 to 2021.</p>

 <h2>Income</h2>
 <p>Median after-tax household income tells another part of the story. Calgary households sat at <strong>$85,000</strong> (median after tax), versus <strong>$72,000</strong> in Vancouver. That gap matters for cost-of-living and labour-market conversations across the two cities.</p>

 <h2>Age profile</h2>
 <p>Average age was <strong>42.2</strong> years in Vancouver and <strong>38.8</strong> in Calgary. Calgary's younger profile contrasts with Vancouver in this census snapshot.</p>

 <h2>Quick comparison table</h2>
 <ul>
 <li><strong>Population (2021):</strong> Vancouver 662,248 · Calgary 1,306,784</li>
 <li><strong>Growth 2016–2021:</strong> Vancouver 4.9% · Calgary 5.5%</li>
 <li><strong>Median HH income (after tax):</strong> Vancouver $72,000 · Calgary $85,000</li>
 <li><strong>Average age:</strong> Vancouver 42.2 · Calgary 38.8</li>
 </ul>

 <blockquote>Calgary is roughly twice Vancouver's municipal population, grew faster, and posts a higher median after-tax household income, while Vancouver's average age runs slightly older.</blockquote>

 <h2>Explore the full datasets</h2>
 <p>Dig into every section (households, labour, languages, dwellings) on the location profiles, or build your own side-by-side:</p>
 <ul>
 <li><a href="/location/vancouver/">Vancouver demographic profile</a></li>
 <li><a href="/location/calgary/">Calgary demographic profile</a></li>
 <li><a href="/compare/">Location Comparison tool</a> — select Census subdivision, then Vancouver and Calgary</li>
 </ul>
 `,
 },
 {
 title: "Edmonton vs Calgary: Population & Income Compared",
 slug: "edmonton-vs-calgary-2021-census",
 date: "September 19, 2026",
 category: "Comparisons",
 readTime: "6 min read",
 heroImage: "/images/blog/compare/edmonton-vs-calgary-2021-census.png",
 chartType: 'bar',
 chartTitle: "Edmonton vs Calgary — Key Metrics",
 chartData: [
 { name: "Edmonton pop. (M)", value: 1.01 },
 { name: "Calgary pop. (M)", value: 1.31 },
 { name: "Edmonton growth %", value: 8.3 },
 { name: "Calgary growth %", value: 5.5 },
 { name: "Edmonton med. HH $k", value: 79.5 },
 { name: "Calgary med. HH $k", value: 85 },
 ],
 excerpt: "Side-by-side 2021 figures for Edmonton and Calgary: population, growth, median household income, and average age — with links to full profiles and the comparison tool.",
 content: `
 <p>Alberta's two largest cities are frequent peers in labour-market and housing debates. Here is a clear head-to-head.</p>

 <h2>Population &amp; growth</h2>
 <p><a href="/location/edmonton/"><strong>Edmonton</strong></a> counted <strong>1,010,899</strong> residents in 2021, compared with <a href="/location/calgary/"><strong>Calgary</strong></a> at <strong>1,306,784</strong>. Size, however, is not the same as momentum. Edmonton's population rose <strong>8.3%</strong> from 2016 to 2021, while Calgary grew <strong>5.5%</strong> over the same period.</p>

 <p>In short: Calgary leads on municipal population; Edmonton grew faster during the last census cycle.</p>

 <h2>Income</h2>
 <p>Median after-tax household income tells another part of the story. Calgary households sat at <strong>$85,000</strong> (median after tax), versus <strong>$79,500</strong> in Edmonton. That gap matters for cost-of-living and labour-market conversations across the two cities.</p>

 <h2>Age profile</h2>
 <p>Average age was <strong>38.4</strong> years in Edmonton and <strong>38.8</strong> in Calgary. Edmonton's younger profile contrasts with Calgary in this census snapshot.</p>

 <h2>Quick comparison table</h2>
 <ul>
 <li><strong>Population (2021):</strong> Edmonton 1,010,899 · Calgary 1,306,784</li>
 <li><strong>Growth 2016–2021:</strong> Edmonton 8.3% · Calgary 5.5%</li>
 <li><strong>Median HH income (after tax):</strong> Edmonton $79,500 · Calgary $85,000</li>
 <li><strong>Average age:</strong> Edmonton 38.4 · Calgary 38.8</li>
 </ul>

 <blockquote>Calgary remains larger with higher median household income; Edmonton posted stronger 2016–2021 growth and a slightly younger average age — all from the same 2021 data release.</blockquote>

 <h2>Explore the full datasets</h2>
 <p>Dig into every section (households, labour, languages, dwellings) on the location profiles, or build your own side-by-side:</p>
 <ul>
 <li><a href="/location/edmonton/">Edmonton demographic profile</a></li>
 <li><a href="/location/calgary/">Calgary demographic profile</a></li>
 <li><a href="/compare/">Location Comparison tool</a> — select Census subdivision, then Edmonton and Calgary</li>
 </ul>
 `,
 },
 {
 title: "Ottawa vs Gatineau: Population & Income Compared",
 slug: "ottawa-vs-gatineau-2021-census",
 date: "September 21, 2026",
 category: "Comparisons",
 readTime: "5 min read",
 heroImage: "/images/blog/compare/ottawa-vs-gatineau-2021-census.png",
 chartType: 'bar',
 chartTitle: "Ottawa vs Gatineau — Key Metrics",
 chartData: [
 { name: "Ottawa pop. (M)", value: 1.02 },
 { name: "Gatineau pop. (M)", value: 0.29 },
 { name: "Ottawa growth %", value: 8.9 },
 { name: "Gatineau growth %", value: 5.4 },
 { name: "Ottawa med. HH $k", value: 88 },
 { name: "Gatineau med. HH $k", value: 69.5 },
 ],
 excerpt: "Side-by-side 2021 figures for Ottawa and Gatineau: population, growth, median household income, and average age — with links to full profiles and the comparison tool.",
 content: `
 <p>Ottawa and Gatineau form one of Canada's most integrated cross-provincial urban regions. Census subdivision figures for 2021 separate the Ontario and Quebec sides of the National Capital Region. Here is a clear head-to-head.</p>

 <h2>Population &amp; growth</h2>
 <p><a href="/location/ottawa/"><strong>Ottawa</strong></a> counted <strong>1,017,449</strong> residents in 2021, compared with <a href="/location/gatineau/"><strong>Gatineau</strong></a> at <strong>291,041</strong>. Size, however, is not the same as momentum. Ottawa's population rose <strong>8.9%</strong> from 2016 to 2021, while Gatineau grew <strong>5.4%</strong> over the same period.</p>

 <p>In short: Ottawa remains more than twice as large; Ottawa added people faster from 2016 to 2021.</p>

 <h2>Income</h2>
 <p>Median after-tax household income tells another part of the story. Ottawa households sat at <strong>$88,000</strong> (median after tax), versus <strong>$69,500</strong> in Gatineau. That gap matters for cost-of-living and labour-market conversations across the two cities.</p>

 <h2>Age profile</h2>
 <p>Average age was <strong>40.7</strong> years in Ottawa and <strong>40.3</strong> in Gatineau. Gatineau's younger profile contrasts with Ottawa in this census snapshot.</p>

 <h2>Quick comparison table</h2>
 <ul>
 <li><strong>Population (2021):</strong> Ottawa 1,017,449 · Gatineau 291,041</li>
 <li><strong>Growth 2016–2021:</strong> Ottawa 8.9% · Gatineau 5.4%</li>
 <li><strong>Median HH income (after tax):</strong> Ottawa $88,000 · Gatineau $69,500</li>
 <li><strong>Average age:</strong> Ottawa 40.7 · Gatineau 40.3</li>
 </ul>

 <blockquote>Ottawa dominates on population, growth, and median household income; Gatineau is smaller with a similar average age — a classic capital-region scale gap in the 2021 data.</blockquote>

 <h2>Explore the full datasets</h2>
 <p>Dig into every section (households, labour, languages, dwellings) on the location profiles, or build your own side-by-side:</p>
 <ul>
 <li><a href="/location/ottawa/">Ottawa demographic profile</a></li>
 <li><a href="/location/gatineau/">Gatineau demographic profile</a></li>
 <li><a href="/compare/">Location Comparison tool</a> — select Census subdivision, then Ottawa and Gatineau</li>
 </ul>
 `,
 },
 {
 title: "Mississauga vs Brampton: Population & Income Compared",
 slug: "mississauga-vs-brampton-2021-census",
 date: "September 23, 2026",
 category: "Comparisons",
 readTime: "7 min read",
 heroImage: "/images/blog/compare/mississauga-vs-brampton-2021-census.png",
 chartType: 'bar',
 chartTitle: "Mississauga vs Brampton — Key Metrics",
 chartData: [
 { name: "Mississauga pop. (k)", value: 718 },
 { name: "Brampton pop. (k)", value: 656 },
 { name: "Mississauga growth %", value: -0.5 },
 { name: "Brampton growth %", value: 10.6 },
 { name: "Mississauga med. HH $k", value: 89 },
 { name: "Brampton med. HH $k", value: 98 },
 ],
 excerpt: "Side-by-side 2021 figures for Mississauga and Brampton: population, growth, median household income, and average age — with links to full profiles and the comparison tool.",
 content: `
 <p>Mississauga and Brampton are neighbouring Peel Region giants that often move in opposite directions on growth. The 2021 snapshot captures that divergence clearly. Here is a clear head-to-head.</p>

 <h2>Population &amp; growth</h2>
 <p><a href="/location/mississauga/"><strong>Mississauga</strong></a> counted <strong>717,961</strong> residents in 2021, compared with <a href="/location/brampton/"><strong>Brampton</strong></a> at <strong>656,480</strong>. Size, however, is not the same as momentum. Mississauga's population changed by <strong>-0.5%</strong> from 2016 to 2021, while Brampton grew <strong>10.6%</strong> over the same period.</p>

 <p>In short: Mississauga remains larger by municipal population, but Brampton surged while Mississauga edged down over 2016–2021.</p>

 <h2>Income</h2>
 <p>Median after-tax household income tells another part of the story. Brampton households sat at <strong>$98,000</strong> (median after tax), versus <strong>$89,000</strong> in Mississauga. That gap matters for cost-of-living and labour-market conversations across the two cities.</p>

 <h2>Age profile</h2>
 <p>Average age was <strong>41.1</strong> years in Mississauga and <strong>37.5</strong> in Brampton. Brampton's younger profile contrasts with Mississauga in this census snapshot.</p>

 <h2>Quick comparison table</h2>
 <ul>
 <li><strong>Population (2021):</strong> Mississauga 717,961 · Brampton 656,480</li>
 <li><strong>Growth 2016–2021:</strong> Mississauga -0.5% · Brampton 10.6%</li>
 <li><strong>Median HH income (after tax):</strong> Mississauga $89,000 · Brampton $98,000</li>
 <li><strong>Average age:</strong> Mississauga 41.1 · Brampton 37.5</li>
 </ul>

 <blockquote>Mississauga stays slightly larger but shrank slightly from 2016–2021; Brampton surged in population, posts higher median household income, and has a younger average age.</blockquote>

 <h2>Explore the full datasets</h2>
 <p>Dig into every section (households, labour, languages, dwellings) on the location profiles, or build your own side-by-side:</p>
 <ul>
 <li><a href="/location/mississauga/">Mississauga demographic profile</a></li>
 <li><a href="/location/brampton/">Brampton demographic profile</a></li>
 <li><a href="/compare/">Location Comparison tool</a> — select Census subdivision, then Mississauga and Brampton</li>
 </ul>
 `,
 },
 {
 title: "Hamilton vs Burlington: Population & Income Compared",
 slug: "hamilton-vs-burlington-2021-census",
 date: "September 26, 2026",
 category: "Comparisons",
 readTime: "5 min read",
 heroImage: "/images/blog/compare/hamilton-vs-burlington-2021-census.png",
 chartType: 'bar',
 chartTitle: "Hamilton vs Burlington — Key Metrics",
 chartData: [
 { name: "Hamilton pop. (k)", value: 569 },
 { name: "Burlington pop. (k)", value: 187 },
 { name: "Hamilton growth %", value: 6 },
 { name: "Burlington growth %", value: 2 },
 { name: "Hamilton med. HH $k", value: 75.5 },
 { name: "Burlington med. HH $k", value: 94 },
 ],
 excerpt: "Side-by-side 2021 figures for Hamilton and Burlington: population, growth, median household income, and average age — with links to full profiles and the comparison tool.",
 content: `
 <p>Hamilton and Burlington sit on the western edge of the Greater Toronto and Hamilton Area — one a major industrial city, the other a smaller, higher-income neighbour. Here is a clear head-to-head.</p>

 <h2>Population &amp; growth</h2>
 <p><a href="/location/hamilton/"><strong>Hamilton</strong></a> counted <strong>569,353</strong> residents in 2021, compared with <a href="/location/burlington/"><strong>Burlington</strong></a> at <strong>186,948</strong>. Size, however, is not the same as momentum. Hamilton's population rose <strong>6%</strong> from 2016 to 2021, while Burlington grew <strong>2%</strong> over the same period.</p>

 <p>In short: Hamilton remains more than twice as large; Hamilton added people faster from 2016 to 2021.</p>

 <h2>Income</h2>
 <p>Median after-tax household income tells another part of the story. Burlington households sat at <strong>$94,000</strong> (median after tax), versus <strong>$75,500</strong> in Hamilton. That gap matters for cost-of-living and labour-market conversations across the two cities.</p>

 <h2>Age profile</h2>
 <p>Average age was <strong>41.5</strong> years in Hamilton and <strong>43.3</strong> in Burlington. Hamilton's younger profile contrasts with Burlington in this census snapshot.</p>

 <h2>Quick comparison table</h2>
 <ul>
 <li><strong>Population (2021):</strong> Hamilton 569,353 · Burlington 186,948</li>
 <li><strong>Growth 2016–2021:</strong> Hamilton 6% · Burlington 2%</li>
 <li><strong>Median HH income (after tax):</strong> Hamilton $75,500 · Burlington $94,000</li>
 <li><strong>Average age:</strong> Hamilton 41.5 · Burlington 43.3</li>
 </ul>

 <blockquote>Hamilton leads on population and recent growth; Burlington posts substantially higher median household income and an older average age — all from the same 2021 data release.</blockquote>

 <h2>Explore the full datasets</h2>
 <p>Dig into every section (households, labour, languages, dwellings) on the location profiles, or build your own side-by-side:</p>
 <ul>
 <li><a href="/location/hamilton/">Hamilton demographic profile</a></li>
 <li><a href="/location/burlington/">Burlington demographic profile</a></li>
 <li><a href="/compare/">Location Comparison tool</a> — select Census subdivision, then Hamilton and Burlington</li>
 </ul>
 `,
 },
 {
 title: "Winnipeg vs Saskatoon: Population & Income Compared",
 slug: "winnipeg-vs-saskatoon-2021-census",
 date: "September 28, 2026",
 category: "Comparisons",
 readTime: "6 min read",
 heroImage: "/images/blog/compare/winnipeg-vs-saskatoon-2021-census.png",
 chartType: 'bar',
 chartTitle: "Winnipeg vs Saskatoon — Key Metrics",
 chartData: [
 { name: "Winnipeg pop. (k)", value: 750 },
 { name: "Saskatoon pop. (k)", value: 266 },
 { name: "Winnipeg growth %", value: 6.3 },
 { name: "Saskatoon growth %", value: 7.7 },
 { name: "Winnipeg med. HH $k", value: 69.5 },
 { name: "Saskatoon med. HH $k", value: 74.5 },
 ],
 excerpt: "Side-by-side 2021 figures for Winnipeg and Saskatoon: population, growth, median household income, and average age — with links to full profiles and the comparison tool.",
 content: `
 <p>Winnipeg and Saskatoon are Prairie anchors — Manitoba's largest city and Saskatchewan's largest. Side-by-side 2021 figures highlight scale, growth, and income differences. Here is a clear head-to-head.</p>

 <h2>Population &amp; growth</h2>
 <p><a href="/location/winnipeg/"><strong>Winnipeg</strong></a> counted <strong>749,607</strong> residents in 2021, compared with <a href="/location/saskatoon/"><strong>Saskatoon</strong></a> at <strong>266,141</strong>. Size, however, is not the same as momentum. Winnipeg's population rose <strong>6.3%</strong> from 2016 to 2021, while Saskatoon grew <strong>7.7%</strong> over the same period.</p>

 <p>In short: Winnipeg remains more than twice as large; Saskatoon added people faster from 2016 to 2021.</p>

 <h2>Income</h2>
 <p>Median after-tax household income tells another part of the story. Saskatoon households sat at <strong>$74,500</strong> (median after tax), versus <strong>$69,500</strong> in Winnipeg. That gap matters for cost-of-living and labour-market conversations across the two cities.</p>

 <h2>Age profile</h2>
 <p>Average age was <strong>40.3</strong> years in Winnipeg and <strong>38.8</strong> in Saskatoon. Saskatoon's younger profile contrasts with Winnipeg in this census snapshot.</p>

 <h2>Quick comparison table</h2>
 <ul>
 <li><strong>Population (2021):</strong> Winnipeg 749,607 · Saskatoon 266,141</li>
 <li><strong>Growth 2016–2021:</strong> Winnipeg 6.3% · Saskatoon 7.7%</li>
 <li><strong>Median HH income (after tax):</strong> Winnipeg $69,500 · Saskatoon $74,500</li>
 <li><strong>Average age:</strong> Winnipeg 40.3 · Saskatoon 38.8</li>
 </ul>

 <blockquote>Winnipeg is nearly three times Saskatoon's size; Saskatoon grew faster, has higher median household income, and a younger average age in 2021.</blockquote>

 <h2>Explore the full datasets</h2>
 <p>Dig into every section (households, labour, languages, dwellings) on the location profiles, or build your own side-by-side:</p>
 <ul>
 <li><a href="/location/winnipeg/">Winnipeg demographic profile</a></li>
 <li><a href="/location/saskatoon/">Saskatoon demographic profile</a></li>
 <li><a href="/compare/">Location Comparison tool</a> — select Census subdivision, then Winnipeg and Saskatoon</li>
 </ul>
 `,
 },
 {
 title: "Halifax vs Québec: Population & Income Compared",
 slug: "halifax-vs-quebec-2021-census",
 date: "October 1, 2026",
 category: "Comparisons",
 readTime: "6 min read",
 heroImage: "/images/blog/compare/halifax-vs-quebec-2021-census.png",
 chartType: 'bar',
 chartTitle: "Halifax vs Québec — Key Metrics",
 chartData: [
 { name: "Halifax pop. (k)", value: 440 },
 { name: "Québec pop. (k)", value: 549 },
 { name: "Halifax growth %", value: 9.1 },
 { name: "Québec growth %", value: 3.3 },
 { name: "Halifax med. HH $k", value: 69.5 },
 { name: "Québec med. HH $k", value: 60.8 },
 ],
 excerpt: "Side-by-side 2021 figures for Halifax and Québec: population, growth, median household income, and average age — with links to full profiles and the comparison tool.",
 content: `
 <p>Halifax and Québec are major Atlantic and Quebec City hubs often compared for livability and public-sector employment. Census subdivision data for 2021 puts population, growth, and income side by side. Here is a clear head-to-head.</p>

 <h2>Population &amp; growth</h2>
 <p><a href="/location/halifax-regional-municipality-rgm/"><strong>Halifax</strong></a> counted <strong>439,819</strong> residents in 2021, compared with <a href="/location/qu-bec/"><strong>Québec</strong></a> at <strong>549,459</strong>. Size, however, is not the same as momentum. Halifax's population rose <strong>9.1%</strong> from 2016 to 2021, while Québec grew <strong>3.3%</strong> over the same period.</p>

 <p>In short: Québec leads on municipal population; Halifax grew faster during the last census cycle.</p>

 <h2>Income</h2>
 <p>Median after-tax household income tells another part of the story. Halifax households sat at <strong>$69,500</strong> (median after tax), versus <strong>$60,800</strong> in Québec. That gap matters for cost-of-living and labour-market conversations across the two cities.</p>

 <h2>Age profile</h2>
 <p>Average age was <strong>41.3</strong> years in Halifax and <strong>43.8</strong> in Québec. Halifax's younger profile contrasts with Québec in this census snapshot.</p>

 <h2>Quick comparison table</h2>
 <ul>
 <li><strong>Population (2021):</strong> Halifax 439,819 · Québec 549,459</li>
 <li><strong>Growth 2016–2021:</strong> Halifax 9.1% · Québec 3.3%</li>
 <li><strong>Median HH income (after tax):</strong> Halifax $69,500 · Québec $60,800</li>
 <li><strong>Average age:</strong> Halifax 41.3 · Québec 43.8</li>
 </ul>

 <blockquote>Québec is larger by population; Halifax grew much faster from 2016–2021 and posts higher median after-tax household income, with a younger average age.</blockquote>

 <h2>Explore the full datasets</h2>
 <p>Dig into every section (households, labour, languages, dwellings) on the location profiles, or build your own side-by-side:</p>
 <ul>
 <li><a href="/location/halifax-regional-municipality-rgm/">Halifax demographic profile</a></li>
 <li><a href="/location/qu-bec/">Québec demographic profile</a></li>
 <li><a href="/compare/">Location Comparison tool</a> — select Census subdivision, then Halifax and Québec</li>
 </ul>
 `,
 },
 {
 title: "Surrey vs Burnaby: Population & Income Compared",
 slug: "surrey-vs-burnaby-2021-census",
 date: "October 3, 2026",
 category: "Comparisons",
 readTime: "5 min read",
 heroImage: "/images/blog/compare/surrey-vs-burnaby-2021-census.png",
 chartType: 'bar',
 chartTitle: "Surrey vs Burnaby — Key Metrics",
 chartData: [
 { name: "Surrey pop. (k)", value: 568 },
 { name: "Burnaby pop. (k)", value: 249 },
 { name: "Surrey growth %", value: 9.7 },
 { name: "Burnaby growth %", value: 7 },
 { name: "Surrey med. HH $k", value: 87 },
 { name: "Burnaby med. HH $k", value: 73.5 },
 ],
 excerpt: "Side-by-side 2021 figures for Surrey and Burnaby: population, growth, median household income, and average age — with links to full profiles and the comparison tool.",
 content: `
 <p>Surrey and Burnaby are two of Metro Vancouver's largest municipalities outside the City of Vancouver itself. Figures for 2021 show Surrey pulling ahead on growth and income. Here is a clear head-to-head.</p>

 <h2>Population &amp; growth</h2>
 <p><a href="/location/surrey/"><strong>Surrey</strong></a> counted <strong>568,322</strong> residents in 2021, compared with <a href="/location/burnaby/"><strong>Burnaby</strong></a> at <strong>249,125</strong>. Size, however, is not the same as momentum. Surrey's population rose <strong>9.7%</strong> from 2016 to 2021, while Burnaby grew <strong>7%</strong> over the same period.</p>

 <p>In short: Surrey remains more than twice as large; Surrey added people faster from 2016 to 2021.</p>

 <h2>Income</h2>
 <p>Median after-tax household income tells another part of the story. Surrey households sat at <strong>$87,000</strong> (median after tax), versus <strong>$73,500</strong> in Burnaby. That gap matters for cost-of-living and labour-market conversations across the two cities.</p>

 <h2>Age profile</h2>
 <p>Average age was <strong>39.5</strong> years in Surrey and <strong>42</strong> in Burnaby. Surrey's younger profile contrasts with Burnaby in this census snapshot.</p>

 <h2>Quick comparison table</h2>
 <ul>
 <li><strong>Population (2021):</strong> Surrey 568,322 · Burnaby 249,125</li>
 <li><strong>Growth 2016–2021:</strong> Surrey 9.7% · Burnaby 7%</li>
 <li><strong>Median HH income (after tax):</strong> Surrey $87,000 · Burnaby $73,500</li>
 <li><strong>Average age:</strong> Surrey 39.5 · Burnaby 42</li>
 </ul>

 <blockquote>Surrey is more than twice Burnaby's population, grew faster, and has higher median household income plus a younger average age — all from the same 2021 data release.</blockquote>

 <h2>Explore the full datasets</h2>
 <p>Dig into every section (households, labour, languages, dwellings) on the location profiles, or build your own side-by-side:</p>
 <ul>
 <li><a href="/location/surrey/">Surrey demographic profile</a></li>
 <li><a href="/location/burnaby/">Burnaby demographic profile</a></li>
 <li><a href="/compare/">Location Comparison tool</a> — select Census subdivision, then Surrey and Burnaby</li>
 </ul>
 `,
 },
 {
 title: "London vs Kitchener: Population & Income Compared",
 slug: "london-vs-kitchener-2021-census",
 date: "October 6, 2026",
 category: "Comparisons",
 readTime: "6 min read",
 heroImage: "/images/blog/compare/london-vs-kitchener-2021-census.png",
 chartType: 'bar',
 chartTitle: "London vs Kitchener — Key Metrics",
 chartData: [
 { name: "London pop. (k)", value: 422 },
 { name: "Kitchener pop. (k)", value: 257 },
 { name: "London growth %", value: 10 },
 { name: "Kitchener growth %", value: 10.1 },
 { name: "London med. HH $k", value: 68.5 },
 { name: "Kitchener med. HH $k", value: 76.5 },
 ],
 excerpt: "Side-by-side 2021 figures for London and Kitchener: population, growth, median household income, and average age — with links to full profiles and the comparison tool.",
 content: `
 <p>London and Kitchener are southwestern Ontario mid-sized cities that both posted double-digit growth in the last census cycle. Here is a clear head-to-head.</p>

 <h2>Population &amp; growth</h2>
 <p><a href="/location/london/"><strong>London</strong></a> counted <strong>422,324</strong> residents in 2021, compared with <a href="/location/kitchener/"><strong>Kitchener</strong></a> at <strong>256,885</strong>. Size, however, is not the same as momentum. London's population rose <strong>10%</strong> from 2016 to 2021, while Kitchener grew <strong>10.1%</strong> over the same period.</p>

 <p>In short: London leads on municipal population, while both cities posted similar growth rates in the last census cycle.</p>

 <h2>Income</h2>
 <p>Median after-tax household income tells another part of the story. Kitchener households sat at <strong>$76,500</strong> (median after tax), versus <strong>$68,500</strong> in London. That gap matters for cost-of-living and labour-market conversations across the two cities.</p>

 <h2>Age profile</h2>
 <p>Average age was <strong>40.7</strong> years in London and <strong>39</strong> in Kitchener. Kitchener's younger profile contrasts with London in this census snapshot.</p>

 <h2>Quick comparison table</h2>
 <ul>
 <li><strong>Population (2021):</strong> London 422,324 · Kitchener 256,885</li>
 <li><strong>Growth 2016–2021:</strong> London 10% · Kitchener 10.1%</li>
 <li><strong>Median HH income (after tax):</strong> London $68,500 · Kitchener $76,500</li>
 <li><strong>Average age:</strong> London 40.7 · Kitchener 39</li>
 </ul>

 <blockquote>London is larger; both cities grew about 10% from 2016–2021, with Kitchener slightly ahead on growth and median household income, and a younger average age.</blockquote>

 <h2>Explore the full datasets</h2>
 <p>Dig into every section (households, labour, languages, dwellings) on the location profiles, or build your own side-by-side:</p>
 <ul>
 <li><a href="/location/london/">London demographic profile</a></li>
 <li><a href="/location/kitchener/">Kitchener demographic profile</a></li>
 <li><a href="/compare/">Location Comparison tool</a> — select Census subdivision, then London and Kitchener</li>
 </ul>
 `,
 },
 {
 title: "Regina vs Saskatoon: Population & Income Compared",
 slug: "regina-vs-saskatoon-2021-census",
 date: "October 8, 2026",
 category: "Comparisons",
 readTime: "5 min read",
 heroImage: "/images/blog/compare/regina-vs-saskatoon-2021-census.png",
 chartType: 'bar',
 chartTitle: "Regina vs Saskatoon — Key Metrics",
 chartData: [
 { name: "Regina pop. (k)", value: 226 },
 { name: "Saskatoon pop. (k)", value: 266 },
 { name: "Regina growth %", value: 5.3 },
 { name: "Saskatoon growth %", value: 7.7 },
 { name: "Regina med. HH $k", value: 76.5 },
 { name: "Saskatoon med. HH $k", value: 74.5 },
 ],
 excerpt: "Side-by-side 2021 figures for Regina and Saskatoon: population, growth, median household income, and average age — with links to full profiles and the comparison tool.",
 content: `
 <p>Regina and Saskatoon are Saskatchewan's two dominant cities. The numbers show Saskatoon ahead on size and growth, with incomes and ages nearly tied. Here is a clear head-to-head.</p>

 <h2>Population &amp; growth</h2>
 <p><a href="/location/regina/"><strong>Regina</strong></a> counted <strong>226,404</strong> residents in 2021, compared with <a href="/location/saskatoon/"><strong>Saskatoon</strong></a> at <strong>266,141</strong>. Size, however, is not the same as momentum. Regina's population rose <strong>5.3%</strong> from 2016 to 2021, while Saskatoon grew <strong>7.7%</strong> over the same period.</p>

 <p>In short: Saskatoon leads on municipal population; Saskatoon grew faster during the last census cycle.</p>

 <h2>Income</h2>
 <p>Median after-tax household income tells another part of the story. Regina households sat at <strong>$76,500</strong> (median after tax), versus <strong>$74,500</strong> in Saskatoon. That gap matters for cost-of-living and labour-market conversations across the two cities.</p>

 <h2>Age profile</h2>
 <p>Average age was <strong>39</strong> years in Regina and <strong>38.8</strong> in Saskatoon. Saskatoon's younger profile contrasts with Regina in this census snapshot.</p>

 <h2>Quick comparison table</h2>
 <ul>
 <li><strong>Population (2021):</strong> Regina 226,404 · Saskatoon 266,141</li>
 <li><strong>Growth 2016–2021:</strong> Regina 5.3% · Saskatoon 7.7%</li>
 <li><strong>Median HH income (after tax):</strong> Regina $76,500 · Saskatoon $74,500</li>
 <li><strong>Average age:</strong> Regina 39 · Saskatoon 38.8</li>
 </ul>

 <blockquote>Saskatoon leads on population and 2016–2021 growth; median after-tax household incomes are identical and average ages match — a tight provincial peer comparison.</blockquote>

 <h2>Explore the full datasets</h2>
 <p>Dig into every section (households, labour, languages, dwellings) on the location profiles, or build your own side-by-side:</p>
 <ul>
 <li><a href="/location/regina/">Regina demographic profile</a></li>
 <li><a href="/location/saskatoon/">Saskatoon demographic profile</a></li>
 <li><a href="/compare/">Location Comparison tool</a> — select Census subdivision, then Regina and Saskatoon</li>
 </ul>
 `,
 },
 {
 title: "Vaughan vs Markham: Population & Income Compared",
 slug: "vaughan-vs-markham-2021-census",
 date: "October 10, 2026",
 category: "Comparisons",
 readTime: "7 min read",
 heroImage: "/images/blog/compare/vaughan-vs-markham-2021-census.png",
 chartType: 'bar',
 chartTitle: "Vaughan vs Markham — Key Metrics",
 chartData: [
 { name: "Vaughan pop. (k)", value: 323 },
 { name: "Markham pop. (k)", value: 339 },
 { name: "Vaughan growth %", value: 5.5 },
 { name: "Markham growth %", value: 2.9 },
 { name: "Vaughan med. HH $k", value: 107 },
 { name: "Markham med. HH $k", value: 92 },
 ],
 excerpt: "Side-by-side 2021 figures for Vaughan and Markham: population, growth, median household income, and average age — with links to full profiles and the comparison tool.",
 content: `
 <p>Vaughan and Markham are York Region neighbours known for rapid suburban growth and high household incomes. 2021 figures put their populations and paycheques in context. Here is a clear head-to-head.</p>

 <h2>Population &amp; growth</h2>
 <p><a href="/location/vaughan/"><strong>Vaughan</strong></a> counted <strong>323,103</strong> residents in 2021, compared with <a href="/location/markham/"><strong>Markham</strong></a> at <strong>338,503</strong>. Size, however, is not the same as momentum. Vaughan's population rose <strong>5.5%</strong> from 2016 to 2021, while Markham grew <strong>2.9%</strong> over the same period.</p>

 <p>In short: Markham leads on municipal population; Vaughan grew faster during the last census cycle.</p>

 <h2>Income</h2>
 <p>Median after-tax household income tells another part of the story. Vaughan households sat at <strong>$107,000</strong> (median after tax), versus <strong>$92,000</strong> in Markham. That gap matters for cost-of-living and labour-market conversations across the two cities.</p>

 <h2>Age profile</h2>
 <p>Average age was <strong>40.9</strong> years in Vaughan and <strong>41.8</strong> in Markham. Vaughan's younger profile contrasts with Markham in this census snapshot.</p>

 <h2>Quick comparison table</h2>
 <ul>
 <li><strong>Population (2021):</strong> Vaughan 323,103 · Markham 338,503</li>
 <li><strong>Growth 2016–2021:</strong> Vaughan 5.5% · Markham 2.9%</li>
 <li><strong>Median HH income (after tax):</strong> Vaughan $107,000 · Markham $92,000</li>
 <li><strong>Average age:</strong> Vaughan 40.9 · Markham 41.8</li>
 </ul>

 <blockquote>Markham edges Vaughan on population; Vaughan grew faster and posts a higher median after-tax household income, with a slightly younger average age.</blockquote>

 <h2>Explore the full datasets</h2>
 <p>Dig into every section (households, labour, languages, dwellings) on the location profiles, or build your own side-by-side:</p>
 <ul>
 <li><a href="/location/vaughan/">Vaughan demographic profile</a></li>
 <li><a href="/location/markham/">Markham demographic profile</a></li>
 <li><a href="/compare/">Location Comparison tool</a> — select Census subdivision, then Vaughan and Markham</li>
 </ul>
 `,
 },
 {
 title: "Toronto vs Vancouver: Population & Income Compared",
 slug: "toronto-vs-vancouver-2021-census",
 date: "October 13, 2026",
 category: "Comparisons",
 readTime: "6 min read",
 heroImage: "/images/blog/compare/toronto-vs-vancouver-2021-census.png",
 chartType: 'bar',
 chartTitle: "Toronto vs Vancouver — Key Metrics",
 chartData: [
 { name: "Toronto pop. (M)", value: 2.79 },
 { name: "Vancouver pop. (M)", value: 0.66 },
 { name: "Toronto growth %", value: 2.3 },
 { name: "Vancouver growth %", value: 4.9 },
 { name: "Toronto med. HH $k", value: 74 },
 { name: "Vancouver med. HH $k", value: 72 },
 ],
 excerpt: "Side-by-side 2021 figures for Toronto and Vancouver: population, growth, median household income, and average age — with links to full profiles and the comparison tool.",
 content: `
 <p>Toronto and Vancouver are frequently compared across Canada's largest metros. The numbers put population, growth, income, and age side by side. Here is a clear head-to-head.</p>

 <h2>Population &amp; growth</h2>
 <p><a href="/location/toronto/"><strong>Toronto</strong></a> counted <strong>2,794,356</strong> residents in 2021, compared with <a href="/location/vancouver/"><strong>Vancouver</strong></a> at <strong>662,248</strong>. Size, however, is not the same as momentum. Toronto's population rose <strong>2.3%</strong> from 2016 to 2021, while Vancouver grew <strong>4.9%</strong> over the same period.</p>

 <p>In short: Toronto leads on municipal population; Vancouver grew faster during the last census cycle.</p>

 <h2>Income</h2>
 <p>Median after-tax household income tells another part of the story. Toronto households sat at <strong>$74,000</strong> (median after tax), versus <strong>$72,000</strong> in Vancouver. That gap matters for cost-of-living and labour-market conversations across the two cities.</p>

 <h2>Age profile</h2>
 <p>Average age was <strong>41.5</strong> years in Toronto and <strong>42.2</strong> in Vancouver. Toronto's younger profile contrasts with Vancouver in this census snapshot.</p>

 <h2>Quick comparison table</h2>
 <ul>
 <li><strong>Population (2021):</strong> Toronto 2,794,356 · Vancouver 662,248</li>
 <li><strong>Growth 2016–2021:</strong> Toronto 2.3% · Vancouver 4.9%</li>
 <li><strong>Median HH income (after tax):</strong> Toronto $74,000 · Vancouver $72,000</li>
 <li><strong>Average age:</strong> Toronto 41.5 · Vancouver 42.2</li>
 </ul>

 <blockquote>Toronto leads on population; Vancouver grew faster over 2016–2021; Toronto posts higher median after-tax household income, with Toronto slightly younger on average age.</blockquote>

 <h2>Explore the full datasets</h2>
 <p>Dig into every section (households, labour, languages, dwellings) on the location profiles, or build your own side-by-side:</p>
 <ul>
 <li><a href="/location/toronto/">Toronto demographic profile</a></li>
 <li><a href="/location/vancouver/">Vancouver demographic profile</a></li>
 <li><a href="/compare/">Location Comparison tool</a> — select Census subdivision, then Toronto and Vancouver</li>
 </ul>
 `,
 },
 {
 title: "Montréal vs Québec: Population & Income Compared",
 slug: "montreal-vs-quebec-2021-census",
 date: "October 15, 2026",
 category: "Comparisons",
 readTime: "5 min read",
 heroImage: "/images/blog/compare/montreal-vs-quebec-2021-census.png",
 chartType: 'bar',
 chartTitle: "Montréal vs Québec — Key Metrics",
 chartData: [
 { name: "Montréal pop. (M)", value: 1.76 },
 { name: "Québec pop. (k)", value: 549 },
 { name: "Montréal growth %", value: 3.4 },
 { name: "Québec growth %", value: 3.3 },
 { name: "Montréal med. HH $k", value: 56 },
 { name: "Québec med. HH $k", value: 60.8 },
 ],
 excerpt: "Side-by-side 2021 figures for Montréal and Québec: population, growth, median household income, and average age — with links to full profiles and the comparison tool.",
 content: `
 <p>Montréal and Québec sit in Quebec and often compete for talent and investment. 2021 figures show how they stack up on size, momentum, and household income. Here is a clear head-to-head.</p>

 <h2>Population &amp; growth</h2>
 <p><a href="/location/montr-al/"><strong>Montréal</strong></a> counted <strong>1,762,949</strong> residents in 2021, compared with <a href="/location/qu-bec/"><strong>Québec</strong></a> at <strong>549,459</strong>. Size, however, is not the same as momentum. Montréal's population rose <strong>3.4%</strong> from 2016 to 2021, while Québec grew <strong>3.3%</strong> over the same period.</p>

 <p>In short: Montréal leads on municipal population; Montréal grew faster during the last census cycle.</p>

 <h2>Income</h2>
 <p>Median after-tax household income tells another part of the story. Québec households sat at <strong>$60,800</strong> (median after tax), versus <strong>$56,000</strong> in Montréal. That gap matters for cost-of-living and labour-market conversations across the two cities.</p>

 <h2>Age profile</h2>
 <p>Average age was <strong>40.6</strong> years in Montréal and <strong>43.8</strong> in Québec. Montréal's younger profile contrasts with Québec in this census snapshot.</p>

 <h2>Quick comparison table</h2>
 <ul>
 <li><strong>Population (2021):</strong> Montréal 1,762,949 · Québec 549,459</li>
 <li><strong>Growth 2016–2021:</strong> Montréal 3.4% · Québec 3.3%</li>
 <li><strong>Median HH income (after tax):</strong> Montréal $56,000 · Québec $60,800</li>
 <li><strong>Average age:</strong> Montréal 40.6 · Québec 43.8</li>
 </ul>

 <blockquote>Montréal leads on population; Montréal grew faster over 2016–2021; Québec posts higher median after-tax household income, with Montréal slightly younger on average age.</blockquote>

 <h2>Explore the full datasets</h2>
 <p>Dig into every section (households, labour, languages, dwellings) on the location profiles, or build your own side-by-side:</p>
 <ul>
 <li><a href="/location/montr-al/">Montréal demographic profile</a></li>
 <li><a href="/location/qu-bec/">Québec demographic profile</a></li>
 <li><a href="/compare/">Location Comparison tool</a> — select Census subdivision, then Montréal and Québec</li>
 </ul>
 `,
 },
 {
 title: "Ottawa vs Hamilton: Population & Income Compared",
 slug: "ottawa-vs-hamilton-2021-census",
 date: "October 17, 2026",
 category: "Comparisons",
 readTime: "7 min read",
 heroImage: "/images/blog/compare/ottawa-vs-hamilton-2021-census.png",
 chartType: 'bar',
 chartTitle: "Ottawa vs Hamilton — Key Metrics",
 chartData: [
 { name: "Ottawa pop. (M)", value: 1.02 },
 { name: "Hamilton pop. (k)", value: 569 },
 { name: "Ottawa growth %", value: 8.9 },
 { name: "Hamilton growth %", value: 6 },
 { name: "Ottawa med. HH $k", value: 88 },
 { name: "Hamilton med. HH $k", value: 75.5 },
 ],
 excerpt: "Side-by-side 2021 figures for Ottawa and Hamilton: population, growth, median household income, and average age — with links to full profiles and the comparison tool.",
 content: `
 <p>Choosing between Ottawa and Hamilton in Ontario? These metrics — population, growth, median after-tax household income, and average age — offer a factual starting point. Here is a clear head-to-head.</p>

 <h2>Population &amp; growth</h2>
 <p><a href="/location/ottawa/"><strong>Ottawa</strong></a> counted <strong>1,017,449</strong> residents in 2021, compared with <a href="/location/hamilton/"><strong>Hamilton</strong></a> at <strong>569,353</strong>. Size, however, is not the same as momentum. Ottawa's population rose <strong>8.9%</strong> from 2016 to 2021, while Hamilton grew <strong>6%</strong> over the same period.</p>

 <p>In short: Ottawa leads on municipal population; Ottawa grew faster during the last census cycle.</p>

 <h2>Income</h2>
 <p>Median after-tax household income tells another part of the story. Ottawa households sat at <strong>$88,000</strong> (median after tax), versus <strong>$75,500</strong> in Hamilton. That gap matters for cost-of-living and labour-market conversations across the two cities.</p>

 <h2>Age profile</h2>
 <p>Average age was <strong>40.7</strong> years in Ottawa and <strong>41.5</strong> in Hamilton. Ottawa's younger profile contrasts with Hamilton in this census snapshot.</p>

 <h2>Quick comparison table</h2>
 <ul>
 <li><strong>Population (2021):</strong> Ottawa 1,017,449 · Hamilton 569,353</li>
 <li><strong>Growth 2016–2021:</strong> Ottawa 8.9% · Hamilton 6%</li>
 <li><strong>Median HH income (after tax):</strong> Ottawa $88,000 · Hamilton $75,500</li>
 <li><strong>Average age:</strong> Ottawa 40.7 · Hamilton 41.5</li>
 </ul>

 <blockquote>Ottawa leads on population; Ottawa grew faster over 2016–2021; Ottawa posts higher median after-tax household income, with Ottawa slightly younger on average age.</blockquote>

 <h2>Explore the full datasets</h2>
 <p>Dig into every section (households, labour, languages, dwellings) on the location profiles, or build your own side-by-side:</p>
 <ul>
 <li><a href="/location/ottawa/">Ottawa demographic profile</a></li>
 <li><a href="/location/hamilton/">Hamilton demographic profile</a></li>
 <li><a href="/compare/">Location Comparison tool</a> — select Census subdivision, then Ottawa and Hamilton</li>
 </ul>
 `,
 },
 {
 title: "Edmonton vs Winnipeg: Population & Income Compared",
 slug: "edmonton-vs-winnipeg-2021-census",
 date: "October 20, 2026",
 category: "Comparisons",
 readTime: "6 min read",
 heroImage: "/images/blog/compare/edmonton-vs-winnipeg-2021-census.png",
 chartType: 'bar',
 chartTitle: "Edmonton vs Winnipeg — Key Metrics",
 chartData: [
 { name: "Edmonton pop. (M)", value: 1.01 },
 { name: "Winnipeg pop. (k)", value: 750 },
 { name: "Edmonton growth %", value: 8.3 },
 { name: "Winnipeg growth %", value: 6.3 },
 { name: "Edmonton med. HH $k", value: 79.5 },
 { name: "Winnipeg med. HH $k", value: 69.5 },
 ],
 excerpt: "Side-by-side 2021 figures for Edmonton and Winnipeg: population, growth, median household income, and average age — with links to full profiles and the comparison tool.",
 content: `
 <p>Edmonton and Winnipeg are frequently compared across the Prairies. The numbers put population, growth, income, and age side by side. Here is a clear head-to-head.</p>

 <h2>Population &amp; growth</h2>
 <p><a href="/location/edmonton/"><strong>Edmonton</strong></a> counted <strong>1,010,899</strong> residents in 2021, compared with <a href="/location/winnipeg/"><strong>Winnipeg</strong></a> at <strong>749,607</strong>. Size, however, is not the same as momentum. Edmonton's population rose <strong>8.3%</strong> from 2016 to 2021, while Winnipeg grew <strong>6.3%</strong> over the same period.</p>

 <p>In short: Edmonton leads on municipal population; Edmonton grew faster during the last census cycle.</p>

 <h2>Income</h2>
 <p>Median after-tax household income tells another part of the story. Edmonton households sat at <strong>$79,500</strong> (median after tax), versus <strong>$69,500</strong> in Winnipeg. That gap matters for cost-of-living and labour-market conversations across the two cities.</p>

 <h2>Age profile</h2>
 <p>Average age was <strong>38.4</strong> years in Edmonton and <strong>40.3</strong> in Winnipeg. Edmonton's younger profile contrasts with Winnipeg in this census snapshot.</p>

 <h2>Quick comparison table</h2>
 <ul>
 <li><strong>Population (2021):</strong> Edmonton 1,010,899 · Winnipeg 749,607</li>
 <li><strong>Growth 2016–2021:</strong> Edmonton 8.3% · Winnipeg 6.3%</li>
 <li><strong>Median HH income (after tax):</strong> Edmonton $79,500 · Winnipeg $69,500</li>
 <li><strong>Average age:</strong> Edmonton 38.4 · Winnipeg 40.3</li>
 </ul>

 <blockquote>Edmonton leads on population; Edmonton grew faster over 2016–2021; Edmonton posts higher median after-tax household income, with Edmonton slightly younger on average age.</blockquote>

 <h2>Explore the full datasets</h2>
 <p>Dig into every section (households, labour, languages, dwellings) on the location profiles, or build your own side-by-side:</p>
 <ul>
 <li><a href="/location/edmonton/">Edmonton demographic profile</a></li>
 <li><a href="/location/winnipeg/">Winnipeg demographic profile</a></li>
 <li><a href="/compare/">Location Comparison tool</a> — select Census subdivision, then Edmonton and Winnipeg</li>
 </ul>
 `,
 },
 {
 title: "Brampton vs Surrey: Population & Income Compared",
 slug: "brampton-vs-surrey-2021-census",
 date: "October 22, 2026",
 category: "Comparisons",
 readTime: "5 min read",
 heroImage: "/images/blog/compare/brampton-vs-surrey-2021-census.png",
 chartType: 'bar',
 chartTitle: "Brampton vs Surrey — Key Metrics",
 chartData: [
 { name: "Brampton pop. (k)", value: 656 },
 { name: "Surrey pop. (k)", value: 568 },
 { name: "Brampton growth %", value: 10.6 },
 { name: "Surrey growth %", value: 9.7 },
 { name: "Brampton med. HH $k", value: 98 },
 { name: "Surrey med. HH $k", value: 87 },
 ],
 excerpt: "Side-by-side 2021 figures for Brampton and Surrey: population, growth, median household income, and average age — with links to full profiles and the comparison tool.",
 content: `
 <p>Brampton and Surrey sit in fast-growing suburban Canada and often compete for talent and investment. 2021 figures show how they stack up on size, momentum, and household income. Here is a clear head-to-head.</p>

 <h2>Population &amp; growth</h2>
 <p><a href="/location/brampton/"><strong>Brampton</strong></a> counted <strong>656,480</strong> residents in 2021, compared with <a href="/location/surrey/"><strong>Surrey</strong></a> at <strong>568,322</strong>. Size, however, is not the same as momentum. Brampton's population rose <strong>10.6%</strong> from 2016 to 2021, while Surrey grew <strong>9.7%</strong> over the same period.</p>

 <p>In short: Brampton leads on municipal population; Brampton grew faster during the last census cycle.</p>

 <h2>Income</h2>
 <p>Median after-tax household income tells another part of the story. Brampton households sat at <strong>$98,000</strong> (median after tax), versus <strong>$87,000</strong> in Surrey. That gap matters for cost-of-living and labour-market conversations across the two cities.</p>

 <h2>Age profile</h2>
 <p>Average age was <strong>37.5</strong> years in Brampton and <strong>39.5</strong> in Surrey. Brampton's younger profile contrasts with Surrey in this census snapshot.</p>

 <h2>Quick comparison table</h2>
 <ul>
 <li><strong>Population (2021):</strong> Brampton 656,480 · Surrey 568,322</li>
 <li><strong>Growth 2016–2021:</strong> Brampton 10.6% · Surrey 9.7%</li>
 <li><strong>Median HH income (after tax):</strong> Brampton $98,000 · Surrey $87,000</li>
 <li><strong>Average age:</strong> Brampton 37.5 · Surrey 39.5</li>
 </ul>

 <blockquote>Brampton leads on population; Brampton grew faster over 2016–2021; Brampton posts higher median after-tax household income, with Brampton slightly younger on average age.</blockquote>

 <h2>Explore the full datasets</h2>
 <p>Dig into every section (households, labour, languages, dwellings) on the location profiles, or build your own side-by-side:</p>
 <ul>
 <li><a href="/location/brampton/">Brampton demographic profile</a></li>
 <li><a href="/location/surrey/">Surrey demographic profile</a></li>
 <li><a href="/compare/">Location Comparison tool</a> — select Census subdivision, then Brampton and Surrey</li>
 </ul>
 `,
 },
 {
 title: "Mississauga vs Vaughan: Population & Income Compared",
 slug: "mississauga-vs-vaughan-2021-census",
 date: "October 24, 2026",
 category: "Comparisons",
 readTime: "7 min read",
 heroImage: "/images/blog/compare/mississauga-vs-vaughan-2021-census.png",
 chartType: 'bar',
 chartTitle: "Mississauga vs Vaughan — Key Metrics",
 chartData: [
 { name: "Mississauga pop. (k)", value: 718 },
 { name: "Vaughan pop. (k)", value: 323 },
 { name: "Mississauga growth %", value: -0.5 },
 { name: "Vaughan growth %", value: 5.5 },
 { name: "Mississauga med. HH $k", value: 89 },
 { name: "Vaughan med. HH $k", value: 107 },
 ],
 excerpt: "Side-by-side 2021 figures for Mississauga and Vaughan: population, growth, median household income, and average age — with links to full profiles and the comparison tool.",
 content: `
 <p>Choosing between Mississauga and Vaughan in the Greater Toronto Area? These metrics — population, growth, median after-tax household income, and average age — offer a factual starting point. Here is a clear head-to-head.</p>

 <h2>Population &amp; growth</h2>
 <p><a href="/location/mississauga/"><strong>Mississauga</strong></a> counted <strong>717,961</strong> residents in 2021, compared with <a href="/location/vaughan/"><strong>Vaughan</strong></a> at <strong>323,103</strong>. Size, however, is not the same as momentum. Mississauga's population changed by <strong>-0.5%</strong> from 2016 to 2021, while Vaughan grew <strong>5.5%</strong> over the same period.</p>

 <p>In short: Mississauga remains larger by municipal population, but Vaughan grew while Mississauga edged down over 2016–2021.</p>

 <h2>Income</h2>
 <p>Median after-tax household income tells another part of the story. Vaughan households sat at <strong>$107,000</strong> (median after tax), versus <strong>$89,000</strong> in Mississauga. That gap matters for cost-of-living and labour-market conversations across the two cities.</p>

 <h2>Age profile</h2>
 <p>Average age was <strong>41.1</strong> years in Mississauga and <strong>40.9</strong> in Vaughan. Vaughan's younger profile contrasts with Mississauga in this census snapshot.</p>

 <h2>Quick comparison table</h2>
 <ul>
 <li><strong>Population (2021):</strong> Mississauga 717,961 · Vaughan 323,103</li>
 <li><strong>Growth 2016–2021:</strong> Mississauga -0.5% · Vaughan 5.5%</li>
 <li><strong>Median HH income (after tax):</strong> Mississauga $89,000 · Vaughan $107,000</li>
 <li><strong>Average age:</strong> Mississauga 41.1 · Vaughan 40.9</li>
 </ul>

 <blockquote>Mississauga leads on population; Vaughan grew faster over 2016–2021; Vaughan posts higher median after-tax household income, with Vaughan slightly younger on average age.</blockquote>

 <h2>Explore the full datasets</h2>
 <p>Dig into every section (households, labour, languages, dwellings) on the location profiles, or build your own side-by-side:</p>
 <ul>
 <li><a href="/location/mississauga/">Mississauga demographic profile</a></li>
 <li><a href="/location/vaughan/">Vaughan demographic profile</a></li>
 <li><a href="/compare/">Location Comparison tool</a> — select Census subdivision, then Mississauga and Vaughan</li>
 </ul>
 `,
 },
 {
 title: "Winnipeg vs Regina: Population & Income Compared",
 slug: "winnipeg-vs-regina-2021-census",
 date: "October 27, 2026",
 category: "Comparisons",
 readTime: "6 min read",
 heroImage: "/images/blog/compare/winnipeg-vs-regina-2021-census.png",
 chartType: 'bar',
 chartTitle: "Winnipeg vs Regina — Key Metrics",
 chartData: [
 { name: "Winnipeg pop. (k)", value: 750 },
 { name: "Regina pop. (k)", value: 226 },
 { name: "Winnipeg growth %", value: 6.3 },
 { name: "Regina growth %", value: 5.3 },
 { name: "Winnipeg med. HH $k", value: 69.5 },
 { name: "Regina med. HH $k", value: 76.5 },
 ],
 excerpt: "Side-by-side 2021 figures for Winnipeg and Regina: population, growth, median household income, and average age — with links to full profiles and the comparison tool.",
 content: `
 <p>Winnipeg and Regina are frequently compared across Prairie Canada. The numbers put population, growth, income, and age side by side. Here is a clear head-to-head.</p>

 <h2>Population &amp; growth</h2>
 <p><a href="/location/winnipeg/"><strong>Winnipeg</strong></a> counted <strong>749,607</strong> residents in 2021, compared with <a href="/location/regina/"><strong>Regina</strong></a> at <strong>226,404</strong>. Size, however, is not the same as momentum. Winnipeg's population rose <strong>6.3%</strong> from 2016 to 2021, while Regina grew <strong>5.3%</strong> over the same period.</p>

 <p>In short: Winnipeg leads on municipal population; Winnipeg grew faster during the last census cycle.</p>

 <h2>Income</h2>
 <p>Median after-tax household income tells another part of the story. Regina households sat at <strong>$76,500</strong> (median after tax), versus <strong>$69,500</strong> in Winnipeg. That gap matters for cost-of-living and labour-market conversations across the two cities.</p>

 <h2>Age profile</h2>
 <p>Average age was <strong>40.3</strong> years in Winnipeg and <strong>39</strong> in Regina. Regina's younger profile contrasts with Winnipeg in this census snapshot.</p>

 <h2>Quick comparison table</h2>
 <ul>
 <li><strong>Population (2021):</strong> Winnipeg 749,607 · Regina 226,404</li>
 <li><strong>Growth 2016–2021:</strong> Winnipeg 6.3% · Regina 5.3%</li>
 <li><strong>Median HH income (after tax):</strong> Winnipeg $69,500 · Regina $76,500</li>
 <li><strong>Average age:</strong> Winnipeg 40.3 · Regina 39</li>
 </ul>

 <blockquote>Winnipeg leads on population; Winnipeg grew faster over 2016–2021; Regina posts higher median after-tax household income, with Regina slightly younger on average age.</blockquote>

 <h2>Explore the full datasets</h2>
 <p>Dig into every section (households, labour, languages, dwellings) on the location profiles, or build your own side-by-side:</p>
 <ul>
 <li><a href="/location/winnipeg/">Winnipeg demographic profile</a></li>
 <li><a href="/location/regina/">Regina demographic profile</a></li>
 <li><a href="/compare/">Location Comparison tool</a> — select Census subdivision, then Winnipeg and Regina</li>
 </ul>
 `,
 },
 {
 title: "London vs Windsor: Population & Income Compared",
 slug: "london-vs-windsor-2021-census",
 date: "October 29, 2026",
 category: "Comparisons",
 readTime: "5 min read",
 heroImage: "/images/blog/compare/london-vs-windsor-2021-census.png",
 chartType: 'bar',
 chartTitle: "London vs Windsor — Key Metrics",
 chartData: [
 { name: "London pop. (k)", value: 422 },
 { name: "Windsor pop. (k)", value: 230 },
 { name: "London growth %", value: 10 },
 { name: "Windsor growth %", value: 5.7 },
 { name: "London med. HH $k", value: 68.5 },
 { name: "Windsor med. HH $k", value: 63.6 },
 ],
 excerpt: "Side-by-side 2021 figures for London and Windsor: population, growth, median household income, and average age — with links to full profiles and the comparison tool.",
 content: `
 <p>London and Windsor sit in southwestern Ontario and often compete for talent and investment. 2021 figures show how they stack up on size, momentum, and household income. Here is a clear head-to-head.</p>

 <h2>Population &amp; growth</h2>
 <p><a href="/location/london/"><strong>London</strong></a> counted <strong>422,324</strong> residents in 2021, compared with <a href="/location/windsor/"><strong>Windsor</strong></a> at <strong>229,660</strong>. Size, however, is not the same as momentum. London's population rose <strong>10%</strong> from 2016 to 2021, while Windsor grew <strong>5.7%</strong> over the same period.</p>

 <p>In short: London leads on municipal population; London grew faster during the last census cycle.</p>

 <h2>Income</h2>
 <p>Median after-tax household income tells another part of the story. London households sat at <strong>$68,500</strong> (median after tax), versus <strong>$63,600</strong> in Windsor. That gap matters for cost-of-living and labour-market conversations across the two cities.</p>

 <h2>Age profile</h2>
 <p>Average age was <strong>40.7</strong> years in London and <strong>41.4</strong> in Windsor. London's younger profile contrasts with Windsor in this census snapshot.</p>

 <h2>Quick comparison table</h2>
 <ul>
 <li><strong>Population (2021):</strong> London 422,324 · Windsor 229,660</li>
 <li><strong>Growth 2016–2021:</strong> London 10% · Windsor 5.7%</li>
 <li><strong>Median HH income (after tax):</strong> London $68,500 · Windsor $63,600</li>
 <li><strong>Average age:</strong> London 40.7 · Windsor 41.4</li>
 </ul>

 <blockquote>London leads on population; London grew faster over 2016–2021; London posts higher median after-tax household income, with London slightly younger on average age.</blockquote>

 <h2>Explore the full datasets</h2>
 <p>Dig into every section (households, labour, languages, dwellings) on the location profiles, or build your own side-by-side:</p>
 <ul>
 <li><a href="/location/london/">London demographic profile</a></li>
 <li><a href="/location/windsor/">Windsor demographic profile</a></li>
 <li><a href="/compare/">Location Comparison tool</a> — select Census subdivision, then London and Windsor</li>
 </ul>
 `,
 },
 {
 title: "Kelowna vs Nanaimo: Population & Income Compared",
 slug: "kelowna-vs-nanaimo-2021-census",
 date: "November 1, 2026",
 category: "Comparisons",
 readTime: "7 min read",
 heroImage: "/images/blog/compare/kelowna-vs-nanaimo-2021-census.png",
 chartType: 'bar',
 chartTitle: "Kelowna vs Nanaimo — Key Metrics",
 chartData: [
 { name: "Kelowna pop. (k)", value: 145 },
 { name: "Nanaimo pop. (k)", value: 100 },
 { name: "Kelowna growth %", value: 13.5 },
 { name: "Nanaimo growth %", value: 10.3 },
 { name: "Kelowna med. HH $k", value: 73.5 },
 { name: "Nanaimo med. HH $k", value: 68.5 },
 ],
 excerpt: "Side-by-side 2021 figures for Kelowna and Nanaimo: population, growth, median household income, and average age — with links to full profiles and the comparison tool.",
 content: `
 <p>Choosing between Kelowna and Nanaimo in British Columbia? These metrics — population, growth, median after-tax household income, and average age — offer a factual starting point. Here is a clear head-to-head.</p>

 <h2>Population &amp; growth</h2>
 <p><a href="/location/kelowna/"><strong>Kelowna</strong></a> counted <strong>144,576</strong> residents in 2021, compared with <a href="/location/nanaimo/"><strong>Nanaimo</strong></a> at <strong>99,863</strong>. Size, however, is not the same as momentum. Kelowna's population rose <strong>13.5%</strong> from 2016 to 2021, while Nanaimo grew <strong>10.3%</strong> over the same period.</p>

 <p>In short: Kelowna leads on municipal population; Kelowna grew faster during the last census cycle.</p>

 <h2>Income</h2>
 <p>Median after-tax household income tells another part of the story. Kelowna households sat at <strong>$73,500</strong> (median after tax), versus <strong>$68,500</strong> in Nanaimo. That gap matters for cost-of-living and labour-market conversations across the two cities.</p>

 <h2>Age profile</h2>
 <p>Average age was <strong>43.4</strong> years in Kelowna and <strong>44.8</strong> in Nanaimo. Kelowna's younger profile contrasts with Nanaimo in this census snapshot.</p>

 <h2>Quick comparison table</h2>
 <ul>
 <li><strong>Population (2021):</strong> Kelowna 144,576 · Nanaimo 99,863</li>
 <li><strong>Growth 2016–2021:</strong> Kelowna 13.5% · Nanaimo 10.3%</li>
 <li><strong>Median HH income (after tax):</strong> Kelowna $73,500 · Nanaimo $68,500</li>
 <li><strong>Average age:</strong> Kelowna 43.4 · Nanaimo 44.8</li>
 </ul>

 <blockquote>Kelowna leads on population; Kelowna grew faster over 2016–2021; Kelowna posts higher median after-tax household income, with Kelowna slightly younger on average age.</blockquote>

 <h2>Explore the full datasets</h2>
 <p>Dig into every section (households, labour, languages, dwellings) on the location profiles, or build your own side-by-side:</p>
 <ul>
 <li><a href="/location/kelowna/">Kelowna demographic profile</a></li>
 <li><a href="/location/nanaimo/">Nanaimo demographic profile</a></li>
 <li><a href="/compare/">Location Comparison tool</a> — select Census subdivision, then Kelowna and Nanaimo</li>
 </ul>
 `,
 },
 {
 title: "Barrie vs Oshawa: Population & Income Compared",
 slug: "barrie-vs-oshawa-2021-census",
 date: "November 3, 2026",
 category: "Comparisons",
 readTime: "6 min read",
 heroImage: "/images/blog/compare/barrie-vs-oshawa-2021-census.png",
 chartType: 'bar',
 chartTitle: "Barrie vs Oshawa — Key Metrics",
 chartData: [
 { name: "Barrie pop. (k)", value: 148 },
 { name: "Oshawa pop. (k)", value: 175 },
 { name: "Barrie growth %", value: 4.5 },
 { name: "Oshawa growth %", value: 10 },
 { name: "Barrie med. HH $k", value: 82 },
 { name: "Oshawa med. HH $k", value: 76 },
 ],
 excerpt: "Side-by-side 2021 figures for Barrie and Oshawa: population, growth, median household income, and average age — with links to full profiles and the comparison tool.",
 content: `
 <p>Barrie and Oshawa are frequently compared across central and eastern Ontario. The numbers put population, growth, income, and age side by side. Here is a clear head-to-head.</p>

 <h2>Population &amp; growth</h2>
 <p><a href="/location/barrie/"><strong>Barrie</strong></a> counted <strong>147,829</strong> residents in 2021, compared with <a href="/location/oshawa/"><strong>Oshawa</strong></a> at <strong>175,383</strong>. Size, however, is not the same as momentum. Barrie's population rose <strong>4.5%</strong> from 2016 to 2021, while Oshawa grew <strong>10%</strong> over the same period.</p>

 <p>In short: Oshawa leads on municipal population; Oshawa grew faster during the last census cycle.</p>

 <h2>Income</h2>
 <p>Median after-tax household income tells another part of the story. Barrie households sat at <strong>$82,000</strong> (median after tax), versus <strong>$76,000</strong> in Oshawa. That gap matters for cost-of-living and labour-market conversations across the two cities.</p>

 <h2>Age profile</h2>
 <p>Average age was <strong>40.2</strong> years in Barrie and <strong>40.3</strong> in Oshawa. Barrie's younger profile contrasts with Oshawa in this census snapshot.</p>

 <h2>Quick comparison table</h2>
 <ul>
 <li><strong>Population (2021):</strong> Barrie 147,829 · Oshawa 175,383</li>
 <li><strong>Growth 2016–2021:</strong> Barrie 4.5% · Oshawa 10%</li>
 <li><strong>Median HH income (after tax):</strong> Barrie $82,000 · Oshawa $76,000</li>
 <li><strong>Average age:</strong> Barrie 40.2 · Oshawa 40.3</li>
 </ul>

 <blockquote>Oshawa leads on population; Oshawa grew faster over 2016–2021; Barrie posts higher median after-tax household income, with Barrie slightly younger on average age.</blockquote>

 <h2>Explore the full datasets</h2>
 <p>Dig into every section (households, labour, languages, dwellings) on the location profiles, or build your own side-by-side:</p>
 <ul>
 <li><a href="/location/barrie/">Barrie demographic profile</a></li>
 <li><a href="/location/oshawa/">Oshawa demographic profile</a></li>
 <li><a href="/compare/">Location Comparison tool</a> — select Census subdivision, then Barrie and Oshawa</li>
 </ul>
 `,
 },
 {
 title: "Guelph vs Kitchener: Population & Income Compared",
 slug: "guelph-vs-kitchener-2021-census",
 date: "November 5, 2026",
 category: "Comparisons",
 readTime: "5 min read",
 heroImage: "/images/blog/compare/guelph-vs-kitchener-2021-census.png",
 chartType: 'bar',
 chartTitle: "Guelph vs Kitchener — Key Metrics",
 chartData: [
 { name: "Guelph pop. (k)", value: 144 },
 { name: "Kitchener pop. (k)", value: 257 },
 { name: "Guelph growth %", value: 9.1 },
 { name: "Kitchener growth %", value: 10.1 },
 { name: "Guelph med. HH $k", value: 82 },
 { name: "Kitchener med. HH $k", value: 76.5 },
 ],
 excerpt: "Side-by-side 2021 figures for Guelph and Kitchener: population, growth, median household income, and average age — with links to full profiles and the comparison tool.",
 content: `
 <p>Guelph and Kitchener sit in southwestern Ontario and often compete for talent and investment. 2021 figures show how they stack up on size, momentum, and household income. Here is a clear head-to-head.</p>

 <h2>Population &amp; growth</h2>
 <p><a href="/location/guelph/"><strong>Guelph</strong></a> counted <strong>143,740</strong> residents in 2021, compared with <a href="/location/kitchener/"><strong>Kitchener</strong></a> at <strong>256,885</strong>. Size, however, is not the same as momentum. Guelph's population rose <strong>9.1%</strong> from 2016 to 2021, while Kitchener grew <strong>10.1%</strong> over the same period.</p>

 <p>In short: Kitchener leads on municipal population; Kitchener grew faster during the last census cycle.</p>

 <h2>Income</h2>
 <p>Median after-tax household income tells another part of the story. Guelph households sat at <strong>$82,000</strong> (median after tax), versus <strong>$76,500</strong> in Kitchener. That gap matters for cost-of-living and labour-market conversations across the two cities.</p>

 <h2>Age profile</h2>
 <p>Average age was <strong>40.1</strong> years in Guelph and <strong>39</strong> in Kitchener. Kitchener's younger profile contrasts with Guelph in this census snapshot.</p>

 <h2>Quick comparison table</h2>
 <ul>
 <li><strong>Population (2021):</strong> Guelph 143,740 · Kitchener 256,885</li>
 <li><strong>Growth 2016–2021:</strong> Guelph 9.1% · Kitchener 10.1%</li>
 <li><strong>Median HH income (after tax):</strong> Guelph $82,000 · Kitchener $76,500</li>
 <li><strong>Average age:</strong> Guelph 40.1 · Kitchener 39</li>
 </ul>

 <blockquote>Kitchener leads on population; Kitchener grew faster over 2016–2021; Guelph posts higher median after-tax household income, with Kitchener slightly younger on average age.</blockquote>

 <h2>Explore the full datasets</h2>
 <p>Dig into every section (households, labour, languages, dwellings) on the location profiles, or build your own side-by-side:</p>
 <ul>
 <li><a href="/location/guelph/">Guelph demographic profile</a></li>
 <li><a href="/location/kitchener/">Kitchener demographic profile</a></li>
 <li><a href="/compare/">Location Comparison tool</a> — select Census subdivision, then Guelph and Kitchener</li>
 </ul>
 `,
 },
 {
 title: "Laval vs Longueuil: Population & Income Compared",
 slug: "laval-vs-longueuil-2021-census",
 date: "November 8, 2026",
 category: "Comparisons",
 readTime: "7 min read",
 heroImage: "/images/blog/compare/laval-vs-longueuil-2021-census.png",
 chartType: 'bar',
 chartTitle: "Laval vs Longueuil — Key Metrics",
 chartData: [
 { name: "Laval pop. (k)", value: 438 },
 { name: "Longueuil pop. (k)", value: 254 },
 { name: "Laval growth %", value: 3.6 },
 { name: "Longueuil growth %", value: 6.1 },
 { name: "Laval med. HH $k", value: 73.5 },
 { name: "Longueuil med. HH $k", value: 62 },
 ],
 excerpt: "Side-by-side 2021 figures for Laval and Longueuil: population, growth, median household income, and average age — with links to full profiles and the comparison tool.",
 content: `
 <p>Choosing between Laval and Longueuil in the Montréal census metro area? These metrics — population, growth, median after-tax household income, and average age — offer a factual starting point. Here is a clear head-to-head.</p>

 <h2>Population &amp; growth</h2>
 <p><a href="/location/laval/"><strong>Laval</strong></a> counted <strong>438,366</strong> residents in 2021, compared with <a href="/location/longueuil/"><strong>Longueuil</strong></a> at <strong>254,483</strong>. Size, however, is not the same as momentum. Laval's population rose <strong>3.6%</strong> from 2016 to 2021, while Longueuil grew <strong>6.1%</strong> over the same period.</p>

 <p>In short: Laval leads on municipal population; Longueuil grew faster during the last census cycle.</p>

 <h2>Income</h2>
 <p>Median after-tax household income tells another part of the story. Laval households sat at <strong>$73,500</strong> (median after tax), versus <strong>$62,000</strong> in Longueuil. That gap matters for cost-of-living and labour-market conversations across the two cities.</p>

 <h2>Age profile</h2>
 <p>Average age was <strong>42</strong> years in Laval and <strong>41.7</strong> in Longueuil. Longueuil's younger profile contrasts with Laval in this census snapshot.</p>

 <h2>Quick comparison table</h2>
 <ul>
 <li><strong>Population (2021):</strong> Laval 438,366 · Longueuil 254,483</li>
 <li><strong>Growth 2016–2021:</strong> Laval 3.6% · Longueuil 6.1%</li>
 <li><strong>Median HH income (after tax):</strong> Laval $73,500 · Longueuil $62,000</li>
 <li><strong>Average age:</strong> Laval 42 · Longueuil 41.7</li>
 </ul>

 <blockquote>Laval leads on population; Longueuil grew faster over 2016–2021; Laval posts higher median after-tax household income, with Longueuil slightly younger on average age.</blockquote>

 <h2>Explore the full datasets</h2>
 <p>Dig into every section (households, labour, languages, dwellings) on the location profiles, or build your own side-by-side:</p>
 <ul>
 <li><a href="/location/laval/">Laval demographic profile</a></li>
 <li><a href="/location/longueuil/">Longueuil demographic profile</a></li>
 <li><a href="/compare/">Location Comparison tool</a> — select Census subdivision, then Laval and Longueuil</li>
 </ul>
 `,
 },
 {
 title: "Burnaby vs Coquitlam: Population & Income Compared",
 slug: "burnaby-vs-coquitlam-2021-census",
 date: "November 10, 2026",
 category: "Comparisons",
 readTime: "6 min read",
 heroImage: "/images/blog/compare/burnaby-vs-coquitlam-2021-census.png",
 chartType: 'bar',
 chartTitle: "Burnaby vs Coquitlam — Key Metrics",
 chartData: [
 { name: "Burnaby pop. (k)", value: 249 },
 { name: "Coquitlam pop. (k)", value: 149 },
 { name: "Burnaby growth %", value: 7 },
 { name: "Coquitlam growth %", value: 6.7 },
 { name: "Burnaby med. HH $k", value: 73.5 },
 { name: "Coquitlam med. HH $k", value: 82 },
 ],
 excerpt: "Side-by-side 2021 figures for Burnaby and Coquitlam: population, growth, median household income, and average age — with links to full profiles and the comparison tool.",
 content: `
 <p>Burnaby and Coquitlam are frequently compared across Metro Vancouver. The numbers put population, growth, income, and age side by side. Here is a clear head-to-head.</p>

 <h2>Population &amp; growth</h2>
 <p><a href="/location/burnaby/"><strong>Burnaby</strong></a> counted <strong>249,125</strong> residents in 2021, compared with <a href="/location/coquitlam/"><strong>Coquitlam</strong></a> at <strong>148,625</strong>. Size, however, is not the same as momentum. Burnaby's population rose <strong>7%</strong> from 2016 to 2021, while Coquitlam grew <strong>6.7%</strong> over the same period.</p>

 <p>In short: Burnaby leads on municipal population; Burnaby grew faster during the last census cycle.</p>

 <h2>Income</h2>
 <p>Median after-tax household income tells another part of the story. Coquitlam households sat at <strong>$82,000</strong> (median after tax), versus <strong>$73,500</strong> in Burnaby. That gap matters for cost-of-living and labour-market conversations across the two cities.</p>

 <h2>Age profile</h2>
 <p>Average age was <strong>42</strong> years in Burnaby and <strong>41.4</strong> in Coquitlam. Coquitlam's younger profile contrasts with Burnaby in this census snapshot.</p>

 <h2>Quick comparison table</h2>
 <ul>
 <li><strong>Population (2021):</strong> Burnaby 249,125 · Coquitlam 148,625</li>
 <li><strong>Growth 2016–2021:</strong> Burnaby 7% · Coquitlam 6.7%</li>
 <li><strong>Median HH income (after tax):</strong> Burnaby $73,500 · Coquitlam $82,000</li>
 <li><strong>Average age:</strong> Burnaby 42 · Coquitlam 41.4</li>
 </ul>

 <blockquote>Burnaby leads on population; Burnaby grew faster over 2016–2021; Coquitlam posts higher median after-tax household income, with Coquitlam slightly younger on average age.</blockquote>

 <h2>Explore the full datasets</h2>
 <p>Dig into every section (households, labour, languages, dwellings) on the location profiles, or build your own side-by-side:</p>
 <ul>
 <li><a href="/location/burnaby/">Burnaby demographic profile</a></li>
 <li><a href="/location/coquitlam/">Coquitlam demographic profile</a></li>
 <li><a href="/compare/">Location Comparison tool</a> — select Census subdivision, then Burnaby and Coquitlam</li>
 </ul>
 `,
 },
 {
 title: "Sherbrooke vs Trois-Rivières: Population & Income Compared",
 slug: "sherbrooke-vs-trois-rivieres-2021-census",
 date: "November 12, 2026",
 category: "Comparisons",
 readTime: "5 min read",
 heroImage: "/images/blog/compare/sherbrooke-vs-trois-rivieres-2021-census.png",
 chartType: 'bar',
 chartTitle: "Sherbrooke vs Trois-Rivières — Key Metrics",
 chartData: [
 { name: "Sherbrooke pop. (k)", value: 173 },
 { name: "Trois-Rivières pop. (k)", value: 139 },
 { name: "Sherbrooke growth %", value: 7.2 },
 { name: "Trois-Rivières growth %", value: 3.5 },
 { name: "Sherbrooke med. HH $k", value: 55.2 },
 { name: "Trois-Rivières med. HH $k", value: 53.6 },
 ],
 excerpt: "Side-by-side 2021 figures for Sherbrooke and Trois-Rivières: population, growth, median household income, and average age — with links to full profiles and the comparison tool.",
 content: `
 <p>Sherbrooke and Trois-Rivières sit in Quebec outside Montréal and often compete for talent and investment. 2021 figures show how they stack up on size, momentum, and household income. Here is a clear head-to-head.</p>

 <h2>Population &amp; growth</h2>
 <p><a href="/location/sherbrooke/"><strong>Sherbrooke</strong></a> counted <strong>172,950</strong> residents in 2021, compared with <a href="/location/trois-rivi-res/"><strong>Trois-Rivières</strong></a> at <strong>139,163</strong>. Size, however, is not the same as momentum. Sherbrooke's population rose <strong>7.2%</strong> from 2016 to 2021, while Trois-Rivières grew <strong>3.5%</strong> over the same period.</p>

 <p>In short: Sherbrooke leads on municipal population; Sherbrooke grew faster during the last census cycle.</p>

 <h2>Income</h2>
 <p>Median after-tax household income tells another part of the story. Sherbrooke households sat at <strong>$55,200</strong> (median after tax), versus <strong>$53,600</strong> in Trois-Rivières. That gap matters for cost-of-living and labour-market conversations across the two cities.</p>

 <h2>Age profile</h2>
 <p>Average age was <strong>42.2</strong> years in Sherbrooke and <strong>45.8</strong> in Trois-Rivières. Sherbrooke's younger profile contrasts with Trois-Rivières in this census snapshot.</p>

 <h2>Quick comparison table</h2>
 <ul>
 <li><strong>Population (2021):</strong> Sherbrooke 172,950 · Trois-Rivières 139,163</li>
 <li><strong>Growth 2016–2021:</strong> Sherbrooke 7.2% · Trois-Rivières 3.5%</li>
 <li><strong>Median HH income (after tax):</strong> Sherbrooke $55,200 · Trois-Rivières $53,600</li>
 <li><strong>Average age:</strong> Sherbrooke 42.2 · Trois-Rivières 45.8</li>
 </ul>

 <blockquote>Sherbrooke leads on population; Sherbrooke grew faster over 2016–2021; Sherbrooke posts higher median after-tax household income, with Sherbrooke slightly younger on average age.</blockquote>

 <h2>Explore the full datasets</h2>
 <p>Dig into every section (households, labour, languages, dwellings) on the location profiles, or build your own side-by-side:</p>
 <ul>
 <li><a href="/location/sherbrooke/">Sherbrooke demographic profile</a></li>
 <li><a href="/location/trois-rivi-res/">Trois-Rivières demographic profile</a></li>
 <li><a href="/compare/">Location Comparison tool</a> — select Census subdivision, then Sherbrooke and Trois-Rivières</li>
 </ul>
 `,
 },
 {
 title: "Oakville vs Burlington: Population & Income Compared",
 slug: "oakville-vs-burlington-2021-census",
 date: "November 15, 2026",
 category: "Comparisons",
 readTime: "7 min read",
 heroImage: "/images/blog/compare/oakville-vs-burlington-2021-census.png",
 chartType: 'bar',
 chartTitle: "Oakville vs Burlington — Key Metrics",
 chartData: [
 { name: "Oakville pop. (k)", value: 214 },
 { name: "Burlington pop. (k)", value: 187 },
 { name: "Oakville growth %", value: 10.3 },
 { name: "Burlington growth %", value: 2 },
 { name: "Oakville med. HH $k", value: 108 },
 { name: "Burlington med. HH $k", value: 94 },
 ],
 excerpt: "Side-by-side 2021 figures for Oakville and Burlington: population, growth, median household income, and average age — with links to full profiles and the comparison tool.",
 content: `
 <p>Choosing between Oakville and Burlington in the western GTA / Halton corridor? These metrics — population, growth, median after-tax household income, and average age — offer a factual starting point. Here is a clear head-to-head.</p>

 <h2>Population &amp; growth</h2>
 <p><a href="/location/oakville-town-t/"><strong>Oakville</strong></a> counted <strong>213,759</strong> residents in 2021, compared with <a href="/location/burlington/"><strong>Burlington</strong></a> at <strong>186,948</strong>. Size, however, is not the same as momentum. Oakville's population rose <strong>10.3%</strong> from 2016 to 2021, while Burlington grew <strong>2%</strong> over the same period.</p>

 <p>In short: Oakville leads on municipal population; Oakville grew faster during the last census cycle.</p>

 <h2>Income</h2>
 <p>Median after-tax household income tells another part of the story. Oakville households sat at <strong>$108,000</strong> (median after tax), versus <strong>$94,000</strong> in Burlington. That gap matters for cost-of-living and labour-market conversations across the two cities.</p>

 <h2>Age profile</h2>
 <p>Average age was <strong>40.4</strong> years in Oakville and <strong>43.3</strong> in Burlington. Oakville's younger profile contrasts with Burlington in this census snapshot.</p>

 <h2>Quick comparison table</h2>
 <ul>
 <li><strong>Population (2021):</strong> Oakville 213,759 · Burlington 186,948</li>
 <li><strong>Growth 2016–2021:</strong> Oakville 10.3% · Burlington 2%</li>
 <li><strong>Median HH income (after tax):</strong> Oakville $108,000 · Burlington $94,000</li>
 <li><strong>Average age:</strong> Oakville 40.4 · Burlington 43.3</li>
 </ul>

 <blockquote>Oakville leads on population; Oakville grew faster over 2016–2021; Oakville posts higher median after-tax household income, with Oakville slightly younger on average age.</blockquote>

 <h2>Explore the full datasets</h2>
 <p>Dig into every section (households, labour, languages, dwellings) on the location profiles, or build your own side-by-side:</p>
 <ul>
 <li><a href="/location/oakville-town-t/">Oakville demographic profile</a></li>
 <li><a href="/location/burlington/">Burlington demographic profile</a></li>
 <li><a href="/compare/">Location Comparison tool</a> — select Census subdivision, then Oakville and Burlington</li>
 </ul>
 `,
 }
];
