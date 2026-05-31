"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts";
import type { RequestDistributionDatum } from "@/types";

const labelMap: Record<string, string> = {
  purchase: "Satın Alma",
  invoice: "Fatura",
  payment: "Ödeme",
};

export function RequestDistributionChart({ data }: { data: RequestDistributionDatum[] }) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(214 32% 91%)" />
        <XAxis dataKey="month" tick={{ fontSize: 12, fill: "hsl(215 16% 47%)" }} tickLine={false} axisLine={false} />
        <YAxis tick={{ fontSize: 12, fill: "hsl(215 16% 47%)" }} tickLine={false} axisLine={false} />
        <Tooltip
          cursor={{ fill: "hsl(210 40% 96%)" }}
          formatter={(v: number, name: string) => [v, labelMap[name] ?? name]}
          contentStyle={{ borderRadius: 8, border: "1px solid hsl(214 32% 91%)", fontSize: 13 }}
        />
        <Legend formatter={(v) => labelMap[v] ?? v} wrapperStyle={{ fontSize: 12 }} />
        <Bar dataKey="purchase" stackId="a" fill="hsl(221 83% 53%)" radius={[0, 0, 0, 0]} maxBarSize={40} />
        <Bar dataKey="invoice" stackId="a" fill="hsl(199 89% 48%)" maxBarSize={40} />
        <Bar dataKey="payment" stackId="a" fill="hsl(142 71% 45%)" radius={[6, 6, 0, 0]} maxBarSize={40} />
      </BarChart>
    </ResponsiveContainer>
  );
}
