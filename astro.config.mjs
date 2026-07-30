import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

const site = process.env.SITE_URL || "https://benny108.github.io";

export default defineConfig({
  site,
  output: "static",
  outDir: "./dist/client",
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.endsWith("/404/")
    })
  ],
  markdown: {
    shikiConfig: {
      theme: "github-dark"
    }
  },
  vite: {
    build: {
      sourcemap: false
    }
  }
});
