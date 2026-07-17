import React from "react";

const menuData = [
  {
    title: "Category",
    items: ["All Jewellery", "Finger Rings", "Nose Pin", "Bangles"],
  },
  {
    title: "",
    items: ["Earrings", "Mangalsutra", "Necklaces", "Bracelets"],
  },
  {
    title: "",
    items: [
      "Pendants",
      "Chains",
      "Necklace Set",
      "Pendant & Earring Set",
    ],
  },
];

const AllJewellery = () => {

    
  return (
    <div className="absolute left-0 top-full w-full bg-white shadow-xl border-t z-50">

      <div className="max-w-7xl mx-auto grid grid-cols-4">

        {/* Left Sidebar */}
        <div className="border-r p-6">
          <div className="bg-[#F7EFEF] rounded-lg p-4 font-semibold text-[#7E2C2C] mb-4">
            Category
          </div>

          <ul className="space-y-5 text-gray-700">
            <li className="hover:text-[#8A3C3C] cursor-pointer">Price</li>
            <li className="hover:text-[#8A3C3C] cursor-pointer">Occasion</li>
            <li className="hover:text-[#8A3C3C] cursor-pointer">Gender</li>
          </ul>
        </div>

        {/* Categories */}

        <div className="col-span-2 grid grid-cols-3">

          {menuData.map((column, index) => (
            <div key={index} className="border-r p-8">

              <ul className="space-y-8">

                {column.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 cursor-pointer hover:text-[#8A3C3C]"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-100"></div>

                    <span>{item}</span>
                  </li>
                ))}

              </ul>

            </div>
          ))}
        </div>

        {/* Right Banner */}

        <div className="p-6">

          <img
            src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600"
            alt=""
            className="rounded-xl h-80 w-full object-cover"
          />

          <h2 className="mt-5 text-xl font-semibold">
            Luxury Collection
          </h2>

          <button className="mt-3 text-[#8A3C3C] font-medium">
            Explore Now →
          </button>

        </div>
      </div>

      {/* Bottom Banner */}

      <div className="border-t px-10 py-5 flex items-center justify-between bg-[#FFF8F6]">

        <div>
          <h3 className="font-semibold text-lg">
            Jewellery for Every Moment
          </h3>

          <p className="text-gray-500 text-sm">
            14,000+ Designs to Choose From
          </p>
        </div>

        <button className="bg-[#8A3C3C] text-white px-8 py-3 rounded-full">
          View All
        </button>

      </div>

    </div>
  );
};

export default AllJewellery;