import React from "react";
import {
  Truck,
  PiggyBank,
  BadgePercent,
  Headphones,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: <Truck size={48} strokeWidth={1.5} />,
    title: "Worldwide Shipping",
    desc: "Wherever You Are, Our Jewelry Finds Its Way to You.",
  },
  {
    id: 2,
    icon: <PiggyBank size={48} strokeWidth={1.5} />,
    title: "Money Back Guarantee",
    desc: "Shop with Confidence Satisfaction or Your Money Back.",
  },
  {
    id: 3,
    icon: <BadgePercent size={48} strokeWidth={1.5} />,
    title: "Offers And Discounts",
    desc: "Exclusive Deals on Stunning Jewelry Because You Deserve More.",
  },
  {
    id: 4,
    icon: <Headphones size={48} strokeWidth={1.5} />,
    title: "24/7 Support Services",
    desc: "Because Your Questions Deserve Timely, Expert Answers.",
  },
];

const Features = () => {
  return (
    <section className="w-[90%] mx-auto py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((item) => (
          <div
            key={item.id}
            className="group text-center rounded-2xl border border-[#E6D5B8] bg-gradient-to-b from-[#FFFDF8] to-[#F8F1E7] p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-[#C79A63]"
          >
            {/* Icon */}
            <div className="flex justify-center mb-6 text-[#B08D57] group-hover:text-[#8B5E3C] transition-colors duration-300">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-serif text-[#4A2E1F]">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-[#7A6A58] text-lg leading-8 mt-4">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Line */}
      <div className="border-b border-[#D6B98C] mt-20"></div>
    </section>
  );
};

export default Features;