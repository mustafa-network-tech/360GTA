"use client";

import { Users, ShieldCheck, KeyRound, HardHat, UserCog, Truck, Hash, Building2, Plus } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge, StatusBadge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MOCK_USERS, ROLE_OPTIONS } from "@/mock/users.mock";
import { MOCK_PROJECTS } from "@/mock/projects.mock";

const SITE_CHIEFS = ["Kemal Şef", "Mehmet Kaya", "Hasan Demir"];
const SUBCONTRACTORS = ["Demirhan Taşeron", "Kaya Mekanik", "Arslan Elektrik"];
const COMPANIES = ["360 TGA", "ABC Yapı", "Nova İnşaat"];
const PERMISSIONS = [
  "Şantiye görüntüleme",
  "Şantiye düzenleme",
  "Finans onaylama",
  "Fatura kesme",
  "Personel yönetimi",
  "Rapor dışa aktarma",
];

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Ayarlar"
        description="Kullanıcı, rol, yetki ve liste yönetimi. (Demo: kayıtlar görseldir, gerçek değişiklik yapılmaz.)"
      />

      <Tabs defaultValue="users">
        <TabsList>
          <TabsTrigger value="users">
            <Users className="size-4" /> Kullanıcılar
          </TabsTrigger>
          <TabsTrigger value="roles">
            <ShieldCheck className="size-4" /> Roller
          </TabsTrigger>
          <TabsTrigger value="permissions">
            <KeyRound className="size-4" /> Yetkiler
          </TabsTrigger>
          <TabsTrigger value="chiefs">
            <HardHat className="size-4" /> Şantiye Şefleri
          </TabsTrigger>
          <TabsTrigger value="personnel">
            <UserCog className="size-4" /> Personel
          </TabsTrigger>
          <TabsTrigger value="subs">
            <Truck className="size-4" /> Taşeronlar
          </TabsTrigger>
          <TabsTrigger value="codes">
            <Hash className="size-4" /> Proje Kodları
          </TabsTrigger>
          <TabsTrigger value="companies">
            <Building2 className="size-4" /> Firmalar
          </TabsTrigger>
        </TabsList>

        <TabsContent value="users">
          <SettingsCard title="Kullanıcılar" description="Sisteme giriş yapacak kullanıcılar.">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ad Soyad</TableHead>
                  <TableHead>E-posta</TableHead>
                  <TableHead>Rol</TableHead>
                  <TableHead>Durum</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {MOCK_USERS.map((u) => (
                  <TableRow key={u.id}>
                    <TableCell className="font-medium">{u.name}</TableCell>
                    <TableCell className="text-muted-foreground">{u.email}</TableCell>
                    <TableCell>
                      <Badge variant="info">
                        {ROLE_OPTIONS.find((r) => r.value === u.role)?.label ?? u.role}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <StatusBadge status="active" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </SettingsCard>
        </TabsContent>

        <TabsContent value="roles">
          <SettingsCard title="Roller" description="PPT'deki giriş yapacak kişi grupları.">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {ROLE_OPTIONS.map((r) => (
                <div key={r.value} className="flex items-center justify-between rounded-lg border border-border p-3">
                  <span className="text-sm font-medium">{r.label}</span>
                  <Badge variant="muted">{r.value}</Badge>
                </div>
              ))}
            </div>
          </SettingsCard>
        </TabsContent>

        <TabsContent value="permissions">
          <SettingsCard title="Yetkiler" description="İleride rol bazlı yetki eşlemesi burada yapılacaktır.">
            <div className="grid gap-2 sm:grid-cols-2">
              {PERMISSIONS.map((p) => (
                <label key={p} className="flex items-center gap-2 rounded-lg border border-border p-3 text-sm">
                  <input type="checkbox" defaultChecked className="size-4 accent-[hsl(221_83%_53%)]" />
                  {p}
                </label>
              ))}
            </div>
          </SettingsCard>
        </TabsContent>

        <TabsContent value="chiefs">
          <SimpleListCard title="Şantiye Şefleri Listesi" items={SITE_CHIEFS} addLabel="Şef Ekle" />
        </TabsContent>

        <TabsContent value="personnel">
          <SettingsCard
            title="Personel Listesi"
            description="Personel kayıtları Personel Takip modülünden yönetilir; burada liste bazlı eklenebilir."
          >
            <p className="text-sm text-muted-foreground">
              Tam personel yönetimi için Personel Takip sayfasını kullanın.
            </p>
          </SettingsCard>
        </TabsContent>

        <TabsContent value="subs">
          <SimpleListCard title="Taşeron Listesi" items={SUBCONTRACTORS} addLabel="Taşeron Ekle" />
        </TabsContent>

        <TabsContent value="codes">
          <SettingsCard title="Proje Kodları" description="İş emri açıldığında bu kodlar formlara düşer.">
            <div className="flex flex-wrap gap-2">
              {MOCK_PROJECTS.map((p) => (
                <Badge key={p.code} variant="outline" className="px-3 py-1">
                  {p.code} · {p.name}
                </Badge>
              ))}
            </div>
          </SettingsCard>
        </TabsContent>

        <TabsContent value="companies">
          <SimpleListCard title="Firma Bilgileri" items={COMPANIES} addLabel="Firma Ekle" />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function SettingsCard({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <div className="space-y-1">
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </div>
        <Button size="sm">
          <Plus className="size-4" /> Ekle
        </Button>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

function SimpleListCard({ title, items, addLabel }: { title: string; items: string[]; addLabel: string }) {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <CardTitle>{title}</CardTitle>
        <Button size="sm">
          <Plus className="size-4" /> {addLabel}
        </Button>
      </CardHeader>
      <CardContent className="space-y-2">
        {items.map((item) => (
          <div key={item} className="flex items-center justify-between rounded-lg border border-border px-4 py-2.5">
            <span className="text-sm font-medium">{item}</span>
            <Button variant="ghost" size="sm">
              Düzenle
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
