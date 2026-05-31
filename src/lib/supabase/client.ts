/**
 * ============================================================================
 * SUPABASE TARAYICI (CLIENT) BAĞLANTISI — PLACEHOLDER
 * ============================================================================
 * ŞU AN: Gerçek bir Supabase bağlantısı KURULMAZ. Proje, Supabase bilgileri
 * olmadan da sorunsuz çalışır. Servis katmanı mock verileri döndürür.
 *
 * İLERİDE: `@supabase/supabase-js` paketi kurulduğunda aşağıdaki yorum satırı
 * açılarak gerçek bağlantı etkinleştirilecektir. Component'ler değişmeyecek;
 * yalnızca servis dosyaları (src/services) gerçek sorgulara geçirilecektir.
 * ============================================================================
 */

export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

/** Supabase ortam değişkenleri tanımlı mı? (ileride feature-flag olarak kullanılacak) */
export const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

/**
 * Tarayıcı tarafı Supabase istemcisi.
 *
 * Kurulduğunda kullanım:
 *
 *   import { createBrowserClient } from "@supabase/ssr";
 *   export function getSupabaseBrowserClient() {
 *     return createBrowserClient(SUPABASE_URL, SUPABASE_ANON_KEY);
 *   }
 */
export function getSupabaseBrowserClient(): null {
  // Placeholder: gerçek bağlantı henüz kurulmadı.
  return null;
}
