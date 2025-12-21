import { Column } from "@/types/management-table";
import { Badge } from "../ui/badge";
export interface ICoupon {
  id: string;
  code: string;
  discountType: "PERCENTAGE" | "FIXED";
  discountValue: number;
  minOrderValue: number;
  maxDiscount: number;
  expiryDate: string;
  isActive: boolean;
}

export const couponsColumns: Column<ICoupon>[] = [
  // 🎟 Coupon Code
  {
    header: "Code",
    accessor: (coupon) => (
      <span className="font-semibold uppercase">{coupon.code}</span>
    ),
  },

  // 📊 Discount Type
  {
    header: "Type",
    accessor: (coupon) => (
      <Badge variant="outline">{coupon.discountType}</Badge>
    ),
  },

  // 💯 Discount Value
  {
    header: "Discount",
    accessor: (coupon) =>
      coupon.discountType === "PERCENTAGE"
        ? `${coupon.discountValue}%`
        : `₹${coupon.discountValue}`,
  },

  // 🛒 Min Order Value
  {
    header: "Min Order",
    accessor: (coupon) =>
      coupon.minOrderValue ? `₹${coupon.minOrderValue}` : "—",
  },

  // 🔒 Max Discount
  {
    header: "Max Discount",
    accessor: (coupon) => (coupon.maxDiscount ? `₹${coupon.maxDiscount}` : "—"),
  },

  // ⏰ Expiry Date
  {
    header: "Expiry",
    accessor: (coupon) => formatDate(coupon.expiryDate),
  },

  // 🔄 Status
  {
    header: "Status",
    accessor: (coupon) =>
      coupon.isActive ? (
        <span className="px-2 py-1 text-xs rounded bg-green-200 text-green-800">
          Active
        </span>
      ) : (
        <span className="px-2 py-1 text-xs rounded bg-red-200 text-red-800">
          Inactive
        </span>
      ),
  },
];
function formatDate(dateString: string) {
  const date = new Date(dateString);
  return `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${date.getFullYear()}`;
}
