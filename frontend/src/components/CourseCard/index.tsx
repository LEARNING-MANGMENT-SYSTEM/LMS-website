import Card from "../UI/Card";
import type { Course } from "../../types/Course";
import { MoreHorizontal, Star, User } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function CourseCard({
  imgSrc,
  categories,
  title,
  rating,
  students,
  price,
}: Course) {
  const path = useLocation();
  const isInstructor = path.pathname.includes("instructor");
  return (
    <Card
      media={imgSrc}
      content={
        <div className="p-3">
          <div className="flex justify-between">
            <div>
              {categories.map((cat) => (
                <span className="bg-indigo-100 py-1 px-2 text-indigo-700 text-[12px]">
                  {cat}
                </span>
              ))}
            </div>
            {!isInstructor && (
              <p className="text-orange-500 text-2xl">${price}</p>
            )}
          </div>
          <h3 className="font-semibold text-xl mt-1 capitalize">{title}</h3>
        </div>
      }
      footer={
        <div>
          <div className="flex justify-between p-3">
            <div className="flex items-center">
              <Star color="orange" fill="orange" size={20} />
              <p className="ml-1">{rating}</p>
            </div>
            <div className="flex items-center">
              <User color="blue" />
              <p className="text-sm">
                {students.toLocaleString("en-US", { minimumFractionDigits: 2 })}{" "}
                <span className="text-gray-400">students</span>
              </p>
            </div>
          </div>
          {isInstructor && (
            <>
              <hr className="text-gray-100" />

              <div className="flex justify-between p-3 items-center">
                <p className="text-orange-500 text-2xl">${price}</p>
                <MoreHorizontal size={24} color="#999" />
              </div>
            </>
          )}
        </div>
      }
    />
  );
}
