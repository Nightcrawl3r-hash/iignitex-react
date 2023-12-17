import React from "react";
import Red from '../assets/red.svg'
const RedTitle = ({text}) => {
  return (
    <div>
      <div data-aos="zoom-in" className="relative text-center  grid justify-items-center">
        <img src={Red} alt="Your Image" className=" 2xl:w-[24rem]" />
        <div
          className="absolute top-1/2  transform  -translate-y-1/2 text-white md:text-xl 2xl:text-3xl 2xl:pl-12 uppercase "
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default RedTitle;
