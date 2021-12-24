import Dashboard from "./pages/admin/Dashboard";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";

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
