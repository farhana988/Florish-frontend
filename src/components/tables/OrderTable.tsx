/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { cancelOrder, updateOrderStatus } from "@/services/user/order";
import { useRouter } from "next/navigation";
import { showErrorToast, showSuccessToast } from "@/utils/toast";
import { BadgeCheck, CheckCircle, Play, Truck, XCircle } from "lucide-react";

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
// 👇 Dynamic icon generator for next status
function getNextStatusIcon(status: OrderStatus) {
  switch (status) {
    case OrderStatus.PENDING:
      return <Play className="h-4 w-4" />;
    case OrderStatus.PROCESSING:
      return <Truck className="h-4 w-4" />;
    case OrderStatus.SHIPPED:
      return <CheckCircle className="h-4 w-4" />;
    case OrderStatus.COMPLETED:
      return <BadgeCheck className="h-4 w-4" />;
    default:
      return null;
  }
}

const OrderTable = ({ orders }: any) => {
  const router = useRouter();
  const handleUpdateStatus = async (
    orderId: string,
    currentStatus: OrderStatus
  ) => {
    // You can use a modal or directly call the update function here
    const nextStatus =
      currentStatus === OrderStatus.PENDING
        ? OrderStatus.PROCESSING
        : currentStatus === OrderStatus.PROCESSING
        ? OrderStatus.SHIPPED
        : OrderStatus.COMPLETED;
    const result = await updateOrderStatus(orderId, nextStatus);

    if (result.success) {
      showSuccessToast("Order Updated", "The order status has been updated.");
      router.refresh();
    } else {
      showErrorToast("Update Failed", result.message);
    }
  };

  const handleCancelOrder = async (orderId: string) => {
    const result = await cancelOrder(orderId);

    if (result.success) {
      showSuccessToast(
        "Order Cancelled",
        "The order was successfully cancelled."
      );
      router.refresh();
    } else {
      showErrorToast("Cancellation Failed", result.message);
    }
  };
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Total Price</TableHead>
            <TableHead>Payment Status</TableHead>
            <TableHead>Items</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order: any) => (
            <TableRow key={order.id}>
              <TableCell>
                <Link href={`/dashboard/order-history/${order.id}`}>
                  <p className="text-blue-500">{order.id.slice(0, 6)}</p>
                </Link>
              </TableCell>
              <TableCell>${order.finalPrice}</TableCell>
              <TableCell>{order.paymentStatus}</TableCell>
              <TableCell>{order.items.length}</TableCell>
              <TableCell>
                <Badge variant={statusVariant[order.status as OrderStatus]}>
                  {order.status}
                </Badge>
              </TableCell>
              <TableCell className="flex gap-2">
                {/* Update Status Button */}
                {order.status !== "CANCELLED" && (
                  <Button
                    variant="outline"
                    onClick={() => handleUpdateStatus(order.id, order.status)}
                    disabled={order.status === "COMPLETED"}
                  >
                    {getNextStatusIcon(order.status)}
                  </Button>
                )}

                {/* Cancel Order Button */}
                {order.status === "PENDING" && (
                  <Button
                    variant="destructive"
                    onClick={() => handleCancelOrder(order.id)}
                  >
                    <XCircle className="h-4 w-4" />
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {orders.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          You have no orders yet.
        </p>
      )}
    </>
  );
};

export default OrderTable;
