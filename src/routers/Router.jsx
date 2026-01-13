import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Login from "../Pages/auth/Login";
import Register from "../Pages/auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  },
  {
    path: "login",
    Component: Login,
  },
  {
    path: "signup",
    Component: Register,
  },
]);
export default router;
