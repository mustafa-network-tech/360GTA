"use client";

import { useState } from "react";
import { HardHat, FolderKanban, ShoppingCart, Wallet, FileText, CreditCard, FileBarChart } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ConstructionSiteForm } from "@/components/forms/ConstructionSiteForm";
import { ProjectForm } from "@/components/forms/ProjectForm";
import { PurchaseRequestForm } from "@/components/forms/PurchaseRequestForm";
import { InvoiceRequestForm } from "@/components/forms/InvoiceRequestForm";
import { PaymentRequestForm } from "@/components/forms/PaymentRequestForm";
import { cn } from "@/lib/utils/cn";

type FinanceMode = "invoice" | "payment" | "report";

export default function NewWorkPage() {
  const [financeMode, setFinanceMode] = useState<FinanceMode>("invoice");

  const financeCards: { key: FinanceMode; title: string; icon: typeof FileText; desc: string }[] = [
    { key: "invoice", title: "Fatura Talebi Oluştur", icon: FileText, desc: "Muhasebenin keseceği fatura talebi" },
    { key: "payment", title: "Ödeme Talebi Oluştur", icon: CreditCard, desc: "Firma / taşeron ödeme talebi" },
    { key: "report", title: "Rapor Talebi Oluştur", icon: FileBarChart, desc: "Finans / muhasebe rapor talebi" },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Yeni İş Oluştur"
        description="İnşaat, proje, satın alma ve muhasebe iş emirlerini bu ekrandan oluşturun."
      />

      <Tabs defaultValue="construction">
        <TabsList>
          <TabsTrigger value="construction">
            <HardHat className="size-4" /> İnşaat
          </TabsTrigger>
          <TabsTrigger value="project">
            <FolderKanban className="size-4" /> Proje
          </TabsTrigger>
          <TabsTrigger value="purchase">
            <ShoppingCart className="size-4" /> Satın Alma
          </TabsTrigger>
          <TabsTrigger value="finance">
            <Wallet className="size-4" /> Muhasebe &amp; Finans
          </TabsTrigger>
        </TabsList>

        <TabsContent value="construction">
          <Card>
            <CardHeader>
              <CardTitle>İnşaat / Şantiye İş Emri</CardTitle>
              <CardDescription>Yeni şantiye kaydı oluşturun.</CardDescription>
            </CardHeader>
            <CardContent>
              <ConstructionSiteForm />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="project">
          <Card>
            <CardHeader>
              <CardTitle>Proje İş Emri</CardTitle>
              <CardDescription>Yeni proje kaydı oluşturun.</CardDescription>
            </CardHeader>
            <CardContent>
              <ProjectForm />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="purchase">
          <Card>
            <CardHeader>
              <CardTitle>Satın Alma İş Emri</CardTitle>
              <CardDescription>Proje koduna göre sipariş listesi oluşturun.</CardDescription>
            </CardHeader>
            <CardContent>
              <PurchaseRequestForm />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="finance">
          <div className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-3">
              {financeCards.map((c) => {
                const Icon = c.icon;
                const active = financeMode === c.key;
                return (
                  <button
                    key={c.key}
                    type="button"
                    onClick={() => setFinanceMode(c.key)}
                    className={cn(
                      "flex items-start gap-3 rounded-xl border p-4 text-left transition-all",
                      active
                        ? "border-primary bg-primary/5 ring-1 ring-primary"
                        : "border-border bg-card hover:border-primary/40 hover:bg-accent/50"
                    )}
                  >
                    <div
                      className={cn(
                        "flex size-10 items-center justify-center rounded-lg",
                        active ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      )}
                    >
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{c.title}</div>
                      <div className="text-xs text-muted-foreground">{c.desc}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>
                  {financeMode === "invoice" && "Fatura Talebi"}
                  {financeMode === "payment" && "Ödeme Talebi"}
                  {financeMode === "report" && "Rapor Talebi"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {financeMode === "invoice" && <InvoiceRequestForm />}
                {financeMode === "payment" && <PaymentRequestForm />}
                {financeMode === "report" && (
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Rapor talebi formu — istenen rapor türü ve dönem seçimi ileride buraya eklenecektir.
                    </p>
                    <InvoiceRequestForm />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
