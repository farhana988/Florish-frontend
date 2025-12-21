import { getAllCoupons } from "@/services/user/coupon";
import { Suspense } from "react";
import ManagementPageHeader from "@/components/shared/ManagementPageHeader";
import RefreshButton from "@/components/buttons/RefreshButton";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import CouponTable from "@/components/tables/CouponTable";

const AllCouponsPage = async () => {
  const coupons = await getAllCoupons();

  return (
    <>
      <ManagementPageHeader
        title="Coupon Management"
        description="Create, view, and manage discount coupons, expiry dates, and usage rules"
      />
      <div className="flex md:justify-end mb-8 mt-5 md:mt-0">
        <RefreshButton />
      </div>
      <Suspense fallback={<TableSkeleton columns={2} rows={10} />}>
        <CouponTable coupons={coupons.data} />
      </Suspense>
    </>
  );
};

export default AllCouponsPage;
