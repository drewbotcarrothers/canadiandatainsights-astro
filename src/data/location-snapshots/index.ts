import type { LocationSnapshot } from './types';

export type { LocationSnapshot, LocationSnapshotPlace, LocationSnapshotPerson } from './types';

/**
 * JSON files in this folder are keyed by location slug (e.g. `toronto.json`
 * → `/location/toronto/`). Add a new file to ship another city; pages without
 * a matching file render unchanged.
 */
const modules = import.meta.glob<LocationSnapshot>('./*.json', {
  eager: true,
  import: 'default',
});

const snapshots: Record<string, LocationSnapshot> = {};

for (const [path, data] of Object.entries(modules)) {
  const slug = path.match(/([^/]+)\.json$/)?.[1];
  if (!slug) continue;
  snapshots[slug] = assertSnapshot(slug, data);
}

function assertString(value: unknown, label: string): string {
  if (typeof value !== 'string' || !value.trim()) {
    throw new Error(`Location snapshot ${label} must be a non-empty string`);
  }
  return value.trim();
}

function assertStringList(value: unknown, label: string, min = 3, max = 5): string[] {
  if (!Array.isArray(value) || value.length < min || value.length > max) {
    throw new Error(`Location snapshot ${label} must have ${min}–${max} items`);
  }
  return value.map((item, i) => assertString(item, `${label}[${i}]`));
}

function assertSnapshot(slug: string, data: unknown): LocationSnapshot {
  if (!data || typeof data !== 'object') {
    throw new Error(`Location snapshot "${slug}" must be an object`);
  }
  const raw = data as Record<string, unknown>;
  const about = assertString(raw.about, `"${slug}".about`);
  const knownFor = assertStringList(raw.knownFor, `"${slug}".knownFor`);

  if (!Array.isArray(raw.seeAndDo) || raw.seeAndDo.length < 3 || raw.seeAndDo.length > 5) {
    throw new Error(`Location snapshot "${slug}".seeAndDo must have 3–5 items`);
  }
  const seeAndDo = raw.seeAndDo.map((item, i) => {
    if (!item || typeof item !== 'object') {
      throw new Error(`Location snapshot "${slug}".seeAndDo[${i}] must be an object`);
    }
    const place = item as Record<string, unknown>;
    return {
      name: assertString(place.name, `"${slug}".seeAndDo[${i}].name`),
      why: assertString(place.why, `"${slug}".seeAndDo[${i}].why`),
    };
  });

  const snapshot: LocationSnapshot = { about, knownFor, seeAndDo };

  if (raw.seoSummary != null) {
    snapshot.seoSummary = assertString(raw.seoSummary, `"${slug}".seoSummary`);
  }

  if (raw.famousPeople != null) {
    if (!Array.isArray(raw.famousPeople)) {
      throw new Error(`Location snapshot "${slug}".famousPeople must be an array`);
    }
    snapshot.famousPeople = raw.famousPeople.map((item, i) => {
      if (!item || typeof item !== 'object') {
        throw new Error(`Location snapshot "${slug}".famousPeople[${i}] must be an object`);
      }
      const person = item as Record<string, unknown>;
      return {
        name: assertString(person.name, `"${slug}".famousPeople[${i}].name`),
        note: assertString(person.note, `"${slug}".famousPeople[${i}].note`),
      };
    });
  }

  return snapshot;
}

export function getLocationSnapshot(slug: string): LocationSnapshot | undefined {
  return snapshots[slug];
}

export function hasLocationSnapshot(slug: string): boolean {
  return slug in snapshots;
}
