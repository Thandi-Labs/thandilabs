import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import { AlertTriangle, Home, ArrowLeft } from "lucide-react";

const ErrorPage = () => {
  const error = useRouteError();

  const is404 =
    isRouteErrorResponse(error) && error.status === 404;

  const title = is404 ? "Page not found" : "Something went wrong";
  const message = is404
    ? "The page you're looking for doesn't exist or hasn't been built yet."
    : isRouteErrorResponse(error)
    ? error.statusText
    : error instanceof Error
    ? error.message
    : "An unexpected error occurred.";

  const code = isRouteErrorResponse(error) ? error.status : null;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 dark:bg-zinc-950">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-64 w-64 rounded-full bg-zinc-200/60 blur-3xl dark:bg-white/[0.03]" />
      </div>

      <div className="relative w-full max-w-sm text-center">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-white/10 dark:bg-white/5">
          <AlertTriangle className="h-6 w-6 text-zinc-400 dark:text-zinc-500" />
        </div>

        {/* Status code */}
        {code && (
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
            {code}
          </p>
        )}

        <h1 className="mb-3 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
          {title}
        </h1>
        <p className="mb-8 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
          {message}
        </p>

        {/* Actions */}
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            to="/dashboard"
            className="flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
          >
            <Home className="h-4 w-4" />
            Go to dashboard
          </Link>
          <button
            onClick={() => history.back()}
            className="flex items-center gap-2 rounded-lg border border-zinc-200 px-5 py-2.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:text-zinc-400 dark:hover:bg-white/5"
          >
            <ArrowLeft className="h-4 w-4" />
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
