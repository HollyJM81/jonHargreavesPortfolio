import { getCollection, type CollectionEntry } from "astro:content"

export type Project = CollectionEntry<"projects">

// Newest first. Dates of mixed precision ("2024", "2024-06") sort correctly
// as strings; ties fall back to title so the order is stable between builds.
const byDateDesc = (a: Project, b: Project) =>
  b.data.date.localeCompare(a.data.date) || a.data.title.localeCompare(b.data.title)

export async function getProjects() {
  const all = (await getCollection("projects")).sort(byDateDesc)
  return {
    all,
    featured: all.filter((p) => p.data.featured),
    recordings: all.filter((p) => p.data.recording),
  }
}

export const displayDate = (p: Project) => p.data.dateLabel ?? p.data.date.slice(0, 4)

export const projectUrl = (p: Project) => `/projects/${p.id}`

export const pad = (n: number) => String(n).padStart(2, "0")
