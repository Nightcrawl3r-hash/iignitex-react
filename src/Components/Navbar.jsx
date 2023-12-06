import React, { useState } from "react";
import { FiAlignRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  

  

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='shadow-xl'>
      <div className="py-2 top-0 left-0 w-full z-50 container m-auto">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 items-center ">
          <Logo />

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden col-start-3 flex justify-end">
            <button
              className="text-xl focus:outline-none"
              onClick={toggleMenu}
            >
              <FiAlignRight size={32} className="text-[#dc2626]"/>
            </button>
          </div>

          {/* Navigation Links for Larger Screens */}
          <div className="hidden md:flex col-span-2 gap-x-8 justify-center">
            <NavLink to="/" className="hover:text-[#dc2626]">
              Home
            </NavLink>
            <NavLink to="pricing" className="hover:text-[#dc2626]">
              Pricing
            </NavLink>
            <NavLink to="schedule" className="hover:text-[#dc2626]">
              Schedule
            </NavLink>
            <NavLink to="blog" className="hover:text-[#dc2626]">
              Blog
            </NavLink>
            <NavLink to="classes" className="hover:text-[#dc2626]">
              Classes
            </NavLink>
            <NavLink to="about" className="hover:text-[#dc2626]">
              About
            </NavLink>
            <NavLink to="contact" className="hover:text-[#dc2626]">
              Contact
            </NavLink>
          </div>

          {/* Join Class Now Button for Larger Screens */}
          <NavLink to="contact" className="hidden lg:flex justify-end">
            <button className="bg-blue-600 text-gray-50 outline-none p-2 rounded-lg hover:bg-blue-800 transition-all ease-in-out duration-75 shadow-2xl">
              Join Class Now
            </button>
          </NavLink>
        </div>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center mt-4">
            <NavLink to="/" className="mb-4 hover:text-[#dc2626]">
              Home
            </NavLink>
            <NavLink to="pricing" className="mb-4 hover:text-[#dc2626]">
              Pricing
            </NavLink>
            <NavLink to="schedule" className="mb-4 hover:text-[#dc2626]">
              Schedule
            </NavLink>
            <NavLink to="blog" className="mb-4 hover:text-[#dc2626]">
              Blog
            </NavLink>
            <NavLink to="classes" className="mb-4 hover:text-[#dc2626]">
              Classes
            </NavLink>
            <NavLink to="about" className="mb-4 hover:text-[#dc2626]">
              About
            </NavLink>
            <NavLink to="contact" className="mb-4 hover:text-[#dc2626]">
              Contact
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

