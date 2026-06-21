# ORA.studio — pamięć projektu

Strona marki fotograficznej **ORA.studio** (domena `orastudio.art`). Stack: **Astro** (statyczna generacja, lekkie zależności). Język treści: **polski**.

> **Pełny, wiążący brief jest w trzech plikach w katalogu repo** (gitignore, ale są lokalnie):
> - `ORA_prompt-bazowy.md` — kontekst biznesowy, system marki, wymagania.
> - `ORA_mapa-tresci_placeholdery.md` — **mapa sekcji i wiążące długości tekstu per blok**.
> - `ORA_kolejnosc-wklejania.md` — kolejność kroków wdrożenia (P1 → P2).
>
> Gdy zadanie dotyczy treści/struktury podstrony — **przeczytaj odpowiednią sekcję mapy treści**. Nie wymyślaj sekcji ani długości.

## Tryb pracy (KRYTYCZNE — łam tylko na wyraźne polecenie)

- **Jeden wąski krok = jedno zadanie.** Realizuj WYŁĄCZNIE bieżący krok i **zatrzymaj się**, czekając na akceptację. Nie składaj kilku podstron naraz, nie wybiegaj do przodu.
- **Nie wymyślaj treści.** Tekst = lorem ipsum w długościach z mapy treści. Dane realne (kontakt, RODO) — z `src/data/site.ts`.
- **Nie dodawaj kolorów ani bibliotek** poza paletą/fontami z briefu. Trzymaj zależności lekkie.
- Jeśli brief jest niejednoznaczny — **zapytaj**, nie zgaduj.

## Architektura — DWIE ŚCIEŻKI, jedna marka

Jeden warsztat (skondensowany reportaż dokumentalny) w dwóch zastosowaniach:
- **Wydarzenia / Biznes** — eventy, konferencje, backstage, headshoty, materiały brandowe.
- **Śluby** — kameralne/cywilne, early bird 2026.

**Strona główna jest neutralna — H1 NIE zawiera słowa „ślub".** Rozdziela ruch na dwie równorzędne ścieżki. Wspólne: O mnie, Realizacje, FAQ, Kontakt, Polityka prywatności.

## Kolejność wdrożenia (status)

- **P1:** Strona główna · Wydarzenia/Biznes · Kontakt · Polityka prywatności
- **P2:** Śluby · O mnie · Realizacje · FAQ

Postęp (aktualizuj przy zamykaniu kroku):
- [x] Krok 2 — init Astro + warstwa bazowa (tokeny, fonty, reset, tekstura, `/styleguide`)
- [ ] Krok 3 — komponent Gallery (passe-partout) ← sygnaturowy
- [ ] Krok 4 — pozostałe komponenty (Hero, CTAList, Cards, Process, FAQ, Form)
- [ ] Kroki 5–9 — podstrony P1 + nawigacja/stopka/README/audyt
- [ ] Kroki 10–14 — P2 + audyt końcowy

## System marki (trzymaj dosłownie)

**Paleta (zamknięta, bez nowych kolorów):**
- Krem `#F3EADB` (tło) · Atrament `#1F1812` (tekst) · Bursztyn `#C68A4B` (akcent)
- **Jeden bursztyn na widok** — kropka / hairline / numer, nie rozsiewany.

**Typografia:**
- Display didone: **Quincy CF** (Adobe Fonts, kit `nwy4xmp` w `BaseLayout`). Fallback: Fraunces Variable (self-hosted). ✅ pełen zakres wag + italic.
- Body grotesk: **Outfit Variable** (self-hosted, fontsource — decyzja klientki zamiast Neue Haas).
- ⚠️ Adobe kit jest **ograniczony do domen** (ustawienia kitu) — dodaj `orastudio.art` + `localhost`, inaczej Quincy nie renderuje (zadziała fallback Fraunces). Na adresie LAN (IP) Quincy może nie wejść.
- **KAPITALIKI tylko strukturalnie** (eyebrow, nawigacja, numery, podpisy) — NIGDY na zdaniach/akapitach.
- Hero fragmentowany: małe słowo *italic* nad dużym serif.
- Numeracja: cyfry rzymskie (I / II / III), nie „NO. 1".

**Twarde zakazy:**
- ŻADNYCH łuków/arkad jako kształtu kadru.
- ŻADNEGO paska kliszy / taśmy filmowej jako galerii.
- ŻADNEGO drop-shadow wokół całej ramki passe-partout (tylko bevel + cień wewnętrzny).
- ŻADNEGO ciężkiego WebGL / nachalnych animacji — ruch wolny i miękki.
- Brak kapitalików na akapitach. Max jeden bursztyn na widok.
- Nie ma wyglądać jak szablon Squarespace/Showit — uszyte na miarę.

## Komponenty (zbuduj raz, używaj wszędzie)

`src/components/`: **Gallery** (passe-partout, sygnaturowy) · **Hero** · **CTAList** · **Cards** · **Process** · **Faq** · **Form** · **LookSwitcher** (opcjonalny, Śluby). Jeden plik na typ, reużywalne, na tokenach.

## Konwencje kodu / struktura

- `src/styles/tokens.css` — **jedyne źródło prawdy** dla kolorów i typografii (zmienne CSS).
- `src/styles/global.css` — reset, bazowa typografia, tekstura papieru (`.page::before`).
- `src/data/site.ts` — **jedyne źródło prawdy** dla danych kontaktowych i nawigacji.
- `src/layouts/BaseLayout.astro` — `<head>`/SEO, import fontów+stylów, slot. (Nav/Footer dołączamy w Kroku 9.)
- Podstrony: `src/pages/*.astro`, slugi po polsku (`/wydarzenia-biznes`, `/polityka-prywatnosci`).
- Style komponentów: scoped `<style>` w pliku `.astro`, na tokenach (bez hardkodu hexów).
- `/styleguide` — poligon komponentów/tokenów; pokazuj tam każdy nowy komponent.

## SEO + dostępność (wymóg per podstrona)

- Poprawny `<title>`, meta description, **jeden** sensowny H1, logiczna hierarchia nagłówków, `alt` na zdjęciach.
- Lokalne frazy (Gdańsk/Gdynia/Sopot, dojazd) naturalnie w FAQ i „obszar działania" — nie upchana lista.
- Semantyczny HTML, mobile-first, focus states, kontrast, `aria` gdzie trzeba.
- Obrazy WebP/AVIF + lazy-load. Formularze: osobny, niezaznaczony checkbox RODO + link do polityki.

## Logo / assety marki (`public/logo/`)

Oficjalne pliki od klientki. Wordmark = `viewBox 0 0 1000 200`, sygnet = `0 0 300 300`.

| Plik | Co to | Tło | Bezpieczny na web? |
|---|---|---|---|
| `wordmark-transparent-ink.svg` | wordmark, atrament | transparent | ⚠️ tekst w **QuincyCF** (font płatny — fallback u gościa) |
| `wordmark-transparent-cream.svg` | wordmark, krem | transparent | ✅ krzywe (outlines) |
| `wordmark-on-light.svg` | wordmark na bloku kremowym | krem `#f8f4ec` | ⚠️ tekst QuincyCF |
| `wordmark-on-dark.svg` | wordmark na bloku ciemnym | atrament | ⚠️ tekst QuincyCF + bursztyn `#eaa05c` (odstaje!) |
| `sygnet-ink.svg` | sam znak, atrament | transparent | ✅ krzywe |
| `sygnet-on-light.svg` | znak na kremie | krem `#f8f4ec` | ✅ krzywe |
| `sygnet-on-dark.svg` | znak na ciemnym | atrament | ✅ krzywe |

`public/favicon.svg` = kopia `sygnet-on-dark.svg`.

**Decyzje (potwierdzone):**
- **Krem = `#F3EADB`** (token z briefu — zostaje, cieplejszy/filmowy). Logo wstawiamy w wersjach **transparentnych** (`*-transparent-*`, `sygnet-ink`), żeby kremowy blok logo (`#f8f4ec`) nie zgrzytał z tłem strony. Nie używamy wersji z wbudowanym tłem na stronie kremowej.
- **Wordmark:** Quincy CF jest już dostępny (Adobe kit). W nagłówku/stopce (Krok 9) wordmark złożymy jako **tekst HTML „ORA.studio" w `quincy-cf`** + `sygnet-ink.svg` obok — NIE używamy wordmarków-SVG z `<text>` (ich `font-family: QuincyCF` ≠ adobowa `quincy-cf`, więc i tak by się nie złapały). SVG sygnetu zostaje jako znak graficzny.
- `wordmark-on-dark.svg` ma odstający bursztyn `#eaa05c` — do ewentualnej korekty przy podmianie, nieużywany teraz.

## Dane projektu (potwierdzone)

Adrianna Zębacka (osoba fizyczna, faktury przez Useme) · `ada@orastudio.art` · IG `@ora.reportage` · Trójmiasto + ~50 km · **telefonu NIE podajemy**.

## Komendy

```bash
npm run dev      # dev server → http://localhost:4321
npm run build    # build statyczny → dist/
npm run preview  # podgląd buildu
```

## Pomocnicze (te narzędzia)

- `/status` — gdzie jesteśmy w kolejności wdrożenia, co następne.
- `/audyt <marka|seo|a11y|all>` — audyt zgodności (system marki / SEO / dostępność).
- Agent `brand-guardian` — review zmian pod kątem systemu marki i twardych zakazów.
