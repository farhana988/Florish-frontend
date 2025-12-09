/* eslint-disable @typescript-eslint/no-explicit-any */
import { serverFetch } from "@/lib/server-fetch";

// ➤ ADD NEW ADDRESS
export async function addAddress(
  street: string,
  city: string,
  country: string
) {
  try {
    const response = await serverFetch.post("/address/add-address", {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ street, city, country }),
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

// ➤ GET ALL ADDRESSES OF USER
export async function getAddresses() {
  try {
    const response = await serverFetch.get("/address", {});

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

// ➤ UPDATE ADDRESS
export async function updateAddress(
  addressId: string,
  data: { street?: string; city?: string; country?: string }
) {
  try {
    const response = await serverFetch.patch(
      `/address/update-address/${addressId}`,
      {
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

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
