import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="container m-auto py-16 px-2 md:px-0">
      <p className="capitalize lg:text-5xl md:text-5xl text-4xl font-bold text-gray-950 text-center underline-offset-8 underline decoration-[#FF0336]">
        Pricing
      </p>
      <div className=" text-center py-8">
        <h2 className="capitalize text-5xl text-gray-800 font-semibold">
          Exclusive pricing plan
        </h2>
        <p className="py-1 font-semibold text-gray-700">
          IgniteX an unknown printer took a galley of type and scrambled make a
          type specimen book.
        </p>
      </div>
      <div className="grid md:grid-cols-3  gap-4 lg:gap-12">
        <div className=" p-2 lg:p-6 bg-gray-800 rounded-lg">
          <PricingTable title={`Basic plan`} price={`RS1500`} />
          <div className="flex flex-col gap-y-1">
            <Checked text={`Gym access`} />
            <Checked text={`1 session/month`} />
            <Checked text={`Group classes`} />
            <NotChecked text={`Nutritional Counselling`} />
            <NotChecked text={`Sauna Access`} />
            <NotChecked text={`Priority Booking`} />
            <NotChecked text={`24x7 phone & email support`} />
            <div className="py-1">
              <PlanButton />
            </div>
          </div>
        </div>
        <div className=" p-2 lg:p-6 bg-gray-800 rounded-lg">
          <PricingTable title={`standard plan`} price={`RS2500`} />
          <div className="flex flex-col gap-y-1">
            <Checked text={`Gym access`} />
            <Checked text={`1 session/month`} />
            <Checked text={`Group classes`} />
            <Checked text={`Nutritional Counselling`} />
            <Checked text={`Sauna Access`} />
            <NotChecked text={`Priority Booking`} />
            <NotChecked text={`24x7 phone & email support`} />

            <div className="py-1">
              <PlanButton />
            </div>
          </div>
        </div>
        <div className=" p-2 lg:p-6 bg-gray-800 rounded-lg">
          <PricingTable title={`premium plan`} price={`RS3500`} />
          <div className="flex flex-col gap-y-1">
            <Checked text={`Gym access`} />
            <Checked text={`1 session/month`} />
            <Checked text={`Group classes`} />
            <Checked text={`Nutritional Counselling`} />
            <Checked text={`Sauna Access`} />
            <Checked text={`Priority Booking`} />
            <Checked text={`24x7 phone & email support`} />
            <div className="py-1">
              <PlanButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Checked({ text }) {
  return (
    <div className="flex gap-2 items-center text-xl capitalize">
      <FaCircleCheck className="text-[#dc2626]" />
      <span className="text-gray-200">{text}</span>
    </div>
  );
}

function NotChecked({ text }) {
  return (
    <div className="flex gap-2 items-center text-xl capitalize">
      <FaCircleCheck className="text-gray-400" />
      <span className="text-gray-400 line-through">{text}</span>
    </div>
  );
}

function PricingTable({ title, price }) {
  return (
    <div className="flex flex-col pb-4 capitalize">
      <h2 className="text-gray-50 text-2xl font-semibold ">{title}</h2>
      <p className="flex gap-2 text-xl text-gray-100">
        <span className="font-bold text-[#dc2626]">{price}</span>/month
      </p>
    </div>
  );
}

function PlanButton() {
  return (
    <div className="flex justify-center items-center bg-blue-600 rounded-sm hover:bg-blue-700">
      <Link to="contact" className="text-gray-100 p-2 font-semibold ">
        Choose Plan
      </Link>
    </div>
  );
}

export default Pricing;
