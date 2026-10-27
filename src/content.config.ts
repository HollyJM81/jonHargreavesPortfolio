import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"
import { ROLES } from "./data/roles"

const link = z.object({
  title: z.string().optional(),
  url: z.url(),
})

const projects = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // YYYY, YYYY-MM or YYYY-MM-DD. Used for ordering; shown as the year
      // unless dateLabel overrides it (e.g. "2023/24").
      date: z.string().regex(/^\d{4}(-\d{2}(-\d{2})?)?$/),
      dateLabel: z.string().optional(),
      // Featured projects lead the work section, chosen by importance not date.
      featured: z.boolean().default(false),
      // "page": its own page at /projects/<slug>. "expand": an expanding
      // archive row with a simplified layout (it still gets a page).
      display: z.enum(["page", "expand"]).default("page"),
      roles: z.array(z.enum(ROLES)),
      // Jon's role in his own words, e.g. "String arranger, keyboards".
      credit: z.string(),
      summary: z.string().optional(),
      image: image(),
      imageAlt: z.string(),
      gallery: z.array(z.object({ src: image(), alt: z.string() })).optional(),
      collaborators: z
        .array(z.object({ name: z.string(), url: z.url().optional() }))
        .optional(),
      website: z.url().optional(),
      videos: z.array(link).optional(),
      audio: z.array(link).optional(),
      press: z.array(z.object({ quote: z.string(), source: z.string() })).optional(),
    }),
})

export const collections = { projects }
