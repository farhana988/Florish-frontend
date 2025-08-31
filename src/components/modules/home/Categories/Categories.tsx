import CategoryCard from "@/components/cards/CategoryCard";
import SectionHeader from "@/components/shared/SectionHeader";
import { plantCategories } from "@/data/plantCatagories";

const Categories = () => {
  return (
    <>
      <SectionHeader title="Our Categories" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        {plantCategories.map((category) => (
          <CategoryCard
            key={category.title}
            title={category.title}
            image={category.image}
          />
        ))}
      </div>
    </>
  );
};

export default Categories;
