import IconWrapper from "@/components/shared/IconWrapper";
import { plantFeaturesData } from "@/data/plantFeaturesData";

const WhyChooseUs = () => {
  return (
    <div className="py-8 -mt-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 lg:gap-6 border-b">
      {plantFeaturesData.map((item, index) => (
        <div
          key={index}
          className="p-3 lg:p-6 h-full flex flex-col items-center text-center bg-white"
        >
          <IconWrapper className="mb-4">
            <item.icon className="w-5 h-5" />
          </IconWrapper>
          <h2 className="text-base font-medium mb-2">{item.title}</h2>
          <p className="text-xs text-gray-400 min-h-8">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WhyChooseUs;
