/**
 * Satın alma servis katmanı. ŞU AN mock döndürür, İLERİDE Supabase'e geçer.
 */
import { MOCK_PURCHASE_ITEMS } from "@/mock/purchasing.mock";
import type { PurchaseItem } from "@/types";

export const purchasingService = {
  async getAll(): Promise<PurchaseItem[]> {
    return MOCK_PURCHASE_ITEMS;
  },
};
