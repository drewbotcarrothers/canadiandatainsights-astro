import { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const geoUrl =
  'https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/canada.geojson';

/** Cities whose labels are hidden by default (shown on hover) due to geographic density */
const HIDE_LABEL = new Set(['Brampton', 'Mississauga', 'Hamilton', 'Surrey']);

/** Label offsets for always-visible + hover-only cities */
const LABEL_OFFSETS: Record<
  string,
  { dx: number; dy: number; align: 'start' | 'end' | 'middle' }
> = {
  Toronto: { dx: 14, dy: 5, align: 'start' },
  Montréal: { dx: 14, dy: 14, align: 'start' },
  Montreal: { dx: 14, dy: 14, align: 'start' },
  Calgary: { dx: 14, dy: 5, align: 'start' },
  Ottawa: { dx: -14, dy: -4, align: 'end' },
  Edmonton: { dx: 14, dy: -8, align: 'start' },
  Winnipeg: { dx: 0, dy: 20, align: 'middle' },
  Vancouver: { dx: 14, dy: 5, align: 'start' },
  Québec: { dx: 14, dy: -8, align: 'start' },
  'Quebec City': { dx: 14, dy: -8, align: 'start' },
  Halifax: { dx: 14, dy: 5, align: 'start' },
  Mississauga: { dx: -14, dy: 5, align: 'end' },
  Brampton: { dx: -14, dy: -10, align: 'end' },
  Hamilton: { dx: -14, dy: 14, align: 'end' },
  Surrey: { dx: 14, dy: 14, align: 'start' },
};

export interface MapCity {
  name: string;
  pop: number;
  age: number;
  income: number | null;
  slug: string;
  coords: [number, number];
}

function navigateToLocation(slug: string) {
  window.location.href = `/location/${slug}/`;
}

export default function CanadaMap({ cities }: { cities: MapCity[] }) {
  const [activeCity, setActiveCity] = useState<MapCity | null>(null);

  return (
    <div className="group flex h-full w-full flex-col overflow-hidden bg-surface-soft md:flex-row">
      {/* Map */}
      <div className="relative min-h-[400px] flex-1">
        <ComposableMap
          projection="geoAzimuthalEqualArea"
          projectionConfig={{
            rotate: [96, -60, 0],
            center: [5, 2],
            scale: 750,
          }}
          className="absolute inset-0 h-full w-full"
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#e2e6f2"
                  stroke="#c7cce0"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: 'none' },
                    hover: { outline: 'none', fill: '#d0d5e8' },
                    pressed: { outline: 'none' },
                  }}
                />
              ))
            }
          </Geographies>

          {cities.map((city) => {
            const labelConfig = LABEL_OFFSETS[city.name] || {
              dx: 0,
              dy: 18,
              align: 'middle' as const,
            };
            const isActive = activeCity?.slug === city.slug;
            const showLabel = !HIDE_LABEL.has(city.name) || isActive;

            return (
              <Marker key={city.slug} coordinates={city.coords}>
                <circle
                  r={isActive ? 8 : 5}
                  className={`${isActive ? 'fill-tertiary' : 'fill-primary'} cursor-pointer stroke-white transition-all duration-200`}
                  strokeWidth={2}
                  onMouseEnter={() => setActiveCity(city)}
                  onMouseLeave={() => setActiveCity(null)}
                  onClick={() => navigateToLocation(city.slug)}
                />
                {showLabel && (
                  <text
                    x={labelConfig.dx}
                    y={labelConfig.dy}
                    textAnchor={labelConfig.align}
                    className={`pointer-events-none select-none font-sans text-[11px] font-bold drop-shadow-sm ${
                      isActive ? 'fill-tertiary' : 'fill-on-surface-variant'
                    }`}
                  >
                    {city.name}
                  </text>
                )}
              </Marker>
            );
          })}
        </ComposableMap>
      </div>

      {/* Hover details panel */}
      <div className="flex w-full shrink-0 flex-col justify-center border-t border-border/30 bg-surface-soft/80 p-8 backdrop-blur-sm md:w-[320px] md:border-t-0 md:border-l lg:w-[380px]">
        {activeCity ? (
          <div className="rounded-2xl border border-border/40 bg-surface p-6 shadow-xl">
            <div className="mb-4 inline-block rounded bg-primary px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white">
              City Profile
            </div>
            <h4 className="mb-1 font-heading text-2xl font-extrabold tracking-tight text-primary">
              {activeCity.name}
            </h4>
            <div className="mb-6 h-1 w-12 rounded-full bg-tertiary" />

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-border/20 pb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                  Population
                </span>
                <span className="font-heading text-lg font-black text-primary">
                  {Number(activeCity.pop).toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-border/20 pb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                  Avg Age
                </span>
                <span className="font-heading text-lg font-black text-primary">
                  {activeCity.age}{' '}
                  <span className="text-xs font-medium text-on-surface-variant">yrs</span>
                </span>
              </div>
              {activeCity.income != null && activeCity.income > 0 && (
                <div className="flex items-center justify-between border-b border-border/20 pb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                    Median Income
                  </span>
                  <span className="font-heading text-lg font-black text-primary">
                    ${(activeCity.income / 1000).toFixed(0)}
                    <span className="text-xs font-medium text-on-surface-variant">k</span>
                  </span>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => navigateToLocation(activeCity.slug)}
              className="mt-6 w-full rounded-xl bg-primary py-3 text-sm font-bold tracking-wide text-white shadow-md transition-colors hover:bg-tertiary"
            >
              View Full Dataset
            </button>
          </div>
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border/40 bg-surface/40 p-8 text-center text-on-surface-variant">
            <svg
              className="mb-4 h-12 w-12 text-primary opacity-40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mb-2 font-heading text-lg font-bold text-primary">Interactive Atlas</h3>
            <p className="text-sm">
              Hover over any marked city on the map to explore top-level census demographics.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
