"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge, StatusBadge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils/format-date";
import type { WorkOrder } from "@/types";

const typeVariant: Record<WorkOrder["type"], "default" | "info" | "warning" | "success"> = {
  "Şantiye": "warning",
  Proje: "info",
  "Satın Alma": "default",
  Finans: "success",
};

export function RecentWorkOrders({ data }: { data: WorkOrder[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Son İş Emirleri</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>İş Emri</TableHead>
              <TableHead>Tür</TableHead>
              <TableHead>Sahip</TableHead>
              <TableHead>Tarih</TableHead>
              <TableHead>Durum</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((wo) => (
              <TableRow key={wo.id}>
                <TableCell className="font-medium">{wo.title}</TableCell>
                <TableCell>
                  <Badge variant={typeVariant[wo.type]}>{wo.type}</Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{wo.owner}</TableCell>
                <TableCell className="text-muted-foreground">{formatDate(wo.date)}</TableCell>
                <TableCell>
                  <StatusBadge status={wo.status} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
