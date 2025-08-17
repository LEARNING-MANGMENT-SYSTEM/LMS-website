import Button from "../../UI/Button"
interface props{
  title:string
}

const CourseHeader = ({title}:props) => {
  return (
    <header className="flex justify-between px-5 py-2  shadow-2xs">
      <div className="font-bold text-2xl"> {title}</div>
      <div className="flex">
        <Button variant={"secondary"} >Save</Button>
      <Button variant={"text"} >Save & Preview</Button>
      </div>
    </header>
  )
}

export default CourseHeader