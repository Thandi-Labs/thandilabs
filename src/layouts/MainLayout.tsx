import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "@/state/hooks";

// Wrap all authenticated pages with this layout.
// Redirects to /login?next=<current-path> if the user is not authenticated.
const MainLayout = () => {
  const isAuthenticated = useAppSelector((s) => s.auth.isAuthenticated);
  const { pathname } = useLocation();

  if (!isAuthenticated)
    return <Navigate to={`/login?next=${encodeURIComponent(pathname)}`} replace />;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Shared chrome for authenticated pages goes here (navbar, sidebar, etc.) */}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
