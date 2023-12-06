import React from "react";

const recent_posts = [
  {
    title: "High-intensity Interval Training (HIIT) Workshop",
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrtjCibVBeiSkgNe1gBlTwjitrs2Hw0w6blw&usqp=CAU",
    date: "2023-12-10",
  },
  {
    title: "Mindful Monday - Yoga and Meditation Session",
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuIvpB4NOluIkyLQRJM7yBKWLa5mScPz8yrfLM7z-zIVayOSggbIEX0NqecIYwjI8kkfQ&usqp=CAU",
    date: "2023-12-08",
  },
  {
    title: "Fitness Challenge - 30-Day Ab Workout",
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXiRyPmyxc8xYI04-mjqQ2DiJS3FUq5bW51g&usqp=CAU",
    date: "2023-12-06",
  },
  {
    title: "Healthy Eating Seminar - Balancing Macros",
    image_url: "https://media.post.rvohealth.io/wp-content/uploads/2020/09/healthy-eating-ingredients-732x549-thumbnail.jpg",
    date: "2023-12-04",
  },
  {
    title: "Transformation Tuesday - Member Spotlight",
    image_url: "https://e1.pxfuel.com/desktop-wallpaper/90/167/desktop-wallpaper-gym-boys-gym-boy.jpg",
    date: "2023-12-02",
  },
];

const RecentPosts = () => {
  return (
    <div className="bg-gray-50 p-6 my-8">
      <h2 className="text-3xl font-semibold text-gray-700 underline underline-offset-4 decoration-[#dc2626] py-2">
        Recent Posts
      </h2>
      <div className="">
        {recent_posts.map((rp)=>(
            <div className=" grid grid-cols-4 gap-2 py-2 items-center" key={rp.date}>
               <div className="">
                <img src={rp.image_url} alt="image" />
               </div>
               <div className="col-span-3">
                <span className="text-sm text-gray-700">{rp.date}</span>
               <h1 className=" text-gray-800">{rp.title}</h1>
               </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
