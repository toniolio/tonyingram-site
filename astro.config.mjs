import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import { siteConfig } from "./site.config.mjs";

export default defineConfig({
  site: siteConfig.site.url,
  output: "static",
  integrations: [mdx()],
});
