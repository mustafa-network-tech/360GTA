import { MainLayout } from "@/components/layout/MainLayout";

/**
 * Panel route grubu layout'u — tüm yönetim ekranları sidebar + topbar içinde gösterilir.
 * (panel) grubu URL'i etkilemez; rotalar /dashboard, /finance ... olarak kalır.
 */
export default function PanelLayout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
