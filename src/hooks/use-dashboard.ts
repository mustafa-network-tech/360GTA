"use client";

import { dashboardService } from "@/services/dashboard.service";
import { useAsyncData } from "./use-async-data";
import type {
  DashboardStats,
  WorkOrder,
  CriticalAlert,
  SiteProgressDatum,
  FinanceMovementDatum,
  RequestDistributionDatum,
} from "@/types";

const emptyStats: DashboardStats = {
  totalSites: 0,
  activeSites: 0,
  activeProjects: 0,
  pendingPurchases: 0,
  pendingPayments: 0,
  pendingInvoices: 0,
  personnelCount: 0,
  totalIncome: 0,
  totalPayment: 0,
  netMovement: 0,
};

export function useDashboard() {
  const stats = useAsyncData<DashboardStats>(() => dashboardService.getStats(), emptyStats);
  const workOrders = useAsyncData<WorkOrder[]>(() => dashboardService.getRecentWorkOrders(), []);
  const alerts = useAsyncData<CriticalAlert[]>(() => dashboardService.getCriticalAlerts(), []);
  const siteProgress = useAsyncData<SiteProgressDatum[]>(() => dashboardService.getSiteProgress(), []);
  const financeMovement = useAsyncData<FinanceMovementDatum[]>(() => dashboardService.getFinanceMovement(), []);
  const requestDistribution = useAsyncData<RequestDistributionDatum[]>(
    () => dashboardService.getRequestDistribution(),
    []
  );

  return { stats, workOrders, alerts, siteProgress, financeMovement, requestDistribution };
}
