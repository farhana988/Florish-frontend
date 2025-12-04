import { Card, CardContent } from "@/components/ui/card";
import { PlantCareCardProps } from "@/types/plant-care-types";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const PlantCareCard = ({ tip }: PlantCareCardProps) => {
  return (
    <Card className="flex flex-col overflow-hidden rounded-xl shadow-sm transition-transform pt-0">
      <div className="relative w-full h-56">
        <Image src={tip.image} alt={tip.title} fill className="object-cover" />
      </div>
      <CardContent className="flex flex-col grow">
        <div className="grow">
          <h3 className="text-xl xl:text-2xl font-semibold text-[#1c1f13] mb-2">
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
            className="hover:underline hover:underline-offset-8 hover:text-blue-500 whitespace-nowrap flex items-center gap-1 text-gray-600 text-sm"
          >
            Continue Reading
            <ChevronRight size={16} />
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlantCareCard;
