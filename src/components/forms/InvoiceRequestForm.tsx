"use client";

import { useState } from "react";
import { StickyNote } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { FormField, FormNote } from "./FormField";

export function InvoiceRequestForm() {
  const [showNote, setShowNote] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormField label="Firma Adı" htmlFor="inv-company">
        <Input id="inv-company" placeholder="Örn: ABC Yapı" />
      </FormField>
      <FormField label="Açıklama" htmlFor="inv-desc">
        <Input id="inv-desc" placeholder="Fatura konusu / açıklama" />
      </FormField>
      <FormField label="Tutar" htmlFor="inv-amount">
        <Input id="inv-amount" type="number" placeholder="0,00 ₺" />
      </FormField>

      <div className="space-y-2">
        <Button type="button" variant="outline" size="sm" onClick={() => setShowNote((v) => !v)}>
          <StickyNote className="size-4" /> Not Ekle
        </Button>
        {showNote && <Textarea placeholder="Not var ise buraya yazın..." />}
      </div>

      <FormField label="Dosya Yükle">
        <FileDropzone />
      </FormField>

      <FormNote>Not var ise butona tıklanıp not eklenecektir. Talep muhasebe ekranında takip edilir.</FormNote>

      <div className="flex items-center gap-3">
        <Button type="submit">Fatura Talebi Oluştur</Button>
        {submitted && <span className="text-sm font-medium text-success">Fatura talebi oluşturuldu (demo).</span>}
      </div>
    </form>
  );
}
