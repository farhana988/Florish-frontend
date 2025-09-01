import { Badge } from "../ui/badge";
import React from "react";

interface ProductBadgeProps {
  text: string;
}

const ProductBadge = ({ text }: ProductBadgeProps) => {
  return (
    <Badge
      variant="outline"
      className="absolute top-3 left-3 bg-[#3c5133e3] text-white font-semibold
       px-3 lg:px-6 py-2 lg:py-3 nonagon-badge text-base lg:text-lg"
    >
      {text}
    </Badge>
  );
};

export default ProductBadge;
