import { SlidersVertical } from "lucide-react";
import Button from "../UI/Button";
import SearchInput from "../UI/SearchInput";
import Select from "../UI/Select";
import { useState } from "react";
interface filterProps {
  openFilter?: boolean;
  filtersCount?: number;
  setOpenFilter: (isOpen: boolean) => void;
}
const Suggestions = ["user interface", "user Experience", "React", "Front End"];
function StdSearchAndFilter({
  openFilter = false,
  filtersCount = 0,
  setOpenFilter,
}: filterProps) {
  const [searchTerm, setSearchTerm] = useState<string>();
  return (
    <div className="my-6 py-3 border-b-gray-100 border-b">
      <div className="flex items-center gap-3 mb-6">
        <Button
          onclick={() => setOpenFilter((isOpen) => !isOpen)}
          variant="text"
          className={`${
            openFilter ? "border-orange-500" : "border-orange-100"
          } border flex items-center h-10`}
        >
          <SlidersVertical color={openFilter ? "#FF6A00" : "black"} size={20} />
          <span className={`${openFilter ? "" : "text-black"}`}>Filter</span>
          <span
            className={`${
              openFilter
                ? "bg-orange-500 text-white"
                : "bg-orange-100 text-orange-500"
            } px-1`}
          >
            {filtersCount}
          </span>
        </Button>
        <SearchInput
          onChange={(e) => setSearchTerm(e.target.value)}
          labelStyle="text-gray-500 text-sm"
          placeholder="Search in your courses"
          countainerStyle="bg-white max-w-100"
        />
        <div className="flex">
          <label className="text-gray-500 pr-2 block py-2">Sort by:</label>
          <Select
            options={["Latest"]}
            containerStyle="bg-white w-50"
            handleChange={() => {}}
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex">
          <p className="text-sm"> Suggestions: </p>
          {Suggestions.map((ele) => (
            <p className="px-2 text-sm text-orange-500">{ele}</p>
          ))}
        </div>
        <p className="text-sm text-gray-500">
          <span className="font-bold text-black pr-1">35489184 </span> results find for{" "}
          {searchTerm}{" "}
        </p>
      </div>
    </div>
  );
}

export default StdSearchAndFilter;
