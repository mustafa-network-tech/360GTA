export type ProjectStatus = "open" | "in_progress" | "completed";

export interface Project {
  id: string;
  name: string;
  code: string;
  corporateCompany: string;
  workOrderBy: string; // iş emri veren kişi
  drawnBy: string; // çizen kişi
  startDate: string;
  estimatedEndDate: string;
  status: ProjectStatus;
  about?: string;
}
