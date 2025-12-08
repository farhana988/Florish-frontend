import RefreshButton from "@/components/buttons/RefreshButton";
import ManagementPageHeader from "@/components/shared/ManagementPageHeader";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import PlantTable from "@/components/tables/PlantTable";
import { getPlants } from "@/services/admin/plants";
import { Suspense } from "react";

const AllPlantsPage = async () => {
  const result = await getPlants();
  return (
    <div className="space-y-6">
      <ManagementPageHeader
        title="Plant Collection Management"
        description="Create, edit, and delete plants, manage their details and care instructions"
        action={{
          label: "Add New Plant",
          href: "/admin/dashboard/add-plant",
        }}
      />
      <div className="flex md:justify-end">
        <RefreshButton />
      </div>
      <Suspense fallback={<TableSkeleton columns={2} rows={10} />}>
        <PlantTable plants={result.data} />
      </Suspense>
    </div>
  );
};

export default AllPlantsPage;
