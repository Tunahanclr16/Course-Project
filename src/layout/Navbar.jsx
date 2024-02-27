import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import DeskLogo from '../assets/logo/desk.png';
import LaptopLogo from '../assets/logo/laptop.png';
import MobileLogo from '../assets/logo/mobile.png';
import Bars from '../assets/barsRight.png';
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="content">
      <div className="flex sm:mx-[24px] md:mx-[132px] mx-2 justify-between items-center">
        <div className="max-w-[107px] flex items-center gap-2 md:gap-4">
          <img className="lg:block hidden" src={DeskLogo} alt="" />
          <img className="sm:block hidden lg:hidden" src={LaptopLogo} alt="" />
          <img className="sm:hidden" src={MobileLogo} alt="" />
          <ul className="hidden sm:flex items-center">
            <li className="w-[70px] lg:w-[100px] transition-all hover:bg-white-95 hover:p-3 text-center">
              <NavLink
                to={'/'}
                className="no-underline text-grey-15  text-[14px] lg:text-[18px]"
              >
                Home
              </NavLink>
            </li>
            <li className="w-[70px] lg:w-[100px] transition-all hover:bg-white-95 hover:p-3 text-center">
              <NavLink
                to={'/courses'}
                className="no-underline wrap text-grey-15 text-[14px] lg:text-[18px]"
              >
                Courses
              </NavLink>
            </li>
            <li className="w-[70px] lg:w-[100px] transition-all hover:bg-white-95 hover:p-3 text-center">
              <NavLink
                to={'/about'}
                className="no-underline wrap text-grey-15 text-[14px] lg:text-[18px]"
              >
                About
              </NavLink>
            </li>
            <li className="w-[70px] lg:w-[100px] transition-all hover:bg-white-95 hover:p-3 text-center">
              <NavLink
                to={'/pricing'}
                className="no-underline text-grey-15 text-[14px] lg:text-[18px]"
              >
                Pricing
              </NavLink>
            </li>
            <li className="w-[70px] lg:w-[100px] transition-all hover:bg-white-95 hover:p-3 text-center">
              <NavLink
                to={'/contact'}
                className="no-underline text-grey-15 text-[14px] lg:text-[18px]"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2 sm:gap-0">
          <button className="p-6 sm:px-8 py-4 border-none outline-none text-grey-15 bg-transparent rounded-md cursor-pointer">
            Sign Up
          </button>
          <button className="p-6 sm:px-8 py-4 border-none outline-none text-[#fff] hover:bg-orange-70 bg-orange-50 rounded-md cursor-pointer">
            Login
          </button>
          <img
            className="sm:hidden cursor-pointer"
            src={Bars}
            alt=""
            onClick={toggleNav}
          />
        </div>
        {nav && (
          <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-50">
            <div className="fixed left-0 top-0 bg-white-99  w-[260px] h-full transform transition-transform ease-in-out duration-400">
              <div className="flex justify-end p-4">
                <AiOutlineClose size={20} onClick={toggleNav} />
              </div>
              <ul className="flex gap-2 flex-col mt-20 items-center">
            <li className="w-[70px] lg:w-[100px] transition-all hover:bg-white-95  text-center">
              <NavLink
                to={'/'}
                className="no-underline text-grey-15 text-2xl"
              >
                Home
              </NavLink>
            </li>
            <li className="w-[70px] lg:w-[100px] transition-all hover:bg-white-95  text-center">
              <NavLink
                to={'/courses'}
                className="no-underline wrap text-grey-15 text-2xl"
              >
                Courses
              </NavLink>
            </li>
            <li className="w-[70px] lg:w-[100px] transition-all hover:bg-white-95  text-center">
              <NavLink
                to={'/about'}
                className="no-underline wrap text-grey-15 text-2xl"
              >
                About
              </NavLink>
            </li>
            <li className="w-[70px] lg:w-[100px] transition-all hover:bg-white-95  text-center">
              <NavLink
                to={'/pricing'}
                className="no-underline text-grey-15 text-2xl"
              >
                Pricing
              </NavLink>
            </li>
            <li className="w-[70px] lg:w-[100px] transition-all hover:bg-white-95  text-center">
              <NavLink
                to={'/contact'}
                className="no-underline text-grey-15 text-2xl"
              >
                Contact
              </NavLink>
            </li>
          </ul>
            </div>
          </div>
        )}
          </div>
      </div>
  );
}
