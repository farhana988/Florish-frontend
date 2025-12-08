import ShopImageModal from "@/components/modals/ShopImageModal";
import ShopBreadcrumb from "@/components/modules/shop/ShopBreadcrumb";
import ShopInfoSection from "@/components/modules/shop/ShopInfoSection";
import PageLoading from "@/components/shared/PageLoading";
import ProductBadge from "@/components/shared/ProductBadge";
import { getPlantById } from "@/services/admin/plants";
import Image from "next/image";

const ShopDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const plant = await getPlantById(id);
  if (!plant) {
    return <PageLoading />;
  }
  const { name, image, badge, category } = plant.data;
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
    </>
  );
};

export default ShopDetails;
