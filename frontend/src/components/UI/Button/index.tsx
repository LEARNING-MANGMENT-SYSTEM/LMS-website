import variantClasses from "./variant";

interface props {
  variant?: "primary" | "secondary" | "text"| "default"| "blue";
  children: React.ReactNode;
  padding?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onclick?: () => void;
  isDisabled?:boolean
}


function Button({variant ="primary",children,padding = "px-6 py-3",className,type = "button",onclick,isDisabled}: props) {
  return (
    <button
      onClick={onclick}
      type={type}
      disabled={isDisabled}
      className={`${padding}  ${isDisabled ? "bg-orange-600/20  text-white" : variantClasses[variant]} font-medium  w-auto flex flex-row gap-4 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
