import { useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { useAppSelector } from "@/state/hooks";
import Sidebar from "@/components/Sidebar";
import Logo from "@/components/parts/Logo";
import ThemeToggle from "@/components/ThemeToggle";

const MainLayout = () => {
  const isAuthenticated = useAppSelector((s) => s.auth.isAuthenticated);
  const { pathname } = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!isAuthenticated)
    return <Navigate to={`/login?next=${encodeURIComponent(pathname)}`} replace />;

  return (
    <div className="flex h-screen overflow-hidden bg-zinc-50 dark:bg-zinc-950">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Mobile top bar */}
        <header className="flex h-14 items-center justify-between border-b border-zinc-100 bg-white px-4 dark:border-white/5 dark:bg-zinc-900 lg:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-md p-1.5 text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-white/10"
          >
            <Menu className="h-5 w-5" />
          </button>
          <Logo />
          <ThemeToggle />
        </header>

        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
