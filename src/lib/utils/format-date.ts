/**
 * ISO tarih dizesini (YYYY-MM-DD) Türkçe biçime çevirir.
 * Örn: "2026-04-18" -> "18.04.2026"
 */
export function formatDate(value?: string | null): string {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

/**
 * İki tarih arasında geçen gün sayısını hesaplar.
 */
export function daysBetween(start: string, end: string): number {
  const s = new Date(start).getTime();
  const e = new Date(end).getTime();
  if (Number.isNaN(s) || Number.isNaN(e)) return 0;
  return Math.round((e - s) / (1000 * 60 * 60 * 24));
}

/**
 * Bir başlangıç tarihinden bugüne kadar geçen süreyi "X gün" olarak verir.
 */
export function elapsedDays(start: string): number {
  return daysBetween(start, new Date().toISOString().slice(0, 10));
}
