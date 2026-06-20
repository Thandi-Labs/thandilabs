import { Cpu, Wallet, ShoppingBag, Radio } from "lucide-react";
import Logo from "./parts/Logo";

const PILLARS = [
  { icon: Cpu, label: "Pool table automation — hardware meets software" },
  { icon: Wallet, label: "M-Pesa collection — built for local merchants" },
  { icon: ShoppingBag, label: "Lipa Mdogo Mdogo — micro-installment tracking" },
  { icon: Radio, label: "Loadr USSD — offline-to-online infrastructure" },
];

const AuthBranding = () => (
  <div className="relative hidden overflow-hidden bg-zinc-950 lg:flex lg:flex-col lg:justify-between p-12">
    {/* Radial glow */}
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.12),transparent_60%)]" />
    {/* Subtle grid */}
    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[48px_48px]" />

    <div className="relative">
      <Logo />
    </div>

    <div className="relative space-y-10">
      <div>
        <h2 className="mb-3 text-3xl font-semibold leading-tight tracking-tight text-white">
          The infrastructure layer for modern Kenyan businesses.
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          One platform. Four pillars. Everything your business needs to
          automate, collect, and scale.
        </p>
      </div>

      <ul className="space-y-3">
        {PILLARS.map(({ icon: Icon, label }) => (
          <li key={label} className="flex items-center gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10">
              <Icon className="h-4 w-4 text-emerald-400" />
            </div>
            <span className="text-sm text-zinc-300">{label}</span>
          </li>
        ))}
      </ul>
    </div>

    <p className="relative text-xs text-zinc-600">
      &copy; {new Date().getFullYear()} Thandi Labs. All rights reserved.
    </p>
  </div>
);

export default AuthBranding;
