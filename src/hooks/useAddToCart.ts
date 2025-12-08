/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCart } from "@/hooks/useCart";
import { addToCart } from "@/services/user/cart";
import { showErrorToast, showSuccessToast } from "@/utils/toast";

export const useAddToCart = () => {
  const { setCartItems } = useCart();

  const handleAddToCart = async (
    e: React.MouseEvent | null,
    plantId: string,
    quantity: number = 1
  ) => {
    if (e) e.preventDefault();

    try {
      const result = await addToCart(plantId, quantity);

      if (result.success) {
        setCartItems(result.data);
        showSuccessToast(
          `${result.data.plant.name} Added to cart`,
          `Item added successfully!`
        );
      } else {
        showErrorToast("Failed to add", result.message || "Try again later");
      }
    } catch (error: any) {
      showErrorToast(
        "Error adding to cart",
        error.message || "Something went wrong"
      );
    }
  };

  return { handleAddToCart };
};
