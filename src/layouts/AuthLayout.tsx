import { Navigate, Outlet, useSearchParams } from "react-router-dom";
import { useAppSelector } from "@/state/hooks";

// Wrap all auth pages (login, register, forgot-password) with this layout.
// Redirects to ?next or / if the user is already authenticated.
const AuthLayout = () => {
  const isAuthenticated = useAppSelector((s) => s.auth.isAuthenticated);
  const [searchParams] = useSearchParams();
  const next = searchParams.get("next") ?? "/dashboard";

  if (isAuthenticated) return <Navigate to={next} replace />;

  return <Outlet />;
};

export default AuthLayout;
