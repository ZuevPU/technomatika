import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://zuevpu.github.io',
  base: '/technomatika',
  integrations: [tailwind()],
  output: 'static',
});
