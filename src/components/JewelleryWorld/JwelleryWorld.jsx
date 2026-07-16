import React from "react";

const JwelleryWorld = () => {
  const worldData = [
    {
      id: 1,
      title: "Wedding",
      image:
        "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw770a9bca/homepage/tanishq-pillars/tw-nt-wedding-desktop.jpg",
      large: true,
    },
    {
      id: 2,
      title: "Diamond",
      image:
        "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw1f6a4391/homepage/tanishq-pillars/fod-diamond-desktop.jpg",
      large: true,
    },
    {
      id: 3,
      title: "Gold Exchange",
      image:
        "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw60988e8b/homepage/tanishq-pillars/tw-nt-gold-desktop.jpg",
      large: false,
    },
    {
      id: 4,
      title: "Daily Wear",
      image:
        "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw0f91b4a3/homepage/tanishq-pillars/ai-dailywear-desktop.jpg",
      large: false,
    },
  ];

  return (
    <div>
      <section className="w-[90%] mx-auto py-20">
        <h2 className="text-5xl font-serif text-center">
          Jwellery World
        </h2>

        <p className="text-center text-gray-500 text-xl mt-3">
          A companion for every occasion
        </p>

        <div className="grid grid-cols-2 gap-5 mt-14">
          {worldData.map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                item.large ? "h-[420px]" : "h-[250px]"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Gradient */}
              {item.id === 1 ? (
                <div className="absolute inset-0">
                  {/* Blur Shadow */}
                  <div className="absolute bottom-0 left-0 w-full h-40 backdrop-blur-md bg-black/10"></div>

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                </div>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              )}

              {/* Text */}
              <h3 className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-5xl font-serif z-10">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default JwelleryWorld;