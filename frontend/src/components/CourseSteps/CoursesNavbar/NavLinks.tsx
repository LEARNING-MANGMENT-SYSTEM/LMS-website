import { CirclePlay, Layers, NotepadText, TvMinimalPlay } from "lucide-react";

const NavLinks=[
  {icon:<Layers size={15} />,label:"Basic Information",path:"/instructor/createNewCourses"},
  {icon:<NotepadText size={15} />,label:"Advanced Information",path:"/instructor/createNewCourses/advancedInfo"},
  {icon:<TvMinimalPlay size={15} />,label:"Curriculum",path:"/instructor/createNewCourses/curriculum"},
  {icon:<CirclePlay size={15} />,label:"Publish Course",path:"/instructor/createNewCourses/publishCourse"},
]

export default NavLinks