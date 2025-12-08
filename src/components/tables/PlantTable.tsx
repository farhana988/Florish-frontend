"use client";
import { IPlant } from "@/types/plant.interface";
import ManagementTable from "./ManagementTable";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import DeleteConfirmationDialog from "../shared/DeleteConfirmationDialog";
import { deletePlant } from "@/services/admin/plants";

import Image from "next/image";
import { Column } from "@/types/management-table";
interface PlantTableProps {
  plants: IPlant[];
}

export const plantsColumns: Column<IPlant>[] = [
  // 🌿 Plant Image
  {
    header: "Image",
    accessor: (plant) => (
      <Image
        src={plant.image}
        alt={plant.name}
        width={50}
        height={50}
        className="rounded-md object-cover"
      />
    ),
  },

  // 🏷 Name
  {
    header: "Name",
    accessor: (plant) => plant.name,
  },

  // 🧬 Category
  {
    header: "Category",
    accessor: (plant) => plant.category,
  },

  // 💵 Price
  {
    header: "Price",
    accessor: (plant) => `$${plant.price}`,
  },

  // ⭐ Rating
  {
    header: "Rating",
    accessor: (plant) => plant.rating ?? "N/A",
  },

  // 📦 Quantity
  {
    header: "Quantity",
    accessor: (plant) => plant.quantity,
  },

  // 🎖 Badge
  {
    header: "Badge",
    accessor: (plant) =>
      plant.badge ? (
        <span className="px-2 py-1 text-xs bg-green-200 text-green-800 rounded">
          {plant.badge}
        </span>
      ) : (
        "—"
      ),
  },
];

const PlantTable = ({ plants }: PlantTableProps) => {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [deletingPlant, setDeletingPlant] = useState<IPlant | null>(null);
  const [isDeletingDialog, setIsDeletingDialog] = useState(false);

  const handleRefresh = () => {
    startTransition(() => {
      router.refresh();
    });
  };
  const handleEdit = (plant: IPlant) => {
    router.push(`/admin/dashboard/update-plant/${plant.id}`);
  };

  const handleDelete = (plant: IPlant) => {
    setDeletingPlant(plant);
  };

  const confirmDelete = async () => {
    if (!deletingPlant) return;

    setIsDeletingDialog(true);
    const result = await deletePlant(deletingPlant?.id);
    setIsDeletingDialog(false);
    if (result.success) {
      toast.success(result.message || "Speciality deleted successfully");
      setDeletingPlant(null);
      handleRefresh();
    } else {
      toast.error(result.message || "Failed to delete Plant");
    }
  };
  return (
    <>
      <ManagementTable
        data={plants}
        columns={plantsColumns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        getRowKey={(plant) => plant.id}
        emptyMessage="No Plants found"
      />

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmationDialog
        open={!!deletingPlant}
        onOpenChange={(open) => !open && setDeletingPlant(null)}
        onConfirm={confirmDelete}
        title="Delete Speciality"
        description={`Are you sure you want to delete ${deletingPlant?.name}? This action cannot be undone.`}
        isDeleting={isDeletingDialog}
      />
    </>
  );
};

export default PlantTable;
