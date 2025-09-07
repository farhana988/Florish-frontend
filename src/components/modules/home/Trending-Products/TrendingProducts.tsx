"use client";
import ProductCard from "@/components/cards/ProductCard";
import SectionHeader from "@/components/shared/SectionHeader";
import { products } from "@/data/products";

const TrendingProducts = () => {
  const handleAddToCart = (e: React.MouseEvent, productId: number) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(`Add to cart: product ${productId}`);
  };

  return (
    <>
      <SectionHeader title="Trending Products" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.slice(0, 3).map((product) => (
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

export default TrendingProducts;
