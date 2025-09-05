"use client";

import ProductCard from "@/components/cards/ProductCard";

import { products } from "@/data/products";
import React from "react";

const shop = () => {
  const handleAddToCart = (e: React.MouseEvent, productId: number) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(`Add to cart: product ${productId}`);
  };
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-32">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </>
  );
};

export default shop;
