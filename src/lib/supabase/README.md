# Supabase Entegrasyon Hazırlığı

Bu klasör, projenin **ileride** Supabase ile entegre edilmesi için hazırlanmış
placeholder yapısını içerir. **Şu anda gerçek bir bağlantı kurulmaz** ve proje,
Supabase bilgileri olmadan da çalışır.

## Mevcut Durum

- `client.ts` → Tarayıcı (browser) istemcisi için placeholder.
- `server.ts` → Sunucu (server component / route handler) istemcisi için placeholder.
- Servis katmanı (`src/services/*`) şu an `src/mock/*` verilerini döndürür.

## Entegrasyon Adımları (ileride yapılacak)

1. Gerekli paketleri kurun:

   ```bash
   npm install @supabase/supabase-js @supabase/ssr
   ```

2. `.env.local.example` dosyasını `.env.local` olarak kopyalayıp doldurun:

   ```bash
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
   SUPABASE_SERVICE_ROLE_KEY=...
   ```

3. `client.ts` ve `server.ts` içindeki yorum satırı örnek kodları etkinleştirin.

4. `src/services/*.service.ts` dosyalarındaki `// MOCK` bölümlerini Supabase
   sorgularıyla değiştirin. **Component'ler ve sayfalar değişmez.**

5. `src/database/` altındaki şema/migration/seed dosyalarını uygulayın.

## Önemli Kural

> Mock veriler (`src/mock`) **silinmez**. Supabase bağlandıktan sonra da
> demo / test / fallback amacıyla projede kalır.
