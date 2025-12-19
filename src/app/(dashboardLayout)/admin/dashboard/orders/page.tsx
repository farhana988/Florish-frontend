import ManagementPageHeader from "@/components/shared/ManagementPageHeader";
import OrderTable from "@/components/tables/OrderTable";
import { getAllOrders } from "@/services/user/order";

const OrderManagementPage = async () => {
  const res = await getAllOrders();
  const orders = res.data ?? [];
  return (
    <>
      <ManagementPageHeader
        title="Order Management"
        description="Manage and track the status of all orders"
      />

      <OrderTable orders={orders} />
    </>
  );
};

export default OrderManagementPage;
