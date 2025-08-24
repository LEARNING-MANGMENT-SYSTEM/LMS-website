// src/pages/Lessons/LessonDetail.tsx
import { useParams } from "react-router-dom";

export default function LessonDetail() {
  const { lessonId } = useParams();
  return <div>Lesson Detail Page for Lesson ID: {lessonId}</div>;
}
