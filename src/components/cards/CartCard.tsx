"use client";
import { Button } from "@/components/ui/button";

import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/hooks/useCart";
const CartCard = () => {
  const { cartItems } = useCart();
  console.log(cartItems);

  const total = cartItems.reduce(
    (sum, item) => sum + item.plant.price * item.quantity,
    0
  );

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
          <Button variant="default" className="w-full">
            Proceed to Checkout
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CartCard;
