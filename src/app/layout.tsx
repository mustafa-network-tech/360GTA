import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "360 TGA · Yönetim Paneli",
  description:
    "İnşaat, şantiye, muhasebe, satın alma, proje ve personel takip yönetim paneli.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
