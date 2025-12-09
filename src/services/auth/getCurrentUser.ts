/* eslint-disable @typescript-eslint/no-explicit-any */
import { serverFetch } from "@/lib/server-fetch";

export async function getCurrentUser() {
  try {
    const response = await serverFetch.get(`/auth/me`, {
      credentials: "include",
    });

    const result = await response.json();

    return result;
  } catch (error: any) {
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong",
    };
  }
}
