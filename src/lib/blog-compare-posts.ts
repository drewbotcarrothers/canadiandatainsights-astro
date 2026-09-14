import type { BlogPost } from './blog-data';

/**
 * City-vs-city SEO compare posts. Stats pulled from Data/locations.csv
 * (POP_2021, POP_CHANGE_PCT, HH_INCOME_MEDIAN_AFTER_TAX, POP_AVG_AGE)
 * via generateSlug matching in locations.ts. Do not invent figures.
 */
export const compareBlogPosts: BlogPost[] = [
  {
    title: "Toronto vs Montréal: 2021 Census Population & Income Compared",
    slug: "toronto-vs-montreal-2021-census",
    date: "September 15, 2026",
    category: "Economy",
    readTime: "6 min read",
    heroImage: "/images/blog/income-disparity.png",
    chartType: 'bar',
    chartTitle: "Toronto vs Montréal — Key 2021 Census Metrics",
    chartData: [
      { name: "Toronto pop. (M)", value: 2.79 },
      { name: "Montréal pop. (M)", value: 1.76 },
      { name: "Toronto growth %", value: 2.3 },
      { name: "Montréal growth %", value: 3.4 },
      { name: "Toronto med. HH $k", value: 74 },
      { name: "Montréal med. HH $k", value: 56 },
    ],
    excerpt: "Side-by-side 2021 Census figures for Toronto and Montréal: population, growth, median household income, and average age — with links to full profiles and the comparison tool.",
    content: `
      <p>Toronto and Montréal anchor Canada's two largest municipal populations — one in Ontario, one in Quebec — with very different income and growth profiles in the 2021 Census. Here is a clear head-to-head.</p>

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

      <blockquote>Toronto leads on population and median household income; Montréal grew slightly faster over 2016–2021 and has a modestly younger average age — all from the same 2021 Census release.</blockquote>

      <h2>Explore the full datasets</h2>
      <p>Dig into every section (households, labour, languages, dwellings) on the location profiles, or build your own side-by-side:</p>
      <ul>
        <li><a href="/location/toronto/">Toronto 2021 census profile</a></li>
        <li><a href="/location/montr-al/">Montréal 2021 census profile</a></li>
        <li><a href="/compare/">Location Comparison tool</a> — select Census subdivision, then Toronto and Montréal</li>
      </ul>

      <p>All figures above are Statistics Canada Census 2021 census-subdivision values as published in our location data. See <a href="/sources/">Sources &amp; methodology</a> for attribution under the Open Government Licence – Canada.</p>
    `,
  },
  {
    title: "Vancouver vs Calgary: 2021 Census Population & Income Compared",
    slug: "vancouver-vs-calgary-2021-census",
    date: "September 17, 2026",
    category: "Urban Planning",
    readTime: "5 min read",
    heroImage: "/images/blog/urban-shift.png",
    chartType: 'bar',
    chartTitle: "Vancouver vs Calgary — Key 2021 Census Metrics",
    chartData: [
      { name: "Vancouver pop. (M)", value: 0.66 },
      { name: "Calgary pop. (M)", value: 1.31 },
      { name: "Vancouver growth %", value: 4.9 },
      { name: "Calgary growth %", value: 5.5 },
      { name: "Vancouver med. HH $k", value: 72 },
      { name: "Calgary med. HH $k", value: 85 },
    ],
    excerpt: "Side-by-side 2021 Census figures for Vancouver and Calgary: population, growth, median household income, and average age — with links to full profiles and the comparison tool.",
    content: `
      <p>Vancouver and Calgary are West Coast and Prairie powerhouses that often compete for talent and capital. The 2021 Census census-subdivision numbers show a clear scale-versus-income contrast. Here is a clear head-to-head.</p>

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
        <li><a href="/location/vancouver/">Vancouver 2021 census profile</a></li>
        <li><a href="/location/calgary/">Calgary 2021 census profile</a></li>
        <li><a href="/compare/">Location Comparison tool</a> — select Census subdivision, then Vancouver and Calgary</li>
      </ul>

      <p>All figures above are Statistics Canada Census 2021 census-subdivision values as published in our location data. See <a href="/sources/">Sources &amp; methodology</a> for attribution under the Open Government Licence – Canada.</p>
    `,
  },
  {
    title: "Edmonton vs Calgary: 2021 Census Population & Income Compared",
    slug: "edmonton-vs-calgary-2021-census",
    date: "September 19, 2026",
    category: "Economy",
    readTime: "6 min read",
    heroImage: "/images/blog/multicultural-languages.png",
    chartType: 'bar',
    chartTitle: "Edmonton vs Calgary — Key 2021 Census Metrics",
    chartData: [
      { name: "Edmonton pop. (M)", value: 1.01 },
      { name: "Calgary pop. (M)", value: 1.31 },
      { name: "Edmonton growth %", value: 8.3 },
      { name: "Calgary growth %", value: 5.5 },
      { name: "Edmonton med. HH $k", value: 79.5 },
      { name: "Calgary med. HH $k", value: 85 },
    ],
    excerpt: "Side-by-side 2021 Census figures for Edmonton and Calgary: population, growth, median household income, and average age — with links to full profiles and the comparison tool.",
    content: `
      <p>Alberta's two largest cities are frequent peers in labour-market and housing debates. Using Statistics Canada Census of Population 2021 data for each city (census subdivision), here is a clear head-to-head.</p>

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

      <blockquote>Calgary remains larger with higher median household income; Edmonton posted stronger 2016–2021 growth and a slightly younger average age — all from the same 2021 Census release.</blockquote>

      <h2>Explore the full datasets</h2>
      <p>Dig into every section (households, labour, languages, dwellings) on the location profiles, or build your own side-by-side:</p>
      <ul>
        <li><a href="/location/edmonton/">Edmonton 2021 census profile</a></li>
        <li><a href="/location/calgary/">Calgary 2021 census profile</a></li>
        <li><a href="/compare/">Location Comparison tool</a> — select Census subdivision, then Edmonton and Calgary</li>
      </ul>

      <p>All figures above are Statistics Canada Census 2021 census-subdivision values as published in our location data. See <a href="/sources/">Sources &amp; methodology</a> for attribution under the Open Government Licence – Canada.</p>
    `,
  },
  {
    title: "Ottawa vs Gatineau: 2021 Census Population & Income Compared",
    slug: "ottawa-vs-gatineau-2021-census",
    date: "September 21, 2026",
    category: "Urban Planning",
    readTime: "5 min read",
    heroImage: "/images/blog/income-disparity.png",
    chartType: 'bar',
    chartTitle: "Ottawa vs Gatineau — Key 2021 Census Metrics",
    chartData: [
      { name: "Ottawa pop. (M)", value: 1.02 },
      { name: "Gatineau pop. (M)", value: 0.29 },
      { name: "Ottawa growth %", value: 8.9 },
      { name: "Gatineau growth %", value: 5.4 },
      { name: "Ottawa med. HH $k", value: 88 },
      { name: "Gatineau med. HH $k", value: 69.5 },
    ],
    excerpt: "Side-by-side 2021 Census figures for Ottawa and Gatineau: population, growth, median household income, and average age — with links to full profiles and the comparison tool.",
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

      <blockquote>Ottawa dominates on population, growth, and median household income; Gatineau is smaller with a similar average age — a classic capital-region scale gap in the 2021 Census.</blockquote>

      <h2>Explore the full datasets</h2>
      <p>Dig into every section (households, labour, languages, dwellings) on the location profiles, or build your own side-by-side:</p>
      <ul>
        <li><a href="/location/ottawa/">Ottawa 2021 census profile</a></li>
        <li><a href="/location/gatineau/">Gatineau 2021 census profile</a></li>
        <li><a href="/compare/">Location Comparison tool</a> — select Census subdivision, then Ottawa and Gatineau</li>
      </ul>

      <p>All figures above are Statistics Canada Census 2021 census-subdivision values as published in our location data. See <a href="/sources/">Sources &amp; methodology</a> for attribution under the Open Government Licence – Canada.</p>
    `,
  },
  {
    title: "Mississauga vs Brampton: 2021 Census Population & Income Compared",
    slug: "mississauga-vs-brampton-2021-census",
    date: "September 23, 2026",
    category: "Economy",
    readTime: "7 min read",
    heroImage: "/images/blog/urban-shift.png",
    chartType: 'bar',
    chartTitle: "Mississauga vs Brampton — Key 2021 Census Metrics",
    chartData: [
      { name: "Mississauga pop. (k)", value: 718 },
      { name: "Brampton pop. (k)", value: 656 },
      { name: "Mississauga growth %", value: -0.5 },
      { name: "Brampton growth %", value: 10.6 },
      { name: "Mississauga med. HH $k", value: 89 },
      { name: "Brampton med. HH $k", value: 98 },
    ],
    excerpt: "Side-by-side 2021 Census figures for Mississauga and Brampton: population, growth, median household income, and average age — with links to full profiles and the comparison tool.",
    content: `
      <p>Mississauga and Brampton are neighbouring Peel Region giants that often move in opposite directions on growth. The 2021 Census snapshot captures that divergence clearly. Here is a clear head-to-head.</p>

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
        <li><a href="/location/mississauga/">Mississauga 2021 census profile</a></li>
        <li><a href="/location/brampton/">Brampton 2021 census profile</a></li>
        <li><a href="/compare/">Location Comparison tool</a> — select Census subdivision, then Mississauga and Brampton</li>
      </ul>

      <p>All figures above are Statistics Canada Census 2021 census-subdivision values as published in our location data. See <a href="/sources/">Sources &amp; methodology</a> for attribution under the Open Government Licence – Canada.</p>
    `,
  },
  {
    title: "Hamilton vs Burlington: 2021 Census Population & Income Compared",
    slug: "hamilton-vs-burlington-2021-census",
    date: "September 26, 2026",
    category: "Urban Planning",
    readTime: "5 min read",
    heroImage: "/images/blog/multicultural-languages.png",
    chartType: 'bar',
    chartTitle: "Hamilton vs Burlington — Key 2021 Census Metrics",
    chartData: [
      { name: "Hamilton pop. (k)", value: 569 },
      { name: "Burlington pop. (k)", value: 187 },
      { name: "Hamilton growth %", value: 6 },
      { name: "Burlington growth %", value: 2 },
      { name: "Hamilton med. HH $k", value: 75.5 },
      { name: "Burlington med. HH $k", value: 94 },
    ],
    excerpt: "Side-by-side 2021 Census figures for Hamilton and Burlington: population, growth, median household income, and average age — with links to full profiles and the comparison tool.",
    content: `
      <p>Hamilton and Burlington sit on the western edge of the Greater Toronto and Hamilton Area — one a major industrial city, the other a smaller, higher-income neighbour. Using Statistics Canada Census of Population 2021 data for each city (census subdivision), here is a clear head-to-head.</p>

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

      <blockquote>Hamilton leads on population and recent growth; Burlington posts substantially higher median household income and an older average age — all from the same 2021 Census release.</blockquote>

      <h2>Explore the full datasets</h2>
      <p>Dig into every section (households, labour, languages, dwellings) on the location profiles, or build your own side-by-side:</p>
      <ul>
        <li><a href="/location/hamilton/">Hamilton 2021 census profile</a></li>
        <li><a href="/location/burlington/">Burlington 2021 census profile</a></li>
        <li><a href="/compare/">Location Comparison tool</a> — select Census subdivision, then Hamilton and Burlington</li>
      </ul>

      <p>All figures above are Statistics Canada Census 2021 census-subdivision values as published in our location data. See <a href="/sources/">Sources &amp; methodology</a> for attribution under the Open Government Licence – Canada.</p>
    `,
  },
  {
    title: "Winnipeg vs Saskatoon: 2021 Census Population & Income Compared",
    slug: "winnipeg-vs-saskatoon-2021-census",
    date: "September 28, 2026",
    category: "Economy",
    readTime: "6 min read",
    heroImage: "/images/blog/income-disparity.png",
    chartType: 'bar',
    chartTitle: "Winnipeg vs Saskatoon — Key 2021 Census Metrics",
    chartData: [
      { name: "Winnipeg pop. (k)", value: 750 },
      { name: "Saskatoon pop. (k)", value: 266 },
      { name: "Winnipeg growth %", value: 6.3 },
      { name: "Saskatoon growth %", value: 7.7 },
      { name: "Winnipeg med. HH $k", value: 69.5 },
      { name: "Saskatoon med. HH $k", value: 74.5 },
    ],
    excerpt: "Side-by-side 2021 Census figures for Winnipeg and Saskatoon: population, growth, median household income, and average age — with links to full profiles and the comparison tool.",
    content: `
      <p>Winnipeg and Saskatoon are Prairie anchors — Manitoba's largest city and Saskatchewan's largest. Side-by-side 2021 Census figures highlight scale, growth, and income differences. Here is a clear head-to-head.</p>

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

      <blockquote>Winnipeg is nearly three times Saskatoon's size; Saskatoon grew faster, has higher median household income, and a younger average age in the 2021 Census.</blockquote>

      <h2>Explore the full datasets</h2>
      <p>Dig into every section (households, labour, languages, dwellings) on the location profiles, or build your own side-by-side:</p>
      <ul>
        <li><a href="/location/winnipeg/">Winnipeg 2021 census profile</a></li>
        <li><a href="/location/saskatoon/">Saskatoon 2021 census profile</a></li>
        <li><a href="/compare/">Location Comparison tool</a> — select Census subdivision, then Winnipeg and Saskatoon</li>
      </ul>

      <p>All figures above are Statistics Canada Census 2021 census-subdivision values as published in our location data. See <a href="/sources/">Sources &amp; methodology</a> for attribution under the Open Government Licence – Canada.</p>
    `,
  },
  {
    title: "Halifax vs Québec: 2021 Census Population & Income Compared",
    slug: "halifax-vs-quebec-2021-census",
    date: "October 1, 2026",
    category: "Urban Planning",
    readTime: "6 min read",
    heroImage: "/images/blog/urban-shift.png",
    chartType: 'bar',
    chartTitle: "Halifax vs Québec — Key 2021 Census Metrics",
    chartData: [
      { name: "Halifax pop. (k)", value: 440 },
      { name: "Québec pop. (k)", value: 549 },
      { name: "Halifax growth %", value: 9.1 },
      { name: "Québec growth %", value: 3.3 },
      { name: "Halifax med. HH $k", value: 69.5 },
      { name: "Québec med. HH $k", value: 60.8 },
    ],
    excerpt: "Side-by-side 2021 Census figures for Halifax and Québec: population, growth, median household income, and average age — with links to full profiles and the comparison tool.",
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
        <li><a href="/location/halifax-regional-municipality-rgm/">Halifax 2021 census profile</a></li>
        <li><a href="/location/qu-bec/">Québec 2021 census profile</a></li>
        <li><a href="/compare/">Location Comparison tool</a> — select Census subdivision, then Halifax and Québec</li>
      </ul>

      <p>All figures above are Statistics Canada Census 2021 census-subdivision values as published in our location data. See <a href="/sources/">Sources &amp; methodology</a> for attribution under the Open Government Licence – Canada.</p>
    `,
  },
  {
    title: "Surrey vs Burnaby: 2021 Census Population & Income Compared",
    slug: "surrey-vs-burnaby-2021-census",
    date: "October 3, 2026",
    category: "Economy",
    readTime: "5 min read",
    heroImage: "/images/blog/multicultural-languages.png",
    chartType: 'bar',
    chartTitle: "Surrey vs Burnaby — Key 2021 Census Metrics",
    chartData: [
      { name: "Surrey pop. (k)", value: 568 },
      { name: "Burnaby pop. (k)", value: 249 },
      { name: "Surrey growth %", value: 9.7 },
      { name: "Burnaby growth %", value: 7 },
      { name: "Surrey med. HH $k", value: 87 },
      { name: "Burnaby med. HH $k", value: 73.5 },
    ],
    excerpt: "Side-by-side 2021 Census figures for Surrey and Burnaby: population, growth, median household income, and average age — with links to full profiles and the comparison tool.",
    content: `
      <p>Surrey and Burnaby are two of Metro Vancouver's largest municipalities outside the City of Vancouver itself. The 2021 Census shows Surrey pulling ahead on growth and income. Here is a clear head-to-head.</p>

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

      <blockquote>Surrey is more than twice Burnaby's population, grew faster, and has higher median household income plus a younger average age — all from the same 2021 Census release.</blockquote>

      <h2>Explore the full datasets</h2>
      <p>Dig into every section (households, labour, languages, dwellings) on the location profiles, or build your own side-by-side:</p>
      <ul>
        <li><a href="/location/surrey/">Surrey 2021 census profile</a></li>
        <li><a href="/location/burnaby/">Burnaby 2021 census profile</a></li>
        <li><a href="/compare/">Location Comparison tool</a> — select Census subdivision, then Surrey and Burnaby</li>
      </ul>

      <p>All figures above are Statistics Canada Census 2021 census-subdivision values as published in our location data. See <a href="/sources/">Sources &amp; methodology</a> for attribution under the Open Government Licence – Canada.</p>
    `,
  },
  {
    title: "London vs Kitchener: 2021 Census Population & Income Compared",
    slug: "london-vs-kitchener-2021-census",
    date: "October 6, 2026",
    category: "Urban Planning",
    readTime: "6 min read",
    heroImage: "/images/blog/income-disparity.png",
    chartType: 'bar',
    chartTitle: "London vs Kitchener — Key 2021 Census Metrics",
    chartData: [
      { name: "London pop. (k)", value: 422 },
      { name: "Kitchener pop. (k)", value: 257 },
      { name: "London growth %", value: 10 },
      { name: "Kitchener growth %", value: 10.1 },
      { name: "London med. HH $k", value: 68.5 },
      { name: "Kitchener med. HH $k", value: 76.5 },
    ],
    excerpt: "Side-by-side 2021 Census figures for London and Kitchener: population, growth, median household income, and average age — with links to full profiles and the comparison tool.",
    content: `
      <p>London and Kitchener are southwestern Ontario mid-sized cities that both posted double-digit growth in the last census cycle. Using Statistics Canada Census of Population 2021 data for each city (census subdivision), here is a clear head-to-head.</p>

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
        <li><a href="/location/london/">London 2021 census profile</a></li>
        <li><a href="/location/kitchener/">Kitchener 2021 census profile</a></li>
        <li><a href="/compare/">Location Comparison tool</a> — select Census subdivision, then London and Kitchener</li>
      </ul>

      <p>All figures above are Statistics Canada Census 2021 census-subdivision values as published in our location data. See <a href="/sources/">Sources &amp; methodology</a> for attribution under the Open Government Licence – Canada.</p>
    `,
  },
  {
    title: "Regina vs Saskatoon: 2021 Census Population & Income Compared",
    slug: "regina-vs-saskatoon-2021-census",
    date: "October 8, 2026",
    category: "Economy",
    readTime: "5 min read",
    heroImage: "/images/blog/urban-shift.png",
    chartType: 'bar',
    chartTitle: "Regina vs Saskatoon — Key 2021 Census Metrics",
    chartData: [
      { name: "Regina pop. (k)", value: 226 },
      { name: "Saskatoon pop. (k)", value: 266 },
      { name: "Regina growth %", value: 5.3 },
      { name: "Saskatoon growth %", value: 7.7 },
      { name: "Regina med. HH $k", value: 76.5 },
      { name: "Saskatoon med. HH $k", value: 74.5 },
    ],
    excerpt: "Side-by-side 2021 Census figures for Regina and Saskatoon: population, growth, median household income, and average age — with links to full profiles and the comparison tool.",
    content: `
      <p>Regina and Saskatoon are Saskatchewan's two dominant cities. The 2021 Census census-subdivision numbers show Saskatoon ahead on size and growth, with incomes and ages nearly tied. Here is a clear head-to-head.</p>

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
        <li><a href="/location/regina/">Regina 2021 census profile</a></li>
        <li><a href="/location/saskatoon/">Saskatoon 2021 census profile</a></li>
        <li><a href="/compare/">Location Comparison tool</a> — select Census subdivision, then Regina and Saskatoon</li>
      </ul>

      <p>All figures above are Statistics Canada Census 2021 census-subdivision values as published in our location data. See <a href="/sources/">Sources &amp; methodology</a> for attribution under the Open Government Licence – Canada.</p>
    `,
  },
  {
    title: "Vaughan vs Markham: 2021 Census Population & Income Compared",
    slug: "vaughan-vs-markham-2021-census",
    date: "October 10, 2026",
    category: "Urban Planning",
    readTime: "7 min read",
    heroImage: "/images/blog/multicultural-languages.png",
    chartType: 'bar',
    chartTitle: "Vaughan vs Markham — Key 2021 Census Metrics",
    chartData: [
      { name: "Vaughan pop. (k)", value: 323 },
      { name: "Markham pop. (k)", value: 339 },
      { name: "Vaughan growth %", value: 5.5 },
      { name: "Markham growth %", value: 2.9 },
      { name: "Vaughan med. HH $k", value: 107 },
      { name: "Markham med. HH $k", value: 92 },
    ],
    excerpt: "Side-by-side 2021 Census figures for Vaughan and Markham: population, growth, median household income, and average age — with links to full profiles and the comparison tool.",
    content: `
      <p>Vaughan and Markham are York Region neighbours known for rapid suburban growth and high household incomes. The 2021 Census puts their populations and paycheques in context. Here is a clear head-to-head.</p>

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
        <li><a href="/location/vaughan/">Vaughan 2021 census profile</a></li>
        <li><a href="/location/markham/">Markham 2021 census profile</a></li>
        <li><a href="/compare/">Location Comparison tool</a> — select Census subdivision, then Vaughan and Markham</li>
      </ul>

      <p>All figures above are Statistics Canada Census 2021 census-subdivision values as published in our location data. See <a href="/sources/">Sources &amp; methodology</a> for attribution under the Open Government Licence – Canada.</p>
    `,
  }
];
