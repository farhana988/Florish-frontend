import Image from "next/image";

type CategoryCardProps = {
  title: string;
  image: string;
};

const CategoryCard = ({ title, image }: CategoryCardProps) => {
  return (
    <div key={title} className="flex flex-col items-center">
      <div className="w-72 h-72 relative">
        <Image src={image} alt={title} fill className="object-contain" />
      </div>
      <h3 className="text-lg font-medium text-gray-700">{title}</h3>
    </div>
  );
};

export default CategoryCard;
