// The practice areas used to filter work. Renaming or merging a role here
// (e.g. folding Researcher and Teacher into "Academia") makes the build fail
// on any project still using the old name, so nothing is silently dropped.
export const ROLES = [
  "Conductor",
  "Composer",
  "Arranger",
  "Producer",
  "Researcher",
  "Teacher",
] as const

export type Role = (typeof ROLES)[number]
