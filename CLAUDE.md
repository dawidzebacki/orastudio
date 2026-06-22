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
- [x] Krok 3 — komponent Gallery (passe-partout) ← sygnaturowy
- [x] Krok 4 — pozostałe komponenty (Hero, CTAList, Cards, Process, FAQ, Form)
- [x] Krok 5 — strona główna `/` (zaakceptowana)
- [x] Krok 6 — Wydarzenia/Biznes `/wydarzenia-biznes` (zaakceptowana)
- [x] Krok 7 — Kontakt `/kontakt` (zaakceptowana)
- [x] Krok 8 — Polityka prywatności `/polityka-prywatnosci` (zaakceptowana)
- [x] Krok 9 — Nav + Footer (Logo z falą, SocialLinks, sticky nav) + README + audyt P1 → **P1 ZAMKNIĘTE**
- [x] Rekolor 60/30/10 (moodboard Ady v1) — rozniesiony po P1, **zaakceptowany** (deseń: zygzak tone-on-tone)
- [x] Krok 10 — Śluby `/sluby` (early bird 2026) + komponent `LookSwitcher` (CSS-only, Ciepły/Chłodny/Cz-b) + odsłonięcie Śluby w nav/stopce (`site.ts` priority P1) + LookSwitcher na `/styleguide`. Pas Early bird = `band-sand` (gładki kolor; zygzak się zlewał — deseń do przemyślenia później). **Zaakceptowana.**
- [x] Krok 11 — O mnie `/o-mnie` (Hero+portret · Historia 2 akapity · Filozofia na `band-pattern` · Podejście/sprzęt Cards · CTA „Porozmawiajmy") + odsłonięcie w nav/stopce (`site.ts` priority P1). Fraza hero = lorem (mapa nie podała realnej). **Zaakceptowana.**
- [x] Krok 12 — Realizacje `/realizacje` (Intro Hero · Galeria filtrowana Wszystko/Biznes/Śluby = CSS-only radio+`~`, 8 kadrów I–VIII · Case study „na przyszłość" na `band-sand` · CTA „Porozmawiajmy") + odsłonięcie w nav/stopce (`site.ts` priority P1). Filtr ma 3 segmenty (dodano „Wszystko" jako domyślny). **Zaakceptowana.**
- [x] Krok 13 — FAQ `/faq` (Intro Hero lorem · 10 REALNYCH pytań pokrywających 10 tematów z mapy, odpowiedzi lorem · realny akapit „obszar działania" z Gdańsk/Gdynia/Sopot + ~50 km = lokalne SEO) + odsłonięcie w nav/stopce (`site.ts` priority P1). FAQPage JSON-LD świadomie pominięty (lorem-odpowiedzi). **Zaakceptowana.** → **WSZYSTKIE PODSTRONY P1+P2 GOTOWE**
- [x] Krok 14 — audyt końcowy całości (`/audyt all`). Wynik: system marki/a11y mocne, zakazy nienaruszone. Poprawione: (1) **podwójny brand w `<title>`** na `/o-mnie`, `/realizacje`, `/faq` (prop `title` zawierał „ORA.studio", a `BaseLayout` dokleja brand → usunięto z propa); (2) **kontrast** — tekst `--c-ink-45` → `--c-ink-70` w `Footer.footer__muted`, `Form.form__req`, `CTAList.ctalist__note` (AA); (3) **komentarze** — `BaseLayout` (nota RODO o Typekit + usunięto stałe „Neue Haas"), `tokens.css` (60/30/10 = ZAAKCEPTOWANE, zdjęto „jeden bursztyn"). Otwarte (do decyzji, nie błędy): Typekit = zewn. żądanie do uwzględnienia w polityce RODO; zdjęcia realne → WebP/AVIF+lazy gdy wejdą.
- [x] Krok 15 — **Klikalne portfolio** (decyzja Ady). Komponent `Lightbox.astro` (globalny natywny `<dialog>`, ::backdrop, prev/next + klawiatura ←/→, Esc, scroll-lock `html.lb-open`, ikony SVG; wejście = opacity na dialogu + scale na figurze, by `position:fixed` przyciski nie skakały). `Gallery` rozszerzony wstecznie zgodnie: `href` (klik w podpis → case study) + `zoom` (klik w kadr → lightbox, domyślnie gdy jest `src`). Dane: `src/data/caseStudies.ts` (8 realizacji, tytuł realny + opis lorem) + `src/utils/placeholder.ts` (`placeholderImg` — `placehold.co` brand-tint webp, TYMCZASOWE/zewn. żądanie, podmiana w 1 miejscu na WebP/AVIF). Route `src/pages/realizacje/[slug].astro` (getStaticPaths). Zoom na WSZYSTKICH galeriach; **linki case study tylko w `/realizacje`** (kadr=realizacja 1:1) + CTA „Zobacz realizacje" pod galeriami home/wydarzenia/śluby. Brand-guardian review: zero naruszeń. **Zaakceptowana.**
- [x] Krok 16 — **Chrome responsywny**: burger na mobile (`Nav.astro`, < 56rem, dostępny przełącznik `aria-expanded`/`aria-controls` + rozwijany panel, burger→✕, Esc/klik-w-link zamyka, minimalny JS; kreski 2px/całopikselowe) + footer na małych ekranach (`Footer.astro`, od 30rem dwie kolumny zamiast jednej do lewej). **Zaakceptowana.**
- [x] Krok 17 — **Dark theme „ciemnia" (warm darkroom)** — decyzja Ady. Toggle ☾/☀ w nav (jasny domyślny, zapis w `localStorage`, respektuje `prefers-color-scheme`, skrypt no-flash `is:inline` w `BaseLayout` ustawia `data-theme` przed paintem; `theme-color` aktualizowany dynamicznie). **Strategia: podmiana WYŁĄCZNIE prymitywów w `:root[data-theme='dark']`** (cream/ink/mat/sand/coffee/amber/terracotta); role + tokeny pochodne (`--c-ink-70/45/15`, `--c-surface`…) przeliczają się same (`:root` i `[data-theme]` = ten sam element `html`) → komponentów nie ruszano. Nowe role odpięte od motywu: `--c-on-accent` (zawsze jasny tekst na nasyconym wypełnieniu), `--c-shadow` (cień bevelu — ciemny w obu), `--c-bevel-hi` (światło bevelu — biel/ciepła przygaszona), `--grain-blend`/`--grain-opacity` (ziarno multiply→screen). Punktowe: `Lightbox` uniezależniony od motywu; `Logo` ma wariant kremowy w dark (`wordmark-transparent-cream.svg`, kropka bursztyn); `Form` dark-override chevronu selecta/`accent-color`/ikony kalendarza (literały natywne nie odwracają się przez tokeny); `.btn:hover` przyciemnia przez `--c-shadow` (nie `--c-ink`, bo w dark jest jasny). Brand-guardian: zero naruszeń twardych zakazów. **Otwarte (do decyzji, nie błąd):** terakota-CTA w dark ~4.3:1 — na równi z zaakceptowanym jasnym motywem, pod sztywne AA 4.5 (zaostrzenie = ciemniejsze przyciski/większa etykieta = decyzja brandowa). **Zaakceptowana.**

- [x] Krok 18 — **Formularze (Netlify Forms)** + strona `/dziekujemy`. `Form.astro` opt-in: prop **`name`** → dokłada `data-netlify="true"`, honeypot `bot-field` (`data-netlify-honeypot`), ukryte `<input name="form-name">`, domyślny `action="/dziekujemy/"`. **Bez `name` = zwykły formularz** (demo `/styleguide` świadomie bez wysyłki, by nie śmiecić panelu Netlify). Nazwy formularzy: `kontakt`, `brief-wydarzenia`, `rezerwacja-slub`. Nowa strona `/dziekujemy` (potwierdzenie w stylu marki, kropka bursztyn). **Hosting: Netlify** (repo `dawidzebacki/orastudio` podpięte = auto-deploy z `main`; domena `orastudio.art` przez Netlify DNS — nameservery `nsone.net`). ⚠️ **Po stronie Netlify UI (akcja właściciela):** formularze pojawią się w zakładce Forms po deployu; ustawić **powiadomienia e-mail na `ada@orastudio.art`** (Forms → notifications). Formularze działają tylko na produkcji (nie na localhost). **DO WERYFIKACJI na żywo.**

- [x] Krok 19 — **SEO techniczne** + dwie poprawki. SEO: `@astrojs/sitemap` (jedyna integracja w `astro.config.mjs`; `filter` wyklucza `/styleguide` i `/dziekujemy`) → `sitemap-index.xml`; `public/robots.txt` (wskazuje sitemap, `Disallow /styleguide`); **OG image** `public/og/og-default.png` (1200×630, wygenerowany przez `sharp` z krzywych `wordmark-ink.svg` — brandowy placeholder, docelowo podmienić na zdjęcie); `BaseLayout` props **`image`** (og:image, domyślnie OG default) + **`noindex`** + meta `og:image`/`twitter:card summary_large_image`/`og:locale`; **JSON-LD** `ProfessionalService` na `/` (dane z `site.ts`, `areaServed` Trójmiasto, `sameAs` IG+FB); `noindex` na `/dziekujemy`. **Poprawki przy okazji:** (1) **walidacja formularzy** — usunięto `novalidate` z `Form.astro` → natywny HTML5 (required na polach z `*` + wymagana zgoda RODO), bez JS; `:user-invalid` = terakotowy sygnał błędu po interakcji; (2) **accordion** `Faq.astro` — znacznik `+/−` przebudowany na DWIE OSIOWE kreski 2px (było: pionowa przez `rotate(90deg)` + grubość 1.5px → antyalias robił poziomą cieńszą); rotacja została tylko jako miękkie przejście. **DO WERYFIKACJI na żywo** (OG przez opengraph.xyz/FB debugger po deployu).

- [x] Krok 20 — **Realne treści** (plik `ORA_tresci_dla_claude-code.md` od Ady) zamiast lorem na 5 podstronach: `/`, `/wydarzenia-biznes`, `/sluby`, `/o-mnie`, `/faq`. Łączniki `-` → pauzy `—`; podpisy kadrów wpadają też do `alt`/placeholdera. **Zmiany strukturalne:** (1) `/sluby` — **usunięto sekcję „Opinie/quotes"** (+ jej CSS): fotograf na starcie (nabór par założycielskich) nie ma jeszcze opinii, plik treści jej nie zawiera → zmyślone cytaty zdjęte zamiast zostawiać fałszywe rekomendacje; (2) `/o-mnie` — Historia rozszerzona **z 2 do 4 akapitów**; (3) `/faq` — odpowiedzi realne → dołożono **`FAQPage` JSON-LD** (pominięty w Kroku 13 z powodu lorem). Form auto-dokleja link „Polityka prywatności", więc `rodoText` na `/wydarzenia-biznes` skrócony do „…Szczegóły:" (bez powtórki). **Plik treści NIE zawiera** `/kontakt`, `/polityka-prywatnosci`, `/realizacje` → bez zmian. **Otwarte (do decyzji, nie błąd):** galeria `/sluby` wciąż ma placeholderowe nazwy par (Aleksandra & Marek…) z `caseStudies.ts` — do podmiany gdy wejdą realne zdjęcia/realizacje. **DO AKCEPTACJI.**

- [x] Krok 21 — **Google Tag Manager** (`GTM-544LTPHD`) w `BaseLayout.astro` (globalnie): skrypt `is:inline` wysoko w `<head>` + `<noscript>`-iframe tuż za `<body>`. **+ Finalna polityka prywatności od Ady** (PDF, 21.06.2026) zamiast szkieletu-lorem: 13 sekcji (`/polityka-prywatnosci`), numerowane H2 (treść odwołuje się do „sekcji 6"/„sekcja 7"), listy + style list, dane z `site.ts`. ⚠️ **LUKA DO ZAMKNIĘCIA przed publikacją:** polityka (sekcja 6) deklaruje **baner cookies + Google Consent Mode v2** („narzędzia uruchamiają się dopiero po zgodzie"), ale **to NIE jest zaimplementowane** — GTM ładuje się obecnie bezwarunkowo. Reality ≠ policy = ryzyko RODO/ePrivacy. ~~Do zrobienia: baner zgody + Consent Mode v2~~ → **ZROBIONE w Kroku 22.** Polityka wymienia też GA4/Google Ads/Clarity/Meta Pixel/LinkedIn/Pinterest (konfiguracja po stronie kontenera GTM — akcja Ady) oraz hosting Netlify + poczta Titan.

- [x] Krok 22 — **Baner zgody na cookies + Google Consent Mode v2** (domyka lukę z Kroku 21; reality = policy). (1) **Consent Mode default `denied`** dla `ad_storage`/`ad_user_data`/`ad_personalization`/`analytics_storage` (+ `wait_for_update: 500`, `functionality`/`security` = granted) — skrypt `is:inline` w `<head>` **PRZED** GTM (zweryfikowane w buildzie: default linia 4, GTM loader linia 24); honoruje wcześniejszy wybór z `localStorage('ora-consent')`. (2) **`CookieConsent.astro`** — baner fixed na dole, Akceptuję/Odrzucam, na tokenach (dark sam się odwraca: `--c-cream` tło, `--c-ink-70` tekst, `--c-shadow` wyniesienie), bez bibliotek, minimalny `is:inline` JS; wybór → `gtag('consent','update', granted|denied)` + zapis. (3) **„Ustawienia cookies"** w stopce (`[data-cc-open]`, reopen banera) — polityka sekcja 6 odsyła do „ustawień cookies". ⚠️ Tagi (GA4/Ads/Meta…) muszą być **w kontenerze GTM ustawione na „wymaga zgody"** (built-in consent checks) — to akcja Ady w panelu GTM; sam Consent Mode na stronie jest gotowy.

- [ ] Krok 23 — **Finalne copy Ady (`ORA_copy_calosc.md`) + ukrycie placeholderów** — DO AKCEPTACJI. (1) **Interpunkcja Ady = wiążąca:** plik copy ma nagłówek „nie zamieniaj myślników/łączników" → **cofnięto konwersję `-`→`—` z Kroku 20** w widocznym copy 5 podstron (`/`, `/wydarzenia-biznes`, `/sluby`, `/o-mnie`, `/faq`). Pauzy `—` zostają tylko w meta/`<title>` (separator marki, append `— ORA.studio`), w komentarzach, `alt` i etykietach `visually-hidden` (to NIE copy Ady). (2) **SEO `<title>`/description** podmienione wg copy na `/` i `/wydarzenia-biznes` (jedyne, które Ada podała) — pełny, ręczny tytuł z `|` → nowy prop **`rawTitle`** w `BaseLayout` (nie dokleja `— ORA.studio`). Pozostałe 3 podstrony bez nowych tytułów (Ada nie podała). (3) **FAQ `/sluby`** = 4 nowe pytania Ady (cywilne/humanistyczne · early bird · kiedy zdjęcia · dojazd) zamiast poprzednich; **FAQ `/faq`** = drobne korekty treści (m.in. `Useme`→`use.me`). (4) **Wszystkie ramki na zdjęcia (placeholdery) UKRYTE** — flaga per-strona `const showFrames = false` bramkuje: zdjęcia w Hero (`/`, `/wydarzenia-biznes`, `/sluby`), portret `/o-mnie`, galerie 6-kadrowe (znika z nimi CTA „Zobacz realizacje" i osierocone kotwice `#galeria` w hero) oraz **LookSwitcher `/sluby`** (to też kadr-placeholder; lede zaktualizowany, wróci z flagą). Przełącz `showFrames`→`true`, gdy wejdą realne zdjęcia. (5) **Realizacje UKRYTE z menu** — wpis w `nav` (`site.ts`) zakomentowany → znika z Nav i Footer; **strona `/realizacje` + `[slug]` wciąż żyją** (build OK, tylko bez linku w menu). **Decyzje do zgłoszenia:** `rodoText` na `/wydarzenia-biznes` zostaje skrócony do „…Szczegóły:" (Form sam dokleja link „Polityka prywatności" — pełne zdanie Ady dublowałoby link); `use.me` pisane jak w copy Ady; `/realizacje` (parkowana) i `/styleguide` (poligon) NIE tknięte — placeholdery tam zostają. Build: 18 stron OK.

## System marki (trzymaj dosłownie)

**Paleta (rozszerzona — moodboard Ady v1 „ciepły analog", `ora_studio_brand_direction_v1.html`):**
- 60%: Krem `#F3EADB` (tło) · 30%: Piasek `#E4D5BD` (powierzchnie/pasy sekcji, stopka) + Kawa `#6B5440` (etykiety/eyebrow, tekst II) + Atrament `#1F1812` (tekst) · 10%: Bursztyn `#C68A4B` (akcent sygnaturowy: kropka logo, numery rzymskie, hairline) + Terakota `#B0573A` (akcent interaktywny: CTA, linki, hover).
- Tokeny: `--c-sand`, `--c-coffee`, `--c-terracotta` + role `--c-surface` / `--c-label` / `--c-accent-i` w `tokens.css`. Używaj ról, nie surowych hexów.
- **Zasada 60/30/10 ZASTĘPUJE „jeden bursztyn na widok".** Akcenty (10%) to bursztyn + terakota, używane oszczędnie.
- **Dark theme „ciemnia" (Krok 17):** ciepła ciemnia jako `:root[data-theme='dark']` — głęboki atrament `#1C1611` (tło), kremowy tekst `#EFE3D0`, piasek→`#2A2219`, kawa→jasny tan `#CDB491`, bursztyn `#D9A25C` (światło), terakota `#BB6240`. **Dark = sama podmiana prymitywów** (role/pochodne liczą się same). Przy NOWYCH komponentach: używaj ról/tokenów (`--c-ink`, `--c-surface`…) a nie surowych hexów → odwrócą się same. Wyjątki na które uważać: tekst na nasyconym tle = `--c-on-accent` (nie `--c-cream`); cień/bevel = `--c-shadow` (nie `--c-ink`); literały natywne (chevron SVG, `accent-color`, ikony pól) wymagają `:global(html[data-theme='dark'])` override.
- **Pasy sekcji (full-bleed: sekcja bez `.container`, treść w wewn. `.container`):** `.band-sand` = gładki piasek; `.band-pattern` = piasek + zygzak/chevron **tone-on-tone** (kawa ~7% wmieszana w piasek, skala 52px — tekstura, nie linie pod tekstem; deseń wybrany przez Adę). **Zasada: NIE dawać pasa (band) na sekcji tuż przed stopką** (stopka też piaskowa → kremowy odstęp tworzy brzydki cienki pasek); ostatnia sekcja przed stopką = krem. Użyte: `.band-pattern` na manifeście `/` i „Dlaczego dokument" `/wydarzenia-biznes`; `.band-sand` (gładki kolor) na „Early bird" `/sluby` (zygzak za bardzo się tam zlewał — decyzja Ady; deseń do przemyślenia w przyszłości).
- Marka chrome: Nav sticky (tło kremowe), Footer na piasku. Logo przez `Logo.astro` = `wordmark-ink.svg` (jasny motyw) / `wordmark-transparent-cream.svg` (dark, krzywe, kropka bursztyn) — oba renderowane, przełączane przez `data-theme`. Social w stopce = ikony (`SocialLinks.astro`, dane w `site.ts → socials`).
- Fonty bez zmian: **Quincy CF + Outfit** (moodboard pokazał Fraunces/Inter tylko jako darmowe zamienniki — decyzja: zostajemy przy Quincy/Outfit).

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

`src/components/`: **Gallery** (passe-partout, sygnaturowy; propy `href` = podpis→case study, `zoom` = powiększenie) · **Hero** · **CTAList** · **Cards** · **Process** · **Faq** · **Form** · **LookSwitcher** (opcjonalny, Śluby) · **Lightbox** (globalny `<dialog>`, powiększenie kadrów, prev/next + klawiatura, w `BaseLayout`). Jeden plik na typ, reużywalne, na tokenach.

**Decyzja klientki (ważniejsza niż pkt 5.1 briefu): kadry w Gallery są BEZ obwódki.** Ada nie chciała „brązowej obwódki" — i ostatecznie żadnej. Domyślnie `hairline="none"` (styk czyta sam bevel + cień wpuszczenia). Prop `hairline="none|neutral|amber"` zostaje na wszelki wypadek, ale nie dodawaj hairline na kadrach bez jej zgody. Skutek: bursztyn widoku niesie inny element (numer CTAList / kropka), a galeria bywa bez akcentu (zero bursztynu też jest OK).

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
- **Prop `title` w `BaseLayout` NIE zawiera „ORA.studio"** — layout sam dokleja `— ORA.studio` (podwójny brand = błąd SEO, audyt Krok 14). Podawaj samą frazę strony.
- Lokalne frazy (Gdańsk/Gdynia/Sopot, dojazd) naturalnie w FAQ i „obszar działania" — nie upchana lista.
- Semantyczny HTML, mobile-first, focus states, kontrast, `aria` gdzie trzeba.
- Obrazy WebP/AVIF + lazy-load. Formularze: osobny, niezaznaczony checkbox RODO + link do polityki.
- **Decyzja (Krok 8, zmiana wobec mapy sekcja 0):** `Form` NIE pokazuje już linijki „Administrator danych: …" pod formularzem. Obowiązek informacyjny niesie checkbox RODO + link do Polityki prywatności (administrator wskazany w sekcji 1 polityki). Świadomie odeszliśmy od zasady „każdy formularz = administrator danych" — to NIE jest brak do zgłoszenia w audycie.

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

`public/favicon.svg` = kopia `sygnet-on-light.svg` (jasne tło `#f8f4ec` + ciemny znak `#1f1812` — decyzja Ady; wcześniej był `sygnet-on-dark`).

**Decyzje (potwierdzone):**
- **Krem = `#F3EADB`** (token z briefu — zostaje, cieplejszy/filmowy). Logo wstawiamy w wersjach **transparentnych** (`*-transparent-*`, `sygnet-ink`), żeby kremowy blok logo (`#f8f4ec`) nie zgrzytał z tłem strony. Nie używamy wersji z wbudowanym tłem na stronie kremowej.
- **Wordmark (DECYZJA ADY, Krok 9 — ZASTĘPUJE wcześniejszy plan „tekst+sygnet"):** w nagłówku/stopce używamy **pełnego wordmarku „ORA.studio" Z FALĄ jako jednego znaku**, NIE sygnetu z osobnym tekstem. Plik: `public/logo/wordmark-ink.svg` — **pochodny** od `wordmark-transparent-cream.svg` (pełne KRZYWE, web-safe, bez zależności od QuincyCF), z literami przemalowanymi na atrament (`#1f1812`), kropka zostaje bursztynowa. Renderowany przez komponent `Logo.astro` (`<img>`, link do `/`). Nie używamy `wordmark-transparent-ink.svg` (jego „studio" to żywy tekst QuincyCF → fallback u gościa). Sygnet (`sygnet-ink.svg`) nieużywany w chrome (zostaje favicon).
- **Bursztyn — sygnaturowa kropka:** jak w logo „ora**.**studio", końcowa kropka tytułu Hero jest bursztynowa (`Hero.astro` auto-koloruje trailing „." → `.hero__period`, `--c-amber`). To jest sygnaturowy akcent nagłówka. Prop `accent` (kropka przy eyebrow) NIE jest używany — sygnaturę niesie kropka tytułu. Terakota zostaje na elementy interaktywne (CTA/linki).
- **Nav przyklejony (sticky):** decyzja Ady — pasek `position: sticky; top:0` z tłem kremowym, zawsze widoczny przy scrollu.
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
