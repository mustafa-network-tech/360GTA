"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts";
import type { FinanceMovementDatum } from "@/types";

const fmt = (v: number) => `${(v / 1_000_000).toFixed(1)}M`;

export function FinanceMovementChart({ data }: { data: FinanceMovementDatum[] }) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <AreaChart data={data} margin={{ top: 8, right: 8, left: -8, bottom: 0 }}>
        <defs>
          <linearGradient id="incomeFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(142 71% 45%)" stopOpacity={0.35} />
            <stop offset="95%" stopColor="hsl(142 71% 45%)" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="paymentFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(0 72% 51%)" stopOpacity={0.3} />
            <stop offset="95%" stopColor="hsl(0 72% 51%)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(214 32% 91%)" />
        <XAxis dataKey="month" tick={{ fontSize: 12, fill: "hsl(215 16% 47%)" }} tickLine={false} axisLine={false} />
        <YAxis tick={{ fontSize: 12, fill: "hsl(215 16% 47%)" }} tickLine={false} axisLine={false} tickFormatter={fmt} />
        <Tooltip
          formatter={(v: number, name) => [
            new Intl.NumberFormat("tr-TR").format(v) + " ₺",
            name === "income" ? "Gelir" : "Ödeme",
          ]}
          contentStyle={{ borderRadius: 8, border: "1px solid hsl(214 32% 91%)", fontSize: 13 }}
        />
        <Legend
          formatter={(v) => (v === "income" ? "Gelir" : "Ödeme")}
          wrapperStyle={{ fontSize: 12 }}
        />
        <Area type="monotone" dataKey="income" stroke="hsl(142 71% 45%)" strokeWidth={2} fill="url(#incomeFill)" />
        <Area type="monotone" dataKey="payment" stroke="hsl(0 72% 51%)" strokeWidth={2} fill="url(#paymentFill)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
