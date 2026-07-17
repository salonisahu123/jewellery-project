import React from "react";
import diamondVideo from "../assets/videos/diamondVideo.mp4";
import PromoBanners from "../components/DiamondPage/PromoBanners";
import Daimondproduct from "../components/DiamondPage/Daimondproduct";

const Diamonds = () => {

  const cards = [
  {
    title: "Carat",
    subtitle: "More than just weight",
    image:
      "./src/assets/Images/carat-diamond.jpg",
  },
  {
    title: "Cut",
    subtitle: "Precision in every facet",
    image:
      "./src/assets/Images/cut-diamond.jpg",
  },
  {
    title: "Colour",
    subtitle: "The purest expression",
    image:
      "./src/assets/Images/color-diamond.jpg",
  },
  {
    title: "Clarity",
    subtitle: "Flawless brilliance",
    image:
      "./src/assets/Images/jewelrs-tweezers-holding-a-diamond.webp",
  },
];


  return (
    <>
    <section className="relative w-full h-screen overflow-hidden mb-15">
      <video
        className="w-full h-full object-cover"
        src={diamondVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay Text */}
      <div className="absolute bottom-20 left-10 z-10 max-w-xl">
        <h1 className="text-white text-3xl md:text-6xl font-serif font-medium leading-tight">
          Forged in eons.
          <br />
          Refined by .......
        </h1>
      </div>
    </section>


    <div className="w-full max-w-7xl mx-auto px-6 lg:px-10 ">

      {/* Cards */}
      <div className="w-full max-w-7xl mx-auto px-6 ">
        {/* Heading */}
      <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-semibold leading-tight text-[#3B2A17] mb-2">
        Beyond Beauty,
        <br />
        Beyond Brilliance
      </h1>

      {/* Paragraph */}
      <p className="font-['Poppins'] text-lg md:text-xl leading-8 text-[#6B4F1D] max-w-xl mb-5">
        Discover timeless jewellery designed to celebrate your elegance,
        confidence, and unforgettable moments.
      </p>

          {/* Cards */}
          <div className="flex gap-4 h-[500px] group">
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex-1 group-hover:flex-[0.6] hover:!flex-[2.5] transition-all duration-500 ease-out relative rounded-2xl overflow-hidden cursor-pointer bg-cover bg-center"
                style={{ backgroundImage: `url(${card.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <h2 className="text-4xl font-serif font-semibold">
                    {card.title}
                  </h2>

                  <p className="text-sm mt-2 text-gray-200">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>

            <PromoBanners/>
            <Daimondproduct/>
    </>
)}
export default Diamonds;