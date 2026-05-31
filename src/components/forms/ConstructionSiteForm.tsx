"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { FormField, FormNote } from "./FormField";
import { MOCK_PROJECTS } from "@/mock/projects.mock";

const SITE_CHIEFS = ["Kemal Şef", "Mehmet Kaya", "Hasan Demir"];

export function ConstructionSiteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="Şantiye Adı" htmlFor="site-name" className="sm:col-span-2">
          <Input id="site-name" placeholder="Örn: Merkez Plaza Şantiyesi" />
        </FormField>
        <FormField label="Adres" htmlFor="site-address" className="sm:col-span-2">
          <Input id="site-address" placeholder="İl / ilçe ve açık adres" />
        </FormField>
        <FormField label="Yetkili Kişi" htmlFor="site-auth">
          <Input id="site-auth" placeholder="Ad Soyad" />
        </FormField>
        <FormField label="Şantiye Şefi" htmlFor="site-chief">
          <Select id="site-chief" defaultValue="">
            <option value="" disabled>
              Listeden seçin
            </option>
            {SITE_CHIEFS.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </Select>
        </FormField>
        <FormField label="Başlangıç Tarihi" htmlFor="site-start">
          <Input id="site-start" type="date" />
        </FormField>
        <FormField label="Tahmini Bitiş Tarihi" htmlFor="site-end">
          <Input id="site-end" type="date" />
        </FormField>
        <FormField
          label="Proje Kodu"
          htmlFor="site-code"
          hint="Sisteme liste olarak eklenen kodlar arasından seçilir."
        >
          <Select id="site-code" defaultValue="">
            <option value="" disabled>
              Proje kodu seçin
            </option>
            {MOCK_PROJECTS.map((p) => (
              <option key={p.code} value={p.code}>
                {p.code} / {p.name}
              </option>
            ))}
          </Select>
        </FormField>
      </div>

      <FormField label="Dosya Yükle">
        <FileDropzone />
      </FormField>

      <FormNote>Onaylandıktan sonra ilgili kişinin platformunda görünecektir.</FormNote>

      <div className="flex items-center gap-3">
        <Button type="submit">İş Emri Oluştur</Button>
        {submitted && <span className="text-sm font-medium text-success">İş emri oluşturuldu (demo).</span>}
      </div>
    </form>
  );
}
