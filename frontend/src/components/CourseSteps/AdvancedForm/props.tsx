import image from "../../../assets/Image.png"
import video from "../../../assets/PlayCircle.png"
export interface props {
  initialValues?: {
    image: string;
    video: string;
    textEditor: string;
    inputsGroup1: string[];
    inputsGroup2: string[];
    inputsGroup3: string[];
  };
}

export const defaultValues = {
  image:image,
  video:video,
  textEditor: "",
  inputsGroup1: new Array(4).fill(""),
  inputsGroup2: new Array(4).fill(""),
  inputsGroup3: new Array(4).fill(""),
};

export interface uploadCardProps {
  info: React.ReactNode;
  buttonText: string;
  isImage?: boolean;
  src:string;
  setSrc:(param:string)=>void
}
