"use client";
import PlantCareCard from "@/components/cards/PlantCareCard";
import SectionHeader from "@/components/shared/SectionHeader";
import { tips } from "@/data/plantCareData";
import useIsHome from "@/hooks/useIsHome";

const PlantCareTips = () => {
  const isHome = useIsHome();
  const tipsToDisplay = isHome ? tips.slice(0, 3) : tips;
  return (
    <>
      {isHome && <SectionHeader title="Plant Care Tips And Tricks" />}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {tipsToDisplay.map((tip) => (
          <PlantCareCard key={tip.id} tip={tip} />
        ))}
      </div>
    </>
  );
};

export default PlantCareTips;
