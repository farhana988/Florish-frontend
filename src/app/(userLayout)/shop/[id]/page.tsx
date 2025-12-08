import ShopImageModal from "@/components/modals/ShopImageModal";
import PageLoading from "@/components/shared/PageLoading";
import ProductBadge from "@/components/shared/ProductBadge";
import StarRating from "@/components/shared/StarRating";
import { Button } from "@/components/ui/button";
import { getPlantById } from "@/services/admin/plants";
import Image from "next/image";

const ShopDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const plant = await getPlantById(id);
  if (!plant) {
    return <PageLoading />;
  }
  const { name, image, badge, category, price, rating, description, quantity } =
    plant.data;
  return (
    <>
      {/* Breadcrumb */}
      <div
        className="text-xs lg:text-sm text-muted-foreground space-x-1
           lg:hidden"
      >
        <span>Home /</span>
        <span> {category} /</span>
        <span className="text-foreground font-medium"> {name}</span>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto items-start 
     xl:pt-5"
      >
        {/* Product Image */}
        <div className="relative w-full aspect-4/5 bg-muted rounded-lg overflow-hidden">
          <Image src={image} alt={name} fill className="object-cover" />

          {badge && <ProductBadge text={badge} />}
          <ShopImageModal imageSrc={image} altText={name} />
        </div>

        {/* Product Info */}

        <div className="space-y-4 xl:space-y-6 ">
          {/* Breadcrumb */}
          <div className="text-xs lg:text-sm text-muted-foreground space-x-1 hidden lg:block">
            <span>Home /</span>
            <span> {category} /</span>
            <span className="text-foreground font-medium"> {name}</span>
          </div>

          {/* Title */}
          <h1 className="text-xl xl:text-2xl font-semibold text-foreground wrap-break-word">
            {name}
          </h1>

          {/* Price */}
          <div className="text-lg xl:text-xl font-medium text-foreground">
            ${price}.00{" "}
          </div>
          {/* Category */}
          <div className="text-sm">
            Category:{" "}
            <span className="text-dGreen font-medium">{category}</span>
          </div>
          {/* Rating */}
          {rating ? (
            <StarRating rating={rating} />
          ) : (
            <p className="text-xs text-gray-400 italic">No rating yet</p>
          )}
          {/* Description */}
          <p
            className="text-muted-foreground whitespace-pre-line mt-4 xl:mt-6 text-sm 
          xl:text-base wrap-break-word"
          >
            {description}
          </p>

          {/* Quantity  */}

          <p className="text-sm text-muted-foreground">
            Available Quantity:{" "}
            <span className="font-semibold">{quantity}</span>
          </p>
          {/*  Add to Cart */}
          <Button className="bg-dGreen text-white rounded-full px-6">
            Add to cart
          </Button>
        </div>
      </div>
    </>
  );
};

export default ShopDetails;
