// =========================================================================
// ORA.studio — helper placeholderów obrazów (Krok 15). Wspólny dla wszystkich
// galerii (home / wydarzenia / śluby / realizacje + case study).
//
// TYMCZASOWO placehold.co (brand-tint, webp) — ZEWNĘTRZNE żądanie, do podmiany
// na lokalne WebP/AVIF gdy wejdą realne zdjęcia (audyt Krok 14 #4). Podmiana
// w jednym miejscu: tutaj.
// =========================================================================

// Wymiary placeholdera dobrane do proporcji (ostre, bez rozjazdu aspect-ratio).
const DIMS: Record<string, [number, number]> = {
  '3 / 2': [600, 400],
  '4 / 5': [480, 600],
  '1 / 1': [600, 600],
};

// Brand-tintowany placeholder: tło krem (f3eadb), tekst kawa (6b5440), webp.
// label trafia do ?text= (zakodowany).
export function placeholderImg(ratio: string, label: string): string {
  const [w, h] = DIMS[ratio] ?? [600, 400];
  return `https://placehold.co/${w}x${h}/f3eadb/6b5440/webp?text=${encodeURIComponent(label)}`;
}
