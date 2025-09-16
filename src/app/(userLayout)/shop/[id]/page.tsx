import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import React from "react";
interface Product {
  title: string;
  price: number;
  description: string;
  secondaryDescription?: string;
  imageUrl: string;
  category: string;
  paymentIcons: string[];
}

interface ProductCardProps {
  product: Product;
}

const ShopDetails = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 max-w-6xl mx-auto items-start">
      {/* Product Image */}
      <div className="relative w-full aspect-[4/5] bg-muted rounded-lg overflow-hidden">
        <Image
          src="/plant.png"
          alt="Golden Glow Plant"
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4 bg-white p-1.5 rounded-full shadow">
          <Search className="h-4 w-4 text-green-600" />
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-6">
        {/* Breadcrumb */}
        <div className="text-sm text-muted-foreground space-x-1">
          <span>Home /</span>
          <span> Indoor Plants /</span>
          <span className="text-foreground font-medium"> Golden Glow</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-foreground">Golden Glow</h1>

        {/* Price */}
        <div className="text-xl font-medium text-foreground">
          $85.00{" "}
          <span className="text-sm font-normal text-muted-foreground">
            & Free Shipping
          </span>
        </div>

        {/* Description */}
        <p className="text-muted-foreground">
          Faucibus lacus tincidunt molestie accumsan nibh non odio aenean
          molestie purus tristique sed tempor consequat risus tellus amet augue
          egestas mauris scelerisque donec ultrices.
        </p>
        <p className="text-muted-foreground">
          Sollicitudin facilisis massa pellentesque in ultrices enim nunc ac
          egestas elementum ut in ornare sit malesuada.
        </p>

        {/* Quantity + Add to Cart */}
        <div className="flex items-center gap-4">
          <Input type="number" defaultValue={1} className="w-16" />
          <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6">
            Add to cart
          </Button>
        </div>

        {/* Category */}
        <div className="text-sm">
          Category:{" "}
          <span className="text-green-700 font-medium">Indoor Plants</span>
        </div>

        {/* Payment Methods */}
        <div className="mt-6 border rounded-md p-4">
          <p className="text-sm font-medium text-center mb-2">
            Guaranteed Safe Checkout
          </p>
          <div className="flex justify-center gap-4">
            <Image src="/visa.png" alt="Visa" width={40} height={24} />
            <Image
              src="/mastercard.png"
              alt="MasterCard"
              width={40}
              height={24}
            />
            <Image
              src="/amex.png"
              alt="American Express"
              width={40}
              height={24}
            />
            <Image src="/discover.png" alt="Discover" width={40} height={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
