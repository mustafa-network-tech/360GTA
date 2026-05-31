"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils/format-currency";
import { formatDate } from "@/lib/utils/format-date";
import { cn } from "@/lib/utils/cn";
import type { CashFlowEntry } from "@/types";

export function FinanceCashFlowTable({ data }: { data: CashFlowEntry[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Tarih</TableHead>
          <TableHead>Kişi / Kurum</TableHead>
          <TableHead>Açıklama</TableHead>
          <TableHead>Banka</TableHead>
          <TableHead>Tür</TableHead>
          <TableHead className="text-right">Tutar (₺)</TableHead>
          <TableHead className="text-right">Kümülatif Bakiye</TableHead>
          <TableHead>Durum</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((e) => (
          <TableRow key={e.id}>
            <TableCell className="whitespace-nowrap">{formatDate(e.date)}</TableCell>
            <TableCell className="font-medium">{e.party}</TableCell>
            <TableCell className="text-muted-foreground">{e.description}</TableCell>
            <TableCell>{e.bankName}</TableCell>
            <TableCell>
              <Badge variant={e.direction === "in" ? "success" : "destructive"}>{e.status}</Badge>
            </TableCell>
            <TableCell
              className={cn(
                "text-right font-medium tabular-nums",
                e.direction === "in" ? "text-success" : "text-destructive"
              )}
            >
              {e.direction === "in" ? "+" : "-"}
              {formatCurrency(e.amount, { withSymbol: false })}
            </TableCell>
            <TableCell className="text-right tabular-nums text-muted-foreground">
              {formatCurrency(e.cumulativeBalance)}
            </TableCell>
            <TableCell>
              <Badge variant="muted">{e.direction === "in" ? "Giriş" : "Çıkış"}</Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
