"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { useActionState, useEffect } from "react";
import { Input } from "../ui/input";
import OutlineBtn from "../buttons/OutlineBtn";
import LoaderCircle from "../shared/LoaderCircle";
import { registerUser } from "@/services/auth/registerUser";
import { useRouter } from "next/navigation";
import { showErrorToast, showSuccessToast } from "@/utils/toast";
import InputFieldError from "../shared/InputFieldError";

const RegisterForm = () => {
  const [state, formAction, isPending] = useActionState(registerUser, null);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (!state) return;

    if (!state.success && state.message) {
      showErrorToast("Registration Failed", state.message);
    } else if (state.success && state.message) {
      showSuccessToast("Registration Successful", state.message);
      router.push("/login");
    }
  }, [state, router]);

  return (
    <form action={formAction}>
      <FieldGroup>
        {/* Name */}
        <Field>
          <FieldLabel htmlFor="name">Full Name</FieldLabel>
          <Input id="name" name="name" type="text" placeholder="John Doe" />
          <InputFieldError field="name" state={state} />
        </Field>

        {/* Email */}
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
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
              placeholder="Enter your password"
              className="pr-10"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <InputFieldError field="password" state={state} />
        </Field>
        {/* Confirm Password */}
        <Field className="md:col-span-2">
          <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
          <div className="relative">
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              className="pr-10"
            />

            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black"
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <InputFieldError field="confirmPassword" state={state} />
        </Field>

        <FieldGroup className="mt-4">
          <Field>
            <OutlineBtn
              disabled={isPending}
              text={isPending ? <LoaderCircle /> : "Create Account"}
              className="w-full bg-black/95"
              variant="default"
              type="submit"
            />
            <FieldDescription className="px-6 text-center">
              Already have an account?{" "}
              <a href="/login" className="text-dGreen hover:underline">
                Sign in
              </a>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </FieldGroup>
    </form>
  );
};

export default RegisterForm;
