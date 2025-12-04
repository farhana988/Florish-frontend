import { useState, useMemo } from "react";
import filterSortPlants from "@/components/modules/shop/filterSortProducts";
import { Plant } from "@/types/plant";

const useSearchSort = (initialPlants: Plant[]) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");

  const filteredAndSortedPlants = useMemo(() => {
    return filterSortPlants(initialPlants, searchTerm, sortOption);
  }, [initialPlants, searchTerm, sortOption]);

  return {
    searchTerm,
    setSearchTerm,
    sortOption,
    setSortOption,
    filteredAndSortedPlants,
  };
};

export default useSearchSort;
