import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";

const authRoutes = [
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

export default authRoutes;
