/**
 * Şantiye servis katmanı. ŞU AN mock döndürür, İLERİDE Supabase'e geçer.
 */
import { MOCK_CONSTRUCTION_SITES } from "@/mock/construction-sites.mock";
import type { ConstructionSite } from "@/types";

export const constructionSitesService = {
  async getAll(): Promise<ConstructionSite[]> {
    // İLERİDE: const { data } = await supabase.from("construction_sites").select("*");
    return MOCK_CONSTRUCTION_SITES;
  },
  async getById(id: string): Promise<ConstructionSite | undefined> {
    return MOCK_CONSTRUCTION_SITES.find((s) => s.id === id);
  },
};
