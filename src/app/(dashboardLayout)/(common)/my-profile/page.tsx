import ProfilePageContent from "@/components/modules/dashboard/profile/ProfilePageContent";
import ManagementPageHeader from "@/components/shared/ManagementPageHeader";
import { getCurrentUser } from "@/services/auth/getCurrentUser";

const MyProfilePage = async () => {
  const userResponse = await getCurrentUser();
  const user = userResponse?.data;

  return (
    <>
      <ManagementPageHeader
        title="Profile"
        description="View and manage your personal information and addresses."
      />
      <ProfilePageContent user={user} />;
    </>
  );
};

export default MyProfilePage;
