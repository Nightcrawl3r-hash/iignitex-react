import React from "react";
import Logo from "./Logo";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container m-auto">
      <div className="grid md:grid-cols-3 pt-16 pb-4 items-center px-2 md:px-0">
        <div className="flex flex-col items-start">
          <Logo />
          <p className="text-gray-700 py-1">
            Take your health and body to the next level with our comprehensive
            program designed to help you reach your fitness goals.
          </p>
          <div className="flex gap-x-4 py-4">
            <CiFacebook
              size={36}
              className="cursor-pointer hover:text-[#dc2626] duration-200 ease-in-out"
            />
            <CiTwitter
              size={36}
              className="cursor-pointer hover:text-[#dc2626] duration-200 ease-in-out"
            />
            <CiInstagram
              size={36}
              className="cursor-pointer hover:text-[#dc2626] duration-200 ease-in-out"
            />
          </div>
          <h3 className="text-gray-600">
            Privacy Policy | &copy; 2023 Iignitex
          </h3>
        </div>
        <div className="flex md:justify-center">
          <div className="">
            <h2 className="text-3xl pb-2 font-bold underline decoration-[#dc2626] underline-offset-4  text-gray-800">
              Our Classes
            </h2>
            <ul className="flex  flex-col gap-y-1">
              <li>
                <NavLink
                  to="classes"
                  className="capitalize text-gray-700 hover:text-[#dc2626]"
                >
                  Fitness classes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="classes"
                  className="capitalize text-gray-700 hover:text-[#dc2626]"
                >
                  aerobics classes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="classes"
                  className="capitalize text-gray-700 hover:text-[#dc2626]"
                >
                  Power yoga
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="classes"
                  className="capitalize text-gray-700 hover:text-[#dc2626]"
                >
                  learn machines
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="classes"
                  className="capitalize text-gray-700 hover:text-[#dc2626]"
                >
                  full body strength
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex md:justify-center">
          <div className="">
            <p className="text-3xl pb-2 font-bold underline decoration-[#dc2626] underline-offset-4  text-gray-800">
              Working Hours
            </p>
            <div className="flex flex-col  ">
              <div>
                <p className="capitalize  font-bold text-gray-700">
                  monday-friday
                </p>
                <h3 className="text-gray-600 ">7:00am - 21:00pm</h3>
              </div>
              <div>
                <p className="capitalize  font-bold text-gray-700">saturday</p>
                <h3 className="text-gray-600 ">7:00am - 19:00pm</h3>
              </div>
              <div>
                <p className="capitalize  font-bold text-gray-700">
                  sunday - closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
