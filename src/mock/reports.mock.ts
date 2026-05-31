import type { ReportCard } from "@/types";

export const MOCK_REPORTS: ReportCard[] = [
  {
    id: "rep1",
    category: "site",
    title: "Şantiye Raporları",
    description: "Günlük ilerleme, tamamlanma ve saha raporları.",
    count: 124,
    lastUpdated: "2026-05-28",
  },
  {
    id: "rep2",
    category: "finance",
    title: "Muhasebe Raporları",
    description: "Nakit akış, fatura ve ödeme dökümleri.",
    count: 58,
    lastUpdated: "2026-05-27",
  },
  {
    id: "rep3",
    category: "purchasing",
    title: "Satın Alma Raporları",
    description: "Sipariş, tedarik ve maliyet analizleri.",
    count: 41,
    lastUpdated: "2026-05-26",
  },
  {
    id: "rep4",
    category: "personnel",
    title: "Personel Raporları",
    description: "Özlük, maaş, avans ve izin raporları.",
    count: 33,
    lastUpdated: "2026-05-25",
  },
  {
    id: "rep5",
    category: "project",
    title: "Proje Raporları",
    description: "Proje durumu ve teslim süreleri.",
    count: 27,
    lastUpdated: "2026-05-24",
  },
];
