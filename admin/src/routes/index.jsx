import { createBrowserRouter } from "react-router-dom";

import { Login, Layout, Home, Request } from "../pages/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/request",
        element: <Request />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
