import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/router.jsx";
import { Toaster } from "react-hot-toast";
import Authprovider from "./Context/Authprovider.jsx";
import Register from "./pages/Register.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster />
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </StrictMode>
);
