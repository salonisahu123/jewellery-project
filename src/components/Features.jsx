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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {features.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <div className="text-black mb-6">
              {item.icon}
            </div>

            <h3 className="text-3xl font-serif">
              {item.title}
            </h3>

            <p className="text-gray-500 text-xl leading-9 mt-4 max-w-[280px]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Line */}
      <div className="border-b border-gray-200 mt-20"></div>
    </section>
  );
};

export default Features;