
import Home from "../../pages/Home.tsx";
import Students from "../../pages/Students.tsx";
import Instructor from "../../pages/Instructor.tsx";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "../../pages/NotFound.tsx";

import About from "../../pages/About.tsx";
import Contact from "../../pages/Contact.tsx";
import Courses from "../../pages/Courses.tsx";
import SignIn from "../../pages/SignIn.tsx";
import Layout from "./Layout.tsx";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/students", element: <Students /> },
      { path: "/instructor", element: <Instructor /> },
      { path: "/About", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/courses", element: <Courses /> },
      { path: "/signIn", element: <SignIn /> },
      {path:"*",element:<NotFound/> }
    ],
  },
]);
export default routes
