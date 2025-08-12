import React from "react";
import avatar from "../../../assets/avatar.png"
interface AvatarProps {
  src?: string;
  alt?: string;
  size?: number;
}

export const Avatar: React.FC<AvatarProps> = ({ src=avatar, alt = "Avatar", size = 40 }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="rounded-full object-cover bg-gray-200 p-1"
      style={{ width: size, height: size }}
    />
  );
};
