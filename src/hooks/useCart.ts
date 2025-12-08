/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  addToCart,
  clearCart,
  getCart,
  removeCartItem,
  updateCartItem,
} from "@/services/user/cart";
import { ICartItem } from "@/types/cart.interface";
import { showErrorToast } from "@/utils/toast";
import { useEffect, useState } from "react";

export const useCart = () => {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  const [loadingIds, setLoadingIds] = useState<string[]>([]);

  // Load cart from the server on mount
  useEffect(() => {
    const loadCart = async () => {
      try {
        const result = await getCart();
        if (result.success && result.data?.items) {
          setCartItems(result.data.items);
        } else {
          setCartItems([]);
        }
      } catch (error: any) {
        showErrorToast("Failed to load cart", error);
        setCartItems([]);
      }
    };

    loadCart();
  }, []);

  // add items to the cart
  const handleAddToCart = async (plantId: string, quantity: number = 1) => {
    try {
      const result = await addToCart(plantId, quantity);
      if (result.success && result.data?.items) {
        setCartItems(result.data.items);
      }
    } catch (error: any) {
      console.error("Failed to add to cart:", error);
    }
  };

  //   remove items from cart
  const handleRemove = async (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    try {
      const result = await removeCartItem(id);
      if (result.success && result.data?.items) {
        setCartItems(result.data.items);
      }
    } catch (error: any) {
      console.error("Failed to remove item:", error);
    }
  };

  //   clear cart
  const handleClear = async () => {
    try {
      const result = await clearCart();
      if (result.success) {
        setCartItems([]);
      }
    } catch (error: any) {
      console.error("Failed to clear cart:", error);
    }
  };

  //   update cart
  const handleQuantityChange = async (itemId: string, quantity: number) => {
    if (quantity < 1) return;

    const currentItem = cartItems.find((i) => i.id === itemId);
    if (!currentItem) return;

    if (quantity > currentItem.plant.quantity) {
      showErrorToast(
        `Only ${currentItem.plant.quantity} available in stock.`,
        "Quantity exceeds stock"
      );
      return;
    }

    try {
      setLoadingIds((prev) => [...prev, itemId]);

      // Optimistic UI update
      setCartItems((prev) =>
        prev.map((i) => (i.id === itemId ? { ...i, quantity } : i))
      );

      const result = await updateCartItem(itemId, quantity);
      if (!result.success) {
        showErrorToast(result.message || "Failed to update cart");
        // Rollback
        setCartItems((prev) =>
          prev.map((i) =>
            i.id === itemId ? { ...i, quantity: currentItem.quantity } : i
          )
        );
      }
    } catch (err) {
      console.error(err);
      setCartItems((prev) =>
        prev.map((i) =>
          i.id === itemId ? { ...i, quantity: currentItem.quantity } : i
        )
      );
    } finally {
      setLoadingIds((prev) => prev.filter((id) => id !== itemId));
    }
  };

  return {
    cartItems,
    handleAddToCart,
    handleRemove,
    handleClear,
    setCartItems,
    handleQuantityChange,
    loadingIds,
  };
};
