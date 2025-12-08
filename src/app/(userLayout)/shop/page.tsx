import Shop from "@/components/modules/shop/Shop";
import { getPlants } from "@/services/admin/plants";

const ShopPage = async () => {
  const result = await getPlants();
  return <Shop initialPlants={result.data} />;
};

export default ShopPage;
