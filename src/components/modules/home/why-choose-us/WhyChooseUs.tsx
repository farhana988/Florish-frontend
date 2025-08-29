import { plantFeaturesData } from "@/data/plantFeaturesData";

const WhyChooseUs = () => {
  return (
    <div className="py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 border-b">
      {plantFeaturesData.map((item, index) => (
        <div
          key={index}
          className="p-3 lg:p-6 h-full flex flex-col items-center text-center bg-white"
        >
          <span className="bg-[#ecf4d3] px-4 py-4 rounded-full mb-4">
            <item.icon />
          </span>
          <h2 className="text-base font-medium mb-2">{item.title}</h2>

          <p className="text-xs text-gray-400 min-h-8">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WhyChooseUs;
