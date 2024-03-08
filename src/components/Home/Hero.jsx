import { NavLink } from "react-router-dom";
import TextIcon from "../../assets/hero/heroIcon.png";
export default function Hero() {
  return (
    <div className="text-center overflow-x-hidden   relative max-w-[965px] mx-auto flex px-2 flex-col items-center mt-[50px]  sm:mt-[80px] lg:mt-[100px]">
      <div className=" w-[357px]  bg-[#FCFCFD] sm:px-2 px-6 gap-2 rounded-md  h-20 flex  items-center justify-center sm:w-[543px] lg:w-[754px]">
        <img
          className="object-cover  w-[48px]   lg:w-[62px]"
          src={TextIcon}
          alt=""
        />
        <h1 className="font-semibold text-[16px] lg:w-[732px] sm:whitespace-nowrap w-[271px] sm:w-[549px] text-grey-10 sm:text-4xl lg:text-5xl">
          <span className="text-orange-50">Unlock</span> Your Creative Potential
        </h1>
      </div>
      <div className="mt-[16px]">
        <h3 className="font-semibold  text-[24px] sm:text-[28px] text-grey-15 lg:w-[965px] w-[297px] sm:w-[941px]">
          with Online Design and Development Courses.
        </h3>
        <p className="mt-[6px] text-grey-15 sm:text-[16px] lg:max-w-[965px] sm:max-w-[941px] max-w-[297px] text-[14px] lg:text-[18px]">
          Learn from Industry Experts and Enhance Your Skills.
        </p>
      </div>
      <div className="mt-[50px] flex items-center gap-3 lg:max-w-[366px] max-w-[293px]">
        <NavLink to={'/courses'} className=" bg-orange-50 text-[14px] font-semibold flex justify-center items-center no-underline text-white-99 border-none rounded lg:max-w-[195px] lg:h-[52px] h-[49px] w-[154px] cursor-pointer">Explore Courses</NavLink>
        <button className="bg-white-95 text-grey-15 text-[14px] w-[127px] h-[49px] cursor-pointer border-none">View Pricing</button>
      </div>
    </div>
  );
}
