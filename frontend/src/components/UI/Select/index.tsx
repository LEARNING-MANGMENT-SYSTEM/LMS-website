import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
interface props {
  options: string[];
  containerStyle?:string;
  handleChange: (param: string) => void;
}
const Select = ({ options,containerStyle, handleChange }: props) => {
  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen=()=>setIsOpen((prev)=>!prev)
  const handleSelect = (option: string) => {
    toggleOpen();
    setSelected(option);
    handleChange(option);
  };
  return (
    <>
      <div className={`w-35 relative inline-block ${containerStyle}`}>
        <button
          className=" border-2 border-gray-200 flex px-5 py-2 justify-between w-full "
          onClick={toggleOpen}
        >
          {selected}
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </button>

        <ul
          className={` max-h-50 overflow-auto absolute z-10 w-full  mt-1 bg-white  rounded shadow border-2 border-gray-100 
            ${!isOpen && "hidden"}`
          }
        >
          {options.map((option: string, index: number) => (
            <li
              className={` ${selected == option && "bg-orange-100"} w-full hover:bg-orange-50  ps-4 p-1`}
              key={index}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Select;
