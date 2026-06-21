// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ORA.studio — statyczna generacja, lekkie zależności (patrz brief, pkt 8).
// Domena docelowa: orastudio.art
export default defineConfig({
  site: 'https://orastudio.art',
  // @astrojs/sitemap = jedyna integracja (build-time, generuje statyczny sitemap-index.xml).
  // Wykluczamy poligon /styleguide i stronę podziękowania /dziekujemy (noindex).
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/styleguide') && !page.includes('/dziekujemy'),
    }),
  ],
});
