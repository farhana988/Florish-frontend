"use client";
import CartCard from "@/components/cards/CartCard";
import CartTable from "@/components/tables/CartTable";
import { useCart } from "@/hooks/useCart";
import React from "react";

const Cart = () => {
  const {
    cartItems,
    handleRemove,
    handleClear,
    handleQuantityChange,
    loadingIds,
  } = useCart();
  const total = cartItems.reduce(
    (sum, item) => sum + item.plant.price * item.quantity,
    0
  );
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* cart table */}
      <CartTable
        cartItems={cartItems}
        handleRemove={handleRemove}
        handleClear={handleClear}
        handleQuantityChange={handleQuantityChange}
        loadingIds={loadingIds}
      />

      {/* Summary Card */}
      <CartCard total={total} handleClear={handleClear} />
    </section>
  );
};

export default Cart;
