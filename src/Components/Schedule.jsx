import React, { useState } from "react";

const weeklySchedule = [
  {
    day: "Monday",
    classes: [
      {
        className: "Cardio Blast",
        time: "9:00 AM - 10:00 AM",
        trainer: "Alex Smith",
      },
      {
        className: "Strength Training",
        time: "4:00 PM - 5:00 PM",
        trainer: "Emily Johnson",
      },
      {
        className: "Yoga for Beginners",
        time: "6:00 PM - 7:00 PM",
        trainer: "Mark Anderson",
      },
      {
        className: "Core Conditioning",
        time: "8:00 PM - 9:00 PM",
        trainer: "Jessica Taylor",
      },
    ],
  },
  {
    day: "Tuesday",
    classes: [
      {
        className: "Yoga Fusion",
        time: "10:30 AM - 11:30 AM",
        trainer: "Michael Davis",
      },
      {
        className: "HIIT",
        time: "5:30 PM - 6:30 PM",
        trainer: "Sarah White",
      },
      {
        className: "Pilates Sculpt",
        time: "7:30 PM - 8:30 PM",
        trainer: "Chris Brown",
      },
      {
        className: "Total Body Burn",
        time: "9:00 PM - 10:00 PM",
        trainer: "Emma Turner",
      },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      {
        className: "Pilates",
        time: "8:00 AM - 9:00 AM",
        trainer: "Chris Brown",
      },
      {
        className: "Boxing Fitness",
        time: "6:00 PM - 7:00 PM",
        trainer: "Emma Taylor",
      },
      {
        className: "Barre Sculpt",
        time: "7:30 PM - 8:30 PM",
        trainer: "David White",
      },
      {
        className: "Stretch and Relax",
        time: "9:00 PM - 10:00 PM",
        trainer: "Sophia Adams",
      },
    ],
  },
  {
    day: "Thursday",
    classes: [
      {
        className: "Spin Class",
        time: "7:30 AM - 8:30 AM",
        trainer: "Daniel Lee",
      },
      {
        className: "Zumba",
        time: "3:00 PM - 4:00 PM",
        trainer: "Olivia Martinez",
      },
      {
        className: "Functional Fitness",
        time: "6:30 PM - 7:30 PM",
        trainer: "Ryan Wilson",
      },
      {
        className: "Dance Cardio",
        time: "8:30 PM - 9:30 PM",
        trainer: "Lily Turner",
      },
    ],
  },
  {
    day: "Friday",
    classes: [
      {
        className: "Functional Fitness",
        time: "11:00 AM - 12:00 PM",
        trainer: "Ryan Wilson",
      },
      {
        className: "Dance Cardio",
        time: "7:00 PM - 8:00 PM",
        trainer: "Sophia Adams",
      },
      {
        className: "Bootcamp",
        time: "8:30 PM - 9:30 PM",
        trainer: "Matthew Miller",
      },
      {
        className: "Flexibility Training",
        time: "10:00 PM - 11:00 PM",
        trainer: "Lily Turner",
      },
    ],
  },
  {
    day: "Saturday",
    classes: [
      {
        className: "Bootcamp",
        time: "9:30 AM - 10:30 AM",
        trainer: "Matthew Miller",
      },
      {
        className: "Flexibility Training",
        time: "2:00 PM - 3:00 PM",
        trainer: "Lily Turner",
      },
      {
        className: "Meditation",
        time: "4:00 PM - 5:00 PM",
        trainer: "Ava Garcia",
      },
      {
        className: "Strength and Balance",
        time: "6:00 PM - 7:00 PM",
        trainer: "Noah Clark",
      },
    ],
  },
  {
    day: "Sunday",
    classes: [
      {
        className: "Meditation",
        time: "12:00 PM - 1:00 PM",
        trainer: "Ava Garcia",
      },
      {
        className: "Bodyweight Circuit",
        time: "4:30 PM - 5:30 PM",
        trainer: "Noah Clark",
      },
      {
        className: "Yoga Flow",
        time: "6:30 PM - 7:30 PM",
        trainer: "Emma Turner",
      },
      {
        className: "High Intensity Yoga",
        time: "8:00 PM - 9:00 PM",
        trainer: "David White",
      },
    ],
  },
];

const Schedule = () => {
  const [selectedDay, setselectedDay] = useState("");

  const displaySchedule = (day) => {
    const daySchedule = weeklySchedule.find((item) => item.day === day);

    if (daySchedule) {
      return (
        <div className="">
          {daySchedule.classes.map((cls) => (
            <div key={cls.className}>
              <div className="grid grid-cols-3 bg-gray-50 p-6 text-gray-800 ">
                <h2 className="">{cls.className}</h2>
                <span className="">{cls.time}</span>
                <h1 className="">{cls.trainer}</h1>
              </div>
              <hr />
            </div>
          ))}
        </div>
      );
    } else {
      return <p>No classes scheduled for this day.</p>;
    }
  };

  return (
    <div className="container m-auto py-16 px-2 md:px-0">
      <p className="capitalize lg:text-5xl md:text-5xl text-4xl font-bold text-gray-950 text-center underline-offset-8 underline decoration-[#FF0336]">
        Schedule
      </p>
      <div className="  py-4 md:py-36">
        <div className="">
          <div>
            <div className="grid md:grid-cols-5 justify-center items-center">
              <div className="flex flex-col items-center  gap-2">
                <h1 className="text-2xl font-semibold text-gray-700">
                  Weekly Schedule
                </h1>

                <select
                  value={selectedDay}
                  onChange={(e) => setselectedDay(e.target.value)}
                  className="p-2 rounded-sm bg-gray-50 text-xl"
                >
                  <option value="" disabled>
                    Select a day
                  </option>
                  {weeklySchedule.map((item) => (
                    <option key={item.day} value={item.day}>
                      {item.day}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-4">{displaySchedule(selectedDay)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
