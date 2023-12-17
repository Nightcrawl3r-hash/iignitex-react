import React from "react";
import RedTitle from "./RedTitle";
import image1 from "../assets/trinerr-1.jpg";
import image2 from "../assets/trainer-2.jpg";
import image3 from "../assets/trainer-3.webp";
import back from "../assets/back-2.jpg";
import splash from "../assets/splash.png";
const Coaches = () => {
  return (
    <div className="" style={{ backgroundImage: `url(${back})` }}>
      <div className="container m-auto py-16">
        <div className="flex flex-col justify-center">
          <RedTitle text={`gym trainers`} />
          <h1 data-aos="fade-down" className="capitalize font-bold text-5xl text-center py-2">
            team of expert coaches
          </h1>
          <p data-aos="fade-down" className="text-center text-gray-600 font-semibold">
            Expert team of coaches helps you succeed in any goal, personalized
            guidance and motivation provided!
          </p>
          <div className="grid md:grid-cols-3 gap-4 justify-center items-center text-center py-4">
            <CoachTile
              image={image1}
              title={`Aiden Nelson`}
              subtitle={`Crossfit Trainer`}
            />

            <CoachTile
              image={image2}
              title={`Avery Hope`}
              subtitle={`Yoga Trainer`}
            />
            <CoachTile
              image={image3}
              title={`Lily Grace`}
              subtitle={`Crossfit Trainer`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

function CoachTile({ image, title, subtitle }) {
  return (
    <div
      data-aos="zoom-in"
      className="flex justify-center flex-col items-center bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${splash})` }}
    >
      <img src={image} alt="trainer-image" className="rounded-full h-64 w-52" />
      <h2 className="text-2xl font-semibold py-1">{title}</h2>
      <h3 className="font-semibold text-gray-800 text-xl">{subtitle}</h3>
    </div>
  );
}

export default Coaches;
