import { useMemo, useState } from "react"
import { archive, highlights, roles } from "./data/projects"

export default function App() {
  const [activeRole, setActiveRole] = useState<typeof roles[number]>("All")
  const [query, setQuery] = useState("")
  const [archiveOpen, setArchiveOpen] = useState(false)

  const visibleProjects = useMemo(() => {
    const term = query.trim().toLowerCase()
    return highlights.filter((project) => {
      const matchesRole =
        activeRole === "All" || project.roles.includes(activeRole)
      const matchesQuery =
        !term ||
        `${project.title} ${project.description} ${project.credit} ${project.roles.join(" ")}`
          .toLowerCase()
          .includes(term)
      return matchesRole && matchesQuery
    })
  }, [activeRole, query])
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Jon Hargreaves, home">
          JH<span>/</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">Profile</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="availability" href="mailto:hello@jonhargreaves.net">
          Enquiries
        </a>
      </header>
      <section className="hero" id="top">
        <div className="hero-kicker">
          <span>Est. 1978</span>
        </div>
        <div className="hero-title">
          <h1>
            Jon
            <br />
            Hargreaves
          </h1>
          <p>
            Conductor <span>·</span> Arranger <span>·</span> Composer
            <span>·</span> Researcher
          </p>
        </div>
        <div className="hero-image-wrap">
          <img
            src="/images/jon-headshot.jpg"
            alt="Jon Hargreaves in semi-profile"
          />
          <div className="image-scan" aria-hidden="true" />
          <p>Portrait by Martin Stewart</p>
        </div>
      </section>
      <section className="work-section" id="work">
        <div className="section-heading">
          <div>
            <span className="eyebrow">(01) Selected work</span>
            <h2>Recent projects</h2>
          </div>
          <p>
            Filter the work by role, or search by collaborator, keyword or idea.
          </p>
        </div>

        <div className="filter-bar">
          <div className="role-filters" aria-label="Filter projects by role">
            {roles.map((role) => (
              <button
                className={activeRole === role ? "active" : ""}
                key={role}
                onClick={() => setActiveRole(role)}
                type="button"
              >
                {role}
              </button>
            ))}
          </div>
          <label className="search">
            <span className="sr-only">Search projects</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search work"
              type="search"
            />
            <span aria-hidden="true">↗</span>
          </label>
        </div>

        <div className="results-line">
          <span>
            Showing {String(visibleProjects.length).padStart(2, "0")} /{" "}
            {String(highlights.length).padStart(2, "0")}
          </span>
          <span>{activeRole === "All" ? "All practices" : activeRole}</span>
        </div>

        <div className="project-grid">
          {visibleProjects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-image">
                <img src={project.image} alt={project.alt} />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="project-meta">
                <span>{project.displayDate}</span>
                <span>{project.credit}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-roles">
                {project.roles.map((role) => (
                  <button
                    key={role}
                    type="button"
                    onClick={() => setActiveRole(role)}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </article>
          ))}
        </div>

        {visibleProjects.length === 0 && (
          <div className="empty-state">
            <p>No works found.</p>
            <button
              type="button"
              onClick={() => {
                setQuery("")
                setActiveRole("All")
              }}
            >
              Clear search
            </button>
          </div>
        )}

        <div className="archive">
          <button
            className="archive-toggle"
            type="button"
            aria-expanded={archiveOpen}
            onClick={() => setArchiveOpen((open) => !open)}
          >
            <span>
              {archiveOpen ? "Close the archive" : "View the archive"}
            </span>
            <span>{archiveOpen ? "−" : "+"}</span>
          </button>
          {archiveOpen && (
            <div className="archive-list">
              {archive.map((project, index) => (
                <div className="archive-row" key={project.title}>
                  <span>
                    {String(index + highlights.length + 1).padStart(2, "0")}
                  </span>
                  <strong>{project.title}</strong>
                  <span>{project.roles.join(" · ")}</span>
                  <span>{project.displayDate}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="profile" id="about">
        <div className="profile-title">
          <span className="eyebrow">(02) Profile</span>
          <h2>
            Serious about music.
            <br />
            <em>Relentless</em> in the pursuit of meaning.
          </h2>
        </div>
        <div className="profile-copy">
          <p className="lead">
            Jon works across genres as a conductor, composer and arranger from
            his base in Scotland.
          </p>
          <div className="columns">
            <p>
              Jon works across musical genres as a composer, arranger and
              conductor, from his base in Scotland. His professional portfolio
              over the last 10 years encompasses artistic directorships;
              conducting new music, as well as standard orchestral repertoire
              and opera; composing/arranging for orchestras, singer-songwriters
              and other artists; and executive production for recording
              projects.
            </p>
            <p>
              He co-founded the Octandre Ensemble with the composer Christian
              Mason in 2011. He has conducted and led the Ensemble in festival
              appearances in London and at the Huddersfield Contemporary Music
              Festival, leading to appearances on BBC Radio 3, and CD releases
              on Another Timbre and SN Variations. He was founding Co-Artistic
              Director of Glasgow's Nevis Ensemble until 2022, conducting over
              200 performances in settings ranging from schools and prisons to
              museums, art galleries and concert halls, as well as on top of Ben
              Nevis and on the remote isles of St Kilda. Since 2023, he conducts
              the Film Composers Lab at the Royal Scottish National Orchestra
              (RSNO).
            </p>
            <p>
              Jon has a long-term and deep-rooted interest in musical value and
              meaning. He has published music analytic work, as well as
              collaborations in the social psychology of music, music education
              and embodied music cognition. Jon teaches at the Royal
              Conservatoire of Scotland.
            </p>
          </div>
          <blockquote>
            “A gripping flow that was sometimes thunderously aggressive,
            sometimes beguiling and often disturbing.”
            <cite>Richard Morrison, The Times</cite>
          </blockquote>
        </div>
      </section>

      <footer id="contact">
        <div className="footer-call">
          <span className="eyebrow">(03) Make contact</span>
          <h2>Have a project?</h2>
          <a href="mailto:jonhargreaves@me.com">
            write to me <span>↗</span>
          </a>
        </div>
        <div className="footer-bottom">
          <span>Jon Hargreaves / Music</span>
          <span>Culross, Scotland</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  )
}
