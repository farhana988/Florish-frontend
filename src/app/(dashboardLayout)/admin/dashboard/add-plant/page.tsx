import AddPlantForm from "@/components/forms/AddPlantForm";
import ManagementPageHeader from "@/components/shared/ManagementPageHeader";

const AddPlantPage = () => {
  return (
    <>
      <ManagementPageHeader
        title="Create New Plant"
        description="Fill in the details below to add a new plant to the inventory."
      />

      <AddPlantForm />
    </>
  );
};

export default AddPlantPage;
