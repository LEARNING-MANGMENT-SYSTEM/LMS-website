import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";

const CoursesNavBar = () => {
  return (
    <div className={`bg-white `}>
      <ul className=" grid grid-cols-4 text-center gap-4">
        {NavLinks.map((link, index) => (
          <NavLink to={link.path} end>
            {({ isActive }) => (
              <li
                key={index}
                className={`${
                  isActive ? "border-b-2 border-b-orange-500" : ""
                } flex gap-3 p-3 items-center`}
              >
                <div>{link.icon}</div>
                <div>{link.label}</div>
              </li>
            )}
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default CoursesNavBar;
