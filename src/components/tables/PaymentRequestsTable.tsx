"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StatusBadge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils/format-currency";
import { formatDate } from "@/lib/utils/format-date";
import type { PaymentRequest } from "@/types";

export function PaymentRequestsTable({ data }: { data: PaymentRequest[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Talep No</TableHead>
          <TableHead>Firma Adı</TableHead>
          <TableHead>Açıklama</TableHead>
          <TableHead className="text-right">Tutar</TableHead>
          <TableHead>Talep Tarihi</TableHead>
          <TableHead>Durum</TableHead>
          <TableHead className="text-right">İşlem</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((r) => (
          <TableRow key={r.id}>
            <TableCell className="font-medium">{r.requestNo}</TableCell>
            <TableCell>{r.company}</TableCell>
            <TableCell className="text-muted-foreground">{r.description}</TableCell>
            <TableCell className="text-right tabular-nums">{formatCurrency(r.amount)}</TableCell>
            <TableCell>{formatDate(r.requestDate)}</TableCell>
            <TableCell>
              <StatusBadge status={r.status} />
            </TableCell>
            <TableCell className="text-right">
              {r.status === "open" ? (
                <Button size="sm" variant="success">
                  Ödeme Yapıldı
                </Button>
              ) : (
                <Button size="sm" variant="ghost">
                  Görüntüle
                </Button>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
