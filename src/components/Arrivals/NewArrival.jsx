import React from 'react';

const NewArrival = () => {
  const newArrivals = {
  banner:
    "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&auto=format&fit=crop&q=80",

  cards: [
    {
      title: "Silver Idols",
      image:
        "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&auto=format&fit=crop&q=80",
    },
    {
      title: "Station Mangalsutra",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=80",
    },
  ],
};
  return (
    <div>
      <section className="relative mt-20">

  {/* Banner */}
  <div className="relative h-[650px]">

    <img
      src={newArrivals.banner}
      className="w-full h-full object-cover"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/25"></div>

    {/* Text */}
    <div className="absolute top-20 left-24 text-white">

      <div className="flex items-center gap-4">

        <h2 className="text-6xl font-serif">
          New Arrivals
        </h2>

        <span className="bg-white/20 backdrop-blur-md px-5 py-2 rounded-full text-xl">
          💎 500+ New Items
        </span>

      </div>

      <p className="mt-6 text-3xl leading-relaxed">
        New Arrivals Dropping Daily,
        <br />
        Monday through Friday.
        <br />
        Explore the Latest Launches Now!
      </p>

    </div>

    {/* Bottom Cards */}

    <div className="absolute bottom-[-90px] left-1/2 -translate-x-1/2 w-[90%] grid grid-cols-2 gap-8">

      {newArrivals.cards.map((item, index) => (

        <div
          key={index}
          className="relative overflow-hidden rounded-2xl shadow-xl group"
        >

          <img
            src={item.image}
            className="w-full h-[330px] object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent"></div>

          <h3 className="absolute bottom-6 left-6 text-white text-3xl font-serif">
            {item.title}
          </h3>

        </div>

      ))}

    </div>

  </div>

</section>
    </div>
  );
}

export default NewArrival;
