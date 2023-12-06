import React from "react";
import { HiCircleStack } from "react-icons/hi2";
import Category from "./Category";
import RecentPosts from "./RecentPosts";
const blogPosts = [
  {
    title: "Getting Started with React",
    author: "John Doe",
    date: "2023-12-06",
    content:
      "In this comprehensive guide, we'll delve into the fundamentals of React, the popular JavaScript library for building user interfaces. React's component-based architecture and virtual DOM make it a powerful tool for creating dynamic and efficient web applications. We'll cover the basics of setting up a React project, creating components, managing state and props, and handling user events. By the end of this tutorial, you'll have a solid understanding of React and be ready to start building your own interactive web applications.",
    tags: ["Technology", "Web Development"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    comments: [
      {
        user: "Alice",
        comment: "Great tutorial! It helped me a lot.",
      },
      {
        user: "Bob",
        comment: "Do you have more tutorials on React?",
      },
    ],
  },
  {
    title: "Healthy Eating Habits for a Busy Lifestyle",
    author: "Jane Smith",
    date: "2023-11-28",
    content:
      "Maintaining a healthy diet is crucial, especially for those with busy schedules. In this blog post, we'll explore practical tips and strategies to incorporate nutritious meals into a hectic lifestyle. From meal prepping and smart snack choices to staying hydrated and balancing macronutrients, you'll discover actionable advice to promote overall well-being. Whether you're a student, professional, or parent, these healthy eating habits can positively impact your energy levels, focus, and long-term health goals.",
    tags: ["Health", "Lifestyle"],
    image:
      "https://images.unsplash.com/photo-1514995669114-6081e934b693?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    comments: [
      {
        user: "Charlie",
        comment:
          "I never realized how important diet is until I read this post. Thanks!",
      },
    ],
  },
  {
    title: "Introduction to Machine Learning Algorithms",
    author: "Emily Johnson",
    date: "2023-11-15",
    content:
      "Machine learning is a fascinating field that powers a wide range of applications, from recommendation systems to image recognition. In this introductory blog post, we'll explore the core machine learning algorithms, including linear regression, decision trees, and clustering techniques. Gain insights into how these algorithms work, their strengths, and common use cases. Whether you're a beginner or looking to deepen your understanding, this post provides a solid foundation for anyone interested in the exciting world of machine learning.",
    tags: ["Technology", "Machine Learning"],
    image:
      "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    comments: [
      {
        user: "David",
        comment:
          "I'm fascinated by machine learning. Can you recommend any good books on the topic?",
      },
    ],
  },
  {
    title: "10 Tips for Effective Time Management",
    author: "Alex Turner",
    date: "2023-10-22",
    content:
      "Time management is a crucial skill for achieving personal and professional success. In this blog post, we'll share 10 practical tips to help you make the most of your time. From setting clear goals and prioritizing tasks to using productivity tools and embracing breaks, these strategies can improve your efficiency and reduce stress. Whether you're a student, entrepreneur, or anyone looking to enhance their time management skills, these tips are applicable to various aspects of life.",
    tags: ["Productivity", "Lifestyle"],
    image:
      "https://images.unsplash.com/photo-1698891667757-a902e4879254?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    comments: [
      {
        user: "Eva",
        comment:
          "These tips are a game-changer. I can already feel the difference!",
      },
    ],
  },
  {
    title: "Exploring National Parks: A Photo Journey",
    author: "Michael Anderson",
    date: "2023-10-05",
    content:
      "Embark on a breathtaking visual journey through some of the most stunning national parks around the world. This photo-filled blog post captures the beauty of nature, from majestic mountains to serene lakes. Each park has its unique charm and offers a different experience for nature enthusiasts. Whether you're an avid traveler or simply appreciate the wonders of the great outdoors, these mesmerizing photos will inspire you to add these national parks to your travel bucket list.",
    tags: ["Travel", "Nature"],
    image:
      "https://images.unsplash.com/photo-1499243085368-45e4b97119c4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    comments: [
      {
        user: "Grace",
        comment:
          "These photos are stunning! I need to add these parks to my travel bucket list.",
      },
    ],
  },
];

const Blog = () => {
  return (
    <div className="container m-auto py-16">
      <p className="capitalize lg:text-5xl md:text-5xl text-4xl font-bold text-gray-950 text-center underline-offset-8 underline decoration-[#FF0336]">
        Blogs
      </p>
      <div className=" grid md:grid-cols-5 lg:grid-cols-4 gap-4 px-2 md:px-0">
        <div className="flex flex-col justify-center py-16 gap-8   col-span-3">
          {blogPosts.map((blog) => (
            <div className="bg-gray-50 p-6" key={blog.author}>
              <div className="">
                <img src={blog.image} alt="" />
                <div className="pt-4 flex gap-2 items-center">
                  <HiCircleStack className="text-[#dc2626]" />
                  <h2 className="font-semibold">{blog.author}</h2>
                  <span className="text-gray-700">{blog.date}</span>
                  <div className="text-gray-800 flex gap-2">
                    <span className="">{blog.tags} </span>
                  </div>
                </div>
              </div>
              <div className="">
                <h2 className="text-4xl font-bold text-gray-800">
                  {blog.title}
                </h2>
                <p className="text-gray-700">{blog.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className=" md:py-16  md:col-span-2 lg:col-auto ">
          <Category />
          <RecentPosts/>
        </div>
      </div>
    </div>
  );
};

export default Blog;
