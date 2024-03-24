import { NavLink } from "react-router-dom";

export default function PageIntroduction({ title, description,btnText }) {
  return (
    <div className="flex lg:mt-[108px] mt-[50px] sm:mt-[100px] flex-col  justify-between">
      <div>
        <h2 className="font-semibold md:p-2 lg:text-[48px] sm:text-[38px] text-[24px]">
          {title}
        </h2>
        <div className="lg:w-[1177px] sm:leading-6 md:leading-7 sm:w-[600px] md:w-[800px] w-[350px] lg:mt-[6px] md:p-2 font-light mt-1 lg:text-[18px] sm:text-[16px] text-[14px]">
          {description}
        
        </div>
        <div className="flex justify-end items-center">
            <NavLink
              to={"/courses"}
              className="bg-white-99 w-[100px] h-[52px] text-[16px] text-grey-15 whitespace-nowrap mt-4 no-underline flex justify-center items-center rounded-lg shadow-sm hover:bg-gray-200 transition-colors duration-300"
            >
              {btnText} 
            </NavLink>
          </div>
      </div>
    </div>
  );
}
