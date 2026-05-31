"use client";

import { Check, AlertTriangle } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StatusBadge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils/format-currency";
import { formatDate } from "@/lib/utils/format-date";
import type { Personnel } from "@/types";

export function PersonnelTable({ data }: { data: Personnel[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Personel Adı</TableHead>
          <TableHead>Görev</TableHead>
          <TableHead>İşe Giriş</TableHead>
          <TableHead className="text-right">Maaş</TableHead>
          <TableHead className="text-right">Avans</TableHead>
          <TableHead>İzin Durumu</TableHead>
          <TableHead>Özlük Dosyası</TableHead>
          <TableHead>Durum</TableHead>
          <TableHead className="text-right">İşlem</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((p) => (
          <TableRow key={p.id}>
            <TableCell className="font-medium">
              {p.name}
              {p.hasDisciplinaryAction && (
                <span className="ml-2 inline-flex items-center gap-1 text-xs text-destructive">
                  <AlertTriangle className="size-3" /> Cezai
                </span>
              )}
            </TableCell>
            <TableCell>{p.role}</TableCell>
            <TableCell>{formatDate(p.startDate)}</TableCell>
            <TableCell className="text-right tabular-nums">{formatCurrency(p.salary)}</TableCell>
            <TableCell className="text-right tabular-nums">
              {p.advanceAmount > 0 ? formatCurrency(p.advanceAmount) : "-"}
            </TableCell>
            <TableCell className="tabular-nums text-muted-foreground">
              {p.usedLeaveDays}/{p.earnedLeaveDays} gün
            </TableCell>
            <TableCell>
              {p.fileComplete ? (
                <span className="inline-flex items-center gap-1 text-sm text-success">
                  <Check className="size-4" /> Tam
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-sm text-[hsl(32_85%_38%)]">
                  <AlertTriangle className="size-4" /> Eksik
                </span>
              )}
            </TableCell>
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
