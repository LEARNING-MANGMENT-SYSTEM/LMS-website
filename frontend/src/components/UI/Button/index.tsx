import variantClasses from "./variant";

interface props {
  variant?: "primary" | "secondary" | "text";
  children: React.ReactNode;
  padding?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onclick?: () => void;
}


function Button({variant ="primary",children,padding = "px-6 py-3",className,type = "button",onclick,}: props) {
  return (
    <button
      onClick={onclick}
      type={type}
      className={`${padding} ${variantClasses[variant]} font-medium  w-auto flex flex-row gap-4 ${className} cursor-pointer`}
    >
      {children}
    </button>
  );
}

export default Button;
