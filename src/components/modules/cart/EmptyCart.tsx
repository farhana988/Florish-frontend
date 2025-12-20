import { ShoppingCart } from "lucide-react";
import OutlineBtn from "@/components/buttons/OutlineBtn";
const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      {/* Icon */}
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
        <ShoppingCart className="h-10 w-10 text-green-600" />
      </div>

      {/* Text */}
      <h2 className="mb-2 text-xl font-semibold text-gray-800">
        Your cart is empty
      </h2>
      <p className="mb-6 max-w-sm text-sm text-gray-500">
        You haven’t added any plants yet. Let’s bring some greenery into your
        space 🌿
      </p>
      <OutlineBtn
        href="/shop"
        text="Browse Plants"
        className="bg-black text-white hover:bg-black/70 hover:text-white"
      />
    </div>
  );
};

export default EmptyCart;
