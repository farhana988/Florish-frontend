import FlashSale from "@/components/modules/home/flash-sale/FlashSale";
import Categories from "@/components/modules/home/Categories/Categories";
import PlantCareTips from "@/components/modules/home/plan-care-tips/PlantCareTips";
import PromoSection from "@/components/modules/home/Promo/PromoSection";
import ShowcaseBanner from "@/components/modules/home/ShowcaseBanner/ShowcaseBanner";
import TrendingProducts from "@/components/modules/home/Trending-Products/TrendingProducts";
import WhyChooseUs from "@/components/modules/home/why-choose-us/WhyChooseUs";

const HomePage = () => {
  return (
    <>
      <WhyChooseUs />
      <TrendingProducts />
      <PromoSection />
      <Categories />
      <FlashSale />
      <PlantCareTips />
      <ShowcaseBanner />
    </>
  );
};

export default HomePage;
