"use client";

import { useState } from "react";
import { Dialog, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/forms/FormField";
import { FINANCE_TYPES } from "@/lib/constants/statuses";
import { MOCK_BANK_ACCOUNTS } from "@/mock/finance.mock";

interface FinanceEntryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/** Nakit akış kaydı ekleme modalı (PPT slayt 12). */
export function FinanceEntryModal({ open, onOpenChange }: FinanceEntryModalProps) {
  const [saving, setSaving] = useState(false);

  function handleSave() {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      onOpenChange(false);
    }, 500);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogHeader>
        <DialogTitle>Finans Hareketi Ekle</DialogTitle>
        <DialogDescription>Nakit akış takvimine yeni bir kayıt ekleyin (demo).</DialogDescription>
      </DialogHeader>

      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="Tür" htmlFor="fe-type">
          <Select id="fe-type" defaultValue={FINANCE_TYPES[0].value}>
            {FINANCE_TYPES.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </Select>
        </FormField>
        <FormField label="Banka" htmlFor="fe-bank">
          <Select id="fe-bank" defaultValue="">
            <option value="" disabled>
              Banka seçin
            </option>
            {MOCK_BANK_ACCOUNTS.map((b) => (
              <option key={b.id} value={b.id}>
                {b.bankName}
              </option>
            ))}
          </Select>
        </FormField>
        <FormField label="Tarih" htmlFor="fe-date">
          <Input id="fe-date" type="date" />
        </FormField>
        <FormField label="Tutar" htmlFor="fe-amount">
          <Input id="fe-amount" type="number" placeholder="0,00 ₺" />
        </FormField>
        <FormField label="Kişi / Kurum" htmlFor="fe-party" className="sm:col-span-2">
          <Input id="fe-party" placeholder="Cari / firma adı" />
        </FormField>
        <FormField label="Açıklama" htmlFor="fe-desc" className="sm:col-span-2">
          <Textarea id="fe-desc" placeholder="Hareket açıklaması" />
        </FormField>
      </div>

      <DialogFooter>
        <Button variant="outline" onClick={() => onOpenChange(false)}>
          İptal
        </Button>
        <Button onClick={handleSave} disabled={saving}>
          {saving ? "Kaydediliyor..." : "Kaydet"}
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
