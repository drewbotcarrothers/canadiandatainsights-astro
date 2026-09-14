/**
 * Thin GA4 helpers. Safe when gtag is missing (local preview, ad blockers).
 * Mark `location_engage` and `compare_complete` as Key events in GA4 Admin → Events.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export type AnalyticsParams = Record<string, string | number | boolean | undefined | null>;

export function trackEvent(name: string, params?: AnalyticsParams): void {
  if (typeof window === 'undefined') return;
  const gtag = window.gtag;
  if (typeof gtag !== 'function') return;
  const cleaned: Record<string, string | number | boolean> = {};
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      if (v === undefined || v === null) continue;
      cleaned[k] = v;
    }
  }
  gtag('event', name, cleaned);
}

/** Fire once per page load after `delayMs` (default 30s). Returns cleanup. */
export function trackOnceAfterDelay(
  name: string,
  params: AnalyticsParams | undefined,
  delayMs = 30_000
): () => void {
  if (typeof window === 'undefined') return () => {};
  let fired = false;
  const id = window.setTimeout(() => {
    if (fired) return;
    fired = true;
    trackEvent(name, params);
  }, delayMs);
  return () => {
    window.clearTimeout(id);
  };
}
