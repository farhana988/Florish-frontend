/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

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

const RegisterForm = () => {
  const [state, formAction, isPending] = useActionState(registerUser, null);
  const router = useRouter();

  const getFieldError = (fieldName: string) => {
    if (state && state.errors) {
      const error = state.errors.find((err: any) => err.field === fieldName);
      if (error) {
        return error.message;
      } else {
        return null;
      }
    } else {
      return null;
    }
  };

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
          {getFieldError("name") && (
            <FieldDescription className="text-red-600">
              {getFieldError("name")}
            </FieldDescription>
          )}
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

          {getFieldError("email") && (
            <FieldDescription className="text-red-600">
              {getFieldError("email")}
            </FieldDescription>
          )}
        </Field>
        {/* Password */}
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
          />

          {getFieldError("password") && (
            <FieldDescription className="text-red-600">
              {getFieldError("password")}
            </FieldDescription>
          )}
        </Field>
        {/* Confirm Password */}
        <Field className="md:col-span-2">
          <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
          />

          {getFieldError("confirmPassword") && (
            <FieldDescription className="text-red-600">
              {getFieldError("confirmPassword")}
            </FieldDescription>
          )}
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
