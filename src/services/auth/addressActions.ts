/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/zodValidator";
import { IAddress } from "@/types/address.interface";
import {
  createAddressZodSchema,
  updateAddressZodSchema,
} from "@/validation/address.validation";

// CREATE ADDRESS
export async function createAddress(_prevState: any, formData: FormData) {
  try {
    const payload: Partial<IAddress> = {
      street: formData.get("street") as string,
      city: formData.get("city") as string,
      country: formData.get("country") as string,
    };

    const validationResult = zodValidator(payload, createAddressZodSchema);
    if (!validationResult.success) return validationResult;

    const validatedData = validationResult.data;

    const response = await serverFetch.post("/address/add-address", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validatedData),
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
          : "Something went wrong",
    };
  }
}

// GET USER'S ADDRESSES
export async function getAddresses() {
  try {
    const response = await serverFetch.get(`/address`);
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

// UPDATE ADDRESS
export async function updateAddress(
  addressId: string,
  _prevState: any,
  formData: FormData
) {
  try {
    const payload: Partial<IAddress> = {
      street: formData.get("street") as string,
      city: formData.get("city") as string,
      country: formData.get("country") as string,
    };

    const validation = zodValidator(payload, updateAddressZodSchema);
    if (!validation.success) return validation;

    const validatedData = validation.data;

    const response = await serverFetch.patch(
      `/address/update-address/${addressId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedData),
      }
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
