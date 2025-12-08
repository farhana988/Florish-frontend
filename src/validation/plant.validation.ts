import { z } from "zod";

export const createPlantZodSchema = z.object({
  name: z
    .string({ message: "Name must be a string" })
    .min(1, "Name is required"),
  category: z
    .string({ message: "Category must be a string" })
    .min(1, "Category is required"),
  price: z
    .number({ message: "Price must be a number" })
    .positive("Price must be a positive number"),
  rating: z
    .number({ message: "Rating must be a number" })
    .min(0, "Rating cannot be below 0")
    .max(5, "Rating cannot be above 5")
    .optional(),
  image: z.url("Image must be a valid URL"),
  badge: z.string({ message: "Badge must be a string" }).optional(),
  quantity: z
    .number({ message: "Quantity must be a number" })
    .int("Quantity must be an integer")
    .nonnegative("Quantity cannot be negative")
    .positive("Quantity must be greater than 0"),
  description: z.string().min(1, "Description is required"),
});

export const updatePlantZodSchema = createPlantZodSchema.partial();
