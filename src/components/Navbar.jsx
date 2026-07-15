import React from "react";
import {
  Search,
  Heart,
  User,
  ShoppingBag,
  Grid2X2,
  Gem,
  Circle,
  Gift,
  Sparkles,
  Ellipsis,
} from "lucide-react";

const Navbar = () => {
  const categories = [
    { name: "All Jewellery", icon: <Grid2X2 size={18} /> },
    { name: "Gold", icon: <Circle size={18} /> },
    { name: "Diamond", icon: <Gem size={18} /> },
    { name: "Earrings", icon: <Sparkles size={18} /> },
    { name: "Rings", icon: <Circle size={18} /> },
    { name: "Daily Wear", icon: <Sparkles size={18} /> },
    { name: "Gemstone", icon: <Gem size={18} /> },
    { name: "Wedding", icon: <Heart size={18} /> },
    { name: "Gifting", icon: <Gift size={18} /> },
    { name: "More", icon: <Ellipsis size={18} /> },
  ];

  return (
    <div className="w-full bg-[#0D0D0D] border-b border-[#262626] text-white">
      {/* Top Navbar */}
      <div className="h-20 px-10 flex items-center justify-between border-b border-[#1A1A1A]">
        {/* Logo matching the "GOLDENHUE" vibe */}
        <div className="text-2xl font-semibold tracking-[0.2em] uppercase text-[#C5A880]">
          GOLDENHUE
          <span className="block text-[9px] tracking-[0.4em] text-gray-400 font-light text-center">JEWELRY</span>
        </div>

        {/* Search Bar matching Dark UI */}
        <div className="w-[40%] relative">
          <input
            type="text"
            placeholder="Search luxury pieces..."
            className="w-full bg-[#1A1A1A] border border-[#333333] text-gray-200 rounded-full py-2.5 pl-12 pr-4 outline-none placeholder-gray-500 focus:border-[#C5A880] transition duration-300 text-sm"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
        </div>

        {/* Action Icons */}
        <div className="flex gap-6 text-gray-400 items-center">
          <Heart size={22} className="hover:text-[#C5A880] cursor-pointer transition duration-200" />
          <ShoppingBag size={22} className="hover:text-[#C5A880] cursor-pointer transition duration-200" />
          
          {/* Golden Button for Login like screenshot */}
          <button className="flex items-center gap-2 bg-gradient-to-r from-[#C5A880] to-[#E2C799] text-black text-sm font-medium px-5 py-2 rounded-full hover:opacity-90 transition duration-200 shadow-lg shadow-yellow-950/20">
            <User size={16} />
            <span>Login</span>
          </button>
        </div>
      </div>

      {/* Bottom Navbar (Categories) */}
      <div className="bg-[#070707]">
        <ul className="flex justify-center items-center gap-8 py-3.5">
          {categories.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-2 cursor-pointer text-gray-400 hover:text-[#C5A880] text-xs uppercase tracking-wider font-light transition duration-300 py-1 border-b border-transparent hover:border-[#C5A880]"
            >
              <span className="opacity-80">{item.icon}</span>
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;