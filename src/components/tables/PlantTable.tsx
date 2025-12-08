"use client";
import { IPlant } from "@/types/plant.interface";
import ManagementTable from "./ManagementTable";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import DeleteConfirmationDialog from "../shared/DeleteConfirmationDialog";
import { deletePlant } from "@/services/admin/plants";
import { showErrorToast, showSuccessToast } from "@/utils/toast";
import { plantsColumns } from "../table-columns/PlantTableCol";
interface PlantTableProps {
  plants: IPlant[];
}

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
      showSuccessToast(result.message || "Plant deleted successfully");
      setDeletingPlant(null);
      handleRefresh();
    } else {
      showErrorToast(result.message || "Failed to delete Plant");
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
        title="Delete Plant"
        description={`Are you sure you want to delete ${deletingPlant?.name}? This action cannot be undone.`}
        isDeleting={isDeletingDialog}
      />
    </>
  );
};

export default PlantTable;
