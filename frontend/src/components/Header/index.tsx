import SearchInput from "../UI/SearchInput";
import Select from "../UI/Select";
import Button from "../UI/Button";
import { Bell, Heart, ShoppingCart } from "lucide-react";
import { IconBadge } from "../UI/badge";
import { Avatar } from "../UI/Avatar";
import Logo from "./Logo";

function Header() {
  return (
    <header className="flex py-3 px-5 items-center gap-5 justify-between">
      <div className="flex justify-between flex-1 max-w-[700px]">
        <Logo />
        <div className="md:flex gap-2 flex-1 hidden">
          <Select
            options={["browse"]}
            handleChange={() => {}}
            containerStyle="w-40 "
          />
          <SearchInput
            placeholder="What do you want to learn..."
            countainerStyle="flex-1"
          />
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex items-center gap-5 mr-5">
          <IconBadge>
            <Bell className="text-gray-500" />
          </IconBadge>
          <Heart className="text-gray-500" />
          <IconBadge text={0}>
            <ShoppingCart className="text-gray-500" />
          </IconBadge>
        </div>
        {false ? (
          <>
            <Button variant="secondary" padding="py-2 px-5">
              Create Account
            </Button>
            <Button padding="py-2 px-5">Sign In</Button>
          </>
        ) : (
          <Avatar />
        )}
      </div>
    </header>
  );
}

export default Header;
