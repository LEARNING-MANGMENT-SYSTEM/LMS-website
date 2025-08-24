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
import MyCourses from "../../pages/Instructor/MyCourses.tsx";
import Earning from "../../pages/Instructor/Earning.tsx";
import Message from "../../pages/Instructor/Message.tsx";
import SignOut from "../../pages/Instructor/SignOut.tsx";
import Settings from "../../pages/Instructor/Settings.tsx";
import BasicInformation from "../../pages/Instructor/createNewCourse/BasicInformation.tsx";
import AdvancedInformation from "../../pages/Instructor/createNewCourse/AdvancedInformation.tsx";
import Curriculum from "../../pages/Instructor/createNewCourse/Curriculum.tsx";
import PublishCourse from "../../pages/Instructor/createNewCourse/PublishCourse.tsx";
import CreateNewCourse from "../../pages/Instructor/createNewCourse/index.tsx";
import StdCourses from "../../pages/StdDashboard/StdCourses.tsx";
import Wishlist from "../../pages/StdDashboard/wishlist.tsx";
import PurchaseHistory from "../../pages/StdDashboard/purchaseHistory.tsx";
import Teachers from "../../pages/StdDashboard/teachers.tsx";
import StdDashboard from "../../pages/StdDashboard/StdDashboard.tsx";
import StdDashBoard from "../../pages/StdDashboard/index.tsx";
import CourseDetail from "../../pages/Courses/CourseDetails.tsx";
import LessonDetail from "../../pages/Courses/LessonDetails.tsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/students", element: <Students /> },

      { path: "/instructor/dashboard", element: <Dashboard /> },
      {
        path: "/student",
        element: <StdDashBoard />,
        children: [
          {
            index: true,
            path: "/student/dashboard",
            element: <StdDashboard />,
          },
          {
            path: "/student/courses",
            element: <StdCourses />,
          },
          {
            path: "/student/teachers",
            element: <Teachers />,
          },
          {
            path: "/student/messages",
            element: <Message />,
          },
          {
            path: "/student/wishlist",
            element: <Wishlist />,
          },
          {
            path: "/student/pruchasehistory",
            element: <PurchaseHistory />,
          },
          {
            path: "/student/settings",
            element: <Settings />,
          },
        ],
      },

      {
        path: "/instructor/createNewCourses",
        element: <CreateNewCourse />,
        children: [
          { index: true, element: <BasicInformation /> },
          {
            path: "/instructor/createNewCourses/advancedInfo",
            element: <AdvancedInformation />,
          },
          {
            path: "/instructor/createNewCourses/curriculum",
            element: <Curriculum />,
          },
          {
            path: "/instructor/createNewCourses/publishCourse",
            element: <PublishCourse />,
          },
        ],
      },
      { path: "/instructor/myCourses", element: <MyCourses /> },
      { path: "/instructor/earning", element: <Earning /> },
      { path: "/instructor/message", element: <Message /> },
      { path: "/instructor/settings", element: <Settings /> },
      { path: "/instructor/signOut", element: <SignOut /> },
      { path: "/courses/:courseId", element: <CourseDetail /> },
      { path: "/lessons/:lessonId", element: <LessonDetail /> },

      { path: "/About", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/courses", element: <Courses /> },
      { path: "/signIn", element: <SignIn /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
export default routes;
