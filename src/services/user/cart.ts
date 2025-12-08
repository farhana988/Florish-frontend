/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/zodValidator";
import {
  addToCartZodSchema,
  updateCartItemZodSchema,
} from "@/validation/cart.validation";

// GET USER CART
export async function getCart(queryString?: string) {
  try {
    const response = await serverFetch.get(
      `/cart${queryString ? `?${queryString}` : ""}`
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

// ADD ITEM TO CART
export async function addToCart(plantId: string, quantity: number) {
  try {
    const response = await serverFetch.post("/cart/add-to-cart", {
      headers: {
        "Content-Type": "application/json", // Ensure we send JSON
      },
      body: JSON.stringify({ plantId, quantity }), // Send the data as JSON
    });

    const result = await response.json();
    return result; // Expected to return a result with { success, message, data }
  } catch (error: any) {
    console.error("Error adding to cart:", error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong",
    };
  }
}

// UPDATE CART ITEM
export async function updateCartItem(id: string, quantity: number) {
  try {
    // Validate the quantity
    const validationResult = zodValidator(
      { quantity },
      updateCartItemZodSchema
    );

    if (!validationResult.success) return validationResult;

    const validatedPayload = validationResult.data;

    // Send PATCH request
    const response = await serverFetch.patch(`/cart/update-cart/${id}`, {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validatedPayload),
    });

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error("Error updating cart item:", error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong",
    };
  }
}

// REMOVE ITEM FROM CART
export async function removeCartItem(id: string) {
  try {
    const response = await serverFetch.delete(`/cart/remove-cart-item/${id}`);
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

// CLEAR CART
export async function clearCart() {
  try {
    const response = await serverFetch.delete("/cart/clear-cart");
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
