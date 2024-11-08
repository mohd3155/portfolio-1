import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Resume from "../pages/Resume";
import Layout from "../components/Layout";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
