import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";
import { getStatusConfig, type StatusVariant } from "@/lib/constants/statuses";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary/10 text-primary",
        success: "border-transparent bg-success/10 text-success",
        warning: "border-transparent bg-warning/10 text-[hsl(32_85%_38%)]",
        destructive: "border-transparent bg-destructive/10 text-destructive",
        info: "border-transparent bg-blue-100 text-blue-700",
        muted: "border-transparent bg-muted text-muted-foreground",
        outline: "border-border text-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

/** Durum anahtarına göre otomatik etiketli badge (statuses.ts ile uyumlu) */
function StatusBadge({ status, className }: { status: string; className?: string }) {
  const config = getStatusConfig(status);
  return (
    <Badge variant={config.variant as StatusVariant} className={className}>
      {config.label}
    </Badge>
  );
}

export { Badge, StatusBadge, badgeVariants };
