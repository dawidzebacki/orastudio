# ORA.studio

Strona marki fotograficznej **ORA.studio** (domena `orastudio.art`) — skondensowany reportaż dokumentalny w dwóch zastosowaniach: **Wydarzenia / Biznes** oraz **Śluby**.

**Stack:** [Astro](https://astro.build) (statyczna generacja, lekkie zależności). Język treści: **polski**.

---

## Komendy

```bash
npm install      # instalacja zależności
npm run dev      # serwer deweloperski → http://localhost:4321
npm run build    # build statyczny → dist/
npm run preview  # podgląd buildu
```

---

## Struktura

```
public/
  logo/            # pliki logo (SVG) — patrz „Gdzie podmienić → Logo"
  favicon.svg      # kopia sygnetu
src/
  data/site.ts     # ⭐ dane kontaktowe, nawigacja, social — JEDNO ŹRÓDŁO PRAWDY
  styles/
    tokens.css     # ⭐ kolory + typografia (zmienne CSS) — jedyne źródło prawdy
    global.css     # reset, bazowa typografia, tekstura papieru, .btn, .container
  layouts/
    BaseLayout.astro  # <head>/SEO, fonty, Nav + Footer, skip-link
  components/      # Gallery, Hero, CTAList, Cards, Process, Faq, Form,
                   # Nav, Footer, Logo, SocialLinks
  pages/           # podstrony (.astro), slugi po polsku
    index.astro                 # strona główna (neutralna)
    wydarzenia-biznes.astro
    kontakt.astro
    polityka-prywatnosci.astro
    styleguide.astro            # poligon komponentów/tokenów (/styleguide)
```

---

## Gdzie podmienić (handoff)

### 📇 Dane kontaktowe / social → `src/data/site.ts`
Wszystkie dane marki w jednym miejscu. Zmień tutaj, a zaktualizują się w nawigacji, stopce i formularzach.
- `email`, `instagram`, `instagramUrl`, `area`, `areaShort`, `owner` (administrator danych).
- **Telefon:** świadomie nie podajemy — brak pola.
- **Dodanie Facebooka / TikToka:** w tablicy `socials` odkomentuj odpowiednią linię i wklej link — ikona jest już gotowa w `SocialLinks.astro`:
  ```ts
  // { name: 'Facebook', href: 'https://facebook.com/…', icon: 'facebook' },
  // { name: 'TikTok',   href: 'https://tiktok.com/@…',  icon: 'tiktok' },
  ```
- **Nawigacja / linki podstron:** tablica `nav`. Podstrony P2 (Śluby, O mnie, Realizacje, FAQ) mają `priority: 'P2'` — po ich zbudowaniu zmień na `'P1'`, a pojawią się w nav i stopce (do tego czasu celowo ukryte, żeby nie linkować do 404).

### ✍️ Copy / teksty → `src/pages/*.astro`
Teksty to **lorem ipsum w wiążących długościach** z mapy treści (`ORA_mapa-tresci_placeholdery.md`). Podmieniając na finalne copy, **trzymaj się długości slotów** (sekcja 1 mapy — ściąga znaków). Tytuły sekcji/kart i numery są realne; akapity i lede do wymiany.

### 🖼️ Zdjęcia → komponent `Gallery` (prop `src`) + `public/`
- Teraz galerie i kadry hero używają **tonalnych placeholderów** (brak `src`).
- Wrzuć pliki do `public/` (np. `public/zdjecia/…`) i podaj `src="/zdjecia/…"` w `Gallery` / `Hero` (`image.src`).
- **Wymagane:** sensowny `alt` (SEO/a11y), formaty **WebP/AVIF**, lazy-load jest domyślny (kadry hero: `loading="eager"`).

### 🔒 Dane RODO / polityka → `src/pages/polityka-prywatnosci.astro`
> ⚠️ **To SZKIELET, NIE porada prawna.** Finalną treść daj do weryfikacji specjaliście RODO przed publikacją.
- 8 sekcji (administrator, zakres, cel, czas, odbiorcy, prawa, cookies, kontakt) — akapity to lorem do wymiany.
- Administrator danych i e-mail ciągną się z `site.ts` (`owner`, `email`).
- Formularze: osobny, niezaznaczony checkbox zgody + link do polityki (`Form.astro`).

### 🅰️ Logo / favicon → `public/logo/`
- W nav i stopce używamy **`wordmark-ink.svg`** — pełny wordmark „ORA.studio" z falą (pełne krzywe, web-safe; litery atrament, kropka bursztyn). Renderuje go `src/components/Logo.astro`.
- Podmiana logo: zastąp `wordmark-ink.svg` (zachowaj `viewBox="0 0 1000 200"`) lub zmień `src` w `Logo.astro`.
- `favicon.svg` = sygnet — podmień plik w `public/`.
- Pozostałe warianty (`*-on-dark`, `*-transparent-*`, `sygnet-*`) są w `public/logo/` do innych zastosowań.

### 🎨 Kolory / fonty → `src/styles/tokens.css`
- Paleta **zamknięta**: krem `#F3EADB`, atrament `#1F1812`, bursztyn `#C68A4B`. Nie dodawaj nowych kolorów.
- Display: **Quincy CF** (Adobe Fonts, kit `nwy4xmp` w `BaseLayout`) — **kit musi mieć dodaną domenę** `orastudio.art` (i `localhost`) w panelu Adobe, inaczej zadziała fallback Fraunces. Body: **Outfit** (self-hosted).

---

## System marki (twarde zasady)

- **Jeden bursztyn na widok** — niesie go kropka w logo (nav na każdej stronie); treść nie dokłada drugiego.
- KAPITALIKI tylko strukturalnie (eyebrow, nawigacja, numery, podpisy) — nigdy na zdaniach.
- Numeracja: cyfry rzymskie (I / II / III).
- Zakazy: brak łuków/arkad jako kadru, brak paska kliszy jako galerii, brak drop-shadow wokół ramki passe-partout, brak ciężkich animacji.

Pełny brief i mapa treści: `ORA_prompt-bazowy.md`, `ORA_mapa-tresci_placeholdery.md`, `ORA_kolejnosc-wklejania.md` (lokalnie, gitignore).

---

## Status wdrożenia

- **P1 (gotowe):** Strona główna · Wydarzenia / Biznes · Kontakt · Polityka prywatności · nawigacja + stopka.
- **P2 (dalej):** Śluby (early bird 2026) · O mnie · Realizacje / Portfolio · FAQ pełne.
