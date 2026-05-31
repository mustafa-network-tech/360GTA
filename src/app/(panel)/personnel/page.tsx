"use client";

import { Users, UserCheck, FileWarning, Wallet, Plane, ShieldAlert } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SummaryCard } from "@/components/dashboard/SummaryCard";
import { PersonnelTable } from "@/components/tables/PersonnelTable";
import { usePersonnel } from "@/hooks/use-personnel";

export default function PersonnelPage() {
  const { data: personnel } = usePersonnel();

  const counts = {
    total: personnel.length,
    active: personnel.filter((p) => p.status === "active").length,
    missingFile: personnel.filter((p) => !p.fileComplete).length,
    advance: personnel.filter((p) => p.advanceAmount > 0).length,
    onLeave: personnel.filter((p) => p.status === "on_leave").length,
    disciplinary: personnel.filter((p) => p.hasDisciplinaryAction).length,
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Personel Takip"
        description="Özlük, maaş, avans, izin ve cezai işlem takibi."
        actions={<Button>Yeni Personel</Button>}
      />

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-6">
        <SummaryCard label="Personel Sayısı" value={counts.total} icon={Users} accent="info" />
        <SummaryCard label="Aktif Personel" value={counts.active} icon={UserCheck} accent="success" />
        <SummaryCard label="Eksik Özlük" value={counts.missingFile} icon={FileWarning} accent="warning" />
        <SummaryCard label="Avans Kullanan" value={counts.advance} icon={Wallet} accent="warning" />
        <SummaryCard label="İzinli" value={counts.onLeave} icon={Plane} accent="info" />
        <SummaryCard label="Cezai İşlem" value={counts.disciplinary} icon={ShieldAlert} accent="destructive" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Personel Listesi</CardTitle>
        </CardHeader>
        <CardContent className="px-0">
          <PersonnelTable data={personnel} />
        </CardContent>
      </Card>
    </div>
  );
}
