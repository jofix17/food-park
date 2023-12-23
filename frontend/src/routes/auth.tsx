import { Outlet } from "react-router-dom";
import AuthLayout from "../components/Layouts/AuthLayout";
import { paths } from "./paths";
import { lazy } from "react";

const LoginPage = lazy(() => import("../pages/Auth/LoginPage"));

export const authRoutes = [
  {
    path: paths.auth.login,
    element: (
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    ),
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
    ],
  },
];
