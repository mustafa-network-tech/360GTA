"use client";

import { Check, X } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StatusBadge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import type { PurchaseItem } from "@/types";

export function PurchasingTable({ data }: { data: PurchaseItem[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Proje Kodu</TableHead>
          <TableHead>Şantiye</TableHead>
          <TableHead>Malzeme / Ürün</TableHead>
          <TableHead className="text-right">Metraj</TableHead>
          <TableHead>Birim</TableHead>
          <TableHead>Açıklama</TableHead>
          <TableHead>Durum</TableHead>
          <TableHead>Şantiye Onayı</TableHead>
          <TableHead className="w-32">Tamamlanma</TableHead>
          <TableHead className="text-right">İşlem</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((p) => (
          <TableRow key={p.id}>
            <TableCell className="font-medium">{p.projectCode}</TableCell>
            <TableCell className="text-muted-foreground">{p.siteName}</TableCell>
            <TableCell>{p.material}</TableCell>
            <TableCell className="text-right tabular-nums">{p.quantity}</TableCell>
            <TableCell>{p.unit}</TableCell>
            <TableCell className="text-muted-foreground">{p.description}</TableCell>
            <TableCell>
              <StatusBadge status={p.status} />
            </TableCell>
            <TableCell>
              {p.siteApproval ? (
                <span className="inline-flex items-center gap-1 text-sm text-success">
                  <Check className="size-4" /> Onaylı
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                  <X className="size-4" /> Bekliyor
                </span>
              )}
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Progress value={p.completionRate} className="w-16" />
                <span className="text-xs tabular-nums">%{p.completionRate}</span>
              </div>
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
