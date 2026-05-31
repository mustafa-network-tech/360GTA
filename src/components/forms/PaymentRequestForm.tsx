"use client";

import { useState } from "react";
import { StickyNote } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { FormField, FormNote } from "./FormField";

export function PaymentRequestForm() {
  const [showNote, setShowNote] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormField label="Firma Adı" htmlFor="pay-company">
        <Input id="pay-company" placeholder="Örn: Demirhan Taşeron" />
      </FormField>
      <FormField label="Açıklama" htmlFor="pay-desc">
        <Input id="pay-desc" placeholder="Ödeme konusu / açıklama" />
      </FormField>
      <FormField label="Tutar" htmlFor="pay-amount">
        <Input id="pay-amount" type="number" placeholder="0,00 ₺" />
      </FormField>

      <div className="space-y-2">
        <Button type="button" variant="outline" size="sm" onClick={() => setShowNote((v) => !v)}>
          <StickyNote className="size-4" /> Not Ekle
        </Button>
        {showNote && <Textarea placeholder="Not var ise buraya yazın..." />}
      </div>

      <FormField label="Fatura Görseli Yükle">
        <FileDropzone label="Fatura Görseli Yükle" />
      </FormField>

      <FormNote>Not var ise butona tıklanıp not eklenecektir. Talep muhasebe onayına düşer.</FormNote>

      <div className="flex items-center gap-3">
        <Button type="submit">Ödeme Talebi Oluştur</Button>
        {submitted && <span className="text-sm font-medium text-success">Ödeme talebi oluşturuldu (demo).</span>}
      </div>
    </form>
  );
}
