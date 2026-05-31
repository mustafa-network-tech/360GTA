"use client";

import { financeService } from "@/services/finance.service";
import { useAsyncData } from "./use-async-data";
import type {
  BankAccount,
  CashFlowEntry,
  InvoiceRequest,
  PaymentRequest,
  PaymentDemand,
  SubcontractorEntry,
  FinanceSummary,
} from "@/types";

const emptySummary: FinanceSummary = {
  totalIncome: 0,
  totalPayment: 0,
  netMovement: 0,
  estimatedBalance: 0,
};

export function useFinance() {
  const summary = useAsyncData<FinanceSummary>(() => financeService.getSummary(), emptySummary);
  const banks = useAsyncData<BankAccount[]>(() => financeService.getBankAccounts(), []);
  const cashFlow = useAsyncData<CashFlowEntry[]>(() => financeService.getCashFlow(), []);
  const invoiceRequests = useAsyncData<InvoiceRequest[]>(() => financeService.getInvoiceRequests(), []);
  const paymentRequests = useAsyncData<PaymentRequest[]>(() => financeService.getPaymentRequests(), []);
  const paymentDemands = useAsyncData<PaymentDemand[]>(() => financeService.getPaymentDemands(), []);
  const subcontractors = useAsyncData<SubcontractorEntry[]>(() => financeService.getSubcontractorEntries(), []);

  return { summary, banks, cashFlow, invoiceRequests, paymentRequests, paymentDemands, subcontractors };
}
