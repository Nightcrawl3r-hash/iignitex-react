import React, { useState } from "react";

const MyForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    className: "",

  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace the endpoint below with the actual server-side endpoint
    const endpoint = "/api/submit-form";

    // Perform the actual form submission (e.g., using fetch or axios)
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response if needed
        console.log("Form submission successful", data);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  return (
    <div className="bg-gray-50">
      <form
        action="/api/submit-form"
        method="POST"
        className="px-6 py-4"
        onSubmit={handleSubmit}
      >
        <p className="capitalize font-bold text-4xl 2xl:text-5xl py-2">
          Leave us your info
        </p>

        <div className="mb-6">
          <label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-gray-900 2xl:text-xl"
          >
            Full Name
          </label>
          <input
            type="text"
            id="large-input"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md 2xl:text-[1.5rem] focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium 2xl:text-xl text-gray-900 "
          >
            Email Address
          </label>
          <input
            type="text"
            id="base-input"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className=" 2xl:text-[1.5rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>

        <label
          htmlFor="className"
          className="block mb-2 text-sm 2xl:text-xl font-medium text-gray-900 "
        >
          Select your className
        </label>
        <select
          id="className"
          name="className"
          value={formData.className}
          onChange={handleChange}
          placeholder="Select Your className"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        >
          <option value="" className="capitalize">
            Body Building
          </option>
          <option value="" className="capitalize">
            Boxing
          </option>
          <option value="" className="capitalize">
            Running
          </option>
          <option value="" className="capitalize">
            Fitness
          </option>
          <option value="" className="capitalize">
            Yoga
          </option>
          <option value="" className="capitalize">
            Workout
          </option>
          <option value="" className="capitalize">
            Karate
          </option>
          <option value="" className="capitalize">
            Meditation
          </option>
          <option value="" className="capitalize">
            Cycling
          </option>
         
        </select>

        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MyForm;
