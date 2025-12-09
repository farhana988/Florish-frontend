/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { showErrorToast, showSuccessToast } from "@/utils/toast";
import { changePassword } from "@/services/auth/userActions";
import { changePasswordZodSchema } from "@/validation/changePassword.validation";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import OutlineBtn from "../buttons/OutlineBtn";
import LoaderCircle from "../shared/LoaderCircle";

type FormData = z.infer<typeof changePasswordZodSchema>;

const ChangePasswordForm = () => {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(changePasswordZodSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const result = await changePassword(data);
      if (result.success) {
        showSuccessToast("Password changed successfully!");
        reset();
      } else {
        showErrorToast("Error", result.message);
      }
    } catch (err: any) {
      showErrorToast("Error", err.message);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md space-y-6 p-4 bg-white rounded shadow"
    >
      {/* Old Password */}
      <div className="relative">
        <Label htmlFor="oldPassword">Old Password</Label>
        <Input
          id="oldPassword"
          type={showOldPassword ? "text" : "password"}
          {...register("oldPassword")}
          className="pr-10 mt-3"
        />
        <button
          type="button"
          onClick={() => setShowOldPassword((prev: any) => !prev)}
          className="absolute right-2 top-8 text-gray-400 hover:text-gray-600"
        >
          {showOldPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
        {errors.oldPassword && (
          <p className="text-red-500 text-sm mt-1">
            {errors.oldPassword.message}
          </p>
        )}
      </div>

      {/* New Password */}
      <div className="relative">
        <Label htmlFor="newPassword">New Password</Label>
        <Input
          id="newPassword"
          type={showNewPassword ? "text" : "password"}
          {...register("newPassword")}
          className="pr-10 mt-3"
        />
        <button
          type="button"
          onClick={() => setShowNewPassword((prev: any) => !prev)}
          className="absolute right-2 top-8 text-gray-400 hover:text-gray-600"
        >
          {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
        {errors.newPassword && (
          <p className="text-red-500 text-sm mt-1">
            {errors.newPassword.message}
          </p>
        )}
      </div>
      {/* Confirm New Password */}
      <div className="relative">
        <Label htmlFor="confirmNewPassword">Confirm New Password</Label>
        <Input
          id="confirmNewPassword"
          type={showConfirmPassword ? "text" : "password"}
          {...register("confirmNewPassword")}
          className="pr-10 mt-3"
        />
        <button
          type="button"
          onClick={() => setShowConfirmPassword((prev) => !prev)}
          className="absolute right-2 top-[38px] text-gray-400 hover:text-gray-600"
        >
          {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
        {errors.confirmNewPassword && (
          <p className="text-red-500 text-sm mt-1">
            {errors.confirmNewPassword.message}
          </p>
        )}
      </div>

      <OutlineBtn
        disabled={isSubmitting}
        text={isSubmitting ? <LoaderCircle /> : "Change Password"}
        className="w-full bg-black/95"
        variant="default"
        type="submit"
      />
    </form>
  );
};

export default ChangePasswordForm;
