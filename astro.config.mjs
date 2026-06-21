// @ts-check
import { defineConfig } from 'astro/config';

// ORA.studio — statyczna generacja, lekkie zależności (patrz brief, pkt 8).
// Domena docelowa: orastudio.art
export default defineConfig({
  site: 'https://orastudio.art',
  // Astro domyślnie buduje statycznie (output: 'static').
  // Nie dodajemy integracji bez potrzeby — trzymamy zależności lekkie.
});
