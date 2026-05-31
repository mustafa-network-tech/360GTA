"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from "recharts";
import type { SiteProgressDatum } from "@/types";

export function SiteProgressChart({ data }: { data: SiteProgressDatum[] }) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(214 32% 91%)" />
        <XAxis dataKey="site" tick={{ fontSize: 12, fill: "hsl(215 16% 47%)" }} tickLine={false} axisLine={false} />
        <YAxis
          tick={{ fontSize: 12, fill: "hsl(215 16% 47%)" }}
          tickLine={false}
          axisLine={false}
          domain={[0, 100]}
          unit="%"
        />
        <Tooltip
          cursor={{ fill: "hsl(210 40% 96%)" }}
          formatter={(v: number) => [`%${v}`, "Tamamlanma"]}
          contentStyle={{ borderRadius: 8, border: "1px solid hsl(214 32% 91%)", fontSize: 13 }}
        />
        <Bar dataKey="completion" radius={[6, 6, 0, 0]} maxBarSize={56}>
          {data.map((d, i) => (
            <Cell
              key={i}
              fill={d.completion >= 100 ? "hsl(142 71% 45%)" : d.completion >= 50 ? "hsl(221 83% 53%)" : "hsl(38 92% 50%)"}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
