import { useState } from "react"
import Button from "../../UI/Button"
import CourseHeader from "../Header"
import CourseSection from "./Sections/Section"



const CurriculumForm=()=>{
  const [sections,setSections]=useState( new Array(1).fill(""))

  return (
    <div className="p-3 h-auto relative">
    <CourseHeader title="Course Curriculum"/>

    <div className="p-5 m-2">
      {sections.map((section, index)=>(
        <CourseSection key={index} number={index+1} />
      ))}
    </div>

    <div className="px-7 ">
    <Button className="w-full flex justify-center  " 
    variant="secondary" onclick={()=> setSections((prev)=>[...prev,""])}>Add Sections</Button>
    </div>


      <div className="flex justify-between p-10 mt-30 w-full">
          <Button variant={"text"} >
            Cancel
          </Button>
          <Button variant={"primary"} type="submit">
            Save & Next
          </Button>
        </div>


    </div>
  )
}

export default CurriculumForm
