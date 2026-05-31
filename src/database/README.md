# Veritabanı (Supabase) — Hazırlık Klasörü

Bu klasör, projenin **ileride** Supabase PostgreSQL şemasıyla entegre edileceği
zaman kullanılacak dosyaları barındırır. **Şu anda boş/placeholder durumdadır**
ve uygulama bu dosyalar olmadan da çalışır.

## Yapı

- `schemas/` → Tablo tanımları (DDL). Mock tiplerle (`src/types`) birebir uyumlu olacak.
- `migrations/` → Sıralı SQL migration dosyaları.
- `seed/` → Demo verisini (mock ile aynı) Supabase'e yüklemek için seed SQL'leri.

## Önerilen Tablolar (mock yapısına göre)

| Tablo                 | Karşılık gelen tip (`src/types`) |
| --------------------- | -------------------------------- |
| `construction_sites`  | `ConstructionSite`               |
| `site_stages`         | `SiteStage`                      |
| `projects`            | `Project`                        |
| `bank_accounts`       | `BankAccount`                    |
| `cash_flow_entries`   | `CashFlowEntry`                  |
| `invoice_requests`    | `InvoiceRequest`                 |
| `payment_requests`    | `PaymentRequest`                 |
| `payment_demands`     | `PaymentDemand`                  |
| `purchase_items`      | `PurchaseItem`                   |
| `personnel`           | `Personnel`                      |
| `reports`             | `ReportCard`                     |

## Notlar

- Mock veriler (`src/mock`) **silinmez**; seed dosyaları bu verilerden türetilebilir.
- RLS (Row Level Security) politikaları rol/yetki sistemi eklenince tanımlanacaktır.
