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
 title: "Bachelor's vs trades: education mix by Canadian city (2021 Census)",
 slug: "canadas-bachelors-vs-trades-cities",
 date: "October 30, 2026",
 category: "Education",
 readTime: "8 min read",
 author: "Andrew",
 heroImage: "/images/blog/canadas-bachelors-vs-trades-cities.png",
 chartType: 'bar',
 chartTitle: "Bachelor's degree or higher, places of 50,000 or more (percent)",
 chartData: [
 { name: "Oakville", value: 47.9 },
 { name: "Vancouver", value: 44.9 },
 { name: "Richmond Hill", value: 44.7 },
 { name: "N. Van. District", value: 44.0 },
 { name: "Waterloo", value: 43.6 },
 { name: "Victoria", value: 42.6 },
 { name: "North Vancouver", value: 42.4 },
 { name: "Ottawa", value: 41.4 },
 ],
 excerpt: "Oakville led Canadian places of 50,000 or more: 47.9% of residents aged 15 and over held a bachelor's degree or higher. Saguenay led on apprenticeship or trades certificates, at 23.2%. In nine of those places, trades certificates outnumber degrees. Canada was 26.7% and 8.7%.",
 content: `

 <p>In the 2021 Census, <strong>47.9%</strong> of <a href="/location/oakville-town-t/#education">Oakville</a> residents aged 15 and over held a bachelor's degree or higher — the highest share among Canada's <strong>101</strong> census subdivisions with <strong>50,000</strong> or more residents. <a href="/location/vancouver/#education">Vancouver</a> was next, at 44.9%. Across <a href="/location/canada/#education">Canada</a>, the same share was <strong>26.7%</strong>.</p>

 <p>The other ranking uses the apprenticeship or trades certificate, and the same population. <a href="/location/saguenay/#education">Saguenay</a> led those 101 places, at <strong>23.2%</strong>. Canada's share was <strong>8.7%</strong>. In nine of the 101, trades certificates outnumber bachelor's degrees. All nine are in Quebec. A separate list further down covers places of 10,000 to 49,999. <a href="/location/westmount/#education">Westmount</a>, at 19,658 residents, leads that smaller degree list, at 63.3%.</p>

 <p>Both percentages divide a published count by the population aged 15 and over. Bachelor's degree or higher is one highest credential. Apprenticeship or trades certificate is another. A person is in one group, not both. College, CEGEP or other non-university certificate is a third group, and it is not inside either share. For Canada, that college share was 18.8% (5,714,490 of 30,335,915). The education section on each location page uses these same counts and the same denominator.</p>

 <p>This is a different ranking from <a href="/blog/canadas-trades-heavy-towns/">Canada's trades-heavy towns</a>. That post counts people whose job was in trades, transport and equipment operators, as a share of the labour force. This post counts credentials, as a share of everyone aged 15 and over. <a href="/location/wood-buffalo-specialized-municipality-sm/#education">Wood Buffalo</a> led the occupation list, at 31.3% (13,345 of 42,655). On this credential list it is 13th, at 14.5% (8,025 of 55,245), and bachelor's degrees still outnumber trades certificates there (10,790 and 8,025).</p>

 <p>Statistics Canada randomly rounds census counts, so a set of categories can miss its published total by a few people. For Canada, the four published parts of postsecondary — trades certificate, college or CEGEP, university certificate below the bachelor level, and bachelor's or higher — add up to the postsecondary total of 17,339,045. This page does not adjust municipal rows for rounding, and it does not estimate any remainder.</p>

 <h2>Places of 50,000 or more: bachelor's degree or higher</h2>
 <p>The ranking below keeps the list to census subdivisions — cities, towns, and other municipalities — with a 2021 population of at least 50,000. That threshold leaves 101 places. Every figure is calculated from the census counts in this site's location file. Nine of the top 15 are in Ontario, five are in British Columbia, and one is in New Brunswick.</p>

 <p><a href="/location/toronto/#education">Toronto</a> does not lead the share. It has the largest bachelor's count in the group of 101: <strong>976,620</strong> people.</p>

 <div class="table-wrap">
 <table>
 <thead>
 <tr>
 <th class="num">Rank</th>
 <th>Place</th>
 <th>Province</th>
 <th class="num">Population</th>
 <th class="num">Bachelor's or higher</th>
 <th class="num">Trades certificate</th>
 <th class="num">Aged 15+</th>
 <th class="num">Bachelor's share</th>
 <th class="num">Trades share</th>
 </tr>
 </thead>
 <tbody>
 <tr><td class="num">1</td><td><a href="/location/oakville-town-t/#education">Oakville</a></td><td>Ontario</td><td class="num">213,759</td><td class="num">83,230</td><td class="num">4,910</td><td class="num">173,625</td><td class="num">47.9%</td><td class="num">2.8%</td></tr>
<tr><td class="num">2</td><td><a href="/location/vancouver/#education">Vancouver</a></td><td>British Columbia</td><td class="num">662,248</td><td class="num">260,240</td><td class="num">24,410</td><td class="num">580,010</td><td class="num">44.9%</td><td class="num">4.2%</td></tr>
<tr><td class="num">3</td><td><a href="/location/richmond-hill-town-t/#education">Richmond Hill</a></td><td>Ontario</td><td class="num">202,022</td><td class="num">76,510</td><td class="num">5,260</td><td class="num">170,980</td><td class="num">44.7%</td><td class="num">3.1%</td></tr>
<tr><td class="num">4</td><td><a href="/location/north-vancouver-district-municipality-dm/#education">North Vancouver District</a></td><td>British Columbia</td><td class="num">88,168</td><td class="num">32,065</td><td class="num">3,850</td><td class="num">72,820</td><td class="num">44.0%</td><td class="num">5.3%</td></tr>
<tr><td class="num">5</td><td><a href="/location/waterloo/#education">Waterloo</a></td><td>Ontario</td><td class="num">121,436</td><td class="num">43,915</td><td class="num">3,185</td><td class="num">100,820</td><td class="num">43.6%</td><td class="num">3.2%</td></tr>
<tr><td class="num">6</td><td><a href="/location/victoria/#education">Victoria</a></td><td>British Columbia</td><td class="num">91,867</td><td class="num">33,860</td><td class="num">4,320</td><td class="num">79,470</td><td class="num">42.6%</td><td class="num">5.4%</td></tr>
<tr><td class="num">7</td><td><a href="/location/north-vancouver/#education">North Vancouver</a></td><td>British Columbia</td><td class="num">58,120</td><td class="num">21,280</td><td class="num">2,965</td><td class="num">50,205</td><td class="num">42.4%</td><td class="num">5.9%</td></tr>
<tr><td class="num">8</td><td><a href="/location/ottawa/#education">Ottawa</a></td><td>Ontario</td><td class="num">1,017,449</td><td class="num">345,465</td><td class="num">29,735</td><td class="num">834,135</td><td class="num">41.4%</td><td class="num">3.6%</td></tr>
<tr><td class="num">9</td><td><a href="/location/toronto/#education">Toronto</a></td><td>Ontario</td><td class="num">2,794,356</td><td class="num">976,620</td><td class="num">80,935</td><td class="num">2,377,950</td><td class="num">41.1%</td><td class="num">3.4%</td></tr>
<tr><td class="num">10</td><td><a href="/location/aurora-town-t/#education">Aurora</a></td><td>Ontario</td><td class="num">62,057</td><td class="num">20,715</td><td class="num">1,785</td><td class="num">50,830</td><td class="num">40.8%</td><td class="num">3.5%</td></tr>
<tr><td class="num">11</td><td><a href="/location/milton-town-t/#education">Milton</a></td><td>Ontario</td><td class="num">132,979</td><td class="num">40,300</td><td class="num">3,505</td><td class="num">99,460</td><td class="num">40.5%</td><td class="num">3.5%</td></tr>
<tr><td class="num">12</td><td><a href="/location/markham/#education">Markham</a></td><td>Ontario</td><td class="num">338,503</td><td class="num">111,165</td><td class="num">7,030</td><td class="num">283,405</td><td class="num">39.2%</td><td class="num">2.5%</td></tr>
<tr><td class="num">13</td><td><a href="/location/fredericton/#education">Fredericton</a></td><td>New Brunswick</td><td class="num">63,116</td><td class="num">20,220</td><td class="num">2,515</td><td class="num">52,730</td><td class="num">38.3%</td><td class="num">4.8%</td></tr>
<tr><td class="num">14</td><td><a href="/location/burnaby/#education">Burnaby</a></td><td>British Columbia</td><td class="num">249,125</td><td class="num">81,580</td><td class="num">10,870</td><td class="num">213,475</td><td class="num">38.2%</td><td class="num">5.1%</td></tr>
<tr><td class="num">15</td><td><a href="/location/mississauga/#education">Mississauga</a></td><td>Ontario</td><td class="num">717,961</td><td class="num">230,635</td><td class="num">22,470</td><td class="num">603,595</td><td class="num">38.2%</td><td class="num">3.7%</td></tr>
 </tbody>
 </table>
 </div>

 <p>Shares are shown to one decimal place, matching the location pages. <a href="/location/burnaby/#education">Burnaby</a> (81,580 of 213,475) ranks just ahead of <a href="/location/mississauga/#education">Mississauga</a> (230,635 of 603,595). Both round to 38.2%.</p>

 <p><a href="/location/north-vancouver-district-municipality-dm/#education">North Vancouver District</a> in this table is the district municipality, population 88,168. <a href="/location/north-vancouver/#education">North Vancouver</a> is the city, population 58,120, at 42.4% (21,280 of 50,205). <a href="/location/waterloo/#education">Waterloo</a> is the city of 121,436, not a regional total. <a href="/location/fredericton/#education">Fredericton</a> is the one Atlantic place in the top 15, at 38.3% (20,220 of 52,730). <a href="/location/new-brunswick/#education">New Brunswick</a> as a whole was 19.0% (122,865 of 648,245).</p>

 <h2>Apprenticeship or trades certificate</h2>
 <p>The same 101 places, ranked the other way. The top 12 are in Quebec, and 14 of the top 15 are. <a href="/location/wood-buffalo-specialized-municipality-sm/#education">Wood Buffalo</a> is the one place outside Quebec in that top 15.</p>

 <p><a href="/location/montr-al/#education">Montréal</a> does not lead the share. It has the largest trades-certificate count in the group of 101: <strong>135,320</strong> people. Its bachelor's count is larger still, at 522,915.</p>

 <div class="table-wrap">
 <table>
 <thead>
 <tr>
 <th class="num">Rank</th>
 <th>Place</th>
 <th>Province</th>
 <th class="num">Population</th>
 <th class="num">Bachelor's or higher</th>
 <th class="num">Trades certificate</th>
 <th class="num">Aged 15+</th>
 <th class="num">Bachelor's share</th>
 <th class="num">Trades share</th>
 </tr>
 </thead>
 <tbody>
 <tr><td class="num">1</td><td><a href="/location/saguenay/#education">Saguenay</a></td><td>Quebec</td><td class="num">144,723</td><td class="num">20,985</td><td class="num">27,700</td><td class="num">119,590</td><td class="num">17.5%</td><td class="num">23.2%</td></tr>
<tr><td class="num">2</td><td><a href="/location/mirabel/#education">Mirabel</a></td><td>Quebec</td><td class="num">61,108</td><td class="num">7,055</td><td class="num">10,485</td><td class="num">48,245</td><td class="num">14.6%</td><td class="num">21.7%</td></tr>
<tr><td class="num">3</td><td><a href="/location/mascouche/#education">Mascouche</a></td><td>Quebec</td><td class="num">51,183</td><td class="num">6,190</td><td class="num">8,475</td><td class="num">39,930</td><td class="num">15.5%</td><td class="num">21.2%</td></tr>
<tr><td class="num">4</td><td><a href="/location/drummondville/#education">Drummondville</a></td><td>Quebec</td><td class="num">79,258</td><td class="num">8,710</td><td class="num">12,525</td><td class="num">64,035</td><td class="num">13.6%</td><td class="num">19.6%</td></tr>
<tr><td class="num">5</td><td><a href="/location/terrebonne/#education">Terrebonne</a></td><td>Quebec</td><td class="num">119,944</td><td class="num">15,170</td><td class="num">18,230</td><td class="num">94,250</td><td class="num">16.1%</td><td class="num">19.3%</td></tr>
<tr><td class="num">6</td><td><a href="/location/saint-jean-sur-richelieu/#education">Saint-Jean-sur-Richelieu</a></td><td>Quebec</td><td class="num">97,873</td><td class="num">12,265</td><td class="num">14,835</td><td class="num">79,075</td><td class="num">15.5%</td><td class="num">18.8%</td></tr>
<tr><td class="num">7</td><td><a href="/location/repentigny/#education">Repentigny</a></td><td>Quebec</td><td class="num">86,100</td><td class="num">12,230</td><td class="num">12,515</td><td class="num">69,450</td><td class="num">17.6%</td><td class="num">18.0%</td></tr>
<tr><td class="num">8</td><td><a href="/location/saint-hyacinthe/#education">Saint-Hyacinthe</a></td><td>Quebec</td><td class="num">57,239</td><td class="num">6,540</td><td class="num">8,285</td><td class="num">46,350</td><td class="num">14.1%</td><td class="num">17.9%</td></tr>
<tr><td class="num">9</td><td><a href="/location/trois-rivi-res/#education">Trois-Rivières</a></td><td>Quebec</td><td class="num">139,163</td><td class="num">22,550</td><td class="num">20,005</td><td class="num">114,125</td><td class="num">19.8%</td><td class="num">17.5%</td></tr>
<tr><td class="num">10</td><td><a href="/location/granby/#education">Granby</a></td><td>Quebec</td><td class="num">69,025</td><td class="num">7,405</td><td class="num">9,680</td><td class="num">56,025</td><td class="num">13.2%</td><td class="num">17.3%</td></tr>
<tr><td class="num">11</td><td><a href="/location/l-vis/#education">Lévis</a></td><td>Quebec</td><td class="num">149,683</td><td class="num">29,765</td><td class="num">20,365</td><td class="num">121,095</td><td class="num">24.6%</td><td class="num">16.8%</td></tr>
<tr><td class="num">12</td><td><a href="/location/sherbrooke/#education">Sherbrooke</a></td><td>Quebec</td><td class="num">172,950</td><td class="num">34,895</td><td class="num">23,115</td><td class="num">139,990</td><td class="num">24.9%</td><td class="num">16.5%</td></tr>
<tr><td class="num">13</td><td><a href="/location/wood-buffalo-specialized-municipality-sm/#education">Wood Buffalo</a></td><td>Alberta</td><td class="num">72,326</td><td class="num">10,790</td><td class="num">8,025</td><td class="num">55,245</td><td class="num">19.5%</td><td class="num">14.5%</td></tr>
<tr><td class="num">14</td><td><a href="/location/blainville/#education">Blainville</a></td><td>Quebec</td><td class="num">59,819</td><td class="num">11,665</td><td class="num">6,900</td><td class="num">48,010</td><td class="num">24.3%</td><td class="num">14.4%</td></tr>
<tr><td class="num">15</td><td><a href="/location/qu-bec/#education">Québec</a></td><td>Quebec</td><td class="num">549,459</td><td class="num">132,100</td><td class="num">64,890</td><td class="num">452,695</td><td class="num">29.2%</td><td class="num">14.3%</td></tr>
 </tbody>
 </table>
 </div>

 <p><a href="/location/qu-bec/#education">Québec</a> (64,890 of 452,695) ranks just ahead of <a href="/location/longueuil/#education">Longueuil</a> (29,680 of 207,820). Both round to 14.3%. Longueuil is 16th, just outside the table. Québec in that sentence is the city, not <a href="/location/quebec/#education">the province</a>.</p>

 <p>A high trades-certificate share is not the same fact as trades certificates outnumbering degrees. <a href="/location/trois-rivi-res/#education">Trois-Rivières</a> is 9th on this list, at 17.5% (20,005 of 114,125), and bachelor's degrees are still higher, at 19.8% (22,550 of 114,125). <a href="/location/wood-buffalo-specialized-municipality-sm/#education">Wood Buffalo</a>, 13th here, is the same kind of case: 10,790 bachelor's degrees and 8,025 trades certificates.</p>

 <p>College or CEGEP stays near the national share inside this top 10. It runs from 16.2% in <a href="/location/saint-hyacinthe/#education">Saint-Hyacinthe</a> (7,530 of 46,350) to 19.8% in <a href="/location/saguenay/#education">Saguenay</a> (23,725 of 119,590). Canada is 18.8%. Trades-certificate shares in the same ten places run from 17.3% to 23.2%, above Canada's 8.7%.</p>

 <h2>Where trades certificates outnumber degrees</h2>
 <p>Nine of the 101 places have more residents whose highest credential is an apprenticeship or trades certificate than residents whose highest credential is a bachelor's degree or higher. All nine are in Quebec. The ratio is the trades-certificate count divided by the bachelor's-or-higher count, shown to two decimal places.</p>

 <div class="table-wrap">
 <table>
 <thead>
 <tr>
 <th class="num">Rank</th>
 <th>Place</th>
 <th>Province</th>
 <th class="num">Population</th>
 <th class="num">Trades certificate</th>
 <th class="num">Bachelor's or higher</th>
 <th class="num">Trades per degree</th>
 <th class="num">Trades share</th>
 <th class="num">Bachelor's share</th>
 </tr>
 </thead>
 <tbody>
 <tr><td class="num">1</td><td><a href="/location/mirabel/#education">Mirabel</a></td><td>Quebec</td><td class="num">61,108</td><td class="num">10,485</td><td class="num">7,055</td><td class="num">1.49</td><td class="num">21.7%</td><td class="num">14.6%</td></tr>
<tr><td class="num">2</td><td><a href="/location/drummondville/#education">Drummondville</a></td><td>Quebec</td><td class="num">79,258</td><td class="num">12,525</td><td class="num">8,710</td><td class="num">1.44</td><td class="num">19.6%</td><td class="num">13.6%</td></tr>
<tr><td class="num">3</td><td><a href="/location/mascouche/#education">Mascouche</a></td><td>Quebec</td><td class="num">51,183</td><td class="num">8,475</td><td class="num">6,190</td><td class="num">1.37</td><td class="num">21.2%</td><td class="num">15.5%</td></tr>
<tr><td class="num">4</td><td><a href="/location/saguenay/#education">Saguenay</a></td><td>Quebec</td><td class="num">144,723</td><td class="num">27,700</td><td class="num">20,985</td><td class="num">1.32</td><td class="num">23.2%</td><td class="num">17.5%</td></tr>
<tr><td class="num">5</td><td><a href="/location/granby/#education">Granby</a></td><td>Quebec</td><td class="num">69,025</td><td class="num">9,680</td><td class="num">7,405</td><td class="num">1.31</td><td class="num">17.3%</td><td class="num">13.2%</td></tr>
<tr><td class="num">6</td><td><a href="/location/saint-hyacinthe/#education">Saint-Hyacinthe</a></td><td>Quebec</td><td class="num">57,239</td><td class="num">8,285</td><td class="num">6,540</td><td class="num">1.27</td><td class="num">17.9%</td><td class="num">14.1%</td></tr>
<tr><td class="num">7</td><td><a href="/location/saint-jean-sur-richelieu/#education">Saint-Jean-sur-Richelieu</a></td><td>Quebec</td><td class="num">97,873</td><td class="num">14,835</td><td class="num">12,265</td><td class="num">1.21</td><td class="num">18.8%</td><td class="num">15.5%</td></tr>
<tr><td class="num">8</td><td><a href="/location/terrebonne/#education">Terrebonne</a></td><td>Quebec</td><td class="num">119,944</td><td class="num">18,230</td><td class="num">15,170</td><td class="num">1.20</td><td class="num">19.3%</td><td class="num">16.1%</td></tr>
<tr><td class="num">9</td><td><a href="/location/repentigny/#education">Repentigny</a></td><td>Quebec</td><td class="num">86,100</td><td class="num">12,515</td><td class="num">12,230</td><td class="num">1.02</td><td class="num">18.0%</td><td class="num">17.6%</td></tr>
 </tbody>
 </table>
 </div>

 <p><a href="/location/mirabel/#education">Mirabel</a> is the widest gap, at 1.49 trades certificates for every bachelor's degree or higher (10,485 and 7,055). <a href="/location/repentigny/#education">Repentigny</a> is the narrowest. Trades certificates lead by 285 people (12,515 and 12,230), a ratio of 1.02.</p>

 <p>The other end of the same ratio is a degree-heavy suburb. In <a href="/location/oakville-town-t/#education">Oakville</a> there are 16.95 people with a bachelor's degree or higher for every trades certificate (83,230 and 4,910). <a href="/location/markham/#education">Markham</a> is next, at 15.81 (111,165 and 7,030). <a href="/location/richmond-hill-town-t/#education">Richmond Hill</a> is third, at 14.55 (76,510 and 5,260). Canada is 3.06 (8,086,245 and 2,641,555).</p>

 <p><a href="/location/markham/#education">Markham</a> has the lowest trades-certificate share in the group of 101, at 2.5%. <a href="/location/oakville-town-t/#education">Oakville</a> is second-lowest, at 2.8%, and first on the bachelor's share. Oakville also led the worked-at-home ranking in <a href="/blog/canadas-top-work-from-home-cities/">Canada's top work-from-home cities</a>, and it was last on the occupation list in the trades-towns post, at 9.0% (10,235 of 113,190). The three rankings use different census questions. Worked at home is a share of the employed labour force. The occupation share uses the labour force. This post uses the population aged 15 and over.</p>

 <h2>Where the largest cities land</h2>
 <p>Five census subdivisions in the file have 1,000,000 residents or more. <a href="/location/ottawa/#education">Ottawa</a> is 8th on bachelor's degrees, at <strong>41.4%</strong> (345,465 of 834,135), and 94th on trades certificates, at 3.6% (29,735 of 834,135). <a href="/location/toronto/#education">Toronto</a> is 9th and 97th, at 41.1% and 3.4%. <a href="/location/montr-al/#education">Montréal</a> is 19th and 30th, at 36.0% (522,915 of 1,453,295) and 9.3% (135,320 of 1,453,295). <a href="/location/calgary/#education">Calgary</a> is 22nd and 64th, at 35.7% (377,450 of 1,056,230) and 5.9% (62,155 of 1,056,230). <a href="/location/edmonton/#education">Edmonton</a> is 34th and 42nd, at 29.7% (241,480 of 812,610) and 7.3% (59,580 of 812,610).</p>

 <p><a href="/location/winnipeg/#education">Winnipeg</a>, at 749,607 residents, is 37th on bachelor's degrees, at 29.2% (178,745 of 612,550), and 68th on trades certificates, at 5.7% (34,885 of 612,550). <a href="/location/vancouver/#education">Vancouver</a> is already in the first table: 2nd on bachelor's degrees and 88th on trades certificates, at 4.2% (24,410 of 580,010).</p>

 <h2>The low end of the 50,000-person list</h2>
 <p><a href="/location/norfolk-county/#education">Norfolk County</a> is last on bachelor's degrees among the 101 places, at <strong>12.5%</strong>. The five lowest:</p>

 <div class="table-wrap">
 <table>
 <thead>
 <tr>
 <th class="num">Rank</th>
 <th>Place</th>
 <th>Province</th>
 <th class="num">Population</th>
 <th class="num">Bachelor's or higher</th>
 <th class="num">Trades certificate</th>
 <th class="num">Aged 15+</th>
 <th class="num">Bachelor's share</th>
 <th class="num">Trades share</th>
 </tr>
 </thead>
 <tbody>
 <tr><td class="num">97</td><td><a href="/location/drummondville/#education">Drummondville</a></td><td>Quebec</td><td class="num">79,258</td><td class="num">8,710</td><td class="num">12,525</td><td class="num">64,035</td><td class="num">13.6%</td><td class="num">19.6%</td></tr>
<tr><td class="num">98</td><td><a href="/location/kawartha-lakes/#education">Kawartha Lakes</a></td><td>Ontario</td><td class="num">79,247</td><td class="num">8,985</td><td class="num">5,420</td><td class="num">66,700</td><td class="num">13.5%</td><td class="num">8.1%</td></tr>
<tr><td class="num">99</td><td><a href="/location/granby/#education">Granby</a></td><td>Quebec</td><td class="num">69,025</td><td class="num">7,405</td><td class="num">9,680</td><td class="num">56,025</td><td class="num">13.2%</td><td class="num">17.3%</td></tr>
<tr><td class="num">100</td><td><a href="/location/chatham-kent-municipality-mu/#education">Chatham-Kent</a></td><td>Ontario</td><td class="num">103,988</td><td class="num">11,030</td><td class="num">5,500</td><td class="num">85,225</td><td class="num">12.9%</td><td class="num">6.5%</td></tr>
<tr><td class="num">101</td><td><a href="/location/norfolk-county/#education">Norfolk County</a></td><td>Ontario</td><td class="num">67,490</td><td class="num">6,975</td><td class="num">4,405</td><td class="num">55,980</td><td class="num">12.5%</td><td class="num">7.9%</td></tr>
 </tbody>
 </table>
 </div>

 <p>Last on bachelor's degrees is not the same fact as the smallest postsecondary share. <a href="/location/norfolk-county/#education">Norfolk County</a>'s postsecondary share is 47.2% (26,410 of 55,980), below Canada's 57.2% (17,339,045 of 30,335,915). Its college share is 25.5% (14,250 of 55,980), above Canada's 18.8%. <a href="/location/kawartha-lakes/#education">Kawartha Lakes</a> is 98th on bachelor's degrees and 37th on trades certificates, at 8.1% (5,420 of 66,700). Its college share is 26.0% (17,330 of 66,700), and its postsecondary share is 49.0% (32,655 of 66,700).</p>

 <p>Those two places sat near the top of the occupation ranking. <a href="/location/kawartha-lakes/#education">Kawartha Lakes</a> was 2nd, at 24.7% of the labour force (9,030 of 36,500). <a href="/location/norfolk-county/#education">Norfolk County</a> was 3rd, at 24.3% (7,685 of 31,620). Their trades-certificate shares, 8.1% and 7.9%, sit near Canada's 8.7%. A job in the trades and a trades certificate as one's highest credential are different census facts.</p>

 <p>On the trades-certificate ranking, <a href="/location/markham/#education">Markham</a> is last, at 2.5% (7,030 of 283,405). Then <a href="/location/oakville-town-t/#education">Oakville</a> at 2.8%, <a href="/location/richmond-hill-town-t/#education">Richmond Hill</a> at 3.1% (5,260 of 170,980), <a href="/location/waterloo/#education">Waterloo</a> at 3.2% (3,185 of 100,820), and <a href="/location/toronto/#education">Toronto</a> at 3.4% (80,935 of 2,377,950). <a href="/location/milton-town-t/#education">Milton</a> (3,505 of 99,460) ranks just ahead of <a href="/location/aurora-town-t/#education">Aurora</a> (1,785 of 50,830). Both round to 3.5%. Toronto's trades-certificate count is still the second-largest in the group of 101, after Montréal.</p>

 <h2>The national figure</h2>
 <p>For <a href="/location/canada/#education">Canada</a>, 8,086,245 people held a bachelor's degree or higher out of a population aged 15 and over of 30,335,915, which is <strong>26.7%</strong>. The trades-certificate count was 2,641,555, which is <strong>8.7%</strong>. The country's 2021 population was 36,991,981. That Canada figure is the country's published counts in the location file. It is not the sum of the municipal rows above.</p>

 <p>High school diploma or equivalency also rounds to 26.7%, from a larger count: 8,097,295 of 30,335,915. The two groups are different people. Postsecondary credentials, the wider group that contains both degrees and trades certificates, were 57.2% (17,339,045 of 30,335,915).</p>

 <p>Among the 101 places of 50,000 or more, the median bachelor's share was <strong>24.9%</strong>. <a href="/location/laval/#education">Laval</a> holds that middle place, 51st, at 24.9% (88,110 of 354,415). <a href="/location/sherbrooke/#education">Sherbrooke</a> ranks just ahead, 50th, and also rounds to 24.9% (34,895 of 139,990). The median trades-certificate share was <strong>6.7%</strong>. <a href="/location/halifax-regional-municipality-rgm/#education">Halifax</a> holds that middle place, at 6.7% (24,760 of 370,355). Halifax here is the regional municipality, population 439,819.</p>

 <p>On the one-decimal shares used in the tables, 41 places round above Canada's 26.7% on bachelor's degrees, <a href="/location/st-albert/#education">St. Albert</a> rounds to the same 26.7% (14,620 of 54,675), and 59 round lower. On trades certificates, 32 places round above Canada's 8.7%, three round to the same 8.7% — <a href="/location/kelowna/#education">Kelowna</a> (10,650 of 122,175), <a href="/location/port-coquitlam/#education">Port Coquitlam</a> (4,410 of 50,770), and <a href="/location/sarnia/#education">Sarnia</a> (5,240 of 60,375) — and 66 round lower.</p>

 <p>Added together, those 101 places had 6,296,965 people with a bachelor's degree or higher out of 19,837,945 aged 15 and over, a combined share of <strong>31.7%</strong>. The trades-certificate combined share was <strong>6.9%</strong> (1,360,125 of 19,837,945). The median counts each municipality once. The combined share counts every person aged 15 and over, so large places with high degree shares — Toronto, Montréal, Vancouver, and Ottawa — pull the bachelor's figure above both the median and the Canada figure. The same large places pull the trades-certificate figure below Canada. The 314 places of 10,000 to 49,999 combine to <strong>20.2%</strong> on bachelor's degrees (1,047,655 of 5,185,495) and <strong>10.7%</strong> on trades certificates (556,215 of 5,185,495).</p>

 <p><a href="/location/ontario/#education">Ontario</a> was the highest province or territory on bachelor's degrees, at <strong>29.9%</strong> (3,528,600 of 11,782,820). <a href="/location/nunavut/#education">Nunavut</a> was the lowest, at <strong>10.6%</strong> (2,605 of 24,535). Among provinces, <a href="/location/newfoundland-and-labrador/#education">Newfoundland and Labrador</a> was the lowest, at <strong>16.6%</strong> (72,190 of 433,960). On trades certificates, <a href="/location/quebec/#education">Quebec</a> was the highest, at <strong>15.8%</strong> (1,096,360 of 6,918,730), and its bachelor's share was 23.5% (1,628,940 of 6,918,730). <a href="/location/ontario/#education">Ontario</a> was the lowest on trades certificates, at <strong>5.0%</strong> (592,485 of 11,782,820). <a href="/location/nunavut/#education">Nunavut</a> also rounds to 5.0% (1,235 of 24,535). Ontario's unrounded share is slightly lower. <a href="/location/alberta/#education">Alberta</a> rounds to the same 8.7% as Canada (295,285 of 3,375,135).</p>

 <h2>Places of 10,000 to 49,999</h2>
 <p>Dropping the floor to 10,000 residents, and stopping below 50,000, leaves <strong>314</strong> census subdivisions. Six of them post a higher bachelor's share than Oakville. <a href="/location/westmount/#education">Westmount</a> is first, at <strong>63.3%</strong> (10,415 of 16,450). The top eight are below. Five are in Quebec, two in British Columbia, and one in Alberta.</p>

 <div class="table-wrap">
 <table>
 <thead>
 <tr>
 <th class="num">Rank</th>
 <th>Place</th>
 <th>Province</th>
 <th class="num">Population</th>
 <th class="num">Bachelor's or higher</th>
 <th class="num">Trades certificate</th>
 <th class="num">Aged 15+</th>
 <th class="num">Bachelor's share</th>
 <th class="num">Trades share</th>
 </tr>
 </thead>
 <tbody>
 <tr><td class="num">1</td><td><a href="/location/westmount/#education">Westmount</a></td><td>Quebec</td><td class="num">19,658</td><td class="num">10,415</td><td class="num">345</td><td class="num">16,450</td><td class="num">63.3%</td><td class="num">2.1%</td></tr>
<tr><td class="num">2</td><td><a href="/location/mont-royal/#education">Mont-Royal</a></td><td>Quebec</td><td class="num">20,953</td><td class="num">9,855</td><td class="num">450</td><td class="num">16,430</td><td class="num">60.0%</td><td class="num">2.7%</td></tr>
<tr><td class="num">3</td><td><a href="/location/oak-bay-district-municipality-dm/#education">Oak Bay District</a></td><td>British Columbia</td><td class="num">17,990</td><td class="num">8,145</td><td class="num">585</td><td class="num">15,345</td><td class="num">53.1%</td><td class="num">3.8%</td></tr>
<tr><td class="num">4</td><td><a href="/location/saint-lambert/#education">Saint-Lambert</a></td><td>Quebec</td><td class="num">22,761</td><td class="num">9,530</td><td class="num">945</td><td class="num">18,380</td><td class="num">51.8%</td><td class="num">5.1%</td></tr>
<tr><td class="num">5</td><td><a href="/location/beaconsfield/#education">Beaconsfield</a></td><td>Quebec</td><td class="num">19,277</td><td class="num">7,915</td><td class="num">525</td><td class="num">15,570</td><td class="num">50.8%</td><td class="num">3.4%</td></tr>
<tr><td class="num">6</td><td><a href="/location/west-vancouver-district-municipality-dm/#education">West Vancouver District</a></td><td>British Columbia</td><td class="num">44,122</td><td class="num">18,635</td><td class="num">1,275</td><td class="num">37,225</td><td class="num">50.1%</td><td class="num">3.4%</td></tr>
<tr><td class="num">7</td><td><a href="/location/kirkland/#education">Kirkland</a></td><td>Quebec</td><td class="num">19,413</td><td class="num">7,025</td><td class="num">780</td><td class="num">16,170</td><td class="num">43.4%</td><td class="num">4.8%</td></tr>
<tr><td class="num">8</td><td><a href="/location/canmore-town-t/#education">Canmore</a></td><td>Alberta</td><td class="num">15,990</td><td class="num">5,745</td><td class="num">905</td><td class="num">13,485</td><td class="num">42.6%</td><td class="num">6.7%</td></tr>
 </tbody>
 </table>
 </div>

 <p>The trades-certificate list for the same population band is not a second copy of the big-city ranking. <a href="/location/saint-lin-laurentides/#education">Saint-Lin--Laurentides</a> is first, at <strong>28.4%</strong> (5,185 of 18,245), above Saguenay's 23.2%. Its bachelor's share is 5.0% (905 of 18,245). The top 10 are all in Quebec. Saint-Lin--Laurentides was also second on the occupation ranking in the trades-towns post.</p>

 <div class="table-wrap">
 <table>
 <thead>
 <tr>
 <th class="num">Rank</th>
 <th>Place</th>
 <th>Province</th>
 <th class="num">Population</th>
 <th class="num">Bachelor's or higher</th>
 <th class="num">Trades certificate</th>
 <th class="num">Aged 15+</th>
 <th class="num">Bachelor's share</th>
 <th class="num">Trades share</th>
 </tr>
 </thead>
 <tbody>
 <tr><td class="num">1</td><td><a href="/location/saint-lin-laurentides/#education">Saint-Lin--Laurentides</a></td><td>Quebec</td><td class="num">24,030</td><td class="num">905</td><td class="num">5,185</td><td class="num">18,245</td><td class="num">5.0%</td><td class="num">28.4%</td></tr>
<tr><td class="num">2</td><td><a href="/location/sainte-sophie-municipalit-m/#education">Sainte-Sophie</a></td><td>Quebec</td><td class="num">18,080</td><td class="num">1,145</td><td class="num">3,980</td><td class="num">14,095</td><td class="num">8.1%</td><td class="num">28.2%</td></tr>
<tr><td class="num">3</td><td><a href="/location/sainte-julienne-municipalit-m/#education">Sainte-Julienne</a></td><td>Quebec</td><td class="num">11,173</td><td class="num">665</td><td class="num">2,425</td><td class="num">8,840</td><td class="num">7.5%</td><td class="num">27.4%</td></tr>
<tr><td class="num">4</td><td><a href="/location/saint-raymond/#education">Saint-Raymond</a></td><td>Quebec</td><td class="num">11,108</td><td class="num">910</td><td class="num">2,390</td><td class="num">9,010</td><td class="num">10.1%</td><td class="num">26.5%</td></tr>
<tr><td class="num">5</td><td><a href="/location/saint-colomban/#education">Saint-Colomban</a></td><td>Quebec</td><td class="num">17,740</td><td class="num">1,800</td><td class="num">3,590</td><td class="num">13,650</td><td class="num">13.2%</td><td class="num">26.3%</td></tr>
<tr><td class="num">6</td><td><a href="/location/saint-f-licien/#education">Saint-Félicien</a></td><td>Quebec</td><td class="num">10,089</td><td class="num">1,115</td><td class="num">2,110</td><td class="num">8,315</td><td class="num">13.4%</td><td class="num">25.4%</td></tr>
<tr><td class="num">7</td><td><a href="/location/dolbeau-mistassini/#education">Dolbeau-Mistassini</a></td><td>Quebec</td><td class="num">13,718</td><td class="num">1,275</td><td class="num">2,735</td><td class="num">11,065</td><td class="num">11.5%</td><td class="num">24.7%</td></tr>
<tr><td class="num">8</td><td><a href="/location/lavaltrie/#education">Lavaltrie</a></td><td>Quebec</td><td class="num">14,425</td><td class="num">1,040</td><td class="num">2,850</td><td class="num">11,575</td><td class="num">9.0%</td><td class="num">24.6%</td></tr>
<tr><td class="num">9</td><td><a href="/location/beauharnois/#education">Beauharnois</a></td><td>Quebec</td><td class="num">13,638</td><td class="num">1,235</td><td class="num">2,780</td><td class="num">11,295</td><td class="num">10.9%</td><td class="num">24.6%</td></tr>
<tr><td class="num">10</td><td><a href="/location/saint-hippolyte-municipalit-m/#education">Saint-Hippolyte</a></td><td>Quebec</td><td class="num">10,669</td><td class="num">1,405</td><td class="num">2,180</td><td class="num">8,880</td><td class="num">15.8%</td><td class="num">24.5%</td></tr>
 </tbody>
 </table>
 </div>

 <p><a href="/location/lavaltrie/#education">Lavaltrie</a> (2,850 of 11,575) ranks just ahead of <a href="/location/beauharnois/#education">Beauharnois</a> (2,780 of 11,295). Both round to 24.6%.</p>

 <p>Random rounding moves a share more when the population aged 15 and over is small. Saint-Lin--Laurentides' denominator is 18,245 people. Saguenay's is 119,590, and Toronto's is 2,377,950. A few people rounded into or out of a count change the first decimal in the smaller place and do not change it in the larger one. The ranks above use the published counts as stored.</p>

 <h2>Movers, parents, and career changers</h2>
 <p>A mover comparing cities is looking at the credentials of people aged 15 and over who already live there. Hiring rules and job postings sit outside this census question. <a href="/location/oakville-town-t/#education">Oakville</a> and <a href="/location/saguenay/#education">Saguenay</a> answer different questions: 47.9% with a bachelor's degree or higher in Oakville, 23.2% with a trades certificate in Saguenay. <a href="/location/burlington/#education">Burlington</a>, next door to Oakville, is 35.6% (54,880 of 154,075) on bachelor's degrees and 4.3% (6,550 of 154,075) on trades certificates. The paired write-ups are <a href="/blog/oakville-vs-burlington-2021-census/">Oakville vs Burlington</a>, <a href="/blog/toronto-vs-vancouver-2021-census/">Toronto vs Vancouver</a>, <a href="/blog/montreal-vs-quebec-2021-census/">Montréal vs Québec</a>, and <a href="/blog/sherbrooke-vs-trois-rivieres-2021-census/">Sherbrooke vs Trois-Rivières</a>.</p>

 <p>A parent reading a "most educated" list is reading one credential. The census records the highest certificate, diploma, or degree of residents aged 15 and over. <a href="/location/norfolk-county/#education">Norfolk County</a> is last on bachelor's degrees, at 12.5%, with a college share of 25.5%, above the Canada figure. Its postsecondary share, 47.2%, remains below Canada's 57.2%.</p>

 <p>Someone changing fields can read the ratio the same way: which credential is more common among the adults already there. Oakville has 16.95 bachelor's degrees for every trades certificate. Mirabel has 1.49 trades certificates for every bachelor's degree. Canada has 3.06. Classroom seats and current job openings sit outside this table. A trades certificate, a college or CEGEP diploma, and a bachelor's degree are three different highest credentials in the same count. The location page has the rest of the breakdown.</p>

 <h2>Compare a place yourself</h2>
 <p>Open any linked place for the full education breakdown, or set two places side by side in the <a href="/compare/">comparison tool</a>. The education, commute, occupation, and industry sections use the same anchors on location pages and in that tool. The worked-at-home ranking is in <a href="/blog/canadas-top-work-from-home-cities/">Canada's top work-from-home cities</a>. The occupation ranking is in <a href="/blog/canadas-trades-heavy-towns/">Canada's trades-heavy towns</a>.</p>

 <h2>Sources</h2>
 <p>Education counts, including bachelor's degree or higher, apprenticeship or trades certificate, college or CEGEP, and the population aged 15 and over, plus population and the occupation counts cited for comparison, are from the <a href="https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/prof/index.cfm?Lang=E" target="_blank" rel="noopener">Statistics Canada 2021 Census of Population (Census Profile)</a>, as stored for each place in the Canadian Data Insights location file. Shares on this page are calculated here from those published counts. See <a href="/sources/">how this site handles census data</a>. Statistics Canada data is used under the <a href="https://open.canada.ca/en/open-government-licence-canada" target="_blank" rel="noopener">Open Government Licence – Canada</a>. This post is by Andrew.</p>
 `,
 },

 {
 title: "Canadian News Deep-Dives — October 30, 2026: Ottawa's $1.6B Cohere Stake, 735 CRA Job Notices, Who Falls Back Nov. 1",
 slug: "canadian-news-roundup-2026-10-30",
 date: "October 30, 2026",
 category: "News",
 readTime: "8 min read",
 author: "Andrew",
 heroImage: "/images/blog/canadian-news-roundup-2026-10-30.png",
 chartType: 'bar',
 chartTitle: "Population by Nov. 1 clock change, 2021 Census (millions; whole-province totals)",
 chartData: [
 { name: "Still fall back (ON, QC, Atlantic)", value: 25.14 },
 { name: "Stay put (BC, AB, MB, SK, NWT, YT)", value: 11.82 },
 ],
 excerpt: "Three deep-dives: why Ottawa is buying up to $1.6 billion of Toronto AI company Cohere and what it gets in return, what 735 workforce adjustment notices mean at the Canada Revenue Agency, and which Canadians will and won't turn their clocks back on Sunday.",
 content: `
 <p><strong>TL;DR:</strong> Today's three most-searched Canadian news stories on Google Trends Canada, explained in depth with 2021 Census context. Ottawa will invest up to <strong>$1.6 billion</strong> for a stake in Toronto-based AI company Cohere, tied to 1,000 jobs and $1.7 billion in Canadian computing by 2030. The Canada Revenue Agency sent <strong>735</strong> workforce adjustment notices, with up to 260 employees expected to leave. And on Sunday, Nov. 1, most of Ontario, Quebec and Atlantic Canada fall back an hour while B.C., Alberta and Manitoba don't.</p>

 <h2 id="cohere-investment">1. Ottawa will invest up to $1.6 billion in Cohere. Here's what it gets in return</h2>
 <p>On Thursday, Oct. 29, Prime Minister Mark Carney announced the federal government's commitment to make an equity investment of up to <strong>$1.6 billion</strong> in Cohere, the Toronto-founded company that builds secure AI systems for businesses and governments. The government calls it a commercial investment, made alongside private investors including NVIDIA, Bell and Germany's Schwarz Group, and paid out in stages (Prime Minister of Canada).</p>
 <div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#eef0f5;"><iframe src="https://www.youtube-nocookie.com/embed/SVFir9NdbGo" title="Why Ottawa Is Buying a Piece of Cohere" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
 <p><strong>The strings attached:</strong> Cohere will create at least <strong>1,000</strong> new high-paying Canadian technical jobs by 2030, commit at least <strong>$1.7 billion</strong> to additional computing infrastructure in Canada by 2030, and keep its Canadian incorporation and headquarters. Ottawa says it will get regular reporting on progress against those commitments. "Cohere will stay Canadian, creating more opportunities for our workers and businesses. Its incorporation and headquarters will remain here," Carney said (CBC News).</p>
 <p><strong>The bigger round:</strong> the federal money is part of a planned <strong>$7-billion</strong> financing that would value Cohere at <strong>$35.7 billion</strong>, which The Globe and Mail says is the largest-ever financing by a Canadian startup. Schwarz Group, owner of Lidl and Kaufland, led the round after pledging $780 million in April as part of Cohere's merger with German AI developer Aleph Alpha. Cohere has completed only an initial close and did not say how much has been committed so far (CBC News).</p>
 <p><strong>Not the first cheque:</strong> in 2024, a federal industrial fund awarded Cohere $240 million to help pay for computing power to train its models on Canadian soil. AI Minister Evan Solomon said the new investment was made on "very favourable commercial terms" and will be paid out as Cohere reaches its hiring and infrastructure commitments (The Globe and Mail).</p>
 <p><strong>By the numbers (2021 Census):</strong> in <a href="/location/toronto/#occupation">Toronto</a>, where Cohere was founded, <strong>10.5%</strong> of the labour force (159,770 of 1,518,420) worked in natural and applied sciences occupations, compared with <strong>8.2%</strong> for <a href="/location/canada/#occupation">Canada</a>. That is the talent pool the 1,000-job pledge draws on.</p>
 <p><strong>Why it matters to you:</strong> Canadians, through the federal government, will own part of a private AI company. Whether that pays off depends on Cohere hitting its 2030 targets, which the government says it will track. This is general information, not investment advice.</p>
 <p>Sources: <a href="https://www.pm.gc.ca/en/news/news-releases/2026/10/29/canada-announces-landmark-investment-cohere-scale-secure-sovereign-ai" target="_blank" rel="noopener">Prime Minister of Canada</a> · <a href="https://www.cbc.ca/news/business/canada-cohere-ai-investment-9.7401367" target="_blank" rel="noopener">CBC News</a> · <a href="https://www.theglobeandmail.com/business/article-ottawa-buys-stake-in-cohere-357-billion-in-new-financing/" target="_blank" rel="noopener">The Globe and Mail</a></p>

 <h2 id="cra-workforce-adjustment">2. The CRA sends 735 workforce adjustment notices: who is affected</h2>
 <p>On Wednesday, Oct. 28, the Canada Revenue Agency told <strong>735</strong> executive and non-executive employees at its Ottawa headquarters and regional offices that their positions may be affected by workforce adjustments. The CRA gave guarantees of continued employment to <strong>110</strong> of them, mainly in compliance, and says up to <strong>260</strong> employees are expected to leave (CTV News Ottawa; Ottawa Citizen).</p>
 <div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#eef0f5;"><iframe src="https://www.youtube-nocookie.com/embed/fNICEAsUiqA" title="Will CRA Job Cuts Slow Your Tax Service?" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
 <p><strong>Which branches:</strong> the Union of Taxation Employees said 534 of its members got notices, in the Appeals Branch; Assessment, Benefit, and Service Branch; Commissioner's Office; Human Resources Branch; and Compliance Programs Branch. Reasons cited include the end of pandemic-related funding and workloads, expenditure reductions, organizational streamlining, centralization, and digital or self-service delivery. A CRA spokesperson confirmed no letters went to contact centre workers, who field taxpayers' calls (Ottawa Citizen).</p>
 <p><strong>A notice is not a layoff, yet:</strong> affected employees may receive a guarantee of a reasonable job offer, a voluntary departure option, or go through a layoff determination process (UTE; PSAC).</p>
 <p><strong>The bigger picture:</strong> the CRA employed <strong>48,774</strong> people as of March 31, 2026, down from 52,499 a year earlier. Its 2026-27 departmental plan shows $1.2 billion in spending reductions over three years, and in April it said up to 210 jobs were being cut, mainly linked to winding down the federal fuel charge. Budget 2025 set out a plan to shrink the federal public service by 28,000 positions by 2029. The Public Service Alliance of Canada has announced a strike vote for roughly 120,000 federal public servants (CTV News).</p>
 <p><strong>By the numbers (2021 Census):</strong> in <a href="/location/ottawa/#industry">Ottawa</a>, <strong>21.1%</strong> of the labour force (116,235 of 549,985) worked in public administration, more than three times the national share of <strong>6.2%</strong> (<a href="/location/canada/#industry">Canada</a>). Federal cuts land hardest on the capital's economy.</p>
 <p><strong>Why it matters to you:</strong> the CRA says services to Canadians will continue without disruption and contact centres were spared this round. If you are a federal employee who got a notice, read it closely and note its deadlines.</p>
 <p>Sources: <a href="https://www.ctvnews.ca/ottawa/article/canada-revenue-agency-issues-new-round-of-workforce-adjustment-notices-union/" target="_blank" rel="noopener">CTV News Ottawa</a> · <a href="https://ottawacitizen.com/public-service/new-round-of-canada-revenue-agency-layoffs-targeting-260-employees" target="_blank" rel="noopener">Ottawa Citizen</a> · <a href="https://www.ute-sei.org/fr/nouvelles-evenements/nouvelles/nouveau-reamenagement-des-effectifs-534-membres-touches" target="_blank" rel="noopener">Union of Taxation Employees</a> · <a href="https://psacunion.ca/faq-workforce-adjustment-canada-revenue-agency" target="_blank" rel="noopener">PSAC</a></p>

 <h2 id="time-change">3. Clocks fall back Sunday, but not everywhere: who's ending the time change</h2>
 <p>On Sunday, <strong>Nov. 1</strong>, most of Ontario, Quebec and the Atlantic provinces will turn their clocks back an hour for the end of daylight saving time. Most of British Columbia, as well as Alberta, Manitoba and the Northwest Territories, are no longer changing their clocks, joining Yukon and Saskatchewan (CBC News).</p>
 <p><strong>Province by province:</strong> B.C.'s last change was March 8, 2026; its year-round time is now called Pacific time (PCT), UTC-7 (Government of British Columbia). Alberta has adopted permanent Alberta Time (ABT), previously Mountain Daylight Time (Government of Alberta). Manitoba Premier Wab Kinew announced the change in September after more than 90% of 72,000 online votes said time was up for the switch (Winnipeg Free Press). And Quebec Premier Paul St-Pierre Plamondon said Wednesday his government is moving to end the clock change, without yet deciding which time to keep (CBC News).</p>
 <p><strong>The health debate:</strong> sleep researchers say permanent standard time, the time we return to in the fall, fits the body's internal clock better than permanent daylight time, which several provinces chose. University of Calgary professor Michael Antle said standard time would have been better for Alberta, given its already-late winter sunrises: "It's not the choice I would have made" (CBC News).</p>
 <p><strong>By the numbers (2021 Census):</strong> the six provinces and territories that won't fall back had <strong>11,819,474</strong> residents, about <strong>32%</strong> of <a href="/location/canada/">Canada's</a> 36,991,981 (<a href="/location/british-columbia/">B.C.</a> 5,000,879; <a href="/location/alberta/">Alberta</a> 4,262,635; <a href="/location/manitoba/">Manitoba</a> 1,342,153; <a href="/location/saskatchewan/">Saskatchewan</a> 1,132,505; N.W.T. 41,070; Yukon 40,232). <a href="/location/ontario/">Ontario</a>, <a href="/location/quebec/">Quebec</a> and the four Atlantic provinces, which still change, had 25,135,649 (about 68%). These are whole-province totals; local exceptions, such as northwestern Ontario and parts of B.C., are not adjusted.</p>
 <p><strong>Why it matters to you:</strong> from Sunday, the time gap between Toronto and Calgary or Vancouver changes for the winter. Double-check cross-province meetings, flights and appointments, and update older devices that may not adjust automatically.</p>
 <p>Sources: <a href="https://www.cbc.ca/news/canada/daylight-saving-time-canada-health-9.7399791" target="_blank" rel="noopener">CBC News</a> · <a href="https://www.winnipegfreepress.com/breakingnews/2026/10/29/manitoba-daylight-time-permanent" target="_blank" rel="noopener">Winnipeg Free Press</a> · <a href="https://www2.gov.bc.ca/gov/content/governments/celebrating-british-columbia/daylight-saving-time" target="_blank" rel="noopener">Government of British Columbia</a> · <a href="https://www.alberta.ca/albertas-new-time-system-abt" target="_blank" rel="noopener">Government of Alberta</a></p>

 <h2>Data sources</h2>
 <p>Population, occupation and industry figures are from the 2021 Census of Population as presented on Canadian Data Insights location pages; shares are calculated from those counts. See <a href="/sources/">Data sources</a>. News facts are from the linked reports. Topics were chosen using Google Trends Canada interest on the morning of Oct. 30, 2026.</p>
 `,
 },
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

