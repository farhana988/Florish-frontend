/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/zodValidator";
import { IPlant } from "@/types/plant.interface";
import {
  createPlantZodSchema,
  updatePlantZodSchema,
} from "@/validation/plant.validation";

// CREATE PLANT
export async function createPlant(_prevState: any, formData: FormData) {
  try {
    const payload: IPlant = {
      name: formData.get("name") as string,
      category: formData.get("category") as string,
      price: Number(formData.get("price") as string),
      rating: Number(formData.get("rating") as string),
      image: formData.get("image") as string,
      badge: formData.get("badge") as string,
      quantity: Number(formData.get("quantity") as string),
      description: formData.get("description") as string,
    };

    const validationResult = zodValidator(payload, createPlantZodSchema);
    if (!validationResult.success) return validationResult;

    const validatedPayload = validationResult.data;

    const response = await serverFetch.post("/plant/create-plant", {
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
          : "Something went wrong",
    };
  }
}

// GET ALL PLANTS
export async function getPlants(queryString?: string) {
  try {
    const response = await serverFetch.get(
      `/plant${queryString ? `?${queryString}` : ""}`
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

// GET SINGLE PLANT
export async function getPlantById(id: string) {
  try {
    const response = await serverFetch.get(`/plant/${id}`);
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

// UPDATE PLANT
export async function updatePlant(
  id: string,
  _prevState: any,
  formData: FormData
) {
  try {
    const payload: Partial<IPlant> = {
      name: formData.get("name") as string,
      category: formData.get("category") as string,
      price: Number(formData.get("price") as string),
      rating: Number(formData.get("rating") as string),
      image: formData.get("image") as string,
      badge: formData.get("badge") as string,
      quantity: Number(formData.get("quantity") as string),
      description: formData.get("description") as string,
    };

    const validatedPayload = zodValidator(payload, updatePlantZodSchema).data;

    const response = await serverFetch.patch(`/plant/update-plant/${id}`, {
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
          : "Something went wrong",
    };
  }
}

// DELETE PLANT
export async function deletePlant(id: string) {
  try {
    const response = await serverFetch.delete(`/plant/delete-plant/${id}`);
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
