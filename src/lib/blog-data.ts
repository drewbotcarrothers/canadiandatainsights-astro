import { compareBlogPosts } from './blog-compare-posts';
import { day7Posts } from './blog-day7-posts';

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
 title: "World Juniors 2026: Ottawa Bars Russian Players Even With Valid Visas, Defying a Sports-Court Order",
 slug: "canadian-news-roundup-2026-11-12",
 date: "November 12, 2026",
 category: "News",
 readTime: "5 min read",
 author: "Andrew",
 heroImage: "/images/blog/canadian-news-roundup-2026-11-12.png",
 chartType: 'bar',
 chartTitle: "CHL import draft 2026: players selected from Russia vs. all other countries (CHL via The Canadian Press)",
 chartData: [
 { name: "Russia", value: 32 },
 { name: "All other countries", value: 82 },
 ],
 excerpt: "Ottawa says Russian and Belarusian players will not get into Canada for the world juniors in Edmonton and Red Deer, even if they already hold valid visas. That puts Canada head to head with an Oct. 30 Court of Arbitration for Sport order to reinstate Russia, leaves Norway in limbo and puts the IIHF in a bind about six weeks before puck drop.",
 content: `
<p><strong>TL;DR:</strong> On Nov. 11, Secretary of State for Sport Adam van Koeverden said Immigration, Refugees and Citizenship Canada will individually assess and block Russian and Belarusian athletes and officials from entering Canada to compete, even if they already hold valid visas. That shuts the door on Russia at the world junior championship, which opens Dec. 26 in Edmonton and Red Deer, despite an Oct. 30 Court of Arbitration for Sport ruling ordering the IIHF to let Russian teams back in. Norway, which the IIHF had planned to drop to make room for Russia, is waiting to hear whether it is back in.</p>

<h2 id="world-juniors-russia-visa-ban">Ottawa closes the last loophole</h2>
<p>The federal government says Russian hockey players will not be permitted to compete at next month's world juniors in Alberta, even with valid Canadian visas, <a href="https://www.cbc.ca/sports/hockey/secretary-of-sport-says-canada-will-not-allow-russians-world-juniors-9.7418528" target="_blank" rel="noopener">The Canadian Press reports</a>. "The Minister will take measures to individually assess and prevent Russian and Belarusian athletes and officials from entering Canada to compete, regardless of whether they already hold valid visas," van Koeverden said in a statement, <a href="https://www.tsn.ca/hockey-canada/article/canadian-government-tells-hockey-canada-it-will-not-issue-visas-for-russians-to-play-in-wjc/" target="_blank" rel="noopener">TSN reports</a>.</p>
<p>That matters because Russians already play here. Russia led this year's Canadian Hockey League import draft with 32 of the 114 players selected, according to the CHL. Those players hold visas to play junior hockey in Canada. They will not be allowed to play for Russia at the world juniors.</p>
<p>Ottawa's message: the move is "not directed at the Russian and Belarusian people," but at stopping their governments from using events hosted in Canada for "state representation, political legitimacy and propaganda." And: "as long as Russia continues its war of aggression against Ukraine, there can be no return to business as usual."</p>

<h2>How we got here: a sports court said let them in</h2>
<p>Russia and Belarus have been banned from international hockey since Russia invaded Ukraine, with Belarusian help, in February 2022. On Oct. 30, the <a href="https://www.tas-cas.org/generated/assets/lists/dceab111-07bc-435f-b5f9-de88eff9db72/CAS%20Media%20Release_12573%20et%20al_final.pdf" target="_blank" rel="noopener">Court of Arbitration for Sport</a> upheld an appeal by the Russian Ice Hockey Federation. It ordered the IIHF to allow Russian teams in five events, starting with the world juniors in Canada and including the Women's World Championship in Canada in November 2027. The panel found the IIHF's safety and security arguments were "not supported by sufficient evidence."</p>
<p>Prime Minister Mark Carney answered on Nov. 3: "So if you're asking specifically about the world juniors, the Russians will not be there." Ottawa first left room for individual athletes to compete as neutrals. On Nov. 9, van Koeverden clarified that applies to individuals, not teams. The Nov. 11 statement closes the visa question too.</p>

<h2>Norway in limbo, Europe on Canada's side</h2>
<p>Norway's hockey federation said on Nov. 8 that the IIHF told it Russia would be added to the tournament at Norway's expense, <a href="https://www.euronews.com/2026/11/09/norway-dropped-from-junior-hockey-championship-to-make-room-for-russia" target="_blank" rel="noopener">Euronews reports</a>. Norway qualified and says it still hopes to play. The IIHF has not formally changed the field; its website still lists Norway among the 10 teams.</p>
<p>Canada is not alone. Hockey federations in Finland, Sweden, Czechia and Norway have said their teams will refuse to play Russia, and Switzerland has joined them, <a href="https://www.dw.com/en/norways-ice-hockey-team-says-russia-replacing-it-at-world-juniors/a-79901844" target="_blank" rel="noopener">DW reports</a>. Sponsors of next May's men's world championship in Germany, including Skoda, its main sponsor for more than 30 years, have said they would reassess or end their backing if Russia plays.</p>

<h2>Can a sports court overrule a border?</h2>
<p>Not really, says Dick Pound, a longtime IOC member and former CAS arbitrator. CAS cannot order the Canadian government to grant visas. "Short of stamping their feet and pouting, there's not much they can actually do," he told <a href="https://www.cbc.ca/sports/hockey/norway-hockey-world-championships-russia-hockey-band-9.7409018" target="_blank" rel="noopener">The Canadian Press</a>. Van Koeverden has dismissed concerns that the ban could hurt Canada's chances of hosting future events, including the Olympics.</p>
<p>The IIHF has said "the global impact of the decision made by the CAS Panel and the challenges it creates for all involved were significantly underestimated," citing visa requirements and possible changes to tournament formats. Russia's ambassador to Canada, Oleg Stepanov, has accused Ottawa of "bringing politics even into junior hockey" and of knocking out strong rivals before the puck drops, <a href="https://www.bbc.com/sport/ice-hockey/articles/c6dxw090qvnzo" target="_blank" rel="noopener">BBC Sport reports</a>.</p>

<h2>Why it matters</h2>
<p>The world juniors are Canada's holiday tournament, and this one is on home ice in about six weeks. Canada also hosts the women's worlds next November, another event on the CAS list. Ottawa is using immigration law to override an international sports court, with most of Europe's top hockey nations behind it. The IIHF now has to pick between a court order and a host country that will not let Russia in. The open questions: does Norway get its spot back, and does the IIHF try to punish the host? Ottawa is betting that the border beats a sports court, and right now it holds every card.</p>

<h2>Sources</h2>
<ul>
<li><a href="https://www.cbc.ca/sports/hockey/secretary-of-sport-says-canada-will-not-allow-russians-world-juniors-9.7418528" target="_blank" rel="noopener">CBC Sports / The Canadian Press: Russian players with visas will still be barred from WJC (Nov. 11, 2026)</a></li>
<li><a href="https://www.tsn.ca/hockey-canada/article/canadian-government-tells-hockey-canada-it-will-not-issue-visas-for-russians-to-play-in-wjc/" target="_blank" rel="noopener">TSN: Canadian government tells Hockey Canada it will not issue visas for Russians to play in WJC</a></li>
<li><a href="https://globalnews.ca/news/12147202/world-juniors-russia-visa-players/" target="_blank" rel="noopener">Global News / The Canadian Press: Russian players with visas will still be barred from World Juniors</a></li>
<li><a href="https://www.tas-cas.org/generated/assets/lists/dceab111-07bc-435f-b5f9-de88eff9db72/CAS%20Media%20Release_12573%20et%20al_final.pdf" target="_blank" rel="noopener">Court of Arbitration for Sport: media release on the ice hockey ruling (Oct. 30, 2026)</a></li>
<li><a href="https://www.cbc.ca/sports/hockey/norway-hockey-world-championships-russia-hockey-band-9.7409018" target="_blank" rel="noopener">CBC Sports / The Canadian Press: Canada dismisses fears of international blowback (Nov. 4, 2026)</a></li>
<li><a href="https://www.euronews.com/2026/11/09/norway-dropped-from-junior-hockey-championship-to-make-room-for-russia" target="_blank" rel="noopener">Euronews: Norway dropped from junior hockey championship to make room for Russia</a></li>
<li><a href="https://www.dw.com/en/norways-ice-hockey-team-says-russia-replacing-it-at-world-juniors/a-79901844" target="_blank" rel="noopener">DW: Russia ice hockey return sparks World Juniors crisis</a></li>
<li><a href="https://www.bbc.com/sport/ice-hockey/articles/c6dxw090qvnzo" target="_blank" rel="noopener">BBC Sport: Canada bars Russia and Belarus from junior tournament</a></li>
</ul>
<p><em>For education only. Verify primary sources.</em></p>
`,
 },
 {
 title: "Remembrance Day 2026: Four Soldiers Died Training at CFB Wainwright. Canada Still Wants Answers",
 slug: "canadian-news-roundup-2026-11-11",
 date: "November 11, 2026",
 category: "News",
 readTime: "5 min read",
 author: "Andrew",
 heroImage: "/images/blog/canadian-news-roundup-2026-11-11.png",
 chartType: 'bar',
 chartTitle: "CFB Wainwright fire, Oct. 17, 2026: soldiers killed, injured and still in hospital (National Defence; Canadian Press; Acute Care Alberta via CBC News)",
 chartData: [
 { name: "Killed", value: 4 },
 { name: "Injured", value: 39 },
 { name: "Still in hospital (all provinces)", value: 25 },
 { name: "In hospital in Alberta", value: 21 },
 { name: "On ventilators (Alberta)", value: 15 },
 { name: "Critical (Alberta)", value: 9 },
 ],
 excerpt: "Canada pauses today for its war dead, but this year's freshest losses came at home. A grass fire at CFB Wainwright killed four soldiers and injured 39 during live-fire training on Oct. 17. Twenty-five are still in hospital, investigators want to know why training went on while the range burned, and the Silver Cross Mother laying today's national wreath lost her own daughter in a training accident.",
 content: `
<p><strong>TL;DR:</strong> On Oct. 17, a grass fire swept through a training area at Canadian Forces Base Wainwright in Alberta. Four soldiers were killed and 39 were injured. Officials said last week that 25 were still in hospital; in Alberta, 21 remain in hospital, nine in critical condition and 15 on ventilators. The fire started on a grenade launcher range that firefighters could not enter, and investigators are asking why training continued for hours while it burned. Today, the National Silver Cross Mother, Virginia Hicks, lays the national wreath in Ottawa. Her daughter also died in training.</p>

<h2 id="remembrance-day-wainwright-fire">Remembrance Day under the shadow of Wainwright</h2>
<p>Remembrance Day honours Canadians who died in service. This year, the most recent names on that list did not die overseas. Sgt. Morgan Wong, 26, of Edmonton; Pte. Shaun Farrell, 23, of Prince Albert, Sask.; Pte. Aidan Goulding, 23, of North Vancouver; and Pte. Hayden Lykkemark, 19, of Langley, B.C., were killed at CFB Wainwright on Oct. 17, <a href="https://globalnews.ca/news/12144233/wainwright-remembrance-day/" target="_blank" rel="noopener">The Canadian Press reports</a>. Prime Minister Mark Carney has called it one of the worst tragedies for the Armed Forces on Canadian soil in peacetime.</p>
<div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#eef0f5;"><iframe src="https://www.youtube-nocookie.com/embed/By8Ob0ZDiF0" title="CFB Wainwright Fire: Why Did Training Continue?" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
<p>Roughly 84 soldiers with the Princess Patricia's Canadian Light Infantry were on a field exercise when strong, sudden winds pushed a grass fire into their path. The fire reached C Company of the 3rd Battalion, PPCLI, which was doing live-fire training to prepare for a deployment to Latvia this spring, <a href="https://www.cbc.ca/news/politics/chief-of-defence-staff-wainwright-speed-of-fire-9.7393268" target="_blank" rel="noopener">CBC News reports</a>.</p>

<h2>The fire burned for hours before it reached the soldiers</h2>
<p>Military officials say the fire started from training on an automatic grenade launcher range. It broke out in a "permanent danger zone," an area firefighters could not enter because unexploded ordnance could be on the ground. The base fire hall and range control monitored it "throughout the day," the Canadian Forces Provost Marshal said. When the wind picked up, the fire grew and spread.</p>
<p>That is the central question now: investigators are trying to find out what caused the fire and why training was allowed to continue for hours. Chief of the Defence Staff Gen. Jennie Carignan said soldiers could not escape "mostly due to how fast the fire travelled." Training has resumed at the base, and she said nothing so far shows a need for immediate changes.</p>
<p>Retired Maj. Robert Parent, a former president of a military Board of Inquiry, told CBC: "One decision at any time during this process would have avoided the final and tragic outcome."</p>

<h2>Three investigations, no answers yet</h2>
<p>Military Police are investigating independently of the chain of command to determine whether any criminal or service offences occurred, <a href="https://www.canada.ca/en/department-national-defence/news/2026/10/canadian-armed-forces-provides-update-on-incident-at-canadian-forces-base-wainwright.html" target="_blank" rel="noopener">National Defence said</a>. A separate Board of Inquiry is being convened to find out how it happened and what lessons can prevent a repeat. In all, three investigations are looking into the fire.</p>

<h2>25 soldiers still in hospital</h2>
<p>Officials said last week that 25 soldiers were still in hospital. In Alberta, 21 remain in hospital, nine in critical condition and 15 on ventilators, according to Acute Care Alberta, <a href="https://www.cbc.ca/news/canada/edmonton/specialized-burn-treatments-soldiers-wainwright-military-base-fire-9.7415813" target="_blank" rel="noopener">CBC News reports</a>. Health Canada used its special access program to bring in RECELL, an unlicensed spray-on skin device, to treat the burns. Burn specialists from Toronto were flown to Edmonton on a military Hercules in October.</p>

<h2>The Silver Cross Mother knows this loss</h2>
<p>This year's National Silver Cross Mother is Virginia Hicks of Frankford, Ont. Her daughter, Sapper Mariebeth Short, a 22-year-old combat engineer, was killed when her light armoured vehicle rolled over during a training exercise at CFB Petawawa on Sept. 23, 2002, <a href="https://www.cbc.ca/news/thenational/silver-cross-mother-2026-9.7402837" target="_blank" rel="noopener">CBC News reports</a>. Today she lays a wreath at the National War Memorial in Ottawa.</p>
<p>When she heard about Wainwright, Hicks said: "Oh my God, not again." Then: "I now have four more members of our club." The families of the four soldiers will receive the Memorial Cross.</p>
<p>In Wainwright, a town of about 7,000 people 210 km southeast of Edmonton, the ceremony fills the local ice rink. "It will be different this year just with the weight of what happened," Mayor Bruce Pugh said.</p>

<h2>Why it matters</h2>
<p>Canada keeps training troops for missions abroad, including the Latvia deployment. The soldiers who died at Wainwright were preparing for that mission. Their families, and every family with someone in uniform, are owed a clear account of how a fire on a closed range ended up killing four people, and what changes before the next exercise. Remembering the fallen also means getting answers for the ones lost at home.</p>

<h2>Sources</h2>
<ul>
<li><a href="https://www.canada.ca/en/department-national-defence/news/2026/10/canadian-armed-forces-provides-update-on-incident-at-canadian-forces-base-wainwright.html" target="_blank" rel="noopener">National Defence: CAF update on the CFB Wainwright incident (Oct. 22, 2026)</a></li>
<li><a href="https://www.cbc.ca/news/politics/chief-of-defence-staff-wainwright-speed-of-fire-9.7393268" target="_blank" rel="noopener">CBC News: Rapid spread of fire was main factor in CFB Wainwright deaths, injuries</a></li>
<li><a href="https://www.cbc.ca/news/canada/edmonton/specialized-burn-treatments-soldiers-wainwright-military-base-fire-9.7415813" target="_blank" rel="noopener">CBC News: Specialized burn treatments deployed for injured soldiers</a></li>
<li><a href="https://www.cbc.ca/news/thenational/silver-cross-mother-2026-9.7402837" target="_blank" rel="noopener">CBC News: This year's Silver Cross Mother has a message for grieving families</a></li>
<li><a href="https://globalnews.ca/news/12144233/wainwright-remembrance-day/" target="_blank" rel="noopener">Global News / The Canadian Press: Wainwright prepares for Remembrance Day after fire</a></li>
<li><a href="https://www.ctvnews.ca/canada/article/her-daughter-died-in-training-too-now-canadas-silver-cross-mother-has-a-message-for-wainwright-families/" target="_blank" rel="noopener">CTV News: Veteran who lost daughter in training accident named National Silver Cross Mother</a></li>
</ul>
<p><em>For education only. Verify primary sources.</em></p>
`,
 },
 {
 title: "Stellantis Sells Its Brampton Plant: Ontario's Auto Assembly Jobs Are Down 37% Since 2001",
 slug: "canadian-news-roundup-2026-11-10",
 date: "November 10, 2026",
 category: "News",
 readTime: "6 min read",
 author: "Andrew",
 heroImage: "/images/blog/canadian-news-roundup-2026-11-10.png",
 chartType: 'bar',
 chartTitle: "Ontario motor vehicle manufacturing employment (NAICS 3361), 2015–2025 — Statistics Canada Table 14-10-0202-01",
 chartData: [
 { name: "2015", value: 35840 },
 { name: "2016", value: 37937 },
 { name: "2017", value: 38112 },
 { name: "2018", value: 38120 },
 { name: "2019", value: 37658 },
 { name: "2020", value: 30195 },
 { name: "2021", value: 31335 },
 { name: "2022", value: 32211 },
 { name: "2023", value: 31563 },
 { name: "2024", value: 28815 },
 { name: "2025", value: 29024 },
 ],
 excerpt: "Stellantis has agreed to sell its idled Brampton Assembly Plant to armoured-vehicle maker Roshel. The number the coverage leaves out: Statistics Canada counts 29,024 motor vehicle assembly payroll jobs in Ontario in 2025, down 37% from 46,062 in 2001 and 24% from 2018. And Brampton leans on manufacturing more than Ontario does: 11.9% of its workers versus 8.9%.",
 content: `
<p><strong>TL;DR:</strong> Stellantis announced on Monday, Nov. 9 that it will sell its idled Brampton Assembly Plant to Roshel, a Brampton-based maker of armoured vehicles, for an undisclosed amount. The deal is expected to close by the end of 2026. Unifor calls it the “worst-case scenario.” The number the big outlets are not using comes from Statistics Canada: Ontario had <strong>29,024</strong> motor vehicle manufacturing payroll jobs in 2025. That is down <strong>37%</strong> from 46,062 in 2001 and <strong>24%</strong> from 38,120 in 2018, and close to the series low of 28,815 in 2024. Ontario holds <strong>81.5%</strong> of Canada’s 35,593 such jobs.</p>

<h2 id="stellantis-brampton-roshel-sale">Stellantis sells the Brampton plant to Roshel</h2>
<p>Under an asset purchase agreement, Roshel will acquire the Brampton Assembly Plant and its equipment, <a href="https://media.stellantisnorthamerica.com/newsrelease.do?id=28190&mid=1" target="_blank" rel="noopener">Stellantis said in a joint release</a>. The companies will also explore working together on vehicle technologies for the defence industry. The deal still needs to meet closing conditions, including government and regulatory requirements. Stellantis said it employs more than 10,000 Canadians outside Brampton, including at Windsor Assembly Plant and Etobicoke Casting Plant.</p>
<div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#eef0f5;"><iframe src="https://www.youtube-nocookie.com/embed/wARNiyJO0nE" title="Stellantis Sells Brampton as Auto Jobs Shrink" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
<p>Roshel says it has deployed more than 2,500 armoured vehicles to Ukraine. Its CEO, Roman Shimonov, said the plan is a new “Centre of Excellence for advanced manufacturing.” About 700 to 1,000 laid-off Stellantis employees could return to work under Roshel, and Roshel plans to lease about one-quarter of the site back to Stellantis for automotive work, <a href="https://globalnews.ca/news/12143427/stellantis-roshel-brampton-assembly-plant-deal/" target="_blank" rel="noopener">Global News reports</a>. Shimonov told <a href="https://www.cbc.ca/news/canada/toronto/stellantis-brampton-plant-9.7415345" target="_blank" rel="noopener">CBC</a> that Roshel has a letter of intent from a major European automaker he would not name. “Our goal is to employ thousands of people and we’ll definitely give the first priority to Brampton people,” he said.</p>
<p>The plant stopped production in 2023 to retool, and more than 2,000 workers were laid off. Retooling for Jeep production began in early 2024 and was paused in early 2025. Stellantis later moved Jeep Compass production to Illinois. <a href="https://www.theglobeandmail.com/business/article-stellantis-sale-brampton-auto-plant-roshel-november-9/" target="_blank" rel="noopener">The Globe and Mail</a> reports the plant employed more than 3,000 people and covers 2.95 million square feet on 269 acres.</p>

<h2 id="unifor-and-ottawa-react">Unifor and Ottawa react</h2>
<p>Unifor national president Lana Payne called the sale an “unacceptable outcome.” She said closing and selling the plant cuts Canada’s vehicle production capacity by 10 per cent. “Once that capacity is gone, it’s often gone for good,” she told reporters. Stellantis workers in Canada voted 97.3% last month to give Unifor a strike mandate. The union represents more than 9,000 Stellantis workers in Canada. Payne said a strike remains a last resort.</p>
<p>Industry Minister Mélanie Joly said the sale does not “erase the commitment” Stellantis made to its workers. She is calling a meeting this week with Stellantis, Unifor, the Ontario government and plant representatives. Brampton Mayor Patrick Brown said Stellantis should repay public funding it received for production in the city. Stellantis said it acknowledges its obligations under the collective agreement and is prepared to negotiate a settlement with Unifor.</p>

<h2 id="by-the-numbers">By the numbers: Ontario’s auto assembly jobs</h2>
<p>Statistics Canada’s Survey of Employment, Payrolls and Hours counts payroll employees by industry. The table below shows motor vehicle manufacturing (NAICS 3361, vehicle assembly), all employees:</p>
<table>
<thead><tr><th>Year</th><th>Ontario</th><th>Canada</th><th>Ontario share</th></tr></thead>
<tbody>
<tr><td>2001</td><td>46,062</td><td>53,204</td><td>86.6%</td></tr>
<tr><td>2008</td><td>38,073</td><td>43,347</td><td>87.8%</td></tr>
<tr><td>2018</td><td>38,120</td><td>44,747</td><td>85.2%</td></tr>
<tr><td>2020</td><td>30,195</td><td>36,304</td><td>83.2%</td></tr>
<tr><td>2023</td><td>31,563</td><td>38,310</td><td>82.4%</td></tr>
<tr><td>2024</td><td>28,815</td><td>35,933</td><td>80.2%</td></tr>
<tr><td>2025</td><td><strong>29,024</strong></td><td><strong>35,593</strong></td><td><strong>81.5%</strong></td></tr>
</tbody>
</table>
<ul>
<li>Ontario’s vehicle assembly payroll was <strong>29,024</strong> in 2025, down <strong>37.0%</strong> from 2001 and <strong>23.9%</strong> from 2018.</li>
<li>Canada-wide, the count fell <strong>33.1%</strong>, from 53,204 in 2001 to 35,593 in 2025.</li>
<li>Parts plants employ more people than assembly plants. Ontario motor vehicle parts manufacturing (NAICS 3363) had <strong>61,060</strong> payroll jobs in 2025, down from 89,317 in 2001.</li>
</ul>
<p>Brampton leans on factory work more than the rest of the province. In the 2021 Census, <strong>42,495</strong> of Brampton’s <strong>355,755</strong> workers (<strong>11.9%</strong>) were in manufacturing. That compares with <strong>8.9%</strong> in Ontario and <strong>8.0%</strong> in Canada. See the full profile on our <a href="/location/brampton/">Brampton page</a>.</p>
<p>Two cautions. Statistics Canada does not publish employment for a single plant, so these figures cannot show how many Brampton workers are still counted on payroll during their paid layoff. The table has no Ontario figures for 2002 to 2007, and Statistics Canada attaches data-quality ratings to the estimates.</p>
<p>Sources: <a href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410020201" target="_blank" rel="noopener">Statistics Canada Table 14-10-0202-01</a> (employment by industry, annual) and the 2021 Census of Population via our <a href="/location/brampton/">Brampton page</a>. See how Canadian Data Insights uses Statistics Canada data on our <a href="/sources/">sources page</a>.</p>

<h2 id="why-it-matters-brampton-plant">Why it matters</h2>
<p>The sale shows where Canada’s auto footprint is heading. Ontario holds more than four in five of Canada’s vehicle assembly jobs, and that count is already near its lowest point in the data. Selling an assembly plant to a defence company means Brampton will build something, but not the full vehicles it once did, unless the Stellantis lease-back or Roshel’s unnamed European automaker brings that work back. For more than 2,000 laid-off workers, the details from this week’s meeting will matter more than the headline.</p>
<p>Sources: <a href="https://media.stellantisnorthamerica.com/newsrelease.do?id=28190&mid=1" target="_blank" rel="noopener">Stellantis</a> · <a href="https://www.cbc.ca/news/canada/toronto/stellantis-brampton-plant-9.7415345" target="_blank" rel="noopener">CBC News</a> · <a href="https://www.theglobeandmail.com/business/article-stellantis-sale-brampton-auto-plant-roshel-november-9/" target="_blank" rel="noopener">The Globe and Mail</a> · <a href="https://globalnews.ca/news/12143427/stellantis-roshel-brampton-assembly-plant-deal/" target="_blank" rel="noopener">Global News</a> · <a href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410020201" target="_blank" rel="noopener">Statistics Canada Table 14-10-0202-01</a></p>
<p><em>Topic chosen using Google Trends Canada interest on the morning of Nov. 10, 2026. Canadian Data Insights is for education only, not investment or legal advice.</em></p>
 `,
 },
 {
 title: "Gun Ban at the Supreme Court: Firearm Homicides Fell to 221 in 2025, the Fewest Since 2015",
 slug: "canadian-news-roundup-2026-11-09",
 date: "November 9, 2026",
 category: "News",
 readTime: "6 min read",
 author: "Andrew",
 heroImage: "/images/blog/canadian-news-roundup-2026-11-09.png",
 chartType: 'bar',
 chartTitle: "Firearm homicide victims in Canada, 2015–2025 — Statistics Canada Table 35-10-0170-01",
 chartData: [
 { name: "2015", value: 181 },
 { name: "2016", value: 223 },
 { name: "2017", value: 267 },
 { name: "2018", value: 253 },
 { name: "2019", value: 264 },
 { name: "2020", value: 280 },
 { name: "2021", value: 299 },
 { name: "2022", value: 346 },
 { name: "2023", value: 297 },
 { name: "2024", value: 288 },
 { name: "2025", value: 221 },
 ],
 excerpt: "The Supreme Court of Canada hears the challenge to Ottawa’s 2020 assault-style firearms ban on Nov. 9 and 10. Coverage focuses on cabinet’s legal power and buyback dollars. The number it leaves out: Statistics Canada counts 221 firearm homicide victims in 2025, the fewest since 2015 and 36% below the 2022 peak of 346. Handguns were used in 112 of them, rifles or shotguns in 70.",
 content: `
<p><strong>TL;DR:</strong> The Supreme Court of Canada is hearing four appeals against the federal government’s May 2020 ban on assault-style firearms on Monday, Nov. 9 and Tuesday, Nov. 10. The Globe and Mail calls it the biggest hearing at the top court this fall. The court will decide whether cabinet had the power to ban the guns by regulation. The number the big outlets are not using comes from Statistics Canada: police reported <strong>221 firearm homicide victims in 2025</strong>. That is the <strong>fewest since 2015</strong>, down <strong>23.3%</strong> from 288 in 2024 and <strong>36.1%</strong> from the 2022 peak of 346. Handguns were used in <strong>112</strong> of those homicides and rifles or shotguns in <strong>70</strong>.</p>

<h2 id="supreme-court-firearms-ban-hearing">The firearms ban reaches the Supreme Court</h2>
<p>In May 2020, the federal government prohibited the use, sale and importation of 1,500 firearms models and variants, including the AR-15 and Ruger Mini-14, <a href="https://www.winnipegfreepress.com/canada/2026/11/09/in-the-news-today-gun-ban-court-fight-osap-pause-b-c-storms-laboratory-fined" target="_blank" rel="noopener">The Canadian Press reported on Nov. 9</a>. Ottawa used regulatory powers rather than legislation. It increased the list to more than 2,500 types of firearms in late 2024 and early 2025, according to <a href="https://www.theglobeandmail.com/canada/article-gun-users-battle-ottawas-firearms-ban-at-supreme-court/" target="_blank" rel="noopener">The Globe and Mail</a> (David Ebner). Opponents lost in the Federal Court and the Federal Court of Appeal. A Federal Court judge dismissed a request to strike down the ban in October 2023. The Supreme Court agreed in March to hear the appeals.</p>
<div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#eef0f5;"><iframe src="https://www.youtube-nocookie.com/embed/P_z8EhGAXQE" title="Supreme Court Weighs Gun Ban as Homicides Fall" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
<p>According to the <a href="https://www.scc-csc.ca/cases-dossiers/hearings-audiences/scheduled-prevues/41858-41859-41860-41861/" target="_blank" rel="noopener">Supreme Court’s counsel sheet</a>, four cases are being heard together: Christine Generoux et al., the Canadian Coalition for Firearm Rights et al., Michael John Doherty et al., and Jennifer Eichenberg et al., all against the Attorney General of Canada. On day one, the appellants and the federal government each get 90 minutes. Day two is for interveners, including the attorneys general of Ontario, Saskatchewan and Alberta, with 10 minutes each. The court is not expected to rule at the hearing. A judgment will come later.</p>
<p>The Globe reports that several self-represented litigants will argue without a lawyer, including Generoux, from Ottawa. “Sport shooting is destroyed and hunting disrupted,” she stated in her filing. The Canadian Coalition for Firearm Rights argued the regulations were too vague to be within Ottawa’s powers. It also argued that mass shootings are rare in Canada and most high-profile shootings involve illegal guns. Five other gun groups and the provinces of Alberta, Saskatchewan and Ontario also oppose the ban. Alberta’s filing said Ottawa criminalized firearms ownership “at the stroke of a pen” for more than 100,000 Canadians licensed to own such guns. Ontario stated: “The regulations are unconstitutional.”</p>
<p>Ottawa’s response began by listing mass shootings in which killers used assault-style firearms, including Portapique, N.S., in 2020, École Polytechnique in 1989 and the Quebec City mosque in 2017. It argues Parliament has long given cabinet broad discretion to prohibit firearms in the interest of public safety, and that the ban “was reasonable and justified by the serious public safety concerns these firearms pose.” The Canadian Coalition for Gun Control is the only intervener explicitly backing Ottawa, the Globe reports.</p>

<h2 id="buyback-and-amnesty">What happens to the guns: buyback and amnesty</h2>
<p>An amnesty protects owners of the prohibited firearms until <strong>90 days after the Supreme Court rules</strong>. <a href="https://www.canada.ca/en/public-safety-canada/campaigns/firearms-buyback.html" target="_blank" rel="noopener">Public Safety Canada</a> says the amnesty orders for the 2020, 2024 and 2025 prohibitions now expire on that timeline. The declaration period for individuals has ended, and collection, deactivation and compensation were expected to run from spring to early fall 2026. The business program has closed. “While participating in the program is voluntary, compliance with the law is not,” the department says.</p>
<p>As of mid-2026, the federal government had paid businesses <strong>$96 million</strong> for about <strong>74,000</strong> guns, an average of about <strong>$1,300</strong> per weapon, the Globe reports.</p>

<h2 id="by-the-numbers">By the numbers: firearm homicides in Canada</h2>
<p>Statistics Canada’s Homicide Survey counts homicide victims by the type of firearm used. Its latest data, released July 22, 2026, cover 2025:</p>
<table>
<thead><tr><th>Year</th><th>Firearm homicide victims</th><th>Handgun</th><th>Rifle or shotgun</th><th>Share of all homicides</th></tr></thead>
<tbody>
<tr><td>2015</td><td>181</td><td>102</td><td>62</td><td>30.4%</td></tr>
<tr><td>2020</td><td>280</td><td>138</td><td>86</td><td>37.9%</td></tr>
<tr><td>2021</td><td>299</td><td>171</td><td>81</td><td>39.2%</td></tr>
<tr><td>2022</td><td><strong>346</strong> (peak)</td><td>218</td><td>79</td><td>40.0%</td></tr>
<tr><td>2023</td><td>297</td><td>169</td><td>75</td><td>38.6%</td></tr>
<tr><td>2024</td><td>288</td><td>162</td><td>99</td><td>37.5%</td></tr>
<tr><td>2025</td><td><strong>221</strong></td><td><strong>112</strong></td><td><strong>70</strong></td><td><strong>34.5%</strong></td></tr>
</tbody>
</table>
<ul>
<li><strong>221</strong> firearm homicide victims in 2025 is the lowest count since 2015 (181).</li>
<li>That is down <strong>23.3%</strong> from 2024 (288) and <strong>36.1%</strong> from the 2022 peak (346).</li>
<li>Handguns accounted for <strong>60.9%</strong> of 2025 firearm homicides where the gun type was known; rifles or shotguns for <strong>38.0%</strong>. In 37 cases the type was unknown.</li>
<li>Canada recorded <strong>672</strong> homicide victims of all kinds in 2025, down from 797 in 2024 (Table 35-10-0069-01).</li>
</ul>
<p>Two cautions. First, Statistics Canada does not separate the banned “assault-style” models from other rifles and shotguns, so these numbers cannot show how often banned guns were used. Second, the data show <em>that</em> firearm homicides fell, not <em>why</em>. They do not prove or disprove that the ban worked. Homicides are counted in the year police report them, and “share of all homicides” excludes cases where the cause of death is unknown.</p>
<p>Sources: <a href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3510017001" target="_blank" rel="noopener">Statistics Canada Table 35-10-0170-01</a> (homicide victims by type of firearm) and <a href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3510006901" target="_blank" rel="noopener">Table 35-10-0069-01</a> (homicide victims by method). See how Canadian Data Insights uses Statistics Canada data on our <a href="/sources/">sources page</a>.</p>

<h2 id="why-it-matters-firearms-ban">Why it matters</h2>
<p>The legal question is narrow: whether cabinet could ban more than 1,500 models (now more than 2,500) by regulation instead of through a law passed by Parliament. The stakes are broad. Whatever the court decides, the 90-day amnesty clock starts with its ruling. The data add a backdrop that rarely appears in the debate. Firearm homicides are down to 221, the fewest since 2015, and handguns, not rifles or shotguns, still account for most of them.</p>
<p>Sources: <a href="https://www.theglobeandmail.com/canada/article-gun-users-battle-ottawas-firearms-ban-at-supreme-court/" target="_blank" rel="noopener">The Globe and Mail</a> · <a href="https://www.winnipegfreepress.com/canada/2026/11/09/in-the-news-today-gun-ban-court-fight-osap-pause-b-c-storms-laboratory-fined" target="_blank" rel="noopener">The Canadian Press</a> · <a href="https://www.scc-csc.ca/cases-dossiers/hearings-audiences/scheduled-prevues/41858-41859-41860-41861/" target="_blank" rel="noopener">Supreme Court of Canada counsel sheet</a> · <a href="https://www.canada.ca/en/public-safety-canada/campaigns/firearms-buyback.html" target="_blank" rel="noopener">Public Safety Canada</a> · <a href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3510017001" target="_blank" rel="noopener">Statistics Canada Table 35-10-0170-01</a> · <a href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3510006901" target="_blank" rel="noopener">Statistics Canada Table 35-10-0069-01</a></p>
<p><em>Topic chosen using Google Trends Canada interest on the morning of Nov. 9, 2026. Canadian Data Insights is for education only, not legal advice. Firearm owners should confirm their obligations with Public Safety Canada or the RCMP.</em></p>
 `,
 },
 {
 title: "Quebec Ends Universal Free Flu Shots: 7,046,190 Residents Under 65 Lose Automatic Coverage",
 slug: "canadian-news-roundup-2026-11-08",
 date: "November 8, 2026",
 category: "News",
 readTime: "6 min read",
 author: "Andrew",
 heroImage: "/images/blog/canadian-news-roundup-2026-11-08.png",
 chartType: 'bar',
 chartTitle: "Quebec population on July 1, 2026 — Statistics Canada Table 17-10-0005-01",
 chartData: [
 { name: "Under 65", value: 7046190 },
 { name: "65 and older", value: 2020924 },
 ],
 excerpt: "Quebec is the only Canadian province that no longer offers free flu shots to everyone, as cases run about five times higher than last year at this time. Outlets have not quantified who lost automatic coverage: Statistics Canada counts 7,046,190 Quebecers under 65 on July 1, 2026 — 77.7% of the province. They are no longer automatically eligible (exceptions include chronic conditions, pregnancy, health-care workers, certain residences and household contacts). Another 2,020,924 residents aged 65 and older still qualify by age.",
 content: `
<p><strong>TL;DR:</strong> Quebec has returned to a pre-pandemic, risk-based flu-shot program and is now the only Canadian province that does not offer free flu shots to everyone, <a href="https://www.cbc.ca/news/canada/montreal/quebec-flu-shots-9.7412417" target="_blank" rel="noopener">CBC News reported on Nov. 8</a>. Infectious disease physician Dr. Don Vinh told CBC cases are about <strong>five times higher</strong> than last year at this time — a rise he said is likely <em>not</em> caused by the policy shift — and that people who pay out of pocket face a bill of <strong>$30 to $60</strong>. The number the big outlets are not using: Statistics Canada counts <strong>7,046,190 Quebecers under 65</strong> on July 1, 2026 — <strong>77.7%</strong> of the province’s 9,067,114 residents — who are no longer automatically eligible for a free shot. That is not the same as saying all of them must pay. Another <strong>2,020,924</strong> Quebecers aged 65 and older (22.3% of the province, versus 20.0% of Canada) still qualify by age.</p>

<h2 id="quebec-flu-shots-not-universal">Quebec is the only province without free flu shots for everyone</h2>
<p>This fall, Quebec stopped providing free flu shots to everyone and returned to the risk-based model it used before the pandemic (CBC News, Hayley Carolan, posted Nov. 8, 2026, 4:00 a.m. EST). During the pandemic the province offered free flu vaccines to everyone as an “exceptional” measure; CBC notes it also stopped paying for everyone’s COVID-19 vaccines last year.</p>
<div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#eef0f5;"><iframe src="https://www.youtube-nocookie.com/embed/Oov4k-H78ew" title="7 Million Quebecers Lost Automatic Flu Coverage" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
<p>The Globe and Mail reported the policy change on Sept. 4, 2026 (Tu Thanh Ha and Alanna Smith): other provinces reached by the Globe said they were still maintaining flu-shot coverage, typically offering the vaccine free to everyone six months of age and older. Quebec’s Health Department told the Globe the decision relied on guidance from the province’s immunization committee (CIQ). Department spokesman Émile Giard said that in recent years, “particularly during the pandemic, the decision was made to offer free vaccination to everyone,” and that “this year marks a change so that the vaccination program reflects the recommendations of the CIQ.” The <a href="https://montrealgazette.com/news/provincial-news/quebec-no-longer-offering-free-flu-vaccines-to-everyone/" target="_blank" rel="noopener">Montreal Gazette</a> (Abby McLaughlin, Sept. 30, 2026) quoted Health Ministry spokesperson Marie-Christine Patry using the same wording. The Globe also reported that an 11-page interim CIQ scientific opinion released in April recommended harmonizing the criteria for Quebec’s flu and COVID-19 vaccination programs, citing an interest in synchronizing the fall campaigns “to increase coverage, facilitate planning and reduce costs.”</p>
<p>Vinh, of the McGill University Health Centre, told CBC the out-of-pocket cost creates “an equity barrier to people who have to pay out of pocket, $30 to $60 for a flu shot.” In an earlier Globe and Mail report (Oct. 2, 2026), Marilie Beaulieu-Gravel of the Association québécoise des pharmaciens propriétaires said people who do not qualify can expect to pay between $30 and $40. Quebec’s <a href="https://www.quebec.ca/en/health/advice-and-prevention/vaccination/flu-vaccine" target="_blank" rel="noopener">official flu-vaccine page</a> (last updated Oct. 13, 2026) does not publish a price; it tells people to contact a pharmacy or medical clinic.</p>
<p>CBC summarized free coverage this year as: people aged 65 and older; people aged 6 months and older with certain chronic conditions; residents of CHSLDs, senior housing, intermediate care facilities for seniors, or private senior residences; pregnant people at 13 weeks or more; health-care workers; and people living in the same household as those groups. Quebec’s official page lists the same core groups in more detail — including pregnant people with certain chronic diseases at any stage, or who are healthy and at 13 weeks or more; residents of CHSLDs, Elders’ Houses, RI-SAPA intermediate resources, RPAs and similar communal settings; health-care staff; and household relatives or informal caregivers of a child under 6 months, a person aged 75 or older, a resident of those settings, a pregnant person, or a person living with certain chronic diseases. The page says a health professional can help if someone is unsure.</p>
<p>Canada’s National Advisory Committee on Immunization (NACI) recommends the flu vaccine for all children from six months to under five years old. CBC reported that Quebec only pays for children with certain chronic conditions.</p>
<p>Vinh told CBC flu cases are around five times higher than last year at this time, but that this is not likely linked to the change in vaccination strategy. He said the season started earlier, and that increased travel and climate change — which can affect how viruses mutate — could also be factors. Limiting funding to higher-risk groups, he said, is “an administrative decision, not a medical one.” National and international committees, he said, agree that people aged six months and older benefit from the flu vaccine. He warned the policy could discourage vaccination, that some eligible people might not realize they qualify, and that illness uses health-care resources and leads to missed school and work.</p>
<p>Quebec’s public health institute told CBC the idea is to decrease hospitalization by vaccinating more people in higher-risk groups. It said young adults with chronic disease in Quebec have a vaccination rate of less than 50 per cent, and that its priority is more initiatives to reach this group, without specifying how. The health ministry told CBC that universal programs do not necessarily mean more people get vaccinated, and that the goal is not to eliminate flu cases but to prevent serious complications, hospitalization and death. The institute said a risk-based strategy could prevent more hospitalizations than a universal one.</p>
<p>Dr. Jesse Papenburg, a pediatric infectious disease specialist at the Montreal Children’s Hospital and president of the committee that makes Quebec’s vaccine recommendations — not speaking on behalf of the group — told CBC it is still too early to know whether there will be more cases overall this year or a shift in the usual timeline. Quebec is an outlier in Canada, he said, but some European countries use targeted approaches. “It’s about making sure that we’re using our health-care resources in an efficient way, in a cost-effective way,” he said. The health ministry told CBC that vulnerable people should get their shots before the holiday season, and that flu, COVID-19 and RSV vaccines can be given in the same appointment.</p>

<h2 id="by-the-numbers">By the numbers: who lost automatic coverage</h2>
<p>Coverage says Quebec is the only province without universal free flu shots, and that cases are about five times higher than last year at this time. Statistics Canada lets us put a count on the population that is no longer automatically covered by age — and on the preschool ages closest to the group NACI flags as particularly important:</p>
<table>
<thead><tr><th>Measure</th><th>Figure</th></tr></thead>
<tbody>
<tr><td>Quebec population, July 1, 2026</td><td>9,067,114</td></tr>
<tr><td>Quebec aged 65 and older (still automatically eligible by age)</td><td><strong>2,020,924</strong> (22.3%)</td></tr>
<tr><td>Quebec under 65 (no longer automatically eligible)</td><td><strong>7,046,190</strong> (77.7%)</td></tr>
<tr><td>Canada aged 65 and older, July 1, 2026</td><td>8,378,381 of 41,798,407 (20.0%)</td></tr>
<tr><td>Quebec aged 65 and older, July 1, 2025</td><td>1,962,813</td></tr>
<tr><td>Quebec aged 65 and older, July 1, 2024</td><td>1,905,282</td></tr>
<tr><td>Quebec change in 65-and-older population, 2025 to 2026</td><td>+58,111 (+3.0%)</td></tr>
<tr><td>Quebec children aged 0 (under 1 year), July 1, 2026</td><td>78,176</td></tr>
<tr><td>Quebec children aged 1</td><td>77,535</td></tr>
<tr><td>Quebec children aged 2</td><td>79,271</td></tr>
<tr><td>Quebec children aged 3</td><td>82,309</td></tr>
<tr><td>Quebec children aged 4</td><td>88,875</td></tr>
<tr><td>Quebec children aged 1 to 4 combined</td><td>327,990</td></tr>
<tr><td>Quebec children aged 0 to 4</td><td>406,166</td></tr>
</tbody>
</table>
<p>Under-65 Quebecers are no longer <em>automatically</em> covered. Many still qualify — including people with certain chronic conditions, pregnant people (from 13 weeks if otherwise healthy), health-care workers, residents of listed senior-care settings, and specified household contacts or caregivers. The 7,046,190 figure is the age-based upper bound of who lost automatic eligibility, not a count of people who must pay.</p>
<p>The 0-to-4 totals are the closest published Statistics Canada ages to NACI’s “six months to under five years” group. They are not an exact match: age 0 includes infants under six months, who are not recommended for the flu vaccine, and the table has no “6 months to 4 years” bin.</p>
<p>Sources: Statistics Canada Table 17-10-0005-01 (population estimates on July 1, by age and gender). The table’s reference date appears as 2026-01-01; the underlying raw period is July 1, 2026. <a href="https://canadiandatainsights.com/location/quebec/" target="_blank" rel="noopener">Canadian Data Insights’ Quebec profile</a>, based on the 2021 Census, reports a provincial population of 8,501,833 (up 4.1% from 8,164,361 in 2016), including 422,980 children aged 0 to 4. That Census count is a different vintage from the July 1, 2026 estimates above.</p>

<h2 id="why-it-matters-quebec-flu">Why the under-65 count matters</h2>
<p>More than seven million Quebecers under 65 are no longer automatically offered a free flu shot, in the only province that has dropped universal coverage, while a physician at the MUHC is telling CBC that cases are already about five times higher than last year at this time. Vinh argues the funding limit is an administrative choice, not a medical one, and that eligible people may not realize they still qualify. Quebec’s public health institute and health ministry counter that a targeted program can focus resources on people at highest risk of hospitalization and death — including young adults with chronic disease, whose vaccination rate the institute put at less than 50 per cent.</p>
<p>Those are policy arguments. The unused number is simpler: 7,046,190 residents under 65 have lost automatic coverage, 2,020,924 aged 65 and older still have it by age, and the closest published count of preschool-age children — the group NACI says is particularly important to vaccinate — is 78,176 children aged 0 (under 1 year) plus 327,990 children aged 1 to 4.</p>
<p>Sources: <a href="https://www.cbc.ca/news/canada/montreal/quebec-flu-shots-9.7412417" target="_blank" rel="noopener">CBC News (Hayley Carolan)</a> · <a href="https://www.theglobeandmail.com/canada/article-quebec-will-not-administer-free-flu-shots-this-fall/" target="_blank" rel="noopener">The Globe and Mail (Sept. 4, 2026)</a> · <a href="https://www.theglobeandmail.com/canada/article-quebec-lose-flu-shot-coverage-vaccine-covid-19/" target="_blank" rel="noopener">The Globe and Mail (Oct. 2, 2026)</a> · <a href="https://montrealgazette.com/news/provincial-news/quebec-no-longer-offering-free-flu-vaccines-to-everyone/" target="_blank" rel="noopener">Montreal Gazette</a> · <a href="https://www.quebec.ca/en/health/advice-and-prevention/vaccination/flu-vaccine" target="_blank" rel="noopener">Gouvernement du Québec, Flu vaccination</a> · <a href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710000501" target="_blank" rel="noopener">Statistics Canada Table 17-10-0005-01</a> · <a href="https://canadiandatainsights.com/location/quebec/" target="_blank" rel="noopener">CDI Quebec profile</a></p>
<p><em>Topic chosen using Google Trends Canada interest on the morning of Nov. 8, 2026. Canadian Data Insights is for education only, not medical advice. This is not a substitute for advice from a qualified health professional. Eligibility, timing and cost can change; verify them with Quebec public-health sources, the official flu-vaccine page, or your health-care provider.</em></p>
 `,
 },

 {
 title: "Budget 2026's 'RRSP-for-Life': 449,576 Canadians Turn 71 This Year",
 slug: "canadian-news-roundup-2026-11-07",
 date: "November 7, 2026",
 category: "News",
 readTime: "5 min read",
 author: "Andrew",
 heroImage: "/images/blog/canadian-news-roundup-2026-11-07.png",
 chartType: 'bar',
 chartTitle: "Canadians aged 71 on July 1 — Statistics Canada Table 17-10-0005-01",
 chartData: [
 { name: "2024", value: 411125 },
 { name: "2025", value: 430797 },
 { name: "2026", value: 449576 },
 ],
 excerpt: "Budget 2026 proposes an 'RRSP-for-life' that ends the forced RRSP-to-RRIF conversion at 71. Outlets say 'hundreds of thousands' a year are affected — StatsCan counts 449,576 Canadians aged 71 this year, up 9.4% in two years. But only 21% of tax filers contributed to an RRSP in 2023.",
 content: `
<p><strong>TL;DR:</strong> Budget 2026 proposes merging the RRSP and RRIF into a single <strong>"RRSP-for-life"</strong>, which the budget says "would eliminate the need for individuals to convert their RRSP to a RRIF at age 71." Minimum withdrawals stay, contributions still stop at 71, and a consultation runs to <strong>Jan. 8, 2027</strong>. The number the big outlets aren't using: Statistics Canada counts <strong>449,576 Canadians aged 71</strong> on July 1, 2026 — up <strong>9.4%</strong> from 411,125 in 2024 — with <strong>462,003</strong> aged 70 right behind them. But only <strong>21% of tax filers</strong> (6.35 million of 29.97 million) made an RRSP contribution in 2023.</p>

 <h2 id="budget-2026-rrsp-for-life">What Budget 2026 proposes for RRSPs</h2>
 <p>Finance Minister François-Philippe Champagne tabled Budget 2026 on Nov. 5. Today, Canadians must cash out their RRSP, buy an annuity, or convert it to a Registered Retirement Income Fund (RRIF) by the end of the year they turn 71. The budget proposes folding the core features of the two accounts into one plan that stays open for life.</p>
 <div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#eef0f5;"><iframe src="https://www.youtube-nocookie.com/embed/a41JnpN86qk" title="The RRSP Rule 449,576 Canadians Face" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
 <ul>
 <li><strong>No forced conversion:</strong> the RRSP would no longer have to become a RRIF at 71 (Budget 2026, quoted by Global News; Investment Executive).</li>
 <li><strong>Minimum withdrawals stay:</strong> holders would still have to withdraw a minimum share each year, based on life expectancy (CBC News; Investment Executive).</li>
 <li><strong>No new contribution years:</strong> contributions still end in the year you turn 71, the Finance Minister's press secretary confirmed to CBC.</li>
 <li><strong>Successor holder:</strong> a surviving spouse or common-law partner could become a "successor holder", with simpler tax-free transfers to qualified survivors (CBC; Investment Executive).</li>
 <li><strong>Timing:</strong> a Finance Canada consultation runs until <strong>Jan. 8, 2027</strong>. Nothing changes until legislation passes; CIBC's Jamie Golombek expects it could take years (CBC; Global News).</li>
 <li><strong>2026 contribution limit:</strong> 18% of 2025 earned income, up to <strong>$33,810</strong> (CBC).</li>
 </ul>

 <h2 id="by-the-numbers">By the numbers: who the change actually touches</h2>
 <p>Coverage says the conversion is paperwork for "hundreds of thousands" every year. Statistics Canada lets us put an exact count on it — and on how many Canadians use RRSPs at all:</p>
 <table>
 <thead><tr><th>Measure</th><th>Figure</th></tr></thead>
 <tbody>
 <tr><td>Canadians aged 71, July 1, 2024</td><td>411,125</td></tr>
 <tr><td>Canadians aged 71, July 1, 2025</td><td>430,797</td></tr>
 <tr><td>Canadians aged 71, July 1, 2026</td><td><strong>449,576</strong> (+9.4% vs 2024)</td></tr>
 <tr><td>Canadians aged 70, July 1, 2026 (next year's cohort)</td><td>462,003</td></tr>
 <tr><td>Canadians aged 65+, July 1, 2026</td><td>8,378,381 (20.0% of 41.8 million)</td></tr>
 <tr><td>Tax filers with RRSP contributions, 2023</td><td>6,350,070 of 29,965,100 (21%)</td></tr>
 <tr><td>Total RRSP contributions, 2023</td><td>$55.73 billion</td></tr>
 <tr><td>Median RRSP contribution, 2023</td><td>$4,000</td></tr>
 <tr><td>Average age of RRSP contributors, 2023</td><td>46</td></tr>
 <tr><td>Share of contributors aged 65+, 2023</td><td>7% (11% of contribution dollars)</td></tr>
 </tbody>
 </table>
 <p>By province, the 71-year-old cohort on July 1, 2026 is largest in Ontario (166,319), Quebec (107,760), British Columbia (64,627) and Alberta (46,523), followed by Manitoba (14,805), Nova Scotia (13,784), Saskatchewan (13,285), New Brunswick (11,439), Newfoundland and Labrador (7,966) and P.E.I. (2,114).</p>
 <p>Sources: Statistics Canada Table 17-10-0005-01 (population estimates on July 1, by age) and Table 11-10-0044-01 (tax filers with RRSP contributions, 2023 tax year). Not everyone aged 71 holds an RRSP; the cohort is the upper bound of who faces the age-71 deadline this year.</p>

 <h2 id="why-it-matters-rrsp-for-life">Why the cohort size matters</h2>
 <p>The age-71 deadline arrives for a bigger group every year: nearly 450,000 Canadians this year and more than 460,000 next. Removing a forced account switch for that many people — and letting a surviving spouse simply take over the plan — is real relief for families and for the banks that chase every client turning 71.</p>
 <p>But the reform is a convenience fix for people who already saved. Only about one in five tax filers put money into an RRSP in 2023, and CPA Canada's Li Zhang told CBC that only 33 to 37 per cent of Canadians have access to a pension. For seniors without registered savings, "RRSP-for-life" changes nothing. The withdrawal minimums — and the tax that comes with them — also stay.</p>
 <p>Sources: <a href="https://www.cbc.ca/news/business/rrsp-for-life-9.7412568" target="_blank" rel="noopener">CBC News (Jeff Lagerquist)</a> · <a href="https://globalnews.ca/news/12139983/budget-2026-rrsp-for-life/" target="_blank" rel="noopener">Global News (Uday Rana)</a> · <a href="https://www.investmentexecutive.com/news/economy/budget-2026/budget-proposes-rrsp-for-life-eliminating-need-to-convert-to-rrif/" target="_blank" rel="noopener">Investment Executive</a> · <a href="https://budget.canada.ca/2026/report-rapport/pdf/budget-2026.pdf" target="_blank" rel="noopener">Budget 2026</a> · <a href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710000501" target="_blank" rel="noopener">Statistics Canada Table 17-10-0005-01</a> · <a href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1110004401" target="_blank" rel="noopener">Statistics Canada Table 11-10-0044-01</a></p>
 <p><em>Topic chosen using Google Trends Canada interest on the morning of Nov. 7, 2026. Canadian Data Insights is for education only, not financial or tax advice. Verify primary sources.</em></p>
 `,
 },

 {
 title: "Canada Spends $665 Per Capita on Defence. Budget 2026 Charts $157B by 2030",
 slug: "canadian-news-roundup-2026-11-06",
 date: "November 6, 2026",
 category: "News",
 readTime: "5 min read",
 author: "Andrew",
 heroImage: "/images/blog/canadian-news-roundup-2026-11-06.png",
 chartType: 'bar',
 chartTitle: "Defence spending per capita, 2024 (CAD) — Statistics Canada CCOFOG",
 chartData: [
 { name: "CGG defence", value: 665 },
 { name: "Federal defence", value: 676 },
 { name: "Federal military", value: 620 },
 ],
 excerpt: "Budget 2026 charts a path to ~$157 billion a year on defence by 2030 (4%+ of GDP) and 5% by 2035. StatsCan already puts consolidated defence at $665 per Canadian in 2024 — the baseline outlets aren't pairing with that path.",
 content: `

 <p><strong>TL;DR:</strong> Budget 2026 charts a path to slightly more than <strong>4% of GDP on defence</strong> — about <strong>$157 billion a year by 2030</strong> — and toward NATO's <strong>5% by 2035</strong>. By 2030-31 that means <strong>$99.2 billion</strong> in direct military spending plus <strong>$58.3 billion</strong> for defence infrastructure. The number the big outlets aren't putting next to that path: Statistics Canada already puts consolidated Canadian defence at <strong>$665 per capita in 2024</strong> (+13.3% from $587), and federal defence at <strong>$676</strong> (military defence <strong>$620</strong> of that).</p>

 <h2 id="federal-budget-2026-defence-spending">What Budget 2026 says on defence</h2>
 <p>Finance Minister François-Philippe Champagne tabled Budget 2026 — titled <em>Masters of our destiny</em> — on Nov. 5 under Prime Minister Mark Carney. Canada.ca Key Measures says the plan builds on Canada's achievement of NATO's 2% of GDP defence target and puts the country "on track to spend 4% of GDP on defence this decade and reach 5% of GDP by 2035," with investments in the Defence Industrial Strategy and the Defence Drone Initiative.</p>
 <div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#eef0f5;"><iframe src="https://www.youtube-nocookie.com/embed/wazdm_5FbVk" title="Canada Already Spends $665 on Defence" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
 <ul>
 <li><strong>2030 path:</strong> slightly more than 4% of GDP — roughly <strong>$157 billion</strong> annually by the end of the decade (CBC News, Murray Brewster).</li>
 <li><strong>2030-31 split:</strong> direct military spending <strong>$99.2 billion</strong> + defence infrastructure <strong>$58.3 billion</strong> (CBC).</li>
 <li><strong>Near term:</strong> ongoing budget year direct <strong>$75 billion</strong> + infrastructure <strong>$50 billion</strong>; 2027-28 direct <strong>$89 billion</strong> + infrastructure <strong>$52 billion</strong> (CBC).</li>
 <li><strong>NATO frame:</strong> 5% of GDP by 2035 (3.5% military + 1.5% defence-related); 2029 is the review year (CBC).</li>
 <li><strong>Defence Drone Initiative:</strong> <strong>$2.3 billion over five years</strong>, starting next year (CBC).</li>
 <li><strong>Operation REASSURANCE:</strong> Canada.ca Key Measures provides <strong>$7.6 billion over five years</strong> to extend and expand Canada's largest overseas mission on NATO's Eastern Flank. CBC, citing the Defence Department's annual budget, puts a <strong>$7.1 billion</strong> figure on the extended Latvia mission — prefer the Canada.ca figure; the two are not reconciled here.</li>
 <li><strong>Equipment:</strong> references already-planned purchases of up to 12 submarines, airborne early warning jets, armoured vehicles and drones; light on other equipment detail (CBC).</li>
 </ul>
 <p>Associated Press reports the budget includes about <strong>$142.1 billion CAD</strong> in multiyear spending and tax breaks. Broader Budget 2026 measures (housing, groceries top-up, critical minerals, electricity) are context only — this deep-dive is the defence path.</p>

 <h2 id="by-the-numbers">By the numbers: StatsCan defence per capita vs the budget path</h2>
 <p>Statistics Canada's Canadian Classification of Functions of Government (CCOFOG) release for 2024 puts today's baseline in dollars per Canadian — the comparison outlets are not leading with:</p>
 <table>
 <thead><tr><th>Measure</th><th>Figure</th></tr></thead>
 <tbody>
 <tr><td>Consolidated CGG defence per capita, 2024</td><td>$665 (+13.3% from $587)</td></tr>
 <tr><td>Federal defence per capita, 2024</td><td>$676</td></tr>
 <tr><td>— of which military defence</td><td>$620</td></tr>
 <tr><td>Budget path ≈4% of GDP by end of decade</td><td>~$157 billion / year</td></tr>
 <tr><td>2030-31 direct military</td><td>$99.2 billion</td></tr>
 <tr><td>2030-31 defence infrastructure</td><td>$58.3 billion</td></tr>
 <tr><td>Ongoing year: direct + infrastructure</td><td>$75B + $50B</td></tr>
 <tr><td>2027-28: direct + infrastructure</td><td>$89B + $52B</td></tr>
 <tr><td>Defence Drone Initiative</td><td>$2.3B / 5 years</td></tr>
 <tr><td>Operation REASSURANCE (Canada.ca)</td><td>$7.6B / 5 years</td></tr>
 </tbody>
 </table>
 <p>Sources for the per-capita rows: Statistics Canada The Daily (Nov. 27, 2025), Table 1 consolidated per capita CCOFOG 2024, and Overview infographic 11-627-M2025056. Federal defence rows are unconsolidated federal government data.</p>

 <h2 id="why-it-matters-defence-path">Why the per-capita baseline matters</h2>
 <p>A climb to four-plus per cent of GDP is a fiscal choice measured in hundreds of billions. Starting from <strong>$665 per Canadian</strong> in consolidated defence (and <strong>$676</strong> federally) makes the scale of that climb concrete — without inventing a reconciliation between per-capita accounting and the budget's cash path.</p>
 <p>Analysts quoted by CBC are already asking whether fiscal pressure and the 2029 NATO review will hold the line after 2030, and whether the Defence Department can spend the money fast enough that it does not become a tempting offset for other priorities. Execution — submarines, AEW jets, drones, Latvia — will decide whether the path on paper becomes kit in the field.</p>
 <p>Sources: <a href="https://www.cbc.ca/news/politics/defence-budget-military-nato-trump-9.7411329" target="_blank" rel="noopener">CBC News (Murray Brewster)</a> · <a href="https://www.canada.ca/en/department-finance/news/2026/11/budget-2026-key-measures.html" target="_blank" rel="noopener">Canada.ca Budget 2026 Key Measures</a> · <a href="https://apnews.com/article/canada-budget-carney-trump-1ec6134771fbeaea75552415b1bab8c9" target="_blank" rel="noopener">Associated Press</a> · <a href="https://www150.statcan.gc.ca/n1/daily-quotidien/251127/dq251127b-eng.htm" target="_blank" rel="noopener">Statistics Canada The Daily</a> · <a href="https://www150.statcan.gc.ca/n1/daily-quotidien/251127/t001b-eng.htm" target="_blank" rel="noopener">StatsCan Table 1</a> · <a href="https://www150.statcan.gc.ca/n1/pub/11-627-m/11-627-m2025056-eng.htm" target="_blank" rel="noopener">StatsCan Overview 11-627-M</a> · <a href="https://budget.canada.ca/2026/report-rapport/pdf/budget-2026.pdf" target="_blank" rel="noopener">Budget 2026 PDF</a></p>
 <p><em>Topic chosen using Google Trends Canada interest on the morning of Nov. 6, 2026. Canadian Data Insights is for education only. Verify primary sources.</em></p>
 `,
 },

 {
 title: "Sherritt Lays Off 47% of Canadian Staff. Canada Has Only Three Nickel Refineries",
 slug: "canadian-news-roundup-2026-11-05",
 date: "November 5, 2026",
 category: "News",
 readTime: "5 min read",
 author: "Andrew",
 heroImage: "/images/blog/canadian-news-roundup-2026-11-05.png",
 chartType: 'bar',
 chartTitle: "Canada cobalt production 2024 (tonnes), Natural Resources Canada",
 chartData: [
 { name: "Refined cobalt", value: 5920 },
 { name: "Mine cobalt", value: 3351 },
 ],
 excerpt: "Sherritt is temporarily laying off about 280 employees — 47% of its Canadian workforce — for ~90 days while Fort Saskatchewan refining stays idle. Canada refined 5,920 tonnes of cobalt in 2024 at just three plants, and Fort Saskatchewan is one of them.",
 content: `
<p><strong>TL;DR:</strong> Sherritt International is temporarily laying off about <strong>280 employees — 47% of its Canadian workforce</strong> — for roughly 90 days while its Fort Saskatchewan, Alta., nickel and cobalt refinery stays idle. The plant stopped refining on June 22, 2026 after Cuban feed ran out under expanded U.S. sanctions. The number the big outlets aren't putting next to the layoff count: Canada refined only <strong>5,920 tonnes of cobalt in 2024</strong> at <strong>three</strong> refineries, and Fort Saskatchewan is one of them. Nickel mine production was <strong>125,364 tonnes</strong> (fourth globally) and nickel-related exports were <strong>$4.5 billion</strong>.</p>

 <h2 id="sherritt-fort-saskatchewan-layoffs">What Sherritt announced</h2>
 <p>On Nov. 4, Toronto-based Sherritt International Corp. (TSX:S) said it will temporarily lay off approximately 280 employees — 47% of its Canadian staff — as it preserves liquidity and works to restore metals refining at Fort Saskatchewan (Sherritt; The Canadian Press). The company expects the layoffs to last about 90 days, with earlier recalls possible if refining restarts.</p>
 <div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#eef0f5;"><iframe src="https://www.youtube-nocookie.com/embed/fM2bWnJZoDc" title="Why Sherritt Laid Off Half Its Staff" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
 <ul>
 <li><strong>Still running on site:</strong> ammonia fertilizer and sulphuric acid production and sales, necessary maintenance, and environmental protection and safety work continue (Sherritt).</li>
 <li><strong>Why refining stopped:</strong> feed inventory from the Moa joint venture in Cuba was depleted; refining ceased June 22, 2026 (Sherritt; CBC News / The Canadian Press).</li>
 <li><strong>Sanctions path:</strong> after U.S. Executive Order 14404 expanded Cuba-related sanctions, Sherritt suspended direct participation in the Cuban joint venture on May 7, 2026 (Sherritt).</li>
 <li><strong>Regulatory progress:</strong> on Oct. 19, 2026 it received the first of a series of anticipated U.S. Treasury OFAC emergency licences needed to restart mining/processing in Cuba and refining in Canada (Sherritt).</li>
 </ul>
 <p>When refining first paused in June, Sherritt told CBC no jobs were lost at that time and that fertilizer, acid and maintenance would keep the Alberta workforce busy. Today's announcement is the staffing cut that followed months of idle refining capacity.</p>

 <h2 id="by-the-numbers">By the numbers: three Canadian cobalt refineries</h2>
 <p>Natural Resources Canada (citing Statistics Canada production data) puts Canada's critical-minerals refining footprint in plain view:</p>
 <table>
 <thead><tr><th>Canada, 2024</th><th>Figure</th></tr></thead>
 <tbody>
 <tr><td>Refined cobalt production</td><td>5,920 tonnes (3 refineries)</td></tr>
 <tr><td>Cobalt mine production</td><td>~3,351 tonnes</td></tr>
 <tr><td>Cobalt and cobalt-product exports</td><td>$344 million</td></tr>
 <tr><td>Nickel mine production</td><td>125,364 tonnes (4th globally)</td></tr>
 <tr><td>Nickel and nickel-based product exports</td><td>$4.5 billion</td></tr>
 </tbody>
 </table>
 <p>NRCan lists Canada's three key <strong>nickel</strong> refineries as Fort Saskatchewan, Alta.; Sudbury, Ont.; and Long Harbour, N.L. The same three cities host Canada's refined-cobalt capacity (Fort Saskatchewan; Port Colborne, Ont.; Long Harbour). Sherritt calls Fort Saskatchewan the only significant cobalt refinery and one of just three nickel refineries in North America.</p>
 <p><strong>Local Census context:</strong> <a href="/location/fort-saskatchewan/">Fort Saskatchewan</a> had <strong>27,088</strong> people in the 2021 Census (+12.1% from 2016), a median age of 36.0, <strong>13,245 employed</strong> and an unemployment rate of 10.7%. Roughly 280 temporary layoffs equal about <strong>2.1%</strong> of the city's employed labour force if the cuts land locally — a material hit in a city of this size.</p>

 <h2 id="why-it-matters-critical-minerals">Why it matters for critical minerals</h2>
 <p>Nickel and cobalt sit in the batteries and stainless steels of the energy transition. Canada already mines meaningful nickel, but refining capacity is concentrated. When one of three domestic nickel refineries sits idle because Cuban feed and U.S. licences are blocked, the bottleneck is not ore in the ground — it is geopolitics and a thin refining network.</p>
 <p>Sherritt says it remains focused on restarting and on being "a key contributor to North America's critical minerals supply chain." The OFAC licence in October is a start; more licences and a rebuilt feed pipeline are still required before Fort Saskatchewan pours metal again.</p>
 <p>Sources: <a href="https://sherritt.com/sherritt-announces-temporary-workforce-layoffs-as-it-advances-path-toward-restoring-its-metals-refining-operations/" target="_blank" rel="noopener">Sherritt International</a> · <a href="https://www.theglobeandmail.com/business/article-sherritt-layoffs-canadian-staff/" target="_blank" rel="noopener">The Canadian Press via The Globe and Mail</a> · <a href="https://www.cbc.ca/news/canada/edmonton/sherritt-fort-sask-refinery-9.7250254" target="_blank" rel="noopener">CBC News / The Canadian Press (June 2026)</a> · <a href="https://natural-resources.canada.ca/minerals-mining/mining-data-statistics-analysis/minerals-metals-facts/nickel-facts" target="_blank" rel="noopener">NRCan Nickel facts</a> · <a href="https://natural-resources.canada.ca/minerals-mining/mining-data-statistics-analysis/minerals-metals-facts/cobalt-facts" target="_blank" rel="noopener">NRCan Cobalt facts</a> · Statistics Canada, 2021 Census of Population (see <a href="/sources/">sources</a>)</p>
 <p><em>Topic chosen using Google Trends Canada interest on the morning of Nov. 5, 2026. Canadian Data Insights is for education only. Verify primary sources.</em></p>
 `,
 },

 {
 title: "Toys R Us Returns Inside Staples. Canadian Toy Prices Are Still Below 2002 Levels",
 slug: "canadian-news-roundup-2026-11-04",
 date: "November 4, 2026",
 category: "News",
 readTime: "5 min read",
 author: "Andrew",
 heroImage: "/images/blog/canadian-news-roundup-2026-11-04.png",
 chartType: 'bar',
 chartTitle: "Price change to September 2026 (%), Statistics Canada CPI",
 chartData: [
 { name: "All items, 10 years", value: 32.0 },
 { name: "Toys, games & hobby, 10 years", value: 7.7 },
 { name: "All items, 12 months", value: 3.1 },
 { name: "Toys, games & hobby, 12 months", value: 0.4 },
 ],
 excerpt: "Toys R Us is coming back to Canada as shop-in-shops inside roughly 300 Staples stores, starting Nov. 14 in Richmond Hill. The data angle: Canada's price index for toys, games and hobby supplies is still slightly below its 2002 level, while overall prices are up 70%. What the deal is, why the old chain collapsed, and the numbers behind it.",
 content: `
 <p><strong>TL;DR:</strong> Toys "R" Us is returning to Canada, but not as big-box stores. Staples Canada says it will open Toys "R" Us and new Parties "R" Us departments inside its stores, starting with a pilot in <strong>Richmond Hill, Ont., on Nov. 14</strong> and growing to roughly <strong>300 Staples stores</strong> by the end of 2027. The number the big outlets aren't showing you: Statistics Canada's price index for <strong>toys, games and hobby supplies was 99.5 in September 2026</strong>, slightly <em>below</em> its 2002 base of 100. Over the same stretch, all consumer prices rose about <strong>70%</strong> (index 170.0). Toys are one of the few things in the basket that cost about what they did 24 years ago.</p>

 <h2 id="toys-r-us-staples">What Staples and Toys R Us announced</h2>
 <p>On Nov. 3, Staples Canada said it has been named the official and exclusive Canadian retail partner for Toys "R" Us Canada and Parties "R" Us Canada (Staples Canada). The first shop-in-shop opens at the Staples store at 45 Red Maple Road in <a href="/location/richmond-hill-town-t/">Richmond Hill</a>, with a grand opening on Saturday, Nov. 14, plus an online experience on staples.ca.</p>
 <div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#eef0f5;"><iframe src="https://www.youtube-nocookie.com/embed/INZjj2ld004" title="Why Toys R Us Is Moving Into Staples" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
 <ul>
 <li><strong>Scale:</strong> the companies hope to have the departments in roughly 300 Staples stores by the end of 2027 (The Canadian Press).</li>
 <li><strong>New concept:</strong> Parties "R" Us will sell balloons, party goods, seasonal essentials and licensed party products (Staples Canada).</li>
 <li><strong>Who owns the brand now:</strong> Staples' partner is Next Century Ipco Can ULC, an affiliate of U.S. firm Ad Populum, which owns Party City and manages several toy companies. Next Century bought 150 Toys "R" Us Canada trademarks earlier this year (The Canadian Press).</li>
 <li><strong>Still unknown:</strong> Staples offered no hints about which brands or kinds of toys the shops will sell (The Canadian Press via BNN Bloomberg), and no store-by-store schedule.</li>
 </ul>

 <h2 id="how-the-old-chain-collapsed">How the old chain collapsed</h2>
 <p>Toys "R" Us Canada, owned since 2021 by Ancaster, Ont.-based Putman Investments, filed for creditor protection on Feb. 3, 2026. It had closed <strong>53 stores</strong> in the previous two years, owed at least <strong>$120 million</strong> to vendors and "substantial" amounts to landlords, and had 22 stores still open (CBC News / The Canadian Press). In court documents, the company blamed inflation, rising labour costs, supply chain disruptions and a shift toward e-commerce.</p>
 <p>By the time an Ontario court approved splitting the business among three buyers, the chain was down to <strong>15 stores and 260 employees</strong> (CBC News / The Canadian Press). A numbered company run by Doug Putman bought 10 store leases, the inventory and equipment; his lawyers have said he can use the Toys "R" Us name until Jan. 25, 2027, and hopes to extend that or rebrand.</p>

 <h2 id="by-the-numbers">By the numbers: flat toy prices, rising everything else</h2>
 <p>Statistics Canada's Consumer Price Index tracks a category called "toys, games (excluding video games) and hobby supplies." Here's how it compares with the overall index:</p>
 <table>
 <thead><tr><th>CPI, Canada (2002 = 100)</th><th>Toys, games and hobby supplies</th><th>All items</th></tr></thead>
 <tbody>
 <tr><td>September 2016</td><td>92.4</td><td>128.8</td></tr>
 <tr><td>September 2025</td><td>99.1</td><td>164.9</td></tr>
 <tr><td>September 2026</td><td>99.5</td><td>170.0</td></tr>
 <tr><td>Change, 10 years</td><td>+7.7%</td><td>+32.0%</td></tr>
 <tr><td>Change, 12 months</td><td>+0.4%</td><td>+3.1%</td></tr>
 </tbody>
 </table>
 <p>An index of 99.5 means toy prices, on average, are about where they were in 2002, while the overall basket is up 70%. That's a tough place for a big-box toy chain: shelf prices barely move, while the costs the company itself pointed to, like labour and rent, don't stand still.</p>
 <p><strong>The online squeeze:</strong> Canadian retail e-commerce sales hit <strong>$5.27 billion</strong> in August 2026, <strong>6.9%</strong> of all retail sales, up from 6.2% a year earlier. Online sales grew <strong>15.5%</strong> in a year, versus 4.5% for retail overall (Statistics Canada, unadjusted).</p>
 <p><strong>The category still sells:</strong> sporting goods, hobby, musical instrument and book retailers rang up <strong>$1.55 billion</strong> in August 2026, up 4.9% from a year earlier (Statistics Canada, unadjusted).</p>
 <p><strong>The customers:</strong> Canada had <strong>6,012,795</strong> children under 15 in the 2021 Census, 16.3% of the population (<a href="/location/canada/">Canada profile</a>). Richmond Hill, home of the pilot store, had 29,970 children under 15 out of 202,022 residents (<a href="/location/richmond-hill-town-t/">Richmond Hill profile</a>).</p>

 <h2 id="why-it-matters">Why it matters to you</h2>
 <p>For parents, the good news in the data is that toys are one of the rare categories where prices haven't run away. For the brand, a department inside about 300 existing Staples stores means no new big-box leases, the cost that helped sink the old chain. Whether a shop-in-shop can win back holiday shoppers from online retailers is the question to watch, starting Nov. 14 in Richmond Hill.</p>
 <p>Sources: <a href="https://globalnews.ca/news/12134766/toys-r-us-returns-canada-staples-stores/" target="_blank" rel="noopener">The Canadian Press via Global News</a> · <a href="https://www.bnnbloomberg.ca/business/company-news/2026/11/03/toys-r-us-canada-to-open-within-300-staples-stores-by-end-of-2027/" target="_blank" rel="noopener">The Canadian Press via BNN Bloomberg</a> · <a href="https://www.staples.ca/a/learn/staples-canada-named-official-and-exclusive-canadian-retail-partner-for-toys-r-us-canada" target="_blank" rel="noopener">Staples Canada</a> · <a href="https://www.cbc.ca/news/business/toys-r-us-canada-creditor-protection-9.7073015" target="_blank" rel="noopener">CBC News (Feb. 3, 2026)</a> · <a href="https://www.cbc.ca/news/business/toysrus-court-approval-sale-9.7244928" target="_blank" rel="noopener">CBC News (court approval)</a> · <a href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1810000401" target="_blank" rel="noopener">Statistics Canada, table 18-10-0004-01</a> · <a href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=2010005601" target="_blank" rel="noopener">Statistics Canada, table 20-10-0056-01</a> · Statistics Canada, 2021 Census of Population (see <a href="/sources/">sources</a>)</p>
 <p><em>Topic chosen using Google Trends Canada interest on the morning of Nov. 4, 2026. Canadian Data Insights is for education only. Verify primary sources.</em></p>
 `,
 },
 {
 title: "Hackers Hit Europe's Supermarket Fridges. Canadians Spend $309 Million a Day at Grocery Stores",
 slug: "canadian-news-roundup-2026-11-03",
 date: "November 3, 2026",
 category: "News",
 readTime: "5 min read",
 author: "Andrew",
 heroImage: "/images/blog/canadian-news-roundup-2026-11-03.png",
 chartType: 'bar',
 chartTitle: "Sales at supermarkets and other grocery retailers, August 2026 (billions of dollars, unadjusted)",
 chartData: [
 { name: "Ontario", value: 3.31 },
 { name: "Quebec", value: 2.40 },
 { name: "British Columbia", value: 1.43 },
 { name: "Alberta", value: 1.10 },
 { name: "Manitoba", value: 0.35 },
 { name: "Saskatchewan", value: 0.27 },
 { name: "Nova Scotia", value: 0.25 },
 { name: "New Brunswick", value: 0.19 },
 ],
 excerpt: "Canadians spent $9.58 billion at supermarkets and grocery stores in August 2026, about $309 million a day. Hackers just turned up the fridges at grocers in seven European countries. No Canadian store has been hit, but Canada's Cyber Centre has already logged tampering with control systems here. What happened, and the numbers behind it.",
 content: `
 <p><strong>TL;DR:</strong> For the second time in less than a month, hackers took control of supermarket fridges and freezers in Europe, this time at stores in <strong>seven</strong> countries, sending some freezers to <strong>50 C</strong> and forcing grocers to throw out food. No similar incidents have been reported in Canada. But the stakes here are big: Canadians spent <strong>$9.58 billion</strong> at supermarkets and other grocery retailers in August 2026, about <strong>$309 million a day</strong> (Statistics Canada). And Canada's Cyber Centre has already reported hacktivists tampering with internet-connected control systems in Canada, including a grain-drying silo on a farm.</p>

 <h2 id="supermarket-fridge-cyberattack">What happened in Europe's supermarkets</h2>
 <p>A hacking attack on Monday, Nov. 2, raised temperatures in refrigerator and freezer units at dozens of European stores. It hit Ahold Delhaize and Colruyt in Belgium and Luxembourg, Swedish grocers ICA and Coop, and at least one Ikea store (CBC News/Reuters). Stores in seven countries, including Belgium, Sweden and Ireland, reported refrigeration problems linked to suspected cyberattacks (CTV News).</p>
 <p>"Everything is destroyed," an ICA store manager in Stockholm told Reuters. The attack happened at 2 a.m. and was only noticed hours later: "all our freezers reached 50 degrees" (CBC News/Reuters).</p>
 <div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#eef0f5;"><iframe src="https://www.youtube-nocookie.com/embed/PGyO2TomNHE" title="Could Hackers Hit Canada&#39;s Grocery Fridges?" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
 <ul>
 <li><strong>Coop (Sweden):</strong> 7 of its 800 stores affected.</li>
 <li><strong>Carrefour (Belgium):</strong> 15 of its 700 stores.</li>
 <li><strong>Musgrave (Ireland):</strong> 13 SuperValu stores; some chilled and frozen products pulled from sale.</li>
 <li><strong>Colruyt (Belgium):</strong> five shops.</li>
 <li><strong>One Belgian butcher:</strong> about €15,000 ($23,485 Cdn) of meat ruined.</li>
 </ul>
 <p>It follows an attack in France last month, when hackers seized control of cooling units at hundreds of supermarkets, causing fires and food losses. No one has claimed responsibility for either attack (CBC News).</p>

 <h2 id="how-fridges-get-hacked">How a fridge gets hacked</h2>
 <p>In many large grocery stores, every fridge and freezer is linked to a control unit that sets temperatures, runs defrost cycles and raises alarms. Those controllers can often be reached over the internet so maintenance firms can manage them remotely (CTV News).</p>
 <p>At least some of the affected units used temperature-control technology from Danish firm Danfoss, which was also targeted in France. Danfoss said the French units were running outdated firmware or had reached end of life. After a researcher disclosed a vulnerability over the summer, the company released a patch and urged customers to install it (CBC News).</p>

 <h2 id="could-it-happen-in-canada">Could it happen in Canada?</h2>
 <p>No similar incidents have been reported here. Danfoss sells products in Canada, but it is not known which Canadian grocers, if any, use the affected systems. Metro declined to discuss its cybersecurity (CTV News). Cybersecurity expert Ritesh Kotak told CTV that some Canadian stores could, in theory, be vulnerable.</p>
 <p>Canada has seen this kind of tampering before. In an October 2025 alert, the <a href="https://www.cyber.gc.ca/en/alerts-advisories/al25-016-internet-accessible-industrial-control-systems-ics-abused-hacktivists" target="_blank" rel="noopener">Canadian Centre for Cyber Security</a> said it and the RCMP had received multiple reports of hacktivists manipulating internet-accessible industrial control systems: water pressure at a water facility, a tank gauge at an oil and gas company, and temperature and humidity in a grain-drying silo on a Canadian farm. It named food as one of the sectors where regulation doesn't cover cyber security, and advised organizations to inventory exposed devices and use VPNs with two-factor authentication instead of leaving controls open to the internet.</p>

 <h2 id="by-the-numbers">By the numbers: what's riding on Canada's grocery aisles</h2>
 <p>Statistics Canada's monthly retail survey shows how much money flows through the stores that rely on those fridges:</p>
 <table>
 <thead><tr><th>Supermarkets and other grocery retailers</th><th>Sales</th></tr></thead>
 <tbody>
 <tr><td>Canada, August 2026 (unadjusted)</td><td>$9.58 billion (about $309 million a day)</td></tr>
 <tr><td>Canada, 12 months from Sept. 2025 to Aug. 2026</td><td>$113.7 billion</td></tr>
 <tr><td>Share of all Canadian retail sales, August 2026 (seasonally adjusted)</td><td>12.8%</td></tr>
 <tr><td>Ontario, August 2026</td><td>$3.31 billion (about $107 million a day)</td></tr>
 <tr><td>Quebec, August 2026</td><td>$2.40 billion (about $77 million a day)</td></tr>
 <tr><td>British Columbia, August 2026</td><td>$1.43 billion (about $46 million a day)</td></tr>
 <tr><td>Alberta, August 2026</td><td>$1.10 billion (about $36 million a day)</td></tr>
 </tbody>
 </table>
 <p>Daily figures divide the monthly total by August's 31 days. Ontario and Quebec together account for about <strong>60%</strong> of the national total.</p>
 <p><strong>The people behind the counters:</strong> retail trade employed <strong>2,149,640</strong> people across <a href="/location/canada/#industry">Canada</a> in the 2021 Census, <strong>11.1%</strong> of the labour force, including 798,090 in <a href="/location/ontario/#industry">Ontario</a> and 514,090 in <a href="/location/quebec/#industry">Quebec</a>.</p>
 <p><strong>The price backdrop:</strong> Canada's food price index was up <strong>2.2%</strong> in the 12 months to September 2026, with all items up 3.1% (<a href="/location/canada/#consumer-prices">Statistics Canada CPI via Canadian Data Insights</a>).</p>

 <h2 id="why-it-matters">Why it matters to you</h2>
 <p>Grocery is about one in every eight dollars of Canadian retail spending. No Canadian store has been hit, but the Cyber Centre has already documented attacks on Canadian control systems, including on a farm. A fridge attack here would mean spoiled stock and empty cases, and losses someone pays for, at a time when food prices are already rising.</p>
 <p>Sources: <a href="https://www.cbc.ca/news/business/europe-fridge-cyber-incident-9.7405834" target="_blank" rel="noopener">CBC News (Reuters)</a> · <a href="https://www.cp24.com/news/world/2026/11/03/could-the-cyberattack-that-shut-down-european-grocery-fridges-happen-here-next/" target="_blank" rel="noopener">CTV News</a> · <a href="https://www.cyber.gc.ca/en/alerts-advisories/al25-016-internet-accessible-industrial-control-systems-ics-abused-hacktivists" target="_blank" rel="noopener">Canadian Centre for Cyber Security, AL25-016</a> · <a href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=2010005601" target="_blank" rel="noopener">Statistics Canada, table 20-10-0056-01</a> · Statistics Canada, 2021 Census of Population and table 18-10-0004-01 (see <a href="/sources/">sources</a>)</p>
 <p><em>Topic chosen using Google Trends Canada interest on the morning of Nov. 3, 2026. Canadian Data Insights is for education only. Verify primary sources.</em></p>
 `,
 },
 {
 title: "Metal in Halloween Candy: RCMP Investigate in Happy Valley-Goose Bay, One of N.L.'s Youngest Towns",
 slug: "canadian-news-roundup-2026-11-02",
 date: "November 2, 2026",
 category: "News",
 readTime: "5 min read",
 author: "Andrew",
 heroImage: "/images/blog/canadian-news-roundup-2026-11-02.png",
 chartType: 'bar',
 chartTitle: "Share of residents under 15, 2021 Census (percent)",
 chartData: [
 { name: "Happy Valley-Goose Bay", value: 17.5 },
 { name: "Canada", value: 16.3 },
 { name: "Newfoundland and Labrador", value: 13.4 },
 ],
 excerpt: "17.5% of Happy Valley-Goose Bay residents are under 15, versus 13.4% across Newfoundland and Labrador. That's the town where RCMP are investigating three reports of small metal items in Halloween Coffee Crisp bars. What police know, what they advise, and the numbers behind it.",
 content: `
 <p><strong>TL;DR:</strong> RCMP in Happy Valley-Goose Bay, N.L., received <strong>three</strong> reports of small metal items found in treat-sized Coffee Crisp bars collected while trick-or-treating on Saturday night. Police are still working to find where the treats came from. The town is unusually young for its province: in the 2021 Census, <strong>17.5%</strong> of its 8,040 residents were under 15, compared with <strong>13.4%</strong> across Newfoundland and Labrador. That means a lot of Halloween bags in one small town.</p>

 <h2 id="halloween-candy-metal">What happened in Happy Valley-Goose Bay</h2>
 <p>RCMP Newfoundland and Labrador say they received three reports in Happy Valley-Goose Bay of small metal items found in treat-sized Coffee Crisp bars that were collected on Saturday night, Oct. 31 (RCMP). The reports came in Sunday morning (VOCM). Police are investigating to determine the source of the treats, and as of Monday morning were still trying to determine where they came from (VOCM).</p>
 <p>Police have not said whether the metal came from deliberate tampering or a manufacturing defect. Their advice names both possibilities.</p>
 <div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#eef0f5;"><iframe src="https://www.youtube-nocookie.com/embed/07ikXSNKtbU" title="Metal in Halloween Candy: Check Your Kids&#39; Haul" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
 <p><strong>If you find something similar:</strong> contact the Happy Valley-Goose Bay detachment at <strong>709-896-3383</strong> or <strong>1-800-709-RCMP (7267)</strong> (RCMP).</p>

 <h2 id="what-police-advise">What the RCMP advise every parent</h2>
 <ul>
 <li>Check treats thoroughly before kids eat them.</li>
 <li>Look for signs of tampering <em>and</em> for manufacturing defects.</li>
 <li>Make sure the packaging is intact.</li>
 <li>Keep only treats that are a recognizable, trusted commercial brand.</li>
 <li>If you're worried a treat has been tampered with, set it aside and contact your local police detachment right away.</li>
 </ul>
 <p>Setting a suspicious treat aside, rather than throwing it out, gives investigators something to trace.</p>

 <h2 id="by-the-numbers">By the numbers: a young town in an older province</h2>
 <p>The candy reports come from one of the youngest communities in Newfoundland and Labrador. Here is how <a href="/location/happy-valley-goose-bay-town-t/#population">Happy Valley-Goose Bay</a> compares with <a href="/location/newfoundland-and-labrador/#population">Newfoundland and Labrador</a> and <a href="/location/canada/#population">Canada</a> in the 2021 Census:</p>
 <table>
 <thead><tr><th></th><th>Happy Valley-Goose Bay</th><th>Newfoundland and Labrador</th><th>Canada</th></tr></thead>
 <tbody>
 <tr><td>Population (2021)</td><td>8,040</td><td>510,550</td><td>36,991,981</td></tr>
 <tr><td>Residents under 15</td><td>1,405 (17.5%)</td><td>68,190 (13.4%)</td><td>6,012,795 (16.3%)</td></tr>
 <tr><td>Median age</td><td>39.2</td><td>48.4</td><td>41.6</td></tr>
 <tr><td>Couples with children, share of households</td><td>26.7% (820 of 3,075)</td><td>22.8% (50,825 of 223,255)</td><td>25.3% (3,789,795 of 14,978,945)</td></tr>
 </tbody>
 </table>
 <p>The town counted <strong>515</strong> children aged 5 to 9 and <strong>490</strong> aged 10 to 14, about <strong>1,005</strong> kids in prime trick-or-treat years (Statistics Canada rounds these counts). Across Canada, about <strong>4.18 million</strong> children were aged 5 to 14 (2,054,900 aged 5 to 9 and 2,126,705 aged 10 to 14).</p>
 <p>Happy Valley-Goose Bay's median age of <strong>39.2</strong> is nine years younger than the province's <strong>48.4</strong>. Its population held roughly steady between censuses, at 8,040 in 2021 versus 8,109 in 2016.</p>
 <p><strong>How young is that?</strong> Among the <strong>15</strong> Newfoundland and Labrador municipalities with at least 5,000 residents, Happy Valley-Goose Bay has the <strong>3rd-youngest</strong> median age (after Paradise at 38.0 and Labrador City at 38.4) and the <strong>5th-highest</strong> share of residents under 15.</p>

 <h2 id="why-it-matters">Why it matters to you</h2>
 <p>Most Halloween hauls are still sitting in Canadian kitchens this week. The advice from police applies anywhere: check wrappers, look for defects as well as tampering, and call police instead of tossing anything suspicious, so investigators can trace where it came from.</p>
 <p>Sources: <a href="https://rcmp.ca/en/nl/news/2026/11/4358385" target="_blank" rel="noopener">RCMP Newfoundland and Labrador</a> · <a href="https://ntv.ca/news/rcmp-investigating-after-metal-items-found-in-halloween-candy-in-happy-valley-goose-bay/" target="_blank" rel="noopener">NTV News</a> · <a href="https://vocm.com/2026/11/01/rcmp-investigate-reports-of-metal-found-in-halloween-candy/" target="_blank" rel="noopener">VOCM (Nov. 1)</a> · <a href="https://vocm.com/2026/11/02/police-reminding-parents-to-check-halloween-haul-after-reports-of-tampered-treats/" target="_blank" rel="noopener">VOCM (Nov. 2)</a> · Statistics Canada, 2021 Census of Population (see <a href="/sources/">sources</a>)</p>
 <p><em>Canadian Data Insights is for education only. Verify primary sources.</em></p>
 `,
 },
 {
 title: "Canadian News Deep-Dives — November 1, 2026: Ebola's Canadian Angle, WestJet's Fuel Alarm, the Bridle Path Home Invasion",
 slug: "canadian-news-roundup-2026-11-01",
 date: "November 1, 2026",
 category: "News",
 readTime: "8 min read",
 author: "Andrew",
 heroImage: "/images/blog/canadian-news-roundup-2026-11-01.png",
 chartType: 'bar',
 chartTitle: "Transportation and warehousing share of the labour force, 2021 Census (percent)",
 chartData: [
 { name: "Calgary", value: 6.4 },
 { name: "Laval", value: 6.1 },
 { name: "Montreal", value: 5.1 },
 { name: "Canada", value: 5.1 },
 ],
 excerpt: "Three deep-dives: why Africa's top doctor, who lives in Canada, is asking Ottawa to do more as Ebola passes 10,000 cases; why WestJet says doubled jet fuel costs could hit fares; and what we know about the Bridle Path home invasion suspect wanted on a Canada-wide warrant.",
 content: `
 <p><strong>TL;DR:</strong> Today's most-searched Canadian news stories on Google Trends Canada, explained in depth. The Ebola outbreak in the Democratic Republic of Congo has passed <strong>10,000</strong> confirmed cases, and Africa's top doctor, who has called Canada home since 2013, is asking Canada for more support; the federal government says the risk here remains <strong>low</strong>, with border measures in place until <strong>Nov. 27</strong>. WestJet says jet fuel costs have <strong>doubled</strong> and airlines can pass only part of that on through fares, as Air Canada cuts its outlook. And Toronto police have issued a <strong>Canada-wide warrant</strong> for a suspect in the Bridle Path home invasion.</p>

 <h2 id="ebola-canada">1. Ebola passes 10,000 cases: the Canadian angle, and Canada's actual risk</h2>
 <p>Confirmed Ebola cases in the Democratic Republic of Congo have surpassed <strong>10,000</strong>, and the latest report from the country's public health institute shows the death toll has surpassed <strong>5,000</strong>. The outbreak was declared in mid-May and is caused by the Bundibugyo strain, for which there is no approved treatment or vaccine. It is the country's largest-ever outbreak and the fastest-growing and second-largest Ebola outbreak ever recorded, behind only the 2014-2016 West Africa crisis, which infected more than 28,000 people (CBC News).</p>
 <div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#eef0f5;"><iframe src="https://www.youtube-nocookie.com/embed/v1bmVLuuQlY" title="Ebola Passes 10,000 Cases. Is Canada at Risk?" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
 <p><strong>A Canadian voice at the centre:</strong> Dr. Jean Kaseya, director-general of the Africa Centres for Disease Control and Prevention, has called Canada home since 2013. His three children attend university in Toronto and his wife lives in Laval, Que. "No one is safe today," he told CBC News. "If this outbreak [continues] like that, with the same magnitude, in one year we'll have more than what West Africa had in two years and a half." He said the risk to Canada remains low, but urged Canada to "move from low to zero by supporting [Africa] to stop the outbreak where it is currently." His message to Canadians: "No fear, no panic, but take it seriously" (CBC News).</p>
 <p><strong>Where it has spread:</strong> smaller numbers of infections have appeared in Uganda, Kenya and Nigeria, which reported its first Ebola infection in a decade (CBC News).</p>
 <p><strong>What Canada has done:</strong> Canada committed <strong>$8 million</strong> to the response in May, including <strong>$2 million</strong> for Africa CDC. In late July, Health Canada authorized Moderna to launch a clinical trial of its Bundibugyo vaccine. University of Winnipeg microbiologist Jason Kindrachuk says Canadian and Congolese scientists have sequenced more than <strong>1,000</strong> genomes, but that "there's a real need for Canada and other countries to step up" (CBC News).</p>
 <p><strong>Canada's official risk and travel rules:</strong> the Public Health Agency of Canada says the overall risk to the general population in Canada remains low, and no importations of Ebola disease have previously occurred in Canada (PHAC). Temporary border measures apply to anyone who has visited or lives in Uganda, South Sudan or the DRC, even in transit, and last until <strong>Nov. 27, 2026</strong> at 11:59 pm (PHAC). Asymptomatic travellers who were in those countries in the past 21 days must quarantine for <strong>21 days</strong>, and foreign nationals who were in the DRC in that window can't enter (Canada Gazette).</p>
 <p><strong>By the numbers (2021 Census):</strong> <a href="/location/laval/">Laval</a>, where Kaseya's family lives, had <strong>438,366</strong> residents, next to <a href="/location/montr-al/">Montreal</a> at <strong>1,762,949</strong>. Across <a href="/location/canada/#industry">Canada</a>, health care and social assistance employed <strong>12.7%</strong> of the labour force (2,446,370 of 19,310,340), the front line if a case ever were imported.</p>
 <p><strong>Why it matters to you:</strong> the risk in Canada is officially low. If you or family travel to or from Uganda, South Sudan or the DRC, check the border rules before Nov. 27.</p>
 <p>Sources: <a href="https://www.cbc.ca/news/health/africa-top-doctor-ebola-9.7403252" target="_blank" rel="noopener">CBC News</a> · <a href="https://www.canada.ca/en/public-health/services/emergency-preparedness-response/rapid-risk-assessments-public-health-professionals/ebola-disease-bundibugyo-virus-democratic-republic-congo-uganda-2026-07-07.html" target="_blank" rel="noopener">PHAC risk assessment</a> · <a href="https://www.canada.ca/en/public-health/services/diseases/ebola/border-measures.html" target="_blank" rel="noopener">PHAC border measures</a> · <a href="https://gazette.gc.ca/rp-pr/p1/2026/2026-10-10/html/notice-avis-eng.html" target="_blank" rel="noopener">Canada Gazette</a></p>

 <h2 id="westjet-fuel">2. WestJet says jet fuel costs doubled. Will your airfare follow?</h2>
 <p>WestJet Group chief executive Alexis von Hoensbroech told the Calgary Chamber of Commerce on Oct. 29 that geopolitical tensions have caused jet fuel costs to <strong>double</strong>, while transborder demand slowed and the Cuban leisure market stayed closed. Fuel is an airline's single largest expense. "Canada's aviation system has very few shock absorbers left," he said, and WestJet called for a national strategy on cost pressures (Financial Post, CTV News).</p>
 <div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#eef0f5;"><iframe src="https://www.youtube-nocookie.com/embed/DPl417OO-qw" title="Why Doubled Jet Fuel Could Raise Your Airfare" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
 <p><strong>The fare question:</strong> "Airlines can recover only part of the increase through fares, leaving thin margins to absorb the rest," WestJet said (Financial Post).</p>
 <p><strong>Air Canada's numbers:</strong> the same day, Air Canada reported record third-quarter operating revenues of <strong>$7 billion</strong>, but cut its full-year adjusted EBITDA guidance to <strong>$2.4 billion-$2.7 billion</strong>, from $2.9 billion-$3.2 billion. CFO John Di Bert cited a <strong>$906 million</strong> year-over-year increase in fuel expense, with fuel prices 10 cents per litre above expectations. It now expects to offset about <strong>70 per cent</strong> of the extra fourth-quarter fuel cost, down from 100 per cent (Financial Post).</p>
 <p><strong>The loan fight:</strong> Air Transat and Porter were each approved for a <strong>$150 million</strong> four-year loan and Flair for <strong>$76 million</strong> under the federal LASR financing program. WestJet says those loans sway market dynamics: "We fundamentally believe that governments should not intervene in markets if they want a healthy and competitive industry" (Financial Post).</p>
 <p><strong>By the numbers (2021 Census):</strong> in <a href="/location/calgary/#industry">Calgary</a>, WestJet's home city, <strong>6.4%</strong> of the labour force worked in transportation and warehousing (46,840 of 730,050), compared with <strong>5.1%</strong> across <a href="/location/canada/#industry">Canada</a> (981,030 of 19,310,340).</p>
 <p><strong>Why it matters to you:</strong> if airlines can pass on only part of a doubled fuel bill, watch for higher fares and fewer seats on thinner routes this winter. Booking flexibility is worth more than usual.</p>
 <p>Sources: <a href="https://financialpost.com/transportation/airlines/westjet-sounds-alarm-high-fuel-costs-air-canada-lowers-outlook/" target="_blank" rel="noopener">Financial Post</a> · <a href="https://www.ctvnews.ca/calgary/article/westjet-ceo-calls-for-national-aviation-strategy-amid-rising-costs/" target="_blank" rel="noopener">CTV News Calgary</a></p>

 <h2 id="bridle-path-home-invasion">3. Bridle Path home invasion: Canada-wide warrant for a suspect police say was shot by an accomplice</h2>
 <p>Around 3:40 a.m. on Thursday, Oct. 29, three suspects armed with firearms and a hammer forced their way into a home near Post Road and Hyde Park Circle, in Toronto's Bridle Path neighbourhood near Bayview and Lawrence avenues. They demanded valuables, a struggle broke out and multiple guns were fired. Three family members, aged <strong>75, 26 and 28</strong>, were shot; the 75-year-old man and a 64-year-old woman were also struck with a hammer. All four were taken to hospital, and the suspects fled in a dark SUV before police arrived (Toronto Police Service).</p>
 <p><strong>The suspect:</strong> police have named Daijohn Richards, <strong>23</strong>, of Toronto, and issued a <strong>Canada-wide warrant</strong> on charges including four counts of discharging a firearm with intent to wound, four counts of robbery with a firearm and three counts of aggravated assault. Investigators believe he was accidentally shot in the shoulder by an accomplice (Toronto Police Service, Global News).</p>
 <p><strong>The hospital gap:</strong> Richards walked into a Toronto hospital with a gunshot wound on Thursday. Police approached him there but did not yet have evidence to arrest him; he was discharged Friday afternoon, and police say they developed that evidence Friday evening, hours later. He is now missing (CBC News, The Globe and Mail).</p>
 <p><strong>Still at large:</strong> two other suspects, believed to be in their 20s and wearing dark clothes, have not been identified. "All three suspects are considered armed and dangerous and we are asking members of the public to not approach them," Insp. Kristy Smith said. Some family members have been released from hospital; police say injuries are life-altering, not life-threatening (CBC News, The Globe and Mail). Tips go to the Hold Up Squad at 416-808-7350.</p>
 <p><strong>By the numbers (2021 Census):</strong> single-detached houses are only <strong>23.3%</strong> of occupied dwellings in <a href="/location/toronto/#dwellings">Toronto</a> (270,490 of 1,160,890), while apartments in buildings of five or more storeys are <strong>46.7%</strong> (542,625). Across <a href="/location/canada/#dwellings">Canada</a>, single-detached houses are <strong>52.6%</strong> (7,872,310 of 14,978,940).</p>
 <div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#eef0f5;"><iframe src="https://www.youtube-nocookie.com/embed/l2Y90FeQA6k" title="How a Wounded Suspect Walked Out of Hospital" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
 <p><strong>Why it matters to you:</strong> the case is rare and drew national attention because of where it happened. The open question is procedural: how a wounded suspect left hospital before police had grounds to hold him.</p>
 <p>Sources: <a href="https://www.tps.ca/media-centre/news-releases/three-suspects-sought-in-home-invasion-investigati-1/" target="_blank" rel="noopener">Toronto Police Service</a> · <a href="https://www.cbc.ca/news/canada/toronto/bridle-path-neighbourhood-home-invasion-toronto-police-update-9.7404151" target="_blank" rel="noopener">CBC News</a> · <a href="https://globalnews.ca/news/12128691/toronto-home-invasion-suspect/" target="_blank" rel="noopener">Global News</a> · <a href="https://www.theglobeandmail.com/canada/article-toronto-police-bridle-path-home-invasion-october-31/" target="_blank" rel="noopener">The Globe and Mail</a></p>

 <h2>Data sources</h2>
 <p>Population and labour-force figures are from the 2021 Census of Population as presented on Canadian Data Insights location pages; shares are calculated from those counts. See <a href="/sources/">Data sources</a>. News facts are from the linked reports. Topics were chosen using Google Trends Canada interest on the morning of Nov. 1, 2026. This post is for education only and is not medical, travel or legal advice.</p>
 `,
 },
 {
 title: "Canada's industry map: oil & gas, healthcare and public-admin towns",
 slug: "canadas-industry-towns",
 date: "October 31, 2026",
 category: "Labour",
 readTime: "9 min read",
 author: "Andrew",
 heroImage: "/images/blog/canadas-industry-towns.png",
 chartType: 'bar',
 chartTitle: "Mining, quarrying, and oil and gas extraction, places of 50,000 or more (percent)",
 chartData: [
 { name: "Wood Buffalo", value: 29.6 },
 { name: "Grande Prairie", value: 10.2 },
 { name: "Gt. Sudbury", value: 9.1 },
 { name: "Red Deer", value: 5.5 },
 { name: "Medicine Hat", value: 4.6 },
 { name: "Calgary", value: 4.4 },
 { name: "Strathcona", value: 3.8 },
 { name: "Airdrie", value: 3.8 },
 ],
 excerpt: "Wood Buffalo led Canadian places of 50,000 or more: 29.6% of the labour force worked in mining, quarrying, and oil and gas extraction. Thunder Bay led health care and social assistance, at 20.0%. Gatineau led public administration, at 26.2%. Canada was 1.2%, 12.7%, and 6.2%.",
 content: `
 <p>In the 2021 Census, <strong>29.6%</strong> of <a href="/location/wood-buffalo-specialized-municipality-sm/#industry">Wood Buffalo</a>'s labour force worked in mining, quarrying, and oil and gas extraction — the highest share among Canada's <strong>101</strong> census subdivisions with <strong>50,000</strong> or more residents. <a href="/location/grande-prairie/#industry">Grande Prairie</a> was next, at 10.2%. Across <a href="/location/canada/#industry">Canada</a>, the same share was <strong>1.2%</strong>.</p>

 <p>Two other rankings use the same labour-force total. <a href="/location/thunder-bay/#industry">Thunder Bay</a> led health care and social assistance, at <strong>20.0%</strong>. Canada's share was <strong>12.7%</strong>. <a href="/location/gatineau/#industry">Gatineau</a> led public administration, at <strong>26.2%</strong>. Canada's share was <strong>6.2%</strong>. <a href="/location/ottawa/#industry">Ottawa</a> was second on that list, at 21.1%, and has the largest public-administration count in the group of 101. A separate list further down covers places of 10,000 to 49,999. None of those smaller places rank above Wood Buffalo on mining, oil and gas. Fourteen rank above Thunder Bay on health care. Three rank above Gatineau on public administration.</p>

 <p>The percentage is the published count for that industry, divided by the published labour-force total. On this site that total is the labour force aged 15 and over. It is the same calculation as the <a href="/location/wood-buffalo-specialized-municipality-sm/#industry">industry section</a> on each location page. The census gives each person one industry, the North American Industry Classification System (NAICS) sector of their job. These shares describe the labour force living in the place. They are not a count of workplaces located there.</p>

 <p>Mining, quarrying, and oil and gas extraction is one sector. The file does not split oil and gas from mining or quarrying. Health care and social assistance is one sector. The file does not split hospitals and clinics from social assistance. Public administration is one sector. This file does not split federal, provincial, territorial, local, or defence employment into separate columns.</p>

 <p>The industry categories do not add up to that labour-force total. Statistics Canada randomly rounds census counts, and people with no classified industry stay in the published total. This page does not estimate that remainder, and it does not adjust for rounding.</p>

 <p>This is a different ranking from <a href="/blog/canadas-trades-heavy-towns/">Canada's trades-heavy towns</a> and from <a href="/blog/canadas-bachelors-vs-trades-cities/">bachelor's vs trades</a>. The trades-towns post counts an occupation, as a share of the same labour force. The education post counts credentials, as a share of everyone aged 15 and over. <a href="/blog/canadas-top-work-from-home-cities/">Worked at home</a> is a share of the employed labour force. Wood Buffalo led the occupation list, at 31.3% (13,345 of 42,655). It leads this mining list as well.</p>

 <h2>Places of 50,000 or more: mining, quarrying, and oil and gas</h2>
 <p>The ranking below keeps the list to census subdivisions — cities, towns, and other municipalities — with a 2021 population of at least 50,000. That threshold leaves 101 places. Every figure is calculated from the census counts in this site's location file. Nine of the top 15 are in Alberta. Three are in Ontario, and one each in British Columbia, Newfoundland and Labrador, and Saskatchewan.</p>

 <p><a href="/location/calgary/#industry">Calgary</a> does not lead the share. It has the largest count in this sector in the group of 101: <strong>32,410</strong> people.</p>

 <div class="table-wrap">
 <table>
 <thead>
 <tr>
 <th class="num">Rank</th>
 <th>Place</th>
 <th>Province</th>
 <th class="num">Population</th>
 <th class="num">Mining, quarrying, and oil and gas</th>
 <th class="num">Labour force</th>
 <th class="num">Share</th>
 </tr>
 </thead>
 <tbody>
 <tr><td class="num">1</td><td><a href="/location/wood-buffalo-specialized-municipality-sm/#industry">Wood Buffalo</a></td><td>Alberta</td><td class="num">72,326</td><td class="num">12,625</td><td class="num">42,655</td><td class="num">29.6%</td></tr>
 <tr><td class="num">2</td><td><a href="/location/grande-prairie/#industry">Grande Prairie</a></td><td>Alberta</td><td class="num">64,141</td><td class="num">3,750</td><td class="num">36,645</td><td class="num">10.2%</td></tr>
 <tr><td class="num">3</td><td><a href="/location/greater-sudbury-grand-sudbury/#industry">Greater Sudbury</a></td><td>Ontario</td><td class="num">166,004</td><td class="num">7,620</td><td class="num">84,000</td><td class="num">9.1%</td></tr>
 <tr><td class="num">4</td><td><a href="/location/red-deer/#industry">Red Deer</a></td><td>Alberta</td><td class="num">100,844</td><td class="num">2,940</td><td class="num">53,415</td><td class="num">5.5%</td></tr>
 <tr><td class="num">5</td><td><a href="/location/medicine-hat/#industry">Medicine Hat</a></td><td>Alberta</td><td class="num">63,271</td><td class="num">1,445</td><td class="num">31,715</td><td class="num">4.6%</td></tr>
 <tr><td class="num">6</td><td><a href="/location/calgary/#industry">Calgary</a></td><td>Alberta</td><td class="num">1,306,784</td><td class="num">32,410</td><td class="num">730,050</td><td class="num">4.4%</td></tr>
 <tr><td class="num">7</td><td><a href="/location/strathcona-county-specialized-municipality-sm/#industry">Strathcona County</a></td><td>Alberta</td><td class="num">99,225</td><td class="num">2,090</td><td class="num">54,405</td><td class="num">3.8%</td></tr>
 <tr><td class="num">8</td><td><a href="/location/airdrie/#industry">Airdrie</a></td><td>Alberta</td><td class="num">74,100</td><td class="num">1,560</td><td class="num">41,335</td><td class="num">3.8%</td></tr>
 <tr><td class="num">9</td><td><a href="/location/kamloops/#industry">Kamloops</a></td><td>British Columbia</td><td class="num">97,902</td><td class="num">1,575</td><td class="num">51,030</td><td class="num">3.1%</td></tr>
 <tr><td class="num">10</td><td><a href="/location/north-bay/#industry">North Bay</a></td><td>Ontario</td><td class="num">52,662</td><td class="num">640</td><td class="num">25,420</td><td class="num">2.5%</td></tr>
 <tr><td class="num">11</td><td><a href="/location/st-john-s/#industry">St. John's</a></td><td>Newfoundland and Labrador</td><td class="num">110,525</td><td class="num">1,210</td><td class="num">57,380</td><td class="num">2.1%</td></tr>
 <tr><td class="num">12</td><td><a href="/location/saskatoon/#industry">Saskatoon</a></td><td>Saskatchewan</td><td class="num">266,141</td><td class="num">2,975</td><td class="num">144,115</td><td class="num">2.1%</td></tr>
 <tr><td class="num">13</td><td><a href="/location/st-albert/#industry">St. Albert</a></td><td>Alberta</td><td class="num">68,232</td><td class="num">725</td><td class="num">36,040</td><td class="num">2.0%</td></tr>
 <tr><td class="num">14</td><td><a href="/location/edmonton/#industry">Edmonton</a></td><td>Alberta</td><td class="num">1,010,899</td><td class="num">10,225</td><td class="num">554,040</td><td class="num">1.8%</td></tr>
 <tr><td class="num">15</td><td><a href="/location/thunder-bay/#industry">Thunder Bay</a></td><td>Ontario</td><td class="num">108,843</td><td class="num">780</td><td class="num">53,350</td><td class="num">1.5%</td></tr>
 </tbody>
 </table>
 </div>

 <p>Shares are shown to one decimal place, matching the location pages. <a href="/location/strathcona-county-specialized-municipality-sm/#industry">Strathcona County</a> (2,090 of 54,405) ranks just ahead of <a href="/location/airdrie/#industry">Airdrie</a> (1,560 of 41,335), and <a href="/location/st-john-s/#industry">St. John's</a> (1,210 of 57,380) just ahead of <a href="/location/saskatoon/#industry">Saskatoon</a> (2,975 of 144,115), on the unrounded share. Both pairs round to the same tenth, 3.8% and 2.1%.</p>

 <p><a href="/location/greater-sudbury-grand-sudbury/#industry">Greater Sudbury</a> in this table is the census subdivision named Greater Sudbury / Grand Sudbury, population 166,004. It is 3rd, at 9.1% (7,620 of 84,000). A high share here is the whole sector, mining and quarrying included. The file does not say how much of that 7,620 is oil and gas.</p>

 <p>Three more places round above Canada's 1.2% and sit just outside the table. <a href="/location/cape-breton-regional-municipality-rgm/#industry">Cape Breton</a> is 16th, at 1.4% (570 of 41,585). <a href="/location/lethbridge/#industry">Lethbridge</a> is 17th, at 1.3% (685 of 51,775). <a href="/location/sarnia/#industry">Sarnia</a> is 18th, at 1.3% (425 of 33,035). Lethbridge ranks just ahead of Sarnia on the unrounded share.</p>

 <p><a href="/location/wood-buffalo-specialized-municipality-sm/#industry">Wood Buffalo</a>, first on this list, is last on health care among the same 101 places, at 6.6% (2,815 of 42,655).</p>

 <h2>Health care and social assistance</h2>
 <p>The same 101 places, ranked on health care and social assistance. Five of the top 15 are in Ontario. Four are in Quebec, two in Alberta, and one each in Nova Scotia, Manitoba, New Brunswick, and British Columbia.</p>

 <p><a href="/location/toronto/#industry">Toronto</a> does not lead the share. It has the largest health-care count in the group of 101: <strong>163,465</strong> people.</p>

 <div class="table-wrap">
 <table>
 <thead>
 <tr>
 <th class="num">Rank</th>
 <th>Place</th>
 <th>Province</th>
 <th class="num">Population</th>
 <th class="num">Health care and social assistance</th>
 <th class="num">Labour force</th>
 <th class="num">Share</th>
 </tr>
 </thead>
 <tbody>
 <tr><td class="num">1</td><td><a href="/location/thunder-bay/#industry">Thunder Bay</a></td><td>Ontario</td><td class="num">108,843</td><td class="num">10,685</td><td class="num">53,350</td><td class="num">20.0%</td></tr>
 <tr><td class="num">2</td><td><a href="/location/cape-breton-regional-municipality-rgm/#industry">Cape Breton</a></td><td>Nova Scotia</td><td class="num">93,694</td><td class="num">8,125</td><td class="num">41,585</td><td class="num">19.5%</td></tr>
 <tr><td class="num">3</td><td><a href="/location/sherbrooke/#industry">Sherbrooke</a></td><td>Quebec</td><td class="num">172,950</td><td class="num">16,415</td><td class="num">89,165</td><td class="num">18.4%</td></tr>
 <tr><td class="num">4</td><td><a href="/location/trois-rivi-res/#industry">Trois-Rivières</a></td><td>Quebec</td><td class="num">139,163</td><td class="num">12,085</td><td class="num">67,075</td><td class="num">18.0%</td></tr>
 <tr><td class="num">5</td><td><a href="/location/north-bay/#industry">North Bay</a></td><td>Ontario</td><td class="num">52,662</td><td class="num">4,515</td><td class="num">25,420</td><td class="num">17.8%</td></tr>
 <tr><td class="num">6</td><td><a href="/location/peterborough/#industry">Peterborough</a></td><td>Ontario</td><td class="num">83,651</td><td class="num">7,005</td><td class="num">39,850</td><td class="num">17.6%</td></tr>
 <tr><td class="num">7</td><td><a href="/location/sault-ste-marie/#industry">Sault Ste. Marie</a></td><td>Ontario</td><td class="num">72,051</td><td class="num">5,835</td><td class="num">33,215</td><td class="num">17.6%</td></tr>
 <tr><td class="num">8</td><td><a href="/location/brandon/#industry">Brandon</a></td><td>Manitoba</td><td class="num">51,313</td><td class="num">4,725</td><td class="num">27,405</td><td class="num">17.2%</td></tr>
 <tr><td class="num">9</td><td><a href="/location/kingston/#industry">Kingston</a></td><td>Ontario</td><td class="num">132,485</td><td class="num">11,520</td><td class="num">66,980</td><td class="num">17.2%</td></tr>
 <tr><td class="num">10</td><td><a href="/location/lethbridge/#industry">Lethbridge</a></td><td>Alberta</td><td class="num">98,406</td><td class="num">8,650</td><td class="num">51,775</td><td class="num">16.7%</td></tr>
 <tr><td class="num">11</td><td><a href="/location/repentigny/#industry">Repentigny</a></td><td>Quebec</td><td class="num">86,100</td><td class="num">7,375</td><td class="num">44,715</td><td class="num">16.5%</td></tr>
 <tr><td class="num">12</td><td><a href="/location/saint-john/#industry">Saint John</a></td><td>New Brunswick</td><td class="num">69,895</td><td class="num">5,720</td><td class="num">35,225</td><td class="num">16.2%</td></tr>
 <tr><td class="num">13</td><td><a href="/location/saguenay/#industry">Saguenay</a></td><td>Quebec</td><td class="num">144,723</td><td class="num">11,620</td><td class="num">71,660</td><td class="num">16.2%</td></tr>
 <tr><td class="num">14</td><td><a href="/location/nanaimo/#industry">Nanaimo</a></td><td>British Columbia</td><td class="num">99,863</td><td class="num">8,060</td><td class="num">49,975</td><td class="num">16.1%</td></tr>
 <tr><td class="num">15</td><td><a href="/location/red-deer/#industry">Red Deer</a></td><td>Alberta</td><td class="num">100,844</td><td class="num">8,495</td><td class="num">53,415</td><td class="num">15.9%</td></tr>
 </tbody>
 </table>
 </div>

 <p><a href="/location/peterborough/#industry">Peterborough</a> (7,005 of 39,850) ranks just ahead of <a href="/location/sault-ste-marie/#industry">Sault Ste. Marie</a> (5,835 of 33,215). Both round to 17.6%. <a href="/location/brandon/#industry">Brandon</a> (4,725 of 27,405) ranks just ahead of <a href="/location/kingston/#industry">Kingston</a> (11,520 of 66,980). Both round to 17.2%. <a href="/location/saint-john/#industry">Saint John</a> (5,720 of 35,225) ranks just ahead of <a href="/location/saguenay/#industry">Saguenay</a> (11,620 of 71,660). Both round to 16.2%.</p>

 <p><a href="/location/cape-breton-regional-municipality-rgm/#industry">Cape Breton</a> in this table is the regional municipality, population 93,694. <a href="/location/thunder-bay/#industry">Thunder Bay</a>, first here, is 15th on mining, at 1.5% (780 of 53,350), and 18th on public administration, at 7.2% (3,865 of 53,350).</p>

 <h2>Public administration</h2>
 <p>The same 101 places, ranked on public administration. Four of the top 15 are in Ontario. Three are in Quebec, two in British Columbia, two in Nova Scotia, and one each in New Brunswick, Newfoundland and Labrador, Alberta, and Saskatchewan.</p>

 <p><a href="/location/ottawa/#industry">Ottawa</a> does not lead the share. It has the largest public-administration count in the group of 101: <strong>116,235</strong> people. The paired write-up of the top two places is <a href="/blog/ottawa-vs-gatineau-2021-census/">Ottawa vs Gatineau</a>.</p>

 <div class="table-wrap">
 <table>
 <thead>
 <tr>
 <th class="num">Rank</th>
 <th>Place</th>
 <th>Province</th>
 <th class="num">Population</th>
 <th class="num">Public administration</th>
 <th class="num">Labour force</th>
 <th class="num">Share</th>
 </tr>
 </thead>
 <tbody>
 <tr><td class="num">1</td><td><a href="/location/gatineau/#industry">Gatineau</a></td><td>Quebec</td><td class="num">291,041</td><td class="num">40,725</td><td class="num">155,315</td><td class="num">26.2%</td></tr>
 <tr><td class="num">2</td><td><a href="/location/ottawa/#industry">Ottawa</a></td><td>Ontario</td><td class="num">1,017,449</td><td class="num">116,235</td><td class="num">549,985</td><td class="num">21.1%</td></tr>
 <tr><td class="num">3</td><td><a href="/location/qu-bec/#industry">Québec</a></td><td>Quebec</td><td class="num">549,459</td><td class="num">39,380</td><td class="num">293,660</td><td class="num">13.4%</td></tr>
 <tr><td class="num">4</td><td><a href="/location/victoria/#industry">Victoria</a></td><td>British Columbia</td><td class="num">91,867</td><td class="num">6,915</td><td class="num">53,400</td><td class="num">12.9%</td></tr>
 <tr><td class="num">5</td><td><a href="/location/fredericton/#industry">Fredericton</a></td><td>New Brunswick</td><td class="num">63,116</td><td class="num">4,425</td><td class="num">34,905</td><td class="num">12.7%</td></tr>
 <tr><td class="num">6</td><td><a href="/location/saanich-district-municipality-dm/#industry">Saanich</a></td><td>British Columbia</td><td class="num">117,735</td><td class="num">7,410</td><td class="num">62,535</td><td class="num">11.8%</td></tr>
 <tr><td class="num">7</td><td><a href="/location/kingston/#industry">Kingston</a></td><td>Ontario</td><td class="num">132,485</td><td class="num">7,710</td><td class="num">66,980</td><td class="num">11.5%</td></tr>
 <tr><td class="num">8</td><td><a href="/location/st-john-s/#industry">St. John's</a></td><td>Newfoundland and Labrador</td><td class="num">110,525</td><td class="num">6,020</td><td class="num">57,380</td><td class="num">10.5%</td></tr>
 <tr><td class="num">9</td><td><a href="/location/st-albert/#industry">St. Albert</a></td><td>Alberta</td><td class="num">68,232</td><td class="num">3,775</td><td class="num">36,040</td><td class="num">10.5%</td></tr>
 <tr><td class="num">10</td><td><a href="/location/halifax-regional-municipality-rgm/#industry">Halifax</a></td><td>Nova Scotia</td><td class="num">439,819</td><td class="num">24,935</td><td class="num">242,690</td><td class="num">10.3%</td></tr>
 <tr><td class="num">11</td><td><a href="/location/regina/#industry">Regina</a></td><td>Saskatchewan</td><td class="num">226,404</td><td class="num">11,795</td><td class="num">121,685</td><td class="num">9.7%</td></tr>
 <tr><td class="num">12</td><td><a href="/location/greater-sudbury-grand-sudbury/#industry">Greater Sudbury</a></td><td>Ontario</td><td class="num">166,004</td><td class="num">7,545</td><td class="num">84,000</td><td class="num">9.0%</td></tr>
 <tr><td class="num">13</td><td><a href="/location/l-vis/#industry">Lévis</a></td><td>Quebec</td><td class="num">149,683</td><td class="num">7,435</td><td class="num">82,795</td><td class="num">9.0%</td></tr>
 <tr><td class="num">14</td><td><a href="/location/cape-breton-regional-municipality-rgm/#industry">Cape Breton</a></td><td>Nova Scotia</td><td class="num">93,694</td><td class="num">3,520</td><td class="num">41,585</td><td class="num">8.5%</td></tr>
 <tr><td class="num">15</td><td><a href="/location/north-bay/#industry">North Bay</a></td><td>Ontario</td><td class="num">52,662</td><td class="num">2,045</td><td class="num">25,420</td><td class="num">8.0%</td></tr>
 </tbody>
 </table>
 </div>

 <p><a href="/location/st-john-s/#industry">St. John's</a> (6,020 of 57,380) ranks just ahead of <a href="/location/st-albert/#industry">St. Albert</a> (3,775 of 36,040). Both round to 10.5%. <a href="/location/greater-sudbury-grand-sudbury/#industry">Greater Sudbury</a> (7,545 of 84,000) ranks just ahead of <a href="/location/l-vis/#industry">Lévis</a> (7,435 of 82,795). Both round to 9.0%.</p>

 <p><a href="/location/qu-bec/#industry">Québec</a> in that table is the city, population 549,459, not <a href="/location/quebec/#industry">the province</a>. The city's share is 13.4% (39,380 of 293,660). The province's share is 6.6% (290,765 of 4,435,460). <a href="/location/saanich-district-municipality-dm/#industry">Saanich</a> is the district municipality, population 117,735. <a href="/location/victoria/#industry">Victoria</a> is the city, 4th at 12.9% (6,915 of 53,400). <a href="/location/halifax-regional-municipality-rgm/#industry">Halifax</a> is the regional municipality, population 439,819.</p>

 <p><a href="/location/ottawa/#industry">Ottawa</a>, at 21.1% (116,235 of 549,985), sits well above <a href="/location/ontario/#industry">Ontario</a>, at 5.8% (428,030 of 7,399,205). <a href="/location/fredericton/#industry">Fredericton</a>, at 12.7% (4,425 of 34,905), sits above <a href="/location/new-brunswick/#industry">New Brunswick</a>, at 9.1% (35,260 of 389,470).</p>

 <h2>The three shares, side by side</h2>
 <p>A high share in one sector is not the same fact as a high share in another. The leaders on each list, plus Calgary, Toronto, and Canada, use the same labour-force total for every column. Manufacturing, and agriculture, forestry, fishing and hunting, are in the last two columns.</p>

 <div class="table-wrap">
 <table>
 <thead>
 <tr>
 <th>Place</th>
 <th class="num">Mining, oil and gas</th>
 <th class="num">Health care</th>
 <th class="num">Public administration</th>
 <th class="num">Manufacturing</th>
 <th class="num">Agriculture</th>
 </tr>
 </thead>
 <tbody>
 <tr><td><a href="/location/wood-buffalo-specialized-municipality-sm/#industry">Wood Buffalo</a></td><td class="num">29.6%</td><td class="num">6.6%</td><td class="num">4.8%</td><td class="num">2.0%</td><td class="num">0.2%</td></tr>
 <tr><td><a href="/location/thunder-bay/#industry">Thunder Bay</a></td><td class="num">1.5%</td><td class="num">20.0%</td><td class="num">7.2%</td><td class="num">3.6%</td><td class="num">1.5%</td></tr>
 <tr><td><a href="/location/gatineau/#industry">Gatineau</a></td><td class="num">0.2%</td><td class="num">12.5%</td><td class="num">26.2%</td><td class="num">2.7%</td><td class="num">0.4%</td></tr>
 <tr><td><a href="/location/ottawa/#industry">Ottawa</a></td><td class="num">0.1%</td><td class="num">11.4%</td><td class="num">21.1%</td><td class="num">3.0%</td><td class="num">0.4%</td></tr>
 <tr><td><a href="/location/calgary/#industry">Calgary</a></td><td class="num">4.4%</td><td class="num">12.5%</td><td class="num">3.3%</td><td class="num">4.5%</td><td class="num">0.4%</td></tr>
 <tr><td><a href="/location/toronto/#industry">Toronto</a></td><td class="num">0.1%</td><td class="num">10.8%</td><td class="num">3.6%</td><td class="num">6.4%</td><td class="num">0.2%</td></tr>
 <tr><td><a href="/location/canada/#industry">Canada</a></td><td class="num">1.2%</td><td class="num">12.7%</td><td class="num">6.2%</td><td class="num">8.0%</td><td class="num">2.3%</td></tr>
 </tbody>
 </table>
 </div>

 <p><a href="/location/wood-buffalo-specialized-municipality-sm/#industry">Wood Buffalo</a> is 2.0% manufacturing (850 of 42,655) and 0.2% agriculture (90 of 42,655). Both are below Canada. <a href="/location/sherbrooke/#industry">Sherbrooke</a>, 3rd on health care, is 12.4% manufacturing (11,045 of 89,165), above Canada's 8.0% (1,540,490 of 19,310,340).</p>

 <p>Among the 101 places, <a href="/location/granby/#industry">Granby</a> leads manufacturing, at <strong>21.1%</strong> (7,095 of 33,700). <a href="/location/norfolk-county/#industry">Norfolk County</a> leads agriculture, forestry, fishing and hunting, at <strong>8.1%</strong> (2,570 of 31,620). Canada's agriculture share is 2.3% (434,800 of 19,310,340). Norfolk County was 3rd on the occupation ranking in the trades-towns post, at 24.3% (7,685 of 31,620). A job in the trades and a job in agriculture are different census facts, and both are different from the industry of the employer.</p>

 <h2>Where the largest cities land</h2>
 <p>Five census subdivisions in the file have 1,000,000 residents or more. On mining, oil and gas, <a href="/location/calgary/#industry">Calgary</a> is 6th, at <strong>4.4%</strong> (32,410 of 730,050). <a href="/location/edmonton/#industry">Edmonton</a> is 14th, at <strong>1.8%</strong> (10,225 of 554,040). <a href="/location/toronto/#industry">Toronto</a> is 82nd, at <strong>0.1%</strong> (1,985 of 1,518,420). <a href="/location/montr-al/#industry">Montréal</a> is 86th, at <strong>0.1%</strong> (1,195 of 959,130). <a href="/location/ottawa/#industry">Ottawa</a> is 94th, at <strong>0.1%</strong> (550 of 549,985).</p>

 <p><a href="/location/winnipeg/#industry">Winnipeg</a>, at 749,607 residents, is 69th on mining, at 0.2% (665 of 402,365). <a href="/location/vancouver/#industry">Vancouver</a>, at 662,248 residents, is 38th, at 0.3% (1,250 of 394,670).</p>

 <p>On health care, Edmonton is 38th, at <strong>13.9%</strong> (77,255 of 554,040). Montréal is 45th, at <strong>13.4%</strong> (128,175 of 959,130). Calgary is 58th, at <strong>12.5%</strong> (90,910 of 730,050). Ottawa is 70th, at <strong>11.4%</strong> (62,860 of 549,985). Toronto is 79th, at <strong>10.8%</strong> (163,465 of 1,518,420), below Canada's 12.7%, with the largest count. Winnipeg is 26th, at 15.0% (60,445 of 402,365). Vancouver is 68th, at 11.6% (45,910 of 394,670).</p>

 <p><a href="/location/gatineau/#industry">Gatineau</a>, at 291,041 residents, is already 1st on public administration. On health care it is 57th, at 12.5% (19,415 of 155,315), just ahead of Calgary. Both round to 12.5%.</p>

 <p>On public administration, Ottawa is 2nd. Edmonton is 23rd, at <strong>6.5%</strong> (36,125 of 554,040). <a href="/location/saint-jean-sur-richelieu/#industry">Saint-Jean-sur-Richelieu</a> is 24th, at 6.5% (3,335 of 51,225). Winnipeg is 25th, at 6.5% (26,050 of 402,365). All three round to 6.5%. Edmonton's unrounded share is the highest of the three. Toronto is 83rd, at 3.6% (54,970 of 1,518,420). Montréal is 72nd, at 4.0% (38,595 of 959,130). Calgary is 93rd, at 3.3% (24,185 of 730,050). Vancouver is 78th, at 3.9% (15,240 of 394,670).</p>

 <h2>The low end of the 50,000-person list</h2>
 <p><a href="/location/brampton/#industry">Brampton</a> is last on mining, oil and gas, at <strong>0.1%</strong>. The five lowest all round to 0.1%. They rank on the unrounded share.</p>

 <div class="table-wrap">
 <table>
 <thead>
 <tr>
 <th class="num">Rank</th>
 <th>Place</th>
 <th>Province</th>
 <th class="num">Population</th>
 <th class="num">Mining, quarrying, and oil and gas</th>
 <th class="num">Labour force</th>
 <th class="num">Share</th>
 </tr>
 </thead>
 <tbody>
 <tr><td class="num">97</td><td><a href="/location/niagara-falls/#industry">Niagara Falls</a></td><td>Ontario</td><td class="num">94,415</td><td class="num">45</td><td class="num">46,120</td><td class="num">0.1%</td></tr>
 <tr><td class="num">98</td><td><a href="/location/kitchener/#industry">Kitchener</a></td><td>Ontario</td><td class="num">256,885</td><td class="num">135</td><td class="num">139,695</td><td class="num">0.1%</td></tr>
 <tr><td class="num">99</td><td><a href="/location/markham/#industry">Markham</a></td><td>Ontario</td><td class="num">338,503</td><td class="num">135</td><td class="num">170,540</td><td class="num">0.1%</td></tr>
 <tr><td class="num">100</td><td><a href="/location/vaughan/#industry">Vaughan</a></td><td>Ontario</td><td class="num">323,103</td><td class="num">135</td><td class="num">176,630</td><td class="num">0.1%</td></tr>
 <tr><td class="num">101</td><td><a href="/location/brampton/#industry">Brampton</a></td><td>Ontario</td><td class="num">656,480</td><td class="num">225</td><td class="num">355,755</td><td class="num">0.1%</td></tr>
 </tbody>
 </table>
 </div>

 <p><a href="/location/waterloo/#industry">Waterloo</a>, at 0.1% (65 of 65,955), is 96th, just ahead of Niagara Falls (45 of 46,120). Kitchener, Markham, and Vaughan each have a count of 135. Kitchener (135 of 139,695) ranks ahead of Markham (135 of 170,540), which ranks ahead of Vaughan (135 of 176,630).</p>

 <p>Wood Buffalo is last on health care, at <strong>6.6%</strong>. The five lowest:</p>

 <div class="table-wrap">
 <table>
 <thead>
 <tr>
 <th class="num">Rank</th>
 <th>Place</th>
 <th>Province</th>
 <th class="num">Population</th>
 <th class="num">Health care and social assistance</th>
 <th class="num">Labour force</th>
 <th class="num">Share</th>
 </tr>
 </thead>
 <tbody>
 <tr><td class="num">97</td><td><a href="/location/brampton/#industry">Brampton</a></td><td>Ontario</td><td class="num">656,480</td><td class="num">30,440</td><td class="num">355,755</td><td class="num">8.6%</td></tr>
 <tr><td class="num">98</td><td><a href="/location/aurora-town-t/#industry">Aurora</a></td><td>Ontario</td><td class="num">62,057</td><td class="num">2,835</td><td class="num">34,205</td><td class="num">8.3%</td></tr>
 <tr><td class="num">99</td><td><a href="/location/halton-hills-town-t/#industry">Halton Hills</a></td><td>Ontario</td><td class="num">62,951</td><td class="num">2,785</td><td class="num">36,155</td><td class="num">7.7%</td></tr>
 <tr><td class="num">100</td><td><a href="/location/caledon-town-t/#industry">Caledon</a></td><td>Ontario</td><td class="num">76,581</td><td class="num">3,235</td><td class="num">43,140</td><td class="num">7.5%</td></tr>
 <tr><td class="num">101</td><td><a href="/location/wood-buffalo-specialized-municipality-sm/#industry">Wood Buffalo</a></td><td>Alberta</td><td class="num">72,326</td><td class="num">2,815</td><td class="num">42,655</td><td class="num">6.6%</td></tr>
 </tbody>
 </table>
 </div>

 <p>Waterloo is 96th on health care, at 8.6% (5,670 of 65,955), just ahead of Brampton (30,440 of 355,755). Both round to 8.6%.</p>

 <p>Brampton is also last on public administration, at <strong>2.7%</strong>. The five lowest:</p>

 <div class="table-wrap">
 <table>
 <thead>
 <tr>
 <th class="num">Rank</th>
 <th>Place</th>
 <th>Province</th>
 <th class="num">Population</th>
 <th class="num">Public administration</th>
 <th class="num">Labour force</th>
 <th class="num">Share</th>
 </tr>
 </thead>
 <tbody>
 <tr><td class="num">97</td><td><a href="/location/drummondville/#industry">Drummondville</a></td><td>Quebec</td><td class="num">79,258</td><td class="num">1,185</td><td class="num">39,755</td><td class="num">3.0%</td></tr>
 <tr><td class="num">98</td><td><a href="/location/kitchener/#industry">Kitchener</a></td><td>Ontario</td><td class="num">256,885</td><td class="num">4,085</td><td class="num">139,695</td><td class="num">2.9%</td></tr>
 <tr><td class="num">99</td><td><a href="/location/waterloo/#industry">Waterloo</a></td><td>Ontario</td><td class="num">121,436</td><td class="num">1,900</td><td class="num">65,955</td><td class="num">2.9%</td></tr>
 <tr><td class="num">100</td><td><a href="/location/windsor/#industry">Windsor</a></td><td>Ontario</td><td class="num">229,660</td><td class="num">2,925</td><td class="num">106,880</td><td class="num">2.7%</td></tr>
 <tr><td class="num">101</td><td><a href="/location/brampton/#industry">Brampton</a></td><td>Ontario</td><td class="num">656,480</td><td class="num">9,670</td><td class="num">355,755</td><td class="num">2.7%</td></tr>
 </tbody>
 </table>
 </div>

 <p>Kitchener (4,085 of 139,695) ranks just ahead of Waterloo (1,900 of 65,955). Both round to 2.9%. Windsor (2,925 of 106,880) ranks just ahead of Brampton (9,670 of 355,755). Both round to 2.7%.</p>

 <h2>The national figure</h2>
 <p>For <a href="/location/canada/#industry">Canada</a>, 239,030 people worked in mining, quarrying, and oil and gas extraction out of a labour force of 19,310,340, which is <strong>1.2%</strong>. Health care and social assistance was 2,446,370, which is <strong>12.7%</strong>. Public administration was 1,188,915, which is <strong>6.2%</strong>. The country's 2021 population was 36,991,981. That Canada figure is the country's published counts in the location file. It is not the sum of the municipal rows above.</p>

 <p>Among the 101 places of 50,000 or more, the median mining share was <strong>0.2%</strong>. <a href="/location/victoria/#industry">Victoria</a> holds that middle place, 51st, at 0.2% (130 of 53,400). The median health-care share was <strong>13.1%</strong>. <a href="/location/st-albert/#industry">St. Albert</a> holds that middle place, 51st, at 13.1% (4,735 of 36,040). <a href="/location/fredericton/#industry">Fredericton</a> is 50th and also rounds to 13.1% (4,590 of 34,905). The median public-administration share was <strong>4.9%</strong>. <a href="/location/ajax-town-t/#industry">Ajax</a> holds that middle place, 51st, at 4.9% (3,350 of 68,525).</p>

 <p>On the one-decimal shares used in the tables, 18 places round above Canada's 1.2% on mining and 83 round lower. None round to 1.2%. On health care, 53 places round above Canada's 12.7%, <a href="/location/mirabel/#industry">Mirabel</a> (4,530 of 35,560) and <a href="/location/oshawa/#industry">Oshawa</a> (11,115 of 87,550) round to the same 12.7%, and 46 round lower. On public administration, 28 places round above Canada's 6.2%, three round to the same 6.2% — <a href="/location/medicine-hat/#industry">Medicine Hat</a> (1,965 of 31,715), <a href="/location/sault-ste-marie/#industry">Sault Ste. Marie</a> (2,050 of 33,215), and <a href="/location/kawartha-lakes/#industry">Kawartha Lakes</a> (2,245 of 36,500) — and 70 round lower.</p>

 <p>Added together, those 101 places had 106,045 people in mining, oil and gas out of a labour force of 12,888,495, a combined share of <strong>0.8%</strong>. Health care was <strong>12.5%</strong> (1,608,060 of 12,888,495). Public administration was <strong>5.9%</strong> (764,710 of 12,888,495). The 314 places of 10,000 to 49,999 combine to <strong>1.6%</strong> on mining (52,905 of 3,257,685), <strong>13.0%</strong> on health care (422,220 of 3,257,685), and <strong>6.6%</strong> on public administration (214,360 of 3,257,685).</p>

 <p>The median counts each municipality once. The combined share counts every person in the labour force. On mining, large counts in Calgary, Wood Buffalo, and Edmonton pull the 50,000-person group above the median, and the group still sits below Canada. The smaller band, taken together, sits above Canada. On health care, the 101 places together sit just below Canada, and the smaller band sits just above it. On public administration, the 101 places together sit below Canada, and the smaller band sits above it.</p>

 <p><a href="/location/alberta/#industry">Alberta</a> was the highest province or territory on mining, oil and gas, at <strong>4.9%</strong> (112,890 of 2,295,380). The <a href="/location/northwest-territories/#industry">Northwest Territories</a> were next, at <strong>4.3%</strong> (980 of 22,550). <a href="/location/prince-edward-island/#industry">Prince Edward Island</a> was the lowest, at <strong>0.2%</strong> (200 of 83,500). Calgary, at 4.4%, sits near the Alberta share.</p>

 <p><a href="/location/newfoundland-and-labrador/#industry">Newfoundland and Labrador</a> was the highest on health care, at <strong>16.5%</strong> (40,245 of 243,330). <a href="/location/nunavut/#industry">Nunavut</a> was the lowest, at <strong>9.1%</strong> (1,310 of 14,380). Among provinces, <a href="/location/ontario/#industry">Ontario</a> was the lowest, at <strong>11.6%</strong> (859,910 of 7,399,205).</p>

 <p>Nunavut was the highest on public administration, at <strong>29.3%</strong> (4,220 of 14,380). The Northwest Territories were next, at <strong>27.4%</strong> (6,185 of 22,550). <a href="/location/yukon/#industry">Yukon</a> was 24.6% (5,785 of 23,520). Among provinces, Prince Edward Island was the highest, at <strong>10.9%</strong> (9,105 of 83,500). Alberta was the lowest province or territory, at <strong>5.2%</strong> (118,270 of 2,295,380).</p>

 <h2>Places of 10,000 to 49,999</h2>
 <p>Dropping the floor to 10,000 residents, and stopping below 50,000, leaves <strong>314</strong> census subdivisions. None of them exceed Wood Buffalo's 29.6% on mining, oil and gas. <a href="/location/bonnyville-no-87-municipal-district-md/#industry">Bonnyville No. 87</a>, at 12,897 residents, is first, at <strong>19.7%</strong>. The top 10 are below. Seven are in Alberta, and one each in Ontario, Quebec, and Saskatchewan.</p>

 <div class="table-wrap">
 <table>
 <thead>
 <tr>
 <th class="num">Rank</th>
 <th>Place</th>
 <th>Province</th>
 <th class="num">Population</th>
 <th class="num">Mining, quarrying, and oil and gas</th>
 <th class="num">Labour force</th>
 <th class="num">Share</th>
 </tr>
 </thead>
 <tbody>
 <tr><td class="num">1</td><td><a href="/location/bonnyville-no-87-municipal-district-md/#industry">Bonnyville No. 87</a></td><td>Alberta</td><td class="num">12,897</td><td class="num">1,345</td><td class="num">6,815</td><td class="num">19.7%</td></tr>
 <tr><td class="num">2</td><td><a href="/location/yellowhead-county-municipal-district-md/#industry">Yellowhead County</a></td><td>Alberta</td><td class="num">10,426</td><td class="num">785</td><td class="num">5,220</td><td class="num">15.0%</td></tr>
 <tr><td class="num">3</td><td><a href="/location/timmins/#industry">Timmins</a></td><td>Ontario</td><td class="num">41,145</td><td class="num">3,145</td><td class="num">21,010</td><td class="num">15.0%</td></tr>
 <tr><td class="num">4</td><td><a href="/location/val-d-or/#industry">Val-d'Or</a></td><td>Quebec</td><td class="num">32,752</td><td class="num">2,615</td><td class="num">17,545</td><td class="num">14.9%</td></tr>
 <tr><td class="num">5</td><td><a href="/location/lloydminster-part/#industry">Lloydminster (Part)</a></td><td>Alberta</td><td class="num">19,739</td><td class="num">1,520</td><td class="num">10,735</td><td class="num">14.2%</td></tr>
 <tr><td class="num">6</td><td><a href="/location/estevan/#industry">Estevan</a></td><td>Saskatchewan</td><td class="num">10,851</td><td class="num">835</td><td class="num">5,980</td><td class="num">14.0%</td></tr>
 <tr><td class="num">7</td><td><a href="/location/clearwater-county-municipal-district-md/#industry">Clearwater County</a></td><td>Alberta</td><td class="num">11,865</td><td class="num">845</td><td class="num">6,475</td><td class="num">13.1%</td></tr>
 <tr><td class="num">8</td><td><a href="/location/cold-lake/#industry">Cold Lake</a></td><td>Alberta</td><td class="num">15,661</td><td class="num">1,120</td><td class="num">8,740</td><td class="num">12.8%</td></tr>
 <tr><td class="num">9</td><td><a href="/location/grande-prairie-county-no-1-municipal-district-md/#industry">Grande Prairie County No. 1</a></td><td>Alberta</td><td class="num">23,769</td><td class="num">1,665</td><td class="num">13,250</td><td class="num">12.6%</td></tr>
 <tr><td class="num">10</td><td><a href="/location/sylvan-lake-town-t/#industry">Sylvan Lake</a></td><td>Alberta</td><td class="num">15,995</td><td class="num">1,070</td><td class="num">8,835</td><td class="num">12.1%</td></tr>
 </tbody>
 </table>
 </div>

 <p><a href="/location/yellowhead-county-municipal-district-md/#industry">Yellowhead County</a> (785 of 5,220) ranks just ahead of <a href="/location/timmins/#industry">Timmins</a> (3,145 of 21,010). Both round to 15.0%. Yellowhead County was 5th on the occupation ranking in the trades-towns post, at 29.4% (1,535 of 5,220).</p>

 <p>Bonnyville No. 87 is the municipal district. <a href="/location/bonnyville-town-t/#industry">Bonnyville</a>, the town, is a separate census subdivision of 6,404 residents. It falls below the 10,000 floor, so it is not in this ranking. <a href="/location/lloydminster-part/#industry">Lloydminster (Part)</a> is the Alberta census subdivision in this file, population 19,739. A Saskatchewan part is not a separate row here. <a href="/location/grande-prairie-county-no-1-municipal-district-md/#industry">Grande Prairie County No. 1</a>, population 23,769, is a different census subdivision from the city of Grande Prairie, population 64,141, which is 2nd on the 50,000-person list.</p>

 <p>Fourteen places in this band post a higher health-care share than Thunder Bay's 20.0%. <a href="/location/grand-falls-windsor-town-t/#industry">Grand Falls-Windsor</a>, at 13,853 residents, is first, at <strong>24.2%</strong> (1,520 of 6,270). The top 10 are below. Three are in Quebec, two in Newfoundland and Labrador, two in Ontario, and one each in Saskatchewan, New Brunswick, and Nova Scotia.</p>

 <div class="table-wrap">
 <table>
 <thead>
 <tr>
 <th class="num">Rank</th>
 <th>Place</th>
 <th>Province</th>
 <th class="num">Population</th>
 <th class="num">Health care and social assistance</th>
 <th class="num">Labour force</th>
 <th class="num">Share</th>
 </tr>
 </thead>
 <tbody>
 <tr><td class="num">1</td><td><a href="/location/grand-falls-windsor-town-t/#industry">Grand Falls-Windsor</a></td><td>Newfoundland and Labrador</td><td class="num">13,853</td><td class="num">1,520</td><td class="num">6,270</td><td class="num">24.2%</td></tr>
 <tr><td class="num">2</td><td><a href="/location/saint-charles-borrom-e/#industry">Saint-Charles-Borromée</a></td><td>Quebec</td><td class="num">15,285</td><td class="num">1,380</td><td class="num">6,065</td><td class="num">22.8%</td></tr>
 <tr><td class="num">3</td><td><a href="/location/elliot-lake/#industry">Elliot Lake</a></td><td>Ontario</td><td class="num">11,372</td><td class="num">785</td><td class="num">3,540</td><td class="num">22.2%</td></tr>
 <tr><td class="num">4</td><td><a href="/location/north-battleford/#industry">North Battleford</a></td><td>Saskatchewan</td><td class="num">13,836</td><td class="num">1,510</td><td class="num">6,850</td><td class="num">22.0%</td></tr>
 <tr><td class="num">5</td><td><a href="/location/edmundston/#industry">Edmundston</a></td><td>New Brunswick</td><td class="num">16,437</td><td class="num">1,620</td><td class="num">7,410</td><td class="num">21.9%</td></tr>
 <tr><td class="num">6</td><td><a href="/location/kenora/#industry">Kenora</a></td><td>Ontario</td><td class="num">14,967</td><td class="num">1,630</td><td class="num">7,750</td><td class="num">21.0%</td></tr>
 <tr><td class="num">7</td><td><a href="/location/corner-brook/#industry">Corner Brook</a></td><td>Newfoundland and Labrador</td><td class="num">19,333</td><td class="num">1,860</td><td class="num">8,920</td><td class="num">20.9%</td></tr>
 <tr><td class="num">8</td><td><a href="/location/rimouski/#industry">Rimouski</a></td><td>Quebec</td><td class="num">48,935</td><td class="num">4,975</td><td class="num">23,870</td><td class="num">20.8%</td></tr>
 <tr><td class="num">9</td><td><a href="/location/yarmouth-municipal-district-md/#industry">Yarmouth</a></td><td>Nova Scotia</td><td class="num">10,067</td><td class="num">1,055</td><td class="num">5,085</td><td class="num">20.7%</td></tr>
 <tr><td class="num">10</td><td><a href="/location/baie-comeau/#industry">Baie-Comeau</a></td><td>Quebec</td><td class="num">20,687</td><td class="num">2,105</td><td class="num">10,300</td><td class="num">20.4%</td></tr>
 </tbody>
 </table>
 </div>

 <p>Four more also exceed Thunder Bay. <a href="/location/selkirk/#industry">Selkirk</a> is 11th, at 20.3% (930 of 4,590). <a href="/location/portage-la-prairie/#industry">Portage la Prairie</a> is 12th, at 20.2% (1,305 of 6,445). <a href="/location/owen-sound/#industry">Owen Sound</a> is 13th, at 20.2% (1,980 of 9,790). <a href="/location/gander-town-t/#industry">Gander</a> is 14th, at 20.1% (1,195 of 5,940). Portage la Prairie ranks just ahead of Owen Sound. Both round to 20.2%.</p>

 <p><a href="/location/yarmouth-municipal-district-md/#industry">Yarmouth</a> in this table is the municipal district, population 10,067. <a href="/location/yarmouth-town-t/#industry">Yarmouth</a>, the town, is a separate census subdivision of 6,829 residents. It falls below the 10,000 floor, so it is not in this ranking.</p>

 <p>Three places in this band exceed Gatineau's 26.2% on public administration. <a href="/location/petawawa-town-t/#industry">Petawawa</a>, at 18,160 residents, is first, at <strong>45.4%</strong> (4,305 of 9,475). <a href="/location/yellowknife/#industry">Yellowknife</a> is second, at 29.5%. <a href="/location/cantley-municipalit-m/#industry">Cantley</a> is third, at 28.8%. The top 10 are below.</p>

 <div class="table-wrap">
 <table>
 <thead>
 <tr>
 <th class="num">Rank</th>
 <th>Place</th>
 <th>Province</th>
 <th class="num">Population</th>
 <th class="num">Public administration</th>
 <th class="num">Labour force</th>
 <th class="num">Share</th>
 </tr>
 </thead>
 <tbody>
 <tr><td class="num">1</td><td><a href="/location/petawawa-town-t/#industry">Petawawa</a></td><td>Ontario</td><td class="num">18,160</td><td class="num">4,305</td><td class="num">9,475</td><td class="num">45.4%</td></tr>
 <tr><td class="num">2</td><td><a href="/location/yellowknife/#industry">Yellowknife</a></td><td>Northwest Territories</td><td class="num">20,340</td><td class="num">3,675</td><td class="num">12,475</td><td class="num">29.5%</td></tr>
 <tr><td class="num">3</td><td><a href="/location/cantley-municipalit-m/#industry">Cantley</a></td><td>Quebec</td><td class="num">11,449</td><td class="num">1,910</td><td class="num">6,625</td><td class="num">28.8%</td></tr>
 <tr><td class="num">4</td><td><a href="/location/cold-lake/#industry">Cold Lake</a></td><td>Alberta</td><td class="num">15,661</td><td class="num">2,185</td><td class="num">8,740</td><td class="num">25.0%</td></tr>
 <tr><td class="num">5</td><td><a href="/location/whitehorse/#industry">Whitehorse</a></td><td>Yukon</td><td class="num">28,201</td><td class="num">4,110</td><td class="num">16,900</td><td class="num">24.3%</td></tr>
 <tr><td class="num">6</td><td><a href="/location/val-des-monts-municipalit-m/#industry">Val-des-Monts</a></td><td>Quebec</td><td class="num">13,328</td><td class="num">1,705</td><td class="num">7,470</td><td class="num">22.8%</td></tr>
 <tr><td class="num">7</td><td><a href="/location/russell-township-tp/#industry">Russell</a></td><td>Ontario</td><td class="num">19,598</td><td class="num">2,345</td><td class="num">11,065</td><td class="num">21.2%</td></tr>
 <tr><td class="num">8</td><td><a href="/location/clarence-rockland/#industry">Clarence-Rockland</a></td><td>Ontario</td><td class="num">26,505</td><td class="num">2,850</td><td class="num">13,875</td><td class="num">20.5%</td></tr>
 <tr><td class="num">9</td><td><a href="/location/esquimalt-district-municipality-dm/#industry">Esquimalt</a></td><td>British Columbia</td><td class="num">17,533</td><td class="num">2,045</td><td class="num">9,980</td><td class="num">20.5%</td></tr>
 <tr><td class="num">10</td><td><a href="/location/colwood/#industry">Colwood</a></td><td>British Columbia</td><td class="num">18,961</td><td class="num">2,030</td><td class="num">10,200</td><td class="num">19.9%</td></tr>
 </tbody>
 </table>
 </div>

 <p><a href="/location/clarence-rockland/#industry">Clarence-Rockland</a> (2,850 of 13,875) ranks just ahead of <a href="/location/esquimalt-district-municipality-dm/#industry">Esquimalt</a> (2,045 of 9,980). Both round to 20.5%. Esquimalt is the district municipality, population 17,533. <a href="/location/cold-lake/#industry">Cold Lake</a> is 8th on the smaller mining list, at 12.8% (1,120 of 8,740), and 4th here, at 25.0% (2,185 of 8,740). The two shares use the same labour-force total.</p>

 <p><a href="/location/iqaluit/#industry">Iqaluit</a>, at 7,429 residents, falls below the 10,000 floor. Its public-administration share is 43.5% (1,835 of 4,220). It is not in this ranking. The 45.4% in Petawawa is the whole public-administration sector. The file does not split defence employment out of that sector.</p>

 <p>Random rounding moves a share more when the labour force is small. Petawawa's denominator is 9,475 people. Gatineau's is 155,315, and Toronto's is 1,518,420. A few people rounded into or out of a count change the first decimal in the smaller place and do not change it in the larger one. The ranks above use the published counts as stored.</p>

 <h2>Questions the rankings can answer</h2>
 <p><strong>Which places have the highest oil and gas share?</strong> Among places of 50,000 or more, Wood Buffalo, at 29.6% (12,625 of 42,655), then Grande Prairie, at 10.2% (3,750 of 36,645). The census sector is mining, quarrying, and oil and gas extraction. Greater Sudbury is 3rd, at 9.1% (7,620 of 84,000), and the file does not split mining from oil and gas. Among places of 10,000 to 49,999, Bonnyville No. 87 is first, at 19.7% (1,345 of 6,815), still below Wood Buffalo.</p>

 <p><strong>Does the highest share mean the most jobs?</strong> The share and the count answer different questions. Calgary's mining count is 32,410, larger than Wood Buffalo's 12,625, at a share of 4.4% (32,410 of 730,050). Toronto's health-care count is 163,465, larger than Thunder Bay's 10,685, at a share of 10.8% (163,465 of 1,518,420). Ottawa's public-administration count is 116,235, larger than Gatineau's 40,725, at a share of 21.1% (116,235 of 549,985).</p>

 <p><strong>Where is health care the largest share of the local labour force?</strong> Thunder Bay, at 20.0% (10,685 of 53,350), among places of 50,000 or more. Canada is 12.7% (2,446,370 of 19,310,340). Grand Falls-Windsor leads the 10,000-to-49,999 list, at 24.2% (1,520 of 6,270). The sector includes social assistance. The file does not split that out.</p>

 <p><strong>Where is public administration the largest share?</strong> Among places of 50,000 or more, Gatineau, at 26.2% (40,725 of 155,315), then Ottawa, at 21.1%. Among places of 10,000 to 49,999, Petawawa, at 45.4% (4,305 of 9,475). Iqaluit, below that floor, is 43.5% (1,835 of 4,220). The column is the whole sector.</p>

 <p><strong>What are the cutoff and the denominator?</strong> The headline list is 101 census subdivisions with 50,000 or more residents. The smaller list is 314 census subdivisions with 10,000 to 49,999 residents. The denominator is the published labour force aged 15 and over, the same total as the industry section on each location page. <a href="/location/oakville-town-t/#industry">Oakville</a> led the worked-at-home ranking and the bachelor's-degree ranking. On this map its mining share is 0.4% (465 of 113,190), its health-care share is 9.4% (10,655 of 113,190), and its public-administration share is 3.6% (4,035 of 113,190).</p>

 <h2>Compare a place yourself</h2>
 <p>Open any linked place for the full industry breakdown, or set two places side by side in the <a href="/compare/">comparison tool</a>. The education, commute, occupation, and industry sections use the same anchors on location pages and in that tool. The worked-at-home ranking is in <a href="/blog/canadas-top-work-from-home-cities/">Canada's top work-from-home cities</a>. The occupation ranking is in <a href="/blog/canadas-trades-heavy-towns/">Canada's trades-heavy towns</a>. The credential ranking is in <a href="/blog/canadas-bachelors-vs-trades-cities/">bachelor's vs trades</a>.</p>

 <h2>Sources</h2>
 <p>Industry counts, including mining, quarrying, and oil and gas extraction, health care and social assistance, public administration, manufacturing, and agriculture, forestry, fishing and hunting, plus labour-force totals and population, are from the <a href="https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/prof/index.cfm?Lang=E" target="_blank" rel="noopener">Statistics Canada 2021 Census of Population (Census Profile)</a>, as stored for each place in the Canadian Data Insights location file. Shares on this page are calculated here from those published counts. The occupation counts cited for comparison are from the same file. See <a href="/sources/">how this site handles census data</a>. Statistics Canada data is used under the <a href="https://open.canada.ca/en/open-government-licence-canada" target="_blank" rel="noopener">Open Government Licence – Canada</a>. This post is by Andrew.</p>
 `,
 },
 {
 title: "Canadian News Deep-Dives — October 31, 2026: Canada's EU 'Associate Member' Push, a Record El Niño Winter, Backstreet Boys Seat Refunds",
 slug: "canadian-news-roundup-2026-10-31",
 date: "October 31, 2026",
 category: "News",
 readTime: "8 min read",
 author: "Andrew",
 heroImage: "/images/blog/canadian-news-roundup-2026-10-31.png",
 chartType: 'bar',
 chartTitle: "Can speak both English and French, 2021 Census (percent)",
 chartData: [
 { name: "Montreal", value: 58.5 },
 { name: "Canada", value: 18.0 },
 ],
 excerpt: "Three deep-dives: what Canada actually got from the Canada-EU summit and what 'associate member' would mean, what a record 'super' El Niño means for your winter, and why Backstreet Boys fans in Toronto face a Nov. 22 refund-or-relocate choice.",
 content: `
 <p><strong>TL;DR:</strong> Today's most-searched Canadian news stories on Google Trends Canada, explained in depth. Canada and the EU launched an <strong>Alliance for the Future</strong> in Montreal, and Prime Minister Mark Carney says Canada wants to become the EU's <strong>first associate member</strong>, a status that doesn't exist yet. A record "super" El Niño points to a <strong>milder-than-normal winter</strong> for most of Canada, but a drier one in the West. And Backstreet Boys fans who bought obstructed-view presale seats for the 2027 Toronto shows say their replacement seats are worse, with a <strong>Nov. 22</strong> refund-or-relocate deadline.</p>

 <h2 id="canada-eu-alliance">1. Canada wants to be the EU's first 'associate member.' Here's what was actually agreed</h2>
 <p>Canada hosted the 21st Canada-EU Summit in Montreal on Oct. 29-30, with European Council President António Costa and European Commission President Ursula von der Leyen. The leaders launched the <strong>Alliance for the Future</strong> and announced more than twenty new measures (Prime Minister of Canada). "We are working toward the deepest possible partnership, short of accession because of our geography, with Canada becoming the European Union's first associate member," Carney said in his closing remarks (CBC News).</p>
 <div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#eef0f5;"><iframe src="https://www.youtube-nocookie.com/embed/hTyIoCv08jM" title="What Canada Actually Got From the EU Summit" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
 <p><strong>What's signed or concluded:</strong> a Canada-EU Digital Trade Agreement, Canada's first agreement dedicated entirely to digital trade; a Canada-EU Competition Agreement to crack down on anti-competitive practices on both sides of the Atlantic; and Canada joining the European High Performance Computing Joint Undertaking, which gives Canadian researchers and businesses access to the JUPITER supercomputer. Ottawa also announced up to <strong>$2.5 billion</strong> in financing for Alberta-based De Havilland to increase waterbomber production, and a more than <strong>$44 million</strong> contract for Montreal-based Galvion to supply military helmets to Latvia (Prime Minister of Canada).</p>
 <p><strong>What's still to negotiate:</strong> connecting Canadian and EU instant payment systems, a working group on opening banking and insurance markets, expanding Canada's role in the Erasmus+ student exchange program, and joining the next Horizon Europe research program (Prime Minister of Canada).</p>
 <p><strong>The catch on 'associate member':</strong> the status doesn't currently exist in the EU. Sources told CBC News the term was removed from the draft joint statement, with one saying Germany called it a red line; the final text calls for "an ever-closer association of Canada to the EU, short of full membership itself." A Canadian official said there is no formal process: "It's a concept." Asked about cost, Carney said "we don't view this as paying for something, we view this as coming together." He wants to conclude negotiations in June, with Canada's cabinet and the European Commission meeting in March. EU members would have to vote, and Carney has said a new partnership will go to a vote in Parliament. Opposition Leader Pierre Poilievre called the summit "big talk" with a lack of concrete results (CBC News).</p>
 <p><strong>The trade stakes:</strong> the EU is Canada's second-largest trading partner for goods and services, about <strong>$178 billion</strong> in 2025, and Canadian businesses exported nearly <strong>$15 billion</strong> in digitally deliverable services to the EU in 2024 (Prime Minister of Canada).</p>
 <p><strong>By the numbers (2021 Census):</strong> in <a href="/location/montr-al/#languages">Montreal</a>, the summit's host city, <strong>58.5%</strong> of residents (1,018,100 of 1,741,260) could speak both English and French, compared with <strong>18.0%</strong> across <a href="/location/canada/#languages">Canada</a> (6,581,680 of 36,620,955).</p>
 <p><strong>Why it matters to you:</strong> the concrete wins are mostly for businesses and researchers for now. Watch March and June for what "associate member" would actually mean, and what it would cost.</p>
 <p>Sources: <a href="https://www.pm.gc.ca/en/news/news-releases/2026/10/30/canada-and-european-union-announce-new-alliance-future-create-greater" target="_blank" rel="noopener">Prime Minister of Canada</a> · <a href="https://www.pm.gc.ca/en/news/statements/2026/10/30/joint-statement-canada-and-european-union-building-together-alliance" target="_blank" rel="noopener">Joint statement</a> · <a href="https://www.cbc.ca/news/politics/european-union-canada-associate-member-von-der-leyen-9.7401989" target="_blank" rel="noopener">CBC News</a></p>

 <h2 id="super-el-nino">2. A record 'super' El Niño: what it means for Canada's winter</h2>
 <p>This year's El Niño, a warming of the central Pacific Ocean, hasn't even peaked yet; that's expected some time in December. It has already broken records, with daily ocean temperatures reaching nearly <strong>3.5 C</strong> above the 1991-2020 average, beating the previous high of 3.08 C in 2015 (CBC News).</p>
 <div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#eef0f5;"><iframe src="https://www.youtube-nocookie.com/embed/WBgFcdNRNxg" title="Why El Niño Means a Milder Canadian Winter" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
 <p><strong>Not yet:</strong> Bill Merryfield, a research scientist with Environment and Climate Change Canada, says El Niño's larger impacts across Canada generally don't set in until late December. "They tend to sort of intensify as the winter sets in." Atlantic Canada has already felt it: only one named hurricane has formed in the Atlantic basin so far this season, which ends Nov. 30 (CBC News).</p>
 <p><strong>Warm, and dry in the West:</strong> "We tend to see unusually mild winters really from coast to coast across the provinces," Merryfield said, noting Prairie winter temperatures in the 1997-98 and 2015-16 events were as much as five degrees or more above historical norms. Zeke Hausfather of Berkeley Earth expects drier conditions from December in B.C., Alberta and Saskatchewan, with 12 of 13 modelling groups expecting those regions to get <strong>19 per cent</strong> less rainfall. That raises fire risk heading into 2027 (CBC News).</p>
 <p><strong>Still winter:</strong> Hausfather says most of north-central Canada is expected to be about two degrees warmer than normal, but "weather isn't going away." Cold days and snowstorms still happen (CBC News). The Weather Network also flags a possible unusual weakening of the polar vortex in early November, though its forecast still favours a mild start to winter across much of Canada (The Weather Network).</p>
 <p><strong>Why it matters to you:</strong> most of Canada should get a milder-than-normal winter, but don't skip winter tires or storm prep. In the West, a dry winter is the bigger worry for next fire season.</p>
 <p>Sources: <a href="https://www.cbc.ca/news/science/el-nino-winter-9.7398251" target="_blank" rel="noopener">CBC News</a> · <a href="https://www.theweathernetwork.com/en/news/weather/forecasts/canada-who-woke-up-the-polar-vortex-early" target="_blank" rel="noopener">The Weather Network</a></p>

 <h2 id="backstreet-boys-seats">3. Backstreet Boys fans moved to cheaper, still-obstructed seats: your refund deadline</h2>
 <p>The Backstreet Boys are expected to play <strong>12 shows</strong> at Toronto's Rogers Centre across four weekends from February to March 2027. Rogers, the organizer, gave its customers "exclusive" access to an Oct. 5 presale; Live Nation runs the concerts and its subsidiary Ticketmaster sells the tickets. Days later, dozens of fans said Ticketmaster hadn't flagged their seats as obstructed, and that similar seats were later selling at a discount (CBC News).</p>
 <div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#eef0f5;"><iframe src="https://www.youtube-nocookie.com/embed/8jciqpCqO5w" title="Backstreet Boys Fans Paid Double for Blocked Seats" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
 <p><strong>The price gap:</strong> Thunder Bay fan Lisa Parent paid just over <strong>$5,500</strong> for eight presale tickets for the Feb. 20 show. The same seats for a March 5 show carried a "partially obstructed view" warning and totalled just over <strong>$2,900</strong>, about half. On Oct. 7, a Ticketmaster agent had told her the seats were "not located under obstructed view" (CBC News).</p>
 <p><strong>The fix that wasn't:</strong> Live Nation promised affected fans would be "proactively relocated to comparable full-view locations." But Betsabe Bustillos of Welland, Ont., who paid around <strong>$1,300</strong> for four second-row seats, says she was moved much farther back, to seats that are also obstructed. She says she must tell Ticketmaster by <strong>Nov. 22</strong> whether she wants a refund or the relocation. Another fan, Giulianna Heto, says an agent suggested she resell her tickets and not mention the obstruction. Live Nation apologized: "We understand this has been frustrating and appreciate the patience of fans as we work to resolve these issues" (CBC News).</p>
 <p><strong>Why it matters to you:</strong> if you bought presale seats, check your tickets for an obstructed-view label, keep screenshots of what you were shown at purchase, and watch for the refund-or-relocate deadline in your Ticketmaster messages.</p>
 <p>Sources: <a href="https://www.cbc.ca/news/canada/toronto/live-nation-relocates-backstreet-boys-fans-to-cheaper-obstructed-seats-9.7403274" target="_blank" rel="noopener">CBC News (Oct. 30)</a> · <a href="https://www.cbc.ca/news/canada/toronto/backstreet-boys-toronto-fans-presale-tickets-9.7380358" target="_blank" rel="noopener">CBC News (Oct. 15)</a> · <a href="https://www.ctvnews.ca/toronto/consumer-alert/article/backstreet-boys-fans-upset-after-seats-they-bought-for-toronto-show-turned-out-to-be-obstructed/" target="_blank" rel="noopener">CTV News Toronto</a></p>

 <h2>Data sources</h2>
 <p>Language figures are from the 2021 Census of Population as presented on Canadian Data Insights location pages; shares are calculated from those counts. See <a href="/sources/">Data sources</a>. News facts are from the linked reports. Topics were chosen using Google Trends Canada interest on the morning of Oct. 31, 2026.</p>
 `,
 },
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
 <div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#eef0f5;"><iframe src="https://www.youtube-nocookie.com/embed/rfaXNeFM-fk" title="Why a Third of Canadians Won't Fall Back" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
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

/** All blog posts (compare SEO posts + census/CPI editorial posts + existing posts). */
export const blogPosts: BlogPost[] = [...compareBlogPosts, ...day7Posts, ...existingBlogPosts];

