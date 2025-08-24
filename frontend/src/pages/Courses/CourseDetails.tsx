import { useParams } from "react-router-dom";
import TabNavigator from "../../components/TabNavigator";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { useRef } from "react";

export default function CourseDetail() {
  const { courseId } = useParams();
  const overviewSection = useRef<HTMLDivElement>(null);
  const instructorSection = useRef<HTMLDivElement>(null);
  const curriculmSection = useRef<HTMLDivElement>(null);
  const reviewSection = useRef<HTMLDivElement>(null);
  const refSections = [overviewSection,
    curriculmSection,
    instructorSection,
    reviewSection,
  ]

  const activeId = useScrollSpy(refSections);
  console.log(activeId)
  return (
    <div className="w-full">
      <div className="bg-amber-300 h-90">
        Course Detail Page for Course ID: {courseId}
      </div>
      <TabNavigator
        activeId={activeId}
        options={[
          {
            label: "Overview",
            sectionId: "overview",
          },
          {
            label: "Curriculum",
            sectionId: "curriculm",
          },
          {
            label: "Instructor",
            sectionId: "instructor",
          },
          {
            label: "Review",
            sectionId: "review",
          },
        ]}
      />

      {[
          { iid: "overview", refer: overviewSection },
          { iid: "curriculm", refer: curriculmSection },
          { iid: "instructor", refer: instructorSection },
          { iid: "review", refer: reviewSection }
        ].map(({iid, refer}) => (
            <div className="py-10 h-200 text-center flex items-center" id={iid} ref={refer} key={iid}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quam
          est nisi aliquam laudantium numquam repudiandae? Voluptates dolores,
          debitis labore eos, ipsa praesentium eligendi repellat placeat
          incidunt ullam minima ratione?
        </div>
      ))}
    </div>
  );
}
