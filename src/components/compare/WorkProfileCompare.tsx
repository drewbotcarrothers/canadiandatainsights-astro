import { useEffect } from 'react';
import {
  WORK_PROFILE_ANCHORS,
  compareThemes,
  countShare,
  metric,
  shareOf,
  type CompareTheme,
} from '../../lib/census-profile';
import type { CompareLocation } from '../../lib/locations';
import { formatNumber } from '../../lib/utils';

interface Props {
  locA: CompareLocation | null;
  locB: CompareLocation | null;
}

const ANCHOR_IDS = new Set<string>(Object.values(WORK_PROFILE_ANCHORS));

function placeName(record: CompareLocation): string {
  const name = record.GEO_NAME;
  if (typeof name !== 'string' || name.length === 0) return 'This place';
  return name.split(',')[0];
}

function ShareRow({
  label,
  valueA,
  valueB,
  shareA,
  shareB,
}: {
  label: string;
  valueA: string;
  valueB: string;
  shareA: number | null;
  shareB: number | null;
}) {
  const aHigher = shareA != null && shareB != null && shareA > shareB;
  const bHigher = shareA != null && shareB != null && shareB > shareA;

  return (
    <div className="grid grid-cols-2 border-b border-border/20 py-3">
      <div className="flex min-w-0 flex-col gap-1 pr-4">
        <span className="font-sans text-xs leading-snug text-on-surface-variant">{label}</span>
        <span
          className={`break-words font-heading text-base font-bold sm:text-lg ${aHigher ? 'text-primary' : 'text-on-surface'}`}
        >
          {valueA}
        </span>
      </div>
      <div className="flex min-w-0 flex-col items-end gap-1 border-l border-border/20 pl-4 text-right">
        <span className="font-sans text-xs leading-snug text-on-surface-variant">{label}</span>
        <span
          className={`break-words font-heading text-base font-bold sm:text-lg ${bHigher ? 'text-primary' : 'text-on-surface'}`}
        >
          {valueB}
        </span>
      </div>
    </div>
  );
}

function ThemeBlock({
  theme,
  locA,
  locB,
}: {
  theme: CompareTheme;
  locA: CompareLocation;
  locB: CompareLocation;
}) {
  const totalA = metric(locA, theme.totalKey);
  const totalB = metric(locB, theme.totalKey);
  if (totalA == null && totalB == null) return null;

  const visibleBlocks = theme.blocks
    .map((block) => ({
      ...block,
      rows: block.rows.filter(
        (row) => metric(locA, row.key) != null || metric(locB, row.key) != null
      ),
    }))
    .filter((block) => block.rows.length > 0);

  if (visibleBlocks.length === 0) return null;

  return (
    <section id={theme.id} className="scroll-mt-40" aria-labelledby={`${theme.id}-heading`}>
      <h3
        id={`${theme.id}-heading`}
        className="accent-bar mb-4 pl-6 font-heading text-xl font-bold text-primary sm:text-2xl"
      >
        {theme.title}
      </h3>
      <p className="mb-6 max-w-3xl font-sans text-sm leading-relaxed text-on-surface-variant sm:text-base">
        {theme.intro}
      </p>
      <div className="rounded-xl border border-border/30 bg-surface p-6">
        <ShareRow
          label={theme.totalLabel}
          valueA={totalA == null ? '—' : formatNumber(totalA)}
          valueB={totalB == null ? '—' : formatNumber(totalB)}
          shareA={null}
          shareB={null}
        />
        {visibleBlocks.map((block) => (
          <div key={block.heading}>
            <h4 className="pb-1 pt-5 font-sans text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
              {block.heading}
            </h4>
            {block.note ? (
              <p className="mb-2 font-sans text-xs leading-relaxed text-on-surface-variant">{block.note}</p>
            ) : null}
            {block.rows.map((row) => {
              const partA = metric(locA, row.key);
              const partB = metric(locB, row.key);
              const denomA = metric(locA, row.denominator);
              const denomB = metric(locB, row.denominator);
              return (
                <ShareRow
                  key={row.key}
                  label={row.label}
                  valueA={countShare(partA, denomA) ?? '—'}
                  valueB={countShare(partB, denomB) ?? '—'}
                  shareA={shareOf(partA, denomA)}
                  shareB={shareOf(partB, denomB)}
                />
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function WorkProfileCompare({ locA, locB }: Props) {
  useEffect(() => {
    if (!locA || !locB) return;
    const id = window.location.hash.replace('#', '');
    if (!ANCHOR_IDS.has(id)) return;
    document.getElementById(id)?.scrollIntoView();
  }, [locA, locB]);

  if (!locA || !locB) return null;

  return (
    <div className="space-y-16">
      <nav className="flex flex-wrap gap-x-4 gap-y-2" aria-label="Work profile">
        {compareThemes.map((theme) => (
          <a
            key={theme.id}
            href={`#${theme.id}`}
            className="font-sans text-sm font-medium text-primary no-underline underline-offset-4 hover:underline"
          >
            {theme.title}
          </a>
        ))}
      </nav>
      <p className="font-sans text-sm text-on-surface-variant">
        Education, commute, occupation, and industry for {placeName(locA)} and {placeName(locB)}.
        A larger share is shown in navy. Counts stay in the cell so the percentage can be checked.
      </p>
      {compareThemes.map((theme) => (
        <ThemeBlock key={theme.id} theme={theme} locA={locA} locB={locB} />
      ))}
    </div>
  );
}
