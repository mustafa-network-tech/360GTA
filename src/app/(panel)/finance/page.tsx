"use client";

import { useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  Activity,
  Wallet,
  Plus,
  Landmark,
  CheckCircle2,
  XCircle,
  FileSpreadsheet,
} from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { SummaryCard } from "@/components/dashboard/SummaryCard";
import { FinanceCashFlowTable } from "@/components/tables/FinanceCashFlowTable";
import { InvoiceRequestsTable } from "@/components/tables/InvoiceRequestsTable";
import { PaymentRequestsTable } from "@/components/tables/PaymentRequestsTable";
import { FinanceEntryModal } from "@/components/modals/FinanceEntryModal";
import { ApprovalModal } from "@/components/modals/ApprovalModal";
import { RejectReasonModal } from "@/components/modals/RejectReasonModal";
import { useFinance } from "@/hooks/use-finance";
import { formatCurrency, formatAccounting } from "@/lib/utils/format-currency";
import { formatDate } from "@/lib/utils/format-date";
import { MOCK_CONSTRUCTION_SITES } from "@/mock/construction-sites.mock";
import type { PaymentDemand } from "@/types";
import { cn } from "@/lib/utils/cn";

export default function FinancePage() {
  const { summary, banks, cashFlow, invoiceRequests, paymentRequests, paymentDemands, subcontractors } = useFinance();
  const [entryOpen, setEntryOpen] = useState(false);
  const [approveTarget, setApproveTarget] = useState<PaymentDemand | null>(null);
  const [rejectTarget, setRejectTarget] = useState<PaymentDemand | null>(null);

  const s = summary.data;
  const openInvoices = invoiceRequests.data.filter((r) => r.status === "open").length;
  const invoicedCount = invoiceRequests.data.filter((r) => r.status === "invoiced").length;
  const openPayments = paymentRequests.data.filter((r) => r.status === "open").length;
  const paidCount = paymentRequests.data.filter((r) => r.status === "paid").length;

  return (
    <div className="space-y-6">
      <PageHeader title="Muhasebe Takip" description="Finans durumu, fatura, ödeme ve cari takipleri." />

      <Tabs defaultValue="general">
        <TabsList>
          <TabsTrigger value="general">Genel Finans Durumu</TabsTrigger>
          <TabsTrigger value="invoice">Fatura Kesim Talebi</TabsTrigger>
          <TabsTrigger value="payment">Ödeme Talebi Takip</TabsTrigger>
          <TabsTrigger value="demand">Ödeme İstek Talebi</TabsTrigger>
          <TabsTrigger value="site">Şantiye Muhasebesi</TabsTrigger>
          <TabsTrigger value="sub">Taşeron Finans</TabsTrigger>
          <TabsTrigger value="personnel">Personel Finans</TabsTrigger>
        </TabsList>

        {/* GENEL FİNANS DURUMU */}
        <TabsContent value="general">
          <div className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <SummaryCard label="Toplam Gelir" value={formatCurrency(s.totalIncome)} icon={TrendingUp} accent="success" />
              <SummaryCard label="Toplam Ödeme" value={formatCurrency(s.totalPayment)} icon={TrendingDown} accent="destructive" />
              <SummaryCard
                label="Net Hareketlilik"
                value={formatAccounting(s.netMovement)}
                icon={Activity}
                accent={s.netMovement >= 0 ? "success" : "destructive"}
              />
              <SummaryCard label="Son Bakiye (Tahmin)" value={formatCurrency(s.estimatedBalance)} icon={Wallet} accent="info" />
            </div>

            {/* Banka bilgileri */}
            <div className="grid gap-3 sm:grid-cols-3">
              {banks.data.map((b) => (
                <Card key={b.id}>
                  <CardContent className="space-y-2 pt-5">
                    <div className="flex items-center gap-2">
                      <Landmark className="size-4 text-primary" />
                      <span className="font-semibold">{b.bankName}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">{b.iban}</div>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs text-muted-foreground">Başlangıç Bakiyesi</span>
                      <span className="text-sm font-semibold tabular-nums">{formatCurrency(b.openingBalance)}</span>
                    </div>
                    <div className="text-[11px] text-muted-foreground">Güncelleme: {formatDate(b.updatedAt)}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Nakit akış takvimi */}
            <Card>
              <CardHeader className="flex-row items-center justify-between space-y-0">
                <CardTitle>Nakit Akış Takvimi</CardTitle>
                <Button onClick={() => setEntryOpen(true)}>
                  <Plus className="size-4" /> Ekle
                </Button>
              </CardHeader>
              <CardContent className="px-0">
                <FinanceCashFlowTable data={cashFlow.data} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* FATURA KESİM TALEBİ */}
        <TabsContent value="invoice">
          <div className="space-y-4">
            <CountCards
              total={invoiceRequests.data.length}
              done={invoicedCount}
              open={openInvoices}
              doneLabel="Kesilen Fatura"
              openLabel="Açık Fatura Talebi"
            />
            <Card>
              <CardHeader>
                <CardTitle>Fatura Kesim Talepleri</CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <InvoiceRequestsTable data={invoiceRequests.data} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* ÖDEME TALEBİ TAKİP */}
        <TabsContent value="payment">
          <div className="space-y-4">
            <CountCards
              total={paymentRequests.data.length}
              done={paidCount}
              open={openPayments}
              doneLabel="Ödenen İşlem"
              openLabel="Açık Ödeme Talebi"
            />
            <Card>
              <CardHeader>
                <CardTitle>Ödeme Talepleri</CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <PaymentRequestsTable data={paymentRequests.data} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* ÖDEME İSTEK TALEBİ — onay/red */}
        <TabsContent value="demand">
          <Card>
            <CardHeader>
              <CardTitle>Ödeme İstek Talebi</CardTitle>
              <CardDescription>Kullanıcılardan gelen ödeme taleplerini onaylayın veya reddedin.</CardDescription>
            </CardHeader>
            <CardContent className="px-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Talep Eden</TableHead>
                    <TableHead className="text-right">Tutar</TableHead>
                    <TableHead>Açıklama</TableHead>
                    <TableHead>Fatura Görseli</TableHead>
                    <TableHead>Durum</TableHead>
                    <TableHead className="text-right">İşlem</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paymentDemands.data.map((d) => (
                    <TableRow key={d.id}>
                      <TableCell className="font-medium">{d.requestedBy}</TableCell>
                      <TableCell className="text-right tabular-nums">{formatCurrency(d.amount)}</TableCell>
                      <TableCell className="text-muted-foreground">{d.description}</TableCell>
                      <TableCell>
                        {d.invoiceImage ? (
                          <Badge variant="info">{d.invoiceImage}</Badge>
                        ) : (
                          <span className="text-xs text-muted-foreground">-</span>
                        )}
                      </TableCell>
                      <TableCell>
                        {d.status === "pending" && <Badge variant="warning">Beklemede</Badge>}
                        {d.status === "approved" && (
                          <Badge variant="success">Onaylandı · {formatDate(d.paymentDate)}</Badge>
                        )}
                        {d.status === "rejected" && <Badge variant="destructive">Reddedildi</Badge>}
                      </TableCell>
                      <TableCell className="text-right">
                        {d.status === "pending" ? (
                          <div className="flex justify-end gap-2">
                            <Button size="sm" variant="success" onClick={() => setApproveTarget(d)}>
                              <CheckCircle2 className="size-4" /> Onay
                            </Button>
                            <Button size="sm" variant="destructive" onClick={() => setRejectTarget(d)}>
                              <XCircle className="size-4" /> Red
                            </Button>
                          </div>
                        ) : (
                          <Button size="sm" variant="ghost">
                            Görüntüle
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ŞANTİYE MUHASEBESİ */}
        <TabsContent value="site">
          <SiteAccountingTab />
        </TabsContent>

        {/* TAŞERON FİNANS */}
        <TabsContent value="sub">
          <Card>
            <CardHeader>
              <CardTitle>Taşeron Finans Takip</CardTitle>
              <CardDescription>Taşeronlara yapılan ödeme ve kesilen faturalar.</CardDescription>
            </CardHeader>
            <CardContent className="px-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Taşeron</TableHead>
                    <TableHead>Tarih</TableHead>
                    <TableHead>Açıklama</TableHead>
                    <TableHead>Tür</TableHead>
                    <TableHead className="text-right">Tutar</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {subcontractors.data.map((e) => (
                    <TableRow key={e.id}>
                      <TableCell className="font-medium">{e.subcontractor}</TableCell>
                      <TableCell>{formatDate(e.date)}</TableCell>
                      <TableCell className="text-muted-foreground">{e.description}</TableCell>
                      <TableCell>
                        <Badge variant={e.type === "payment" ? "destructive" : "info"}>
                          {e.type === "payment" ? "Ödeme" : "Fatura"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right tabular-nums">{formatCurrency(e.amount)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* PERSONEL FİNANS */}
        <TabsContent value="personnel">
          <Card>
            <CardContent className="py-10 text-center">
              <Wallet className="mx-auto mb-3 size-8 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                Personel maaş, avans, ödeme ve kesinti geçmişi için
                <a href="/personnel" className="ml-1 font-medium text-primary hover:underline">
                  Personel Takip
                </a>{" "}
                sayfasını kullanın.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Modallar */}
      <FinanceEntryModal open={entryOpen} onOpenChange={setEntryOpen} />
      <ApprovalModal
        open={!!approveTarget}
        onOpenChange={(o) => !o && setApproveTarget(null)}
        amount={approveTarget?.amount}
        requestedBy={approveTarget?.requestedBy}
      />
      <RejectReasonModal open={!!rejectTarget} onOpenChange={(o) => !o && setRejectTarget(null)} />
    </div>
  );
}

/** Talep / tamamlanma sayaç kartları + kırmızı/yeşil uyarı (PPT slayt 14-15). */
function CountCards({
  total,
  done,
  open,
  doneLabel,
  openLabel,
}: {
  total: number;
  done: number;
  open: number;
  doneLabel: string;
  openLabel: string;
}) {
  const balanced = open === 0;
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <Card className="p-4">
        <p className="text-xs font-medium uppercase text-muted-foreground">Talep Sayısı</p>
        <p className="text-2xl font-bold">{total}</p>
      </Card>
      <Card className="p-4">
        <p className="text-xs font-medium uppercase text-muted-foreground">{doneLabel}</p>
        <p className="text-2xl font-bold">{done}</p>
      </Card>
      <Card className={cn("p-4", balanced ? "border-success/40 bg-success/5" : "border-destructive/40 bg-destructive/5")}>
        <p className="text-xs font-medium uppercase text-muted-foreground">{openLabel}</p>
        <div className="flex items-center justify-between">
          <p className={cn("text-2xl font-bold", balanced ? "text-success" : "text-destructive")}>{open}</p>
          <Badge variant={balanced ? "success" : "destructive"}>
            {balanced ? "Dengeli" : "Açık kayıt var"}
          </Badge>
        </div>
      </Card>
    </div>
  );
}

/** Şantiye muhasebesi alt sekmesi (PPT slayt 17). */
function SiteAccountingTab() {
  const [siteId, setSiteId] = useState(MOCK_CONSTRUCTION_SITES[0].id);
  const site = MOCK_CONSTRUCTION_SITES.find((s) => s.id === siteId)!;
  const [showInvoices, setShowInvoices] = useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Şantiye Muhasebesi Takibi</CardTitle>
        <CardDescription>Şantiye seçerek anlaşma tutarı, maliyet ve işlenen faturaları görüntüleyin.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="max-w-sm space-y-1.5">
          <label className="text-sm font-medium">Şantiye Seç</label>
          <Select value={siteId} onChange={(e) => setSiteId(e.target.value)}>
            {MOCK_CONSTRUCTION_SITES.map((s) => (
              <option key={s.id} value={s.id}>
                {s.projectCode} / {s.name}
              </option>
            ))}
          </Select>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <Card className="p-4">
            <p className="text-xs uppercase text-muted-foreground">Anlaşma Tutarı</p>
            <p className="text-xl font-bold tabular-nums">{formatCurrency(site.agreementAmount)}</p>
          </Card>
          <Card className="p-4">
            <p className="text-xs uppercase text-muted-foreground">Maliyet</p>
            <p className="text-xl font-bold tabular-nums">{formatCurrency(site.cost)}</p>
          </Card>
          <Card className="p-4">
            <p className="text-xs uppercase text-muted-foreground">Şantiye Masrafı</p>
            <p className="text-xl font-bold tabular-nums">{formatCurrency(site.siteExpense)}</p>
          </Card>
        </div>

        <Button variant="outline" onClick={() => setShowInvoices((v) => !v)}>
          <FileSpreadsheet className="size-4" /> İşlenen Faturalar {showInvoices ? "(gizle)" : "(göster)"}
        </Button>

        {showInvoices && (
          <div className="overflow-hidden rounded-lg border border-border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Fatura No</TableHead>
                  <TableHead>Firma</TableHead>
                  <TableHead>Tarih</TableHead>
                  <TableHead className="text-right">Tutar</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { no: "F-001", firma: "Nova İnşaat", tarih: "2026-05-02", tutar: 480000 },
                  { no: "F-002", firma: "Arslan Elektrik", tarih: "2026-05-09", tutar: 145000 },
                  { no: "F-003", firma: "Kaya Mekanik", tarih: "2026-05-14", tutar: 95000 },
                ].map((f) => (
                  <TableRow key={f.no}>
                    <TableCell className="font-medium">{f.no}</TableCell>
                    <TableCell>{f.firma}</TableCell>
                    <TableCell>{formatDate(f.tarih)}</TableCell>
                    <TableCell className="text-right tabular-nums">{formatCurrency(f.tutar)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
