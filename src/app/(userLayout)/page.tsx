import FlashSale from "@/components/modules/home/flash-sale/FlashSale";
import Categories from "@/components/modules/home/Categories/Categories";
import PlantCareTips from "@/components/modules/home/plan-care-tips/PlantCareTips";
import PromoSection from "@/components/modules/home/Promo/PromoSection";
import ShowcaseBanner from "@/components/modules/home/ShowcaseBanner/ShowcaseBanner";
import TrendingProducts from "@/components/modules/home/Trending-Products/TrendingProducts";
import WhyChooseUs from "@/components/modules/home/why-choose-us/WhyChooseUs";
import { getPlants } from "@/services/admin/plants";

const HomePage = async () => {
  const result = await getPlants();
  return (
    <>
      <WhyChooseUs />
      <TrendingProducts plants={result.data} />
      <PromoSection />
      <Categories />
      <FlashSale />
      <PlantCareTips />
      <ShowcaseBanner />
    </>
  );
};

export default HomePage;
