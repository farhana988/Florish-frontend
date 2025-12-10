/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import ManagementTable from "./ManagementTable";
import DeleteConfirmationDialog from "../shared/DeleteConfirmationDialog";
import { showErrorToast, showSuccessToast } from "@/utils/toast";
import { removeWishlistItem } from "@/services/user/wishlist";

interface WishlistItem {
  id: string;
  plant: {
    id: string;
    name: string;
    image: string;
    price: number;
  };
}

interface WishlistTableProps {
  items: WishlistItem[];
}

import { Column } from "@/types/management-table";
import Image from "next/image";

export const wishlistColumns: Column<any>[] = [
  // Image
  {
    header: "Image",
    accessor: (items) => (
      <Image
        src={items.plant.image}
        alt={items.plant.name}
        width={50}
        height={50}
        className="rounded-md object-cover"
      />
    ),
  },
  {
    header: "Plant Name",
    accessor: (item) => item.plant.name,
  },
  //  Category
  {
    header: "Category",
    accessor: (item) => item.plant.category,
  },
  //  Quantity
  {
    header: "Quantity",
    accessor: (item) => item.plant.quantity,
  },

  {
    header: "Price",
    accessor: (item) => `$${item.plant.price}`,
  },
];

const WishlistTable = ({ items }: WishlistTableProps) => {
  const router = useRouter();
  const [, startTransition] = useTransition();

  const [deleting, setDeleting] = useState<WishlistItem | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleRefresh = () => {
    startTransition(() => {
      router.refresh();
    });
  };

  const handleDelete = (item: WishlistItem) => {
    setDeleting(item);
  };

  const confirmDelete = async () => {
    if (!deleting) return;

    setIsDeleting(true);
    const res = await removeWishlistItem(deleting.id);
    setIsDeleting(false);

    if (res.success) {
      showSuccessToast("Wishlist item removed");
      setDeleting(null);
      handleRefresh();
    } else {
      showErrorToast(res.message || "Failed to delete");
    }
  };

  return (
    <>
      <ManagementTable
        data={items}
        columns={wishlistColumns}
        getRowKey={(item) => item.id}
        onDelete={handleDelete}
        emptyMessage="No wishlist items found"
      />

      <DeleteConfirmationDialog
        open={!!deleting}
        onOpenChange={(open) => !open && setDeleting(null)}
        onConfirm={confirmDelete}
        title="Remove Wishlist Item"
        description={`Are you sure you want to remove ${
          deleting?.plant.name ?? ""
        } from wishlist?`}
        isDeleting={isDeleting}
      />
    </>
  );
};

export default WishlistTable;
