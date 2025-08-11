import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  text?: string | number;
}

export const IconBadge: React.FC<BadgeProps> = ({ children, text }) => {
  return (
    <div className="relative">
      {children}
      <span className={`absolute ${text !== undefined ? '-top-1 -right-1':'-top-0.5 right-0'} bg-orange-500 text-white text-[10px] font-bold rounded-full ${text !== undefined ? 'w-[15px] h-[15px]' :'w-[10px] h-[10px]'} text-center`}>
        {text}
      </span>
    </div>
  );
};
