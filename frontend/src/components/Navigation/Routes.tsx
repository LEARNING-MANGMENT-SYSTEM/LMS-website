import Home from "../../pages/Home/Home.tsx";
import Students from "../../pages/Students/Students.tsx";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "../../pages/NotFound/NotFound.tsx";
import About from "../../pages/About/About.tsx";
import Contact from "../../pages/Contact/Contact.tsx";
import Courses from "../../pages/Courses/Courses.tsx";
import SignIn from "../../pages/SignIn/SignIn.tsx";
import Layout from "../../Layout/index.tsx";
import Dashboard from "../../pages/Instructor/Dashboard.tsx";
import CreateNewCourses from "../../pages/Instructor/CreateNewCourses.tsx";
import MyCourses from "../../pages/Instructor/MyCourses.tsx";
import Earning from "../../pages/Instructor/Earning.tsx";
import Message from "../../pages/Instructor/Message.tsx";
import SignOut from "../../pages/Instructor/SignOut.tsx";
import Settings from "../../pages/Instructor/Settings.tsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/students", element: <Students /> },

      { path: "/instructor/dashboard", element: <Dashboard /> },
      {path: "/instructor/createNewCourses",element: <CreateNewCourses />,  },
      { path: "/instructor/myCourses", element: <MyCourses /> },
      { path: "/instructor/earning", element: <Earning /> },
      { path: "/instructor/message", element: <Message /> },
      { path: "/instructor/settings", element: <Settings /> },
      { path: "/instructor/signOut", element: <SignOut /> },

      { path: "/About", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/courses", element: <Courses /> },
      { path: "/signIn", element: <SignIn /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
export default routes;
