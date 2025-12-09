/* eslint-disable @typescript-eslint/no-explicit-any */
import { getUserOrders } from "@/services/user/order";
import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ManagementPageHeader from "@/components/shared/ManagementPageHeader";
enum OrderStatus {
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
  SHIPPED = "SHIPPED",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}

const statusVariant: Record<OrderStatus, any> = {
  [OrderStatus.PENDING]: "pending",
  [OrderStatus.PROCESSING]: "processing",
  [OrderStatus.SHIPPED]: "shipped",
  [OrderStatus.COMPLETED]: "completed",
  [OrderStatus.CANCELLED]: "cancelled",
};

const OrderHistoryPage = async () => {
  const res = await getUserOrders();
  const orders = res.data ?? [];

  return (
    <>
      <ManagementPageHeader
        title="Order History"
        description="View all your past orders and track their status."
      />

      <div className="grid grid-cols-2 gap-4">
        {orders.map((o: any) => (
          <Link key={o.id} href={`/dashboard/order-history/${o.id}`}>
            <Card className="hover:shadow-lg transition-all cursor-pointer">
              {/* Card Header */}
              <CardHeader className="flex justify-between">
                <span className="font-semibold">
                  Order ID: {o.id.slice(0, 6)}
                </span>
                <Badge variant={statusVariant[o.status as OrderStatus]}>
                  {o.status}
                </Badge>
              </CardHeader>

              {/* Card Content */}
              <CardContent className="text-sm">
                <p>
                  <span className="text-gray-600">Grand Total:</span>{" "}
                  <span className="font-semibold">${o.totalPrice}</span>
                </p>

                <p>
                  <span className="text-gray-600">Payment Status:</span>{" "}
                  <span className="font-semibold">{o.paymentStatus}</span>
                </p>

                <p>
                  <span className="text-gray-600">Number of Items:</span>{" "}
                  <span className="font-semibold">{o.items.length}</span>
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {orders.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          You have no orders yet.
        </p>
      )}
    </>
  );
};

export default OrderHistoryPage;
