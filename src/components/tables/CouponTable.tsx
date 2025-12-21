"use client";
import ManagementTable from "./ManagementTable";
import { couponsColumns, ICoupon } from "../table-columns/CouponTableCol";
interface CouponTableProps {
  coupons: ICoupon[];
}
const CouponTable = ({ coupons }: CouponTableProps) => {
  return (
    <ManagementTable
      data={coupons}
      columns={couponsColumns}
      getRowKey={(coupon) => coupon.id}
      emptyMessage="No Coupons found"
    />
  );
};

export default CouponTable;
