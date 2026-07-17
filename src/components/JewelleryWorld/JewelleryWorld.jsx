// import React from "react";

// const JewelleryWorld = () => {
//   const worldData = [
//     {
//       id: 1,
//       title: "Wedding",
//       image:
//         "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw770a9bca/homepage/tanishq-pillars/tw-nt-wedding-desktop.jpg",
//       large: true,
//     },
//     {
//       id: 2,
//       title: "Diamond",
//       image:
//         "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw1f6a4391/homepage/tanishq-pillars/fod-diamond-desktop.jpg",
//       large: true,
//     },
//     {
//       id: 3,
//       title: "Gold Exchange",
//       image:
//         "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw60988e8b/homepage/tanishq-pillars/tw-nt-gold-desktop.jpg",
//       large: false,
//     },
//     {
//       id: 4,
//       title: "Daily Wear",
//       image:
//         "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw0f91b4a3/homepage/tanishq-pillars/ai-dailywear-desktop.jpg",
//       large: false,
//     },
//   ];

//   return (
//     <div>
//       <section className="w-[90%] mx-auto py-20">
//         <h2 className="text-5xl font-serif text-center">
//           Jwellery World
//         </h2>

//         <p className="text-center text-gray-500 text-xl mt-3">
//           A companion for every occasion
//         </p>

//         <div className="grid grid-cols-2 gap-5 mt-14">
//           {worldData.map((item) => (
//             <div
//               key={item.id}
//               className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
//                 item.large ? "h-[430px]" : "h-[350px]"
//               }`}
//             >
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
//               />

//               {/* Gradient */}
//                 <div className="absolute inset-0">
//                   {/* Blur Shadow */}
//                 <div className="absolute bottom-0 left-0 right-0 h-30 bg-gradient-to-t from-[#801323]/100 via-[#801323]/90 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
                  
//                 </div>
             
//               {/* Text */}
//               <h3 className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-5xl font-serif z-10">
//                 {item.title}
//               </h3>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default JewelleryWorld;


import React from "react";

const JewelleryWorld = () => {
  const worldData = [
    {
      id: 1,
      title: "Wedding",
      image:
        "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw770a9bca/homepage/tanishq-pillars/tw-nt-wedding-desktop.jpg",
      rowSpan: "row-span-3",
    },
    {
      id: 2,
      title: "Diamond",
      image:
        "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw1f6a4391/homepage/tanishq-pillars/fod-diamond-desktop.jpg",
      rowSpan: "row-span-4",
    },
    {
      id: 3,
      title: "Gold Exchange",
      image:
        "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw60988e8b/homepage/tanishq-pillars/tw-nt-gold-desktop.jpg",
      rowSpan: "row-span-4",
    },
    {
      id: 4,
      title: "Daily Wear",
      image:
        "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw0f91b4a3/homepage/tanishq-pillars/ai-dailywear-desktop.jpg",
      rowSpan: "row-span-3",
    },
  ];

  return (
    <div>
      <section className="w-[90%] mx-auto py-20">
        <h2 className="text-5xl font-serif text-center">
          Jewellery World
        </h2>

        <p className="text-center text-gray-500 text-xl mt-3">
          A companion for every occasion
        </p>

        <div className="grid grid-cols-2 auto-rows-[100px] gap-5 mt-14">
          {worldData.map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${item.rowSpan}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Gradient */}
//                 <div className="absolute inset-0">
//                   {/* Blur Shadow */}
//                 <div className="absolute bottom-0 left-0 right-0 h-30 bg-gradient-to-t from-[#8B5E3C]/100 via-[#C79A63]/100 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
                  
//                 </div>

              {/* Text */}
              <h3 className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-5xl font-serif z-10 whitespace-nowrap">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default JewelleryWorld;