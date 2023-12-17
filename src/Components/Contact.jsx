import React from "react";
import { CiFacebook ,CiTwitter,CiInstagram} from "react-icons/ci";
import MyForm from "./MyForm";

const Contact = () => {
  return (
    <div className=" overflow-hidden container m-auto py-16 px-2 lg:px-0">
      <p data-aos="fade-down" className="capitalize lg:text-5xl md:text-5xl text-4xl font-bold text-gray-950 text-center underline-offset-8 underline decoration-[#FF0336]">
        Contact Us
      </p>
      <div className="grid md:grid-cols-2 gap-4 py-16 ">
        <div className="">
          <h2 data-aos="fade-down" className="text-5xl font-semibold text-gray-800 pb-2">
            We are here to help you! To shape your body.
          </h2>
          <p data-aos="flip-up" className="text-xl text-gray-700">
            At IgniteX, we are dedicated to helping you achieve the body of your
            dreams. Our expert trainers and nutritionists will work with you to
            create a personalized fitness and nutrition plan that helps you
            reach your specific goals.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div data-aos="zoom-in" className="">
              <h2 className="text-2xl font-semibold text-gray-700 underline decoration-[#dc2626] underline-offset-4">
                Bargachi, Biratnagar
              </h2>
              <span className="text-gray-600 text-xl">Godhuli Marga</span>
            </div>
            <div  data-aos="zoom-in"className="">
              <h2 className="text-2xl font-semibold text-gray-700 underline decoration-[#dc2626] underline-offset-4">
                Opening Hours
              </h2>
              <span className="text-gray-600 text-xl">
                Mon to Fri: 7:30 am — 1:00 am
              </span>
            </div>

            <div data-aos="zoom-in" className="">
              <h2 className="text-2xl font-semibold text-gray-700 underline decoration-[#dc2626] underline-offset-4">
                Information
              </h2>
              <span className="text-gray-600 text-xl">+977-9800000000</span>
              <br />
              <span className="text-gray-600 text-xl">xyz@gmail.com</span>
            </div>
            <div data-aos="zoom-in" className="">
              <h2 className="text-2xl font-semibold text-gray-700 underline decoration-[#dc2626] underline-offset-4">
                Follow Us On
              </h2>
              <div className="flex flex-row gap-2">
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
            </div>
          </div>
        </div>
        <div className="">
          <MyForm/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
