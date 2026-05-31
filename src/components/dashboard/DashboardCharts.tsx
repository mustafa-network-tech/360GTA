"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SiteProgressChart } from "@/components/charts/SiteProgressChart";
import { FinanceMovementChart } from "@/components/charts/FinanceMovementChart";
import { RequestDistributionChart } from "@/components/charts/RequestDistributionChart";
import type { SiteProgressDatum, FinanceMovementDatum, RequestDistributionDatum } from "@/types";

interface DashboardChartsProps {
  siteProgress: SiteProgressDatum[];
  financeMovement: FinanceMovementDatum[];
  requestDistribution: RequestDistributionDatum[];
}

export function DashboardCharts({ siteProgress, financeMovement, requestDistribution }: DashboardChartsProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Finans Hareketleri</CardTitle>
        </CardHeader>
        <CardContent>
          <FinanceMovementChart data={financeMovement} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Şantiye Tamamlanma Oranları</CardTitle>
        </CardHeader>
        <CardContent>
          <SiteProgressChart data={siteProgress} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Aylık Talep Dağılımı</CardTitle>
        </CardHeader>
        <CardContent>
          <RequestDistributionChart data={requestDistribution} />
        </CardContent>
      </Card>
    </div>
  );
}
