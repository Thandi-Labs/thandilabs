import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Eye, EyeOff, Check, X, ArrowRight, Loader2, ShieldCheck } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { useResetPasswordMutation } from "@/state/api/authApi";

const REQUIREMENTS = [
  { label: "At least 8 characters", test: (p: string) => p.length >= 8 },
  { label: "One uppercase letter", test: (p: string) => /[A-Z]/.test(p) },
  { label: "One number", test: (p: string) => /[0-9]/.test(p) },
  { label: "One special character", test: (p: string) => /[^A-Za-z0-9]/.test(p) },
];

function extractError(error: unknown): string {
  if (!error) return "";
  const e = error as { data?: { detail?: string | { msg: string }[] } };
  const detail = e.data?.detail;
  if (typeof detail === "string") return detail;
  if (Array.isArray(detail)) return detail.map((d) => d.msg).join(", ");
  return "Password reset failed. The link may have expired.";
}

const ResetPassword = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [resetPassword, { isLoading, error }] = useResetPasswordMutation();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [done, setDone] = useState(false);

  const token = searchParams.get("token") ?? "";
  const metCount = REQUIREMENTS.filter((r) => r.test(password)).length;
  const passwordsMatch = confirm.length > 0 && password === confirm;
  const passwordsMismatch = confirm.length > 0 && password !== confirm;

  const handleSubmit = async (e: { preventDefault(): void }) => {
    e.preventDefault();
    if (passwordsMismatch || metCount < 4) return;
    try {
      await resetPassword({ token, new_password: password }).unwrap();
      setDone(true);
    } catch {
      // error captured by RTK Query
    }
  };

  const errorMessage = extractError(error);

  // Missing or malformed token guard
  if (!token) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-white px-8 dark:bg-zinc-950">
        <div className="w-full max-w-sm text-center">
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-red-200 bg-red-50 dark:border-red-500/20 dark:bg-red-500/10">
            <X className="h-5 w-5 text-red-500" />
          </div>
          <h1 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-white">Invalid reset link</h1>
          <p className="mb-6 text-sm text-zinc-500 dark:text-zinc-400">
            This link is missing a reset token. Please request a new one.
          </p>
          <Link
            to="/forgot-password"
            className="text-sm font-medium text-emerald-600 hover:underline dark:text-emerald-400"
          >
            Request a new link →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-zinc-950">
      {/* Top bar */}
      <div className="flex items-center justify-between px-8 pt-8">
        <Link
          to="/login"
          className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
        >
          ← Back to login
        </Link>
        <ThemeToggle />
      </div>

      <div className="flex flex-1 items-center justify-center px-8 py-12">
        <div className="w-full max-w-sm">
          {!done ? (
            <>
              <div className="mb-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10">
                  <ShieldCheck className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />
                </div>
                <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                  Set a new password
                </h1>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  Choose a strong password for your account.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMessage && (
                  <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400">
                    {errorMessage}
                  </div>
                )}

                {/* New password */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    New password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      autoComplete="new-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-2.5 pr-11 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 transition-all duration-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-emerald-500 dark:focus:ring-emerald-500/20"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 transition-colors hover:text-zinc-600 dark:hover:text-zinc-200"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>

                  {/* Requirements checklist */}
                  {password.length > 0 && (
                    <ul className="mt-3 grid grid-cols-2 gap-1">
                      {REQUIREMENTS.map(({ label, test }) => {
                        const met = test(password);
                        return (
                          <li key={label} className="flex items-center gap-1.5">
                            {met
                              ? <Check className="h-3 w-3 text-emerald-500" />
                              : <X className="h-3 w-3 text-zinc-300 dark:text-zinc-600" />
                            }
                            <span className={`text-[11px] ${met ? "text-zinc-600 dark:text-zinc-300" : "text-zinc-400 dark:text-zinc-500"}`}>
                              {label}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>

                {/* Confirm password */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Confirm new password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirm ? "text" : "password"}
                      autoComplete="new-password"
                      required
                      value={confirm}
                      onChange={(e) => setConfirm(e.target.value)}
                      placeholder="••••••••"
                      className={`w-full rounded-lg border px-4 py-2.5 pr-11 text-sm outline-none placeholder:text-zinc-400 transition-all duration-200 focus:ring-2 bg-white text-zinc-900 dark:bg-white/5 dark:text-white dark:placeholder:text-zinc-500 ${
                        passwordsMismatch
                          ? "border-red-400 focus:border-red-400 focus:ring-red-500/20 dark:border-red-500/60"
                          : passwordsMatch
                          ? "border-emerald-500 focus:border-emerald-500 focus:ring-emerald-500/20"
                          : "border-zinc-200 focus:border-emerald-500 focus:ring-emerald-500/20 dark:border-white/10 dark:focus:border-emerald-500 dark:focus:ring-emerald-500/20"
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 transition-colors hover:text-zinc-600 dark:hover:text-zinc-200"
                    >
                      {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  {passwordsMismatch && (
                    <p className="mt-1.5 text-xs text-red-500">Passwords don't match</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading || passwordsMismatch || metCount < 4}
                  className="group flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-emerald-400 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      Reset password
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </form>
            </>
          ) : (
            /* ── Success state ── */
            <div className="text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10">
                <ShieldCheck className="h-6 w-6 text-emerald-500 dark:text-emerald-400" />
              </div>
              <h1 className="mb-2 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                Password updated
              </h1>
              <p className="mb-8 text-sm text-zinc-500 dark:text-zinc-400">
                Your password has been reset successfully. You can now sign in.
              </p>
              <button
                onClick={() => navigate("/login", { replace: true })}
                className="group inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-emerald-400"
              >
                Go to sign in
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
