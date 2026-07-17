// import React from 'react';

// const PromoBanners = () => {
//   const banners = [
//     {
//       id: 1,
//       discount: "FLAT 30% OFF",
//       title: "Buy Wedding Jewelry Set",
//       link: "#",
//       image: "./src/assets/Images/Earring1.avif",
//     },
//     {
//       id: 2,
//       discount: "FLAT 20% OFF",
//       title: "Buy Limited Earrings Set",
//       link: "#",
//       image: "./src/assets/Images/Earring2.avif",
//     }
//   ];

//   return (
//     <div className="w-full max-w-7xl mx-auto px-4 py-12 bg-white">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
//         {banners.map((banner) => (
//           <div 
//             key={banner.id} 
//             className="relative flex items-center justify-between bg-[#F5F5F5] overflow-hidden group h-[280px] sm:h-[320px] rounded-sm transition-all duration-300 hover:shadow-md"
//           >
//             {/* Left Side: Image Container */}
//             <div className="w-1/2 h-full relative overflow-hidden">
//               <img 
//                 src={banner.image} 
//                 alt={banner.title}
//                 className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
//               />
//             </div>

//             {/* Right Side: Content Area */}
//             <div className="w-1/2 p-6 sm:p-8 flex flex-col justify-center items-start z-10">
//               <span className="text-xs sm:text-sm font-semibold tracking-wider text-gray-600 mb-2 uppercase">
//                 {banner.discount}
//               </span>
              
//               <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-gray-900 leading-tight mb-6">
//                 {banner.title}
//               </h2>
              
//               <a 
//                 href={banner.link} 
//                 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-950 border-b-2 border-gray-950 pb-1 transition-colors duration-300 hover:text-gray-600 hover:border-gray-600"
//               >
//                 SHOP NOW
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PromoBanners;


import React from 'react';

const PromoBanners = () => {
  const banners = [
    {
      id: 1,
      discount: "FLAT 30% OFF",
      title: "Buy Wedding Jewelry Set",
      link: "#",
      image: "./src/assets/Images/Earring1.avif",
    },
    {
      id: 2,
      discount: "FLAT 20% OFF",
      title: "Buy Limited Earrings Set",
      link: "#",
      image: "./src/assets/Images/Earring2.avif",
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 bg-white">
      
      {/* Heading Section - Offer & Discount Focused */}
      <div className="text-center mb-10 sm:mb-14">
        <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-600 block mb-2">
          Limited Time Deals
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif text-gray-900 font-medium">
          Special Season Offers
        </h2>
        <div className="w-16 h-[2px] bg-gray-900 mx-auto mt-4"></div>
      </div>

      {/* Banners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {banners.map((banner) => (
          <div 
            key={banner.id} 
            className="relative flex items-center justify-between bg-[#F5F5F5] overflow-hidden group h-[280px] sm:h-[320px] rounded-sm transition-all duration-300 hover:shadow-md"
          >
            {/* Left Side: Image Container */}
            <div className="w-1/2 h-full relative overflow-hidden">
              <img 
                src={banner.image} 
                alt={banner.title}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Right Side: Content Area */}
            <div className="w-1/2 p-6 sm:p-8 flex flex-col justify-center items-start z-10">
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-gray-600 mb-2 uppercase">
                {banner.discount}
              </span>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-gray-900 leading-tight mb-6">
                {banner.title}
              </h2>
              
              <a 
                href={banner.link} 
                className="text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-950 border-b-2 border-gray-950 pb-1 transition-colors duration-300 hover:text-gray-600 hover:border-gray-600"
              >
                SHOP NOW
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoBanners;