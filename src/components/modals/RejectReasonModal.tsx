"use client";

import { useState } from "react";
import { XCircle } from "lucide-react";
import { Dialog, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/forms/FormField";

interface RejectReasonModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm?: (reason: string) => void;
}

/** Red modalı — red seçilirse neden için not alanı görünür (PPT slayt 16). */
export function RejectReasonModal({ open, onOpenChange, onConfirm }: RejectReasonModalProps) {
  const [reason, setReason] = useState("");

  function handleConfirm() {
    onConfirm?.(reason);
    onOpenChange(false);
    setReason("");
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2">
          <XCircle className="size-5 text-destructive" /> Talebi Reddet
        </DialogTitle>
        <DialogDescription>Red nedenini belirtin. Talep sahibine iletilecektir.</DialogDescription>
      </DialogHeader>

      <FormField label="Red Nedeni" htmlFor="reject-reason">
        <Textarea
          id="reject-reason"
          placeholder="Örn: Fatura görseli okunaklı değil, yeniden yükleyin."
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
      </FormField>

      <DialogFooter>
        <Button variant="outline" onClick={() => onOpenChange(false)}>
          Vazgeç
        </Button>
        <Button variant="destructive" onClick={handleConfirm} disabled={!reason.trim()}>
          Reddet
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
