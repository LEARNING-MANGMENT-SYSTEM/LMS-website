import CoursesNavBar from "../../../components/CourseSteps/CoursesNavbar/CoursesNavBar";
import { Outlet } from "react-router-dom";

const CreateNewCourse = () => {

  return (
    <>
      <div className="bg-white shadow">
        <CoursesNavBar />
        <Outlet/>
      </div>
    </>
  );
};

export default CreateNewCourse;
