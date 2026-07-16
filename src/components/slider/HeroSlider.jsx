import React, { useEffect, useState } from "react";
import Collections from "../Collections/Collections";
import TrendingNow from "../Trending/TrendingNow";
import JwelleryWorld from "../JewelleryWorld/JwelleryWorld";
import Features from "../Features";

const images = [
  "src/assets/images/jewel.jpg",
  "src/assets/images/img1.jpg",
  "src/assets/images/neck.jpg"
];

const collections = [
  {
    id: 1,
    title: "Necklace",
    image: "src/assets/images/img2.avif",
  },
  {
    id: 2,
    title: "Earrings",
    image: "src/assets/images/img3.avif",
  },
  {
    id: 3,
    title: "Rings",
    image: "src/assets/images/img1.avif",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gray-100 py-4">
      {/* Hero Carousel Container */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Track Slider */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(calc(${7.5 - current * 85}%))`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-[85%] flex-shrink-0 px-2 transition-all duration-500"
            >
              {/* FIXED: object-contain add kiya gaya hai taaki image zero-crop ke saath poori dikhe */}
              <div className="relative w-full h-[450px] md:h-[550px] lg:h-[600px] overflow-hidden rounded-2xl shadow-sm bg-[#FAF8F5] flex items-center justify-center">
                <img
                  src={image}
                  alt={`banner-${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Diamond Style Pagination Dots */}
        <div className="flex justify-center items-center gap-3 mt-6">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2.5 w-2.5 rotate-45 transition-all duration-300 ${
                current === index
                  ? "bg-red-800 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Jewellery Collections Section */}
      <section className="w-[90%] mx-auto py-16">
        <h1 className="text-5xl text-center font-serif text-gray-800">
          Jewellery Collections
        </h1>

        <p className="text-center text-gray-500 mt-4">
          Explore our newly launched collection
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
          {/* Left Large Card */}
          <div className="md:col-span-2 md:row-span-2 relative min-h-[350px] md:min-h-[480px] overflow-hidden rounded-xl group">
            <img
              src={collections[0].image}
              alt={collections[0].title}
              className="w-full h-full object-cover duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-8 left-8 text-white">
              <h2 className="text-4xl font-semibold">
                {collections[0].title}
              </h2>
            </div>
          </div>

          {/* Right Top */}
          <div className="relative min-h-[220px] overflow-hidden rounded-xl group">
            <img
              src={collections[1].image}
              alt={collections[1].title}
              className="w-full h-full object-cover duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-5 left-5 text-white">
              <h2 className="text-2xl font-medium">{collections[1].title}</h2>
            </div>
          </div>

          {/* Right Bottom */}
          <div className="relative min-h-[220px] overflow-hidden rounded-xl group">
            <img
              src={collections[2].image}
              alt={collections[2].title}
              className="w-full h-full object-cover duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-5 left-5 text-white">
              <h2 className="text-2xl font-medium">{collections[2].title}</h2>
            </div>
          </div>
        </div>
      </section>

      <Collections />
      <TrendingNow />
      <JwelleryWorld />
      <Features />
    </div>
  );
};

export default HeroSlider;