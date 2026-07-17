import React from "react";
import { Link } from "react-router-dom";

const diamondCategories = [
  {
    id: 1,
    name: "Diamond Rings",
    image:
      "./src/assets/Images/diamond-ring1.jpg",
    path: "/diamond-rings",
  },
  {
    id: 2,
    name: "Diamond Necklace",
    image:
      " ./src/assets/Images/Diamond-Necklace1.webp",
    path: "/diamond-necklace",
  },
  {
    id: 3,
    name: "Diamond Earrings",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500",
    path: "/diamond-earrings",
  },
  {
    id: 4,
    name: "Diamond Pendant",
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=500",
    path: "/diamond-pendant",
  },
  {
    id: 5,
    name: "Diamond Bracelet",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500",
    path: "/diamond-bracelet",
  },
  {
    id: 6,
    name: "Diamond Bangles",
    image:
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=500",
    path: "/diamond-bangles",
  },
  {
    id: 7,
    name: "Diamond Mangalsutra",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500",
    path: "/diamond-mangalsutra",
  },
  {
    id: 8,
    name: "Bridal Diamond Set",
    image:
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=500",
    path: "/bridal-diamond-set",
  },
  {
    id: 9,
    name: "Diamond Nose Pin",
    image:
      "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=500",
    path: "/diamond-nose-pin",
  },
  {
    id: 10,
    name: "Diamond Anklets",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500",
    path: "/diamond-anklets",
  },
  {
    id: 11,
    name: "Diamond Charm",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500",
    path: "/diamond-charms",
  },
  {
    id: 12,
    name: "Diamond Gift Collection",
    image:
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=500",
    path: "/diamond-gift",
  },
];

const Daimondproduct = () => {
  return (
    <section className="bg-[#FCFAF6] py-14 px-6">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl text-center font-serif font-bold text-[#8B6B1F] mb-3">
          Diamond Jewellery Collection
        </h2>

        <p className="text-center text-[#6B4F1D] mb-12">
          Explore the world of diamonds crafted into timeless jewellery.
        </p>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {diamondCategories.map((item) => (

            <Link 
              key={item.id}
              to={item.path}
            >

              <div className="
                bg-white 
                rounded-2xl 
                overflow-hidden 
                shadow-md 
                hover:shadow-xl 
                hover:-translate-y-2 
                transition-all 
                duration-300
              ">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover"
                />

                <div className="p-5 text-center">

                  <h3 className="
                    text-xl 
                    font-serif 
                    font-semibold 
                    text-[#3B2A17]
                  ">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-sm text-[#B98A28]">
                    Explore Collection →
                  </p>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Daimondproduct;