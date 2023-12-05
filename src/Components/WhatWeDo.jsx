import React from "react";
import RedTitle from "./RedTitle";
import Button from "./Button";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import girl from "../assets/girl running.png";
const WhatWeDo = () => {
  return (
    <div className="container m-auto py-16">
      <div className="flex flex-cols-2 gap-2">
        <div className="flex flex-col items-start">
          <RedTitle text={`what we do`} />
          <h2 className="text-5xl font-semibold py-2 w-2/3">
            Take Your Health And Body To Next Level
          </h2>
          <p className="text-xl py-1 text-gray-700 font-semibold w-2/3">
            Take your health and body to the next level with our comprehensive
            program designed to help you reach your fitness goals.
          </p>
          <div className="grid grid-cols-3 gap-2 py-4">
            <WhatWeDoTile text={`professional trainers`} image={image1} />
            <WhatWeDoTile text={`modern equipments`} image={image2} />
            <WhatWeDoTile text={`fancy gym machines`} image={image3} />
          </div>
          <div className="py-2">
          <Button text={`take a tour`} destination={`classes`} />
          </div>
        </div>
        <div className="">
          <img src={girl} alt="image" />
        </div>
      </div>
    </div>
  );
};

function WhatWeDoTile({ image, text }) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <img src={image} alt="image" className="h-16" />
      <h3 className=" uppercase text-md font-semibold text-gray-500">{text}</h3>
    </div>
  );
}

export default WhatWeDo;
