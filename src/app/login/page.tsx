"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Building2, Globe, Lock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { ROUTES } from "@/lib/constants/routes";
import { ROLE_OPTIONS } from "@/mock/users.mock";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Demo: gerçek doğrulama yok, doğrudan dashboard'a yönlendirir.
    setLoading(true);
    setTimeout(() => router.push(ROUTES.dashboard), 350);
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Sol görsel/tanıtım paneli */}
      <div className="relative hidden flex-col justify-between bg-sidebar p-12 text-white lg:flex">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-xl bg-sidebar-accent">
            <Building2 className="size-6" />
          </div>
          <div>
            <div className="text-lg font-bold tracking-wide">360 TGA</div>
            <div className="text-xs text-white/60">Yönetim Sistemi</div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-bold leading-tight">
            İnşaat ve şantiye süreçlerinizi
            <br />
            tek panelde yönetin
          </h2>
          <p className="max-w-md text-sm text-white/70">
            Şantiye takibi, muhasebe, satın alma, proje ve personel yönetimini kurumsal,
            modern ve tek bir ekrandan kontrol edin.
          </p>
          <ul className="grid grid-cols-2 gap-2 pt-2 text-sm text-white/80">
            {["Şantiye Takip", "Muhasebe & Finans", "Satın Alma", "Proje & Personel"].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-sidebar-accent" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-2 text-sm text-white/60">
          <Globe className="size-4" />
          www.360tga.com
        </div>
      </div>

      {/* Sağ giriş formu */}
      <div className="flex items-center justify-center bg-background p-6">
        <div className="w-full max-w-sm space-y-6">
          <div className="space-y-2 text-center lg:hidden">
            <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-primary">
              <Building2 className="size-6 text-primary-foreground" />
            </div>
            <div className="text-xl font-bold">360 TGA</div>
          </div>

          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tight">Yönetim Sistem Girişi</h1>
            <p className="text-sm text-muted-foreground">
              Devam etmek için bilgilerinizi girin.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="role">Giriş Yapacak Kişi</Label>
              <Select id="role" defaultValue={ROLE_OPTIONS[0].value}>
                {ROLE_OPTIONS.map((r) => (
                  <option key={r.value} value={r.value}>
                    {r.label}
                  </option>
                ))}
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="username">Giriş Adı</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="username" placeholder="kullanici@360tga.com" className="pl-9" defaultValue="yonetim@360tga.com" />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="password">Şifre</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="password" type="password" placeholder="••••••••" className="pl-9" defaultValue="demo1234" />
              </div>
            </div>

            <Button type="submit" className="w-full" size="lg" disabled={loading}>
              {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              Demo sürümü · gerçek kimlik doğrulama yapılmaz. Giriş doğrudan panele yönlendirir.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
