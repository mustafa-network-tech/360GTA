"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StatusBadge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDate, elapsedDays } from "@/lib/utils/format-date";
import type { Project } from "@/types";

export function ProjectsTable({ data }: { data: Project[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Proje Adı</TableHead>
          <TableHead>Kurumsal Firma</TableHead>
          <TableHead>İş Emri Veren</TableHead>
          <TableHead>Çizen Kişi</TableHead>
          <TableHead>Başlangıç</TableHead>
          <TableHead>Tahmini Bitiş</TableHead>
          <TableHead>Geçen Süre</TableHead>
          <TableHead>Durum</TableHead>
          <TableHead className="text-right">İşlem</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((p) => (
          <TableRow key={p.id}>
            <TableCell className="font-medium">
              {p.name}
              <div className="text-xs text-muted-foreground">{p.code}</div>
            </TableCell>
            <TableCell>{p.corporateCompany}</TableCell>
            <TableCell>{p.workOrderBy}</TableCell>
            <TableCell>{p.drawnBy}</TableCell>
            <TableCell>{formatDate(p.startDate)}</TableCell>
            <TableCell>{formatDate(p.estimatedEndDate)}</TableCell>
            <TableCell className="tabular-nums">{elapsedDays(p.startDate)} gün</TableCell>
            <TableCell>
              <StatusBadge status={p.status} />
            </TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" size="sm">
                Detay
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
