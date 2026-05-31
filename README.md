# 360 TGA · Yönetim Paneli (Demo)

İnşaat / şantiye / muhasebe / satın alma / proje / personel takip için modern,
kurumsal ve **tıklanabilir demo** yönetim paneli.

> Bu sürüm **mock veri** ile çalışır. Gerçek veritabanı, kimlik doğrulama (auth),
> rol/yetki sistemi ve dosya yükleme **henüz yoktur**. Mimari, ileride
> **Supabase** (Auth + Database + Storage) eklenecek şekilde hazırlanmıştır.

## Teknolojiler

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** + shadcn/ui tarzı el yapımı UI bileşenleri
- **lucide-react** (ikonlar), **Recharts** (grafikler)
- Mock veri katmanı + servis soyutlaması (ileride Supabase'e geçişe hazır)

## Kurulum ve Çalıştırma

```bash
npm install
npm run dev
```

Uygulama varsayılan olarak `http://localhost:3000` (port doluysa 3001) adresinde açılır.
Kök adres giriş ekranına (`/login`) yönlendirir; **Giriş Yap** butonu doğrudan
panele (`/dashboard`) götürür (demo, gerçek doğrulama yoktur).

## Sayfalar (Menüler)

| Menü              | Rota                   |
| ----------------- | ---------------------- |
| Dashboard         | `/dashboard`           |
| Yeni İş Oluştur   | `/new-work`            |
| Şantiye Takip     | `/construction-sites`  |
| Muhasebe Takip    | `/finance`             |
| Proje Takip       | `/projects`            |
| Satın Alma        | `/purchasing`          |
| Personel Takip    | `/personnel`           |
| Raporlar          | `/reports`             |
| Ayarlar           | `/settings`            |

## Klasör Yapısı (özet)

```
src/
├── app/                 # Sayfalar (App Router). (panel) grubu sidebar+topbar içerir.
├── components/          # layout, dashboard, forms, tables, charts, modals, ui
├── features/            # Modül bazlı feature klasörleri (auth hazır, diğerleri placeholder)
├── lib/                 # supabase (placeholder), constants, utils
├── services/            # Veri erişim katmanı (şu an mock döndürür)
├── hooks/               # Veri yükleme hook'ları
├── mock/                # Tüm demo/test/fallback verileri (KALICI)
├── types/               # Domain tipleri
└── database/            # İleride Supabase şema/migration/seed (placeholder)
```

## Supabase'e Geçiş (İleride)

Mimari, component'ler değişmeden Supabase'e geçecek şekilde kurgulanmıştır:

1. `npm install @supabase/supabase-js @supabase/ssr`
2. `.env.local.example` → `.env.local` kopyalanıp doldurulur.
3. `src/lib/supabase/client.ts` ve `server.ts` içindeki örnek kodlar etkinleştirilir.
4. `src/services/*.service.ts` içindeki mock dönüşler Supabase sorgularıyla değiştirilir.
5. **Mock veriler silinmez**; demo/test/fallback olarak kalır.

## Önemli Notlar

- Excel / PDF indirme ve dosya yükleme alanları **görseldir** (gerçek işlem yapmaz).
- Tüm ekranlar herkes tarafından görülebilir; rol/yetki ileride eklenecektir.
- Referans: `docs/ppt_text.txt` (orijinal `Yönetim Paneli.pptx` içeriği).
```
