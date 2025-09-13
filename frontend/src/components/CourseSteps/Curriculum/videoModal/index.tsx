import React from "react";
import Modal from "../../../Modal";
import Input from "../../../UI/Input";
import Button from "../../../UI/Button";

interface VideoModalProps {
  video: string;
  videoInfo: string;
  setVideoInfo: (value: string) => void;
  handleUploadedVideo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  onClose: () => void;
  isDisabled:boolean;
}

const VideoModal = ({
  video,
  videoInfo,
  setVideoInfo,
  handleUploadedVideo,
  handleSubmit,
  onClose,
  isDisabled
}: VideoModalProps) => {
  return (
    <Modal
      headerName="Lecture Video"
      buttonName="Upload Video"
      buttonClick={handleSubmit}
      onclose={onClose}
      isDisabled={isDisabled}
    >
      {videoInfo.length <= 20 || !video ? (
        <>
          <div className="grid grid-cols-12">
            <div className="col-span-9">
              <Input
                placeholder="Upload Video"
                onChange={(e) => setVideoInfo(e.target.value)}
              />
            </div>
            <Button className="col-span-3" variant="default" onclick={() => {}}>
              <label htmlFor="uploadVideo">Upload Video</label>
            </Button>
            <input
              type="file"
              accept="video/*"
              onChange={handleUploadedVideo}
              id="uploadVideo"
              className="hidden"
            />
          </div>

          <div className="flex gap-1">
            <b>Note:</b>
            <p>All videos should be at least 720p and less than 4.0G</p>
          </div>
        </>
      ) : (
        <div className="grid grid-cols-12 h-30">
          <div className="col-span-3">
            <video src={video} className="h-30" controls />
          </div>

          <div className="col-span-9 flex flex-col gap-2 p-5">
            <p className="text-green-700 text-sm font-bold">VIDEO UPLOADED</p>
            <p>{videoInfo}</p>

            <label
              htmlFor="replaceVideo"
              className="text-blue-800 cursor-pointer"
            >
              Replace Video
            </label>
            <input
              type="file"
              accept="video/*"
              onChange={handleUploadedVideo}
              id="replaceVideo"
              className="hidden"
            />
          </div>
        </div>
      )}
    </Modal>
  );
};

export default VideoModal;
