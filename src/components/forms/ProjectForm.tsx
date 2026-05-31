"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { FormField, FormNote } from "./FormField";

const COMPANIES = ["360 TGA", "ABC Yapı", "Nova İnşaat"];
const DRAWERS = ["Elif Mimar", "Can Tasarım", "Zeynep Proje"];

export function ProjectForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="Proje Adı" htmlFor="proj-name" className="sm:col-span-2">
          <Input id="proj-name" placeholder="Örn: Villa 360 Konsept" />
        </FormField>
        <FormField label="Kurumsal Firma Adı" htmlFor="proj-company">
          <Select id="proj-company" defaultValue="">
            <option value="" disabled>
              Firma seçin
            </option>
            {COMPANIES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </Select>
        </FormField>
        <FormField label="İş Emri Veren Kişi" htmlFor="proj-owner">
          <Input id="proj-owner" placeholder="Ad Soyad" />
        </FormField>
        <FormField label="Başlangıç Tarihi" htmlFor="proj-start">
          <Input id="proj-start" type="date" />
        </FormField>
        <FormField label="Tahmini Bitiş Tarihi" htmlFor="proj-end">
          <Input id="proj-end" type="date" />
        </FormField>
        <FormField label="Çizen Kişi" htmlFor="proj-drawer" className="sm:col-span-2">
          <Select id="proj-drawer" defaultValue="">
            <option value="" disabled>
              Çizen kişi seçin
            </option>
            {DRAWERS.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </Select>
        </FormField>
        <FormField label="Proje Hakkında Bilgi" htmlFor="proj-about" className="sm:col-span-2">
          <Textarea id="proj-about" placeholder="Proje kapsamı, notlar..." />
        </FormField>
      </div>

      <FormField label="Dosya Yükle">
        <FileDropzone />
      </FormField>

      <FormNote>Onaylandıktan sonra ilgili kişinin platformunda görünecektir.</FormNote>

      <div className="flex items-center gap-3">
        <Button type="submit">İş Emri Oluştur</Button>
        {submitted && <span className="text-sm font-medium text-success">Proje iş emri oluşturuldu (demo).</span>}
      </div>
    </form>
  );
}
