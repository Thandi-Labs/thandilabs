import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import AuthBranding from "@/components/AuthBranding";
import ThemeToggle from "@/components/ThemeToggle";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", remember: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // dispatch login action here
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <AuthBranding />

      {/* ── Form panel ── */}
      <div className="flex flex-col bg-white dark:bg-zinc-950">
        {/* Top bar */}
        <div className="flex items-center justify-between px-8 pt-8">
          <Link
            to="/"
            className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white lg:invisible"
          >
            ← Back
          </Link>
          <div className="flex items-center gap-3 lg:ml-auto">
            <ThemeToggle />
            <span className="text-sm text-zinc-400 dark:text-zinc-500">
              No account?{" "}
              <Link
                to="/register"
                className="font-medium text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300"
              >
                Sign up
              </Link>
            </span>
          </div>
        </div>

        {/* Form */}
        <div className="flex flex-1 items-center justify-center px-8 py-12">
          <div className="w-full max-w-sm">
            <div className="mb-8">
              <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                Welcome back
              </h1>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                Sign in to your Thandi Labs account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Email address
                </label>
                <input
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 transition-all duration-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-emerald-500 dark:focus:ring-emerald-500/20"
                />
              </div>

              {/* Password */}
              <div>
                <div className="mb-1.5 flex items-center justify-between">
                  <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Password
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-xs text-zinc-400 transition-colors hover:text-zinc-600 dark:hover:text-zinc-200"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
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
              </div>

              {/* Remember me */}
              <div className="flex items-center gap-2.5">
                <input
                  id="remember"
                  type="checkbox"
                  checked={form.remember}
                  onChange={(e) => setForm({ ...form, remember: e.target.checked })}
                  className="h-4 w-4 rounded border-zinc-300 accent-emerald-500 dark:border-white/20"
                />
                <label htmlFor="remember" className="text-sm text-zinc-500 dark:text-zinc-400">
                  Remember me for 30 days
                </label>
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-emerald-400 active:scale-[0.98]"
              >
                Sign in
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
