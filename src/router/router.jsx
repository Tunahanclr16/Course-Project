import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import CourseOpenPage from "../pages/CourseOpenPage";
import About from "../pages/AboutUs";
import Pricing from "../pages/Pricing";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Contact from "../pages/Contact";
import RouteError from "../components/Error/RouteError";
import MasterLayout from "../layout/MasterLayout";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MasterLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/Courses",
        element: <Courses />,
      },
      {
        path: "/course/:id",
        element: <CourseOpenPage />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Pricing",
        element: <Pricing />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Sign-Up",
        element: <SignUp />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <RouteError />,
      },
    ],
  },
]);
