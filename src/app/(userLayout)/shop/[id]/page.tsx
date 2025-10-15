import ShopImageModal from "@/components/modals/ShopImageModal";
import ProductBadge from "@/components/shared/ProductBadge";
import StarRating from "@/components/shared/StarRating";
import { Button } from "@/components/ui/button";
import { plants } from "@/data/plantsData";
import Image from "next/image";
import { notFound } from "next/navigation";

const ShopDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const plant = plants.find((p) => p.id === Number(id));

  if (!plant) {
    return notFound();
  }
  return (
    <>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto items-start 
     xl:pt-5"
      >
        {/* Product Image */}
        <div className="relative w-full aspect-[4/5] bg-muted rounded-lg overflow-hidden">
          <Image
            src={plant.image}
            alt={plant.name}
            fill
            className="object-cover"
          />
          {plant.badge && <ProductBadge text={plant.badge} />}
          <ShopImageModal imageSrc={plant.image} altText={plant.name} />
        </div>

        {/* Product Info */}
        <div className="space-y-4 xl:space-y-6">
          {/* Breadcrumb */}
          <div className="text-xs lg:text-sm text-muted-foreground space-x-1">
            <span>Home /</span>
            <span> {plant.category} /</span>
            <span className="text-foreground font-medium"> {plant.name}</span>
          </div>

          {/* Title */}
          <h1 className="text-xl xl:text-2xl font-semibold text-foreground">
            {plant.name}
          </h1>

          {/* Price */}
          <div className="text-lg xl:text-xl font-medium text-foreground">
            ${plant.price}.00{" "}
          </div>
          {/* Category */}
          <div className="text-sm">
            Category:{" "}
            <span className="text-dGreen font-medium">{plant.category}</span>
          </div>
          {/* Rating */}
          <StarRating rating={plant.rating} />
          {/* Description */}
          <p className="text-muted-foreground whitespace-pre-line mt-4 xl:mt-6 text-sm xl:text-base">
            {plant.description}
          </p>

          {/* Quantity + Add to Cart */}
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Available Quantity:{" "}
              <span className="font-semibold">{plant.quantity}</span>
            </p>
            <Button className="bg-dGreen text-white rounded-full px-6">
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopDetails;
