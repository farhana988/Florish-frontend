import LoginForm from "@/components/forms/login-form";
import LoginSuccessToast from "@/components/shared/LoginSuccessToast";
import SectionHeader from "@/components/shared/SectionHeader";

const LoginPage = async ({
  searchParams,
}: {
  searchParams?: Promise<{ redirect?: string }>;
}) => {
  const params = (await searchParams) || {};
  return (
    <>
      <SectionHeader
        title="Welcome Back"
        subtitle=" Enter your credentials to access your account"
      />
      <div className="flex w-full items-center justify-center ">
        <div className="w-full max-w-xl border shadow-lg p-5 rounded-lg">
          <LoginForm redirect={params.redirect} />
        </div>
      </div>
      <LoginSuccessToast />
    </>
  );
};

export default LoginPage;
