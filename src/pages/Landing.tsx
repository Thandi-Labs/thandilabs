import { accentMap, NAV_LINKS, PRODUCTS, STATS, WHY } from "@/data/landing";
import { ArrowRight, ChevronRight } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white antialiased">
      {/* ── Navbar ── */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold tracking-tight">
            Thandi<span className="text-emerald-400">Labs</span>
          </span>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/login"
              className="hidden text-sm text-zinc-400 transition-colors duration-200 hover:text-white md:block"
            >
              Sign in
            </a>
            <a
              href="/login"
              className="flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-sm font-medium text-zinc-950 transition-all duration-200 hover:bg-zinc-100"
            >
              Get started <ChevronRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden px-6 pb-24 pt-28 text-center">
        {/* radial glow */}
        <div className="pointer-events-none absolute inset-0 flex items-start justify-center">
          <div className="mt-10 h-125 w-200 rounded-full bg-emerald-500/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-3xl">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Now live — Loadr USSD v2
          </span>

          <h1 className="mb-6 text-5xl font-semibold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
            Automation &amp; fintech
            <br />
            <span className="text-zinc-400">for the real world.</span>
          </h1>

          <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
            Thandi Labs builds the software layer between hardware, mobile
            money, and offline users — so your business runs itself.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/login"
              className="group flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-emerald-400 sm:w-auto"
            >
              Start for free
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#products"
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 px-6 py-3 text-sm font-medium text-zinc-300 transition-all duration-200 hover:border-white/20 hover:text-white sm:w-auto"
            >
              See what we build
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="border-y border-white/5 bg-white/2">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-white/5 md:grid-cols-4">
          {STATS.map(({ value, label }) => (
            <div key={label} className="px-8 py-8 text-center">
              <p className="text-3xl font-semibold tracking-tight text-white">
                {value}
              </p>
              <p className="mt-1 text-sm text-zinc-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Products bento grid ── */}
      <section id="products" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 max-w-xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Product suite
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Everything you need.
            <br />
            Nothing you don't.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map(
            ({
              icon: Icon,
              accent,
              label,
              tag,
              description,
              features,
              span,
            }) => {
              const a = accentMap[accent];
              return (
                <div
                  key={label}
                  className={`group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/3 p-6 transition-all duration-300 hover:bg-white/5 ${a.border} ${span}`}
                >
                  {/* icon area */}
                  <div
                    className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 ${a.bg}`}
                  >
                    <Icon className={`h-5 w-5 ${a.icon}`} />
                  </div>

                  <span
                    className={`mb-3 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-medium ${a.tag}`}
                  >
                    {tag}
                  </span>

                  <h3 className="mb-2 text-lg font-semibold text-white">
                    {label}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-zinc-400">
                    {description}
                  </p>

                  <ul className="space-y-2">
                    {features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-zinc-400"
                      >
                        <span
                          className={`h-1.5 w-1.5 shrink-0 rounded-full ${a.dot}`}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#"
                    className={`mt-6 flex items-center gap-1 text-sm font-medium ${a.icon} opacity-0 transition-all duration-200 group-hover:opacity-100`}
                  >
                    Learn more <ChevronRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              );
            },
          )}
        </div>
      </section>

      {/* ── Why Thandi Labs ── */}
      <section className="border-t border-white/5 bg-white/2 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 max-w-xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Why us
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Opinionated software.
              <br />
              Proven in the field.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {WHY.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/[0.07] bg-white/3 p-6 transition-all duration-200 hover:border-white/12 hover:bg-white/5"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                  <Icon className="h-5 w-5 text-zinc-300" />
                </div>
                <h3 className="mb-2 font-semibold text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-12">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
            </div>
            <div className="relative">
              <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Ready to automate?
              </h2>
              <p className="mb-8 text-zinc-400">
                Join businesses across Kenya running on Thandi Labs
                infrastructure.
              </p>
              <a
                href="/login"
                className="group inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-emerald-400"
              >
                Get started free
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/5 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-zinc-500 md:flex-row">
          <span>
            Thandi<span className="text-emerald-400">Labs</span> &copy;{" "}
            {new Date().getFullYear()}
          </span>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Contact"].map((l) => (
              <a
                key={l}
                href="#"
                className="transition-colors duration-200 hover:text-zinc-300"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
