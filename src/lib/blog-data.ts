import { compareBlogPosts } from './blog-compare-posts';

export interface ChartDataPoint {
 name: string;
 value: number;
 full?: number;
}

export interface BlogPost {
 title: string;
 slug: string;
 date: string;
 excerpt: string;
 content: string;
 category: string;
 readTime: string;
 heroImage: string;
 /** Visible byline. First name only. */
 author?: string;
 chartType?: 'bar' | 'area' | 'pie';
 chartData?: ChartDataPoint[];
 chartTitle?: string;
}

const existingBlogPosts: BlogPost[] = [
 {
 title: "Canada's Trades-Heavy Towns (2021 Census)",
 slug: "canadas-trades-heavy-towns",
 date: "October 29, 2026",
 category: "Labour",
 readTime: "7 min read",
 author: "Andrew",
 heroImage: "/images/blog/canadas-trades-heavy-towns.png",
 chartType: 'bar',
 chartTitle: "Trades, transport and equipment operators, places of 50,000 or more (percent)",
 chartData: [
 { name: "Wood Buffalo", value: 31.3 },
 { name: "Kawartha Lakes", value: 24.7 },
 { name: "Norfolk County", value: 24.3 },
 { name: "Maple Ridge", value: 23.2 },
 { name: "Grande Prairie", value: 23.2 },
 { name: "Airdrie", value: 23.0 },
 { name: "Abbotsford", value: 22.9 },
 { name: "Brampton", value: 22.5 },
 ],
 excerpt: "Wood Buffalo led Canadian places of 50,000 or more: 31.3% of the labour force was in trades, transport and equipment operators. Lac Ste. Anne County led places of 10,000 to 49,999, at 31.9%. The national share was 16.8%.",
 content: `
 <p>In the 2021 Census, <strong>31.3%</strong> of <a href="/location/wood-buffalo-specialized-municipality-sm/#occupation">Wood Buffalo</a>'s labour force was in trades, transport and equipment operators — the highest share among Canada's <strong>101</strong> census subdivisions with <strong>50,000</strong> or more residents. <a href="/location/kawartha-lakes/#occupation">Kawartha Lakes</a> was next, at 24.7%. Across <a href="/location/canada/#occupation">Canada</a>, the same share was <strong>16.8%</strong>. Two places of 10,000 to 49,999 rank higher than Wood Buffalo. That list is below.</p>

 <p>The percentage is the published count for trades, transport and equipment operators, divided by the published labour-force total. On this site that total is the labour force aged 15 and over. It is a wider base than the employed labour force used for place of work. It is the same calculation as the <a href="/location/wood-buffalo-specialized-municipality-sm/#occupation">occupation section</a> on each location page.</p>

 <p>The occupation categories do not add up to that labour-force total. Statistics Canada randomly rounds census counts, and people with no classified occupation stay in the published total. This page does not estimate that remainder, and it does not adjust for rounding.</p>

 <h2>Places of 50,000 or more</h2>
 <p>The ranking below keeps the list to census subdivisions — cities, towns, and other municipalities — with a 2021 population of at least 50,000. That threshold leaves 101 places. Every figure is calculated from the census counts in this site's location file. Seven of the top 15 are in British Columbia. Four are in Ontario, three in Alberta, and one in Quebec.</p>

 <p>Brampton does not lead the share, but it has the largest trades count in this top 15: <strong>80,200</strong> people.</p>

 <div class="table-wrap">
 <table>
 <thead>
 <tr>
 <th class="num">Rank</th>
 <th>Place</th>
 <th>Province</th>
 <th class="num">Population</th>
 <th class="num">Trades, transport and equipment operators</th>
 <th class="num">Labour force</th>
 <th class="num">Share</th>
 </tr>
 </thead>
 <tbody>
 <tr><td class="num">1</td><td><a href="/location/wood-buffalo-specialized-municipality-sm/#occupation">Wood Buffalo</a></td><td>Alberta</td><td class="num">72,326</td><td class="num">13,345</td><td class="num">42,655</td><td class="num">31.3%</td></tr>
 <tr><td class="num">2</td><td><a href="/location/kawartha-lakes/#occupation">Kawartha Lakes</a></td><td>Ontario</td><td class="num">79,247</td><td class="num">9,030</td><td class="num">36,500</td><td class="num">24.7%</td></tr>
 <tr><td class="num">3</td><td><a href="/location/norfolk-county/#occupation">Norfolk County</a></td><td>Ontario</td><td class="num">67,490</td><td class="num">7,685</td><td class="num">31,620</td><td class="num">24.3%</td></tr>
 <tr><td class="num">4</td><td><a href="/location/maple-ridge/#occupation">Maple Ridge</a></td><td>British Columbia</td><td class="num">90,990</td><td class="num">11,575</td><td class="num">49,870</td><td class="num">23.2%</td></tr>
 <tr><td class="num">5</td><td><a href="/location/grande-prairie/#occupation">Grande Prairie</a></td><td>Alberta</td><td class="num">64,141</td><td class="num">8,505</td><td class="num">36,645</td><td class="num">23.2%</td></tr>
 <tr><td class="num">6</td><td><a href="/location/airdrie/#occupation">Airdrie</a></td><td>Alberta</td><td class="num">74,100</td><td class="num">9,525</td><td class="num">41,335</td><td class="num">23.0%</td></tr>
 <tr><td class="num">7</td><td><a href="/location/abbotsford/#occupation">Abbotsford</a></td><td>British Columbia</td><td class="num">153,524</td><td class="num">18,570</td><td class="num">81,080</td><td class="num">22.9%</td></tr>
 <tr><td class="num">8</td><td><a href="/location/brampton/#occupation">Brampton</a></td><td>Ontario</td><td class="num">656,480</td><td class="num">80,200</td><td class="num">355,755</td><td class="num">22.5%</td></tr>
 <tr><td class="num">9</td><td><a href="/location/surrey/#occupation">Surrey</a></td><td>British Columbia</td><td class="num">568,322</td><td class="num">68,505</td><td class="num">308,190</td><td class="num">22.2%</td></tr>
 <tr><td class="num">10</td><td><a href="/location/chilliwack/#occupation">Chilliwack</a></td><td>British Columbia</td><td class="num">93,203</td><td class="num">10,310</td><td class="num">46,785</td><td class="num">22.0%</td></tr>
 <tr><td class="num">11</td><td><a href="/location/caledon-town-t/#occupation">Caledon</a></td><td>Ontario</td><td class="num">76,581</td><td class="num">9,380</td><td class="num">43,140</td><td class="num">21.7%</td></tr>
 <tr><td class="num">12</td><td><a href="/location/delta/#occupation">Delta</a></td><td>British Columbia</td><td class="num">108,455</td><td class="num">12,560</td><td class="num">58,010</td><td class="num">21.7%</td></tr>
 <tr><td class="num">13</td><td><a href="/location/prince-george/#occupation">Prince George</a></td><td>British Columbia</td><td class="num">76,708</td><td class="num">8,745</td><td class="num">41,275</td><td class="num">21.2%</td></tr>
 <tr><td class="num">14</td><td><a href="/location/mirabel/#occupation">Mirabel</a></td><td>Quebec</td><td class="num">61,108</td><td class="num">7,460</td><td class="num">35,560</td><td class="num">21.0%</td></tr>
 <tr><td class="num">15</td><td><a href="/location/kamloops/#occupation">Kamloops</a></td><td>British Columbia</td><td class="num">97,902</td><td class="num">10,575</td><td class="num">51,030</td><td class="num">20.7%</td></tr>
 </tbody>
 </table>
 </div>

 <p>Shares are shown to one decimal place, matching the location pages. Two pairs round to the same tenth. Maple Ridge (11,575 of 49,870) ranks just ahead of Grande Prairie (8,505 of 36,645), and Caledon (9,380 of 43,140) just ahead of Delta (12,560 of 58,010), on the unrounded share.</p>

 <h2>Places of 10,000 to 49,999</h2>
 <p>Places under 50,000 residents post higher shares than that list. Dropping the floor to 10,000 residents, and stopping below 50,000, leaves <strong>314</strong> census subdivisions. <a href="/location/lac-ste-anne-county-municipal-district-md/#occupation">Lac Ste. Anne County</a>, at 10,832 residents, is first, at <strong>31.9%</strong>. <a href="/location/saint-lin-laurentides/#occupation">Saint-Lin--Laurentides</a> is second, at <strong>31.5%</strong>. Both are above Wood Buffalo's 31.3%. The top 20 are below. Seven are in Alberta, five in Quebec, three in Manitoba, two in British Columbia, two in Ontario, and one in Nova Scotia.</p>

 <div class="table-wrap">
 <table>
 <thead>
 <tr>
 <th class="num">Rank</th>
 <th>Place</th>
 <th>Province</th>
 <th class="num">Population</th>
 <th class="num">Trades, transport and equipment operators</th>
 <th class="num">Labour force</th>
 <th class="num">Share</th>
 </tr>
 </thead>
 <tbody>
 <tr><td class="num">1</td><td><a href="/location/lac-ste-anne-county-municipal-district-md/#occupation">Lac Ste. Anne County</a></td><td>Alberta</td><td class="num">10,832</td><td class="num">1,775</td><td class="num">5,565</td><td class="num">31.9%</td></tr>
 <tr><td class="num">2</td><td><a href="/location/saint-lin-laurentides/#occupation">Saint-Lin--Laurentides</a></td><td>Quebec</td><td class="num">24,030</td><td class="num">4,010</td><td class="num">12,715</td><td class="num">31.5%</td></tr>
 <tr><td class="num">3</td><td><a href="/location/hanover-rural-municipality-rm/#occupation">Hanover</a></td><td>Manitoba</td><td class="num">17,216</td><td class="num">2,650</td><td class="num">8,490</td><td class="num">31.2%</td></tr>
 <tr><td class="num">4</td><td><a href="/location/st-clements-rural-municipality-rm/#occupation">St. Clements</a></td><td>Manitoba</td><td class="num">11,586</td><td class="num">1,890</td><td class="num">6,315</td><td class="num">29.9%</td></tr>
 <tr><td class="num">5</td><td><a href="/location/yellowhead-county-municipal-district-md/#occupation">Yellowhead County</a></td><td>Alberta</td><td class="num">10,426</td><td class="num">1,535</td><td class="num">5,220</td><td class="num">29.4%</td></tr>
 <tr><td class="num">6</td><td><a href="/location/sainte-sophie-municipalit-m/#occupation">Sainte-Sophie</a></td><td>Quebec</td><td class="num">18,080</td><td class="num">2,950</td><td class="num">10,190</td><td class="num">28.9%</td></tr>
 <tr><td class="num">7</td><td><a href="/location/mackenzie-county-specialized-municipality-sm/#occupation">Mackenzie County</a></td><td>Alberta</td><td class="num">12,804</td><td class="num">1,475</td><td class="num">5,105</td><td class="num">28.9%</td></tr>
 <tr><td class="num">8</td><td><a href="/location/prince-rupert/#occupation">Prince Rupert</a></td><td>British Columbia</td><td class="num">12,300</td><td class="num">1,950</td><td class="num">6,780</td><td class="num">28.8%</td></tr>
 <tr><td class="num">9</td><td><a href="/location/lavaltrie/#occupation">Lavaltrie</a></td><td>Quebec</td><td class="num">14,425</td><td class="num">2,205</td><td class="num">7,680</td><td class="num">28.7%</td></tr>
 <tr><td class="num">10</td><td><a href="/location/sainte-julienne-municipalit-m/#occupation">Sainte-Julienne</a></td><td>Quebec</td><td class="num">11,173</td><td class="num">1,615</td><td class="num">5,665</td><td class="num">28.5%</td></tr>
 <tr><td class="num">11</td><td><a href="/location/mission-district-municipality-dm/#occupation">Mission</a></td><td>British Columbia</td><td class="num">41,519</td><td class="num">6,045</td><td class="num">21,345</td><td class="num">28.3%</td></tr>
 <tr><td class="num">12</td><td><a href="/location/parkland-county-municipal-district-md/#occupation">Parkland County</a></td><td>Alberta</td><td class="num">32,205</td><td class="num">4,785</td><td class="num">17,135</td><td class="num">27.9%</td></tr>
 <tr><td class="num">13</td><td><a href="/location/east-hants-municipal-district-md/#occupation">East Hants</a></td><td>Nova Scotia</td><td class="num">22,892</td><td class="num">3,380</td><td class="num">12,400</td><td class="num">27.3%</td></tr>
 <tr><td class="num">14</td><td><a href="/location/brock-township-tp/#occupation">Brock</a></td><td>Ontario</td><td class="num">12,567</td><td class="num">1,750</td><td class="num">6,490</td><td class="num">27.0%</td></tr>
 <tr><td class="num">15</td><td><a href="/location/leduc/#occupation">Leduc</a></td><td>Alberta</td><td class="num">34,094</td><td class="num">4,940</td><td class="num">18,355</td><td class="num">26.9%</td></tr>
 <tr><td class="num">16</td><td><a href="/location/tach-rural-municipality-rm/#occupation">Taché</a></td><td>Manitoba</td><td class="num">11,916</td><td class="num">1,765</td><td class="num">6,615</td><td class="num">26.7%</td></tr>
 <tr><td class="num">17</td><td><a href="/location/south-dundas-municipality-mu/#occupation">South Dundas</a></td><td>Ontario</td><td class="num">11,044</td><td class="num">1,370</td><td class="num">5,140</td><td class="num">26.7%</td></tr>
 <tr><td class="num">18</td><td><a href="/location/saint-colomban/#occupation">Saint-Colomban</a></td><td>Quebec</td><td class="num">17,740</td><td class="num">2,645</td><td class="num">10,055</td><td class="num">26.3%</td></tr>
 <tr><td class="num">19</td><td><a href="/location/spruce-grove/#occupation">Spruce Grove</a></td><td>Alberta</td><td class="num">37,645</td><td class="num">5,375</td><td class="num">20,595</td><td class="num">26.1%</td></tr>
 <tr><td class="num">20</td><td><a href="/location/bonnyville-no-87-municipal-district-md/#occupation">Bonnyville No. 87</a></td><td>Alberta</td><td class="num">12,897</td><td class="num">1,775</td><td class="num">6,815</td><td class="num">26.0%</td></tr>
 </tbody>
 </table>
 </div>

 <p>Shares are again to one decimal place. Sainte-Sophie (2,950 of 10,190) ranks just ahead of Mackenzie County (1,475 of 5,105), and Taché (1,765 of 6,615) just ahead of South Dundas (1,370 of 5,140), on the unrounded share.</p>

 <p><a href="/location/hanover-rural-municipality-rm/#occupation">Hanover</a> in this table is the rural municipality in Manitoba, population 17,216. <a href="/location/hanover-town-t/#occupation">Hanover, Ontario</a>, is a separate census subdivision of 7,967 residents. It falls below the 10,000 floor, so it is not in this ranking.</p>

 <p>Random rounding moves a share more when the labour force is small. Lac Ste. Anne County's denominator is 5,565 people. Wood Buffalo's is 42,655, and Toronto's is 1,518,420. A few people rounded into or out of a count change the first decimal in the smaller place and do not change it in the larger one. The ranks above use the published counts as stored.</p>

 <h2>Natural resources and manufacturing</h2>
 <p>Natural resources, agriculture and related production, and manufacturing and utilities, are separate occupation groups. They use the same labour-force total as the trades share. A high trades share is not the same fact as a high natural-resources share. In the top 10 of the 10,000-to-49,999 list, natural resources runs from 1.7% to 16.5%. Manufacturing stays in a narrower band, from 3.2% to 7.3%. Canada is 2.8% and 4.4% on those two groups.</p>

 <div class="table-wrap">
 <table>
 <thead>
 <tr>
 <th>Place</th>
 <th class="num">Trades</th>
 <th class="num">Natural resources</th>
 <th class="num">Manufacturing</th>
 </tr>
 </thead>
 <tbody>
 <tr><td><a href="/location/lac-ste-anne-county-municipal-district-md/#occupation">Lac Ste. Anne County</a></td><td class="num">31.9%</td><td class="num">13.4%</td><td class="num">4.2%</td></tr>
 <tr><td><a href="/location/saint-lin-laurentides/#occupation">Saint-Lin--Laurentides</a></td><td class="num">31.5%</td><td class="num">1.9%</td><td class="num">6.4%</td></tr>
 <tr><td><a href="/location/hanover-rural-municipality-rm/#occupation">Hanover</a></td><td class="num">31.2%</td><td class="num">10.7%</td><td class="num">6.1%</td></tr>
 <tr><td><a href="/location/st-clements-rural-municipality-rm/#occupation">St. Clements</a></td><td class="num">29.9%</td><td class="num">4.0%</td><td class="num">3.2%</td></tr>
 <tr><td><a href="/location/yellowhead-county-municipal-district-md/#occupation">Yellowhead County</a></td><td class="num">29.4%</td><td class="num">16.5%</td><td class="num">7.3%</td></tr>
 <tr><td><a href="/location/sainte-sophie-municipalit-m/#occupation">Sainte-Sophie</a></td><td class="num">28.9%</td><td class="num">1.7%</td><td class="num">6.7%</td></tr>
 <tr><td><a href="/location/mackenzie-county-specialized-municipality-sm/#occupation">Mackenzie County</a></td><td class="num">28.9%</td><td class="num">15.9%</td><td class="num">6.7%</td></tr>
 <tr><td><a href="/location/prince-rupert/#occupation">Prince Rupert</a></td><td class="num">28.8%</td><td class="num">4.0%</td><td class="num">3.5%</td></tr>
 <tr><td><a href="/location/lavaltrie/#occupation">Lavaltrie</a></td><td class="num">28.7%</td><td class="num">1.8%</td><td class="num">4.6%</td></tr>
 <tr><td><a href="/location/sainte-julienne-municipalit-m/#occupation">Sainte-Julienne</a></td><td class="num">28.5%</td><td class="num">2.1%</td><td class="num">5.3%</td></tr>
 <tr><td><a href="/location/canada/#occupation">Canada</a></td><td class="num">16.8%</td><td class="num">2.8%</td><td class="num">4.4%</td></tr>
 </tbody>
 </table>
 </div>

 <p><a href="/location/yellowhead-county-municipal-district-md/#occupation">Yellowhead County</a> has the highest natural-resources share in that top 10, at <strong>16.5%</strong> (860 of 5,220), and the highest manufacturing share in the group, at <strong>7.3%</strong> (380 of 5,220). <a href="/location/mackenzie-county-specialized-municipality-sm/#occupation">Mackenzie County</a> is next on natural resources, at 15.9% (810 of 5,105). <a href="/location/lac-ste-anne-county-municipal-district-md/#occupation">Lac Ste. Anne County</a> is 13.4% (745 of 5,565). <a href="/location/hanover-rural-municipality-rm/#occupation">Hanover</a> is 10.7% (910 of 8,490).</p>

 <p>The other end of the same top 10 is close to, or under, the Canada natural-resources share. <a href="/location/sainte-sophie-municipalit-m/#occupation">Sainte-Sophie</a> is 1.7% (175 of 10,190). <a href="/location/saint-lin-laurentides/#occupation">Saint-Lin--Laurentides</a>, second on trades, is 1.9% (240 of 12,715). <a href="/location/lavaltrie/#occupation">Lavaltrie</a> is 1.8% (140 of 7,680). Manufacturing in the top 10 runs from 3.2% in <a href="/location/st-clements-rural-municipality-rm/#occupation">St. Clements</a> (200 of 6,315) to Yellowhead County's 7.3%. Canada's manufacturing share is 4.4% (857,540 of 19,310,340). Canada's natural-resources share is 2.8% (541,235 of 19,310,340).</p>

 <p>Among the 15 larger places in the first table, <a href="/location/norfolk-county/#occupation">Norfolk County</a> has the highest manufacturing share, at <strong>10.5%</strong> (3,325 of 31,620), and the highest natural-resources share, at <strong>7.2%</strong> (2,275 of 31,620). <a href="/location/wood-buffalo-specialized-municipality-sm/#occupation">Wood Buffalo</a>, the trades leader in that list, is 4.0% natural resources (1,690 of 42,655) and 6.1% manufacturing (2,595 of 42,655). The three groups do not add up to the labour-force total.</p>

 <h2>Where the largest cities land</h2>
 <p>Five census subdivisions in the file have 1,000,000 residents or more. <a href="/location/edmonton/#occupation">Edmonton</a> is the only one above the Canada share: 32nd at <strong>18.5%</strong> (102,620 of 554,040). <a href="/location/calgary/#occupation">Calgary</a> is 59th at <strong>15.8%</strong> (115,655 of 730,050). <a href="/location/toronto/#occupation">Toronto</a> is 89th at <strong>11.6%</strong> (175,505 of 1,518,420) and has the largest trades count in the group of 101. <a href="/location/montr-al/#occupation">Montréal</a> is 93rd at <strong>10.3%</strong> (98,535 of 959,130). <a href="/location/ottawa/#occupation">Ottawa</a> is 99th at <strong>10.0%</strong> (54,825 of 549,985).</p>

 <p><a href="/location/winnipeg/#occupation">Winnipeg</a>, at 749,607 residents, ranked 57th at <strong>16.0%</strong> (64,295 of 402,365). <a href="/location/vancouver/#occupation">Vancouver</a> ranked 96th at <strong>10.1%</strong> (39,750 of 394,670).</p>

 <h2>The low end of the 50,000-person list</h2>
 <p><a href="/location/oakville-town-t/#occupation">Oakville</a> is last among the 101 places, at <strong>9.0%</strong>. The five lowest:</p>

 <div class="table-wrap">
 <table>
 <thead>
 <tr>
 <th class="num">Rank</th>
 <th>Place</th>
 <th>Province</th>
 <th class="num">Population</th>
 <th class="num">Trades, transport and equipment operators</th>
 <th class="num">Labour force</th>
 <th class="num">Share</th>
 </tr>
 </thead>
 <tbody>
 <tr><td class="num">97</td><td><a href="/location/waterloo/#occupation">Waterloo</a></td><td>Ontario</td><td class="num">121,436</td><td class="num">6,640</td><td class="num">65,955</td><td class="num">10.1%</td></tr>
 <tr><td class="num">98</td><td><a href="/location/markham/#occupation">Markham</a></td><td>Ontario</td><td class="num">338,503</td><td class="num">17,160</td><td class="num">170,540</td><td class="num">10.1%</td></tr>
 <tr><td class="num">99</td><td><a href="/location/ottawa/#occupation">Ottawa</a></td><td>Ontario</td><td class="num">1,017,449</td><td class="num">54,825</td><td class="num">549,985</td><td class="num">10.0%</td></tr>
 <tr><td class="num">100</td><td><a href="/location/fredericton/#occupation">Fredericton</a></td><td>New Brunswick</td><td class="num">63,116</td><td class="num">3,475</td><td class="num">34,905</td><td class="num">10.0%</td></tr>
 <tr><td class="num">101</td><td><a href="/location/oakville-town-t/#occupation">Oakville</a></td><td>Ontario</td><td class="num">213,759</td><td class="num">10,235</td><td class="num">113,190</td><td class="num">9.0%</td></tr>
 </tbody>
 </table>
 </div>

 <p>Vancouver, at 10.1%, ranks 96th, just ahead of Waterloo and Markham on the unrounded share. Vancouver is 39,750 of 394,670. Waterloo is 6,640 of 65,955. Markham is 17,160 of 170,540. Ottawa (54,825 of 549,985) ranks just ahead of Fredericton (3,475 of 34,905). Both round to 10.0%.</p>

 <p>Oakville led the worked-at-home ranking in <a href="/blog/canadas-top-work-from-home-cities/">Canada's top work-from-home cities</a>. It is last on this list. The two rankings use different census questions and different denominators. Worked at home is a share of the employed labour force. This post is a share of the labour force.</p>

 <h2>The national figure</h2>
 <p>For <a href="/location/canada/#occupation">Canada</a>, 3,239,500 people were in trades, transport and equipment operators out of a labour force of 19,310,340, which is <strong>16.8%</strong>. The country's 2021 population was 36,991,981. That Canada figure is the country's published counts in the location file. It is not the sum of the municipal rows above.</p>

 <p>Among the 101 places of 50,000 or more, the median share was <strong>16.3%</strong>. <a href="/location/belleville/#occupation">Belleville</a> holds that middle place, at 16.3% (4,160 of 25,450). On the one-decimal shares used in the tables, 47 places round above Canada's 16.8% and 54 round lower. Added together, those 101 places had 1,916,155 people in this occupation group out of a labour force of 12,888,495, a combined share of <strong>14.9%</strong>. The 314 places of 10,000 to 49,999 combine to <strong>19.3%</strong> (630,075 of 3,257,685). The median counts each municipality once. The combined share counts every person in the labour force, so large places with lower shares — Toronto, Montréal, Calgary, and Ottawa — pull the 50,000-person group below both the median and the Canada figure. The smaller band, taken together, sits above Canada.</p>

 <p><a href="/location/newfoundland-and-labrador/#occupation">Newfoundland and Labrador</a> was the highest province or territory in the file, at <strong>19.4%</strong> (47,285 of 243,330). <a href="/location/alberta/#occupation">Alberta</a> was next, at <strong>19.3%</strong> (441,955 of 2,295,380). <a href="/location/quebec/#occupation">Quebec</a> was the lowest, at <strong>15.8%</strong> (702,290 of 4,435,460). <a href="/location/ontario/#occupation">Ontario</a> was the second lowest, at <strong>15.9%</strong> (1,175,410 of 7,399,205).</p>

 <h2>Compare a place yourself</h2>
 <p>Open any linked place for the full occupation breakdown, or set two places side by side in the <a href="/compare/">comparison tool</a>. The education, commute, occupation, and industry sections use the same anchors on location pages and in that tool. The worked-at-home ranking is in <a href="/blog/canadas-top-work-from-home-cities/">Canada's top work-from-home cities</a>.</p>

 <h2>Sources</h2>
 <p>Trades, natural-resources, and manufacturing counts, labour-force totals, and population are from the <a href="https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/prof/index.cfm?Lang=E" target="_blank" rel="noopener">Statistics Canada 2021 Census of Population (Census Profile)</a>, as stored for each place in the Canadian Data Insights location file. Shares on this page are calculated here from those published counts. See <a href="/sources/">how this site handles census data</a>. Statistics Canada data is used under the <a href="https://open.canada.ca/en/open-government-licence-canada" target="_blank" rel="noopener">Open Government Licence – Canada</a>. This post is by Andrew.</p>
    `,
  },
  {
 title: "Canadian News Deep-Dives — October 29, 2026: Bank of Canada Hikes to 2.5%, Gillingham Wins Winnipeg, Rogers' 1.6% Card Fee",
 slug: "canadian-news-roundup-2026-10-29",
 date: "October 29, 2026",
 category: "News",
 readTime: "8 min read",
 author: "Andrew",
 heroImage: "/images/blog/canadian-news-roundup-2026-10-29.png",
 chartType: 'bar',
 chartTitle: "Winnipeg mayoral race, Oct. 28, 2026 — top four candidates by unofficial vote share (%)",
 chartData: [
 { name: "Gillingham", value: 39.82 },
 { name: "Klein", value: 20.71 },
 { name: "Redden", value: 19.84 },
 { name: "Vogiatzakis", value: 9.66 },
 ],
 excerpt: "Three deep-dives: the Bank of Canada's first rate hike since 2023 and what a 4.70% prime means for borrowers, Scott Gillingham's second term and a remade Winnipeg council, and the 1.6% fee Rogers will add to credit card bill payments in January.",
 content: `
 <p><strong>TL;DR:</strong> Today's three most-searched Canadian news stories on Google Trends Canada, explained in depth with 2021 Census context. The Bank of Canada raised its key rate to 2.5%, its first increase since July 2023, and the big banks' prime rate is 4.70% as of today. Winnipeg re-elected Mayor Scott Gillingham but sent nine new faces to its 15-seat council. And Rogers will add a 1.6% charge when you pay your bill by credit card, starting Jan. 17, 2027.</p>

 <h2 id="bank-of-canada-hike">1. The Bank of Canada raises its key rate to 2.5% — the first hike since 2023</h2>
 <p>On Wednesday, Oct. 28, the Bank of Canada increased its target for the overnight rate by 25 basis points to <strong>2.5%</strong>, with the Bank Rate at 2.75% and the deposit rate at 2.45%. Governor Tiff Macklem said it is the first interest rate increase since <strong>July 2023</strong>.</p>
 <div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#eef0f5;"><iframe src="https://www.youtube-nocookie.com/embed/oOwEwuc6qoA" title="Why Did the Bank of Canada Raise Rates?" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
 <p><strong>Why it hiked:</strong> "With the outlook for inflation substantially higher and the economy showing resilience, an increase in the policy rate is needed to reduce the risk that elevated energy prices could spill over and become generalized inflation," Macklem said (The Globe and Mail). The Bank says the conflict in the Middle East is in its eighth month with no clear path to resolution, and higher-for-longer energy prices add to the persistence of inflation.</p>
 <p><strong>The inflation picture:</strong> CPI inflation has been around 3% since April and is expected to rise to about <strong>3.5%</strong> by the end of the year. Excluding gasoline, inflation was 2.2% in September, and core measures remain close to 2%. The Bank now expects inflation to average 3% in 2027, a percentage point above its July projection, before coming back to 2% in the middle of 2028.</p>
 <p><strong>The economy:</strong> GDP grew 3.3% in the second quarter and unemployment has been around 6.5% for several months. The Bank expects growth to slow in the fourth quarter because of new US tariffs, then pick up in 2027. It projects growth of 1% in 2026 and 2% in 2027 and 2028.</p>
 <p><strong>Prime is now 4.70%:</strong> RBC, TD, BMO, CIBC, Scotiabank and National Bank all raised their prime rates by 25 basis points, from 4.45% to <strong>4.70%</strong>, effective today, Oct. 29 (Financial Post). Variable-rate mortgages tied to prime rise first; new fixed mortgage rates follow bond yields (CBC News). Toronto broker Marcus Tzaferis told CBC that a quarter-point hike adds about <strong>$70 a month</strong> on average to payments on a $500,000 mortgage. Senior Deputy Governor Carolyn Rogers said the housing market is already struggling, particularly in Ontario and British Columbia, and the hike will add to that pressure.</p>
 <p><strong>More to come?</strong> "There could be a need to raise the policy rate further, but given the uncertainties, we will proceed carefully," Macklem said, adding decisions will be made one meeting at a time. The next rate announcement is <strong>Dec. 9, 2026</strong>.</p>
 <p><strong>By the numbers (2021 Census):</strong> the median Canadian household had a total income of <strong>$84,000</strong> in 2020, across <strong>14,978,941</strong> occupied private dwellings (<a href="/location/canada/">Canada profile</a>). That is the income base absorbing any higher monthly payments.</p>
 <p><strong>Why it matters to you:</strong> if you have a variable-rate mortgage, a home equity line of credit or another prime-linked loan, your cost goes up starting today. If you are renewing soon, compare fixed and variable offers carefully. This is general information, not financial advice.</p>
 <p>Sources: <a href="https://www.bankofcanada.ca/2026/10/fad-press-release-2026-10-28/" target="_blank" rel="noopener">Bank of Canada</a> · <a href="https://www.theglobeandmail.com/business/article-bank-of-canada-interest-rate-decision-oct-28-live-updates/" target="_blank" rel="noopener">The Globe and Mail</a> · <a href="https://www.cbc.ca/news/business/bank-of-canada-hike-mortgage-housing-market-9.7400127" target="_blank" rel="noopener">CBC News</a> · <a href="https://financialpost.com/fp-finance/banking/banks-raise-prime-rate-after-bank-of-canada-interest-rate-increase" target="_blank" rel="noopener">Financial Post</a> · <a href="https://www.newswire.ca/news-releases/rbc-royal-bank-announces-change-to-prime-rate-837555648.html" target="_blank" rel="noopener">RBC</a> · <a href="https://td.mediaroom.com/2026-10-28-TD-Canada-Trust-announces-change-to-TD-Prime-Rate" target="_blank" rel="noopener">TD</a></p>

 <h2 id="winnipeg-election">2. Gillingham wins a second term in Winnipeg as voters remake council</h2>
 <p>Scott Gillingham was re-elected mayor of Winnipeg on Wednesday. Unofficial results gave him <strong>80,206</strong> votes (<strong>39.82%</strong>), ahead of former MLA and city councillor Kevin Klein with 41,703 (20.71%), software developer Noah Redden with 39,962 (19.84%) and funeral home director Mike Vogiatzakis with 19,463 (9.66%). The other eight candidates in a field of 12, the most since 1992, each had less than 3% (Winnipeg Free Press; The Canadian Press).</p>
 <div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#eef0f5;"><iframe src="https://www.youtube-nocookie.com/embed/HMJKkaKIS-U" title="Why Winnipeg Kept Its Mayor but Changed Council" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
 <p><strong>A stronger mandate:</strong> Gillingham won in 2022 with 27.52% of the vote, the smallest share for any Winnipeg mayor in recent history, and a margin of only 4,391 votes (Winnipeg Free Press; CBC News). "Tonight you have given me the honour of serving as your mayor once again," he told supporters. "Thank you, Winnipeg. I will never take your trust for granted."</p>
 <p><strong>A new-look council:</strong> nine of 15 wards will have new councillors. Four incumbents lost: Ross Eadie to Natalie Smith in Mynarski, Devi Sharma to Greg McFarlane in Old Kildonan, Shawn Dobson to Kelly Ryback in St. James, and Russ Wyatt to Lora Meseman in Transcona. In the five open wards, voters elected Jasmine Brar (Waverley West), Ray DuBois (St. Norbert-Seine River), Sara MacArthur (River Heights-Fort Garry), Jeff Palmer (Fort Rouge-East Fort Garry) and Chris Sigurdson (St. Vital) (Winnipeg Free Press).</p>
 <p><strong>Turnout watch:</strong> a record <strong>50,767</strong> people voted in advance, up 21% from 2022. Overall turnout was 37.5% in 2022, the lowest since 1989, and 42.33% in 2018 (Winnipeg Free Press).</p>
 <p><strong>What's next:</strong> the campaign focused on housing and public safety, and Gillingham has vowed to tackle homelessness, addictions, mental health and crime. Klein conceded and said he would hold a news conference Friday (The Canadian Press). Almost every other Manitoba community voted Wednesday too.</p>
 <p><strong>By the numbers (2021 Census):</strong> <a href="/location/winnipeg/">Winnipeg</a> had <strong>749,607</strong> residents, up 6.3% from 2016. Its median age was 38.8 (Canada: 41.6), its median household income was $80,000 in 2020 (Canada: $84,000), and 12.9% of residents were in low income (Canada: 11.1%). The city had 315,465 private dwellings, 300,431 of them occupied by usual residents. See also <a href="/location/manitoba/">Manitoba</a>.</p>
 <p><strong>Why it matters to you:</strong> if you live in Winnipeg, more than half of your council is new, so check who now represents your ward before the next round of budget and housing decisions.</p>
 <p>Sources: <a href="https://www.winnipegfreepress.com/breakingnews/2026/10/28/gillingham-takes-lead-in-mayoral-race" target="_blank" rel="noopener">Winnipeg Free Press</a> · <a href="https://www.theglobeandmail.com/canada/article-scott-gillingham-re-elected-as-mayor-of-winnipeg/" target="_blank" rel="noopener">The Canadian Press via The Globe and Mail</a> · <a href="https://www.cbc.ca/news/canada/manitoba/winnipeg-mayoral-race-analysis-2026-9.7400665" target="_blank" rel="noopener">CBC News</a> · <a href="https://globalnews.ca/news/12122725/election-day-winnipeg-2026/" target="_blank" rel="noopener">Global News</a></p>

 <h2 id="rogers-credit-card-fee">3. Rogers will charge 1.6% when you pay your bill by credit card</h2>
 <p>Starting <strong>Jan. 17, 2027</strong>, Rogers will add a <strong>1.6%</strong> "credit card processing charge" every time a customer pays a Rogers bill by credit card, whether through Auto-Pay or a one-time payment. Rogers says the charge "reflects the fees we are charged by credit card companies." MoneySense reports Fido bills are included. On a $100 bill, that is $1.60.</p>
 <div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#eef0f5;"><iframe src="https://www.youtube-nocookie.com/embed/fHEEN0UhICo" title="How to Avoid Rogers' New Credit Card Fee" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
 <p><strong>Rogers' reasoning:</strong> a spokesperson said its credit card processing costs have gone up nearly 40% since 2020 and it now pays about <strong>$150 million</strong> a year in fees (CBC News; MobileSyrup).</p>
 <p><strong>Who is exempt:</strong> customers in Quebec, where the Consumer Protection Act prohibits such fees (MoneySense), customers on select specialized plans such as Connected for Success, and former Shaw Mobile customers on migrated plans.</p>
 <p><strong>How to avoid it:</strong> the charge does not apply to direct debit, online banking payments, cheques, Rogers gift cards, prepaid cards, Debit Mastercard or Visa Debit. MoneySense's analysis found a card earning 1% to 1.5% back on telecom bills won't cover a 1.6% fee, while a 2% card roughly breaks even.</p>
 <p><strong>Is this allowed?</strong> Card surcharges became possible in Canada after a class-action settlement. Under Mastercard's rules, in effect since Oct. 6, 2022, a credit card surcharge can't exceed 2.4% or the merchant's actual cost, whichever is lower, and surcharges aren't allowed on Debit Mastercard or prepaid cards (MoneySense). Telus rolled out a 1.5% credit card fee for mobile and home internet customers in 2022 before scrapping it a year later (CBC News).</p>
 <p><strong>By the numbers (2021 Census):</strong> <a href="/location/quebec/">Quebec</a>, where the fee won't apply, had <strong>8,501,833</strong> residents, about 23% of <a href="/location/canada/">Canada's</a> 36,991,981.</p>
 <p><strong>Why it matters to you:</strong> if you pay Rogers or Fido by credit card outside Quebec, decide before January whether your card rewards still beat the fee, or switch to debit or a bank payment.</p>
 <p>Sources: <a href="https://www.rogers.com/support/billing-accounts/understanding-the-credit-card-processing-charge" target="_blank" rel="noopener">Rogers</a> · <a href="https://www.cbc.ca/news/business/rogers-credit-card-fee-9.7391506" target="_blank" rel="noopener">CBC News</a> · <a href="https://www.moneysense.ca/spend/credit-cards/rogers-credit-card-payment-fee/" target="_blank" rel="noopener">MoneySense</a> · <a href="https://mobilesyrup.com/2026/10/21/rogers-credit-card-processing-fee/" target="_blank" rel="noopener">MobileSyrup</a></p>

 <h2>Data sources</h2>
 <p>Population, age, income, low-income and dwelling figures are from the 2021 Census of Population (income refers to 2020) as presented on Canadian Data Insights location pages. See <a href="/sources/">Data sources</a>. News facts are from the linked reports. Topics were chosen using Google Trends Canada interest on the morning of Oct. 29, 2026.</p>
 `,
 },
 {
 title: "Canada's Top Work-from-Home Cities (2021 Census)",
 slug: "canadas-top-work-from-home-cities",
 date: "October 28, 2026",
 category: "Labour",
 readTime: "6 min read",
 author: "Andrew",
 heroImage: "/images/blog/canadas-top-work-from-home-cities.png",
 chartType: 'bar',
 chartTitle: "Worked at home, places of 50,000 or more (percent)",
 chartData: [
 { name: "Oakville", value: 44.9 },
 { name: "Ottawa", value: 43.7 },
 { name: "Waterloo", value: 40.3 },
 { name: "Richmond Hill", value: 39.8 },
 { name: "Toronto", value: 39.0 },
 { name: "Aurora", value: 38.8 },
 { name: "Markham", value: 38.6 },
 { name: "Milton", value: 37.0 },
 ],
 excerpt: "Oakville led Canadian places of 50,000 or more: 44.9% worked at home in the 2021 Census. The national share was 24.3%. See the top 15 and the lowest.",
 content: `
 <p>In the 2021 Census, <strong>44.9%</strong> of Oakville's employed labour force worked at home — the highest share among Canada's <strong>101</strong> census subdivisions with <strong>50,000</strong> or more residents. <a href="/location/ottawa/#commute">Ottawa</a> was next, at 43.7%. Across Canada, the same share was <strong>24.3%</strong>.</p>

 <p>The percentage is the published count of people who worked at home, divided by the published place-of-work total. On this site that total is the employed labour force aged 15 and over. It is the same calculation as the <a href="/location/oakville-town-t/#commute">commute section</a> on each location page: worked at home, usual place of work, no fixed workplace address, and worked outside Canada.</p>

 <p>The census question refers to the reference week in <strong>May 2021</strong>, when COVID-19 restrictions were still widespread. These shares are higher than they would be in a more ordinary week after offices reopened. "Worked at home" also includes people whose job is based at home, not only employees who left an office temporarily. The file does not split those groups apart.</p>

 <h2>Places of 50,000 or more</h2>
 <p>The ranking below keeps the list to census subdivisions — cities, towns, and other municipalities — with a 2021 population of at least 50,000. That threshold leaves 101 places. Smaller municipalities can post very high shares, and a separate list further down covers places of 10,000 to 49,999. Every figure is calculated from the census counts in this site's location file. Statistics Canada randomly rounds those counts, so a set of categories can miss its published total by a few people. This page does not adjust for that.</p>

 <p>Thirteen of the top 15 are in Ontario. Toronto does not lead the share, but it has the largest worked-at-home count in the group: <strong>510,240</strong> people.</p>

 <div class="table-wrap">
 <table>
 <thead>
 <tr>
 <th class="num">Rank</th>
 <th>Place</th>
 <th>Province</th>
 <th class="num">Population</th>
 <th class="num">Worked at home</th>
 <th class="num">Employed labour force</th>
 <th class="num">Share</th>
 </tr>
 </thead>
 <tbody>
 <tr><td class="num">1</td><td><a href="/location/oakville-town-t/#commute">Oakville</a></td><td>Ontario</td><td class="num">213,759</td><td class="num">44,885</td><td class="num">99,945</td><td class="num">44.9%</td></tr>
 <tr><td class="num">2</td><td><a href="/location/ottawa/#commute">Ottawa</a></td><td>Ontario</td><td class="num">1,017,449</td><td class="num">215,705</td><td class="num">493,140</td><td class="num">43.7%</td></tr>
 <tr><td class="num">3</td><td><a href="/location/waterloo/#commute">Waterloo</a></td><td>Ontario</td><td class="num">121,436</td><td class="num">23,380</td><td class="num">58,050</td><td class="num">40.3%</td></tr>
 <tr><td class="num">4</td><td><a href="/location/richmond-hill-town-t/#commute">Richmond Hill</a></td><td>Ontario</td><td class="num">202,022</td><td class="num">37,055</td><td class="num">93,020</td><td class="num">39.8%</td></tr>
 <tr><td class="num">5</td><td><a href="/location/toronto/#commute">Toronto</a></td><td>Ontario</td><td class="num">2,794,356</td><td class="num">510,240</td><td class="num">1,308,110</td><td class="num">39.0%</td></tr>
 <tr><td class="num">6</td><td><a href="/location/aurora-town-t/#commute">Aurora</a></td><td>Ontario</td><td class="num">62,057</td><td class="num">11,720</td><td class="num">30,170</td><td class="num">38.8%</td></tr>
 <tr><td class="num">7</td><td><a href="/location/markham/#commute">Markham</a></td><td>Ontario</td><td class="num">338,503</td><td class="num">56,810</td><td class="num">147,070</td><td class="num">38.6%</td></tr>
 <tr><td class="num">8</td><td><a href="/location/milton-town-t/#commute">Milton</a></td><td>Ontario</td><td class="num">132,979</td><td class="num">23,160</td><td class="num">62,640</td><td class="num">37.0%</td></tr>
 <tr><td class="num">9</td><td><a href="/location/burlington/#commute">Burlington</a></td><td>Ontario</td><td class="num">186,948</td><td class="num">33,075</td><td class="num">89,495</td><td class="num">37.0%</td></tr>
 <tr><td class="num">10</td><td><a href="/location/pickering/#commute">Pickering</a></td><td>Ontario</td><td class="num">99,186</td><td class="num">16,745</td><td class="num">46,790</td><td class="num">35.8%</td></tr>
 <tr><td class="num">11</td><td><a href="/location/north-vancouver-district-municipality-dm/#commute">North Vancouver District</a></td><td>British Columbia</td><td class="num">88,168</td><td class="num">15,400</td><td class="num">44,490</td><td class="num">34.6%</td></tr>
 <tr><td class="num">12</td><td><a href="/location/whitby-town-t/#commute">Whitby</a></td><td>Ontario</td><td class="num">138,501</td><td class="num">22,440</td><td class="num">64,840</td><td class="num">34.6%</td></tr>
 <tr><td class="num">13</td><td><a href="/location/vaughan/#commute">Vaughan</a></td><td>Ontario</td><td class="num">323,103</td><td class="num">53,225</td><td class="num">154,615</td><td class="num">34.4%</td></tr>
 <tr><td class="num">14</td><td><a href="/location/vancouver/#commute">Vancouver</a></td><td>British Columbia</td><td class="num">662,248</td><td class="num">123,110</td><td class="num">359,280</td><td class="num">34.3%</td></tr>
 <tr><td class="num">15</td><td><a href="/location/mississauga/#commute">Mississauga</a></td><td>Ontario</td><td class="num">717,961</td><td class="num">111,685</td><td class="num">331,995</td><td class="num">33.6%</td></tr>
 </tbody>
 </table>
 </div>

 <p>Waterloo in this table is the city of 121,436, not a regional total. Shares are shown to one decimal place, matching the location pages. Two pairs round to the same tenth. Milton (23,160 of 62,640) ranks just ahead of Burlington (33,075 of 89,495), and North Vancouver District (15,400 of 44,490) just ahead of Whitby (22,440 of 64,840), on the unrounded share. North Vancouver District is the district municipality, not the <a href="/location/north-vancouver/#commute">City of North Vancouver</a>, which had 58,120 residents and a worked-at-home share of 30.6% (9,930 of 32,490).</p>

 <h2>Where the largest cities land</h2>
 <p>Outside this top 15, the next-largest cities sit much closer to the national figure, or below it. <a href="/location/montr-al/#commute">Montréal</a> ranked 21st at <strong>30.3%</strong> (260,415 of 859,920). <a href="/location/calgary/#commute">Calgary</a> ranked 25th at <strong>28.5%</strong> (182,015 of 638,645). <a href="/location/edmonton/#commute">Edmonton</a> ranked 50th at <strong>21.1%</strong> (102,215 of 483,855). <a href="/location/winnipeg/#commute">Winnipeg</a> ranked 63rd at <strong>18.8%</strong> (68,960 of 366,595).</p>

 <h2>The low end of the same list</h2>
 <p>The same 50,000-person cutoff produces a very different bottom. Brandon, Man., is last among the 101 places, at <strong>8.5%</strong>. The five lowest:</p>

 <div class="table-wrap">
 <table>
 <thead>
 <tr>
 <th class="num">Rank</th>
 <th>Place</th>
 <th>Province</th>
 <th class="num">Population</th>
 <th class="num">Worked at home</th>
 <th class="num">Employed labour force</th>
 <th class="num">Share</th>
 </tr>
 </thead>
 <tbody>
 <tr><td class="num">97</td><td><a href="/location/wood-buffalo-specialized-municipality-sm/#commute">Wood Buffalo</a></td><td>Alberta</td><td class="num">72,326</td><td class="num">4,595</td><td class="num">38,920</td><td class="num">11.8%</td></tr>
 <tr><td class="num">98</td><td><a href="/location/drummondville/#commute">Drummondville</a></td><td>Quebec</td><td class="num">79,258</td><td class="num">4,285</td><td class="num">37,540</td><td class="num">11.4%</td></tr>
 <tr><td class="num">99</td><td><a href="/location/medicine-hat/#commute">Medicine Hat</a></td><td>Alberta</td><td class="num">63,271</td><td class="num">2,785</td><td class="num">27,925</td><td class="num">10.0%</td></tr>
 <tr><td class="num">100</td><td><a href="/location/grande-prairie/#commute">Grande Prairie</a></td><td>Alberta</td><td class="num">64,141</td><td class="num">3,095</td><td class="num">32,300</td><td class="num">9.6%</td></tr>
 <tr><td class="num">101</td><td><a href="/location/brandon/#commute">Brandon</a></td><td>Manitoba</td><td class="num">51,313</td><td class="num">2,165</td><td class="num">25,340</td><td class="num">8.5%</td></tr>
 </tbody>
 </table>
 </div>

 <h2>What the share is measuring</h2>
 <p>The census does not record a reason. Industry and education counts for the same places show why a high share, and a low one, can come from different kinds of work.</p>
 <p><a href="/location/oakville-town-t/#commute">Oakville</a> is a professional and highly educated suburb. <strong>47.9%</strong> of residents aged 15 and over held a bachelor's degree or higher (83,230 of 173,625), compared with <strong>26.7%</strong> in Canada (8,086,245 of 30,335,915). Professional, scientific and technical services were <strong>15.0%</strong> of Oakville's labour force (17,005 of 113,190), compared with <strong>8.1%</strong> nationally (1,571,160 of 19,310,340).</p>
 <p><a href="/location/ottawa/#commute">Ottawa</a> combines that pattern with government employment. Public administration was <strong>21.1%</strong> of the city's labour force (116,235 of 549,985), compared with <strong>6.2%</strong> in Canada (1,188,915 of 19,310,340).</p>
 <p>At the other end, <a href="/location/wood-buffalo-specialized-municipality-sm/#commute">Wood Buffalo</a>'s labour force was concentrated in mining, quarrying, and oil and gas extraction: <strong>29.6%</strong> (12,625 of 42,655), compared with <strong>1.2%</strong> nationally (239,030 of 19,310,340). Those jobs are much more likely to have a worksite, or no fixed workplace, than a home office. Industry shares use the published labour-force total, a wider base than the place-of-work total behind the worked-at-home percentage. Education shares use the population aged 15 and over. Location pages use those same denominators.</p>

 <h2>The national figure, and the group of 101</h2>
 <p>For <a href="/location/canada/">Canada</a>, 4,214,860 people worked at home out of an employed labour force of 17,321,700, which is <strong>24.3%</strong>. The country's 2021 population was 36,991,981.</p>
 <p>Among the 101 places of 50,000 or more, the median share was <strong>21.0%</strong>. On the one-decimal shares used in the tables, 37 places round above Canada's 24.3%, <a href="/location/longueuil/#commute">Longueuil</a> rounds to the same 24.3% (30,435 of 125,030), and 63 round lower. Added together, those 101 places had 3,154,420 people working at home out of 11,465,845 in the employed labour force, a combined share of <strong>27.5%</strong>. The median counts each municipality once. The combined share counts every employed person, so large places with high shares — Toronto, Montréal, Vancouver, and Ottawa — pull it above both the median and the Canada figure.</p>
 <p><a href="/location/ontario/#commute">Ontario</a> was the highest province or territory in the file, at <strong>29.7%</strong> (1,929,760 of 6,492,895). That lines up with an Ontario-heavy top of the municipal list.</p>

 <h2>Places of 10,000 to 49,999</h2>
 <p>Dropping the floor to 10,000 residents, and stopping below 50,000, leaves <strong>314</strong> census subdivisions. The top of that list is not a second copy of the big-city ranking. Several are small, affluent suburbs. One is a farming township. Westmount, at 19,658 residents, would have ranked above Oakville if the population floor were lower.</p>

 <div class="table-wrap">
 <table>
 <thead>
 <tr>
 <th class="num">Rank</th>
 <th>Place</th>
 <th>Province</th>
 <th class="num">Population</th>
 <th class="num">Worked at home</th>
 <th class="num">Employed labour force</th>
 <th class="num">Share</th>
 </tr>
 </thead>
 <tbody>
 <tr><td class="num">1</td><td><a href="/location/westmount/#commute">Westmount</a></td><td>Quebec</td><td class="num">19,658</td><td class="num">3,965</td><td class="num">8,680</td><td class="num">45.7%</td></tr>
 <tr><td class="num">2</td><td><a href="/location/beaconsfield/#commute">Beaconsfield</a></td><td>Quebec</td><td class="num">19,277</td><td class="num">3,930</td><td class="num">9,205</td><td class="num">42.7%</td></tr>
 <tr><td class="num">3</td><td><a href="/location/saint-lambert/#commute">Saint-Lambert</a></td><td>Quebec</td><td class="num">22,761</td><td class="num">4,500</td><td class="num">10,580</td><td class="num">42.5%</td></tr>
 <tr><td class="num">4</td><td><a href="/location/west-vancouver-district-municipality-dm/#commute">West Vancouver District</a></td><td>British Columbia</td><td class="num">44,122</td><td class="num">7,140</td><td class="num">17,640</td><td class="num">40.5%</td></tr>
 <tr><td class="num">5</td><td><a href="/location/mont-royal/#commute">Mont-Royal</a></td><td>Quebec</td><td class="num">20,953</td><td class="num">3,690</td><td class="num">9,410</td><td class="num">39.2%</td></tr>
 <tr><td class="num">6</td><td><a href="/location/wellesley-township-tp/#commute">Wellesley</a></td><td>Ontario</td><td class="num">11,318</td><td class="num">2,240</td><td class="num">5,840</td><td class="num">38.4%</td></tr>
 <tr><td class="num">7</td><td><a href="/location/whitchurch-stouffville-town-t/#commute">Whitchurch-Stouffville</a></td><td>Ontario</td><td class="num">49,864</td><td class="num">8,980</td><td class="num">23,530</td><td class="num">38.2%</td></tr>
 <tr><td class="num">8</td><td><a href="/location/oak-bay-district-municipality-dm/#commute">Oak Bay District</a></td><td>British Columbia</td><td class="num">17,990</td><td class="num">2,855</td><td class="num">7,595</td><td class="num">37.6%</td></tr>
 </tbody>
 </table>
 </div>

 <p><a href="/location/westmount/#commute">Westmount</a> looks like the Oakville pattern, in a smaller place: 63.3% of residents aged 15 and over held a bachelor's degree or higher (10,415 of 16,450), and professional, scientific and technical services were 19.5% of the labour force (1,835 of 9,405). <a href="/location/wellesley-township-tp/#commute">Wellesley</a>, a township of 11,318 in Ontario, is a different case. Agriculture, forestry, fishing and hunting was <strong>16.7%</strong> of its labour force (1,015 of 6,080), compared with <strong>2.3%</strong> in Canada (434,800 of 19,310,340). A high worked-at-home share there is consistent with jobs based on the farm, not only with remote office work.</p>

 <h2>Compare a place yourself</h2>
 <p>Open any linked place for the full commute breakdown, or set two places side by side in the <a href="/compare/">comparison tool</a>. The commute, education, occupation, and industry sections use the same anchors on location pages and in that tool.</p>

 <h2>Sources</h2>
 <p>Worked-at-home counts, employed-labour-force totals, population, industry, and education counts are from the <a href="https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/prof/index.cfm?Lang=E" target="_blank" rel="noopener">Statistics Canada 2021 Census of Population (Census Profile)</a>, as stored for each place in the Canadian Data Insights location file. Shares on this page are calculated here from those published counts. See <a href="/sources/">how this site handles census data</a>. Statistics Canada data is used under the <a href="https://open.canada.ca/en/open-government-licence-canada" target="_blank" rel="noopener">Open Government Licence – Canada</a>. This post is by Andrew.</p>
 `,
 },
 {
 title: "Canadian News Deep-Dives — October 28, 2026: $40M Lotto Max Ticket Expires, RBC Blocks AI Agents, Canada's First Eurovision Vote",
 slug: "canadian-news-roundup-2026-10-28",
 date: "October 28, 2026",
 category: "News",
 readTime: "8 min read",
 heroImage: "/images/blog/canadian-news-roundup-2026-10-28.png",
 chartType: 'bar',
 chartTitle: "Where the $40M ticket was sold — Grey County municipalities by population (2021 Census)",
 chartData: [
 { name: "Owen Sound", value: 21612 },
 { name: "West Grey", value: 13131 },
 { name: "Meaford", value: 11485 },
 { name: "Georgian Bluffs", value: 11100 },
 { name: "Grey Highlands", value: 10424 },
 { name: "The Blue Mountains", value: 9390 },
 { name: "Southgate", value: 8716 },
 { name: "Hanover", value: 7967 },
 { name: "Chatsworth", value: 7080 },
 ],
 excerpt: "Three deep-dives: a $40-million Lotto Max ticket sold in Grey County expires at the end of today, RBC becomes the first Canadian bank to block personal AI agents from online banking, and Canadians start voting on the country's first-ever Eurovision act.",
 content: `
 <p><strong>TL;DR:</strong> Today's three most-searched Canadian news stories on Google Trends Canada, explained in depth with 2021 Census context. A $40-million Lotto Max jackpot sold in Grey County, Ont., expires at the end of today unless someone claims it. Royal Bank of Canada is cutting off third-party personal AI agents from online banking. And CBC/Radio-Canada has named five finalists to become Canada's first Eurovision entrant, with a public vote open until Nov. 5.</p>

 <h2 id="grey-county-lotto-max">1. The unclaimed $40-million Lotto Max ticket from Grey County expires today</h2>
 <p>A <strong>$40-million</strong> Lotto Max jackpot from the Tuesday, Oct. 28, 2025 draw still has not been claimed, and it expires at the end of the day on <strong>Wednesday, Oct. 28, 2026</strong>, one year after the draw, the Ontario Lottery and Gaming Corporation (OLG) says. The ticket was bought at an authorized lottery retailer somewhere in Grey County, Ont.</p>
 <div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#eef0f5;"><iframe src="https://www.youtube-nocookie.com/embed/UAKX70tRY7U" title="Unclaimed $40M Lotto Max Ticket Expires Today: Who Bought It in Grey County? | Canada News" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
 <p><strong>The winning numbers:</strong> 06, 14, 17, 19, 26, 43, 45, with bonus number 27.</p>
 <p><strong>Who might have it:</strong> OLG says it has "very detailed information" about the ticket but does not know who bought it, because it was sold at a store. "Because Grey County is a popular destination for tourists, cottagers and day-trippers, there is possibility that the winning ticket may not belong to a local resident," OLG said (Global News). OLG lists Grey County communities including Owen Sound, Meaford, The Blue Mountains, Flesherton, Markdale, Durham and Hanover.</p>
 <p><strong>About 50 claims:</strong> OLG issued a final urgent appeal on Tuesday, after earlier reminders on Oct. 5 and Oct. 22. An OLG spokesperson said it is doing due diligence on approximately 50 claims, plus any more that arrive before the deadline, so it may take time before OLG can say whether the prize is officially unclaimed (Owen Sound Sun Times). When a $70-million prize went unclaimed a few years ago, reviewing more than 1,100 claims took about two months, OLG told INSAUGA. After today, people can no longer validate the ticket or file a claim, even if they believe they lost it.</p>
 <p><strong>Where the money goes:</strong> if the ticket expires, the $40 million is returned to players through future bonus games or promotions. It would become Canada's second-largest unclaimed Lotto Max prize, behind a <strong>$70-million</strong> ticket from the June 28, 2022 draw that was sold in Scarborough (CKNX).</p>
 <p><strong>How to check:</strong> scan old tickets with the OLG app, an in-store self-checker or a retailer's terminal; start a claim on OLG.ca's Unclaimed Tickets page; or call OLG at 1-800-387-0098.</p>
 <p><strong>By the numbers (2021 Census):</strong> Grey County's nine municipalities had a combined <strong>100,905</strong> residents. The largest is <a href="/location/owen-sound/">Owen Sound</a> (21,612, median age 48.0), followed by <a href="/location/west-grey-municipality-mu/">West Grey</a> (13,131), <a href="/location/meaford-municipality-mu/">Meaford</a> (11,485), <a href="/location/georgian-bluffs-township-tp/">Georgian Bluffs</a> (11,100), <a href="/location/grey-highlands-municipality-mu/">Grey Highlands</a> (10,424), <a href="/location/the-blue-mountains-town-t/">The Blue Mountains</a> (9,390), <a href="/location/southgate-township-tp/">Southgate</a> (8,716), <a href="/location/hanover-town-t/">Hanover</a> (7,967) and <a href="/location/chatsworth-township-tp/">Chatsworth</a> (7,080).</p>
 <p><strong>Cottage country in the data:</strong> across those nine municipalities, <strong>7,874</strong> of 50,183 private dwellings (about <strong>15.7%</strong>) were not occupied by usual residents on Census day, a group that includes cottages and other seasonal homes. In <a href="/location/the-blue-mountains-town-t/">The Blue Mountains</a> it was about <strong>41%</strong> (3,048 of 7,396). The town's population grew 33.7% from 2016 to 2021, and its median age was 58.8. That fits OLG's point that the buyer may have been a visitor.</p>
 <p><strong>Why it matters to you:</strong> if you bought a Lotto Max ticket in Grey County around Oct. 28, 2025, or visited the area then, check pockets, glove boxes, bags and drawers today.</p>
 <p>Sources: <a href="https://www.newswire.ca/news-releases/time-is-running-out-to-check-your-lotto-max-tickets-40-million-prize-yet-to-be-claimed-872581053.html" target="_blank" rel="noopener">OLG (Oct. 22 release)</a> · <a href="https://globalnews.ca/news/12123023/lotto-max-october-28-winning-ticket/" target="_blank" rel="noopener">Global News</a> · <a href="https://www.ctvnews.ca/kitchener/article/unclaimed-40-million-lotto-max-ticket-in-grey-county-set-to-expire-wednesday/" target="_blank" rel="noopener">CTV News Kitchener</a> · <a href="https://www.owensoundsuntimes.com/news/40-million-lotto-max-ticket-sold-in-grey-county-still-unclaimed/" target="_blank" rel="noopener">Owen Sound Sun Times</a> · <a href="https://cknxnewstoday.ca/midwestern/news/2026/10/27/40m-grey-county-lotto-ticket-could-become-canadas-second-largest-unclaimed-prize" target="_blank" rel="noopener">CKNX</a> · <a href="https://www.insauga.com/someone-may-lose-out-on-40-million-this-week-in-canada/" target="_blank" rel="noopener">INSAUGA</a></p>

 <h2 id="rbc-ai-agents">2. RBC blocks personal AI agents from online banking</h2>
 <p>Royal Bank of Canada is blocking third-party personal artificial intelligence agents from directly accessing its digital properties, including online banking. RBC is the first Canadian bank to block external AI agents on its sites, The Globe and Mail reports. In the U.S., JPMorgan Chase and Charles Schwab recently said they are blocking or limiting outside AI agents' access to customer data.</p>
 <div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#eef0f5;"><iframe src="https://www.youtube-nocookie.com/embed/0LQOJzAGblo" title="RBC Blocks Personal AI Agents From Online Banking: What It Means for You | Canada News" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
 <p><strong>What's an AI agent here?</strong> Customers can authorize agents such as Meta Platforms' Muse to access bank accounts, transaction history and credit card data to analyze spending and make recommendations (Globe and Mail).</p>
 <p><strong>RBC's reasoning:</strong> an internal memo on Tuesday evening, signed by head of technology and operations Naim Kazmi and head of personal banking Erica Nielsen, said the decision followed a security review. "While we recognize the potential of agentic AI to assist customers, we know that third-party personal AI agents accessing banking systems can create unacceptable customer risk, including acting beyond customer expectations or creating liability exposure," the memo said. RBC said it will start blocking the platforms immediately; the memo did not list which tools are covered.</p>
 <p><strong>What clients are told:</strong> RBC says existing AI-agent connections to RBC accounts will stop working. Clients can keep using RBC's website and mobile app, its own digital tools and customer service. "We understand that this may be disappointing for the small portion of our clients who use these tools," spokesperson Jeff Lanthier said. CEO Dave McKay wrote on LinkedIn that as agents become more autonomous, the stakes are high if something goes wrong, from fraud and consumer harm to risks to the wider financial system (Financial Post).</p>
 <p><strong>The regulator's view:</strong> Peter Routledge, head of the Office of the Superintendent of Financial Institutions (OSFI), said Tuesday at Tech Festival Canada that OSFI will leave the decision to individual banks as long as they follow its guidelines: "Where I stand right now on third-party risk and AI is we're more principles-based." He said customers could switch providers depending on whether they want to use AI agents, and that a board deciding agents are too risky, "provided it's done in a responsible way," is "indicative of sound risk management." BMO CEO Darryl White said last week customers should not share sensitive banking data with AI agents (Globe and Mail).</p>
 <p><strong>Why it matters to you:</strong> if an AI assistant reads or manages your RBC accounts, expect it to lose access. Never give any AI tool your banking password or PIN; use your bank's own app instead.</p>
 <p>Sources: <a href="https://www.theglobeandmail.com/business/article-banks-ai-agents-client-data-osfi/" target="_blank" rel="noopener">The Globe and Mail</a> · <a href="https://financialpost.com/fp-finance/banking/rbc-block-personal-ai-agents-from-online-banking" target="_blank" rel="noopener">Financial Post</a> · <a href="https://www.rbcroyalbank.com/en-ca/my-money-matters/money-academy/cyber-security/understanding-cyber-security/understanding-third-party-ai-agents-and-your-rbc-banking/" target="_blank" rel="noopener">RBC</a></p>

 <h2 id="canada-eurovision">3. Canada picks its first-ever Eurovision act: five finalists, public vote until Nov. 5</h2>
 <p>CBC/Radio-Canada on Tuesday named the five finalists competing to become Canada's first Eurovision Song Contest entrant: <strong>William Cloutier</strong>, <strong>Josiane</strong>, <strong>Rêve</strong>, <strong>Talk</strong> and <strong>Tyler Shaw</strong>. The 2027 contest will be held in Bulgaria next May. Canada is the first new country to join Eurovision since Australia in 2015, and more than 130 million viewers across 35 countries watched the most recent edition (CBC News).</p>
 <div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#eef0f5;"><iframe src="https://www.youtube-nocookie.com/embed/Ne5X0MW2MJY" title="Canada's First Eurovision: Meet the 5 Finalists and How to Vote | Canada News" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
 <p><strong>How they were chosen:</strong> 325 artists applied between Aug. 31 and Sept. 9. CBC/Radio-Canada's music teams cut the field to 15, and a jury of music industry professionals and the executive vice-presidents of CBC and Radio-Canada picked the final five in Toronto on Oct. 8.</p>
 <p><strong>How to vote:</strong> watch the performances and vote at CBC.ca/eurovision, up to 10 times, until <strong>Thursday, Nov. 5, at 11:59 p.m. PT</strong>. The winner will be announced by December, and PricewaterhouseCoopers is overseeing the voting and tabulation. Prime Minister Mark Carney posted on X: "Canada is going to Eurovision 2027. It's up to you to decide who takes the stage."</p>
 <ul>
 <li><strong>William Cloutier</strong> (Victoriaville, Que.): won Star Académie in 2021 and has played Johnny Rockfort in <em>Starmania</em> more than 360 times across Europe and Quebec.</li>
 <li><strong>Josiane</strong> (Dieppe, N.B.): Acadian singer-songwriter who moves between French and English; won La Voix in 2020. Her song <em>Lose It All</em> has more than six million streams.</li>
 <li><strong>Rêve</strong> (born in Montreal, based in Toronto): Juno-winning dance-pop artist behind <em>Ctrl + Alt + Del</em>, <em>Big Boom</em> and <em>Whitney</em>.</li>
 <li><strong>Talk</strong> (Ottawa): known for <em>Run Away to Mars</em>; won the 2024 Juno for breakthrough artist.</li>
 <li><strong>Tyler Shaw</strong> (born in Richmond, B.C., raised in Coquitlam): broke through with <em>Kiss Goodnight</em> in 2012 and toured Europe for the first time in 2026.</li>
 </ul>
 <p><strong>By the numbers (2021 Census):</strong> the finalists' hometowns span the country. <a href="/location/victoriaville/">Victoriaville</a> had 47,760 residents, and about <strong>95.6%</strong> had French as their mother tongue. <a href="/location/dieppe/">Dieppe</a> grew <strong>10.8%</strong> from 2016 to 28,114 residents; about 63.9% had French as their mother tongue and about 70.5% could speak both English and French. <a href="/location/ottawa/">Ottawa</a> passed a million people (1,017,449, +8.9%), while <a href="/location/richmond/">Richmond</a> (209,937) and <a href="/location/coquitlam/">Coquitlam</a> (148,625) are in Metro Vancouver.</p>
 <p><strong>Why it matters to you:</strong> for the first time, Canadians choose who represents the country on one of the world's biggest music stages, and the vote is open now.</p>
 <p>Sources: <a href="https://www.cbc.ca/news/entertainment/eurovision-canada-finalists-9.7397690" target="_blank" rel="noopener">CBC News</a> · <a href="https://mediacentre.cbc.ca/announcement/5762/eurovision-song-contest-2027-it-s-up-to-the-public-to-choose-canada-s-representative/" target="_blank" rel="noopener">CBC/Radio-Canada Media Centre</a> · <a href="https://www.cbc.ca/music/talk-reve-tyler-shaw-josiane-william-cloutier-eurovision-finalists-music-9.7398359" target="_blank" rel="noopener">CBC Music</a> · <a href="https://www.ctvnews.ca/entertainment/article/canadas-eurovision-finalists-to-be-announced-today-by-cbc/" target="_blank" rel="noopener">CTV News (The Canadian Press)</a></p>

 <h2>Data sources</h2>
 <p>Population, age, language and dwelling figures are from the 2021 Census of Population as presented on Canadian Data Insights location pages; Grey County totals are the sum of its nine municipalities. "Not occupied by usual residents" includes seasonal and vacant dwellings. See <a href="/sources/">Data sources</a>. News facts are from the linked reports. Topics were chosen using Google Trends Canada. This post is by Andrew and is for education only; verify primary sources before making decisions.</p>
 `,
 },
 {
 title: "Canadian News Deep-Dives — October 27, 2026: Chow Wins Again, Tedjo Takes Mississauga, the West Stops Falling Back",
 slug: "canadian-news-roundup-2026-10-27",
 date: "October 27, 2026",
 category: "News",
 readTime: "8 min read",
 heroImage: "/images/blog/canadian-news-roundup-2026-10-27.png",
 chartType: 'bar',
 chartTitle: "No clock change this fall — population of provinces/territories on permanent time (2021 Census, thousands)",
 chartData: [
 { name: "B.C.", value: 5001 },
 { name: "Alberta", value: 4263 },
 { name: "Manitoba", value: 1342 },
 { name: "Saskatchewan", value: 1133 },
 { name: "N.W.T.", value: 41 },
 { name: "Yukon", value: 40 },
 ],
 excerpt: "Three deep-dives: Olivia Chow wins a second term in Toronto with about 54% of the vote, Alvin Tedjo comes from fourth in the polls to beat Mississauga's current and former mayors, and Western Canada won't turn its clocks back on Nov. 1.",
 content: `
 <p><strong>TL;DR:</strong> Today's three most-searched Canadian news stories on Google Trends Canada, explained in depth with 2021 Census context. Toronto re-elected Olivia Chow. Mississauga elected Alvin Tedjo over incumbent Carolyn Parrish and former mayor Bonnie Crombie. And on Sunday, Nov. 1, B.C., Alberta and Manitoba won't "fall back," splitting Canada into clock-changers and non-changers.</p>

 <h2 id="toronto-chow">1. Olivia Chow wins a second term as Toronto mayor</h2>
 <p>Incumbent Olivia Chow won re-election as Toronto mayor on Monday, Oct. 26, defeating former councillor Brad Bradford, CBC News projected. Unofficial results with all <strong>1,431</strong> polls reporting gave Chow <strong>532,201</strong> votes (<strong>54.16%</strong>) and Bradford <strong>404,013</strong> (<strong>41.11%</strong>). The Globe and Mail reported the same split of about 54% to 41% with almost all votes counted.</p>
 <div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#eef0f5;"><iframe src="https://www.youtube-nocookie.com/embed/zkRmFn5HYXI" title="Olivia Chow Wins Toronto Again: 54% to 41% and a Record Vote" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
 <p><strong>Turnout:</strong> <strong>982,660</strong> ballots were counted, a turnout of <strong>45.84%</strong> of <strong>2,143,771</strong> eligible voters (City of Toronto unofficial results). Advance voting jumped nearly <strong>72%</strong> from the 2023 mayoral byelection: more than 222,000 early ballots from Oct. 6 to 11, up from over 129,000 in 2023 (City of Toronto, via CBC).</p>
 <p><strong>Where she won:</strong> CP24's ward-by-ward breakdown of unofficial results shows Chow won all five Scarborough wards with between 51% and 56.7% of the vote, and took 72.4% in Toronto Centre and 69% in Parkdale-High Park. Bradford won Etobicoke Centre (59%), York Centre (64.2%) and Eglinton-Lawrence (62.8%). Chow's narrowest lead was 0.7 points in Don Valley North, and she more than doubled Bradford's vote count in his own ward, Beaches-East York. Pollster Nick Nanos called it a "crushing victory" for her campaign team: "They delivered on the ground."</p>
 <p><strong>The close ones:</strong> CP24 also reported Chow ahead by just 0.9 points in Etobicoke North (45.4%), behind in Etobicoke-Lakeshore (47.1% to Bradford's 49.4%), and ahead in York South-Weston (48.8% to 43.9%), Humber River-Black Creek (49.7% to 40.7%) and Toronto-St. Paul's (by 5.1 points). Downtown she took 67% in Spadina-Fort York and 63.4% in University-Rosedale.</p>
 <p><strong>The polls said it was close:</strong> a Liaison Strategies poll the week before election day had Bradford at 49% and Chow at 47% among decided and leaning voters (margin of error ±3.1 points, 19 times out of 20), a statistical dead heat (<a href="https://www.cbc.ca/news/canada/ontario-municipal-elections-explainer-9.7392950" target="_blank" rel="noopener">CBC News</a>). The final margin was about 13 points.</p>
 <p><strong>Record vote totals:</strong> both candidates received more votes than the winner of either of the last two mayoral races. John Tory won in 2022 with 342,158 votes, and Chow won the 2023 byelection with 269,372. In the 2022 municipal election, 563,124 ballots were cast in total (CP24).</p>
 <p><strong>A rematch:</strong> Chow and Bradford also faced each other in the 2023 byelection after John Tory resigned. When Chow first won in 2023, she became the first racialized person and the third woman to serve as Toronto mayor (CBC).</p>
 <p><strong>The new council:</strong> CBC projected progressive council wins including Diana Chan McNally (Parkdale-High Park), Chiara Padovani (York South-Weston, defeating long-time incumbent Frances Nunziata), Mike Layton (University-Rosedale), Nate Erskine-Smith (Beaches-East York) and Curran Stikuts (Toronto Centre).</p>
 <p>In her victory speech, Chow said she had spoken with Prime Minister Mark Carney and Ontario Premier Doug Ford, pledged to keep investing in police, paramedics and community programs, and said she would keep Toronto's water "in public hands" (Globe and Mail).</p>
 <p><strong>By the numbers (2021 Census):</strong> <a href="/location/toronto/">Toronto</a> had <strong>2,794,356</strong> residents (+2.3% since 2016), a density of 4,427.8 people per km², a median age of 39.6, a 2020 median household income of <strong>$84,000</strong>, a low-income rate of 13.2%, and 1,253,238 private dwellings (1,160,892 occupied).</p>
 <p><strong>How Toronto lives (2021 Census):</strong> about <strong>46.7%</strong> of occupied dwellings (542,625 of 1,160,890) were apartments in buildings of five or more storeys, compared with about 23.3% single-detached houses (270,490) and 14.0% apartments in smaller buildings (162,245). Residents aged 65 and older made up 17.1% of the population and children 14 and under 13.8%. About 41.9% of residents (1,162,715 of 2,772,630) reported a mother tongue other than English or French. See <a href="/location/toronto/">Toronto on Canadian Data Insights</a>.</p>
 <p><strong>Why it matters to you:</strong> Toronto's mayor and council set property taxes, housing approvals, TTC transit, policing and water policy for Canada's largest city.</p>
 <p>Sources: <a href="https://www.cbc.ca/news/canada/toronto/olivia-chow-wins-mayoral-race-cbc-projects-9.7397015" target="_blank" rel="noopener">CBC News</a> · <a href="https://www.cbc.ca/news/canada/toronto/olivia-chow-progressive-council-toronto-mayor-second-term-9.7396703" target="_blank" rel="noopener">CBC News (council)</a> · <a href="https://www.theglobeandmail.com/canada/article-five-takeaways-from-ontarios-municipal-elections/" target="_blank" rel="noopener">The Globe and Mail</a> · <a href="https://www.cp24.com/local/toronto/2026/10/27/how-olivia-chow-won-a-second-term/" target="_blank" rel="noopener">CP24</a></p>

 <h2 id="mississauga-tedjo">2. Alvin Tedjo beats Parrish and Crombie to become Mississauga's mayor</h2>
 <p>Ward 2 councillor Alvin Tedjo has been elected mayor of Mississauga, defeating incumbent Carolyn Parrish and former mayor Bonnie Crombie. The City of Mississauga's unofficial results give Tedjo <strong>74,479</strong> votes, or <strong>38.9%</strong> of ballots cast. CBC News reported Parrish at <strong>51,853</strong> votes (27.3%) and Crombie at <strong>43,191</strong> (22.7%); CBC put Tedjo's share at 39.2%. Unofficial turnout was <strong>33.9%</strong>, with <strong>191,166</strong> voters casting ballots. Results remain unofficial until the City Clerk certifies them.</p>
 <div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#eef0f5;"><iframe src="https://www.youtube-nocookie.com/embed/Yot-W9NLh6k" title="Alvin Tedjo Is Mississauga&#39;s New Mayor: From 4th in the Polls to 38.9%" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
 <p><strong>From fourth to first:</strong> a Liaison Strategies poll in August had Tedjo a distant fourth at <strong>12%</strong> among decided and leaning voters, with Parrish and Crombie at 35% each. By Oct. 22 he had climbed to <strong>31%</strong>, ahead of Parrish (28%) and just behind Crombie (35%), CBC reported. Tedjo had finished second to Parrish in the 2024 mayoral byelection, 25% to 31%.</p>
 <p><strong>A generational shift:</strong> Tedjo, 43, is just the fourth person to hold the job in nearly half a century. Hazel McCallion became mayor in 1978 and served 36 years, followed by Crombie for nearly a decade, then Parrish. Crombie had left the office to lead the Ontario Liberal Party and returned to municipal politics this year.</p>
 <p>"It is beyond a doubt the honour of a lifetime to stand here as your next mayor of the city of Mississauga. This is a tremendous responsibility that I do not take lightly," Tedjo said. Conceding, Parrish said: "He's going to have a tough job ahead of him and he can pick up the phone and call me anytime, and I'll tell him what not to do."</p>
 <p><strong>By the numbers (2021 Census):</strong> <a href="/location/mississauga/">Mississauga</a> had <strong>717,961</strong> residents, down 0.5% from 721,599 in 2016, making it Canada's 7th-largest census subdivision. Its 2020 median household income was <strong>$102,000</strong> (compared with $84,000 in <a href="/location/toronto/">Toronto</a>), the median age was 40.8, the low-income rate was 9.4%, and about <strong>45.9%</strong> of residents (328,130 of 714,840) reported a mother tongue other than English or French. The city had 254,089 private dwellings (244,575 occupied).</p>
 <p><strong>Why it matters to you:</strong> Mississauga's new mayor will help set property taxes, housing approvals and transit priorities for more than 700,000 people next door to Toronto.</p>
 <p>Sources: <a href="https://www.mississauga.ca/city-of-mississauga-news/news/mississauga-announces-unofficial-results-for-2026-municipal-election/" target="_blank" rel="noopener">City of Mississauga</a> · <a href="https://www.cbc.ca/news/canada/toronto/mississauga-mayor-result-9.7397010" target="_blank" rel="noopener">CBC News</a> · <a href="https://www.ctvnews.ca/toronto/gta-elections-2026/article/alvin-tedjo-beats-out-parrish-and-crombie-to-become-new-mayor-of-mississauga/" target="_blank" rel="noopener">CTV News</a></p>

 <h2 id="permanent-daylight-time">3. Western Canada won't "fall back" on Nov. 1</h2>
 <p>When most of Ontario, Quebec, Atlantic Canada and Nunavut turn their clocks back an hour this Sunday, Nov. 1, much of Western Canada won't. Here's who is doing what:</p>
 <ul>
 <li><strong>British Columbia:</strong> the final clock change was March 8, 2026. On Nov. 1 clocks stay put, completing the move to year-round Pacific time (PCT, UTC-7). The East Kootenay (including Cranbrook, Fernie, Sparwood, Invermere, Kimberley, Radium Hot Springs and Elkford) stays aligned with Alberta at UTC-6; Golden makes one last change on Nov. 1 to UTC-7.</li>
 <li><strong>Alberta:</strong> the Official Time Act passed in June. From Nov. 1, clocks no longer reset to Mountain Standard Time; the province stays on "Alberta Time" (ABT) year-round.</li>
 <li><strong>Manitoba:</strong> announced Sept. 17 that it will stay on daylight saving time permanently. Of nearly 72,000 survey votes, <strong>92%</strong> wanted to end seasonal changes; 58% preferred permanent daylight time and 34% permanent standard time.</li>
 <li><strong>Northwestern Ontario:</strong> Ontario said Oct. 13 it intends to make daylight time permanent in Kenora and communities west of the 90th meridian by Nov. 1 to stay aligned with Manitoba. The rest of Ontario keeps changing clocks.</li>
 <li><strong>Already done:</strong> Yukon has been on permanent time since 2020 and Saskatchewan since 1966. The Northwest Territories is also ending time changes, and Quebec's Nunavik region has moved to permanent daylight time.</li>
 </ul>
 <p><strong>What about the rest of Ontario?</strong> Ontario's Time Amendment Act, 2020 would make daylight time permanent province-wide only once brought into force; CBC reports it depends on Quebec and New York doing the same.</p>
 <p><strong>The trade-offs:</strong> The Weather Network says Vancouver will see a 9:07 a.m. sunrise on New Year's Day and Edmonton a 9:50 a.m. sunrise. CBC reported Alberta's switch caused digital calendar problems for some; the global Time Zone Database was updated for Alberta in an Aug. 7 release, but some calendar and booking systems maintain their own.</p>
 <p><strong>By the numbers (2021 Census):</strong> the six provinces and territories with no clock change this fall — <a href="/location/british-columbia/">British Columbia</a> (5,000,879), <a href="/location/alberta/">Alberta</a> (4,262,635), <a href="/location/manitoba/">Manitoba</a> (1,342,153), <a href="/location/saskatchewan/">Saskatchewan</a> (1,132,505), the <a href="/location/northwest-territories/">Northwest Territories</a> (41,070) and <a href="/location/yukon/">Yukon</a> (40,232) — had a combined <strong>11,819,474</strong> residents, about <strong>32%</strong> of <a href="/location/canada/">Canada's</a> 36,991,981 (our sum; it excludes northwestern Ontario and Nunavik). <a href="/location/ontario/">Ontario</a> (14,223,942) and <a href="/location/quebec/">Quebec</a> (8,501,833) mostly keep changing their clocks.</p>
 <p><strong>Why it matters to you:</strong> from Nov. 1 the winter time gap between East and West changes — Vancouver will run two or three hours behind Toronto depending on the season — so double-check flights, meetings, broadcasts and calendar invites that cross provincial lines.</p>
 <p>Sources: <a href="https://www2.gov.bc.ca/gov/content/governments/celebrating-british-columbia/daylight-saving-time" target="_blank" rel="noopener">Government of B.C.</a> · <a href="https://www.alberta.ca/albertas-new-time-system-abt" target="_blank" rel="noopener">Government of Alberta</a> · <a href="https://news.gov.mb.ca/news/print,index.html?item=75397&amp;posted=2026-09-17" target="_blank" rel="noopener">Government of Manitoba</a> · <a href="https://news.ontario.ca/en/release/1008130/ontario_moving_to_permanent_daylight_saving_time_in_parts_of_northwestern_ontario" target="_blank" rel="noopener">Ontario Newsroom</a> · <a href="https://www.cbc.ca/news/canada/time-zone-canada-map-9.7349663" target="_blank" rel="noopener">CBC News (maps)</a> · <a href="https://www.cbc.ca/news/canada/manitoba/daylight-time-manitoba-9.7347844" target="_blank" rel="noopener">CBC News (Manitoba)</a> · <a href="https://www.cbc.ca/news/canada/calgary/alberta-permanent-daylight-savings-businesses-calendars-9.7331872" target="_blank" rel="noopener">CBC News (Alberta calendars)</a> · <a href="https://www.theweathernetwork.com/en/news/weather/seasonal/what-permanent-daylight-saving-time-means-for-canada" target="_blank" rel="noopener">The Weather Network</a></p>

 <h2>Data sources</h2>
 <p>Population, income, age and dwelling figures are from the 2021 Census of Population (income for 2020) as presented on Canadian Data Insights location pages. See <a href="/sources/">Data sources</a>. Election results are unofficial until certified. News facts are from the linked reports. Topics were chosen using Google Trends Canada. This post is by Andrew and is for education only; verify primary sources.</p>
 `,
 },
 {
 title: "Canadian News Roundup — October 26, 2026: Ontario Votes, B.C. Turns Blue, Alberta Referendum Results",
 slug: "canadian-news-roundup-2026-10-26",
 date: "October 26, 2026",
 category: "News",
 readTime: "6 min read",
 heroImage: "/images/blog/canadian-news-roundup-2026-10-26.png",
 chartType: 'bar',
 chartTitle: "Ontario mayoral races in the news — population (2021 Census, thousands)",
 chartData: [
 { name: "Toronto", value: 2794 },
 { name: "Ottawa", value: 1017 },
 { name: "Mississauga", value: 718 },
 { name: "Hamilton", value: 569 },
 { name: "Oshawa", value: 175 },
 { name: "Cambridge", value: 138 },
 { name: "Thunder Bay", value: 109 },
 ],
 excerpt: "More than 11.8 million Ontarians can vote in today's municipal elections, the B.C. Conservatives won their first majority since 1928, Alberta's immigration questions passed, and the Bank of Canada decides on rates Wednesday.",
 content: `
 <p><strong>TL;DR:</strong> Ontario picks mayors and councils today, with Toronto's race polling as a dead heat. B.C. elected its first Conservative majority since 1928, Alberta voters backed all five immigration questions but rejected constitutional changes, and most economists now expect the Bank of Canada to raise rates on Wednesday. Plus a historic First Nations–first ministers meeting and a Go Public investigation into Air Canada compensation denials.</p>

 <h2>1. Ontario votes in municipal elections today</h2>
 <p>Monday is municipal election day across Ontario, and most polling stations are open from 10 a.m. to 8 p.m. More than <strong>11.8 million</strong> Ontarians are eligible to vote, and about <strong>6,663</strong> candidates are running for <strong>2,800</strong> positions, including mayor, councillor and school board trustee, according to the Association of Municipalities of Ontario.</p>
 <p>In Toronto, incumbent Olivia Chow faces councillor Brad Bradford. A Liaison Strategies poll last week had Bradford at <strong>49%</strong> and Chow at <strong>47%</strong> among decided and leaning voters (margin of error ±3.1 points, 19 times out of 20), a statistical dead heat. In Ottawa, a Quorus Consulting Group survey put incumbent Mark Sutcliffe at <strong>28%</strong> and Jeff Leiper at <strong>24%</strong>. Thunder Bay has 10 mayoral candidates, with Mayor Ken Boshcoff not seeking re-election, and the city faces a <strong>$30.6 million</strong> annual infrastructure deficit.</p>
 <p><strong>By the numbers (2021 Census):</strong> <a href="/location/ontario/">Ontario</a> had <strong>14,223,942</strong> residents (+5.8% since 2016). <a href="/location/toronto/">Toronto</a> counted 2,794,356 (+2.3%), <a href="/location/ottawa/">Ottawa</a> 1,017,449 (+8.9%), <a href="/location/mississauga/">Mississauga</a> 717,961 (−0.5%), <a href="/location/hamilton/">Hamilton</a> 569,353 (+6.0%), <a href="/location/oshawa/">Oshawa</a> 175,383 (+10.0%), <a href="/location/cambridge/">Cambridge</a> 138,479 (+6.6%) and <a href="/location/thunder-bay/">Thunder Bay</a> 108,843 (+0.9%).</p>
 <p><strong>Why it matters to you:</strong> mayors and councils set property taxes, housing approvals, transit and policing budgets in Canada's most populous province.</p>
 <p>Source: <a href="https://www.cbc.ca/news/canada/ontario-municipal-elections-explainer-9.7392950" target="_blank" rel="noopener">CBC News</a></p>

 <h2>2. Bank of Canada rate decision on Wednesday</h2>
 <p>Inflation rose to <strong>3.1%</strong> in September, pushed up by fuel prices, while core measures stayed subdued. The economy is weak: GDP stalled in July (0% growth), and August GDP, expected at +0.1%, comes out Friday. Even so, most major forecasters now expect the Bank of Canada to raise its key overnight rate when it announces its decision and Monetary Policy Report on <strong>Wednesday, Oct. 28</strong>.</p>
 <p><strong>Why it matters to you:</strong> a hike would push up costs on variable-rate mortgages and lines of credit.</p>
 <p>Source: <a href="https://www.cbc.ca/news/business/armstrong-inflation-bank-of-canada-interest-rates-9.7393998" target="_blank" rel="noopener">CBC News</a></p>

 <h2>3. Alberta referendum: immigration questions pass, constitutional changes rejected</h2>
 <p>All five immigration-related questions in Alberta's referendum won majority support, while four constitutional reform questions were rejected. Requiring proof of citizenship to vote in provincial elections had the highest yes share at <strong>58%</strong>, and about <strong>55%</strong> backed Alberta taking greater control of immigration. The three questions on limiting some services for some non-permanent residents received 52.6%, 53% and 52%. Elections Alberta hand-counted <strong>20,574,612</strong> ballots, which it called the most ever counted by hand in a Canadian electoral event; results become official Oct. 29. CBC also reported that First Nations celebrated the decisive defeat of the separation question.</p>
 <p>Premier Danielle Smith said the province will prioritize changes for economic migrants and "proceed with caution" on the rest.</p>
 <p><strong>By the numbers (2021 Census):</strong> <a href="/location/alberta/">Alberta</a> had 4,262,635 residents (+4.8% since 2016), including <a href="/location/calgary/">Calgary</a> at 1,306,784 (+5.5%) and <a href="/location/edmonton/">Edmonton</a> at 1,010,899 (+8.3%).</p>
 <p><strong>Why it matters to you:</strong> temporary residents such as international students and foreign workers could face new residency rules or fees for some provincial services if these measures become law.</p>
 <p>Source: <a href="https://www.cbc.ca/news/canada/calgary/alberta-referendum-questions-immigration-constitution-9.7394465" target="_blank" rel="noopener">CBC News</a></p>

 <h2>4. B.C. Conservatives win first majority since 1928</h2>
 <p>CBC News projects a B.C. Conservative majority government under Premier-designate Lorne Doerkson, the party's first since 1928. David Eby, who called the election two years early, resigned as premier and NDP leader. CBC projected at least 11 Conservative wins in previously NDP-held ridings, all but one in Metro Vancouver and many in Surrey and the Tri-Cities. Green Leader Emily Lowan was projected to win her first seat.</p>
 <p><strong>By the numbers (2021 Census):</strong> <a href="/location/british-columbia/">British Columbia</a> had 5,000,879 residents (+7.6% since 2016); <a href="/location/surrey/">Surrey</a> grew 9.7% to 568,322.</p>
 <p><strong>Why it matters to you:</strong> a new government changes direction on housing, the economy and Indigenous rights legislation in Canada's third most populous province.</p>
 <p>Source: <a href="https://www.cbc.ca/news/canada/british-columbia/livestory/bc-provincial-election-results-live-updates-2026-9.7389208" target="_blank" rel="noopener">CBC News</a></p>

 <h2>5. First Nations and first ministers meet for the first time in two decades</h2>
 <p>First Nations leaders and Canada's first ministers meet in Ottawa today to discuss Indigenous rights, the first such meeting in two decades. The last was in 2005 in Kelowna, B.C., which produced the Kelowna Accord. AFN National Chief Cindy Woodhouse Nepinak says chiefs want "tangible results," though she said a declaration will not come out of this meeting because the AFN needs more time to consult chiefs. AFN discussion papers mention economic prosperity, policing, constitutional rights, health and education.</p>
 <p><strong>Why it matters to you:</strong> commitments could shape resource projects, policing and services in First Nations communities across the country.</p>
 <p>Source: <a href="https://www.cbc.ca/news/indigenous/first-nations-first-ministers-9.7393838" target="_blank" rel="noopener">CBC News</a></p>

 <h2>6. Air Canada's maintenance "loophole" on compensation</h2>
 <p>Documents obtained by CBC Go Public show Air Canada told passengers their flights were cancelled for safety-related maintenance, making them ineligible for compensation, while the planes they were scheduled to fly were used on other routes. Under the Air Passenger Protection Regulations, passengers can be entitled to up to <strong>$1,000</strong> for delays within the airline's control and not required for safety. Gatineau's Juan Rojas won $1,000 after the Canadian Transportation Agency found Air Canada's safety claim unfounded. Air Canada says it made commercial decisions to reassign aircraft and was within its rights.</p>
 <p><strong>Why it matters to you:</strong> if your flight is cancelled for "maintenance," it may be worth asking which aircraft was affected before accepting a denial.</p>
 <p>Source: <a href="https://www.cbc.ca/news/gopublic/air-canada-maintenance-loophole-deny-compensation-9.7392314" target="_blank" rel="noopener">CBC News</a></p>

 <h2>Data sources</h2>
 <p>Population figures are from the 2021 Census of Population as presented on Canadian Data Insights location pages. See <a href="/sources/">Data sources</a>. News facts are from the linked reports. This roundup is for education only; verify primary sources.</p>
 `,
 },
 {
 title: "Toronto vs Calgary Population: 2,794,356 vs 1,306,784 + Income",
 slug: "toronto-vs-calgary-2021-census",
 date: "September 14, 2026",
 category: "Comparisons",
 readTime: "6 min read",
 heroImage: "/images/blog/compare/toronto-vs-calgary-2021-census.png",
 chartType: 'bar',
 chartTitle: "Toronto vs Calgary — Key Metrics",
 chartData: [
 { name: "Toronto pop. (M)", value: 2.79 },
 { name: "Calgary pop. (M)", value: 1.31 },
 { name: "Toronto growth %", value: 2.3 },
 { name: "Calgary growth %", value: 5.5 },
 { name: "Toronto med. HH $k", value: 74 },
 { name: "Calgary med. HH $k", value: 85 },
 ],
 excerpt: "Toronto is bigger, but Calgary grew faster (5.5% vs 2.3%). Median income is $85,000 in Calgary and $74,000 in Toronto. Average age: Toronto 41.5, Calgary 38.8.",
 content: `
 <p>Toronto and Calgary sit at opposite ends of a familiar Canadian trade-off: sheer scale versus growth and household income. Here is a clear head-to-head.</p>

 <h2>Population &amp; growth</h2>
 <p><a href="/location/toronto/"><strong>Toronto</strong></a> counted <strong>2,794,356</strong> residents in 2021 — more than double Calgary's <strong>1,306,784</strong>. Size, however, is not the same as momentum. Toronto's population rose <strong>2.3%</strong> from 2016 to 2021, while <a href="/location/calgary/"><strong>Calgary</strong></a> grew <strong>5.5%</strong> over the same period.</p>

 <p>In short: Toronto remains the country's largest municipal population; Calgary added people faster from 2016 to 2021.</p>

 <h2>Income</h2>
 <p>Median after-tax household income tells a different story. Calgary households sat at <strong>$85,000</strong> (median after tax), versus <strong>$74,000</strong> in Toronto. That gap matters for cost-of-living conversations: Toronto's larger labour market does not automatically translate into higher typical household take-home pay in this snapshot.</p>

 <h2>Age profile</h2>
 <p>Average age was <strong>41.5</strong> years in Toronto and <strong>38.8</strong> in Calgary. Calgary's younger profile lines up with faster growth and a labour market historically tied to energy and professional services migration.</p>

 <h2>Quick comparison table</h2>
 <ul>
 <li><strong>Population (2021):</strong> Toronto 2,794,356 · Calgary 1,306,784</li>
 <li><strong>Growth 2016–2021:</strong> Toronto 2.3% · Calgary 5.5%</li>
 <li><strong>Median HH income (after tax):</strong> Toronto $74,000 · Calgary $85,000</li>
 <li><strong>Average age:</strong> Toronto 41.5 · Calgary 38.8</li>
 </ul>

 <blockquote>Toronto wins on scale; Calgary leads on recent growth, median household income, and a younger average age — all from the same 2021 data release.</blockquote>

 <h2>Explore the full datasets</h2>
 <p>Dig into every section (households, labour, languages, dwellings) on the location profiles, or build your own side-by-side:</p>
 <ul>
 <li><a href="/location/toronto/">Toronto demographic profile</a></li>
 <li><a href="/location/calgary/">Calgary demographic profile</a></li>
 <li><a href="/compare/">Location Comparison tool</a> — choose both places, then Toronto and Calgary</li>
 </ul>
 `,
 },
 {
 title: "Canada's Shift to Secondary Cities: 2016–2021 Trends",
 slug: "canada-shift-to-secondary-cities",
 date: "September 25, 2025",
 category: "Urban Planning",
 readTime: "8 min read",
 heroImage: "/images/blog/urban-shift.png",
 chartType: 'bar',
 chartTitle: "Population Growth 2016-2021: Major Hubs vs. Secondary Cities",
 chartData: [
 { name: "Toronto (CMA)", value: 4.6 },
 { name: "Montreal (CMA)", value: 4.6 },
 { name: "Vancouver (CMA)", value: 7.3 },
 { name: "Kelowna (CMA)", value: 14.0 },
 { name: "Milton (T)", value: 20.7 },
 { name: "Airdrie (CY)", value: 20.3 },
 ],
 excerpt: "Analyzing how mid-sized Canadian cities outpaced major hubs in growth during the last census cycle, and what it means for the future of remote work.",
 content: `
 <p>Data from 2021 revealed a profound shift in where Canadians choose to live. While Toronto, Vancouver, and Montreal continue to be the economic heartbeats of the nation, the fastest growth rates aren't happening in the downtown cores. Instead, they are found in 'secondary' cities—places like Kelowna, BC, and Milton, ON.</p>
 
 <h2>The Rise of the Mid-Sized Hub</h2>
 <p>Across Canada, the population of census metropolitan areas (CMAs) grew by 5.2% from 2016 to 2021. However, smaller urban centers adjacent to these CMAs grew at nearly double that rate in some cases. This trend suggests a 'desire for space' that was accelerated by the global pandemic and the subsequent rise of remote-first employment.</p>
 
 <p>Cities like <strong>Kelowna</strong> and <strong>Milton</strong> represent a new frontier in Canadian urbanism. These are no longer just bedroom communities; they are becoming self-sustaining hubs of economic activity with their own burgeoning tech sectors and service economies.</p>
 
 <blockquote>"The pandemic didn't create the migration to secondary cities, but it acted as a massive catalyst, decoupling employment from physical office locations."</blockquote>
 
 <h2>What the Data Tells Us</h2>
 <p>When we look at the population growth rankings, we see a clear pattern. Municipalities within a 1-2 hour commute of a major center have seen a surge in property values and local resource demand. For policymakers, this means a shift in focus toward regional transit and decentralized infrastructure.</p>
 
 <p>In our data visualization below, notice the stark difference between the growth of traditional CMAs and the explosive expansion of cities like Airdrie and Milton. This isn't just a housing story—it's a fundamental restructuring of the Canadian demographic landscape.</p>
 
 <p>As we move toward the next census cycle, we expect to see these secondary cities develop more robust local service sectors, further reducing the reliance on the traditional 'Big Three' metropolitan areas.</p>
 `,
 },
 {
 title: "The Income Breakdown: Exploring Regional Disparities",
 slug: "income-breakdown-regional-disparities",
 date: "October 12, 2025",
 category: "Economy",
 readTime: "7 min read",
 heroImage: "/images/blog/income-disparity.png",
 chartType: 'area',
 chartTitle: "Median After-Tax Household Income by Selected Region",
 chartData: [
 { name: "Canada Total", value: 73000 },
 { name: "Alberta", value: 83000 },
 { name: "Ontario", value: 77000 },
 { name: "BC", value: 76000 },
 { name: "Quebec", value: 64000 },
 { name: "Nova Scotia", value: 63000 },
 ],
 excerpt: "A side-by-side look at median household incomes and low-income prevalence across the provinces, revealing the hidden layers of Canadian prosperity.",
 content: `
 <p>National averages often mask the stark realities of regional economic health. By diving into 2021 income data, we can see how the cost of living and industry specialization create a complex map of wealth across Canada.</p>
 
 <h2>Median vs. Average: Why it Matters</h2>
 <p>In regions with high concentrations of resource-based wealth, the difference between average and median income can be significant. Our data shows that while the average income might be skewed high by a small percentage of top earners, the median income provides a more grounded view of what the 'typical' household is actually bringing home.</p>
 
 <p>For instance, in <strong>Alberta</strong>, the median household income remains significantly higher than the national average, driven by the energy sector. However, the volatility of these industries often leads to greater fluctuations in employment rates compared to the service-driven economy of <strong>Ontario</strong>.</p>
 
 <h2>Low-Income Prevalence</h2>
 <p>One of the most critical metrics we track at Canadian Data Insights is the prevalence of low income (LIM-AT). Interestingly, some of the wealthiest provinces by average income also struggle with high rates of low-income prevalence in their urban centers, highlighting the ongoing challenge of income inequality.</p>
 
 <p>The gap between the top earners and the lowest deciles is widening in cities like Toronto and Vancouver, where high housing costs erode the purchasing power of even median-income households.</p>
 
 <p>Understanding these disparities is the first step toward targeted economic intervention. You can explore these metrics side-by-side using our <a href="/compare/">Comparison Tool</a>.</p>
 `,
 },
 {
 title: "Multicultural Horizons: The Languages Shaping Modern Canada",
 slug: "multicultural-horizons-languages-shaping-canada",
 date: "November 02, 2025",
 category: "Society",
 readTime: "6 min read",
 heroImage: "/images/blog/multicultural-languages.png",
 chartType: 'pie',
 chartTitle: "Top Mother Tongues in Canada (2021)",
 chartData: [
 { name: "English", value: 58.1 },
 { name: "French", value: 21.4 },
 { name: "Mandarin", value: 3.5 },
 { name: "Punjabi", value: 2.8 },
 { name: "Cantonese", value: 1.9 },
 { name: "Other", value: 12.3 },
 ],
 excerpt: "Moving beyond the English-French bilingual identity to look at the growth of non-official mother tongues and their impact on local communities.",
 content: `
 <p>Canada's identity has long been defined by its two official languages. However, 2021 language data paints a picture of a nation that is rapidly diversifying far beyond English and French.</p>
 
 <h2>The Growth of Non-Official Languages</h2>
 <p>Over 4.6 million Canadians speak a language other than English or French at home. Languages like <strong>Mandarin</strong>, <strong>Punjabi</strong>, and <strong>Tagalog</strong> have seen double-digit growth rates, reflecting the changing patterns of global migration and Canada's role as a multicultural destination.</p>
 
 <p>This linguistic diversity is a core strength of the Canadian economy, facilitating international trade and cultural exchange. However, it also presents unique challenges for public service delivery and social cohesion.</p>
 
 <h2>Impact on Urban Centers</h2>
 <p>In major hubs like Toronto and Vancouver, non-official languages are increasingly the primary mother tongue for large segments of the population. This has profound implications for how services are delivered, from healthcare to education and retail.</p>
 
 <p>As the 'neither' category (those who speak neither English nor French) remains low, it indicates that Canada’s multiculturalism is additive—new arrivals are maintaining their heritage languages while successfully integrating into the broader Canadian economic fabric.</p>
 
 <p>In our chart below, we visualize the current breakdown of mother tongues. While the official languages still dominate, the 'Other' category is a mosaic of hundreds of languages that define the modern Canadian experience.</p>
 `,
 },
];

/** All blog posts (compare SEO posts + existing editorial posts). */
export const blogPosts: BlogPost[] = [...compareBlogPosts, ...existingBlogPosts];

