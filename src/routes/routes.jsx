import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
