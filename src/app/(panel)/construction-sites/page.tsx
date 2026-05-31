"use client";

import { useMemo, useState } from "react";
import { MapPin, User, CalendarDays, HardHat, Banknote, Wallet, Receipt } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ConstructionSitesTable } from "@/components/tables/ConstructionSitesTable";
import { useAsyncData } from "@/hooks/use-async-data";
import { constructionSitesService } from "@/services/construction-sites.service";
import { formatCurrency } from "@/lib/utils/format-currency";
import { formatDate } from "@/lib/utils/format-date";
import { cn } from "@/lib/utils/cn";
import type { ConstructionSite } from "@/types";

export default function ConstructionSitesPage() {
  const { data: sites } = useAsyncData<ConstructionSite[]>(() => constructionSitesService.getAll(), []);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = useMemo(() => {
    if (!sites.length) return null;
    return sites.find((s) => s.id === selectedId) ?? sites[0];
  }, [sites, selectedId]);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Şantiye Takip"
        description="Şantiye seçerek detaylı ilerleme, maliyet ve raporlama bilgilerini görüntüleyin."
        actions={<Button variant="outline">Excel İndir</Button>}
      />

      {/* Şantiye seçimi */}
      <Card>
        <CardContent className="flex flex-col gap-3 pt-5 sm:flex-row sm:items-end">
          <div className="flex-1 space-y-1.5">
            <label className="text-sm font-medium">Şantiye Seç</label>
            <Select value={selected?.id ?? ""} onChange={(e) => setSelectedId(e.target.value)}>
              {sites.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.projectCode} / {s.name}
                </option>
              ))}
            </Select>
          </div>
        </CardContent>
      </Card>

      {selected && (
        <>
          {/* Genel bilgi kartları */}
          <div className="grid gap-4 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>{selected.name}</CardTitle>
                <CardDescription>{selected.projectCode}</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 sm:grid-cols-2">
                <InfoRow icon={MapPin} label="Adres" value={selected.address} />
                <InfoRow icon={User} label="Yetkili Kişi" value={selected.authorizedPerson} />
                <InfoRow icon={HardHat} label="Şantiye Şefi" value={selected.siteChief} />
                <InfoRow icon={CalendarDays} label="Başlangıç" value={formatDate(selected.startDate)} />
                <InfoRow icon={CalendarDays} label="Tahmini Bitiş" value={formatDate(selected.estimatedEndDate)} />
                <InfoRow icon={CalendarDays} label="Son Rapor" value={formatDate(selected.lastReportDate)} />
              </CardContent>
            </Card>

            {/* Finansal özet */}
            <Card>
              <CardHeader>
                <CardTitle>Finansal Özet</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <MoneyRow icon={Banknote} label="Anlaşma Tutarı" value={selected.agreementAmount} accent="primary" />
                <MoneyRow icon={Wallet} label="Maliyet (manuel)" value={selected.cost} accent="warning" />
                <MoneyRow icon={Receipt} label="Şantiye Masrafı (faturalar)" value={selected.siteExpense} accent="destructive" />
              </CardContent>
            </Card>
          </div>

          {/* Oranlar */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <RateCard label="Gün Bazlı Tamamlanma" value={selected.dayCompletionRate} />
            <RateCard label="Fiziksel Tamamlanma" value={selected.physicalCompletionRate} />
            <RateCard label="Satın Alma Tamamlanma" value={selected.purchaseCompletionRate} />
            <RateCard label="Raporlama Oranı" value={selected.reportingRate} />
          </div>

          {/* Aşamalar */}
          <Card>
            <CardHeader>
              <CardTitle>İş Aşamaları</CardTitle>
              <CardDescription>
                Tamamlanma oranı; iş tanımındaki aşamaların şantiye şefi tarafından &quot;tamamlandı&quot; olarak
                işaretlenmesiyle oluşur.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {selected.stages.map((stage) => (
                <div
                  key={stage.id}
                  className={cn(
                    "flex items-center justify-between rounded-lg border px-4 py-3",
                    stage.completed ? "border-success/30 bg-success/5" : "border-border bg-muted/30"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "flex size-6 items-center justify-center rounded-full text-xs font-bold",
                        stage.completed ? "bg-success text-white" : "bg-muted text-muted-foreground"
                      )}
                    >
                      %{stage.weight}
                    </span>
                    <span className={cn("text-sm font-medium", stage.completed && "text-success")}>{stage.name}</span>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">
                    {stage.completed ? "Tamamlandı" : "Devam ediyor"}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </>
      )}

      {/* Tüm şantiyeler tablosu */}
      <Card>
        <CardHeader>
          <CardTitle>Tüm Şantiyeler</CardTitle>
        </CardHeader>
        <CardContent className="px-0">
          <ConstructionSitesTable data={sites} onSelect={(s) => setSelectedId(s.id)} />
        </CardContent>
      </Card>
    </div>
  );
}

function InfoRow({ icon: Icon, label, value }: { icon: typeof MapPin; label: string; value: string }) {
  return (
    <div className="flex items-start gap-2.5">
      <Icon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
      <div>
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="text-sm font-medium">{value}</div>
      </div>
    </div>
  );
}

function MoneyRow({
  icon: Icon,
  label,
  value,
  accent,
}: {
  icon: typeof Banknote;
  label: string;
  value: number;
  accent: "primary" | "warning" | "destructive";
}) {
  const cls = {
    primary: "text-primary",
    warning: "text-[hsl(32_85%_38%)]",
    destructive: "text-destructive",
  }[accent];
  return (
    <div className="flex items-center justify-between">
      <span className="flex items-center gap-2 text-sm text-muted-foreground">
        <Icon className="size-4" /> {label}
      </span>
      <span className={cn("text-sm font-semibold tabular-nums", cls)}>{formatCurrency(value)}</span>
    </div>
  );
}

function RateCard({ label, value }: { label: string; value: number }) {
  return (
    <Card className="p-4">
      <div className="mb-2 flex items-baseline justify-between">
        <span className="text-xs font-medium text-muted-foreground">{label}</span>
        <span className="text-lg font-bold tabular-nums">%{value}</span>
      </div>
      <Progress value={value} />
    </Card>
  );
}
