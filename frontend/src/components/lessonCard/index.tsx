import Card from "../UI/Card";
import Button from "../UI/Button";
import type { Lesson } from "../../types/Course";


export default function LessonCard({
  imgSrc,
  progress,
  course,
  lesson
}: Lesson) {

  return (
    <Card
      media={imgSrc}
      content={
        <div className="p-3">
          <p className="text-sm text-gray-500">{course}</p>
          <h3 className="font-semibold text-xl mt-1 capitalize">{lesson}</h3>
        </div>
      }
      footer={
        <div className="flex p-3 items-center gap-8">
            <Button variant="secondary" className="flex-1 justify-center text-sm" padding="p-2">Watch Lecture</Button>
            {progress > 0 && <p className="text-green-500 text-sm">{progress} % Completed</p>}
        </div>
      }
    />
  );
}
