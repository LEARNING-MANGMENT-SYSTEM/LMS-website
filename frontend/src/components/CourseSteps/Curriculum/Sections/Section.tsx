import CourseLecture from "./CourseLecture";
import SectionHeader from "./SectionHeader";
interface props{
  number:number
}
const CourseSection = ({number}:props) => {
  return (
    <>
      <div className="bg-gray-100 p-2 m-4">
        <SectionHeader number={number} />
        <CourseLecture />
        <CourseLecture />
      </div>
    </>
  );
};

export default CourseSection;
