/* eslint-disable @typescript-eslint/no-explicit-any */
import { Gift, ShoppingCart } from "lucide-react";
import CopyButton from "@/components/buttons/CopyButton";
import { Badge } from "../ui/badge";

const getCouponColors = (value: number) => {
  if (value < 10) {
    return { bgMain: "bg-orange-100", textMain: "text-orange-600" };
  }
  if (value < 20) {
    return { bgMain: "bg-cyan-100", textMain: "text-cyan-600" };
  }
  if (value < 50) {
    return { bgMain: "bg-emerald-100", textMain: "text-emerald-700" };
  }
  if (value < 70) {
    return { bgMain: "bg-violet-100", textMain: "text-violet-700" };
  }
  return { bgMain: "bg-rose-100", textMain: "text-rose-700" };
};

const CouponCard = ({ coupon }: { coupon: any }) => {
  const isExpired = new Date(coupon.expiryDate) < new Date();
  const colors = getCouponColors(coupon.discountValue);

  return (
    <div className="flex w-96 h-52 rounded-lg overflow-hidden shadow-md shrink-0">
      <div
        className={`flex-1 flex items-center px-6 py-5 relative  ${colors.bgMain}`}
      >
        <Gift className={`w-20 h-20 mr-4 ${colors.textMain}`} />
        <div>
          <p className={`text-5xl font-extrabold ${colors.textMain}`}>
            {coupon.discountValue}%
          </p>
          <p className={`text-sm uppercase ${colors.textMain}`}>OFF</p>
          <p className={colors.textMain}>Gift Voucher</p>
        </div>
        {/* badge and copy  btn */}
        <div>
          <p className="absolute top-2 left-2">
            <Badge
              variant="secondary"
              className="flex items-center gap-1.5 px-3 py-1 text-sm font-medium shadow-sm"
            >
              <ShoppingCart className="h-3.5 w-3.5 opacity-70" />
              <span className="text-muted-foreground">Min order</span>
              <span className="font-semibold text-foreground">
                ₹{coupon.minOrderValue}
              </span>
            </Badge>
          </p>
          <CopyButton code={coupon.code} />
        </div>
      </div>

      {/* Right vertical strip */}
      <div
        className={`flex items-center justify-center px-3 
                    rotate-90 origin-center whitespace-nowrap w-[70px]`}
      >
        <span className={` font-bold text-2xl text-gray-600`}>
          GIFT FOR YOU
        </span>
      </div>

      {isExpired && (
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <span className="text-white font-bold">EXPIRED</span>
        </div>
      )}
    </div>
  );
};

export default CouponCard;
