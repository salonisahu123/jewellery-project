import React, { useEffect, useState } from "react";
import { Search, Heart,  User, ShoppingBag,  Grid2X2, Gem, Circle,  Gift, Sparkles, Ellipsis, } from "lucide-react";
import { NavLink,Link } from "react-router-dom";


const Navbar = () => {
  const categories = [
    { name: "All Jewellery", icon: <Grid2X2 size={18} /> },
    { name: "Gold", icon: <Circle size={18} /> },
     {
    name: "Diamond",
    icon: <Gem size={18} />,
    path: "/diamonds",
  },
    { name: "Earrings", icon: <Sparkles size={18} /> },
    { name: "Rings", icon: <Circle size={18} /> },
    { name: "Daily Wear", icon: <Sparkles size={18} /> },
    { name: "Gemstone", icon: <Gem size={18} /> },
    { name: "Wedding", icon: <Heart size={18} /> },
    { name: "Gifting", icon: <Gift size={18} /> },
    { name: "More", icon: <Ellipsis size={18} /> },
  ];

  const [likes, setLikes] = useState([]);

  useEffect(() => {
    const getLikes = () => {
      const data = JSON.parse(localStorage.getItem("like")) || [];
      setLikes(data);
    };

    getLikes();

    window.addEventListener("storage", getLikes);

    return () => {
      window.removeEventListener("storage", getLikes);
    };
  }, []);

  return (
    <div className="w-full z-50  bg-[#FCFAF6] border-b fixed border-[#D8B66C] shadow-md">

      {/* Top Navbar */}

      <div className="h-20 px-10 flex items-center justify-between border-b border-[#EAD8AA]">

        {/* Logo */}

        <Link to="/">
          <div className="cursor-pointer">
            <h1 className="text-3xl font-serif font-bold tracking-wide text-[#8B6B1F]">
              GOLDENHUE
            </h1>

            <p className="text-center text-[10px] tracking-[6px] text-[#C89A2B] uppercase">
              Jewellery
            </p>
          </div>
        </Link>

        {/* Search */}

        <div className="w-[40%] relative">

          <input
            type="text"
            placeholder="Search Jewellery..."
            className="w-full rounded-full border border-[#D9B86C] bg-white py-3 pl-12 pr-5 outline-none focus:ring-2 focus:ring-[#D4AF37] text-[#3B2A17] placeholder:text-[#A78B5C]"
          />

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B98A28]"
          />
        </div>

        {/* Right Side */}

        <div className="flex items-center gap-6">

          {/* Wishlist */}

          <Link to="/wishlist" className="relative">

            <Heart
              size={24}
              className="text-[#8B6B1F] hover:text-[#D4AF37] duration-300"
            />

            {likes.length > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#C89A2B] text-white text-[10px] flex items-center justify-center">
                {likes.length}
              </span>
            )}

          </Link>

          {/* diamonds */}

          <Link to="/diamonds">
          
            <Gem
              size={24}
              className="text-[#8B6B1F] hover:text-[#D4AF37] duration-300"
            />
          </Link>

          {/* User */}

          <Link to="/contact-Us">
            <User
              size={24}
              className="text-[#8B6B1F] hover:text-[#D4AF37] duration-300"
            />
          </Link>

          {/* Login */}
          <Link to="/login">
          <button className="px-7 py-2 rounded-full bg-gradient-to-r from-[#B98A28] to-[#F1D57A] text-[#3B2A17] font-semibold shadow-lg hover:scale-105 duration-300">
            Login
          </button>
          </Link>


        </div>
      </div>

      {/* Categories */}

      <div className="bg-[#FFFDF8]">

       <ul className="flex justify-center items-center gap-8 py-4 flex-wrap">
  {categories.map((item, index) => (
  <Link
    key={index}
    to={item.path || "#"}
    className="flex items-center gap-2 cursor-pointer text-[#6B4F1D] hover:text-[#C89A2B] text-xs uppercase tracking-wider py-2 border-b-2 border-transparent hover:border-[#D4AF37] transition-all duration-300"
  >
    {item.icon}
    <span>{item.name}</span>
  </Link>
))}
</ul>

      </div>
    </div>
  );
};

export default Navbar;