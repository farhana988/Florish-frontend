import UpdateProfileInfoForm from "@/components/forms/UpdateProfileInfoForm";
import { getAddresses } from "@/services/auth/addressActions";
import { getCurrentUser } from "@/services/auth/getCurrentUser";

const UpdateProfilePage = async () => {
  const userResponse = await getCurrentUser();
  const add = await getAddresses();
  const user = userResponse?.data;
  console.log(add.data);

  return <UpdateProfileInfoForm userId={user.id} currentName={user.name} />;
};

export default UpdateProfilePage;
