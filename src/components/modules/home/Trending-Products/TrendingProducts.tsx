import PlantCard from "@/components/cards/PlantCard";
import SectionHeader from "@/components/shared/SectionHeader";
import { getPlants } from "@/services/admin/plants";
import { Plant } from "@/types/plant";

const TrendingProducts = async () => {
  const result = await getPlants();
  const plants = result.data;
  return (
    <>
      <SectionHeader title="Trending Plants" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plants?.slice(0, 3).map((plant: Plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </>
  );
};

export default TrendingProducts;
