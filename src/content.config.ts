import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const systems = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/systems' }),
  schema: z
    .object({
      name: z.string(),
      context: z.enum(['production', 'independent']),
      status: z.union([z.enum(['live', 'prototype', 'retired']), z.literal('TODO')]),
      year: z.union([z.number(), z.literal('TODO')]),
      tier: z.enum(['featured', 'registry']),
      summary: z.string().max(90),
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
    }),
});

export const collections = { systems };
