import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PublicLayout from "./layout/publicLayout/PublicLayout.jsx";
import HomePage from "./pages/homePage/HomePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
    errorElement: <h1>404</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
