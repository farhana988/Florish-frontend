/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";

// GET ALL USERS
export async function getAllUsers(query?: string) {
  try {
    const response = await serverFetch.get(
      `/user/all-user${query ? `?${query}` : ""}`
    );

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error(error);

    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong",
    };
  }
}

// BLOCK USER
export async function blockUser(id: string) {
  try {
    const response = await serverFetch.patch(`/user/block/${id}`);

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error(error);

    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong",
    };
  }
}

// MAKE ADMIN
export async function makeAdmin(id: string) {
  try {
    const response = await serverFetch.patch(`/user/make-admin/${id}`);

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error(error);

    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong",
    };
  }
}
