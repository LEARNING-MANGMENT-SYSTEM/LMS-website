import { NavLink } from "react-router-dom";
import navlinks from "./navLinks";

const Navbar = () => {

  return (
    <>
      <div className=" bg-black text-gray-300 p-0   ">
        <ul className="flex  gap-2  ps-2  text-xs md:text-sm md:gap-6 md:ps-10  items-center" >
          {
            navlinks.map((link)=>(
              
                <NavLink to={link.path} key={link.path}>
              {
                ({isActive})=>(
                    <li key={link.name} 
                  className={ isActive?" md:p-2 p-1 border-t-3 border-t-orange-500  text-white":" border-t-3 border-transparent"} >
                    {link.name}
                    </li>
                )  
              }
                </NavLink>

            ))
          }
        </ul>
      </div>
    </>
  );
};
export default Navbar;
