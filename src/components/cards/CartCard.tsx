/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AddAddressForm from "../forms/AddAddressForm";
import { useAddresses } from "@/hooks/useAddress";
import { useState } from "react";
import { createOrder } from "@/services/user/order";
import { showErrorToast, showSuccessToast } from "@/utils/toast";
type CartCardProps = {
  total: number;
  handleClear: () => void;
};
const CartCard = ({ total, handleClear }: CartCardProps) => {
  const { addresses, refresh } = useAddresses();
  console.log(addresses);
  const [paymentType, setPaymentType] = useState<"COD" | "STRIPE">("COD");
  return (
    <div className="space-y-5">
      <h1 className="text-xl font-medium">Order Summary</h1>
      <Card className="border rounded">
        <CardContent className="flex flex-col gap-4">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          {/* address */}
          {addresses.length === 0 && <AddAddressForm refresh={refresh} />}
          {/* Payment Type Selector */}
          <select
            value={paymentType}
            onChange={(e) => setPaymentType(e.target.value as any)}
            className="border p-2 rounded"
          >
            <option value="COD">Cash On Delivery</option>
            {/* <option value="STRIPE">Stripe</option> */}
          </select>
          {/* ✅ Place Order Button */}
          {addresses.length > 0 && (
            <form
              action={async (formData) => {
                try {
                  const res = await createOrder(formData);

                  if (res.success) {
                    handleClear();

                    showSuccessToast("Order placed successfully!");
                  } else {
                    showErrorToast(res.message || "Order failed");
                  }
                } catch {
                  showErrorToast("Something went wrong");
                }
              }}
            >
              <input
                type="hidden"
                name="addressId"
                value={addresses[0]?.id ?? ""}
              />

              <input type="hidden" name="paymentType" value={paymentType} />

              <Button type="submit" className="w-full">
                Place Order
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CartCard;
