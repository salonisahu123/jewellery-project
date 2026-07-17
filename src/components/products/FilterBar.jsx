import React from "react";
import { SlidersHorizontal, Plus } from "lucide-react";

const FilterBar = () => {
  const filters = [
    "₹25,000 - ₹50,000",
    "Gifts For Him",
    "Women",
    "Gold Jewellery",
    "Diamond Jewellery",
    "Daily Wear",
  ];

  return (
    <div className="flex justify-between items-center py-6 border-b border-gray-200">
      {/* Left Side */}
      <div className="flex items-center gap-4 flex-wrap">

        {/* Filter Button */}
        <button className="flex items-center gap-2 border border-gray-300 rounded-full px-6 py-3 hover:border-[#C89A2B] hover:text-[#C89A2B] transition">
          <SlidersHorizontal size={18} />
          <span className="font-medium">Filter</span>
        </button>

        {/* Filter Chips */}
        {filters.map((item, index) => (
          <button
            key={index}
            className="flex items-center gap-2 border border-gray-300 rounded-full px-5 py-3 hover:border-[#C89A2B] hover:text-[#C89A2B] transition"
          >
            <Plus size={16} />
            <span>{item}</span>
          </button>
        ))}

        {/* Show More */}
        <button className="text-[#B8860B] font-semibold hover:underline">
          + Show More
        </button>

      </div>
    </div>
  );
};

export default FilterBar;