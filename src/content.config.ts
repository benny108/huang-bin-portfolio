import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const localizedGlob = (base: string, pattern = "**/*.{md,mdx}") =>
  glob({
    pattern,
    base,
    generateId: ({ data, entry }) =>
      `${String(data.lang || entry.split("/")[0])}/${String(data.slug || entry.split("/").pop()?.replace(/\.(md|mdx)$/, ""))}`
  });

const localizedBase = {
  lang: z.enum(["zh", "en"]),
  slug: z.string(),
  title: z.string(),
  summary: z.string()
};

const publications = defineCollection({
  loader: localizedGlob("./src/content/publications"),
  schema: z.object({
    ...localizedBase,
    year: z.number(),
    status: z.enum(["published", "accepted", "under_review", "manuscript", "shared_task"]),
    role: z.string(),
    venue: z.string(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()),
    metrics: z.array(z.string()).default([]),
    officialUrl: z.url().optional(),
    doi: z.string().optional(),
    contributions: z.array(z.string())
  })
});

const projects = defineCollection({
  loader: localizedGlob("./src/content/projects"),
  schema: z.object({
    ...localizedBase,
    period: z.string(),
    role: z.string(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()),
    metrics: z.array(z.string()),
    confidentiality: z.string(),
    accent: z.enum(["violet", "cyan", "amber", "green"]).default("violet")
  })
});

const writing = defineCollection({
  loader: localizedGlob("./src/content/writing"),
  schema: z.object({
    ...localizedBase,
    publishedAt: z.coerce.date(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    readingMinutes: z.number(),
    externalUrl: z.url().optional()
  })
});

const awards = defineCollection({
  loader: localizedGlob("./src/content/awards", "**/*.md"),
  schema: z.object({
    ...localizedBase,
    year: z.number(),
    level: z.string(),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    imageAlt: z.string().optional()
  })
});

export const collections = { publications, projects, writing, awards };
