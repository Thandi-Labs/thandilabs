import { Navigate, Outlet, useSearchParams } from "react-router-dom";
import { useAppSelector } from "@/state/hooks";

// Wrap all auth pages (login, register, forgot-password) with this layout.
// Redirects to ?next or / if the user is already authenticated.
const AuthLayout = () => {
  const isAuthenticated = useAppSelector((s) => s.auth.isAuthenticated);
  const [searchParams] = useSearchParams();
  const next = searchParams.get("next") ?? "/";

  if (isAuthenticated) return <Navigate to={next} replace />;

  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Shared chrome for auth pages goes here (branding, background, etc.) */}
      <Outlet />
    </div>
  );
};

export default AuthLayout;
