import { createBrowserRouter } from "react-router-dom";

import { Login, Layout, Home, PendingRequests, Approve } from "../pages/index";

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
        path: "/pending_requests",
        element: <PendingRequests />,
      },
      {
        path: "/approve/:id",
        element: <Approve />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
