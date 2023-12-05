import React from "react";
import Logo from "./Logo";
import Join from "./Join";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="shadow-xl">
      <div className=" py-2 ixed top-0 left-0 w-full z-50 container m-auto ">
        <div className="grid grid-cols-4 items-center">
          <Logo />
          <div className="col-span-2 flex gap-x-8 justify-center ">
            <NavLink to="/" className="hover:text-[#dc2626] ">
              Home
            </NavLink>
            <NavLink to="pricing" className="hover:text-[#dc2626] ">
              Pricing
            </NavLink>
            <NavLink to="schedule" className="hover:text-[#dc2626] ">
              Schedule
            </NavLink>
            <NavLink to="blog" className="hover:text-[#dc2626] ">
              Blog
            </NavLink>
            <NavLink to="classes" className="hover:text-[#dc2626] ">
              Classes
            </NavLink>
            <NavLink to="about" className="hover:text-[#dc2626] ">
              About
            </NavLink>
            <NavLink to="contact" className="hover:text-[#dc2626] ">
              Contact
            </NavLink>
          </div>
          <NavLink to="join" className="flex justify-end">
            <button className="bg-blue-600 text-gray-50 outline-none p-2 rounded-lg hover:bg-blue-800 transition-all ease-in-out duration-75 shadow-2xl">
              Join Class Now
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
