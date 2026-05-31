"use client";

import { useMemo, useState } from "react";
import { ShoppingCart, Clock, CheckCircle2, HardHat } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select } from "@/components/ui/select";
import { SummaryCard } from "@/components/dashboard/SummaryCard";
import { PurchasingTable } from "@/components/tables/PurchasingTable";
import { usePurchasing } from "@/hooks/use-purchasing";

export default function PurchasingPage() {
  const { data: items } = usePurchasing();
  const [code, setCode] = useState("");
  const [site, setSite] = useState("");
  const [status, setStatus] = useState("");

  const codes = Array.from(new Set(items.map((i) => i.projectCode)));
  const sites = Array.from(new Set(items.map((i) => i.siteName)));

  const filtered = useMemo(
    () =>
      items.filter(
        (i) =>
          (!code || i.projectCode === code) &&
          (!site || i.siteName === site) &&
          (!status || i.status === status)
      ),
    [items, code, site, status]
  );

  const counts = {
    total: items.length,
    pending: items.filter((i) => i.status === "pending").length,
    completed: items.filter((i) => i.status === "completed").length,
    awaitingApproval: items.filter((i) => !i.siteApproval).length,
  };

  return (
    <div className="space-y-6">
      <PageHeader title="Satın Alma" description="Malzeme ve sipariş taleplerinin takibi." />

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <SummaryCard label="Toplam Talep" value={counts.total} icon={ShoppingCart} accent="info" />
        <SummaryCard label="Bekleyen" value={counts.pending} icon={Clock} accent="warning" />
        <SummaryCard label="Tamamlanan" value={counts.completed} icon={CheckCircle2} accent="success" />
        <SummaryCard label="Şantiye Onayı Bekleyen" value={counts.awaitingApproval} icon={HardHat} accent="destructive" />
      </div>

      <Card>
        <CardContent className="grid gap-3 pt-5 sm:grid-cols-3">
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Proje Kodu</label>
            <Select value={code} onChange={(e) => setCode(e.target.value)}>
              <option value="">Tümü</option>
              {codes.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </Select>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Şantiye</label>
            <Select value={site} onChange={(e) => setSite(e.target.value)}>
              <option value="">Tümü</option>
              {sites.map((sName) => (
                <option key={sName} value={sName}>
                  {sName}
                </option>
              ))}
            </Select>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Durum</label>
            <Select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="">Tümü</option>
              <option value="pending">Beklemede</option>
              <option value="in_progress">Devam Ediyor</option>
              <option value="completed">Tamamlandı</option>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Satın Alma Talepleri ({filtered.length})</CardTitle>
        </CardHeader>
        <CardContent className="px-0">
          <PurchasingTable data={filtered} />
        </CardContent>
      </Card>
    </div>
  );
}
