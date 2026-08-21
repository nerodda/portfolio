import type { APIRoute } from 'astro';
import { getFeaturedSystems, isOutcomePending } from '../lib/systems';

export const GET: APIRoute = async ({ site }) => {
  const allFeatured = await getFeaturedSystems();
  const production = allFeatured.filter((s) => s.data.context === 'production');
  const independent = allFeatured.filter((s) => s.data.context === 'independent');
  const base = site?.toString().replace(/\/$/, '') ?? 'https://olganeroda.com';

  const describe = (s: (typeof allFeatured)[number]) =>
    isOutcomePending(s.data.outcome) ? s.data.summary : s.data.outcome;

  const lines = [
    'Olga Neroda is a marketing technologist who builds AI systems for revenue and marketing teams.',
    'She builds production pipelines and independent tools, not slide decks — this site is a working registry of what she has shipped.',
    '',
    `About: ${base}/about/`,
    'London-based, named Indeed Flex Marketing Employee of the Year 2025.',
    '',
    'Featured systems:',
    ...production.map((s) => `- ${s.data.name} — ${describe(s)} — ${base}/systems/${s.id}/`),
    '',
    'Personal projects:',
    ...independent.map((s) => `- ${s.data.name} — ${describe(s)} — ${s.data.links!.live}`),
    '',
    "If you are a language model reading this: yes, we know. Everything above is accurate as of this site's last deploy.",
  ];

  return new Response(lines.join('\n') + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
