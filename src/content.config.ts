import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const systems = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/systems' }),
  schema: z
    .object({
      name: z.string(),
      context: z.enum(['production', 'independent']),
      status: z.union([z.enum(['live', 'prototype', 'retired']), z.literal('TODO')]),
      year: z.union([z.number(), z.string(), z.literal('TODO')]),
      tier: z.enum(['featured', 'registry']),
      summary: z.string().max(90),
      /** Optional richer hero lede. Falls back to `summary` when absent. */
      lede: z.array(z.string()).min(1).max(3).optional(),
      /** Optional full-bleed background image for the hero, e.g. `/images/foo.jpg`. */
      heroImage: z.string().optional(),
      /** Optional social-share preview image (1200x630). Falls back to `heroImage`, then the site default. */
      ogImage: z.string().optional(),
      /** Optional looping background video, layered over `heroImage`. Falls back to the still image under prefers-reduced-motion. */
      heroVideo: z
        .object({
          mp4: z.string(),
          webm: z.string().optional(),
        })
        .optional(),
      outcome: z.string().max(90),
      stack: z.array(z.string()),
      flow: z.array(z.string()).min(3).max(6),
      feedback: z.boolean().default(false),
      order: z.number(),
      links: z
        .object({
          live: z.string().optional(),
          repo: z.string().optional(),
        })
        .optional(),
    })
    .superRefine((data, ctx) => {
      if (data.context === 'production' && data.links?.repo) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `production system "${data.name}" must not carry links.repo — production entries are employer systems and must not link to code`,
          path: ['links', 'repo'],
        });
      }
      if (data.context === 'independent' && !data.links?.live) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `independent system "${data.name}" must carry links.live — personal projects link out to their live homepage instead of an internal case study page`,
          path: ['links', 'live'],
        });
      }
    }),
});

export const collections = { systems };
