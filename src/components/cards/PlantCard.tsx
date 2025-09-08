import Image from "next/image";
import Link from "next/link";
import { Handbag } from "lucide-react";
import StarRating from "../shared/StarRating";
import ProductBadge from "../shared/ProductBadge";
import { Plant } from "@/data/plantsData";
interface PlantCardProps {
  plant: Plant;
  onAddToCart: (e: React.MouseEvent, productId: number) => void;
}

const PlantCard = ({ plant, onAddToCart }: PlantCardProps) => {
  return (
    <Link href={`/shop/${plant.id}`} className="group space-y-1">
      <div className="relative w-full h-[420px] mb-4 bg-gray-100 rounded overflow-hidden">
        <Image
          src={plant.image}
          alt={plant.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Bag Icon */}
        <button
          onClick={(e) => onAddToCart(e, plant.id)}
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white p-2 rounded-full shadow"
        >
          <Handbag className="text-gray-500" />
        </button>
        {/* Badge */}
        {plant.badge && <ProductBadge text={plant.badge} />}
      </div>

      {/* Rating */}
      <StarRating rating={plant.rating} />

      <h3 className="font-medium">{plant.name}</h3>
      <p className="text-[13px] text-gray-500">{plant.category}</p>
      <p className="text-sm">${plant.price.toFixed(2)}</p>
    </Link>
  );
};

export default PlantCard;
