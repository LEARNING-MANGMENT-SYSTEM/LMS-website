
import { useNavigate } from "react-router-dom"
import notFound from "../../assets/notFound.png"
import Button from "../../components/UI/Button"
const NotFound = () => {
  const navigate=useNavigate()
  return (
    <>
    <div className="grid grid-cols-12 ps-30 ">
      <div className="col-span-6  flex flex-col justify-center gap-4" >
        <div className="text-gray-200 font-bold text-7xl">Error 404</div>
        <div className="font-bold text-5xl"> Oops! page not found</div>
        <div className="text-2xl text-gray-700"> Something went wrong. Its look that your requested <br/> could not be found. its look like the link is broken <br/>or the page is removed</div>
        <Button className="w-fit"onclick={() => navigate(-1)}>Go Back</Button>

      </div>
    <div className="md:col-span-5 flex justify-center items-center">
        <img src={notFound} className="max-w-full h-auto" />
      </div>
    </div>
    </>
  )
}

export default NotFound