/**
 * Content collections: every news item, event, story… is a Markdown file
 * in src/content/. The schemas below check each file's front matter at
 * build time, so a typo (a missing date, a wrong format) fails the build
 * instead of breaking the page silently.
 */
import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    start: z.coerce.date(),
    end: z.coerce.date().optional(),
    format: z.enum(['In person', 'Online', 'Hybrid']),
    location: z.string(),
    organiser: z.string(),
    excerpt: z.string(),
  }),
});

const stories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stories' }),
  schema: z.object({
    title: z.string(),
    /** Invented first name only – never real patient data */
    name: z.string(),
    age: z.number().int().optional(),
    country: z.string(),
    condition: z.string(),
    date: z.coerce.date(),
    quote: z.string(),
    excerpt: z.string(),
    featured: z.boolean().default(false),
  }),
});

const collaborations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/collaborations' }),
  schema: z.object({
    name: z.string(),
    acronym: z.string().optional(),
    website: z.string().optional(),
    summary: z.string(),
    order: z.number().default(99),
  }),
});

/** Member activities and FEDERG representations (both used to be newsletter pages) */
const updates = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/updates' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    kind: z.enum(['member-activity', 'representation']),
    excerpt: z.string(),
  }),
});

const members = defineCollection({
  loader: file('./src/content/members.json'),
  schema: z.object({
    name: z.string(),
    country: z.string(),
    focus: z.string(),
    order: z.number().default(99),
  }),
});

/** Long-form static pages (About, Governance…) */
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string().optional(),
    lead: z.string().optional(),
  }),
});

export const collections = { news, events, stories, collaborations, updates, members, pages };
