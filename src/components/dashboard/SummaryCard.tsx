import * as React from "react";
import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils/cn";

interface SummaryCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  hint?: string;
  trend?: { value: string; positive?: boolean };
  accent?: "primary" | "success" | "warning" | "destructive" | "info";
}

const accentMap: Record<NonNullable<SummaryCardProps["accent"]>, string> = {
  primary: "bg-primary/10 text-primary",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-[hsl(32_85%_38%)]",
  destructive: "bg-destructive/10 text-destructive",
  info: "bg-blue-100 text-blue-700",
};

export function SummaryCard({ label, value, icon: Icon, hint, trend, accent = "primary" }: SummaryCardProps) {
  return (
    <Card className="p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
          <p className="text-2xl font-bold tracking-tight text-foreground">{value}</p>
          {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
        </div>
        <div className={cn("flex size-10 items-center justify-center rounded-lg", accentMap[accent])}>
          <Icon className="size-5" />
        </div>
      </div>
      {trend && (
        <p className={cn("mt-2 text-xs font-medium", trend.positive ? "text-success" : "text-destructive")}>
          {trend.value}
        </p>
      )}
    </Card>
  );
}
