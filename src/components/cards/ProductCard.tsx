import Image from "next/image";
import Link from "next/link";
import { Handbag } from "lucide-react";
import StarRating from "../shared/StarRating";
import ProductBadge from "../shared/ProductBadge";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  badge?: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (e: React.MouseEvent, productId: number) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <Link href={`/products/${product.id}`} className="group space-y-1">
      <div className="relative w-full h-[420px] mb-4 bg-gray-100 rounded overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Bag Icon */}
        <button
          onClick={(e) => onAddToCart(e, product.id)}
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white p-2 rounded-full shadow"
        >
          <Handbag className="text-gray-500" />
        </button>
        {/* Badge */}
        {product.badge && <ProductBadge text={product.badge} />}
      </div>

      {/* Rating */}
      <StarRating rating={product.rating} />

      <h3 className="font-medium">{product.name}</h3>
      <p className="text-[13px] text-gray-500">{product.category}</p>
      <p className="text-sm">${product.price.toFixed(2)}</p>
    </Link>
  );
};

export default ProductCard;
