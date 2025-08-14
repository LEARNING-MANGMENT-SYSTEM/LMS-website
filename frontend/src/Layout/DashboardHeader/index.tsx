import SearchInput from "../../components/UI/SearchInput";
import { useLocation } from "react-router-dom";

import { Bell } from "lucide-react";
import { IconBadge } from "../../components/UI/badge";
import { Avatar } from "../../components/UI/Avatar";

function DashboardHeader() {
  const location = useLocation();
  const routeName =
    location.pathname.split("/").filter(Boolean).pop() || "home";
  return (
    <header className="flex py-3 px-5 items-center gap-5 justify-between bg-white">
      <div className="">
        <p className="text-gray-500">Good Morning</p>
        <h1 className="font-bold text-3xl">
          {" "}
          {routeName
            .replace(/([A-Z])/g, ' $1')
            .replace(/\b\w/g, (char) => char.toUpperCase())}
        </h1>
      </div>
      <div className="flex items-center gap-5 mr-5">
        <SearchInput placeholder="Search" countainerStyle="bg-slate-50" />

        <IconBadge className="bg-slate-50 p-2">
          <Bell className="text-gray-500 " />
        </IconBadge>

        <Avatar />
      </div>
    </header>
  );
}

export default DashboardHeader;
