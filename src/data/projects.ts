export const roles = [
  "All",
  "Conductor",
  "Composer",
  "Arranger",
  "Producer",
  "Researcher",
  "Teacher",
] as const

export type Role = Exclude<typeof roles[number], "All">

type ProjectBase = {
  title: string
  date: string
  displayDate: string
  roles: Role[]
}

type ProjectDetails = {
  image: string
  alt: string
  description: string
  credit: string
}

export type HighlightProject = ProjectBase & ProjectDetails & {
  featured: true
}

type ArchiveProject = ProjectBase & Partial<ProjectDetails> & {
  featured: false
}

export type Project = HighlightProject | ArchiveProject

// Use an ISO date (YYYY-MM-DD) when known, or YYYY when only the year is known.
// displayDate is the editorial label shown on the site.
const projects: Project[] = [
  {
    title: "Parallel Worlds & Portals",
    date: "2025",
    displayDate: "2025",
    image: "/images/parallel-worlds.jpg",
    alt: "A vivid evening sky above Halifax",
    roles: ["Composer", "Arranger"],
    description:
      "A new orchestral work built from unlikely crossings: landscape, memory and imagined worlds.",
    credit: "Symphony Nova Scotia",
    featured: true,
  },
  {
    title: "Friday Afternoons",
    date: "2025",
    displayDate: "2025",
    image: "/images/friday-afternoons.png",
    alt: "Children singing together in a music project",
    roles: ["Composer"],
    description:
      "New music made with young voices: direct, ambitious and alive to the room it is written for.",
    credit: "National youth music project",
    featured: true,
  },
  {
    title: "Eleven Conditions of Responsibility",
    date: "2025",
    displayDate: "2025",
    image: "/images/conditions.png",
    alt: "Graphic musical schema with blue and red forms",
    roles: ["Conductor"],
    description:
      "An exacting encounter with Sinan Savaskan’s music, mapping its formal logic for performance.",
    credit: "Octandre Ensemble",
    featured: true,
  },
  {
    title: "Sounds of the Deep",
    date: "2025",
    displayDate: "2025",
    image: "/images/sounds-deep.jpg",
    alt: "Light moving through deep blue water",
    roles: ["Composer"],
    description:
      "An immersive schools project that turns the hidden acoustics of the ocean into orchestral music.",
    credit: "Royal Scottish National Orchestra",
    featured: true,
  },
  {
    title: "CoMA Summer School",
    date: "2025",
    displayDate: "2025",
    image: "/images/coma.png",
    alt: "Collage of musicians rehearsing and performing",
    roles: ["Conductor", "Teacher"],
    description:
      "Large-scale participatory new music: rigorous rehearsal without drawing a line between professionals and amateurs.",
    credit: "Contemporary Music for All",
    featured: true,
  },
  {
    title: "Lacunas Music Society",
    date: "2024",
    displayDate: "2024",
    image: "/images/lacunas.png",
    alt: "Abstract black and cream artwork",
    roles: ["Arranger"],
    description:
      "A listening society for overlooked work, bringing forgotten scores and unfinished histories back into focus.",
    credit: "Glasgow",
    featured: false,
  },
  {
    title: "Tomnasimk",
    date: "2024",
    displayDate: "2024",
    image: "/images/tomnasimk.jpg",
    alt: "Performer seated at a table with instruments and audio equipment",
    roles: ["Composer"],
    description:
      "Carrying the Burden Together — a cross-cultural performance built through close, patient collaboration.",
    credit: "New music theatre",
    featured: true,
  },
  {
    title: "World of My Own",
    date: "2024",
    displayDate: "2024",
    image: "/images/world-of-my-own.jpg",
    alt: "World of My Own album artwork",
    roles: ["Composer", "Arranger"],
    description:
      "Orchestral scale meets indie songwriting in a long-running collaboration with Chris Helme.",
    credit: "Chris Helme",
    featured: true,
  },
  {
    title: "Screens",
    date: "2023",
    displayDate: "2023",
    image: "/images/screens.png",
    alt: "Screens album cover by Frank Denyer",
    roles: ["Conductor", "Producer"],
    description:
      "Frank Denyer’s strange, luminous chamber music captured with the precision and tension it demands.",
    credit: "Octandre Ensemble · Another Timbre",
    featured: true,
  },
  {
    title: "Raising Voices",
    date: "2024",
    displayDate: "2024",
    image: "/images/raising-voices.png",
    alt: "Three vocalists performing on stage",
    roles: ["Arranger", "Conductor"],
    description:
      "A concert shaped around the voices and experiences of people seeking sanctuary in Scotland.",
    credit: "RSNO · Scottish Refugee Festival",
    featured: true,
  },
  {
    title: "Immense Bleak Electric Advertisement of God",
    date: "2024",
    displayDate: "2024",
    roles: ["Conductor"],
    featured: false,
  },
  {
    title: "Matt Dibble: 24 Preludes and Fugues",
    date: "2024",
    displayDate: "2024",
    roles: ["Producer"],
    featured: false,
  },
  {
    title: "Beeswing",
    date: "2024",
    displayDate: "2024",
    roles: ["Arranger"],
    featured: false,
  },
  {
    title: "Still I Rise",
    date: "2024",
    displayDate: "2024",
    roles: ["Arranger"],
    featured: false,
  },
  {
    title: "Sunrise 545",
    date: "2024",
    displayDate: "2024",
    roles: ["Composer"],
    featured: false,
  },
  {
    title: "The Harpweaver",
    date: "2024",
    displayDate: "2024",
    roles: ["Arranger"],
    featured: false,
  },
  {
    title: "Sonorities and Spectra",
    date: "2024",
    displayDate: "2024",
    roles: ["Conductor"],
    featured: false,
  },
  {
    title: "Pierrot Lunaire",
    date: "2023",
    displayDate: "2023",
    roles: ["Conductor"],
    featured: false,
  },
  {
    title: "RSNO Film Composers Lab",
    date: "2024",
    displayDate: "2023–24",
    roles: ["Teacher"],
    featured: false,
  },
  {
    title: "Clouds Behind the Moon",
    date: "2022",
    displayDate: "2022",
    roles: ["Arranger"],
    featured: false,
  },
  {
    title: "First Light",
    date: "2022",
    displayDate: "2022",
    roles: ["Arranger"],
    featured: false,
  },
  {
    title: "Welcome Party",
    date: "2021",
    displayDate: "2021",
    roles: ["Conductor"],
    featured: false,
  },
  {
    title: "Sub",
    date: "2021",
    displayDate: "2021",
    roles: ["Conductor"],
    featured: false,
  },
  {
    title: "The Fish that Became the Sun",
    date: "2019",
    displayDate: "2019",
    roles: ["Conductor", "Producer"],
    featured: false,
  },
  {
    title: "Rolf Hind Composer Portrait",
    date: "2018",
    displayDate: "2018",
    roles: ["Conductor"],
    featured: false,
  },
]

const newestFirst = [...projects].sort((a, b) => b.date.localeCompare(a.date))

// The ten newest featured projects are shown in the main grid. Any remaining
// project, including an older featured one, automatically appears in archive.
export const highlights = newestFirst
  .filter((project): project is HighlightProject => project.featured === true)
  .slice(0, 10)

const highlightTitles = new Set(highlights.map((project) => project.title))

export const archive = newestFirst.filter(
  (project) => !highlightTitles.has(project.title),
)
