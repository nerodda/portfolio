import { getCollection, type CollectionEntry } from 'astro:content';

export type System = CollectionEntry<'systems'>;

export async function getAllSystems(): Promise<System[]> {
  return getCollection('systems');
}

const MONTHS = [
  'january', 'february', 'march', 'april', 'may', 'june',
  'july', 'august', 'september', 'october', 'november', 'december',
];

/**
 * Pulls a comparable year+month out of frontmatter: a plain number, or a
 * descriptive string like "April 2025" (month name plus a four-digit year).
 * A bare year (or no recognized month name) leaves month null. Returns null
 * for anything unresolved (`TODO`, no digits).
 */
function extractYearMonth(year: number | string): { year: number; month: number | null } | null {
  if (typeof year === 'number') return { year, month: null };
  const yearMatch = year.match(/\d{4}/);
  if (!yearMatch) return null;
  const monthMatch = year.toLowerCase().match(new RegExp(MONTHS.join('|')));
  const month = monthMatch ? MONTHS.indexOf(monthMatch[0]) : null;
  return { year: Number(yearMatch[0]), month };
}

/**
 * Newest first, by month then year. Entries with an unresolved (`TODO`) date
 * sort to the end — we don't know how recent they are, so they shouldn't
 * outrank dated work. `order` only breaks ties left over after date
 * comparison (same year+month, or both dates unresolved, or one missing a
 * month within the same year).
 */
function byYearDesc(a: System, b: System): number {
  const ad = extractYearMonth(a.data.year);
  const bd = extractYearMonth(b.data.year);
  if (ad !== null && bd !== null) {
    if (ad.year !== bd.year) return bd.year - ad.year;
    if (ad.month !== null && bd.month !== null && ad.month !== bd.month) {
      return bd.month - ad.month;
    }
    return a.data.order - b.data.order;
  }
  if (ad !== null) return -1;
  if (bd !== null) return 1;
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