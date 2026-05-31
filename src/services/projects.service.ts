/**
 * Proje servis katmanı. ŞU AN mock döndürür, İLERİDE Supabase'e geçer.
 */
import { MOCK_PROJECTS } from "@/mock/projects.mock";
import type { Project } from "@/types";

export const projectsService = {
  async getAll(): Promise<Project[]> {
    return MOCK_PROJECTS;
  },
  async getById(id: string): Promise<Project | undefined> {
    return MOCK_PROJECTS.find((p) => p.id === id);
  },
};
