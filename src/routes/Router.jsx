import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home/Home";
import UpdateCoffee from "../components/UpdateCoffee/UpdateCoffee";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import Users from "../components/Users/Users";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(
            "https://coffee-store-server-30tkmc8a4-brcshakil.vercel.app/coffee"
          ),
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-30tkmc8a4-brcshakil.vercel.app/coffee/${params.id}`
          ),
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/users",
        element: <Users />,
        loader: () =>
          fetch(
            `https://coffee-store-server-30tkmc8a4-brcshakil.vercel.app/user`
          ),
      },
    ],
  },
]);

export default Router;
