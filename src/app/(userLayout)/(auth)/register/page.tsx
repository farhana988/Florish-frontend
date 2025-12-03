import RegisterForm from "@/components/forms/register-form";
import SectionHeader from "@/components/shared/SectionHeader";

const RegisterPage = () => {
  return (
    <>
      <SectionHeader
        title="Create an account"
        subtitle="Enter your information below to create your account"
      />
      <div className="flex w-full items-center justify-center ">
        <div className="w-full max-w-xl border shadow-lg p-5 rounded-lg">
          <RegisterForm />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
