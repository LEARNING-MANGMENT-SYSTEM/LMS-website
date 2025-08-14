import BasicForm from "../../../components/CourseSteps/BasicForm"
import Button from "../../../components/UI/Button"

const BasicInformation = () => {
  return (
    <>

    <header className="flex justify-between px-5 py-2  shadow-2xs">
      <div className="font-bold text-2xl"> Basic Information</div>
      <div className="flex">
        <Button variant={"secondary"} >Save</Button>
      <Button variant={"text"} >Save & Preview</Button>
      </div>
    </header>

    <div className="px-5 p-3">
      <BasicForm />
    </div>

    </>
  )
}

export default BasicInformation