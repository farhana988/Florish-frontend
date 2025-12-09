import ProfilePageContent from "@/components/modules/dashboard/profile/ProfilePageContent";
import { getCurrentUser } from "@/services/auth/getCurrentUser";

const MyProfilePage = async () => {
  const userResponse = await getCurrentUser();
  const user = userResponse?.data;

  return <ProfilePageContent user={user} />;
};

export default MyProfilePage;
