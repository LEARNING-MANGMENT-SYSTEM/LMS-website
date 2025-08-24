import { type Course, type Lesson } from "../../types/Course";
import CourseCard from "../CourseCard";
import LessonCard from "../lessonCard";

type props = {
  cardsData: Course[] | Lesson[];
};
function CardList({ cardsData }: props) {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {cardsData.map((data) =>
        "lesson" in cardsData[0] ? (
          <LessonCard {...data} />
        ) : (
          <CourseCard {...data} />
        )
      )}
    </div>
  );
}

export default CardList;
