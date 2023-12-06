import React, { useState } from "react";
import { IoIosArrowDropright } from "react-icons/io";

const gym_categories = [
  {
    major_category: "Cardio",
    subcategories: [
      "Treadmill",
      "Elliptical Machine",
      "Stationary Bike",
      "Rowing Machine",
    ],
  },
  {
    major_category: "Strength Training",
    subcategories: [
      "Free Weights",
      "Weight Machines",
      "Resistance Bands",
      "Kettlebells",
    ],
  },
  {
    major_category: "Group Classes",
    subcategories: ["Yoga", "Pilates", "Zumba", "Spin Class", "CrossFit"],
  },
  {
    major_category: "Functional Training",
    subcategories: ["TRX", "BOSU Ball", "Medicine Ball", "Battle Ropes"],
  },
  {
    major_category: "Flexibility and Mobility",
    subcategories: ["Stretching", "Foam Rolling", "Mobility Drills"],
  },
  {
    major_category: "Mind-Body Connection",
    subcategories: ["Meditation", "Mindfulness", "Breathing Exercises"],
  },
  {
    major_category: "Nutrition",
    subcategories: ["Meal Planning", "Supplements", "Nutritional Counseling"],
  },
  {
    major_category: "Recovery",
    subcategories: ["Sauna", "Cryotherapy", "Massage", "Rest Days"],
  },
];

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      // Clicking on the same category again should close it
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <div>
      <p className="text-3xl underline underline-offset-4 decoration-[#dc2626] font-semibold text-gray-800">
        Category
      </p>
      <div className="py-4 select-none">
        {gym_categories.map((cat) => (
          <div className="" key={cat.major_category}>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => handleCategoryClick(cat.major_category)}
            >
              <IoIosArrowDropright
                size={24}
                className={`text-[#dc2626] transform ${
                  selectedCategory === cat.major_category
                    ? "rotate-90"
                    : "rotate-0"
                }`}
              />
              <h2 className="font-semibold text-gray-700 text-2xl hover:text-[#dc2626]">
                {cat.major_category}<span className="text-sm">({cat.subcategories.length})</span>
              </h2>
            </div>
            {selectedCategory === cat.major_category && (
              <ul className="ml-4 mb-4 transition-all ease-in-out duration-900">
                {cat.subcategories.map((subcat) => (
                  <li className="text-gray-600 text-xl" key={subcat}>
                    {subcat}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
