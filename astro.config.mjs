import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
export default defineConfig({ site: "https://jessecanderson.dev", output: "static", publicDir: "./static", trailingSlash: "always", integrations: [mdx(), sitemap()] });
