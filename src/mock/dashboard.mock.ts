import type {
  DashboardStats,
  WorkOrder,
  CriticalAlert,
  SiteProgressDatum,
  FinanceMovementDatum,
  RequestDistributionDatum,
} from "@/types";

export const MOCK_DASHBOARD_STATS: DashboardStats = {
  totalSites: 3,
  activeSites: 2,
  activeProjects: 2,
  pendingPurchases: 2,
  pendingPayments: 1,
  pendingInvoices: 2,
  personnelCount: 4,
  totalIncome: 100000,
  totalPayment: 12315124,
  netMovement: -123155,
};

export const MOCK_RECENT_WORK_ORDERS: WorkOrder[] = [
  { id: "wo1", title: "Merkez Plaza - Seramik siparişi", type: "Satın Alma", owner: "Burak Şahin", date: "2026-05-28", status: "pending" },
  { id: "wo2", title: "Villa 360 - Yeni proje kaydı", type: "Proje", owner: "Mehmet Kaya", date: "2026-05-27", status: "approved" },
  { id: "wo3", title: "ABC Yapı - Fatura talebi", type: "Finans", owner: "Selin Muhasebe", date: "2026-05-26", status: "open" },
  { id: "wo4", title: "Depo Renovasyon - Teslim", type: "Şantiye", owner: "Kemal Şef", date: "2026-05-20", status: "completed" },
  { id: "wo5", title: "Demirhan Taşeron - Ödeme talebi", type: "Finans", owner: "Selin Muhasebe", date: "2026-05-24", status: "pending" },
];

export const MOCK_CRITICAL_ALERTS: CriticalAlert[] = [
  { id: "al1", title: "Açık fatura talebi", description: "2 fatura talebi henüz kesilmedi.", level: "high" },
  { id: "al2", title: "Eksik özlük dosyası", description: "Mehmet Kaya'nın özlük dosyası tamamlanmadı.", level: "medium" },
  { id: "al3", title: "Net hareketlilik negatif", description: "Bu dönem net nakit akışı eksiye düştü.", level: "high" },
  { id: "al4", title: "Şantiye onayı bekleyen", description: "2 satın alma kalemi saha onayı bekliyor.", level: "low" },
];

export const MOCK_SITE_PROGRESS: SiteProgressDatum[] = [
  { site: "Merkez Plaza", completion: 70 },
  { site: "Villa 360", completion: 30 },
  { site: "Depo Renovasyon", completion: 100 },
];

export const MOCK_FINANCE_MOVEMENT: FinanceMovementDatum[] = [
  { month: "Oca", income: 1200000, payment: 950000 },
  { month: "Şub", income: 1450000, payment: 1100000 },
  { month: "Mar", income: 980000, payment: 1300000 },
  { month: "Nis", income: 1700000, payment: 1250000 },
  { month: "May", income: 2100000, payment: 1850000 },
  { month: "Haz", income: 1550000, payment: 1400000 },
];

export const MOCK_REQUEST_DISTRIBUTION: RequestDistributionDatum[] = [
  { month: "Oca", purchase: 12, invoice: 8, payment: 6 },
  { month: "Şub", purchase: 18, invoice: 11, payment: 9 },
  { month: "Mar", purchase: 9, invoice: 7, payment: 5 },
  { month: "Nis", purchase: 22, invoice: 14, payment: 12 },
  { month: "May", purchase: 27, invoice: 16, payment: 15 },
];
