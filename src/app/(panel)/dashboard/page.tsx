"use client";

import {
  Building2,
  HardHat,
  FolderKanban,
  ShoppingCart,
  CreditCard,
  FileText,
  Users,
  TrendingUp,
  TrendingDown,
  Activity,
} from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SummaryCard } from "@/components/dashboard/SummaryCard";
import { DashboardCharts } from "@/components/dashboard/DashboardCharts";
import { RecentWorkOrders } from "@/components/dashboard/RecentWorkOrders";
import { CriticalAlerts } from "@/components/dashboard/CriticalAlerts";
import { Button } from "@/components/ui/button";
import { useDashboard } from "@/hooks/use-dashboard";
import { formatCurrency, formatAccounting } from "@/lib/utils/format-currency";

export default function DashboardPage() {
  const { stats, workOrders, alerts, siteProgress, financeMovement, requestDistribution } = useDashboard();
  const s = stats.data;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard"
        description="Şirket genelinde özet durum, finans ve operasyon göstergeleri."
        actions={
          <>
            <Button variant="outline">Excel İndir</Button>
            <Button>Yeni İş Oluştur</Button>
          </>
        }
      />

      {/* Özet kartları */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
        <SummaryCard label="Toplam Şantiye" value={s.totalSites} icon={Building2} accent="info" />
        <SummaryCard label="Aktif Şantiye" value={s.activeSites} icon={HardHat} accent="primary" />
        <SummaryCard label="Aktif Proje" value={s.activeProjects} icon={FolderKanban} accent="info" />
        <SummaryCard label="Bekleyen Satın Alma" value={s.pendingPurchases} icon={ShoppingCart} accent="warning" />
        <SummaryCard label="Bekleyen Ödeme" value={s.pendingPayments} icon={CreditCard} accent="warning" />
        <SummaryCard label="Bekleyen Fatura" value={s.pendingInvoices} icon={FileText} accent="warning" />
        <SummaryCard label="Personel Sayısı" value={s.personnelCount} icon={Users} accent="primary" />
        <SummaryCard label="Toplam Gelir" value={formatCurrency(s.totalIncome)} icon={TrendingUp} accent="success" />
        <SummaryCard label="Toplam Ödeme" value={formatCurrency(s.totalPayment)} icon={TrendingDown} accent="destructive" />
        <SummaryCard
          label="Net Hareketlilik"
          value={formatAccounting(s.netMovement)}
          icon={Activity}
          accent={s.netMovement >= 0 ? "success" : "destructive"}
        />
      </div>

      {/* Grafikler */}
      <DashboardCharts
        siteProgress={siteProgress.data}
        financeMovement={financeMovement.data}
        requestDistribution={requestDistribution.data}
      />

      {/* Tablolar + uyarılar */}
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RecentWorkOrders data={workOrders.data} />
        </div>
        <CriticalAlerts data={alerts.data} />
      </div>
    </div>
  );
}
