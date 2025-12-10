/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";

// GET USER WISHLIST
export async function getWishlist(queryString?: string) {
  try {
    const response = await serverFetch.get(
      `/wishlist${queryString ? `?${queryString}` : ""}`
    );

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error("Error fetching wishlist:", error);

    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong!",
    };
  }
}

// ADD TO WISHLIST
export async function addToWishlist(plantId: string) {
  try {
    const response = await serverFetch.post("/wishlist/add-wishlist", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ plantId }),
    });

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error("Error adding to wishlist:", error);

    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong!",
    };
  }
}

// REMOVE WISHLIST ITEM
export async function removeWishlistItem(itemId: string) {
  try {
    const response = await serverFetch.delete(
      `/wishlist/remove-wishlist-item/${itemId}`
    );

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error("Error removing wishlist item:", error);

    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong!",
    };
  }
}

// CLEAR WISHLIST
export async function clearWishlist() {
  try {
    const response = await serverFetch.delete(`/wishlist/clear-wishlist`);
    const result = await response.json();

    return result;
  } catch (error: any) {
    console.error("Error clearing wishlist:", error);

    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong!",
    };
  }
}
