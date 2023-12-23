import { lazy } from "react";
import { authRoutes } from "./auth";
import { paths } from "./paths";
import LandingPage from "../pages/LandingPage";
import ProfilePage from "../pages/ProfilePage";
import AuthGuard from "../guards/AuthGuard";

const Error404Page = lazy(() => import("../pages/Error404Page"));

const routes = [
  ...authRoutes,
  {
    path: paths.index,
    element: <LandingPage />,
  },
  {
    path: paths.profile,
    element: (
      <AuthGuard>
        <ProfilePage />
      </AuthGuard>
    ),
  },
  {
    path: "*",
    element: <Error404Page />,
  },
];

export default routes;
