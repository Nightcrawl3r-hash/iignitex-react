import React from "react";
import { Link } from "react-router-dom";


const Button = ({ text, destination }) => {
  return (
    <div>
      <Link
        to={destination}
        class=" relative uppercase text-tahiti-50 bg-gray-700 text-gray-100 font-bold md:px-6 md:py-4  px-8 py-4 group"
      >
        <span class="absolute w-0 group-hover:w-full transition-all ease-out duration-300 h-full bg-[#FF0336]  left-0 top-0"></span>
        <span class="relative  2xl:text-xl text-gray-50 ">{text}</span>
      </Link>
    </div>
  );
};

export default Button;
