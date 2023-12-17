import React from "react";
import { Link } from "react-router-dom";
import { FaClock, FaUser } from "react-icons/fa6";

const Classes = () => {
  return (
    <div className=" overflow container m-auto py-16 px-2 lg:px-0">
      <p data-aos="fade-down" className="capitalize lg:text-5xl md:text-5xl text-4xl font-bold text-gray-950 text-center underline-offset-4 underline decoration-[#FF0336]">
        Classes
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center justify-center py-16">
        <ClassTile
          name={`Emliy Rodriguez`}
          time={`wed:9:00AM`}
          event={`cycling `}
          URL={`https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
        />

        <ClassTile
          name={`James Carter`}
          time={`Thu:5:30PM`}
          event={`swimming`}
          URL={`https://plus.unsplash.com/premium_photo-1664302267370-c79170004068?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
        />

        <ClassTile
          name={`Olivia Patel`}
          time={`Fri:4:00PM`}
          event={`fitness`}
          URL={`https://plus.unsplash.com/premium_photo-1664109999537-088e7d964da2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
        />

        <ClassTile
          name={`Marcus Thompson`}
          time={`Sat:7:30PM`}
          event={`body building `}
          URL={`https://images.unsplash.com/photo-1603287681836-b174ce5074c2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
        />

        <ClassTile
          name={`Sophia Kim`}
          time={`Sun:8:00AM`}
          event={`meditation`}
          URL={`https://images.unsplash.com/photo-1602192509154-0b900ee1f851?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
        />

        <ClassTile
          name={`Benjamin Lopez`}
          time={`Tue:12:45PM`}
          event={`Yoga`}
          URL={`https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
        />
      </div>
    </div>
  );
};

function ClassTile({ name, time, event, URL }) {
  return (
    <div
    data-aos="zoom-in"
      className="bg-cover  h-[15rem] rounded-lg flex flex-col align-text-bottom justify-end"
      style={{ backgroundImage: `url(${URL})` }}
    >
      <div className="p-2">
        <p className="capitalize 2xl:text-4xl text-2xl text-slate-50 font-bold underline-offset-4 underline decoration-[#FF0336] ">
          {event}
        </p>
        <p className="capitalize text-slate-50 2xl:text-2xl font-semibold">
          <span className="flex flex-row items-center gap-2">
            <FaClock  className="text-[#dc2626]"/>
            {name}
          </span>
          <span className="flex flex-row items-center gap-2">
            <FaUser className="text-[#dc2626]" />
            {time}
          </span>
        </p>
        <section className="py-6">
          <Link
            to="contact"
            className=" relative uppercase text-tahiti-50 bg-gray-500 font-bold px-8 py-4 md:px-6 md:py-4 group"
          >
            <span className="absolute w-0 group-hover:w-full transition-all ease-out duration-300 h-full bg-[#FF0336]  left-0 top-0"></span>
            <span className="relative">contact us</span>
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Classes;
