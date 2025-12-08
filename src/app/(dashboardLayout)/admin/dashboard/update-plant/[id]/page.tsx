import UpdatePlantForm from "@/components/forms/UpdatePlantForm";

const UpdatePlantPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Update Plant</h1>
      <UpdatePlantForm id={id} />
    </>
  );
};

export default UpdatePlantPage;
