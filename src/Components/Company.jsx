import React from "react";
import image1 from "../assets/logo-1.png";
import image2 from "../assets/logo-2.png";
import image3 from "../assets/logo-3.png";
import image4 from "../assets/logo-4.png";
import image5 from "../assets/logo-5.png";
const Company = () => {
  return (
    <div className="container m-auto py-16">
      <div className="grid grid-cols-5 gap-2 justify-center items-center">
        <div className="">
          <img src={image1} alt="company image" />
        </div>
        <div className="">
          <img src={image2} alt="company image" />
        </div>
        <div className="">
          <img src={image3} alt="company image" />
        </div>
        <div className="">
          <img src={image4} alt="company image" />
        </div>
        <div className="">
          <img src={image5} alt="company image" />
        </div>
      </div>
    </div>
  );
};

export default Company;
