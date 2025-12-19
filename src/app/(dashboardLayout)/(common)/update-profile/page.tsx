import AddAddressForm from "@/components/forms/AddAddressForm";
import UpdateAddressForm from "@/components/forms/UpdateAddressForm";
import UpdateProfileInfoForm from "@/components/forms/UpdateProfileInfoForm";
import ManagementPageHeader from "@/components/shared/ManagementPageHeader";
import { getCurrentUser } from "@/services/auth/getCurrentUser";

const UpdateProfilePage = async () => {
  const userResponse = await getCurrentUser();
  const user = userResponse?.data;

  return (
    <>
      <ManagementPageHeader
        title="Update Profile"
        description="Modify your personal details and address information."
      />

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Info Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Profile Information</h2>
          <UpdateProfileInfoForm userId={user?.id} currentName={user?.name} />
        </div>
        {/* Address Section */}
        {user?.address.city ? (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Address</h2>
            <UpdateAddressForm />
          </div>
        ) : (
          <div className="space-y-4">
            <AddAddressForm />
          </div>
        )}
      </section>
    </>
  );
};

export default UpdateProfilePage;
