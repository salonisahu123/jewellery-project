import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
// import Navbar from "./Navbar";


const UsersLike = () => {
  const [like, setLike] = useState(() => {
    const savedLikes = localStorage.getItem("like");
    return savedLikes ? JSON.parse(savedLikes) : [];
  });

  useEffect(() => {
    localStorage.setItem("like", JSON.stringify(like));
  }, [like]);

  const removeLike = (id) => {
    const updatedLike = like.filter((item) => item.id !== id);
    setLike(updatedLike);
  };

  return (
    <>
  {/* <Navbar/> */}
    <div className="min-h-screen bg-[#F8F6F2] py-12 px-4">
      <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-lg rounded-3xl border border-[#D6B96B] shadow-[0_0_40px_rgba(201,162,74,0.18)] p-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-serif text-[#3B2A17]">
            My Wishlist
          </h1>

          <p className="text-[#A07A27] mt-2 text-lg">
            Curate Your Personal Jewellery Collection
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F3DE8A] rounded-full mx-auto mt-4"></div>
        </div>

        {/* Empty Wishlist */}
        {like.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24">
            <FaHeart
              size={70}
              className="text-[#D4AF37] mb-6"
            />

            <h2 className="text-3xl font-serif text-[#3B2A17]">
              Your Wishlist is Empty
            </h2>

            <p className="text-gray-600 mt-3 text-center">
              Add your favourite jewellery and it will appear here.
            </p>
          </div>
        ) : (
          <div className="grid gap-8">
            {like.map((el) => (
              <div
                key={el.id}
                className="bg-white rounded-3xl border border-[#E8D3A5] shadow-[0_8px_25px_rgba(201,162,74,0.15)] p-6 flex flex-col md:flex-row gap-6 items-center hover:shadow-[0_10px_35px_rgba(201,162,74,0.25)] transition-all duration-300"
              >
                {/* Product Image */}
                <div className="w-40 h-40 bg-[#FFFDF9] rounded-2xl border border-[#EAD7AA] flex items-center justify-center">
                  <img
                    src={el.image}
                    alt={el.title}
                    className="w-32 h-32 object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl font-serif text-[#3B2A17] line-clamp-2">
                    {el.title}
                  </h2>

                  <p className="text-gray-500 mt-3">
                    Quantity :
                    <span className="font-semibold text-[#3B2A17]">
                      {" "}
                      {el.qty || 1}
                    </span>
                  </p>

                  <p className="text-3xl font-bold text-[#C89A2B] mt-3">
                    ₹{el.price}
                  </p>
                </div>

                {/* Remove Button */}
                <div className="flex flex-col items-center gap-3">
                  <button
                    onClick={() => removeLike(el.id)}
                    className="w-14 h-14 rounded-full bg-gradient-to-r from-[#B98A28] to-[#F2D67C] text-white flex items-center justify-center shadow-lg hover:scale-110 duration-300"
                  >
                    <FaHeart size={22} />
                  </button>

                  <span className="text-sm text-[#8B6B1F]">
                    Remove
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default UsersLike;