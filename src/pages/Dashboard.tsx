import {
  Cpu,
  Wallet,
  ShoppingBag,
  Radio,
  ArrowRight,
  TrendingUp,
  Activity,
  Zap,
  ChevronRight,
  Settings,
  ExternalLink,
} from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { useAppSelector } from "@/state/hooks";
import { useGetMyServicesQuery } from "@/state/api/authApi";

// ── Helpers ──────────────────────────────────────────────────────────────────

function getGreeting() {
  const h = new Date().getHours();
  return h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening";
}

function getDate() {
  return new Date().toLocaleDateString("en-KE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// ── Data ─────────────────────────────────────────────────────────────────────

const STATS = [
  {
    label: "Active services",
    value: "2 / 4",
    sub: "+0 this month",
    icon: Activity,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    label: "M-Pesa volume",
    value: "KES 145.2K",
    sub: "+18% vs last month",
    icon: TrendingUp,
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  {
    label: "Pool sessions",
    value: "78",
    sub: "This month",
    icon: Zap,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    label: "Uptime",
    value: "99.9%",
    sub: "Last 30 days",
    icon: Activity,
    color: "text-sky-500",
    bg: "bg-sky-500/10",
  },
];

const ACTIVE_SERVICES = [
  {
    icon: Cpu,
    label: "Pool Table Automation",
    tag: "Hardware + Software",
    accent: "emerald",
    status: "Active",
    metrics: [
      { label: "Active Tables", value: "3" },
      { label: "Sessions Today", value: "12" },
      { label: "Revenue (MTD)", value: "KES 36,000" },
      { label: "Avg. Session", value: "42 min" },
    ],
    manageHref: "/services/pool-tables",
  },
  {
    icon: Wallet,
    label: "M-Pesa Payments",
    tag: "Fintech",
    accent: "violet",
    status: "Active",
    metrics: [
      { label: "Transactions (MTD)", value: "847" },
      { label: "Volume (MTD)", value: "KES 145.2K" },
      { label: "Success Rate", value: "98.2%" },
      { label: "Avg. Ticket", value: "KES 171" },
    ],
    manageHref: "/services/payments",
  },
];

const AVAILABLE_SERVICES = [
  {
    icon: ShoppingBag,
    label: "Lipa Mdogo Mdogo",
    tag: "Retail Credit",
    accent: "amber",
    description:
      "Track hire-purchase agreements and micro-installments for your retail inventory.",
    price: "From KES 5,000 / mo",
  },
  {
    icon: Radio,
    label: "Loadr — USSD Automation",
    tag: "Infrastructure",
    accent: "sky",
    description:
      "Bridge offline users to your digital services with sub-200ms USSD session management.",
    price: "From KES 3,500 / mo",
  },
];

const accentBorder: Record<string, string> = {
  emerald: "border-t-emerald-500",
  violet: "border-t-violet-500",
  amber: "border-t-amber-500",
  sky: "border-t-sky-500",
};

const accentIcon: Record<string, string> = {
  emerald: "text-emerald-500 bg-emerald-500/10",
  violet: "text-violet-500 bg-violet-500/10",
  amber: "text-amber-500 bg-amber-500/10",
  sky: "text-sky-500 bg-sky-500/10",
};

const accentTag: Record<string, string> = {
  emerald:
    "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20",
  violet:
    "bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20",
  amber:
    "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20",
  sky: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20",
};

const accentBtn: Record<string, string> = {
  emerald:
    "text-emerald-600 hover:bg-emerald-50 dark:text-emerald-400 dark:hover:bg-emerald-500/10",
  violet:
    "text-violet-600 hover:bg-violet-50 dark:text-violet-400 dark:hover:bg-violet-500/10",
  amber:
    "text-amber-600 hover:bg-amber-50 dark:text-amber-400 dark:hover:bg-amber-500/10",
  sky: "text-sky-600 hover:bg-sky-50 dark:text-sky-400 dark:hover:bg-sky-500/10",
};

// ── Component ─────────────────────────────────────────────────────────────────

const Dashboard = () => {
  const user = useAppSelector((s) => s.auth.user);
  const displayName = user?.name || user?.email?.split("@")[0] || "there";

  const { data: Services } = useGetMyServicesQuery();

  console.log(Services, "Services");

  return (
    <div className="min-h-full">
      {/* ── Page header ── */}
      <div className="border-b border-zinc-100 bg-white px-6 py-5 dark:border-white/5 dark:bg-zinc-900">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-zinc-900 dark:text-white">
              {getGreeting()}, {displayName} 👋
            </h1>
            <p className="mt-0.5 text-sm text-zinc-400 dark:text-zinc-500">
              {getDate()}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle className="hidden lg:flex" />
            <a
              href="#expand"
              className="flex items-center gap-1.5 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-400"
            >
              Add service <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-8 space-y-10">
        {/* ── Stats ── */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map(({ label, value, sub, icon: Icon, color, bg }) => (
            <div
              key={label}
              className="rounded-xl border border-zinc-100 bg-white p-5 dark:border-white/5 dark:bg-zinc-900"
            >
              <div
                className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg ${bg}`}
              >
                <Icon className={`h-4 w-4 ${color}`} />
              </div>
              <p className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                {value}
              </p>
              <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
                {label}
              </p>
              <p className="mt-2 text-[11px] text-zinc-400 dark:text-zinc-600">
                {sub}
              </p>
            </div>
          ))}
        </div>

        {/* ── Active services ── */}
        <section>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-zinc-900 dark:text-white">
                Your services
              </h2>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                Services currently active on your plan
              </p>
            </div>
            <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              2 active
            </span>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {ACTIVE_SERVICES.map(
              ({ icon: Icon, label, tag, accent, metrics, manageHref }) => (
                <div
                  key={label}
                  className={`rounded-xl border-t-2 border border-zinc-100 bg-white pt-5 dark:border-white/5 dark:bg-zinc-900 ${accentBorder[accent]}`}
                >
                  {/* Card header */}
                  <div className="flex items-start justify-between px-5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-lg ${accentIcon[accent]}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-zinc-900 dark:text-white">
                          {label}
                        </h3>
                        <span
                          className={`mt-0.5 inline-block rounded-full px-2 py-px text-[10px] font-medium ${accentTag[accent]}`}
                        >
                          {tag}
                        </span>
                      </div>
                    </div>
                    <span className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Active
                    </span>
                  </div>

                  {/* Metrics grid */}
                  <div className="mt-5 grid grid-cols-2 divide-x divide-y divide-zinc-100 border-t border-zinc-100 dark:divide-white/5 dark:border-white/5">
                    {metrics.map(({ label: ml, value }) => (
                      <div key={ml} className="px-5 py-3">
                        <p className="text-base font-semibold text-zinc-900 dark:text-white">
                          {value}
                        </p>
                        <p className="text-xs text-zinc-400 dark:text-zinc-500">
                          {ml}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1 border-t border-zinc-100 px-4 py-3 dark:border-white/5">
                    <a
                      href={manageHref}
                      className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${accentBtn[accent]}`}
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Open dashboard
                    </a>
                    <a
                      href={`${manageHref}/settings`}
                      className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm text-zinc-400 transition-colors hover:bg-zinc-50 hover:text-zinc-700 dark:hover:bg-white/5 dark:hover:text-zinc-200"
                    >
                      <Settings className="h-3.5 w-3.5" />
                      Settings
                    </a>
                  </div>
                </div>
              ),
            )}
          </div>
        </section>

        {/* ── Available services ── */}
        <section id="expand">
          <div className="mb-4">
            <h2 className="font-semibold text-zinc-900 dark:text-white">
              Expand your stack
            </h2>
            <p className="text-sm text-zinc-400 dark:text-zinc-500">
              Add more Thandi Labs services to your plan
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {AVAILABLE_SERVICES.map(
              ({ icon: Icon, label, tag, accent, description, price }) => (
                <div
                  key={label}
                  className="group rounded-xl border border-zinc-100 bg-white p-5 transition-all duration-200 hover:border-zinc-200 hover:shadow-sm dark:border-white/5 dark:bg-zinc-900 dark:hover:border-white/10"
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg ${accentIcon[accent]}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium ${accentTag[accent]}`}
                    >
                      {tag}
                    </span>
                  </div>

                  <h3 className="mt-4 font-semibold text-zinc-900 dark:text-white">
                    {label}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {description}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      {price}
                    </p>
                    <button
                      className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-200 border ${
                        accent === "amber"
                          ? "border-amber-200 text-amber-600 hover:bg-amber-50 dark:border-amber-500/20 dark:text-amber-400 dark:hover:bg-amber-500/10"
                          : "border-sky-200 text-sky-600 hover:bg-sky-50 dark:border-sky-500/20 dark:text-sky-400 dark:hover:bg-sky-500/10"
                      }`}
                    >
                      Add to plan
                      <ChevronRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              ),
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
