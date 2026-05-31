/**
 * ============================================================================
 * SUPABASE SUNUCU (SERVER) BAĞLANTISI — PLACEHOLDER
 * ============================================================================
 * ŞU AN: Gerçek bir Supabase bağlantısı KURULMAZ.
 *
 * İLERİDE: Sunucu bileşenleri / route handler'lar için `@supabase/ssr`
 * kullanılarak cookie tabanlı oturumla bağlantı kurulacaktır.
 * ============================================================================
 */

import { SUPABASE_URL, SUPABASE_ANON_KEY } from "./client";

/**
 * Sunucu tarafı Supabase istemcisi.
 *
 * Kurulduğunda kullanım (App Router):
 *
 *   import { createServerClient } from "@supabase/ssr";
 *   import { cookies } from "next/headers";
 *
 *   export async function getSupabaseServerClient() {
 *     const cookieStore = await cookies();
 *     return createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
 *       cookies: {
 *         getAll: () => cookieStore.getAll(),
 *         setAll: (list) => list.forEach(({ name, value, options }) =>
 *           cookieStore.set(name, value, options)),
 *       },
 *     });
 *   }
 */
export function getSupabaseServerClient(): null {
  void SUPABASE_URL;
  void SUPABASE_ANON_KEY;
  // Placeholder: gerçek bağlantı henüz kurulmadı.
  return null;
}
