import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: "https://marche-build.vercel.app/",
  integrations: [tailwind(), mdx(), sitemap()],
  output: 'server',
  adapter: vercel(),
});
