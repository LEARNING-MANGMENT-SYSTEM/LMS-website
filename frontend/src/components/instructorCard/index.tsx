import {  Play, Star, Users } from "lucide-react";
import { Avatar } from "../UI/Avatar";
import { useState } from "react";

interface Instructor {
  name: string;
  headline: string;
  imgSrc?: string;
  avgCourseRate: number;
  totalStudents: number;
  courses: number;
  summary: string;
}

function InstructorCard({
  name,
  headline,
  imgSrc = undefined,
  avgCourseRate,
  totalStudents,
  courses,
  summary,
}: Instructor) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => setIsExpanded(!isExpanded);
  const shortText = summary.slice(0, 300);
  return (
    <div className="flex items-center border border-gray-100 my-4 p-5 gap-5">
      <Avatar src={imgSrc} alt={name} size={135} />
      <div>
        <h1 className="font-bold text-lg mb-2">{name}</h1>
        <p className="text-gray-500 text-sm">{headline}</p>
        <div className="flex gap-5 my-3">
          <p className="flex items-center gap-1 text-xs">
            <Star fill="orange" color="orange" size={15} />{" "}
            <span className="font-bold">{avgCourseRate}</span> Course rating
          </p>
          <p className="flex items-center gap-1 text-xs">
            <Users color="blue" size={15} />{" "}
            <span className="font-bold">{totalStudents}</span> Students
          </p>
          <p className="flex items-center gap-1 text-xs">
            <Play
              color="white"
              fill="white"
              size={15}
              className="bg-orange-500 rounded-full p-1"
            />{" "}
            <span className="font-bold">
              {courses.toString().padStart(2, "0")}
            </span>{" "}
            Courses
          </p>
        </div>
        <p className="text-gray-500 text-sm">
          {" "}
          {isExpanded
            ? summary
            : shortText + (summary.length > 300 ? "..." : "")}
          {summary.length > 300 && (
            <span
              onClick={toggleReadMore}
              className="ml-2 text-sm font-medium cursor-pointer"
            >
              {isExpanded ? "Read less" : "Read more"}
            </span>
          )}
        </p>
      </div>
    </div>
  );
}

export default InstructorCard;
