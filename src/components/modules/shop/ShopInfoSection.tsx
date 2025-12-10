"use client";
import WishlistButton from "@/components/buttons/WishlistButton";
import StarRating from "@/components/shared/StarRating";
import { Button } from "@/components/ui/button";
import { useAddToCart } from "@/hooks/useAddToCart";
import { PlantCardProps } from "@/types/plant";

const ShopInfoSection = ({ plant }: PlantCardProps) => {
  const { handleAddToCart } = useAddToCart();
  const { name, category, price, rating, description, quantity, id } = plant;
  return (
    <>
      {/* Title */}
      <h1 className="text-xl xl:text-2xl font-semibold text-foreground wrap-break-word">
        {name}
      </h1>

      {/* Price */}
      <div className="text-lg xl:text-xl font-medium text-foreground">
        ${price}.00{" "}
      </div>
      {/* Category */}
      <div className="text-sm">
        Category: <span className="text-dGreen font-medium">{category}</span>
      </div>
      {/* Rating */}
      {rating ? (
        <StarRating rating={rating} />
      ) : (
        <p className="text-xs text-gray-400 italic">No rating yet</p>
      )}
      {/* Description */}
      <p className="text-muted-foreground whitespace-pre-line mt-4 xl:mt-6 text-sm xl:text-base wrap-break-word">
        {description}
      </p>
      {/* Quantity  */}

      <p className="text-sm text-muted-foreground">
        Available Quantity: <span className="font-semibold">{quantity}</span>
      </p>
      <div className="flex items-center gap-3 mt-4">
        {/* Wishlist button */}
        <WishlistButton plantId={String(id)} />
        {/*  Add to Cart */}
        <Button
          className="bg-dGreen text-white rounded-full px-6"
          onClick={(e) => handleAddToCart(e, String(id))}
        >
          Add to cart
        </Button>
      </div>
    </>
  );
};

export default ShopInfoSection;
