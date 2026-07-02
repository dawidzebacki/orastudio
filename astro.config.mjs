// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ORA.studio — statyczna generacja, lekkie zależności (patrz brief, pkt 8).
// Domena docelowa: orastudio.art
export default defineConfig({
  site: 'https://orastudio.art',
  // @astrojs/sitemap = jedyna integracja (build-time, generuje statyczny sitemap-index.xml).
  // Wykluczamy: poligon /styleguide, stronę podziękowania /dziekujemy (noindex) oraz
  // /realizacje + /realizacje/[slug] — zaparkowane (Krok 23: ukryte z menu, treść = lorem
  // + zaślepki par + placehold.co; nie wpychamy ich do indeksu do czasu realnych zdjęć).
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/styleguide') &&
        !page.includes('/dziekujemy') &&
        !page.includes('/404') &&
        !page.includes('/realizacje'),
    }),
  ],
});
