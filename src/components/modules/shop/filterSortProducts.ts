import { Plant } from "@/data/plantsData";

const filterSortPlants = (
  plants: Plant[],
  searchTerm: string,
  sortOption: string
): Plant[] => {
  const filtered = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    switch (sortOption) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  return sorted;
};

export default filterSortPlants;
