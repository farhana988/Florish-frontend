import RefreshButton from "@/components/buttons/RefreshButton";
import ManagementPageHeader from "@/components/shared/ManagementPageHeader";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import PlantTable from "@/components/tables/PlantTable";
import { getPlants } from "@/services/admin/plants";
import { Suspense } from "react";

const AllPlantsPage = async () => {
  const result = await getPlants();
  return (
    <>
      <ManagementPageHeader
        title="Plant Collection Management"
        description="Create, edit, and delete plants, manage their details and care instructions"
        action={{
          label: "Add New Plant",
          href: "/admin/dashboard/add-plant",
        }}
      />
      <div className="flex md:justify-end mb-8 mt-5 md:mt-0">
        <RefreshButton />
      </div>
      <Suspense fallback={<TableSkeleton columns={2} rows={10} />}>
        <PlantTable plants={result.data} />
      </Suspense>
    </>
  );
};

export default AllPlantsPage;
