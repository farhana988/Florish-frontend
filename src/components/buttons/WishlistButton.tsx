/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  addToWishlist,
  getWishlist,
  removeWishlistItem,
} from "@/services/user/wishlist";
import { Heart } from "lucide-react";
import { useState, useEffect } from "react";

interface WishlistButtonProps {
  plantId: string;
}

const WishlistButton = ({ plantId }: WishlistButtonProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [wishlistItemId, setWishlistItemId] = useState<string | null>(null);

  // Load wishlist when component mounts
  useEffect(() => {
    const loadWishlist = async () => {
      const res = await getWishlist();

      if (res.success && res.data?.items) {
        const found = res.data.items.find(
          (item: any) => item.plantId === plantId
        );

        if (found) {
          setIsWishlisted(true);
          setWishlistItemId(found.id);
        }
      }
    };

    loadWishlist();
  }, [plantId]);

  const handleToggle = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      if (isWishlisted && wishlistItemId) {
        // Remove from wishlist
        await removeWishlistItem(wishlistItemId);
        setIsWishlisted(false);
        setWishlistItemId(null);
      } else {
        // Add to wishlist
        const res = await addToWishlist(plantId);
        if (res.success) {
          setIsWishlisted(true);
          setWishlistItemId(res.data.id);
        }
      }
    } catch (error) {
      console.error("Wishlist error:", error);
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-full transition-all duration-200"
    >
      <Heart
        size={24}
        className={`transition-colors duration-200 ${
          isWishlisted ? "fill-red-500 text-red-500" : "text-gray-400"
        }`}
      />
    </button>
  );
};

export default WishlistButton;
