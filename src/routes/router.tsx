import { createBrowserRouter } from "react-router";
import App from "@/App";
import { Home } from "@/pages/home";
import { Users } from "@/pages/admin/users";


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
      }
    ],
  },
]);