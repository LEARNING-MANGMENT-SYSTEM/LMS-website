import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
interface props {
  options: string[];
  containerStyle?: string;
  handleChange: (param: string) => void;
  label?: string;
  placeholder?: string;
  selectedValue?: string;
  buttonStyle?:string;
}
const Select = ({
  options,
  containerStyle,
  handleChange,
  label,
  placeholder = "select...",
  selectedValue = "",
  buttonStyle=""
}: props) => {
  const [selected, setSelected] = useState(selectedValue);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setSelected(selectedValue);
  }, [selectedValue]);

  const toggleOpen = () => setIsOpen((prev) => !prev);
  const handleSelect = (option: string) => {
    toggleOpen();
    setSelected(option);
    handleChange(option);
  };
  return (
    <>
      <div className={` relative inline-block ${containerStyle}`}>
        {label && <label className="my-2 block">{label}</label>}
        <button
          className={`border-1 border-gray-100 flex px-5 py-2 justify-between w-full 
            ${placeholder ? "text-gray-400" : ""}
            ${buttonStyle}`}
          onClick={toggleOpen}
          type="button"
        >
          {selected ? selected : placeholder}
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </button>

        <ul
          className={` max-h-50 overflow-auto absolute z-10 w-full  mt-1 bg-white  rounded shadow border-2 border-gray-100 
            ${!isOpen && "hidden"}`}
        >
          {options.map((option: string, index: number) => (
            <li
              className={` ${
                selected == option && "bg-orange-100"
              } w-full hover:bg-orange-50  ps-4 p-1`}
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

