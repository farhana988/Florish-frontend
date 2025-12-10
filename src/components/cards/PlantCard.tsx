"use client";
import Image from "next/image";
import Link from "next/link";
import { Handbag } from "lucide-react";
import StarRating from "../shared/StarRating";
import ProductBadge from "../shared/ProductBadge";
import { PlantCardProps } from "@/types/plant";

import { useAddToCart } from "@/hooks/useAddToCart";
import WishlistButton from "../buttons/WishlistButton";

const PlantCard = ({ plant }: PlantCardProps) => {
  const { handleAddToCart } = useAddToCart();
  const { name, image, badge, category, price, rating, id } = plant || {};

  return (
    <Link href={`/shop/${id}`} className="group space-y-1">
      <div className="relative w-full h-[420px] mb-4 bg-gray-100 rounded overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Bag Icon */}
        <button
          onClick={(e) => handleAddToCart(e, String(id))}
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white p-2 rounded-full shadow"
        >
          <Handbag className="text-gray-500" />
        </button>
        {/* Badge */}
        {badge && <ProductBadge text={badge} />}
      </div>

      {/* Rating */}
      <div className="flex justify-between items-center">
        {rating ? (
          <StarRating rating={rating} />
        ) : (
          <p className="text-xs text-gray-400 italic">No rating yet</p>
        )}
        <WishlistButton plantId={String(id)} />
      </div>

      <h3 className="font-medium wrap-break-word">{name.slice(0, 30)}</h3>
      <p className="text-[13px] text-gray-500">{category}</p>
      <p className="text-sm">${price}</p>
    </Link>
  );
};

export default PlantCard;
