import { NavLink } from "react-router-dom"
import Logo from "../UI/Logo"
import Links from "./links"
import { LogOut } from "lucide-react"


const SideBar = () => {
  return (
    <>

    <div className="bg-emerald-950 h-screen  relative">
      <div className="ps-5 py-3 hidden md:flex"><Logo isSideBar={true}/></div>
      <hr className="border-b border-gray-600 w-full mb-4"/>


      <ul>
        {
          Links.map((link)=>(
          <NavLink to={link.path}>
            {
              ({isActive})=>(
                  <li key={link.name} className={` ${isActive?"bg-orange-500 text-white":"text-gray-200 "} flex gap-3 text-bold text-md px-5 py-3 `} >
              {link.icon}
              <div className="hidden md:flex">{link.name}</div>
            </li>
              )
            }

          </NavLink>
          ))
        }
      </ul>


      <NavLink to="/instructor/signOut">
            {
              ({isActive})=>(
              <div className={` ${isActive?"bg-orange-500 text-white":"text-gray-200 "} flex gap-3 text-bold text-md px-5 py-3 absolute bottom-0 w-full`} >
              <LogOut size={20}/>
              <div className="hidden md:flex">Sign-out</div>
            </div>
              )
            }

          </NavLink>


    </div>
    </>
  )
}

export default SideBar