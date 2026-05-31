/**
 * Auth feature tipleri. Domain tiplerini yeniden dışa aktarır.
 * İleride Supabase Auth ile genişletilecek (session, JWT claims vb.).
 */
export type { AuthUser, UserRole, RoleOption } from "@/types/auth";

export interface LoginCredentials {
  username: string;
  password: string;
  role?: string;
}
