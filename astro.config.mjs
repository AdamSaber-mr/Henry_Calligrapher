// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://henrycalligraphy.lovable.app',

  vite: {
    plugins: [tailwindcss()]
  },

  // The redesign at /v2 is noindex, so keep it out of the sitemap too.
  integrations: [sitemap({ filter: (page) => !page.includes('/v2') })]
});