import ManagementPageHeader from "@/components/shared/ManagementPageHeader";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import WishlistTable from "@/components/tables/WishlistTable";
import { getWishlist } from "@/services/user/wishlist";
import React, { Suspense } from "react";

const WishlistPage = async () => {
  const result = await getWishlist();
  return (
    <div>
      {" "}
      <ManagementPageHeader
        title="User Wishlist Management"
        description="View and manage wishlist items."
      />
      <Suspense fallback={<TableSkeleton columns={3} rows={10} />}>
        <WishlistTable items={result.data?.items || []} />
      </Suspense>
    </div>
  );
};

export default WishlistPage;
