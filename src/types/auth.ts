/** Kullanıcı rolleri — PPT slayt 1 "Giriş Yapacak Kişiler" */
export type UserRole =
  | "yonetim"
  | "muhasebe"
  | "santiye_sefi"
  | "satin_alma"
  | "ofis";

export interface RoleOption {
  value: UserRole;
  label: string;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
}
