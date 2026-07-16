import React from 'react';

const Collections = () => {
    const categories = [
  {
    id: 1,
    title: "PENDANTS",
    image: "src/assets/images/img4.avif",
  },
  {
    id: 2,
    title: "FINGER RINGS",
    image: "src/assets/images/img5.avif",
  },
  {
    id: 3,
    title: "EARRINGS",
    image: "src/assets/images/img6.avif",
  },
  {
    id: 4,
    title: "MANGALSUTRA",
    image: "src/assets/images/img7.webp",
        },
  {
    id: 5,
    title: "CHAINS",
    image: "src/assets/images/img8.jpg",
        },
  {
    id: 6,
    title: "BRACELETE",
    image: "src/assets/images/img9.jpg",
        },
  {
    id: 7,
    title: "BANGLES",
    image: "src/assets/images/img10.webp",
        },
  
];
  return (
    <div>
      <section className="w-[90%] mx-auto py-16">

  <h1 className="text-5xl font-serif text-center">
    Find Your Perfect Match
  </h1>

  <p className="text-center text-gray-500 mt-3 text-xl">
    Shop by Categories
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

    {categories.map((item) => (
      <div
        key={item.id}
        className="group cursor-pointer"
      >
        <div className="overflow-hidden rounded-2xl">

          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[420px] object-cover transition duration-500 group-hover:scale-105"
          />

        </div>

        <h2 className="text-center mt-5 text-2xl font-serif tracking-wide">
          {item.title}
        </h2>

      </div>
    ))}
                  


  <div className="text-center cursor-pointer">

    <div className="border rounded-2xl h-[390px] flex flex-col justify-center items-center hover:shadow-lg transition">

      <h1 className="text-6xl text-[#C9AC84] font-serif">
        10+
      </h1>

      <p className="text-gray-600 text-xl mt-3">
        Categories to choose from
      </p>

    </div>

    <button className="mt-6 text-2xl font-serif hover:text-[#C9AC84] transition">
      VIEW ALL
    </button>

  </div>

  </div>

</section>
    </div>
  );
}

export default Collections;

