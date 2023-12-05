import React from "react";
import Button from "./Button";
import Background from "../assets/background.webp";
import RedTitle from "./RedTitle";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import FooterUp from "../assets/footer-up.webp";
import { NavLink } from "react-router-dom";
import Company from "./Company";
import Coaches from "./Coaches";
import WhyChoose from "./WhyChoose";
import WhatWeDo from "./WhatWeDo";
import HomepageTile from "./HomepageTile";



const Home = () => {
  return (
    <div className="">
      <div
        className="h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="grid grid-cols-2 items-center h-full container m-auto">
          <div className="flex flex-col items-start">
            <RedTitle text={"find your energy"} />
            <h2 className="text-7xl font-semibold uppercase text-[#dc2626] py-4 ">
              Make your body
            </h2>
            <h2 className="text-7xl uppercase font-semibold text-gray-100 py-4">
              Fit and perfect
            </h2>
            <Button text={`Our Classes`} destination={`classes`} />
          </div>

          <div class="flex flex-row-reverse -rotate-90 text-white absolute top-2/4 right-0 items-center  ">
            <p class="uppercase  text-2xl font-bold tracking-widest">share</p>
            <span class="w-[35px] bg-[#FF0336] h-[2.5px] mr-6"></span>
            <div className="flex  gap-4 ">
              <CiFacebook
                size={36}
                className="rotate-90 cursor-pointer hover:text-[#dc2626] duration-200 ease-in "
              />
              <CiInstagram
                size={36}
                className="rotate-90 cursor-pointer hover:text-[#dc2626] duration-200 ease-in "
              />
              <CiTwitter
                size={36}
                className="rotate-90 cursor-pointer hover:text-[#dc2626] duration-200 ease-in "
              />
            </div>
          </div>
        </div>
      </div>
      <HomepageTile/>
      <WhatWeDo/>
      <WhyChoose />
      <Coaches />
      <Company />
      <BlogTileHome />
      <CallNumber />
    </div>
  );
};

function CallNumber() {
  return (
    <div className="" style={{ backgroundImage: `url(${FooterUp})` }}>
      <div className="container m-auto">
        <div className="text-gray-100 flex flex-col py-24">
          <h2 className="text-4xl font-semibold pb-1">
            Need a Fitness Trainer?
          </h2>
          <a href="tel:98258796542" className="text-2xl hover:text-[#dc2626]">
            <span className="text-xl text-[#dc2626]">Call:</span>{" "}
            +977-98258796542
          </a>
        </div>
      </div>
    </div>
  );
}

function BlogTileHome() {
  return (
    <div className="container m-auto py-16">
      <div className="flex flex-col justify-center">
        <RedTitle text={"blog"} />
        <h1 class="capitalize font-bold text-5xl text-center py-2">
          our recent news
        </h1>
        <p class=" text-center text-gray-600 font-semibold">
          IgniteX an unknown printer took a galley of type and scrambled make a
          type specimen book.
        </p>
        <div className=" grid grid-cols-3 gap-4 py-4">
          <BlogSmallTile
            text={`Yoga For Everyone in 2023`}
            date={`22.03.2023`}
            subtitle={`This is program designed to make the practice of yoga beneficial for people of all ages, abilities, and backgrounds.`}
          />
          <BlogSmallTile
            text={`Getting Back Into CrossFit After Vacation`}
            date={`25.06.2023`}
            subtitle={`Learn how to ease back into your CrossFit routine after a vacation with tips and strategies for success.`}
          />
          <BlogSmallTile
            text={`Meet Fitness Ambassador Grace`}
            date={`15.08.2023`}
            subtitle={`Get to know Grace, a fitness enthusiast and dedicated ambassador who is passionate about helping others reach their fitness goals.

`}
          />
        </div>
      </div>
    </div>
  );
}

function BlogSmallTile({ text, date, subtitle }) {
  return (
    <div className="flex flex-col border-solid shadow-2xl p-4 rounded-lg">
      <button
        type="button"
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm 2xl:text-xl px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-max"
      >
        {date}
      </button>
      <h2 className="font-bold text-2xl 2xl:text-3xl py-4">{text}</h2>
      <p className="text-gray-500 font-semibold ">{subtitle}</p>
      <section class="py-8">
        <NavLink
          to="blog"
          className=" relative uppercase text-tahiti-50 bg-gray-700 font-bold md:px-6 md:py-4  px-8 py-4 group"
        >
          <span className="absolute w-0 group-hover:w-full transition-all ease-out duration-300 h-full bg-[#FF0336]  left-0 top-0"></span>
          <span className="relative text-gray-50">read more </span>
        </NavLink>
      </section>
    </div>
  );
}

export default Home;
