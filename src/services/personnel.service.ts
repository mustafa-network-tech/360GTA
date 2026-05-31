/**
 * Personel servis katmanı. ŞU AN mock döndürür, İLERİDE Supabase'e geçer.
 */
import { MOCK_PERSONNEL, MOCK_PERSONNEL_FINANCE } from "@/mock/personnel.mock";
import type { Personnel, PersonnelFinanceEntry } from "@/types";

export const personnelService = {
  async getAll(): Promise<Personnel[]> {
    return MOCK_PERSONNEL;
  },
  async getFinanceByPersonnel(personnelId: string): Promise<PersonnelFinanceEntry[]> {
    return MOCK_PERSONNEL_FINANCE.filter((e) => e.personnelId === personnelId);
  },
};
