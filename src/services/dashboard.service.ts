/**
 * Dashboard servis katmanı.
 * ŞU AN: mock verileri döndürür.
 * İLERİDE: aynı imzayla Supabase sorgularına geçirilecek (component'ler değişmez).
 */
import {
  MOCK_DASHBOARD_STATS,
  MOCK_RECENT_WORK_ORDERS,
  MOCK_CRITICAL_ALERTS,
  MOCK_SITE_PROGRESS,
  MOCK_FINANCE_MOVEMENT,
  MOCK_REQUEST_DISTRIBUTION,
} from "@/mock/dashboard.mock";

export const dashboardService = {
  async getStats() {
    // İLERİDE: const { data } = await supabase.rpc("dashboard_stats");
    return MOCK_DASHBOARD_STATS;
  },
  async getRecentWorkOrders() {
    return MOCK_RECENT_WORK_ORDERS;
  },
  async getCriticalAlerts() {
    return MOCK_CRITICAL_ALERTS;
  },
  async getSiteProgress() {
    return MOCK_SITE_PROGRESS;
  },
  async getFinanceMovement() {
    return MOCK_FINANCE_MOVEMENT;
  },
  async getRequestDistribution() {
    return MOCK_REQUEST_DISTRIBUTION;
  },
};
