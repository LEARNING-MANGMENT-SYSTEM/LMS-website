import { Upload } from "lucide-react";
import Button from "../../UI/Button";
import { useRef } from "react";
import playCircle from "../../../assets/PlayCircle.png"
import type { uploadCardProps } from "./props";


const UploadCard = ({ info, buttonText, isImage=false,src,setSrc }: uploadCardProps) => {
  const imageRef = useRef<HTMLInputElement | null>(null);
  const videoRef = useRef<HTMLInputElement | null>(null);
  console.log(imageRef.current);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    const file = e.target.files?.[0];
    if (file) {
      setSrc(URL.createObjectURL(file))
    }
  };

  const handleClick = () => {
    const ref = isImage ? imageRef.current : videoRef.current;
    ref?.click();
  };

  return (
    <>
      <div className="h-40 shadow grid grid-cols-6 ">
        <div className="h-full col-span-2 bg-gray-100 flex items-center">
          {isImage
            ?  (
                <img src={src} className=" h-30  w-full object-contain " />
              )
            : (
              src== playCircle?(
                <img src={src} className=" h-30 w-full object-contain" />
              ):(
                  <video controls>
                  <source src={src} />
                </video>
              )
              
              )}
        </div>


        <div className="col-span-4 p-3 text-sm">
          {info}

          <input
            type="file"
            accept={isImage ? "image/*" : "video/*"}
            ref={isImage ? imageRef : videoRef}
            onChange={handleChange}
            className="hidden"
          />

          <Button
            variant="secondary"
            className="mt-3 items-center"
            onclick={handleClick}
          >
            {buttonText}
            <Upload size={18} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default UploadCard;
