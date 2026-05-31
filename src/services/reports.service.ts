/**
 * Rapor servis katmanı. ŞU AN mock döndürür, İLERİDE Supabase'e geçer.
 */
import { MOCK_REPORTS } from "@/mock/reports.mock";
import type { ReportCard } from "@/types";

export const reportsService = {
  async getAll(): Promise<ReportCard[]> {
    return MOCK_REPORTS;
  },
};
