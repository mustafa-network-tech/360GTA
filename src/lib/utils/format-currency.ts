/**
 * Tutarı Türk Lirası biçiminde formatlar.
 * Örn: 1250000 -> "1.250.000 ₺"
 */
export function formatCurrency(value: number, options?: { withSymbol?: boolean }): string {
  const withSymbol = options?.withSymbol ?? true;
  const formatted = new Intl.NumberFormat("tr-TR", {
    maximumFractionDigits: 0,
  }).format(value);
  return withSymbol ? `${formatted} ₺` : formatted;
}

/**
 * Negatif değerleri parantez içinde gösterir (muhasebe gösterimi).
 * Örn: -123155 -> "(123.155 ₺)"
 */
export function formatAccounting(value: number): string {
  if (value < 0) {
    return `(${formatCurrency(Math.abs(value))})`;
  }
  return formatCurrency(value);
}
