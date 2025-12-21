/* eslint-disable @typescript-eslint/no-explicit-any */

import { getAllUsers } from "@/services/super-admin/super-admin-services";
import { getPlants } from "@/services/admin/plants";
import { getAllOrders } from "@/services/user/order";
import { getAllCoupons } from "@/services/user/coupon";

export const getOverviewData = async () => {
  const [users, plants, orders, coupons] = await Promise.all([
    getAllUsers(),
    getPlants(),
    getAllOrders(),
    getAllCoupons(),
  ]);

  const totalRevenue = orders?.data?.reduce(
    (sum: number, order: any) =>
      sum + (order.finalPrice ?? order.totalPrice ?? 0),
    0
  );

  // Monthly revenue chart
  const chartData =
    orders?.data?.reduce((acc: any[], order: any) => {
      const date = new Date(order.createdAt);
      const month = date.toLocaleString("default", { month: "short" });
      const revenue = order.finalPrice ?? order.totalPrice ?? 0;
      const existing = acc.find((item) => item.name === month);
      if (existing) existing.revenue += revenue;
      else acc.push({ name: month, revenue });
      return acc;
    }, []) ?? [];

  return {
    users,
    plants,
    orders,
    coupons,
    totalRevenue,
    chartData,
  };
};
