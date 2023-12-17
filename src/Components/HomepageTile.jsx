import React from "react";
import image1 from "../assets/purchase.png";
import image2 from "../assets/nutrition.png";
import image3 from "../assets/workout.png";
const HomepageTile = () => {
  return (
    <div className="container m-auto">
      <div className="grid md:grid-cols-3 gap-4 items-center justify-center px-2 md:px-2">
        <Tile
          subtitle={`Our team of experts will work with you to create a customized plan that
        helps you achieve success one step at a time.`}
          text={`Progression`}
          image={image1}
        />
        <Tile
          image={image2}
          text={`Workout`}
          subtitle={`With a variety of workouts to choose from, you'll have everything you need to get into the best shape of your life.`}
        />
        <Tile
          text={`nutritions`}
          image={image3}
          subtitle={`Our team will work with you to create a personalized meal plan that helps you reach your specific health goals.`}
        />
      </div>
    </div>
  );
};

function Tile({ text, subtitle, image }) {
  return (
    <div data-aos="zoom-in" className="flex flex-col cursor-pointer bg-white justify-center py-6 px-10 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-2xl min-h-[340px] w-full card-item-div md1000:min-h-[260px]">
      <img src={image} alt="" className=" w-[75px] mb-4" />
      <p className=" text-[24px] font-bold uppercase mb-7">{text}</p>
      <p className="text-[15px] font-medium leading-2 w-full">{subtitle}</p>
    </div>
  );
}

export default HomepageTile;
