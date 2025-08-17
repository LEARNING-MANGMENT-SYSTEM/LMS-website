import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import { useState } from "react";
import type { props } from "./props";

const Dropdown = ({ title, options, isSubMenu, handleOption , subMenuDirection = "right" }: props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen((prev) => !prev);

  const handleClick = (option: string) => {
    handleOption(option);
    setIsOpen(false);
  };

  return (
    <div className="md:w-80 w-35 relative inline-block">
      <button
        aria-haspopup="true"
        aria-expanded={isOpen}
        className={`${
          isSubMenu
            ? "w-full focus:bg-orange-50 hover:bg-orange-50 focus:text-orange-500 hover:text-orange-500"
            : "border border-gray-200"
        } px-4 py-2.5 flex justify-between w-full`}
        onClick={toggleOpen}
      >
        <div>{title}</div>
        <div>
          {isSubMenu && subMenuDirection !== "down" ? (
            <ChevronRight />
          ) : isOpen ? (
            <ChevronUp />
          ) : (
            <ChevronDown />
          )}
        </div>
      </button>

      {isOpen && (
        <ul
          role="menu"
          className={`${
            isSubMenu && subMenuDirection == 'right'? "absolute left-full top-0 w-60" : ""
          } shadow border border-gray-100 mt-2 bg-white`}
        >
          {options.map((option, index) =>
            option.children ? (
              <Dropdown
                key={index}
                title={option.value}
                options={option.children}
                handleOption={handleOption}
                subMenuDirection={subMenuDirection}
                isSubMenu={true}
              />
            ) : (
              <li role="menuitem" key={index} className="relative">
                <div
                  onClick={() => handleClick(option.label)}
                  className="px-4 py-2 flex justify-between hover:text-orange-500  cursor-pointer"
                >
                  {option.value}
                </div>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
