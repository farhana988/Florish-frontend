"use client";

import PlantCard from "@/components/cards/PlantCard";
import CategorySelect from "@/components/shared/CategorySelect";
import Pagination from "@/components/shared/Pagination";
import SearchBar from "@/components/shared/SearchBar";
import SortSelect from "@/components/shared/SortSelect";
import useSearchSort from "@/hooks/useSearchSort";
import { Plant } from "@/types/plant";
import { useState } from "react";

interface ShopPageProps {
  initialPlants: Plant[];
}

const Shop = ({ initialPlants }: ShopPageProps) => {
  const {
    searchTerm,
    setSearchTerm,
    sortOption,
    setSortOption,
    category,
    setCategory,
    filteredAndSortedPlants,
  } = useSearchSort(initialPlants);
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(filteredAndSortedPlants.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPlants = filteredAndSortedPlants?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <>
      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <CategorySelect value={category} onChange={setCategory} />
        <SortSelect value={sortOption} onChange={setSortOption} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[1130px]">
        {currentPlants.length === 0 ? (
          <p className="col-span-full text-center text-gray-500 mt-20">
            No plants found
            {category !== "all" && ` in ${category} category`}
            {searchTerm && ` for "${searchTerm}"`}
            🌱
          </p>
        ) : (
          currentPlants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))
        )}
      </div>
      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default Shop;
