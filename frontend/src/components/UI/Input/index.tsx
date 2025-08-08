import type { InputProps } from "./props";
import sucessIcon from "../../../assets/Vector.png";
const Input = ({
  label,

  leftIcon,
  rightIcon,

  error,
  errorText,
  success,
  countainerStyle,
  //validate,
  ...rest
}: InputProps) => {
  
  const iconsStyle = "w-10 h-full flex justify-center items-center absolute";
  let inputStyle = "border p-2 w-full ";
  if (error) inputStyle += "border-red-500 bg-red-100";
  else if (success) inputStyle += "border-green-500 bg-green-100";
  else
    inputStyle +=
      "border-[#ddd] hover:border-[3px] hover:border-orange-100 focus:border-orange-500 focus:border-[1px]";
  if (leftIcon) inputStyle += " pl-10";
  if (rightIcon) inputStyle += " pr-10";

  console.log(error, success, inputStyle);
  return (
    <div>
      {label && <label className="my-2 block">{label}</label>}
      <div className={`${countainerStyle} flex relative`}>
        {rightIcon && <div className={iconsStyle}> {rightIcon}</div>}
        <input {...rest} className={inputStyle} />
        {!success && leftIcon && <div className={`${iconsStyle} right-0`}>{leftIcon}</div>}
        {success && <img src={sucessIcon} className="absolute right-0 p-2.5"/>}
      </div>
      {error &&<p className="text-red-500">{errorText}</p>}
    </div>
  );
};

export default Input;
