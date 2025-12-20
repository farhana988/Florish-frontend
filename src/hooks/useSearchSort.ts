import { useState, useMemo } from "react";
import filterSortPlants from "@/components/modules/shop/filterSortProducts";
import { Plant } from "@/types/plant";

const useSearchSort = (initialPlants: Plant[]) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [category, setCategory] = useState("all");

  const filteredAndSortedPlants = useMemo(() => {
    return filterSortPlants(initialPlants, searchTerm, sortOption, category);
  }, [initialPlants, searchTerm, sortOption, category]);

  return {
    searchTerm,
    setSearchTerm,
    sortOption,
    setSortOption,
    category,
    setCategory,
    filteredAndSortedPlants,
  };
};

export default useSearchSort;
