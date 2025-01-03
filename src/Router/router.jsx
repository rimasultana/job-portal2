import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import About from "../pages/About";
import ServiceFeatures from "../pages/ServiceFeatures";
import JobDetails from "../pages/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h1>Not Found</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/job/${params.id}`);
        },
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/servicefeatures",
        element: <ServiceFeatures />,
      },
    ],
  },
]);

export default router;
