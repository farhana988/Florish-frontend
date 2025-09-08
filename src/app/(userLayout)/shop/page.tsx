import ShopPage from "@/components/modules/shop/ShopPage";
import { plants } from "@/data/plantsData";

const Shop = () => {
  return <ShopPage initialPlants={plants} />;
};

export default Shop;
