// ORA.studio — numeracja rzymska (I / II / III …) dla CTAList, Process, sekcji.
// Brief: numeracja cyframi rzymskimi, nie „NO. 1". Zakres realny: 1–12 wystarcza.
const NUMERALS: [number, string][] = [
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
];

export function toRoman(n: number): string {
  if (!Number.isInteger(n) || n < 1) return String(n);
  let out = '';
  let rest = n;
  for (const [value, symbol] of NUMERALS) {
    while (rest >= value) {
      out += symbol;
      rest -= value;
    }
  }
  return out;
}
