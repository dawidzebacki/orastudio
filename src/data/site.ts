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

// Nawigacja globalna (etykiety KAPITALIKI w UI — transform robi CSS).
// Kolejność wg mapy treści, sekcja 10. P2 oznaczone — odkomentowuj w miarę
// budowania podstron (Kroki 10–13), żeby nie linkować do 404.
export const nav: { label: string; href: string; priority: 'P1' | 'P2' }[] = [
  { label: 'Wydarzenia / Biznes', href: '/wydarzenia-biznes', priority: 'P1' },
  { label: 'Śluby', href: '/sluby', priority: 'P2' },
  { label: 'O mnie', href: '/o-mnie', priority: 'P2' },
  { label: 'Realizacje', href: '/realizacje', priority: 'P2' },
  { label: 'FAQ', href: '/faq', priority: 'P2' },
  { label: 'Kontakt', href: '/kontakt', priority: 'P1' },
  { label: 'Polityka prywatności', href: '/polityka-prywatnosci', priority: 'P1' },
];
