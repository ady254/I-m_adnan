import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { LazyBot } from "./LazyBot";
import { MobileNav } from "./MobileNav";
import { CRTOverlay } from "./CRTOverlay";

export function OSLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="desktop-bg min-h-screen flex">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        <TopBar onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 overflow-auto p-3 sm:p-4 lg:p-6 pb-28 lg:pb-28">
          <Outlet />
        </main>
      </div>

      <MobileNav />
      <LazyBot />
      <CRTOverlay />
    </div>
  );
}
