import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import AuthLayout from "@/layouts/AuthLayout";
import Dashboard from "@/pages/Dashboard";
import Login from "@/pages/Login";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [{ path: "/", element: <Dashboard /> }],
  },
  {
    element: <AuthLayout />,
    children: [{ path: "/login", element: <Login /> }],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
