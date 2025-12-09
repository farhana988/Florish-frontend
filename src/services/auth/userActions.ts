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

export const updateUserInfo = async (id: string, payload: any) => {
  try {
    let body;
    const headers: Record<string, string> = {};

    if (payload instanceof FormData) {
      // File upload or mixed FormData
      body = payload;
    } else {
      // Normal JSON payload (e.g., just updating name)
      body = JSON.stringify(payload);
      headers["Content-Type"] = "application/json";
    }

    const response = await serverFetch.patch(`/user/${id}`, {
      body,
      headers,
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
