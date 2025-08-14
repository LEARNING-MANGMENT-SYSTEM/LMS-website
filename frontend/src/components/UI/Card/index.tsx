import type { ReactNode } from "react";

interface props {
  media: string;
  content: ReactNode;
  footer: ReactNode;
  fullwidth?: boolean;
}

function Card({ media, content, footer, fullwidth = false }: props) {
  return (
    <div className={`bg-white border border-gray-100 ${fullwidth?'flex':''}`}>
      <img src={media} className={`h-60 ${fullwidth? 'w-60' : 'w-full'} object-cover`} />
      <div>
        {content}
        <hr className="text-gray-100" />
        {footer}
      </div>
    </div>
  );
}

export default Card;
