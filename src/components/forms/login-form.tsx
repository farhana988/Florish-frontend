"use client";
import { useRef, useState } from "react";
import { Crown, Eye, EyeOff, ShieldCheck } from "lucide-react";
import { useActionState, useEffect } from "react";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "../ui/field";
import { loginUser } from "@/services/auth/loginUser";
import { Input } from "../ui/input";
import OutlineBtn from "../buttons/OutlineBtn";
import LoaderCircle from "../shared/LoaderCircle";
import InputFieldError from "../shared/InputFieldError";
import { showErrorToast } from "@/utils/toast";
import { Button } from "../ui/button";

const LoginForm = ({ redirect }: { redirect?: string }) => {
  const [state, formAction, isPending] = useActionState(loginUser, null);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (state && !state.success && state.message) {
      showErrorToast("Error", state.message);
    }
  }, [state]);

  const formRef = useRef<HTMLFormElement>(null);

  const quickLogin = (userEmail: string, userPassword: string) => {
    setEmail(userEmail);
    setPassword(userPassword);

    requestAnimationFrame(() => {
      formRef.current?.requestSubmit();
    });
  };

  return (
    <form ref={formRef} action={formAction}>
      {redirect && <input type="hidden" name="redirect" value={redirect} />}
      <FieldGroup>
        <div className="grid grid-cols-1 gap-4">
          {/* Email */}
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="johndoe@example.com"
            />

            <InputFieldError field="email" state={state} />
          </Field>

          {/* Password */}
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="pr-10"
              />

              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <InputFieldError field="password" state={state} />
          </Field>
        </div>
        <FieldGroup className="mt-4">
          <Field>
            <OutlineBtn
              disabled={isPending}
              text={isPending ? <LoaderCircle /> : "Login"}
              className="w-full bg-black/95"
              variant="default"
              type="submit"
            />
            <FieldDescription className="px-6 text-center">
              Don&apos;t have an account?{" "}
              <a href="/register" className="text-blue-600 hover:underline">
                Sign up
              </a>
            </FieldDescription>
            {/* <FieldDescription className="px-6 text-center">
              <a
                href="/forget-password"
                className="text-blue-600 hover:underline"
              >
                Forgot password?
              </a>
            </FieldDescription> */}
          </Field>
        </FieldGroup>
      </FieldGroup>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <Button
          type="button"
          variant="outline"
          onClick={() =>
            quickLogin(
              process.env.NEXT_PUBLIC_ADMIN_EMAIL!,
              process.env.NEXT_PUBLIC_ADMIN_PASSWORD!,
            )
          }
          className=" border-blue-200 bg-blue-50 text-blue-700 hover:text-black
           hover:bg-blue-300 shadow-sm hover:shadow-lg"
        >
          <ShieldCheck className="w-5 h-5 mr-2" />
          Login as Admin
        </Button>

        <Button
          type="button"
          variant="outline"
          onClick={() =>
            quickLogin(
              process.env.NEXT_PUBLIC_SUPER_ADMIN_EMAIL!,
              process.env.NEXT_PUBLIC_SUPER_ADMIN_PASSWORD!,
            )
          }
          className=" border-purple-200 bg-purple-50 text-purple-700 hover:text-black
           hover:bg-purple-300 shadow-sm hover:shadow-lg"
        >
          <Crown className="w-5 h-5 mr-2" />
          Login as Super Admin
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
