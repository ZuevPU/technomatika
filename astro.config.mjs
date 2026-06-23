import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: process.env.ASTRO_SITE ?? 'https://mashukOnline.gitverse.site',
  base: process.env.ASTRO_BASE ?? '/technomatics',
  integrations: [tailwind()],
  output: 'static',
});
