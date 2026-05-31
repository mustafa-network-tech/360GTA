import type { AuthUser, RoleOption } from "@/types";

/** Giriş ekranındaki rol seçenekleri (PPT slayt 1) */
export const ROLE_OPTIONS: RoleOption[] = [
  { value: "yonetim", label: "Yönetim" },
  { value: "muhasebe", label: "Muhasebe" },
  { value: "santiye_sefi", label: "Şantiye Şefleri" },
  { value: "satin_alma", label: "Satın Alma Birimi" },
  { value: "ofis", label: "Ofis Ekibi" },
];

export const MOCK_USERS: AuthUser[] = [
  { id: "u1", name: "Mavi Yönetici", email: "yonetim@360tga.com", role: "yonetim" },
  { id: "u2", name: "Selin Muhasebe", email: "muhasebe@360tga.com", role: "muhasebe" },
  { id: "u3", name: "Kemal Şef", email: "saha@360tga.com", role: "santiye_sefi" },
  { id: "u4", name: "Burak Satınalma", email: "satinalma@360tga.com", role: "satin_alma" },
  { id: "u5", name: "Derya Ofis", email: "ofis@360tga.com", role: "ofis" },
];

/** Demo amaçlı varsayılan oturum kullanıcısı */
export const CURRENT_USER: AuthUser = MOCK_USERS[0];
