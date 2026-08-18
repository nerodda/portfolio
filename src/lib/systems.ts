import { getCollection, type CollectionEntry } from 'astro:content';

export type System = CollectionEntry<'systems'>;

export async function getAllSystems(): Promise<System[]> {
  return getCollection('systems');
}

/**
 * Newest first. Entries with an unresolved (`TODO`) year sort to the end —
 * we don't know how recent they are, so they shouldn't outrank dated work.
 * `order` breaks ties (including ties between two TODO years).
 */
function byYearDesc(a: System, b: System): number {
  const ay = a.data.year;
  const by = b.data.year;
  if (typeof ay === 'number' && typeof by === 'number') {
    return by - ay || a.data.order - b.data.order;
  }
  if (typeof ay === 'number') return -1;
  if (typeof by === 'number') return 1;
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
