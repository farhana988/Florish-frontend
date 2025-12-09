/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/zodValidator";
import { changePasswordZodSchema } from "@/validation/changePassword.validation";

// -------------------
// CHANGE PASSWORD
// -------------------

export const changePassword = async (data: {
  oldPassword: string;
  newPassword: string;
}) => {
  console.log("Server action received:", data);
  try {
    const validatedPayload = zodValidator(data, changePasswordZodSchema).data;
    const response = await serverFetch.patch("/user/change-password", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validatedPayload),
    });

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error(error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong while changing password",
    };
  }
};

// -------------------
// UPDATE USER INFO
// -------------------
export const updateUserInfo = async (id: string, formData: FormData) => {
  try {
    // Create a FormData-compatible payload
    const payload: any = {};
    if (formData.get("name")) payload.name = formData.get("name") as string;
    if (formData.get("file")) payload.file = formData.get("file") as File;

    const response = await serverFetch.patch(`/user/${id}`, {
      body: payload instanceof FormData ? payload : JSON.stringify(payload),
    });

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error(error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong while updating user info",
    };
  }
};
