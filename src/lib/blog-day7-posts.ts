import type { BlogPost } from './blog-data';

/**
 * Day 7 StatsCan posts. Every count, share, median, index, and price is taken
 * from src/data/statcan/housing.json, cpi.json, or food-prices.json.
 * Shares use one decimal, matching location pages (`pct` / toFixed(1)).
 * CPI 12-month changes use the same one-decimal formatting as the cost-of-living page.
 */
export const day7Posts: BlogPost[] = [
  {
    title: 'Who owns, who rents, and where shelter takes 30% of income',
    slug: 'homeownership-and-shelter-costs-by-cma',
    date: 'November 2, 2026',
    category: 'Housing',
    readTime: '10 min read',
    author: 'Andrew',
    heroImage: '/images/blog/homeownership-and-shelter-costs-by-cma.png',
    chartType: 'bar',
    chartTitle: 'Households spending 30% or more on shelter, census metropolitan areas (percent)',
    chartData: [
      { name: 'Toronto CMA', value: 30.3 },
      { name: 'Vancouver CMA', value: 29.6 },
      { name: 'Victoria CMA', value: 25.9 },
      { name: 'Kelowna CMA', value: 25.5 },
      { name: 'Barrie CMA', value: 25.2 },
      { name: 'Abbotsford-Mission', value: 23.4 },
      { name: 'Oshawa CMA', value: 23.4 },
      { name: 'Nanaimo CMA', value: 23.3 },
    ],
    excerpt:
      'In the 2021 Census, 66.5% of Canada’s private households owned their home, and 20.9% spent 30% or more of income on shelter. Toronto (CMA) had the highest shelter burden of 41 census metropolitan areas, at 30.3%. Montréal (CMA) had the lowest owner share, at 54.4%.',
    content: `
 <p>In the 2021 Census, <strong>66.5%</strong> of <a href="/location/canada/#housing">Canada</a>’s private households owned their home: <strong>9,807,720</strong> of <strong>14,744,570</strong>. Renters were <strong>33.5%</strong> (<strong>4,936,850</strong>). Across those households, <strong>20.9%</strong> spent 30% or more of income on shelter (<strong>3,074,715</strong>). The median monthly shelter cost was <strong>$1,160</strong>. Owners’ median was <strong>$1,240</strong>. Renters’ median was <strong>$1,070</strong>.</p>

 <p>Among owner households, <strong>14.8%</strong> spent 30% or more of income on shelter (<strong>1,450,000</strong> of 9,807,720). Among renter households, the share was <strong>32.9%</strong> (<strong>1,624,715</strong> of 4,936,850). Both shares are the published count divided by the published household total for that group, rounded to one decimal the same way the location pages do.</p>

 <p>The extract behind this page has <strong>166</strong> geographies: Canada, 13 provinces and territories, <strong>41</strong> census metropolitan areas, and <strong>111</strong> census agglomerations. Tenure and the 30% count are from Statistics Canada table <a href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=9810025201" target="_blank" rel="noopener">98-10-0252-01</a>. Median shelter cost is from table <a href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=9810025301" target="_blank" rel="noopener">98-10-0253-01</a>. The reference period is 2021. The figures were copied from those tables on November 1, 2026.</p>

 <p>Census counts are randomly rounded, so owner plus renter can differ slightly from the household total. In <a href="/location/toronto/#housing">Toronto (CMA), Ont.</a>, owner households (1,471,805) plus renter households (789,420) equal 2,261,225, while the published household total is 2,261,220. This page does not fill that gap, and it does not adjust the shares.</p>

 <h2 id="which-geography">The number belongs to the published geography</h2>
 <p>A census metropolitan area is wider than the city it is named for. The housing block on the Toronto page is <strong>Toronto (CMA), Ont.</strong> That block is the census metropolitan area. <a href="/location/mississauga/">Mississauga</a>, <a href="/location/brampton/">Brampton</a>, <a href="/location/vaughan/">Vaughan</a>, <a href="/location/markham/">Markham</a>, and <a href="/location/oakville-town-t/">Oakville</a> have no housing block, because table 98-10-0252-01 does not publish those municipalities on their own.</p>

 <p>The same rule applies elsewhere. <a href="/location/surrey/">Surrey</a>, <a href="/location/burnaby/">Burnaby</a>, <a href="/location/richmond/">Richmond</a>, and <a href="/location/coquitlam/">Coquitlam</a> do not show <a href="/location/vancouver/#housing">Vancouver (CMA), B.C.</a> <a href="/location/laval/">Laval</a> and <a href="/location/longueuil/">Longueuil</a> do not show <a href="/location/montr-al/#housing">Montréal (CMA), Que.</a> <a href="/location/niagara-falls/">Niagara Falls</a> does not show <a href="/location/st-catharines/#housing">St. Catharines - Niagara (CMA), Ont.</a> Where a link below names a CMA or a CA, the housing anchor on that page is that published area.</p>

 <p>Two pages can show one area. <a href="/location/abbotsford/#housing">Abbotsford - Mission (CMA), B.C.</a> is the housing block on both the Abbotsford page and the <a href="/location/mission-district-municipality-dm/#housing">Mission page</a>. <a href="/location/kitchener/#housing">Kitchener - Cambridge - Waterloo (CMA), Ont.</a> is the housing block on the Kitchener, <a href="/location/cambridge/#housing">Cambridge</a>, and <a href="/location/waterloo/#housing">Waterloo</a> pages. Each of those pages is showing the census metropolitan area, not the municipality alone.</p>

 <h2 id="shelter-burden">Where 30% of income goes to shelter</h2>
 <p>Ranked among the 41 census metropolitan areas, <a href="/location/toronto/#housing">Toronto (CMA), Ont.</a> is first. <strong>30.3%</strong> of its households spent 30% or more of income on shelter (<strong>685,435</strong> of <strong>2,261,220</strong>). Its median shelter cost was <strong>$1,700</strong>. Owners in that CMA: <strong>25.1%</strong> (<strong>369,525</strong> of <strong>1,471,805</strong>). Renters: <strong>40.0%</strong> (<strong>315,910</strong> of <strong>789,420</strong>). Owner households were <strong>65.1%</strong> of CMA households.</p>

 <p><a href="/location/ontario/#housing">Ontario</a> sits below that CMA on both measures. The province’s 30% share was <strong>24.1%</strong> (<strong>1,312,095</strong> of <strong>5,440,255</strong>), and its median shelter cost was <strong>$1,370</strong>. Owner households were <strong>68.3%</strong> (<strong>3,718,255</strong> of 5,440,255). Those figures are the province. Toronto (CMA) is one geography inside it.</p>

 <p>Shares in the tables are one decimal. Where two areas round to the same tenth, the one with the larger unrounded share is listed first. Abbotsford - Mission (15,595 of 66,510) is just ahead of Oshawa (34,865 of 148,770). Calgary (126,110 of 562,780) is just ahead of Edmonton (122,005 of 545,595).</p>

 <div class="table-wrap">
 <table>
 <thead>
 <tr>
 <th class="num">Rank</th>
 <th>Census metropolitan area</th>
 <th class="num">Spending 30% or more</th>
 <th class="num">Households</th>
 <th class="num">Share</th>
 <th class="num">Median shelter</th>
 </tr>
 </thead>
 <tbody>
 <tr><td class="num">1</td><td><a href="/location/toronto/#housing">Toronto (CMA), Ont.</a></td><td class="num">685,435</td><td class="num">2,261,220</td><td class="num">30.3%</td><td class="num">$1,700</td></tr>
 <tr><td class="num">2</td><td><a href="/location/vancouver/#housing">Vancouver (CMA), B.C.</a></td><td class="num">307,440</td><td class="num">1,037,535</td><td class="num">29.6%</td><td class="num">$1,550</td></tr>
 <tr><td class="num">3</td><td><a href="/location/victoria/#housing">Victoria (CMA), B.C.</a></td><td class="num">45,115</td><td class="num">173,890</td><td class="num">25.9%</td><td class="num">$1,370</td></tr>
 <tr><td class="num">4</td><td><a href="/location/kelowna/#housing">Kelowna (CMA), B.C.</a></td><td class="num">22,345</td><td class="num">87,615</td><td class="num">25.5%</td><td class="num">$1,410</td></tr>
 <tr><td class="num">5</td><td><a href="/location/barrie/#housing">Barrie (CMA), Ont.</a></td><td class="num">19,735</td><td class="num">78,300</td><td class="num">25.2%</td><td class="num">$1,640</td></tr>
 <tr><td class="num">6</td><td><a href="/location/abbotsford/#housing">Abbotsford - Mission (CMA), B.C.</a></td><td class="num">15,595</td><td class="num">66,510</td><td class="num">23.4%</td><td class="num">$1,370</td></tr>
 <tr><td class="num">7</td><td><a href="/location/oshawa/#housing">Oshawa (CMA), Ont.</a></td><td class="num">34,865</td><td class="num">148,770</td><td class="num">23.4%</td><td class="num">$1,620</td></tr>
 <tr><td class="num">8</td><td><a href="/location/nanaimo/#housing">Nanaimo (CMA), B.C.</a></td><td class="num">11,415</td><td class="num">48,910</td><td class="num">23.3%</td><td class="num">$1,210</td></tr>
 <tr><td class="num">9</td><td><a href="/location/hamilton/#housing">Hamilton (CMA), Ont.</a></td><td class="num">70,360</td><td class="num">306,815</td><td class="num">22.9%</td><td class="num">$1,350</td></tr>
 <tr><td class="num">10</td><td><a href="/location/kingston/#housing">Kingston (CMA), Ont.</a></td><td class="num">16,485</td><td class="num">73,165</td><td class="num">22.5%</td><td class="num">$1,270</td></tr>
 <tr><td class="num">11</td><td><a href="/location/calgary/#housing">Calgary (CMA), Alta.</a></td><td class="num">126,110</td><td class="num">562,780</td><td class="num">22.4%</td><td class="num">$1,550</td></tr>
 <tr><td class="num">12</td><td><a href="/location/edmonton/#housing">Edmonton (CMA), Alta.</a></td><td class="num">122,005</td><td class="num">545,595</td><td class="num">22.4%</td><td class="num">$1,470</td></tr>
 </tbody>
 </table>
 </div>

 <p>Toronto (CMA) is also first among all 166 geographies in the extract, not only among census metropolitan areas. The next two are census agglomerations, not CMAs. <a href="/location/orillia/#housing">Orillia (CA), Ont.</a> is third, at <strong>26.6%</strong> (<strong>3,835</strong> of <strong>14,425</strong>). <a href="/location/collingwood-town-t/#housing">Collingwood (CA), Ont.</a> is fourth, at <strong>26.5%</strong> (<strong>2,960</strong> of <strong>11,170</strong>). Both are above <a href="/location/victoria/#housing">Victoria (CMA), B.C.</a></p>

 <p>At the other end of the 41 census metropolitan areas, <a href="/location/saguenay/#housing">Saguenay (CMA), Que.</a> is last, at <strong>11.7%</strong> (<strong>8,770</strong> of <strong>74,645</strong>). <a href="/location/trois-rivi-res/#housing">Trois-Rivières (CMA), Que.</a> is next, at <strong>12.4%</strong> (<strong>9,470</strong> of <strong>76,260</strong>), then <a href="/location/drummondville/#housing">Drummondville (CMA), Que.</a> at <strong>13.0%</strong> (<strong>5,925</strong> of <strong>45,420</strong>). <a href="/location/qu-bec/#housing">Québec (CMA), Que.</a> and <a href="/location/saint-john/#housing">Saint John (CMA), N.B.</a> both round to <strong>14.3%</strong>. Québec’s unrounded share is higher: 55,215 of 386,475, against 7,955 of 55,820 in Saint John.</p>

 <h2 id="owner-share">Who owns</h2>
 <p><a href="/location/montr-al/#housing">Montréal (CMA), Que.</a> has the lowest owner share of the 41 census metropolitan areas, <strong>54.4%</strong> (<strong>997,205</strong> of <strong>1,834,620</strong>). Renters in that CMA are <strong>837,420</strong>, which is <strong>45.6%</strong> of CMA households. The 30% share is <strong>19.5%</strong> (<strong>357,915</strong>). The median shelter cost is <strong>$1,010</strong>. The owner median is <strong>$1,310</strong>. The renter median is <strong>$880</strong>. Owners spending 30% or more: <strong>12.7%</strong> (<strong>126,355</strong> of 997,205). Renters spending 30% or more: <strong>27.7%</strong> (<strong>231,555</strong> of 837,420).</p>

 <p>The lowest owner share among the 111 census agglomerations is lower still. <a href="/location/saint-hyacinthe/#housing">Saint-Hyacinthe (CA), Que.</a> is at <strong>49.6%</strong> (<strong>13,820</strong> of <strong>27,855</strong>), below every census metropolitan area. That page shows the census agglomeration. Nunavut, in the province and territory table below, is lower than Saint-Hyacinthe.</p>

 <div class="table-wrap">
 <table>
 <thead>
 <tr>
 <th class="num">Rank</th>
 <th>Census metropolitan area</th>
 <th class="num">Owner households</th>
 <th class="num">Households</th>
 <th class="num">Owner share</th>
 </tr>
 </thead>
 <tbody>
 <tr><td class="num">41</td><td><a href="/location/montr-al/#housing">Montréal (CMA), Que.</a></td><td class="num">997,205</td><td class="num">1,834,620</td><td class="num">54.4%</td></tr>
 <tr><td class="num">40</td><td><a href="/location/sherbrooke/#housing">Sherbrooke (CMA), Que.</a></td><td class="num">57,150</td><td class="num">104,430</td><td class="num">54.7%</td></tr>
 <tr><td class="num">39</td><td><a href="/location/trois-rivi-res/#housing">Trois-Rivières (CMA), Que.</a></td><td class="num">43,590</td><td class="num">76,260</td><td class="num">57.2%</td></tr>
 <tr><td class="num">38</td><td><a href="/location/qu-bec/#housing">Québec (CMA), Que.</a></td><td class="num">225,055</td><td class="num">386,475</td><td class="num">58.2%</td></tr>
 <tr><td class="num">37</td><td><a href="/location/drummondville/#housing">Drummondville (CMA), Que.</a></td><td class="num">26,570</td><td class="num">45,420</td><td class="num">58.5%</td></tr>
 <tr><td class="num">36</td><td><a href="/location/halifax-regional-municipality-rgm/#housing">Halifax (CMA), N.S.</a></td><td class="num">117,045</td><td class="num">199,765</td><td class="num">58.6%</td></tr>
 <tr><td class="num">35</td><td><a href="/location/victoria/#housing">Victoria (CMA), B.C.</a></td><td class="num">107,365</td><td class="num">173,890</td><td class="num">61.7%</td></tr>
 <tr><td class="num">34</td><td><a href="/location/vancouver/#housing">Vancouver (CMA), B.C.</a></td><td class="num">644,275</td><td class="num">1,037,535</td><td class="num">62.1%</td></tr>
 </tbody>
 </table>
 </div>

 <p>Rank 41 is the lowest owner share. Rank 1, below, is the highest. Five of the eight lowest are in Quebec. <a href="/location/oshawa/#housing">Oshawa (CMA), Ont.</a> leads the 41, at <strong>74.9%</strong> (<strong>111,430</strong> of <strong>148,770</strong>).</p>

 <div class="table-wrap">
 <table>
 <thead>
 <tr>
 <th class="num">Rank</th>
 <th>Census metropolitan area</th>
 <th class="num">Owner households</th>
 <th class="num">Households</th>
 <th class="num">Owner share</th>
 </tr>
 </thead>
 <tbody>
 <tr><td class="num">1</td><td><a href="/location/oshawa/#housing">Oshawa (CMA), Ont.</a></td><td class="num">111,430</td><td class="num">148,770</td><td class="num">74.9%</td></tr>
 <tr><td class="num">2</td><td><a href="/location/chilliwack/#housing">Chilliwack (CMA), B.C.</a></td><td class="num">30,200</td><td class="num">40,865</td><td class="num">73.9%</td></tr>
 <tr><td class="num">3</td><td><a href="/location/barrie/#housing">Barrie (CMA), Ont.</a></td><td class="num">57,410</td><td class="num">78,300</td><td class="num">73.3%</td></tr>
 <tr><td class="num">4</td><td><a href="/location/windsor/#housing">Windsor (CMA), Ont.</a></td><td class="num">119,125</td><td class="num">164,730</td><td class="num">72.3%</td></tr>
 <tr><td class="num">5</td><td><a href="/location/kamloops/#housing">Kamloops (CMA), B.C.</a></td><td class="num">32,380</td><td class="num">45,110</td><td class="num">71.8%</td></tr>
 <tr><td class="num">6</td><td><a href="/location/brantford/#housing">Brantford (CMA), Ont.</a></td><td class="num">39,615</td><td class="num">55,515</td><td class="num">71.4%</td></tr>
 <tr><td class="num">7</td><td><a href="/location/st-catharines/#housing">St. Catharines - Niagara (CMA), Ont.</a></td><td class="num">127,280</td><td class="num">178,440</td><td class="num">71.3%</td></tr>
 <tr><td class="num">8</td><td><a href="/location/calgary/#housing">Calgary (CMA), Alta.</a></td><td class="num">396,760</td><td class="num">562,780</td><td class="num">70.5%</td></tr>
 </tbody>
 </table>
 </div>

 <h2 id="median-shelter">Median shelter cost</h2>
 <p>The median is a different ranking from tenure and from the 30% share. <a href="/location/vancouver/#housing">Vancouver (CMA), B.C.</a> and <a href="/location/calgary/#housing">Calgary (CMA), Alta.</a> both have a median monthly shelter cost of <strong>$1,550</strong>. Vancouver’s owner share is <strong>62.1%</strong> (644,275 of 1,037,535) and its 30% share is <strong>29.6%</strong> (307,440 of 1,037,535). Calgary’s owner share is <strong>70.5%</strong> (396,760 of 562,780) and its 30% share is <strong>22.4%</strong> (126,110 of 562,780). Vancouver owners spending 30% or more: <strong>24.3%</strong> (<strong>156,800</strong> of 644,275). Vancouver renters: <strong>38.3%</strong> (<strong>150,640</strong> of <strong>393,260</strong>). Calgary owners: <strong>17.5%</strong> (<strong>69,415</strong> of 396,760). Calgary renters: <strong>34.1%</strong> (<strong>56,695</strong> of <strong>166,020</strong>).</p>

 <p>When two medians are equal, they share a rank. The area with more households is listed first. That order is not a difference in the median.</p>

 <div class="table-wrap">
 <table>
 <thead>
 <tr>
 <th class="num">Rank</th>
 <th>Census metropolitan area</th>
 <th class="num">Median shelter</th>
 <th class="num">Owner share</th>
 <th class="num">Spending 30% or more</th>
 </tr>
 </thead>
 <tbody>
 <tr><td class="num">1</td><td><a href="/location/toronto/#housing">Toronto (CMA), Ont.</a></td><td class="num">$1,700</td><td class="num">65.1%</td><td class="num">30.3%</td></tr>
 <tr><td class="num">2</td><td><a href="/location/barrie/#housing">Barrie (CMA), Ont.</a></td><td class="num">$1,640</td><td class="num">73.3%</td><td class="num">25.2%</td></tr>
 <tr><td class="num">3</td><td><a href="/location/oshawa/#housing">Oshawa (CMA), Ont.</a></td><td class="num">$1,620</td><td class="num">74.9%</td><td class="num">23.4%</td></tr>
 <tr><td class="num">4</td><td><a href="/location/vancouver/#housing">Vancouver (CMA), B.C.</a></td><td class="num">$1,550</td><td class="num">62.1%</td><td class="num">29.6%</td></tr>
 <tr><td class="num">4</td><td><a href="/location/calgary/#housing">Calgary (CMA), Alta.</a></td><td class="num">$1,550</td><td class="num">70.5%</td><td class="num">22.4%</td></tr>
 <tr><td class="num">6</td><td><a href="/location/guelph/#housing">Guelph (CMA), Ont.</a></td><td class="num">$1,480</td><td class="num">68.7%</td><td class="num">22.0%</td></tr>
 <tr><td class="num">7</td><td><a href="/location/edmonton/#housing">Edmonton (CMA), Alta.</a></td><td class="num">$1,470</td><td class="num">68.8%</td><td class="num">22.4%</td></tr>
 <tr><td class="num">8</td><td><a href="/location/kitchener/#housing">Kitchener - Cambridge - Waterloo (CMA), Ont.</a></td><td class="num">$1,410</td><td class="num">64.6%</td><td class="num">21.9%</td></tr>
 <tr><td class="num">8</td><td><a href="/location/kelowna/#housing">Kelowna (CMA), B.C.</a></td><td class="num">$1,410</td><td class="num">69.8%</td><td class="num">25.5%</td></tr>
 </tbody>
 </table>
 </div>

 <p>The lowest medians among the 41 are in Quebec. <a href="/location/trois-rivi-res/#housing">Trois-Rivières (CMA), Que.</a> is lowest, at <strong>$695</strong>. Then <a href="/location/drummondville/#housing">Drummondville (CMA), Que.</a> at <strong>$740</strong>, <a href="/location/saguenay/#housing">Saguenay (CMA), Que.</a> at <strong>$755</strong>, and <a href="/location/sherbrooke/#housing">Sherbrooke (CMA), Que.</a> at <strong>$780</strong>.</p>

 <p>Census agglomerations extend past either CMA end. The highest median in the 166 geographies is <a href="/location/wood-buffalo-specialized-municipality-sm/#housing">Wood Buffalo (CA), Alta.</a>, at <strong>$2,300</strong>. Next are <a href="/location/yellowknife/#housing">Yellowknife (CA), N.W.T.</a> at <strong>$2,040</strong>, <a href="/location/squamish-district-municipality-dm/#housing">Squamish (CA), B.C.</a> at <strong>$2,000</strong>, and <a href="/location/okotoks-town-t/#housing">Okotoks (CA), Alta.</a> at <strong>$1,840</strong>. All four are above Toronto (CMA). The lowest median in the extract is <a href="/location/thetford-mines/#housing">Thetford Mines (CA), Que.</a>, at <strong>$584</strong>.</p>

 <h2 id="provinces">Provinces and territories</h2>
 <p>The same two tables publish Canada and every province and territory. <a href="/location/newfoundland-and-labrador/#housing">Newfoundland and Labrador</a> has the highest owner share, <strong>75.9%</strong> (<strong>168,660</strong> of <strong>222,275</strong>). <a href="/location/nunavut/#housing">Nunavut</a> has the lowest, <strong>19.2%</strong> (<strong>1,905</strong> of <strong>9,925</strong>). Among the ten provinces, <a href="/location/quebec/#housing">Quebec</a> is lowest, at <strong>59.9%</strong> (<strong>2,227,470</strong> of <strong>3,720,980</strong>).</p>

 <p><a href="/location/british-columbia/#housing">British Columbia</a> has the highest 30% share, <strong>25.4%</strong> (<strong>506,850</strong> of <strong>1,994,660</strong>). Nunavut has the lowest, <strong>5.6%</strong> (<strong>560</strong> of 9,925). Among the ten provinces, <a href="/location/new-brunswick/#housing">New Brunswick</a> is lowest, at <strong>12.9%</strong> (<strong>42,920</strong> of <strong>333,295</strong>).</p>

 <p><a href="/location/northwest-territories/#housing">Northwest Territories</a> has the highest median, <strong>$1,550</strong>. That is the same published median as Vancouver (CMA) and Calgary (CMA), for a different geography. Among the ten provinces, <a href="/location/alberta/#housing">Alberta</a> is highest, at <strong>$1,430</strong>. Nunavut’s median is <strong>$705</strong>, the lowest of the provinces and territories. Canada and <a href="/location/yukon/#housing">Yukon</a> both round to an owner share of 66.5% (Yukon is 11,000 of 16,530). <a href="/location/manitoba/#housing">Manitoba</a> and <a href="/location/prince-edward-island/#housing">Prince Edward Island</a> both round to 68.6%. New Brunswick and Newfoundland and Labrador both have a median of $800. Prince Edward Island and Quebec both have a median of $900.</p>

 <div class="table-wrap">
 <table>
 <thead>
 <tr>
 <th>Geography</th>
 <th class="num">Owner households</th>
 <th class="num">Households</th>
 <th class="num">Owner share</th>
 <th class="num">Spending 30% or more</th>
 <th class="num">Share</th>
 <th class="num">Median shelter</th>
 </tr>
 </thead>
 <tbody>
 <tr><td><a href="/location/canada/#housing">Canada</a></td><td class="num">9,807,720</td><td class="num">14,744,570</td><td class="num">66.5%</td><td class="num">3,074,715</td><td class="num">20.9%</td><td class="num">$1,160</td></tr>
 <tr><td><a href="/location/newfoundland-and-labrador/#housing">Newfoundland and Labrador</a></td><td class="num">168,660</td><td class="num">222,275</td><td class="num">75.9%</td><td class="num">32,390</td><td class="num">14.6%</td><td class="num">$800</td></tr>
 <tr><td><a href="/location/prince-edward-island/#housing">Prince Edward Island</a></td><td class="num">43,730</td><td class="num">63,710</td><td class="num">68.6%</td><td class="num">9,865</td><td class="num">15.5%</td><td class="num">$900</td></tr>
 <tr><td><a href="/location/nova-scotia/#housing">Nova Scotia</a></td><td class="num">283,280</td><td class="num">422,200</td><td class="num">67.1%</td><td class="num">75,475</td><td class="num">17.9%</td><td class="num">$940</td></tr>
 <tr><td><a href="/location/new-brunswick/#housing">New Brunswick</a></td><td class="num">245,110</td><td class="num">333,295</td><td class="num">73.5%</td><td class="num">42,920</td><td class="num">12.9%</td><td class="num">$800</td></tr>
 <tr><td><a href="/location/quebec/#housing">Quebec</a></td><td class="num">2,227,470</td><td class="num">3,720,980</td><td class="num">59.9%</td><td class="num">595,690</td><td class="num">16.0%</td><td class="num">$900</td></tr>
 <tr><td><a href="/location/ontario/#housing">Ontario</a></td><td class="num">3,718,255</td><td class="num">5,440,255</td><td class="num">68.3%</td><td class="num">1,312,095</td><td class="num">24.1%</td><td class="num">$1,370</td></tr>
 <tr><td><a href="/location/manitoba/#housing">Manitoba</a></td><td class="num">338,920</td><td class="num">494,010</td><td class="num">68.6%</td><td class="num">85,365</td><td class="num">17.3%</td><td class="num">$1,070</td></tr>
 <tr><td><a href="/location/saskatchewan/#housing">Saskatchewan</a></td><td class="num">298,500</td><td class="num">416,045</td><td class="num">71.7%</td><td class="num">71,445</td><td class="num">17.2%</td><td class="num">$1,060</td></tr>
 <tr><td><a href="/location/alberta/#housing">Alberta</a></td><td class="num">1,131,995</td><td class="num">1,595,570</td><td class="num">70.9%</td><td class="num">337,585</td><td class="num">21.2%</td><td class="num">$1,430</td></tr>
 <tr><td><a href="/location/british-columbia/#housing">British Columbia</a></td><td class="num">1,330,795</td><td class="num">1,994,660</td><td class="num">66.7%</td><td class="num">506,850</td><td class="num">25.4%</td><td class="num">$1,350</td></tr>
 <tr><td><a href="/location/yukon/#housing">Yukon</a></td><td class="num">11,000</td><td class="num">16,530</td><td class="num">66.5%</td><td class="num">2,665</td><td class="num">16.1%</td><td class="num">$1,300</td></tr>
 <tr><td><a href="/location/northwest-territories/#housing">Northwest Territories</a></td><td class="num">8,100</td><td class="num">15,110</td><td class="num">53.6%</td><td class="num">1,805</td><td class="num">11.9%</td><td class="num">$1,550</td></tr>
 <tr><td><a href="/location/nunavut/#housing">Nunavut</a></td><td class="num">1,905</td><td class="num">9,925</td><td class="num">19.2%</td><td class="num">560</td><td class="num">5.6%</td><td class="num">$705</td></tr>
 </tbody>
 </table>
 </div>

 <h2 id="mortgage">Owners with a mortgage, and where to open the table</h2>
 <p>In Canada, <strong>5,881,675</strong> owner households had a mortgage. Their median shelter cost was <strong>$1,840</strong>. Owners without a mortgage were <strong>3,926,045</strong>, and their median was <strong>$584</strong>. Those two counts add up to the 9,807,720 owner households. The mortgage split and those medians are from table 98-10-0253-01. The 30% counts are from table 98-10-0252-01.</p>

 <p>These 2021 shelter costs are a different statistic from the Consumer Price Index. The September 2026 index is table 18-10-0004-01, on the <a href="/cost-of-living/">cost-of-living page</a> and in <a href="/blog/cpi-september-2026/">September 2026 consumer prices</a>. This post does not compare a 2021 median shelter cost with that index.</p>

 <p>Open a linked place for the full housing block, including shelter-cost bands. The geography named in the link is the geography on the page.</p>

 <h2 id="sources">Sources</h2>
 <p>Household counts, tenure, and households spending 30% or more of income on shelter are from Statistics Canada table <a href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=9810025201" target="_blank" rel="noopener">98-10-0252-01</a>, reference period 2021. Median monthly shelter costs, and the mortgage split, are from table <a href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=9810025301" target="_blank" rel="noopener">98-10-0253-01</a>, reference period 2021. Shares on this page are calculated here from those published counts. The extract was taken on November 1, 2026. See <a href="/sources/">how this site handles these tables</a>. Statistics Canada data is used under the <a href="https://open.canada.ca/en/open-government-licence-canada" target="_blank" rel="noopener">Open Government Licence – Canada</a>. Adapted from Statistics Canada, Census of Population, 2021, tables 98-10-0252-01 and 98-10-0253-01. This does not constitute an endorsement by Statistics Canada of this product. This post is by Andrew.</p>
 `,
  },
  {
    title: 'September 2026 consumer prices: the monthly CPI pulse',
    slug: 'cpi-september-2026',
    date: 'November 2, 2026',
    category: 'Prices',
    readTime: '8 min read',
    author: 'Andrew',
    heroImage: '/images/blog/cpi-september-2026.png',
    chartType: 'bar',
    chartTitle: 'All-items CPI, 12-month change, September 2026 (percent)',
    chartData: [
      { name: 'Whitehorse', value: 6.1 },
      { name: 'P.E.I.', value: 5.7 },
      { name: 'Nova Scotia', value: 5.6 },
      { name: 'Charlottetown-Summerside', value: 5.6 },
      { name: 'Halifax', value: 5.4 },
      { name: 'New Brunswick', value: 5.0 },
      { name: 'Saint John', value: 4.8 },
      { name: 'N.L.', value: 4.7 },
    ],
    excerpt:
      'Canada’s all-items Consumer Price Index was 170.0 in September 2026, up 3.1% from September 2025. Whitehorse rose 6.1%, the largest 12-month increase among 30 geographies in this extract. Toronto, Ontario rose 2.1%, the smallest.',
    content: `
 <p>In September 2026, <a href="/location/canada/#consumer-prices">Canada</a>’s all-items Consumer Price Index was <strong>170.0</strong> (2002=100), up <strong>3.1%</strong> from <strong>164.9</strong> in September 2025. The 12-month change is calculated on this site from those two published index levels. It is not a separate Statistics Canada percent-change series. The food index was <strong>201.8</strong>, up <strong>2.2%</strong> from <strong>197.5</strong>.</p>

 <p>The source is table <a href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1810000401" target="_blank" rel="noopener">18-10-0004-01</a>, Consumer Price Index, monthly, not seasonally adjusted. The reference month is September 2026. The comparison month is September 2025. This extract has <strong>30</strong> geographies: Canada, the ten provinces, and 19 city or territorial price series. Yukon, the Northwest Territories, and Nunavut are not published here as territorial all-items indexes. Whitehorse, Yellowknife, and Iqaluit are. The figures were copied from the table on November 1, 2026. The full grid is on the <a href="/cost-of-living/">cost-of-living page</a>.</p>

 <h2 id="how-to-read-the-index">What the index measures</h2>
 <p>The index measures price change, with 2002 equal to 100. A higher index is not a higher dollar cost of living, and it is not the 12-month change. In this extract the highest all-items index is <a href="/cost-of-living/#calgary-alberta">Calgary, Alberta</a>, at <strong>181.6</strong>. The lowest is <a href="/cost-of-living/#iqaluit-nunavut">Iqaluit, Nunavut</a>, at <strong>149.6</strong>. Calgary’s 12-month change is <strong>3.4%</strong> (181.6 from 175.7). Iqaluit’s is <strong>3.0%</strong> (149.6 from 145.2).</p>

 <p>A city row follows Statistics Canada’s price-index geography, which is wider than a municipal boundary. <a href="/location/toronto/#consumer-prices">Toronto, Ontario</a> is the series published under that name. It is not the City of Toronto alone, and it is not Mississauga. It is also not <a href="/location/toronto/#housing">Toronto (CMA), Ont.</a>, the 2021 Census geography in <a href="/blog/homeownership-and-shelter-costs-by-cma/">the shelter-cost post</a>. <a href="/location/ottawa/#consumer-prices">Ottawa-Gatineau, Ontario part, Ontario/Quebec</a> appears on the Ottawa page. Gatineau does not receive that series.</p>

 <p><a href="/location/charlottetown/#consumer-prices">Charlottetown and Summerside, Prince Edward Island</a> is one series. The Summerside page shows the same series. All <strong>30</strong> geographies rose from September 2025. Where two one-decimal changes match, the row above has the larger unrounded change, calculated from the two index levels.</p>

 <h2 id="all-items">All 30 geographies</h2>
 <p><a href="/cost-of-living/#whitehorse-yukon">Whitehorse, Yukon</a> had the largest 12-month increase, <strong>6.1%</strong> (<strong>174.4</strong> from <strong>164.4</strong>). <a href="/cost-of-living/#toronto-ontario">Toronto, Ontario</a> had the smallest, <strong>2.1%</strong> (<strong>171.6</strong> from <strong>168.1</strong>). <a href="/cost-of-living/#ontario">Ontario</a> rose <strong>2.5%</strong> (170.3 from 166.1). <a href="/cost-of-living/#prince-edward-island">Prince Edward Island</a> rose <strong>5.7%</strong> (177.6 from 168.1). The Charlottetown and Summerside series rose <strong>5.6%</strong> (178.5 from 169.1), just under the province. <a href="/cost-of-living/#nova-scotia">Nova Scotia</a> also rounds to 5.6% (178.1 from 168.6), with a slightly larger unrounded change than Charlottetown and Summerside.</p>

 <div class="table-wrap">
 <table>
 <thead>
 <tr>
 <th class="num">Rank</th>
 <th>Geography</th>
 <th class="num">Sept 2026</th>
 <th class="num">Sept 2025</th>
 <th class="num">12-month</th>
 <th class="num">Food, 12-month</th>
 <th>Profile</th>
 </tr>
 </thead>
 <tbody>
 <tr><td class="num">1</td><td><a href="/cost-of-living/#whitehorse-yukon">Whitehorse, Yukon</a></td><td class="num">174.4</td><td class="num">164.4</td><td class="num">+6.1%</td><td class="num">+3.8%</td><td><a href="/location/whitehorse/#consumer-prices">Whitehorse</a></td></tr>
 <tr><td class="num">2</td><td><a href="/cost-of-living/#prince-edward-island">Prince Edward Island</a></td><td class="num">177.6</td><td class="num">168.1</td><td class="num">+5.7%</td><td class="num">+1.9%</td><td><a href="/location/prince-edward-island/#consumer-prices">Prince Edward Island</a></td></tr>
 <tr><td class="num">3</td><td><a href="/cost-of-living/#nova-scotia">Nova Scotia</a></td><td class="num">178.1</td><td class="num">168.6</td><td class="num">+5.6%</td><td class="num">+1.7%</td><td><a href="/location/nova-scotia/#consumer-prices">Nova Scotia</a></td></tr>
 <tr><td class="num">4</td><td><a href="/cost-of-living/#charlottetown-and-summerside-prince-edward-island">Charlottetown and Summerside, Prince Edward Island</a></td><td class="num">178.5</td><td class="num">169.1</td><td class="num">+5.6%</td><td class="num">—</td><td><a href="/location/charlottetown/#consumer-prices">Charlottetown</a>, <a href="/location/summerside/#consumer-prices">Summerside</a></td></tr>
 <tr><td class="num">5</td><td><a href="/cost-of-living/#halifax-nova-scotia">Halifax, Nova Scotia</a></td><td class="num">176.5</td><td class="num">167.5</td><td class="num">+5.4%</td><td class="num">—</td><td><a href="/location/halifax-regional-municipality-rgm/#consumer-prices">Halifax</a></td></tr>
 <tr><td class="num">6</td><td><a href="/cost-of-living/#new-brunswick">New Brunswick</a></td><td class="num">172.6</td><td class="num">164.4</td><td class="num">+5.0%</td><td class="num">+1.0%</td><td><a href="/location/new-brunswick/#consumer-prices">New Brunswick</a></td></tr>
 <tr><td class="num">7</td><td><a href="/cost-of-living/#saint-john-new-brunswick">Saint John, New Brunswick</a></td><td class="num">172.2</td><td class="num">164.3</td><td class="num">+4.8%</td><td class="num">—</td><td><a href="/location/saint-john/#consumer-prices">Saint John</a></td></tr>
 <tr><td class="num">8</td><td><a href="/cost-of-living/#newfoundland-and-labrador">Newfoundland and Labrador</a></td><td class="num">173.0</td><td class="num">165.2</td><td class="num">+4.7%</td><td class="num">+1.5%</td><td><a href="/location/newfoundland-and-labrador/#consumer-prices">Newfoundland and Labrador</a></td></tr>
 <tr><td class="num">9</td><td><a href="/cost-of-living/#yellowknife-northwest-territories">Yellowknife, Northwest Territories</a></td><td class="num">170.0</td><td class="num">162.4</td><td class="num">+4.7%</td><td class="num">+2.5%</td><td><a href="/location/yellowknife/#consumer-prices">Yellowknife</a></td></tr>
 <tr><td class="num">10</td><td><a href="/cost-of-living/#st-johns-newfoundland-and-labrador">St. John's, Newfoundland and Labrador</a></td><td class="num">172.2</td><td class="num">164.6</td><td class="num">+4.6%</td><td class="num">—</td><td><a href="/location/st-john-s/#consumer-prices">St. John's</a></td></tr>
 <tr><td class="num">11</td><td><a href="/cost-of-living/#manitoba">Manitoba</a></td><td class="num">172.2</td><td class="num">165.0</td><td class="num">+4.4%</td><td class="num">+2.9%</td><td><a href="/location/manitoba/#consumer-prices">Manitoba</a></td></tr>
 <tr><td class="num">12</td><td><a href="/cost-of-living/#winnipeg-manitoba">Winnipeg, Manitoba</a></td><td class="num">171.9</td><td class="num">164.9</td><td class="num">+4.2%</td><td class="num">—</td><td><a href="/location/winnipeg/#consumer-prices">Winnipeg</a></td></tr>
 <tr><td class="num">13</td><td><a href="/cost-of-living/#alberta">Alberta</a></td><td class="num">178.6</td><td class="num">172.4</td><td class="num">+3.6%</td><td class="num">+2.3%</td><td><a href="/location/alberta/#consumer-prices">Alberta</a></td></tr>
 <tr><td class="num">14</td><td><a href="/cost-of-living/#edmonton-alberta">Edmonton, Alberta</a></td><td class="num">176.6</td><td class="num">170.6</td><td class="num">+3.5%</td><td class="num">—</td><td><a href="/location/edmonton/#consumer-prices">Edmonton</a></td></tr>
 <tr><td class="num">15</td><td><a href="/cost-of-living/#victoria-british-columbia">Victoria, British Columbia</a></td><td class="num">160.9</td><td class="num">155.6</td><td class="num">+3.4%</td><td class="num">—</td><td><a href="/location/victoria/#consumer-prices">Victoria</a></td></tr>
 <tr><td class="num">16</td><td><a href="/cost-of-living/#regina-saskatchewan">Regina, Saskatchewan</a></td><td class="num">173.5</td><td class="num">167.8</td><td class="num">+3.4%</td><td class="num">—</td><td><a href="/location/regina/#consumer-prices">Regina</a></td></tr>
 <tr><td class="num">17</td><td><a href="/cost-of-living/#calgary-alberta">Calgary, Alberta</a></td><td class="num">181.6</td><td class="num">175.7</td><td class="num">+3.4%</td><td class="num">—</td><td><a href="/location/calgary/#consumer-prices">Calgary</a></td></tr>
 <tr><td class="num">18</td><td><a href="/cost-of-living/#saskatchewan">Saskatchewan</a></td><td class="num">172.0</td><td class="num">166.5</td><td class="num">+3.3%</td><td class="num">+2.6%</td><td><a href="/location/saskatchewan/#consumer-prices">Saskatchewan</a></td></tr>
 <tr><td class="num">19</td><td><a href="/cost-of-living/#quebec-quebec">Québec, Quebec</a></td><td class="num">166.0</td><td class="num">160.7</td><td class="num">+3.3%</td><td class="num">—</td><td><a href="/location/qu-bec/#consumer-prices">Québec</a></td></tr>
 <tr><td class="num">20</td><td><a href="/cost-of-living/#quebec">Quebec</a></td><td class="num">167.7</td><td class="num">162.6</td><td class="num">+3.1%</td><td class="num">+2.3%</td><td><a href="/location/quebec/#consumer-prices">Quebec</a></td></tr>
 <tr><td class="num">21</td><td><a href="/cost-of-living/#canada">Canada</a></td><td class="num">170.0</td><td class="num">164.9</td><td class="num">+3.1%</td><td class="num">+2.2%</td><td><a href="/location/canada/#consumer-prices">Canada</a></td></tr>
 <tr><td class="num">22</td><td><a href="/cost-of-living/#saskatoon-saskatchewan">Saskatoon, Saskatchewan</a></td><td class="num">173.6</td><td class="num">168.4</td><td class="num">+3.1%</td><td class="num">—</td><td><a href="/location/saskatoon/#consumer-prices">Saskatoon</a></td></tr>
 <tr><td class="num">23</td><td><a href="/cost-of-living/#iqaluit-nunavut">Iqaluit, Nunavut</a></td><td class="num">149.6</td><td class="num">145.2</td><td class="num">+3.0%</td><td class="num">—</td><td><a href="/location/iqaluit/#consumer-prices">Iqaluit</a></td></tr>
 <tr><td class="num">24</td><td><a href="/cost-of-living/#vancouver-british-columbia">Vancouver, British Columbia</a></td><td class="num">166.8</td><td class="num">161.9</td><td class="num">+3.0%</td><td class="num">—</td><td><a href="/location/vancouver/#consumer-prices">Vancouver</a></td></tr>
 <tr><td class="num">25</td><td><a href="/cost-of-living/#montreal-quebec">Montréal, Quebec</a></td><td class="num">170.6</td><td class="num">165.6</td><td class="num">+3.0%</td><td class="num">—</td><td><a href="/location/montr-al/#consumer-prices">Montréal</a></td></tr>
 <tr><td class="num">26</td><td><a href="/cost-of-living/#ottawa-gatineau-ontario-part-ontario-quebec">Ottawa-Gatineau, Ontario part, Ontario/Quebec</a></td><td class="num">172.0</td><td class="num">167.0</td><td class="num">+3.0%</td><td class="num">—</td><td><a href="/location/ottawa/#consumer-prices">Ottawa</a></td></tr>
 <tr><td class="num">27</td><td><a href="/cost-of-living/#british-columbia">British Columbia</a></td><td class="num">163.5</td><td class="num">158.8</td><td class="num">+3.0%</td><td class="num">+2.3%</td><td><a href="/location/british-columbia/#consumer-prices">British Columbia</a></td></tr>
 <tr><td class="num">28</td><td><a href="/cost-of-living/#thunder-bay-ontario">Thunder Bay, Ontario</a></td><td class="num">158.5</td><td class="num">154.2</td><td class="num">+2.8%</td><td class="num">—</td><td><a href="/location/thunder-bay/#consumer-prices">Thunder Bay</a></td></tr>
 <tr><td class="num">29</td><td><a href="/cost-of-living/#ontario">Ontario</a></td><td class="num">170.3</td><td class="num">166.1</td><td class="num">+2.5%</td><td class="num">+2.1%</td><td><a href="/location/ontario/#consumer-prices">Ontario</a></td></tr>
 <tr><td class="num">30</td><td><a href="/cost-of-living/#toronto-ontario">Toronto, Ontario</a></td><td class="num">171.6</td><td class="num">168.1</td><td class="num">+2.1%</td><td class="num">—</td><td><a href="/location/toronto/#consumer-prices">Toronto</a></td></tr>
 </tbody>
 </table>
 </div>

 <p>A dash means this extract has no food index for that geography. Food indexes are published for Canada, the ten provinces, Whitehorse, and Yellowknife. They are not published for the other city rows.</p>

 <h2 id="food">The food index</h2>
 <p>Where a food index is published for September 2026, every one of those 13 series rose from September 2025. Canada’s food index rose <strong>2.2%</strong>, less than the all-items <strong>3.1%</strong>. <a href="/cost-of-living/#whitehorse-yukon">Whitehorse, Yukon</a> had the largest food increase, <strong>3.8%</strong> (<strong>175.4</strong> from <strong>168.9</strong>). <a href="/cost-of-living/#new-brunswick">New Brunswick</a> had the smallest, <strong>1.0%</strong> (<strong>212.8</strong> from <strong>210.6</strong>), against an all-items increase of 5.0%. Ontario’s food index rose <strong>2.1%</strong> (204.1 from 199.9). That 2.1% is the food component for the province. Toronto’s 2.1% in the table above is the all-items change for the Toronto, Ontario series. Toronto has no food index in this extract.</p>

 <p>Three food series round to <strong>2.3%</strong>. On the unrounded change, Alberta (201.1 from 196.5) is ahead of Quebec (201.0 from 196.5), which is ahead of British Columbia (194.8 from 190.5).</p>

 <h2 id="grocery-prices">Grocery prices in August 2026</h2>
 <p>Dollar prices are a different table, <a href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1810024501" target="_blank" rel="noopener">18-10-0245-01</a>, monthly average retail prices for selected products. In this extract every Canada price below is for <strong>August 2026</strong>, one month before the CPI reference month. The file has no year-ago price, so this post does not calculate a 12-month change for these products. The provincial comparison is on the <a href="/cost-of-living/">cost-of-living page</a>.</p>

 <div class="table-wrap">
 <table>
 <thead>
 <tr>
 <th>Product</th>
 <th>Month</th>
 <th class="num">Canada</th>
 </tr>
 </thead>
 <tbody>
 <tr><td>Ground beef, per kilogram</td><td>August 2026</td><td class="num">$16.75</td></tr>
 <tr><td>Whole chicken, per kilogram</td><td>August 2026</td><td class="num">$7.13</td></tr>
 <tr><td>Chicken breasts, per kilogram</td><td>August 2026</td><td class="num">$14.41</td></tr>
 <tr><td>Milk, 2 litres</td><td>August 2026</td><td class="num">$5.49</td></tr>
 <tr><td>Eggs, 1 dozen</td><td>August 2026</td><td class="num">$4.83</td></tr>
 <tr><td>White bread, 675 grams</td><td>August 2026</td><td class="num">$3.63</td></tr>
 <tr><td>Butter, 454 grams</td><td>August 2026</td><td class="num">$5.68</td></tr>
 <tr><td>Apples, per kilogram</td><td>August 2026</td><td class="num">$6.47</td></tr>
 <tr><td>Bananas, per kilogram</td><td>August 2026</td><td class="num">$1.89</td></tr>
 <tr><td>Potatoes, per kilogram</td><td>August 2026</td><td class="num">$5.17</td></tr>
 <tr><td>Tomatoes, per kilogram</td><td>August 2026</td><td class="num">$4.80</td></tr>
 <tr><td>White rice, 2 kilograms</td><td>August 2026</td><td class="num">$9.73</td></tr>
 <tr><td>Dry or fresh pasta, 500 grams</td><td>August 2026</td><td class="num">$3.37</td></tr>
 <tr><td>Roasted or ground coffee, 340 grams</td><td>August 2026</td><td class="num">$9.46</td></tr>
 </tbody>
 </table>
 </div>

 <p>Among the geographies that publish these four products, all of them for August 2026, the high and low prices are: ground beef, <strong>$18.53</strong> in British Columbia and <strong>$15.75</strong> in Prince Edward Island; milk, <strong>$5.92</strong> in Ontario and <strong>$4.73</strong> in Prince Edward Island; eggs, <strong>$5.71</strong> in British Columbia and <strong>$4.16</strong> in Quebec; white bread, <strong>$4.38</strong> in Yellowknife, Northwest Territories and <strong>$3.27</strong> in Ontario.</p>

 <h2 id="shelter">Shelter costs are a different table</h2>
 <p>The cost-of-living page also shows 2021 Census shelter costs for Canada. Those counts are tables 98-10-0252-01 and 98-10-0253-01, reference period 2021. They are not part of the September 2026 price index. Median shelter cost, owner share, and the share of households spending 30% or more of income on shelter are in <a href="/blog/homeownership-and-shelter-costs-by-cma/">Who owns, who rents, and where shelter takes 30% of income</a>. Canada’s housing block is on the <a href="/location/canada/#housing">Canada page</a>.</p>

 <h2 id="sources">Sources</h2>
 <p>All-items and food indexes are from Statistics Canada table <a href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1810000401" target="_blank" rel="noopener">18-10-0004-01</a>, reference month September 2026, compared with September 2025. The index base is 2002=100. The 12-month percent change is calculated here from the published index levels. Average retail prices are from table <a href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1810024501" target="_blank" rel="noopener">18-10-0245-01</a>, August 2026. The extract was taken on November 1, 2026. See <a href="/sources/">how this site handles these tables</a>. Statistics Canada data is used under the <a href="https://open.canada.ca/en/open-government-licence-canada" target="_blank" rel="noopener">Open Government Licence – Canada</a>. Adapted from Statistics Canada, tables 18-10-0004-01 and 18-10-0245-01. This does not constitute an endorsement by Statistics Canada of this product. This post is by Andrew.</p>
 `,
  },
];
