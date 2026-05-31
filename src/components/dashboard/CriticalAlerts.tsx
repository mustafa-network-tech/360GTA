"use client";

import { AlertTriangle, Info, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils/cn";
import type { CriticalAlert } from "@/types";

const levelConfig = {
  high: { icon: AlertCircle, cls: "bg-destructive/10 text-destructive" },
  medium: { icon: AlertTriangle, cls: "bg-warning/10 text-[hsl(32_85%_38%)]" },
  low: { icon: Info, cls: "bg-blue-100 text-blue-700" },
} as const;

export function CriticalAlerts({ data }: { data: CriticalAlert[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Kritik Uyarılar</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {data.map((alert) => {
          const cfg = levelConfig[alert.level];
          const Icon = cfg.icon;
          return (
            <div key={alert.id} className="flex items-start gap-3 rounded-lg border border-border p-3">
              <div className={cn("flex size-8 shrink-0 items-center justify-center rounded-lg", cfg.cls)}>
                <Icon className="size-4" />
              </div>
              <div className="space-y-0.5">
                <p className="text-sm font-medium">{alert.title}</p>
                <p className="text-xs text-muted-foreground">{alert.description}</p>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
