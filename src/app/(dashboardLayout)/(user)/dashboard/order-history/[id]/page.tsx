/* eslint-disable @typescript-eslint/no-explicit-any */
import ManagementPageHeader from "@/components/shared/ManagementPageHeader";
import PageLoading from "@/components/shared/PageLoading";
import { getOrderDetails } from "@/services/user/order";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MapPin, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const OrderDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const res = await getOrderDetails(id);
  const order = res.data;

  if (!order) {
    return <PageLoading />;
  }
  const created = new Date(order.createdAt).toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  const discountAmount = order.totalPrice - order.finalPrice;

  return (
    <>
      <ManagementPageHeader
        title="Order History"
        description="View all your past orders and track their status."
      />

      <section className="max-w-3xl space-y-8">
        {/* ------------------- Card 1 ------------------- */}
        <Card>
          <CardContent>
            <p className="font-bold text-lg">
              Order ID: #{order.id.slice(0, 6)}
            </p>
            <p className="text-sm text-muted-foreground">{created}</p>
          </CardContent>
        </Card>
        {/* ------------------- Card 2 ------------------- */}
        <Card>
          <CardContent className="flex items-center gap-4 text-sm">
            <ShoppingCart className="w-10 h-10 bg-blue-200 text-blue-700 rounded-full p-0.5" />
            <div>
              <p>Payment Method</p>
              <p>{order.paymentType}</p>
            </div>
          </CardContent>
        </Card>

        {/* ------------------- Card 3 ------------------- */}
        <Card>
          <CardContent className="flex items-center gap-4 text-sm">
            <ShoppingCart className="w-10 h-10 bg-purple-200 text-purple-700 rounded-full p-0.5" />
            <div>
              <p>Status</p>
              <p>{order.status}</p>
            </div>
          </CardContent>
        </Card>

        {/* ------------------- Card 4 ------------------- */}
        <Card>
          <CardHeader>
            <CardTitle>Order Details</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="opacity-80 text-sm flex gap-2 items-center">
              <MapPin className="w-5 h-5 text-indigo-500" />
              {order?.address?.street}, {order?.address?.city},{" "}
              {order?.address?.country}
            </p>
          </CardContent>
        </Card>

        {/* ------------------- Card 5 ------------------- */}
        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between items-center ">
              Subtotal
              <p>${order.totalPrice}</p>
            </div>
            <div className="flex justify-between items-center ">
              Shipping
              <p>0.00</p>
            </div>
            <div className="flex justify-between items-center ">
              Discount
              <p> - ${discountAmount.toFixed(2)}</p>
            </div>
            <div className="flex justify-between items-center font-semibold ">
              Total
              <p>${order.finalPrice}</p>
            </div>
          </CardContent>
        </Card>

        {/* ------------------- Card 6: Ordered Items ------------------- */}
        <Card>
          <CardHeader>
            <CardTitle>Order Items</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4 ">
            {order.items.map((item: any) => (
              <Card
                key={item.id}
                className="p-3 grid grid-cols-12 gap-4 md:gap-8 items-center"
              >
                {/* Left: Image */}
                <div
                  className="col-span-3 relative 
              w-[65px] md:w-[88px] lg:w-[140px]
               h-[72px] lg:h-[100px]
               "
                >
                  <Image
                    src={item.plant.image}
                    alt=""
                    fill
                    className="object-cover rounded-xl "
                  />
                </div>

                {/* Middle: Name + Price + Subtotal */}
                <div className="col-span-6">
                  <p className="font-bold">{item.plant.name}</p>
                  <p className="text-sm">Price: ${item.price}</p>
                  <p className="text-sm text-muted-foreground">
                    Subtotal: ${item.price * item.quantity}
                  </p>
                </div>

                {/* Right: Qty & Reorder */}
                <div className="flex flex-col items-end gap-2 col-span-3">
                  <Button size={"sm"} variant={"outline"}>
                    {item.quantity}
                  </Button>
                  <Button size={"sm"}>Reorder</Button>
                </div>
              </Card>
            ))}
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default OrderDetailsPage;
