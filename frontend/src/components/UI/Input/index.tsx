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
  labelStyle,
  //validate,
  ...rest
}: InputProps) => {
  
  const iconsStyle = "w-10 h-full flex justify-center items-center absolute";
  let inputStyle = "border p-2 w-full ";
  if (error) inputStyle += "border-red-500 bg-red-100";
  else if (success) inputStyle += "border-green-500 bg-green-100";
  else
    inputStyle +=
      "border-gray-100 hover:border-[3px] hover:border-orange-100 focus:border-orange-500 focus:border-[1px]";
  if (leftIcon) inputStyle += " pl-10";
  if (rightIcon) inputStyle += " pr-10";

  console.log(error, success, inputStyle);
  return (
    <div className="flex-1">
      {label && <label className={`my-2 block ${labelStyle}`}>{label}</label>}
      <div className={`${countainerStyle} flex relative`}>
        {leftIcon && <div className={iconsStyle}> {leftIcon}</div>}
        <input {...rest} className={inputStyle} />
        {!success && rightIcon && <div className={`${iconsStyle} right-0`}>{rightIcon}</div>}
        {success && <img src={sucessIcon} className="absolute right-0 p-2.5"/>}
      </div>
      {error &&<p className="text-red-500">{errorText}</p>}
    </div>
  );
};

export default Input;
