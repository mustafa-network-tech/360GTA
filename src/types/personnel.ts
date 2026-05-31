export type PersonnelStatus = "active" | "on_leave" | "passive";

export interface Personnel {
  id: string;
  name: string;
  role: string; // görev
  startDate: string; // işe giriş tarihi
  salary: number;
  /** Özlük dosyası tamamlanma durumu */
  fileComplete: boolean;
  /** Avans kullanımı */
  advanceAmount: number;
  status: PersonnelStatus;
  usedLeaveDays: number;
  earnedLeaveDays: number;
  /** Cezai işlem takip durumu */
  hasDisciplinaryAction: boolean;
  note?: string;
}

/** Personel finans hareketi (PPT slayt 19/21) */
export interface PersonnelFinanceEntry {
  id: string;
  personnelId: string;
  date: string;
  type: "salary" | "advance" | "deduction";
  amount: number;
  description: string;
}
