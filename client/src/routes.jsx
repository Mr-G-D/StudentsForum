import SignIn from "./pages/auth/SignIn";

const authRoutes = [
  {
    path: "/signin",
    name: "signin",
    component: SignIn,
    layout: "/auth",
  },
];

export default authRoutes;
