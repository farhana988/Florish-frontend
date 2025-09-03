import PlantCareCard from "@/components/cards/PlantCareCard";
import SectionHeader from "@/components/shared/SectionHeader";
import { tips } from "@/data/plantCareData";

const PlantCareTips = () => {
  return (
    <div>
      <SectionHeader title="Plant Care Tips And Tricks" />
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {tips.map((tip, index) => (
          <PlantCareCard key={index} tip={tip} />
        ))}
      </div>
    </div>
  );
};

export default PlantCareTips;
