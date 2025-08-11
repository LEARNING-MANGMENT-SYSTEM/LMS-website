import { CirclePlus, Dock, Layers, LayoutDashboard, MessageCircleMore, Settings } from 'lucide-react';
const Links=[
  {icon:<LayoutDashboard size={20}/>, name:"Dashboard", path:"/instructor/dashboard"},
  {icon:<CirclePlus size={20} />, name:"Create New Courses" , path:"/instructor/createNewCourses"},
  {icon:<Layers size={20} />, name:"My Courses" , path: "/instructor/myCourses"},
  {icon: <Dock size={20}/>, name:"Earning" , path: "/instructor/earning"},
  {icon:<MessageCircleMore  size={20}/>, name:"Message" , path: "/instructor/message"},
  {icon:<Settings size={20}/>, name:"Settings" , path: "/instructor/settings"},


]
export default Links