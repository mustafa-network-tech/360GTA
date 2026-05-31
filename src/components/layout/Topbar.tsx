"use client";

import Link from "next/link";
import { Menu, Bell, Search, LogOut } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import { ROUTES } from "@/lib/constants/routes";
import { CURRENT_USER } from "@/mock/users.mock";

interface TopbarProps {
  onMenuClick: () => void;
}

export function Topbar({ onMenuClick }: TopbarProps) {
  const initials = CURRENT_USER.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-border bg-card/80 px-4 backdrop-blur lg:px-6">
      <button
        onClick={onMenuClick}
        className="rounded-md p-2 text-muted-foreground hover:bg-accent lg:hidden"
        aria-label="Menüyü aç"
      >
        <Menu className="size-5" />
      </button>

      {/* Arama */}
      <div className="relative hidden flex-1 max-w-md md:block">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          placeholder="Şantiye, proje, personel ara..."
          className="h-9 w-full rounded-md border border-input bg-background pl-9 pr-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>

      <div className="ml-auto flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative" aria-label="Bildirimler">
          <Bell className="size-5" />
          <span className="absolute right-2 top-2 size-2 rounded-full bg-destructive" />
        </Button>

        <div className="flex items-center gap-2.5 rounded-lg border border-border bg-background px-2.5 py-1.5">
          <div className="flex size-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
            {initials}
          </div>
          <div className="hidden leading-tight sm:block">
            <div className="text-sm font-medium">{CURRENT_USER.name}</div>
            <div className="text-[11px] text-muted-foreground">Yönetim</div>
          </div>
        </div>

        <Link
          href={ROUTES.login}
          aria-label="Çıkış"
          title="Çıkış"
          className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
        >
          <LogOut className="size-5" />
        </Link>
      </div>
    </header>
  );
}
