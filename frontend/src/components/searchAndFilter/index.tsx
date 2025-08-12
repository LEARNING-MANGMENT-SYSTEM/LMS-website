import SearchInput from "../UI/SearchInput";
import Select from "../UI/Select";

function SearchAndFilter() {
  return (
    <div className="md:flex items-center gap-3 mb-6">
      <SearchInput
        label="Search:"
        labelStyle="text-gray-500 text-sm"
        placeholder="Search in your courses"
        countainerStyle="bg-white"
      />
      <div>
        <label className="text-gray-500 text-sm block py-2">Sort by:</label>
        <Select
          options={["Latest"]}
          containerStyle="bg-white lg:w-50 sm:w-full md:w-25 overflow-hidden h-10"
          handleChange={() => {}}
        />
      </div>
      <div>
        <label className="text-gray-500 text-sm block py-2"> Category</label>
        <Select
          options={["All Category"]}
          containerStyle="bg-white lg:w-50 sm:w-full md:w-25 overflow-hidden h-10"
          handleChange={() => {}}
        />
      </div>
      <div>
        <label className="text-gray-500 text-sm block py-2"> Rating</label>
        <Select
          options={["4 Start & Up"]}
          containerStyle="bg-white lg:w-50 sm:w-full md:w-25 overflow-hidden h-10"
          handleChange={() => {}}
        />
      </div>
    </div>
  );
}

export default SearchAndFilter;
