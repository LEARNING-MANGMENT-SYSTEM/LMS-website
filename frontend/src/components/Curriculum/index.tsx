import React from "react";

interface CurriculumProps {
  title?: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  id?: string;
}

const Curriculum: React.FC<CurriculumProps> = ({
  title = "Curriculum",
  children,
  actions,
  id,
}) => {
  return (
    <div id={id} className="w-80/100 mx-auto">
      <div className="bg-white text-black  p-4 flex justify-between items-center ">
        <h2 className="text-xl font-bold">{title}</h2>
        <div>{actions}</div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Curriculum;
