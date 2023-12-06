import React from "react";
import RedTitle from "./RedTitle";
import dark from "../assets/dark.jpg";
import darkboy from "../assets/daark-boy.png";
import dark1 from "../assets/dark-1.png";
import dark2 from "../assets/dark-2.png";
import dark3 from "../assets/dark-3.png";
import dark4 from "../assets/dark-4.png";
import Button from "./Button";
const WhyChoose = () => {
  return (
    <div>
      <div className="" style={{ backgroundImage: `url(${dark})` }}>
        <div className="container m-auto py-16 px-2 md:px-0">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="">
              <img src={darkboy} alt="image" className="p-2" />
            </div>
            <div className="">
              <RedTitle text={` why choose us`} />
              <p className="text-white text-5xl font-semibold py-4">
                We Can Give A Shape Of Your Body Here!
              </p>
              <p className=" text-gray-300 text-xl py-1">
                At IgniteX, we are dedicated to helping you achieve the body of
                your dreams. Our expert trainers and nutritionists will work
                with you to create a personalized fitness and nutrition plan
                that helps you reach your specific goals.
              </p>
              <div className=" grid grid-cols-2 gap-4 py-4">
                <ChooseTile text={`free fitness training`} img={dark1} />
                <ChooseTile text={`modern gym equipments`} img={dark2} />
                <ChooseTile text={`gym bag equipments`} img={dark3} />
                <ChooseTile text={`fresh water bottle`} img={dark4} />
              </div>
              <div className="pt-4">
              <Button text={`Take a tour`} destination={`classes`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function ChooseTile({ img, text }) {
  return (
    <div className="">
      <div className=" flex  items-center p-1 gap-x-2">
        <img src={img} alt="image" />
        <h3 className="capitalize text-xl text-gray-300 ">{text}</h3>
      </div>
    </div>
  );
}

export default WhyChoose;
