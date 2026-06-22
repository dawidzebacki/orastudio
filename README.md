# ORA.studio

Strona marki fotograficznej **ORA.studio** (domena [`orastudio.art`](https://orastudio.art)) — skondensowany reportaż dokumentalny w dwóch ścieżkach: **Wydarzenia / Biznes** oraz **Śluby**. Statyczna witryna wizytówka: oferta, portfolio, kontakt z formularzami.

## Technologie

- **[Astro](https://astro.build)** — statyczna generacja, minimum JavaScriptu
- **Vanilla CSS** — design tokens + style scoped w komponentach (bez frameworka UI)
- **Netlify** — hosting, [Netlify Forms](https://docs.netlify.com/forms/setup/), DNS
- **Google Tag Manager + Consent Mode v2** — baner zgody na cookies, sygnały consent po stronie strony
- **Fonty:** Quincy CF (Adobe Fonts) + Outfit (self-hosted)
- Jasny/ciemny motyw, sitemap, SEO + JSON-LD

## Uruchomienie

```bash
npm install      # zależności
npm run dev      # serwer dev → http://localhost:4321
npm run build    # build statyczny → dist/
npm run preview  # podgląd buildu
```

> Formularze (Netlify Forms) i GTM działają wyłącznie na produkcji — nie na localhost.

## Źródła prawdy

- `src/data/site.ts` — dane kontaktowe, nawigacja, social
- `src/styles/tokens.css` — kolory i typografia (zmienne CSS)
- `/styleguide` — poligon komponentów i tokenów

## Linki

- **Produkcja:** https://orastudio.art
- **Dev / preview:** https://orastudiodev.netlify.app
- **Pełna dokumentacja projektu** (architektura, system marki, twarde zasady, historia kroków): [`CLAUDE.md`](./CLAUDE.md)
