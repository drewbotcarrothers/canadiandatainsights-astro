import { useMemo, useState } from 'react';
import { personalRate } from '../../lib/inflation-calc';

interface Item {
  id: string;
  name: string;
  yoyPct: number;
  weight: number;
}

interface Props {
  items: Item[];
  allItemsYoy: number;
  weightYear: string;
  monthLabel: string;
}

function rate(num: number): string {
  return new Intl.NumberFormat('en-CA', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
    signDisplay: 'exceptZero',
  }).format(num);
}

function moved(num: number): string {
  if (num === 0) return 'unchanged';
  const amount = new Intl.NumberFormat('en-CA', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(Math.abs(num));
  return num > 0 ? `up ${amount}%` : `down ${amount}%`;
}

function weightText(num: number): string {
  return new Intl.NumberFormat('en-CA', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num);
}

export default function PersonalBasket({ items, allItemsYoy, weightYear, monthLabel }: Props) {
  const defaults = useMemo(() => Object.fromEntries(items.map((item) => [item.id, String(item.weight)])), [items]);
  const [shares, setShares] = useState<Record<string, string>>(defaults);

  const result = useMemo(() => {
    const parsed = items.map((item) => ({
      item,
      share: Number(shares[item.id]),
    }));
    const entered = parsed.reduce((sum, row) => sum + (Number.isFinite(row.share) && row.share > 0 ? row.share : 0), 0);
    const yours = personalRate(parsed.map((row) => ({ yoyPct: row.item.yoyPct, share: row.share })));
    return { entered, yours };
  }, [items, shares]);

  const comparison =
    result.yours == null
      ? 'Enter a share greater than zero for at least one component.'
      : result.yours === allItemsYoy
        ? `Your basket was ${moved(result.yours)} over the 12 months to ${monthLabel}, the same as the all-items CPI.`
        : `Your basket was ${moved(result.yours)} over the 12 months to ${monthLabel}. The all-items CPI was ${moved(allItemsYoy)}.`;

  return (
    <form class="rounded-xl border border-border/40 bg-surface p-5 sm:p-6" onSubmit={(event) => event.preventDefault()}>
      <div class="flex flex-wrap items-center justify-between gap-3">
        <p class="font-sans text-sm text-on-surface-variant">
          Shares start at the {weightYear} basket weights. They do not have to add to 100. The rate uses whatever you enter, in proportion.
        </p>
        <button
          type="button"
          class="inline-flex min-h-[44px] items-center rounded-md border border-primary/30 px-4 text-sm font-semibold text-primary"
          onClick={() => setShares(defaults)}
        >
          Reset to {weightYear} basket
        </button>
      </div>
      <div class="mt-4 overflow-x-auto">
        <table class="min-w-full text-left font-sans text-sm">
          <caption class="sr-only">Spending shares for the eight major CPI components</caption>
          <thead class="border-b border-border/40 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
            <tr>
              <th scope="col" class="py-2 pr-3">Component</th>
              <th scope="col" class="px-3 py-2 text-right">12-month</th>
              <th scope="col" class="px-3 py-2 text-right">{weightYear} weight</th>
              <th scope="col" class="py-2 pl-3 text-right">Your share</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} class="border-b border-border/20">
                <th scope="row" class="py-2 pr-3 font-heading font-bold text-primary">{item.name}</th>
                <td class="px-3 py-2 text-right tabular-nums">{rate(item.yoyPct)}%</td>
                <td class="px-3 py-2 text-right tabular-nums">{weightText(item.weight)}%</td>
                <td class="py-2 pl-3 text-right">
                  <label class="sr-only" htmlFor={`share-${item.id}`}>
                    Your share of spending on {item.name}
                  </label>
                  <input
                    id={`share-${item.id}`}
                    class="w-24 min-h-[44px] rounded-md border border-border bg-background px-2 text-right text-base tabular-nums"
                    inputMode="decimal"
                    min="0"
                    step="0.01"
                    type="number"
                    value={shares[item.id] ?? ''}
                    onChange={(event) => setShares((current) => ({ ...current, [item.id]: event.target.value }))}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p class="mt-4 font-sans text-sm text-on-surface-variant">
        Shares entered: {Number.isFinite(result.entered) ? weightText(result.entered) : '—'}%.
      </p>
      <p class="mt-2 font-sans text-base leading-relaxed text-on-surface" aria-live="polite">
        {comparison}
      </p>
      <p class="mt-3 font-sans text-xs leading-relaxed text-on-surface-variant">
        This is a weighted average of the eight published 12-month changes. It is not the official Consumer Price Index, which uses price relatives and the basket weights together.
      </p>
    </form>
  );
}
