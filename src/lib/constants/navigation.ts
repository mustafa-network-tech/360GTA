import {
  LayoutDashboard,
  PlusCircle,
  HardHat,
  Wallet,
  FolderKanban,
  ShoppingCart,
  Users,
  FileBarChart,
  Settings,
  type LucideIcon,
} from "lucide-react";
import { ROUTES } from "./routes";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  description?: string;
}

/**
 * Sol menüde (sidebar) gösterilecek ana navigasyon öğeleri.
 * PPT'deki ana menü yapısına göre düzenlenmiştir.
 */
export const NAV_ITEMS: NavItem[] = [
  {
    label: "Dashboard",
    href: ROUTES.dashboard,
    icon: LayoutDashboard,
    description: "Genel bakış ve özet",
  },
  {
    label: "Yeni İş Oluştur",
    href: ROUTES.newWork,
    icon: PlusCircle,
    description: "İnşaat, proje, satın alma, finans talebi",
  },
  {
    label: "Şantiye Takip",
    href: ROUTES.constructionSites,
    icon: HardHat,
    description: "Şantiye ilerleme ve maliyet",
  },
  {
    label: "Muhasebe Takip",
    href: ROUTES.finance,
    icon: Wallet,
    description: "Finans, fatura, ödeme takibi",
  },
  {
    label: "Proje Takip",
    href: ROUTES.projects,
    icon: FolderKanban,
    description: "Proje durumları",
  },
  {
    label: "Satın Alma",
    href: ROUTES.purchasing,
    icon: ShoppingCart,
    description: "Malzeme ve sipariş talepleri",
  },
  {
    label: "Personel Takip",
    href: ROUTES.personnel,
    icon: Users,
    description: "Özlük, maaş, izin takibi",
  },
  {
    label: "Raporlar",
    href: ROUTES.reports,
    icon: FileBarChart,
    description: "PDF / Excel çıktıları",
  },
  {
    label: "Ayarlar",
    href: ROUTES.settings,
    icon: Settings,
    description: "Kullanıcı, rol, liste yönetimi",
  },
];
