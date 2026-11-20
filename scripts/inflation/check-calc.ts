import { readFileSync } from 'node:fs';
import {
  approximateContribution,
  personalRate,
  purchasingPower,
  roundHalfAway,
  totalChangePercent,
} from '../../src/lib/inflation-calc.ts';

function assert(condition: boolean, message: string): void {
  if (!condition) throw new Error(message);
}

assert(roundHalfAway(1.25, 1) === 1.3, 'positive half-away rounding');
assert(roundHalfAway(-1.25, 1) === -1.3, 'negative half-away rounding');
assert(purchasingPower(100, 100, 170.4) === 170.4, 'purchasing power at the 2002 base');
assert(purchasingPower(100, 126.6, 170.4) === 134.6, 'purchasing power from a 126.6 index');
assert(totalChangePercent(126.6, 170.4) === 34.6, 'percent change from a 126.6 index');
assert(personalRate([{ yoyPct: 10, share: 25 }, { yoyPct: 0, share: 75 }]) === 2.5, 'personal basket');
assert(purchasingPower(0, 100, 170.4) === null, 'reject a zero amount');
assert(purchasingPower(-5, 100, 170.4) === null, 'reject a negative amount');

const data = JSON.parse(
  readFileSync(new URL('../../src/data/inflation/inflation.json', import.meta.url), 'utf8')
) as {
  headline: { index: number; yearAgoIndex: number; yoyPct: number };
  annual: { year: number; allItems: number }[];
  components: { id: string; group: string; weight: number | null; yoyPct: number | null; approxContributionPp: number | null }[];
};

const rounded = roundHalfAway(
  ((data.headline.index - data.headline.yearAgoIndex) / data.headline.yearAgoIndex) * 100,
  1
);
assert(Math.abs(rounded - data.headline.yoyPct) < 0.001, `headline 12-month change rounded to ${rounded}, stored ${data.headline.yoyPct}`);

for (const row of data.components) {
  if (row.group !== 'major' || row.weight == null || row.yoyPct == null || row.approxContributionPp == null) continue;
  const contribution = approximateContribution(row.weight, row.yoyPct);
  assert(
    contribution != null && Math.abs(contribution - row.approxContributionPp) < 0.001,
    `${row.id} contribution ${contribution} != ${row.approxContributionPp}`
  );
}

const year2002 = data.annual.find((row) => row.year === 2002);
assert(year2002?.allItems === 100, '2002 annual average is the index base');
assert(
  purchasingPower(100, year2002?.allItems ?? 0, data.headline.index) === roundHalfAway(data.headline.index, 2),
  'one hundred 2002 dollars scales to the latest index'
);

console.log('inflation checks passed');
