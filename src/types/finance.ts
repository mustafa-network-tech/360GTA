import type { FinanceType } from "@/lib/constants/statuses";

/** Banka bilgisi (PPT slayt 13) */
export interface BankAccount {
  id: string;
  bankName: string;
  iban: string;
  openingBalance: number;
  updatedAt: string;
}

/** Nakit akış takvimi satırı (PPT slayt 13) */
export interface CashFlowEntry {
  id: string;
  date: string;
  party: string; // kişi / kurum
  description: string;
  bankName: string;
  type: FinanceType;
  amount: number;
  /** Gelir (+) / gider (-) işareti hesaplamada kullanılır */
  direction: "in" | "out";
  cumulativeBalance: number;
  status: string;
}

/** Fatura kesim talebi (PPT slayt 8, 14) */
export interface InvoiceRequest {
  id: string;
  requestNo: string;
  company: string;
  description: string;
  amount: number;
  requestDate: string;
  note?: string;
  status: "open" | "invoiced";
}

/** Ödeme talebi takip (PPT slayt 9, 15) */
export interface PaymentRequest {
  id: string;
  requestNo: string;
  company: string;
  description: string;
  amount: number;
  requestDate: string;
  note?: string;
  status: "open" | "paid";
}

/** Ödeme istek talebi — onay/red akışı (PPT slayt 16) */
export interface PaymentDemand {
  id: string;
  requestedBy: string;
  amount: number;
  description: string;
  invoiceImage?: string;
  status: "pending" | "approved" | "rejected";
  paymentDate?: string;
  rejectReason?: string;
}

/** Taşeron finans hareketi (PPT slayt 18) */
export interface SubcontractorEntry {
  id: string;
  subcontractor: string;
  date: string;
  description: string;
  type: "payment" | "invoice";
  amount: number;
}

/** Genel finans özeti */
export interface FinanceSummary {
  totalIncome: number;
  totalPayment: number;
  netMovement: number;
  estimatedBalance: number;
}
