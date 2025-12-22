import LoginForm from "@/components/forms/login-form";
import LoginSuccessToast from "@/components/shared/LoginSuccessToast";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
          <div className="flex justify-end mt-10">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="rounded-full">View Admin Credentials</Button>
              </DialogTrigger>

              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Admin Credentials</DialogTitle>
                </DialogHeader>

                <div className="space-y-4 text-sm">
                  {/* Admin */}
                  <div>
                    <h3 className="font-semibold mb-2">Admin</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Email:</span>
                        <span>admin@gmail.com</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Password:</span>
                        <span> 123456aA@</span>
                      </div>
                    </div>
                  </div>

                  <hr />

                  {/* Super Admin */}
                  <div>
                    <h3 className="font-semibold mb-2">Super Admin</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Email:</span>
                        <span>superadmin@gmail.com</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Password:</span>
                        <span>12345678</span>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      <LoginSuccessToast />
    </>
  );
};

export default LoginPage;
