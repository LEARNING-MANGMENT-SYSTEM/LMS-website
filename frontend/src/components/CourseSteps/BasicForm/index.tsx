import { useState } from "react";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import Select from "../../UI/Select";
import {
  courseCategories,
  courseDurations,
  courseLanguages,
  courseSubCategories,
  subtitleLanguages,
} from "./data";
import { defaultValues, type props } from "./props";
import { useNavigate } from "react-router-dom";
import InputWithSelect from "../../UI/InputWithSelect/Index";
import InputWithLimit from "../../UI/InputWithLimit";

const BasicForm = ({ initialValues = defaultValues }: props) => {
  const [title, setTitle] = useState(initialValues.title);
  const [subtitle, setSubTitle] = useState(initialValues.subtitle);
  const [courseTopic, setCourseTopic] = useState(initialValues.courseTopic);
  const [courseCategory, setCourseCategory] = useState(
    initialValues.courseCategory
  );
  const [courseSubCategory, setSubCourseCategory] = useState(
    initialValues.courseSubCategory
  );
  const [courseLanguage, setCourseLanguage] = useState(
    initialValues.courseLanguage
  );
  const [subtitleLanguage, setSubtitltLanguage] = useState(
    initialValues.subtitleLanguage
  );
  const [courseLevel, setCourseLevel] = useState(initialValues.courseLevel);
  const [duration, setDuration] = useState(initialValues.duration);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    console.log(
      title,
      subtitle,
      courseTopic,
      courseCategory,
      courseLevel,
      courseSubCategory,
      duration,
      subtitleLanguage,
      courseLanguage
    );
    navigate("/instructor/createNewCourses/advancedInfo");
  };
  const handleDelete = () => {
    setTitle("");
    setSubTitle("");
    setCourseTopic("");
    setCourseCategory("");
    setSubCourseCategory("");
    setCourseLanguage("");
    setSubtitltLanguage("");
    setCourseLevel("");
    setDuration("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          label="Title"
          placeholder="your course title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <Input
          label="Subtitle"
          placeholder="your course subtitle"
          onChange={(e) => setSubTitle(e.target.value)}
          value={subtitle}
        />

        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <Select
            label="Course Category"
            options={courseCategories}
            containerStyle="w-full "
            handleChange={(category) => setCourseCategory(category)}
            selectedValue={courseCategory}
          />
          <Select
            label="Course Sub-category"
            options={courseSubCategories}
            containerStyle="w-full"
            handleChange={(subCategory) => setSubCourseCategory(subCategory)}
            selectedValue={courseSubCategory}
          />
        </div>

        <Input
          label="Course Topic"
          placeholder="What is primarily taught in your course"
          onChange={(e) => setCourseTopic(e.target.value)}
          value={courseTopic}
        />

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
          <Select
            label="Course Language"
            options={courseLanguages}
            containerStyle="w-full "
            handleChange={(language) => setCourseLanguage(language)}
            selectedValue={courseLanguage}
          />
          <Select
            label="Subtitle Language (optional)"
            options={subtitleLanguages}
            containerStyle="w-full"
            handleChange={(sublanguage) => setSubtitltLanguage(sublanguage)}
            selectedValue={subtitleLanguage}
          />
          <Select
            label="Course Level"
            options={courseCategories}
            containerStyle="w-full"
            handleChange={(level) => setCourseLevel(level)}
            selectedValue={courseLevel}
          />
          <InputWithSelect
            label="Durations"
            countainerStyle="w-full"
            placeholder="Course durations"
            selectProps={{
              value: duration,
              onChange: (e) => setDuration(e.target.value),
            }}
            options={courseDurations}
          />
        </div>
        <div className="flex justify-between p-5">
          <Button variant={"text"} onclick={handleDelete}>
            Cancel
          </Button>
          <Button variant={"primary"} type="submit">
            Save & Next
          </Button>
        </div>
      </form>
    </>
  );
};

export default BasicForm;
