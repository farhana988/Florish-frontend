/* eslint-disable @typescript-eslint/no-explicit-any */
import CouponCard from "@/components/cards/CouponCard";
import { AlertCircle } from "lucide-react";

interface Props {
  coupons: any[];
}

const ShopCoupons = ({ coupons }: Props) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Available Coupons</h2>

      {coupons.length === 0 ? (
        <div className="mt-6 p-6 bg-yellow-50 border border-yellow-200 rounded-lg text-center flex flex-col items-center">
          <AlertCircle className="w-8 h-8 text-yellow-400 mb-2" />
          <p className="text-yellow-700 font-medium">
            No coupons available right now.
          </p>
        </div>
      ) : (
        <div className="flex gap-6 overflow-x-auto py-2">
          {coupons.map((coupon) => (
            <CouponCard key={coupon.code} coupon={coupon} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopCoupons;
