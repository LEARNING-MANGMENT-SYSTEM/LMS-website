import GraduationCap from "../../assets/GraduationCap.png";
const Logo = () => {
  return (
    <div className="flex items-center gap-3 w-50 ">
      <img  src={GraduationCap} />
      <p className="text-4xl font-bold">E-tutor</p>
    </div>
  );
};

export default Logo;
