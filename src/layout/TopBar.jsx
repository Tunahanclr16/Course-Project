
import { FaArrowRightLong } from "react-icons/fa6";

export default function TopBar() {
  
  return (
    <div className="content  bg-orange-50 h-[55px] rounded-full  ">
        <div className="flex justify-center items-center h-full">
              <h1 className="text-[#FFFFFF] font-normal flex items-center gap-2 sm:gap-4 text-sm  text-center">
              Free Courses 🌟 Sale Ends Soon, Get It Now <FaArrowRightLong size={16} color="white" />
              </h1>
        </div>
    </div>
  )
}
