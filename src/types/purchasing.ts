export type PurchaseStatus = "pending" | "in_progress" | "completed";

export interface PurchaseItem {
  id: string;
  projectCode: string;
  siteName: string;
  material: string; // malzeme / ürün
  quantity: number; // metraj / miktar
  unit: string; // birim (adet, m², ton vb.)
  description: string;
  status: PurchaseStatus;
  /** Şantiye şefinin onayı (sahaya inme sonrası) */
  siteApproval: boolean;
  /** Satın alma tamamlanma oranı (%) */
  completionRate: number;
}
