---
description: Audyt zgodności ORA — system marki / SEO / dostępność (argument: marka|seo|a11y|all)
argument-hint: marka | seo | a11y | all
---

Przeprowadź audyt projektu ORA.studio. Zakres: **$ARGUMENTS** (jeśli pusto — potraktuj jak `all`).

Najpierw przeczytaj `CLAUDE.md` i odpowiednie sekcje `ORA_mapa-tresci_placeholdery.md`. Audytuj kod w `src/` (Glob/Grep — nie zgaduj). **Tylko raport — nic nie zmieniaj bez osobnej zgody.** Wypisz wynik per podstrona w punktach: ✅ OK / ⚠️ do poprawy / ❌ błąd, z `plik:linia`.

### marka (system marki + twarde zakazy)
- Kolory tylko z palety (`#F3EADB`/`#1F1812`/`#C68A4B`), bez hardkodu poza `tokens.css` — **max jeden bursztyn na widok**.
- KAPITALIKI wyłącznie strukturalnie (eyebrow/nav/numery/podpisy), nigdy na akapitach.
- Nagłówki display = Fraunces (didone), body = Inter. Numeracja rzymska.
- ZAKAZY: brak łuków/arkad w kadrach, brak paska kliszy, brak drop-shadow wokół ramki passe-partout, brak ciężkich animacji/WebGL.
- Nie wygląda jak gotowy szablon.

### seo (per podstrona)
- Dokładnie jeden `<h1>`; logiczna hierarchia H1→H2→H3.
- `<title>` + meta description ustawione i sensowne; `alt` na każdym obrazie.
- **Strona główna: H1 BEZ słowa „ślub".**
- Lokalne frazy (Gdańsk/Gdynia/Sopot, dojazd) naturalnie, nie jako upchana lista.
- Czysty, semantyczny HTML.

### a11y (dostępność + wydajność)
- Kontrast, widoczne focus states, semantyka, `aria` gdzie trzeba (accordion/menu).
- Mobile-first, responsywność.
- Formularze: osobny, **niezaznaczony** checkbox RODO + link do polityki, powiązane `label`/`for`.
- Obrazy WebP/AVIF + lazy-load; brak zbędnych zależności.

Na końcu: krótkie podsumowanie i lista najpilniejszych poprawek (priorytetyzowana).
