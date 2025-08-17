import BasicForm from "../../../components/CourseSteps/BasicForm"
import CourseHeader from "../../../components/CourseSteps/Header"


const BasicInformation = () => {
  return (
    <>
    <CourseHeader title="Basic Information"/>
    <div className="px-5 p-3">
      <BasicForm />
    </div>

    </>
  )
}

export default BasicInformation