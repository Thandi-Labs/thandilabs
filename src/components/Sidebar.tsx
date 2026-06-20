import type React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BarChart3,
  Cpu,
  Wallet,
  ShoppingBag,
  Radio,
  Settings,
  CreditCard,
  HelpCircle,
  LogOut,
  X,
} from "lucide-react";
import Logo from "@/components/parts/Logo";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { logout } from "@/state/slices/authSlice";

interface NavItem {
  label: string;
  icon: React.ElementType;
  to: string;
  subscribed?: boolean;
}

interface NavGroup {
  group: string;
  items: NavItem[];
}

const NAV: NavGroup[] = [
  {
    group: "Overview",
    items: [
      { label: "Dashboard", icon: LayoutDashboard, to: "/dashboard" },
      { label: "Analytics", icon: BarChart3, to: "/analytics" },
    ],
  },
  {
    group: "Services",
    items: [
      { label: "Pool Tables", icon: Cpu, to: "/services/pool-tables", subscribed: true },
      { label: "Payments", icon: Wallet, to: "/services/payments", subscribed: true },
      { label: "Lipa Mdogo Mdogo", icon: ShoppingBag, to: "/services/lipa-mdogo", subscribed: false },
      { label: "Loadr USSD", icon: Radio, to: "/services/loadr", subscribed: false },
    ],
  },
  {
    group: "Account",
    items: [
      { label: "Settings", icon: Settings, to: "/settings" },
      { label: "Billing", icon: CreditCard, to: "/billing" },
      { label: "Support", icon: HelpCircle, to: "/support" },
    ],
  },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar = ({ open, onClose }: SidebarProps) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((s) => s.auth.user);
  const displayName = user?.name || user?.email?.split("@")[0] || "User";
  const initials = displayName.slice(0, 2).toUpperCase();

  return (
    <>
      {/* Mobile backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-60 flex-col border-r border-zinc-100 bg-white transition-transform duration-300 dark:border-white/5 dark:bg-zinc-900 lg:static lg:z-auto lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo + mobile close */}
        <div className="flex h-14 items-center justify-between px-5 border-b border-zinc-100 dark:border-white/5">
          <Logo />
          <button
            onClick={onClose}
            className="lg:hidden rounded-md p-1 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
          {NAV.map(({ group, items }) => (
            <div key={group}>
              <p className="mb-1 px-2 text-[10px] font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
                {group}
              </p>
              <ul className="space-y-0.5">
                {items.map(({ label, icon: Icon, to, subscribed }) => (
                  <li key={label}>
                    <NavLink
                      to={to}
                      end
                      className={({ isActive }) =>
                        `flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors duration-150 ${
                          isActive
                            ? "bg-zinc-100 font-medium text-zinc-900 dark:bg-white/10 dark:text-white"
                            : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-800 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-zinc-200"
                        }`
                      }
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      <span className="flex-1 truncate">{label}</span>
                      {subscribed === true && (
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      )}
                      {subscribed === false && (
                        <span className="rounded-full border border-zinc-200 px-1.5 py-px text-[9px] font-medium text-zinc-400 dark:border-white/10 dark:text-zinc-500">
                          Add
                        </span>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* User footer */}
        <div className="border-t border-zinc-100 px-3 py-3 dark:border-white/5">
          <div className="flex items-center gap-3 rounded-lg px-2 py-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-semibold text-white">
              {initials}
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="truncate text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {displayName}
              </p>
              {user?.email && (
                <p className="truncate text-xs text-zinc-400 dark:text-zinc-500">
                  {user.email}
                </p>
              )}
            </div>
            <button
              onClick={() => dispatch(logout())}
              title="Sign out"
              className="rounded-md p-1.5 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-white/10 dark:hover:text-zinc-200"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
