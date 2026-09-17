/** Editorial community snapshot for a location profile, keyed by URL slug. */

export interface LocationSnapshotPlace {
  name: string;
  /** One-line reason this place is listed. */
  why: string;
}

export interface LocationSnapshotPerson {
  name: string;
  note: string;
}

export interface LocationSnapshot {
  /** 2–4 sentences. Place character; population scale only in passing. */
  about: string;
  /** 3–5 crisp bullets. */
  knownFor: string[];
  /** 3–5 well-known landmarks or attractions. */
  seeAndDo: LocationSnapshotPlace[];
  /**
   * Short clause for meta description / JSON-LD.
   * Not rendered in the on-page snapshot body.
   */
  seoSummary?: string;
  /** Omit or leave empty to hide the people block. */
  famousPeople?: LocationSnapshotPerson[];
}
