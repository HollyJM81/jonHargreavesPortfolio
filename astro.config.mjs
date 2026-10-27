// @ts-check
import { defineConfig, fontProviders } from "astro/config"
import sitemap from "@astrojs/sitemap"

export default defineConfig({
  site: "https://www.jonhargreaves.net",
  // Emit /projects/<slug>.html so GitHub Pages serves the old Webflow URLs
  // (/projects/<slug>, no trailing slash) without a redirect.
  build: { format: "file" },
  trailingSlash: "never",
  integrations: [sitemap()],
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Newsreader",
      cssVariable: "--font-serif",
      weights: ["400", "500"],
      styles: ["normal", "italic"],
      subsets: ["latin"],
      fallbacks: ["Georgia", "serif"],
    },
    {
      provider: fontProviders.google(),
      name: "Source Sans 3",
      cssVariable: "--font-sans",
      weights: ["400", "500", "600"],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["sans-serif"],
    },
  ],
})
