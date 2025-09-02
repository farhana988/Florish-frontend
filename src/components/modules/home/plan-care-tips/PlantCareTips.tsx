import SectionHeader from "@/components/shared/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";
const tips = [
  {
    title: "How To Pot Plants",
    date: "May 26, 2022",
    description:
      "Discover essential tips to keep your indoor plants thriving, from proper watering to choosing the right soil.",
    image: "/plant-care1.jpg",
  },
  {
    title: "How Much Sunlight Is Needed",
    date: "May 26, 2022",
    description:
      "Learn how different types of light affect plant growth and how to find the best spot in your home.",
    image: "/plant-care2.jpg",
  },
  {
    title: "Show Plants",
    date: "May 26, 2022",
    description:
      "Explore unique and stylish ways to showcase your plants around the house for a fresh, natural vibe.",
    image: "/plant-care3.jpg",
  },
];
const PlantCareTips = () => {
  return (
    <div>
      <SectionHeader title="Plant Care Tips And Tricks" />

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {tips.map((tip, index) => (
          <Card
            key={index}
            className="flex flex-col overflow-hidden rounded-xl shadow-sm transition-transform
             hover:scale-[1.02] pt-0"
          >
            <div className="relative w-full h-56">
              <Image
                src={tip.image}
                alt={`${tip.title}`}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="flex flex-col flex-grow ">
              <div className="flex-grow">
                <h3 className="text-xl lg:text-2xl font-semibold text-[#1c1f13] mb-2">
                  {tip.title}
                </h3>
                <p className="text-xs text-gray-600 mb-2">{tip.date}</p>
                <p className="text-sm lg:text-base text-gray-700">
                  {tip.description}
                </p>
              </div>
              <div className="mt-4 text-left">
                <a
                  href="#"
                  className="hover:underline hover:text-blue-500 whitespace-nowrap
                  flex items-center gap-1 text-gray-600 text-sm"
                >
                  Continue Reading
                  <ChevronRight size={16} />
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PlantCareTips;
