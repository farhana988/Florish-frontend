"use client";

import PlantCard from "@/components/cards/PlantCard";
import SearchBar from "@/components/shared/SearchBar";
import SortSelect from "@/components/shared/SortSelect";
import useSearchSort from "@/hooks/useSearchSort";
import { Plant } from "@/types/plant";

interface ShopPageProps {
  initialPlants: Plant[];
}

const Shop = ({ initialPlants }: ShopPageProps) => {
  const {
    searchTerm,
    setSearchTerm,
    sortOption,
    setSortOption,
    filteredAndSortedPlants,
  } = useSearchSort(initialPlants);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <SortSelect value={sortOption} onChange={setSortOption} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAndSortedPlants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </>
  );
};

export default Shop;
