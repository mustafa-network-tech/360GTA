"use client";

import * as React from "react";
import { AppSidebar } from "./AppSidebar";
import { Topbar } from "./Topbar";

export function MainLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-background">
      <AppSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="lg:pl-64">
        <Topbar onMenuClick={() => setSidebarOpen(true)} />
        <main className="mx-auto w-full max-w-[1400px] space-y-6 p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
}
