import React from 'react';

const TrendingNow = () => {

    const trendingData = [
  {
    id: 1,
    title: "Auspicious Occasion",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=900&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Gifting Jewellery",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=900&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Origami Edit",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&auto=format&fit=crop&q=80",
  },
];
  return (
    <div>
      <section className="w-[90%] mx-auto py-20">

  <h2 className="text-5xl font-serif text-center">
    Trending Now
  </h2>

  <p className="text-center text-gray-500 text-xl mt-3">
    Jewellery pieces everyone's eyeing right now
  </p>

  <div className="grid grid-cols-3 gap-5 mt-14">

    {trendingData.map((item) => (
      <div key={item.id} className="group cursor-pointer">

        <div className="overflow-hidden rounded-2xl">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[450px] object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <h3 className="text-center text-3xl font-serif mt-6">
          {item.title}
        </h3>

      </div>
    ))}

  </div>

</section>
    </div>
  );
}

export default TrendingNow;
