"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Dialog, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/forms/FormField";
import { formatCurrency } from "@/lib/utils/format-currency";

interface ApprovalModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  amount?: number;
  requestedBy?: string;
  onConfirm?: (paymentDate: string) => void;
}

/** Onay modalı — onaylandığında ödeme tarihi alanı görünür (PPT slayt 16). */
export function ApprovalModal({
  open,
  onOpenChange,
  title = "Ödeme Onayı",
  amount,
  requestedBy,
  onConfirm,
}: ApprovalModalProps) {
  const [date, setDate] = useState("");

  function handleConfirm() {
    onConfirm?.(date);
    onOpenChange(false);
    setDate("");
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2">
          <CheckCircle2 className="size-5 text-success" /> {title}
        </DialogTitle>
        <DialogDescription>
          {requestedBy ? `${requestedBy} tarafından talep edildi. ` : ""}
          Onayladıktan sonra ödeme tarihini belirleyin.
        </DialogDescription>
      </DialogHeader>

      {amount !== undefined && (
        <div className="mb-4 rounded-lg border border-border bg-muted/40 px-4 py-3">
          <span className="text-sm text-muted-foreground">Talep tutarı</span>
          <div className="text-xl font-bold">{formatCurrency(amount)}</div>
        </div>
      )}

      <FormField label="Ödeme Tarihi" htmlFor="approve-date">
        <Input id="approve-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </FormField>

      <DialogFooter>
        <Button variant="outline" onClick={() => onOpenChange(false)}>
          Vazgeç
        </Button>
        <Button variant="success" onClick={handleConfirm} disabled={!date}>
          Onayla
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
