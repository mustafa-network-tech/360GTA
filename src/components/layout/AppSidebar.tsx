"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils/cn";

interface AppSidebarProps {
  open: boolean;
  onClose: () => void;
}

export function AppSidebar({ open, onClose }: AppSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobil arkaplan */}
      {open && (
        <div className="fixed inset-0 z-30 bg-black/50 lg:hidden" onClick={onClose} aria-hidden />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-sidebar text-sidebar-foreground transition-transform duration-300 lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-between gap-2 border-b border-white/10 px-5">
          <Link href="/dashboard" className="flex items-center gap-2.5">
            <div className="flex size-9 items-center justify-center rounded-lg bg-sidebar-accent">
              <Building2 className="size-5 text-white" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-bold tracking-wide">360 TGA</div>
              <div className="text-[11px] text-white/60">Yönetim Sistemi</div>
            </div>
          </Link>
          <button
            onClick={onClose}
            className="rounded-md p-1 text-white/70 hover:bg-white/10 lg:hidden"
            aria-label="Menüyü kapat"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Menü */}
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  active
                    ? "bg-sidebar-accent text-white shadow-sm"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                )}
              >
                <Icon className="size-[18px] shrink-0" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Alt bilgi */}
        <div className="border-t border-white/10 px-5 py-4">
          <div className="text-[11px] text-white/50">www.360tga.com</div>
          <div className="mt-0.5 text-[11px] text-white/40">Demo · v0.1.0</div>
        </div>
      </aside>
    </>
  );
}
