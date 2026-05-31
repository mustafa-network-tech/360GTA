"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FormField, FormNote } from "./FormField";
import { MOCK_PROJECTS } from "@/mock/projects.mock";

const UNITS = ["adet", "m²", "m³", "m", "ton", "kg", "paket"];

interface OrderLine {
  id: number;
  material: string;
  quantity: string;
  unit: string;
  description: string;
}

let nextId = 1;

export function PurchaseRequestForm() {
  const [lines, setLines] = useState<OrderLine[]>([
    { id: nextId++, material: "", quantity: "", unit: "adet", description: "" },
  ]);
  const [submitted, setSubmitted] = useState(false);

  function addLine() {
    setLines((prev) => [...prev, { id: nextId++, material: "", quantity: "", unit: "adet", description: "" }]);
  }
  function removeLine(id: number) {
    setLines((prev) => (prev.length > 1 ? prev.filter((l) => l.id !== id) : prev));
  }
  function updateLine(id: number, patch: Partial<OrderLine>) {
    setLines((prev) => prev.map((l) => (l.id === id ? { ...l, ...patch } : l)));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormField
        label="Proje Kodu Seç"
        htmlFor="pur-code"
        hint="İş emri açıldıktan sonra proje kodları Proje Kodu / Şantiye Adı şeklinde buraya düşer."
      >
        <Select id="pur-code" defaultValue="">
          <option value="" disabled>
            Proje kodu / şantiye seçin
          </option>
          {MOCK_PROJECTS.map((p) => (
            <option key={p.code} value={p.code}>
              {p.code} / {p.name}
            </option>
          ))}
        </Select>
      </FormField>

      <div className="space-y-3 rounded-lg border border-border p-3">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold">Sipariş Listesi</h4>
          <Button type="button" variant="outline" size="sm" onClick={addLine}>
            <Plus className="size-4" /> Satır Ekle
          </Button>
        </div>

        {lines.map((line, idx) => (
          <div key={line.id} className="grid gap-2 rounded-md bg-muted/30 p-2 sm:grid-cols-12">
            <div className="sm:col-span-4">
              <Input
                placeholder={`Malzeme adı #${idx + 1}`}
                value={line.material}
                onChange={(e) => updateLine(line.id, { material: e.target.value })}
              />
            </div>
            <div className="sm:col-span-2">
              <Input
                type="number"
                placeholder="Metraj"
                value={line.quantity}
                onChange={(e) => updateLine(line.id, { quantity: e.target.value })}
              />
            </div>
            <div className="sm:col-span-2">
              <Select value={line.unit} onChange={(e) => updateLine(line.id, { unit: e.target.value })}>
                {UNITS.map((u) => (
                  <option key={u}>{u}</option>
                ))}
              </Select>
            </div>
            <div className="sm:col-span-3">
              <Input
                placeholder="Açıklama"
                value={line.description}
                onChange={(e) => updateLine(line.id, { description: e.target.value })}
              />
            </div>
            <div className="flex justify-end sm:col-span-1">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => removeLine(line.id)}
                aria-label="Satırı sil"
              >
                <Trash2 className="size-4 text-destructive" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <FormNote>Onaylandıktan sonra ilgili kişinin platformunda görünecektir.</FormNote>

      <div className="flex items-center gap-3">
        <Button type="submit">İş Emri Oluştur</Button>
        {submitted && <span className="text-sm font-medium text-success">Satın alma talebi oluşturuldu (demo).</span>}
      </div>
    </form>
  );
}
