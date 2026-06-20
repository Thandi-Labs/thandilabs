import { accentMap, NAV_LINKS, PRODUCTS, STATS, WHY } from "@/data/landing";
import ThemeToggle from "@/components/ThemeToggle";
import { ArrowRight, ChevronRight } from "lucide-react";
import Logo from "@/components/parts/Logo";

const Landing = () => {
  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-white">
      {/* ── Navbar ── */}
      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-white/5 dark:bg-zinc-950/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Logo />

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm text-zinc-500 transition-colors duration-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="/login"
              className="hidden text-sm text-zinc-500 transition-colors duration-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white md:block"
            >
              Sign in
            </a>
            <a
              href="/login"
              className="flex items-center gap-1.5 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-zinc-700 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
            >
              Get started <ChevronRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden px-6 pb-24 pt-28 text-center">
        <div className="pointer-events-none absolute inset-0 flex items-start justify-center">
          <div className="mt-10 h-[500px] w-[800px] rounded-full bg-emerald-500/10 blur-[120px] dark:bg-emerald-500/10" />
        </div>

        <div className="relative mx-auto max-w-3xl">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500 dark:bg-emerald-400" />
            Now live — Loadr USSD v2
          </span>

          <h1 className="mb-6 text-5xl font-semibold leading-[1.1] tracking-tight text-zinc-900 dark:text-white md:text-6xl lg:text-7xl">
            Automation &amp; fintech
            <br />
            <span className="text-zinc-400 dark:text-zinc-400">
              for the real world.
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-zinc-500 dark:text-zinc-400 md:text-lg">
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
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-200 px-6 py-3 text-sm font-medium text-zinc-600 transition-all duration-200 hover:border-zinc-300 hover:text-zinc-900 dark:border-white/10 dark:text-zinc-300 dark:hover:border-white/20 dark:hover:text-white sm:w-auto"
            >
              See what we build
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="border-y border-zinc-100 bg-zinc-50 dark:border-white/5 dark:bg-white/[0.02]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-zinc-100 dark:divide-white/5 md:grid-cols-4">
          {STATS.map(({ value, label }) => (
            <div key={label} className="px-8 py-8 text-center">
              <p className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                {value}
              </p>
              <p className="mt-1 text-sm text-zinc-400 dark:text-zinc-500">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Products bento grid ── */}
      <section id="products" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 max-w-xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Product suite
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-4xl">
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
                  className={`group relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition-all duration-300 hover:bg-zinc-100 dark:border-white/[0.07] dark:bg-white/[0.03] dark:hover:bg-white/[0.05] ${a.border} ${span}`}
                >
                  <div
                    className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white transition-all duration-300 dark:border-white/10 dark:bg-white/[0.05] ${a.bg}`}
                  >
                    <Icon className={`h-5 w-5 ${a.icon}`} />
                  </div>

                  <span
                    className={`mb-3 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-medium ${a.tag}`}
                  >
                    {tag}
                  </span>

                  <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-white">
                    {label}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {description}
                  </p>

                  <ul className="space-y-2">
                    {features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400"
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
      <section className="border-t border-zinc-100 bg-zinc-50 px-6 py-24 dark:border-white/5 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 max-w-xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Why us
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-4xl">
              Opinionated software.
              <br />
              Proven in the field.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {WHY.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-200 hover:border-zinc-300 hover:shadow-sm dark:border-white/[0.07] dark:bg-white/[0.03] dark:hover:border-white/[0.12] dark:hover:bg-white/[0.05]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-100 dark:border-white/10 dark:bg-white/[0.05]">
                  <Icon className="h-5 w-5 text-zinc-500 dark:text-zinc-300" />
                </div>
                <h3 className="mb-2 font-semibold text-zinc-900 dark:text-white">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-emerald-50 p-12 dark:bg-emerald-500/5">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl dark:bg-emerald-500/10" />
            </div>
            <div className="relative">
              <h2 className="mb-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-4xl">
                Ready to automate?
              </h2>
              <p className="mb-8 text-zinc-500 dark:text-zinc-400">
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
      <footer className="border-t border-zinc-100 px-6 py-10 dark:border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-zinc-400 dark:text-zinc-500 md:flex-row">
          <span>
            <Logo />
            &copy; {new Date().getFullYear()}
          </span>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Contact"].map((l) => (
              <a
                key={l}
                href="#"
                className="transition-colors duration-200 hover:text-zinc-600 dark:hover:text-zinc-300"
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
