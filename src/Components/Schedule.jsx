import React, { useEffect, useState } from "react";
import axios from "axios";

const Schedule = () => {
  const URL = `http://localhost:6900/weeklySchedule`;
   const [Data, setData] = useState([]);
  const [selectedDay, setselectedDay] = useState("Sunday");

  const displaySchedule = (day) => {
    const daySchedule = Data.find((item) => item.day === day);

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

  useEffect(() => {
    async function FetchData() {
      axios
        .get(URL)
        .then((response) => {
          //console.log(response)
          setData(response.data);
          //console.log(Data);
        })

        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
    FetchData();
  }, []);

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

                {/* <select
                  value={selectedDay}
                  onChange={(e) => setselectedDay(e.target.value)}
                  className="p-2 rounded-sm bg-gray-50 text-xl"
                >
                  {Data.map((item) => (
                    <option key={item.day} value={item.day}>
                      {item.day}
                    </option>
                  ))}
                </select> */}
                {Data.length > 0 && (
                  <select
                    value={selectedDay}
                    onChange={(e) => setselectedDay(e.target.value)}
                    className="p-2 rounded-sm bg-gray-50 text-xl"
                  >
                    {Data.map((item) => (
                      <option key={item.day} value={item.day}>
                        {item.day}
                      </option>
                    ))}
                  </select>
                )}
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
