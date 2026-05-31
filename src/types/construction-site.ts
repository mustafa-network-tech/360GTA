export type SiteStatus = "active" | "passive" | "completed" | "pending";

/** Şantiye iş aşaması — tamamlanma oranını oluşturan kalemler (PPT slayt 10) */
export interface SiteStage {
  id: string;
  name: string;
  weight: number; // yüzde ağırlık (toplamı 100 olmalı)
  completed: boolean;
}

export interface ConstructionSite {
  id: string;
  name: string;
  projectCode: string;
  address: string;
  authorizedPerson: string;
  siteChief: string;
  startDate: string;
  estimatedEndDate: string;
  status: SiteStatus;
  /** Gün bazlı tamamlanma oranı (geçen gün / toplam gün) */
  dayCompletionRate: number;
  /** Fiziksel tamamlanma oranı (aşamalardan hesaplanır) */
  physicalCompletionRate: number;
  /** Satın alma tamamlanma oranı */
  purchaseCompletionRate: number;
  /** Raporlama oranı (girilen rapor / geçen gün) */
  reportingRate: number;
  /** Anlaşma tutarı (manuel giriş) */
  agreementAmount: number;
  /** Maliyet */
  cost: number;
  /** Muhasebe faturalarından düşen masraf tutarı */
  siteExpense: number;
  lastReportDate: string;
  stages: SiteStage[];
}
