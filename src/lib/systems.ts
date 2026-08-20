import { getCollection, type CollectionEntry } from 'astro:content';

export type System = CollectionEntry<'systems'>;

export async function getAllSystems(): Promise<System[]> {
  return getCollection('systems');
}

/**
 * Pulls a comparable year out of frontmatter: a plain number, or a
 * descriptive string like "April 2025" (via its first four-digit run).
 * Returns null for anything unresolved (`TODO`, no digits).
 */
function extractYear(year: number | string): number | null {
  if (typeof year === 'number') return year;
  const match = year.match(/\d{4}/);
  return match ? Number(match[0]) : null;
}

/**
 * Newest first. Entries with an unresolved (`TODO`) year sort to the end —
 * we don't know how recent they are, so they shouldn't outrank dated work.
 * `order` breaks ties (including ties between two unresolved years).
 */
function byYearDesc(a: System, b: System): number {
  const ay = extractYear(a.data.year);
  const by = extractYear(b.data.year);
  if (ay !== null && by !== null) {
    return by - ay || a.data.order - b.data.order;
  }
  if (ay !== null) return -1;
  if (by !== null) return 1;
  return a.data.order - b.data.order;
}

export async function getSystemsByContext(context: 'production' | 'independent'): Promise<System[]> {
  const all = await getAllSystems();
  return all.filter((s) => s.data.context === context).sort(byYearDesc);
}

export async function getFeaturedSystems(): Promise<System[]> {
  const all = await getAllSystems();
  return all.filter((s) => s.data.tier === 'featured').sort(byYearDesc);
}

/** Whether an outcome is still a placeholder — display should fall back to an arrow, not the literal string. */
export function isOutcomePending(outcome: string): boolean {
  return outcome === 'TODO';
}
