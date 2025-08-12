import GraduationCap from "../../../assets/GraduationCap.png";
interface props{
  isSideBar?:boolean
}
const Logo = ( {isSideBar}:props) => {
  return (
    <div className="flex items-center gap-3 w-50  ">
      <div className={isSideBar?"w-7":"w-10"}><img  src={GraduationCap} /></div>
      
  <p className={` font-bold ${isSideBar?"text-white  md:text-2xl lg:text-2xl":"text-black text-4xl"}`}>E-tutor</p>
    </div>
  );
};

export default Logo;
