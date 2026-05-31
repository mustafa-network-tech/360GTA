export interface DashboardStats {
  totalSites: number;
  activeSites: number;
  activeProjects: number;
  pendingPurchases: number;
  pendingPayments: number;
  pendingInvoices: number;
  personnelCount: number;
  totalIncome: number;
  totalPayment: number;
  netMovement: number;
}

export interface WorkOrder {
  id: string;
  title: string;
  type: "Şantiye" | "Proje" | "Satın Alma" | "Finans";
  owner: string;
  date: string;
  status: string;
}

export interface CriticalAlert {
  id: string;
  title: string;
  description: string;
  level: "high" | "medium" | "low";
}

export interface SiteProgressDatum {
  site: string;
  completion: number;
}

export interface FinanceMovementDatum {
  month: string;
  income: number;
  payment: number;
}

export interface RequestDistributionDatum {
  month: string;
  purchase: number;
  invoice: number;
  payment: number;
}
