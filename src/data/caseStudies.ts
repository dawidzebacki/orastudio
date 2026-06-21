// =========================================================================
// ORA.studio — dane case studies (Krok 15). Jedno źródło prawdy dla portfolio:
// używane przez /realizacje (siatka + linki) ORAZ /realizacje/[slug] (podstrony).
//
// Podpisy/miejsca/pary = realne placeholdery (spójne z galeriami ofertowymi).
// Tytuł [20–40] = krótki, realny (SEO/struktura). Opis [200–300] = lorem (mapa 6.3).
// Zdjęcia: TYMCZASOWO placehold.co (brand-tint, webp) — ZEWNĘTRZNE żądanie, do
// podmiany na realne WebP/AVIF gdy wejdą (patrz CLAUDE.md, audyt Krok 14 #4).
// =========================================================================

export type CaseStudy = {
  /** Slug podstrony: /realizacje/<slug>. */
  slug: string;
  /** Cyfra rzymska kadru w siatce. */
  numeral: string;
  /** Ścieżka marki — steruje filtrem na /realizacje + etykietą. */
  kind: 'biznes' | 'sluby';
  /** Podpis kadru: miejsce (biznes) lub para (śluby). */
  place: string;
  /** Tytuł case study [20–40]. */
  title: string;
  /** Proporcje kadru w siatce. */
  ratio: '3 / 2' | '4 / 5' | '1 / 1';
  /** Wariant tonalny (spójność z resztą galerii). */
  tone: 1 | 2 | 3;
  /** Opis realizacji [200–300] — lorem do podmiany. */
  desc: string;
};

const LOREM_A =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
const LOREM_B =
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim.';

export const caseStudies: CaseStudy[] = [
  { slug: 'konferencja-gdansk',       numeral: 'I',    kind: 'biznes', place: 'Gdańsk',              title: 'Konferencja technologiczna',  ratio: '3 / 2', tone: 1, desc: LOREM_A },
  { slug: 'sesja-wizerunkowa-gdynia', numeral: 'II',   kind: 'biznes', place: 'Gdynia',              title: 'Sesja wizerunkowa zespołu',   ratio: '4 / 5', tone: 2, desc: LOREM_B },
  { slug: 'event-firmowy-sopot',      numeral: 'III',  kind: 'biznes', place: 'Sopot',               title: 'Event firmowy nad morzem',    ratio: '1 / 1', tone: 3, desc: LOREM_A },
  { slug: 'backstage-gdansk',         numeral: 'IV',   kind: 'biznes', place: 'Gdańsk',              title: 'Backstage produkcji',         ratio: '4 / 5', tone: 1, desc: LOREM_B },
  { slug: 'slub-aleksandra-marek',    numeral: 'V',    kind: 'sluby',  place: 'Aleksandra & Marek',  title: 'Ślub cywilny w plenerze',     ratio: '4 / 5', tone: 2, desc: LOREM_A },
  { slug: 'slub-zofia-jan',           numeral: 'VI',   kind: 'sluby',  place: 'Zofia & Jan',         title: 'Kameralna uroczystość',       ratio: '1 / 1', tone: 1, desc: LOREM_B },
  { slug: 'slub-hanna-piotr',         numeral: 'VII',  kind: 'sluby',  place: 'Hanna & Piotr',       title: 'Reportaż ślubny w Sopocie',   ratio: '3 / 2', tone: 3, desc: LOREM_A },
  { slug: 'slub-maria-tomasz',        numeral: 'VIII', kind: 'sluby',  place: 'Maria & Tomasz',      title: 'Ślub na starym mieście',      ratio: '4 / 5', tone: 2, desc: LOREM_B },
];

export const kindLabel = (kind: CaseStudy['kind']): string =>
  kind === 'sluby' ? 'Śluby' : 'Wydarzenia / Biznes';

// Placeholder obrazów — wspólny helper (re-eksport). Używany też przez galerie
// ofertowe (home / wydarzenia / śluby). Źródło: src/utils/placeholder.ts.
export { placeholderImg } from '../utils/placeholder';
