# Jon Hargreaves — website

Static Astro site for www.jonhargreaves.net, deployed to GitHub Pages.

## Commands

Requires the Node version in `.nvmrc` (`nvm use`). Package manager is npm.

- `npm run dev` — dev server at http://localhost:4321
- `npm run build` — type check (`astro check`) then build to `dist/`
- `npm run preview` — serve the built site

## Structure

- `src/content/projects/*.md` — one file per project. The filename is the URL slug (`/projects/<slug>`); these slugs match the old Webflow site, so don't rename them without adding a redirect.
- `src/content.config.ts` — the project schema. The build fails on bad frontmatter.
- `src/data/roles.ts` — the filterable practice areas. `src/data/site.ts` — name, email, location.
- `src/assets/projects/<slug>/` — project images; Astro produces AVIF/WebP at build time. Keep sources at most 2400px on the long edge, saved as JPEG unless they need transparency.
- `src/pages/` — `index.astro`, `projects/[slug].astro`, `404.astro`.
- `src/components/` — one component per homepage section; styles are scoped inside each.
- `src/styles/tokens.css` — colour, type and spacing tokens. `base.css` — reset and shared classes (`.label`, `.display`, `.prose`).
- `public/CNAME` — the custom domain for GitHub Pages.

## Projects

- `featured: true` puts a project in the main grid, chosen by importance, not date. Everything else goes to the archive. Both are sorted newest first by `date` (`YYYY`, `YYYY-MM` or `YYYY-MM-DD`).
- `display: "expand"` shows an archive item as an expanding row instead of a link (it still gets a page).
- `roles` must come from `src/data/roles.ts`. `credit` is Jon's role in his own words.
- Body text was imported from the Webflow CMS in the first person; the homepage bio is in the third person.

## Conventions

- Plain CSS with tokens; no Tailwind. Scoped `<style>` in components, `:global()` only for child elements such as `<img>` in `<Picture>`.
- Use `<Picture>` from `astro:assets` with `formats={["avif"]}` and `fallbackFormat="webp"`, never the source format (PNG fallbacks made the output roughly 3× larger).
- Interactive behaviour is plain `<script>` on static HTML and must degrade without JavaScript (see the filter in `WorkIndex.astro`).
- Build output uses `build.format: "file"` so `/projects/<slug>` is served without a trailing-slash redirect.
