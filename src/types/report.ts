import type { LucideIcon } from "lucide-react";

export type ReportCategory =
  | "site"
  | "finance"
  | "purchasing"
  | "personnel"
  | "project";

export interface ReportCard {
  id: string;
  category: ReportCategory;
  title: string;
  description: string;
  count: number;
  lastUpdated: string;
  icon?: LucideIcon;
}
