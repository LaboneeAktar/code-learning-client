import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://learn-coding-server.vercel.app/courses"),
      },
      {
        path: "/home",
        element: <Home></Home>,
        loader: () => fetch("https://learn-coding-server.vercel.app/courses"),
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch("https://learn-coding-server.vercel.app/courses"),
      },
      {
        path: "/courses/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(`https://learn-coding-server.vercel.app/courses/${params.id}`),
      },
      {
        path: "/courses/checkout/:id",
        element: <CheckOut></CheckOut>,
        loader: ({ params }) =>
          fetch(
            `https://learn-coding-server.vercel.app/courses/checkout/${params.id}`
          ),
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
