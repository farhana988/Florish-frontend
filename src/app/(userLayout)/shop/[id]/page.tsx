/* eslint-disable @typescript-eslint/no-explicit-any */
import PlantCard from "@/components/cards/PlantCard";
import ShopImageModal from "@/components/modals/ShopImageModal";
import ShopCoupons from "@/components/modules/shop-details/ShopCoupons";
import ShopBreadcrumb from "@/components/modules/shop/ShopBreadcrumb";
import ShopInfoSection from "@/components/modules/shop/ShopInfoSection";
import PageLoading from "@/components/shared/PageLoading";
import ProductBadge from "@/components/shared/ProductBadge";
import { getPlantById, getPlants } from "@/services/admin/plants";
import { getAllCoupons } from "@/services/user/coupon";
import Image from "next/image";

const ShopDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const plant = await getPlantById(id);
  if (!plant) {
    return <PageLoading />;
  }
  const { name, image, badge, category } = plant.data;

  // Fetch all plants
  const allPlants = await getPlants();

  if (!allPlants?.data) return [];

  // Filter plants by category and optionally exclude the current plant
  const relatedPlants =
    allPlants?.data?.filter(
      (p: any) => p.category === category && p.id !== id
    ) ?? [];

  const coupons = await getAllCoupons();

  return (
    <>
      {/* Breadcrumb */}
      <ShopBreadcrumb category={category} name={name} className="lg:hidden" />
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
          <ShopBreadcrumb
            category={category}
            name={name}
            className="hidden lg:block mb-4"
          />

          <ShopInfoSection plant={plant.data} />
        </div>
      </div>

      {/* coupons */}
      <ShopCoupons coupons={coupons.data ?? []} />

      {/* related plant */}
      <h2 className="text-xl font-semibold mb-4 mt-20">You Might Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {relatedPlants.slice(0, 3).map((plant: any) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </>
  );
};

export default ShopDetails;
