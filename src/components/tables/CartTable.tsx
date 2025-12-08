"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useCart } from "@/hooks/useCart";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
const CartTable = () => {
  const {
    cartItems,
    handleRemove,
    handleClear,
    handleQuantityChange,
    loadingIds,
  } = useCart();
  if (!cartItems.length) return <p className="p-4">Your cart is empty</p>;
  return (
    <div className="space-y-5">
      <div className="flex justify-between gap-6 items-center">
        <h1 className="text-xl font-medium">Your Cart</h1>
        {cartItems.length > 0 && (
          <Button variant="outline" size={"sm"} onClick={handleClear}>
            <Trash2 className="w-4 h-4 text-red-500" />
          </Button>
        )}
      </div>

      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Plant Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cartItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleRemove(item.id)}
                >
                  X
                </Button>
              </TableCell>
              <TableCell>
                <Image
                  src={item.plant.image}
                  alt={item.plant.name}
                  width={60}
                  height={60}
                  className="rounded-md border"
                />
              </TableCell>
              <TableCell>{item.plant.name.slice(0, 30)}</TableCell>
              <TableCell>${item.plant.price}</TableCell>
              <TableCell>
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  disabled={loadingIds.includes(item.id)}
                  onChange={(e) =>
                    handleQuantityChange(item.id, Number(e.target.value))
                  }
                  className="w-16 border rounded px-2 py-1 text-center"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CartTable;
