import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import AuthLayout from "@/layouts/AuthLayout";
import Landing from "@/pages/Landing";
import Dashboard from "@/pages/Dashboard";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import ForgotPassword from "@/pages/ForgotPassword";
import ResetPassword from "@/pages/ResetPassword";
import ErrorPage from "@/pages/ErrorPage";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },

  // Authenticated routes
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      // Stub catch-all inside MainLayout — shows 404 within the authenticated shell
      { path: "*", element: <ErrorPage /> },
    ],
  },

  // Auth routes
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/forgot-password", element: <ForgotPassword /> },
      { path: "/reset-password", element: <ResetPassword /> },
    ],
  },

  // Top-level catch-all (public 404)
  { path: "*", element: <ErrorPage /> },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
