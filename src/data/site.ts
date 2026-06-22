// =========================================================================
// ORA.studio — dane marki (jedno źródło prawdy).
// Podmiana danych kontaktowych / nawigacji TYLKO tutaj. Wartości potwierdzone
// w briefie (ORA_prompt-bazowy.md). Telefonu NIE podajemy na tym etapie.
// =========================================================================

export const site = {
  brand: 'ORA.studio',
  domain: 'orastudio.art',
  url: 'https://orastudio.art',

  // Administrator danych / kontakt — osoba fizyczna (faktury przez Useme).
  owner: 'Adrianna Zębacka',
  email: 'ada@orastudio.art',
  instagram: '@ora.reportage',
  instagramUrl: 'https://instagram.com/ora.reportage',
  // phone: brak — świadomie nie podajemy (brak pola/numeru).

  area: 'Trójmiasto (Gdańsk, Gdynia, Sopot) + okolice do ~50 km',
  areaShort: 'Trójmiasto + ~50 km',
} as const;

// Profile społecznościowe — jedno źródło prawdy dla ikon w stopce (komponent
// SocialLinks). Renderujemy tylko wpisy z uzupełnionym `href`. Facebook i TikTok
// dojdą (decyzja Ady) — wystarczy odkomentować i wkleić link, ikona już jest.
export const socials: { name: string; href: string; icon: 'instagram' | 'facebook' | 'tiktok' }[] = [
  { name: 'Instagram', href: site.instagramUrl, icon: 'instagram' },
  { name: 'Facebook', href: 'https://www.facebook.com/ORA.studio.reportage', icon: 'facebook' },
  // { name: 'TikTok', href: 'https://tiktok.com/@…', icon: 'tiktok' },
];

// Nawigacja globalna (etykiety KAPITALIKI w UI — transform robi CSS).
// Kolejność wg mapy treści, sekcja 10. P2 oznaczone — odkomentowuj w miarę
// budowania podstron (Kroki 10–13), żeby nie linkować do 404.
export const nav: { label: string; href: string; priority: 'P1' | 'P2' }[] = [
  { label: 'Wydarzenia / Biznes', href: '/wydarzenia-biznes', priority: 'P1' },
  { label: 'Śluby', href: '/sluby', priority: 'P1' },        // strona żyje od Kroku 10 (P2-roadmap, ale linkujemy)
  { label: 'O mnie', href: '/o-mnie', priority: 'P1' },      // strona żyje od Kroku 11 (P2-roadmap, ale linkujemy)
  // Realizacje — UKRYTE z menu na życzenie Ady (Krok 23): strona /realizacje wciąż
  // żyje (route + [slug]), ale dopóki nie ma realnych zdjęć nie linkujemy jej w
  // nav/stopce. Odkomentuj, gdy portfolio dostanie prawdziwe kadry.
  // { label: 'Realizacje', href: '/realizacje', priority: 'P1' },
  { label: 'FAQ', href: '/faq', priority: 'P1' },                   // strona żyje od Kroku 13 (P2-roadmap, ale linkujemy)
  { label: 'Kontakt', href: '/kontakt', priority: 'P1' },
  { label: 'Polityka prywatności', href: '/polityka-prywatnosci', priority: 'P1' },
];
