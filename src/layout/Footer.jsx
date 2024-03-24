import Desk from "../assets/logo/desk.png";
import Lap from "../assets/logo/laptop.png";
import Mob from "../assets/logo/mobile.png";
import Call from "../assets/Footer/call.png";
import Email from "../assets/Footer/email.png";
import Location from "../assets/Footer/location.png";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#FFFFFF]  sm:mt-[72px] mt-[50px] md:mt-[142px] py-10">
      <div className="max-w-[1650px] mt-2 sm:mt-24   overflow-hidden items-center mx-auto grid grid-cols-1  xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 p-3 sm:p-0 xs:gap-12 md:gap-24">
        <div className="flex flex-col text-center items-center">
          <img src={Desk} alt="" className="lg:block hidden" />
          <img src={Lap} alt="" className="lg:hidden sm:block hidden" />
          <img src={Mob} alt="" className="sm:hidden" />
          <ul className="flex text-left mt-5 sm:mt-10 flex-col whitespace-nowrap gap-2">
            <li className="text-[#fff] flex items-center hover:underline text-[14px] cursor-pointer">
              <img src={Email} alt="" />
              <span className="text-grey-15 text-[14px] sm:text-[18px]">
                hello@skillbridge.com
              </span>
            </li>
            <li className="text-[#fff] flex items-center hover:underline text-[14px] cursor-pointer">
              <img src={Call} alt="" />
              <span className="text-grey-15 text-[14px] sm:text-[18px]">
                +91 91813 23 2309{" "}
              </span>
            </li>
            <li className="text-[#fff] flex items-center hover:underline text-[14px] cursor-pointer">
              <img src={Location} alt="" />
              <span className="text-grey-15 text-[14px] sm:text-[18px]">
                Somewhere in the World{" "}
              </span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col text-center items-center">
          <h3 className="text-grey-15 font-semibold text-[18px] md:text-[20px] mb-4">
            Home
          </h3>
          <ul className="flex flex-col gap-2">
            <li className="text-grey-35 sm:text-[18px]  text-[14px] cursor-pointer">
              Benefits
            </li>
            <li className="text-grey-35 sm:text-[18px]  text-[14px] cursor-pointer">
              Our Courses{" "}
            </li>
            <li className="text-grey-35 sm:text-[18px]  text-[14px] cursor-pointer">
              Our Testimonials{" "}
            </li>
            <li className="text-grey-35 sm:text-[18px]  text-[14px] cursor-pointer">
              Our FAQ{" "}
            </li>
          </ul>
        </div>
        <div className="flex flex-col text-center items-center">
          <h3 className="text-grey-15 font-semibold text-[18px] md:text-[20px] mb-4">
            About Us
          </h3>
          <ul className="flex flex-col gap-2">
            <li className="text-grey-35 sm:text-[18px]  text-[14px] cursor-pointer">
              Company
            </li>
            <li className="text-grey-35 sm:text-[18px]  text-[14px] cursor-pointer">
              Achievements
            </li>
            <li className="text-grey-35 sm:text-[18px]  text-[14px] cursor-pointer">
              Our Goals{" "}
            </li>
          </ul>
        </div>
        <div className="flex flex-col text-center items-center">
          <h3 className="text-grey-15 font-semibold text-[18px] md:text-[20px] mb-4">
            Social Media
          </h3>
          <div className="flex gap-4">
            <FiFacebook size={24} />
            <FiTwitter size={24} />
            <FiInstagram size={24} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
