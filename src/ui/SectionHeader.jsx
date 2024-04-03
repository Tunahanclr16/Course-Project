import { NavLink } from "react-router-dom";

export default function SectionHeader({ title, description }) {
  return (
    <div className="flex lg:mt-[108px] mt-[50px] sm:mt-[100px] flex-col  justify-between">
      <div>
        <h2 className="font-semibold md:p-2 lg:text-[48px] sm:text-[38px] text-[28px]">
          {title}
        </h2>
        <div className="lg:w-[1177px]  sm:leading-6 md:leading-7 w-auto sm:w-[600px] md:w-[800px]  lg:mt-[6px] md:p-2 font-light mt-1 lg:text-[18px] sm:text-[16px] text-[14px]">
          {description}
        </div>
      </div>
    </div>
  );
}
