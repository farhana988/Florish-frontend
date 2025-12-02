import Shop from "@/components/modules/shop/Shop";
import { plants } from "@/data/plantsData";

const ShopPage = () => {
  return <Shop initialPlants={plants} />;
};

export default ShopPage;
