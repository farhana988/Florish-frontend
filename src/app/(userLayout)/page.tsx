import PromoSection from "@/components/modules/home/Promo/PromoSection";
import TrendingProducts from "@/components/modules/home/Trending-Products/TrendingProducts";
import WhyChooseUs from "@/components/modules/home/why-choose-us/WhyChooseUs";

const HomePage = () => {
  return (
    <>
      <WhyChooseUs />
      <TrendingProducts />
      <PromoSection />
    </>
  );
};

export default HomePage;
