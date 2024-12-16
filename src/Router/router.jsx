import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout>Hello</MainLayout>,
    errorElement: <h1>Not Found</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/register",
        element:<Register/>
      }
    ],
  },
]);

export default router;
