import { createBrowserRouter } from "react-router";
import App from "@/App";
import { Home } from "@/pages/home";
import { Users } from "@/pages/admin/users";
import { Categories } from "@/pages/admin/categories";
import { Inventory } from "@/pages/admin/inventory";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App  />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "admin/users",
        element: <Users />,
      },
      {
        path: "admin/inventory",
        element: <Inventory />,
      },
      {
        path: "admin/categories",
        element: <Categories />,
      },
    ],
  },
]);