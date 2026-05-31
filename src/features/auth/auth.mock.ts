/**
 * Auth feature mock verisi.
 * ŞU AN: gerçek auth yoktur. Giriş butonu doğrudan dashboard'a yönlendirir.
 * İLERİDE: Supabase Authentication ile değiştirilecek.
 */
export { ROLE_OPTIONS, MOCK_USERS, CURRENT_USER } from "@/mock/users.mock";
import type { LoginCredentials } from "./auth.types";

/**
 * Demo giriş fonksiyonu — gerçek doğrulama YAPMAZ, her zaman başarılı döner.
 */
export async function mockLogin(_credentials: LoginCredentials): Promise<{ ok: true }> {
  void _credentials;
  return { ok: true };
}
