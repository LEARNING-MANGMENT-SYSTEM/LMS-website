import { ArrowRight } from "lucide-react";
import { Avatar } from "../UI/Avatar";
import Button from "../UI/Button";
import { NavLink, useNavigate } from "react-router-dom";

type User = {
  avatarImg?: string;
  userName: string;
  headline?: string;
  id: string;
};
interface props {
  user: User;
}
function StdDashBoardHeader({ user }: props) {
  const { avatarImg, id, userName, headline } = user;
  const navLinks = [
    { path: "dashboard", label: "Dashboard" },
    { path: "courses", label: "Courses" },
    { path: "teachers", label: "Teachers" },
    { path: "messages", label: "Messages" },
    { path: "wishlist", label: "Wishlist" },
    { path: "pruchasehistory", label: "Purchase History" },
    { path: "settings", label: "Settings" },
  ];
  const navigate = useNavigate();

  return (
    <header className="w-full lg:w-9/12 mx-auto border-1 border-[#FFDDD1] bg-white">
      <div className="flex justify-between p-5 items-center">
        <div className="flex items-center gap-4">
          <Avatar src={avatarImg ?? undefined} size={110} />
          <div>
            <h1 className="text-xl font-bold">{userName}</h1>
            <p className="text-sm text-gray-500 mt-3">{headline}</p>
          </div>
        </div>
        <Button
          variant="secondary"
          onclick={() => navigate("/instructor/dashboard")}
        >
          Become an Instructor <ArrowRight />
        </Button>
      </div>
      <ul className="flex flex-wrap text-center gap-x-4 border-t-1 border-t-[#FFDDD1]">
        {navLinks?.map((link) => (
          <NavLink to={link.path} key={link.label} end className='text-center'>
            {({ isActive }) => (
              <li
                className={`${
                  isActive ? "border-b-2 border-b-orange-500" : ""
                } flex p-3 whitespace-nowrap`}
              >
                <div>{link.label}</div>
              </li>
            )}
          </NavLink>
        ))}
      </ul>
    </header>
  );
}

export default StdDashBoardHeader;
