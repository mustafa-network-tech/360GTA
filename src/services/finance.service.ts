/**
 * Finans / muhasebe servis katmanı. ŞU AN mock döndürür, İLERİDE Supabase'e geçer.
 */
import {
  MOCK_BANK_ACCOUNTS,
  MOCK_CASH_FLOW,
  MOCK_INVOICE_REQUESTS,
  MOCK_PAYMENT_REQUESTS,
  MOCK_PAYMENT_DEMANDS,
  MOCK_SUBCONTRACTOR_ENTRIES,
} from "@/mock/finance.mock";
import type { FinanceSummary } from "@/types";

export const financeService = {
  async getBankAccounts() {
    return MOCK_BANK_ACCOUNTS;
  },
  async getCashFlow() {
    return MOCK_CASH_FLOW;
  },
  async getInvoiceRequests() {
    return MOCK_INVOICE_REQUESTS;
  },
  async getPaymentRequests() {
    return MOCK_PAYMENT_REQUESTS;
  },
  async getPaymentDemands() {
    return MOCK_PAYMENT_DEMANDS;
  },
  async getSubcontractorEntries() {
    return MOCK_SUBCONTRACTOR_ENTRIES;
  },
  async getSummary(): Promise<FinanceSummary> {
    const income = MOCK_CASH_FLOW.filter((e) => e.direction === "in").reduce((a, e) => a + e.amount, 0);
    const payment = MOCK_CASH_FLOW.filter((e) => e.direction === "out").reduce((a, e) => a + e.amount, 0);
    const opening = MOCK_BANK_ACCOUNTS.reduce((a, b) => a + b.openingBalance, 0);
    return {
      totalIncome: income,
      totalPayment: payment,
      netMovement: income - payment,
      estimatedBalance: opening + income - payment,
    };
  },
};
