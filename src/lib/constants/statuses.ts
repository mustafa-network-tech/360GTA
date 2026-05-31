/**
 * Sistem genelinde kullanılan durum (status) sabitleri ve görsel eşlemeleri.
 * Badge bileşeni bu varyantları kullanır.
 */

export type StatusVariant =
  | "default"
  | "success"
  | "warning"
  | "destructive"
  | "info"
  | "muted";

export interface StatusConfig {
  label: string;
  variant: StatusVariant;
}

/** Genel iş/talep durumları */
export const STATUS_MAP: Record<string, StatusConfig> = {
  active: { label: "Aktif", variant: "success" },
  passive: { label: "Pasif", variant: "muted" },
  pending: { label: "Beklemede", variant: "warning" },
  approved: { label: "Onaylandı", variant: "success" },
  rejected: { label: "Reddedildi", variant: "destructive" },
  completed: { label: "Tamamlandı", variant: "success" },
  in_progress: { label: "Devam Ediyor", variant: "info" },
  open: { label: "Açık", variant: "warning" },
  closed: { label: "Kapandı", variant: "muted" },
  invoiced: { label: "Faturalandı", variant: "success" },
  paid: { label: "Ödendi", variant: "success" },
  unpaid: { label: "Ödenmedi", variant: "destructive" },
  on_leave: { label: "İzinli", variant: "info" },
  warning: { label: "Uyarı", variant: "warning" },
};

/** Finans hareket türleri (PPT slayt 12) */
export const FINANCE_TYPES = [
  { value: "payment", label: "Ödeme" },
  { value: "check_income", label: "Çek Geliri" },
  { value: "check_payment", label: "Çek Ödemesi" },
  { value: "cash_income", label: "Nakit Gelir" },
  { value: "tax_payment", label: "Vergi Ödemesi" },
] as const;

export type FinanceType = (typeof FINANCE_TYPES)[number]["value"];

export function getStatusConfig(key: string): StatusConfig {
  return STATUS_MAP[key] ?? { label: key, variant: "default" };
}
