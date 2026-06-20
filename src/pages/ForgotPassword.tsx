import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, MailCheck } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // trigger password reset email here
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-zinc-950">
      {/* Top bar */}
      <div className="flex items-center justify-between px-8 pt-8">
        <Link
          to="/login"
          className="flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to login
        </Link>
        <ThemeToggle />
      </div>

      {/* Content */}
      <div className="flex flex-1 items-center justify-center px-8 py-12">
        <div className="w-full max-w-sm">
          {!submitted ? (
            <>
              <div className="mb-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10">
                  <MailCheck className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />
                </div>
                <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                  Forgot your password?
                </h1>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  Enter your email and we'll send you a reset link.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Email address
                  </label>
                  <input
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 transition-all duration-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-white/10 dark:bg-white/[0.05] dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-emerald-500 dark:focus:ring-emerald-500/20"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-emerald-400 active:scale-[0.98]"
                >
                  Send reset link
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>
              </form>
            </>
          ) : (
            /* ── Success state ── */
            <div className="text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10">
                <MailCheck className="h-6 w-6 text-emerald-500 dark:text-emerald-400" />
              </div>
              <h1 className="mb-2 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                Check your inbox
              </h1>
              <p className="mb-1 text-sm text-zinc-500 dark:text-zinc-400">
                We sent a reset link to
              </p>
              <p className="mb-8 text-sm font-medium text-zinc-900 dark:text-white">{email}</p>

              <p className="mb-6 text-xs text-zinc-400 dark:text-zinc-500">
                Didn't receive it? Check your spam folder or{" "}
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-emerald-600 hover:underline dark:text-emerald-400"
                >
                  try again
                </button>
                .
              </p>

              <Link
                to="/login"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
