import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Dashboard from "./pages/admin/Dashboard";

export const authRoutes = [
  {
    path: "/signin",
    name: "signin",
    component: SignIn,
    layout: "/auth",
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
    layout: "/auth",
  },
];

export const adminRoutes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    layout: "admin",
  },
];
