import { z } from "zod";

export const addToCartZodSchema = z.object({
  plantId: z.string().min(1, "Plant ID is required"),
  quantity: z.number().min(1, "Quantity must be at least 1"),
});

export const updateCartItemZodSchema = z.object({
  quantity: z.number().min(1, "Quantity must be at least 1"),
});
