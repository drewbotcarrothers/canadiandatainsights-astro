import { useMemo, useState } from 'react';
import { indexRatio, purchasingPower, totalChangePercent } from '../../lib/inflation-calc';

interface YearPoint {
  year: number;
  index: number;
}

interface Props {
  years: YearPoint[];
  todayIndex: number;
  todayLabel: string;
  defaultYear: number;
}

function money(num: number): string {
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num);
}

function unsignedPercent(num: number): string {
  return new Intl.NumberFormat('en-CA', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(Math.abs(num));
}

function indexText(num: number): string {
  return new Intl.NumberFormat('en-CA', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(num);
}

function ratioText(num: number): string {
  return new Intl.NumberFormat('en-CA', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num);
}

export default function PurchasingPower({ years, todayIndex, todayLabel, defaultYear }: Props) {
  const [amountText, setAmountText] = useState('100');
  const [yearText, setYearText] = useState(String(defaultYear));

  const result = useMemo(() => {
    const amount = Number(amountText);
    const year = Number(yearText);
    const point = years.find((item) => item.year === year);
    if (!point) return { error: 'Choose a year from the annual Consumer Price Index.' };
    const today = purchasingPower(amount, point.index, todayIndex);
    const change = totalChangePercent(point.index, todayIndex);
    const ratio = indexRatio(point.index, todayIndex);
    if (today == null || change == null || ratio == null) {
      return { error: 'Enter a dollar amount greater than zero.' };
    }
    const changeText = change === 0 ? 'unchanged' : change > 0 ? `up ${unsignedPercent(change)}%` : `down ${unsignedPercent(change)}%`;
    return {
      error: null,
      sentence: `${money(amount)} from ${year} has the purchasing power of ${money(today)} in ${todayLabel}. The price level is ${changeText} between the ${year} annual average index (${indexText(point.index)}) and the ${todayLabel} index (${indexText(todayIndex)}). That later index is ${ratioText(ratio)} times the ${year} index.`,
      today,
    };
  }, [amountText, yearText, years, todayIndex, todayLabel]);

  return (
    <form class="rounded-xl border border-border/40 bg-surface p-5 sm:p-6" onSubmit={(event) => event.preventDefault()}>
      <div class="grid gap-4 sm:grid-cols-2">
        <label class="block font-sans text-sm font-semibold text-on-surface">
          Amount in the earlier year
          <input
            class="mt-2 w-full min-h-[44px] rounded-md border border-border bg-background px-3 text-base text-on-surface"
            inputMode="decimal"
            min="0.01"
            step="0.01"
            type="number"
            value={amountText}
            onChange={(event) => setAmountText(event.target.value)}
          />
        </label>
        <label class="block font-sans text-sm font-semibold text-on-surface">
          Year
          <select
            class="mt-2 w-full min-h-[44px] rounded-md border border-border bg-background px-3 text-base text-on-surface"
            value={yearText}
            onChange={(event) => setYearText(event.target.value)}
          >
            {[...years].reverse().map((item) => (
              <option key={item.year} value={item.year}>
                {item.year}
              </option>
            ))}
          </select>
        </label>
      </div>
      <p class="mt-5 font-sans text-base leading-relaxed text-on-surface" aria-live="polite">
        {result.error ?? result.sentence}
      </p>
      <p class="mt-3 font-sans text-xs leading-relaxed text-on-surface-variant">
        The earlier year uses the published annual average all-items index. Today uses the latest monthly
        all-items index. Both are 2002=100. Dollars are rounded half away from zero to the cent.
      </p>
    </form>
  );
}
