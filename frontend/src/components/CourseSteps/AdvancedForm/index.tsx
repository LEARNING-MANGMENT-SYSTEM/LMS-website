import { useState } from "react";
import Button from "../../UI/Button";
import InputGroup from "./InputGroup";
import TextEditor from "./TextEditor";
import UploadCard from "./UploadCard";
import { defaultValues, type props } from "./props";

const AdvancedForm = ({ initialValues = defaultValues }: props) => {
  const [textEditor, setTextEditor] = useState(initialValues.textEditor);
  const [inputsGroup1, setInputsGroup1] = useState(initialValues.inputsGroup1);
  const [inputsGroup2, setInputsGroup2] = useState(initialValues.inputsGroup2);
  const [inputsGroup3, setInputsGroup3] = useState(initialValues.inputsGroup3);
  const [image, setImage] = useState(initialValues?.image);
  const [video, setVideo] = useState(initialValues?.video);

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    console.log(
      textEditor,
      inputsGroup1,
      inputsGroup2,
      inputsGroup3,
      image,
      video
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-6 p-5">
          <div>
            {/* upload Image */}
            <div className="font-bold mb-3">Course Thumbnail</div>
            <UploadCard
              isImage={true}
              src={image}
              setSrc={setImage}
              buttonText="Upload Image"
              info={
                <p className="text-gray-600">
                  Upload your course Thumbnail here.
                  <b>Important guidlines:</b> 1200x800 pixels or 12:8 Ratio.
                  supported format:
                  <b> .jpg, .jpeg or .png</b>
                </p>
              }
            />
          </div>

          {/* upload video */}
          <div>
            <div className="font-bold mb-3">Course Trailer</div>
            <UploadCard
              src={video}
              setSrc={setVideo}
              buttonText="Upload video"
              info={
                <p className="text-gray-600">
                  {" "}
                  students who watch a well-made promo video are 5X more likely
                  to enroll in your course. we have seen that statistics go up
                  10X for expectionally awesome videos
                </p>
              }
            />
          </div>
        </div>

        <TextEditor value={textEditor} setValue={setTextEditor} />

        <div className="p-7">
          <InputGroup
            inputs={inputsGroup1}
            setInputs={setInputsGroup1}
            title="What You Will Teach In This Course(4/8)"
            placeholder="What you will teach in this course ..."
          />
          <InputGroup
            inputs={inputsGroup2}
            setInputs={setInputsGroup2}
            title="Target Audiance(4/8)"
            placeholder="Who this course is for ..."
          />
          <InputGroup
            inputs={inputsGroup3}
            setInputs={setInputsGroup3}
            title="Course requirements(4/8)"
            placeholder="What is your course requirements ..."
          />
        </div>

        <div className="flex justify-between p-5">
          <Button variant={"text"}>Cancel</Button>
          <Button variant={"primary"} type="submit">
            Save & Next
          </Button>
        </div>
      </form>
    </>
  );
};

export default AdvancedForm;
