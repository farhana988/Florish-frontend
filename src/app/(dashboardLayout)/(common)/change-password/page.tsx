import ChangePasswordForm from "@/components/forms/ChangePasswordForm";
import ManagementPageHeader from "@/components/shared/ManagementPageHeader";
import React from "react";

const ChangePasswordPage = () => {
  return (
    <>
      <ManagementPageHeader
        title="Change Password"
        description="Update your account password by filling in the fields below."
      />
      <ChangePasswordForm />
    </>
  );
};

export default ChangePasswordPage;
