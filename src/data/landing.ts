import {
  Cpu,
  Wallet,
  ShoppingBag,
  Radio,
  Zap,
  Shield,
  Globe,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Products", href: "#products" },
  { label: "Solutions", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Docs", href: "#" },
];

export const PRODUCTS = [
  {
    icon: Cpu,
    accent: "emerald",
    label: "Pool Table Automation",
    tag: "Hardware + Software",
    description:
      "End-to-end automation for physical pool tables — session control, remote monitoring, and built-in revenue tracking from a single dashboard.",
    features: [
      "Auto session start/stop",
      "Real-time usage analytics",
      "Remote lock & unlock",
    ],
    span: "lg:col-span-2",
  },
  {
    icon: Wallet,
    accent: "violet",
    label: "M-Pesa Payments",
    tag: "Fintech",
    description:
      "Production-grade M-Pesa STK push, C2B, and B2C flows purpose-built for local merchants — no middleware, no surprises.",
    features: [
      "STK Push & C2B/B2C",
      "Instant reconciliation",
      "Webhook delivery",
    ],
    span: "lg:col-span-1",
  },
  {
    icon: ShoppingBag,
    accent: "amber",
    label: "Lipa Mdogo Mdogo",
    tag: "Retail Credit",
    description:
      "Structured micro-installment software for retailers. Track hire-purchase agreements, send automated reminders, and close the loop on inventory financing.",
    features: ["Installment scheduling", "SMS reminders", "Inventory tie-in"],
    span: "lg:col-span-1",
  },
  {
    icon: Radio,
    accent: "sky",
    label: "Loadr — USSD Automation",
    tag: "Infrastructure",
    description:
      "High-availability USSD session management that bridges offline users to your digital services. Fast, scriptable, and carrier-agnostic.",
    features: ["Sub-200ms response", "Multi-carrier support", "Flow builder"],
    span: "lg:col-span-2",
  },
];

export const STATS = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "<200ms", label: "USSD Latency" },
  { value: "10k+", label: "Transactions / day" },
  { value: "5+", label: "Active integrations" },
];

export const WHY = [
  {
    icon: Zap,
    title: "Built for speed",
    body: "Every API is optimized for the latency constraints of USSD and mobile-money workflows.",
  },
  {
    icon: Shield,
    title: "Secure by default",
    body: "End-to-end encryption, webhook signature verification, and role-based access out of the box.",
  },
  {
    icon: Globe,
    title: "Localized first",
    body: "Designed around the Kenyan market — Safaricom, Airtel, and local retail patterns baked in.",
  },
];

export const accentMap: Record<
  string,
  { border: string; bg: string; icon: string; tag: string; dot: string }
> = {
  emerald: {
    border: "hover:border-emerald-500/40",
    bg: "group-hover:bg-emerald-500/10",
    icon: "text-emerald-400",
    tag: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    dot: "bg-emerald-400",
  },
  violet: {
    border: "hover:border-violet-500/40",
    bg: "group-hover:bg-violet-500/10",
    icon: "text-violet-400",
    tag: "bg-violet-500/10 text-violet-400 border border-violet-500/20",
    dot: "bg-violet-400",
  },
  amber: {
    border: "hover:border-amber-500/40",
    bg: "group-hover:bg-amber-500/10",
    icon: "text-amber-400",
    tag: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
    dot: "bg-amber-400",
  },
  sky: {
    border: "hover:border-sky-500/40",
    bg: "group-hover:bg-sky-500/10",
    icon: "text-sky-400",
    tag: "bg-sky-500/10 text-sky-400 border border-sky-500/20",
    dot: "bg-sky-400",
  },
};
