import Dashboard from "pages/admin/Dashboard";
import Discussions from "pages/admin/Discussions";
import Users from "pages/admin/users";
import CreateAdmin from "pages/admin/users/CreateAdmin";
import Profile from "pages/admin/users/Profile";
import SignIn from "pages/auth/SignIn";
import SignUp from "pages/auth/SignUp";

export const authRoutes = [
  {
    path: "/login",
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
    path: "/",
    name: "dashboard",
    component: Dashboard,
    layout: "admin",
  },
  {
    path: "/users",
    name: "users",
    component: Users,
    layout: "admin",
  },
  {
    path: "/admin/create",
    name: "users",
    component: CreateAdmin,
    layout: "admin",
  },

  {
    path: "/profile/:id",
    name: "profile",
    component: Profile,
    layout: "admin",
  },

  {
    path: "/discussions",
    name: "discussions",
    component: Discussions,
    layout: "admin",
  },
];
