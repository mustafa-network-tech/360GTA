"use client";

import { FileBarChart } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StatusBadge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { formatCurrency } from "@/lib/utils/format-currency";
import { formatDate } from "@/lib/utils/format-date";
import type { ConstructionSite } from "@/types";

interface Props {
  data: ConstructionSite[];
  onSelect?: (site: ConstructionSite) => void;
}

export function ConstructionSitesTable({ data, onSelect }: Props) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Şantiye Adı</TableHead>
          <TableHead>Proje Kodu</TableHead>
          <TableHead>Şantiye Şefi</TableHead>
          <TableHead>Durum</TableHead>
          <TableHead className="w-40">Tamamlanma</TableHead>
          <TableHead>Satın Alma</TableHead>
          <TableHead>Raporlama</TableHead>
          <TableHead className="text-right">Maliyet</TableHead>
          <TableHead>Son Rapor</TableHead>
          <TableHead className="text-right">İşlem</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((s) => (
          <TableRow key={s.id}>
            <TableCell className="font-medium">{s.name}</TableCell>
            <TableCell className="text-muted-foreground">{s.projectCode}</TableCell>
            <TableCell>{s.siteChief}</TableCell>
            <TableCell>
              <StatusBadge status={s.status} />
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Progress value={s.physicalCompletionRate} className="w-20" />
                <span className="text-xs font-medium tabular-nums">%{s.physicalCompletionRate}</span>
              </div>
            </TableCell>
            <TableCell className="tabular-nums">%{s.purchaseCompletionRate}</TableCell>
            <TableCell className="tabular-nums">%{s.reportingRate}</TableCell>
            <TableCell className="text-right tabular-nums">{formatCurrency(s.cost)}</TableCell>
            <TableCell className="text-muted-foreground">{formatDate(s.lastReportDate)}</TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" size="sm" onClick={() => onSelect?.(s)}>
                <FileBarChart className="size-4" /> Raporlar
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
