import PlantCard from "@/components/cards/PlantCard";
import SectionHeader from "@/components/shared/SectionHeader";
import { Plant } from "@/types/plant";
interface TrendingProps {
  plants: Plant[];
}
const TrendingProducts = ({ plants }: TrendingProps) => {
  return (
    <>
      <SectionHeader title="Trending Plants" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plants.slice(0, 3).map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </>
  );
};

export default TrendingProducts;
