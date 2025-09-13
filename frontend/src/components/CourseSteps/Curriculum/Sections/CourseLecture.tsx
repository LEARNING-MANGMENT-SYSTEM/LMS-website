import { Edit3Icon, List, Trash2Icon } from "lucide-react";
import Select from "../../../UI/Select";
import Modal from "../../../Modal";
import { useState } from "react";
import DroporChooseFile from "../DroporChooseFile";
import TextModal from "../TextModal";
import VideoModal from "../videoModal";
const options = [
  "Video",
  "Attach file",
  "Captions",
  "Description",
  "Lecture Notes",
];
type ModalKeys = "video" | "caption" | "description" | "notes" | "attachFile";
const CourseLecture = () => {
  const [modals, setModals] = useState({
    video: false,
    caption: false,
    description: false,
    notes: false,
    attachFile: false,
  });

  const [caption, setCaption] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState("");
  const [notesFile, setNotesFile] = useState<File[]>([]);
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
  const [video, setVideo] = useState("");
  const [videoInfo, setVideoInfo] = useState("");
  const handleSelect = (option: string) => {
    if (option == "Captions") {
      toggle("caption");
    } else if (option == "Description") {
      toggle("description");
    } else if (option == "Attach file") {
      toggle("attachFile");
    } else if (option == "Lecture Notes") {
      toggle("notes");
    } else if (option == "Video") {
      toggle("video");
    }
  };
  console.log(notesFile);
  const toggle = (value: keyof typeof modals) => {
    setModals((prev) => ({ ...prev, [value]: !prev[value] }));
  };

  const handleSubmit = (modal: ModalKeys, data: unknown) => {
    console.log(data);
    toggle(modal);
  };

  const handleUploadedVideo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideo(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <div className="bg-white m-6 flex justify-between p-3">
        <div className="flex items-center gap-2">
          <List size={20} />
          <p className="font-bold">Lecture Name</p>
        </div>

        <div className="flex gap-2 text-gray-500 items-center ">
          <Select
            options={options}
            selectedValue="Contents"
            handleChange={handleSelect}
            buttonStyle="bg-orange-50 text-orange-500"
            containerStyle="p-0"
          />
          <Edit3Icon size={18} />
          <Trash2Icon size={18} />
        </div>
      </div>

      {modals.video && (
        <VideoModal
          video={video}
          videoInfo={videoInfo}
          setVideoInfo={setVideoInfo}
          handleUploadedVideo={handleUploadedVideo}
          handleSubmit={() => handleSubmit("video", video)}
          onClose={() => toggle("video")}
          isDisabled={video ? false : true}
        />
      )}

      {modals.caption && (
        <TextModal
          title="Caption"
          buttonLabel="Add Caption"
          onSubmit={() => handleSubmit("caption", caption)}
          onClose={() => toggle("caption")}
          id="caption"
          value={caption}
          onChange={setCaption}
          placeholder="write your lecture caption here ... "
          isDisabled={caption ? false : true}
        />
      )}
      {modals.description && (
        <TextModal
          title="Description"
          buttonLabel="Add Description"
          onSubmit={() => handleSubmit("description", description)}
          onClose={() => toggle("description")}
          id="description"
          value={description}
          onChange={setDescription}
          placeholder="write your lecture description here ... "
          isDisabled={description ? false : true}
        />
      )}

      {modals.attachFile && (
        <Modal
          onclose={() => toggle("attachFile")}
          headerName="Attach File"
          buttonName="AttachFile"
          buttonClick={() => handleSubmit("attachFile", attachedFiles)}
          isDisabled={attachedFiles.length != 0 ? false : true}
        >
          <div>{attachedFiles.map((file) => file.name)}</div>
          <DroporChooseFile setFiles={setAttachedFiles} title="Attach File" />
        </Modal>
      )}

      {modals.notes && (
        <Modal
          headerName="Add Lecture Notes"
          buttonName="Add Notes"
          buttonClick={() => handleSubmit("notes", notes)}
          onclose={() => toggle("notes")}
          isDisabled={notes ? false : true}
        >
          <label htmlFor="notes" className="font-bold">
            Notes
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className=" resize-none w-full border-2 mt-2 border-gray-200 p-2"
            placeholder="write your lecture Notes here ... "
            rows={5}
            id="notes"
          />

          <DroporChooseFile title="Upload Notes" setFiles={setNotesFile} />
        </Modal>
      )}
    </>
  );
};

export default CourseLecture;
