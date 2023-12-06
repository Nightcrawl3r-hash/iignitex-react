import React from "react";
import Logo from "./Logo";

import RedTitle from "./RedTitle";
import Button from "./Button";
const About = () => {
  return (
    <div className="container m-auto py-16 px-2 md:px-0">
      <p className="capitalize lg:text-5xl md:text-5xl text-4xl font-bold text-gray-950 text-center underline-offset-4 underline decoration-[#FF0336]">
        About Us
      </p>
      <div className="flex flex-col items-center py-8">
        <Logo />
        <p className="pt-8 text-gray-800">
          Introducing IgniteX, your ultimate destination for transforming your
          fitness journey into an exhilarating experience. At IgniteX, we
          believe that fitness is not just about achieving physical strength but
          also igniting your passion for a healthier lifestyle. Our
          state-of-the-art gym facility offers a diverse range of cutting-edge
          equipment and expert trainers who are dedicated to guiding and
          motivating you towards your fitness goals. Whether you're a beginner
          seeking to kickstart your fitness journey or an experienced fitness
          enthusiast looking for new challenges, IgniteX provides tailored
          workout programs, group classes, and personalized training sessions to
          cater to your individual needs. With a vibrant and welcoming
          atmosphere, IgniteX fosters a supportive community that inspires and
          encourages each member to push their limits and unlock their full
          potential. Join us at IgniteX and let the fire within you burn
          brighter than ever as you embark on a transformative fitness
          adventure.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4 py-2 bg-white justify-center items-center" >
        <div className="">
          <img src="https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" />
        </div>
        <div className="">
          <RedTitle text={`Who we are`}/>
          <h2 className="text-5xl font-bold uppercase  py-4 text-[#dc2626] ">
            we will give you strength and health
          </h2>
          <p className="text-gray-700 py-4">
          At IgniteX, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals.
          </p>
          <div className="py-2">
          <Button text={`contact us`} destination={`contact`}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
