"use client";

import { Eye, FileText, FileSpreadsheet, HardHat, Wallet, ShoppingCart, Users, FolderKanban } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAsyncData } from "@/hooks/use-async-data";
import { reportsService } from "@/services/reports.service";
import { formatDate } from "@/lib/utils/format-date";
import type { ReportCard, ReportCategory } from "@/types";

const categoryIcon: Record<ReportCategory, typeof HardHat> = {
  site: HardHat,
  finance: Wallet,
  purchasing: ShoppingCart,
  personnel: Users,
  project: FolderKanban,
};

export default function ReportsPage() {
  const { data: reports } = useAsyncData<ReportCard[]>(() => reportsService.getAll(), []);

  return (
    <div className="space-y-6">
      <PageHeader title="Raporlar" description="Modül bazlı raporları görüntüleyin ve dışa aktarın." />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reports.map((r) => {
          const Icon = categoryIcon[r.category];
          return (
            <Card key={r.id} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{r.title}</CardTitle>
                    <CardDescription>{r.count} kayıt</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">{r.description}</p>
                  <p className="mt-2 text-xs text-muted-foreground">Son güncelleme: {formatDate(r.lastUpdated)}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="size-4" /> Görüntüle
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileText className="size-4" /> PDF İndir
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileSpreadsheet className="size-4" /> Excel İndir
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <p className="text-center text-xs text-muted-foreground">
        Not: Bu demo sürümde indirme/görüntüleme butonları görseldir; gerçek dışa aktarma ileride eklenecektir.
      </p>
    </div>
  );
}
