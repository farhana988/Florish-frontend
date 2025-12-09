import { z } from "zod";

export const createAddressZodSchema = z.object({
  street: z
    .string({
      message: "Street must be a string",
    })
    .min(2, { message: "Street must be at least 2 characters long" }),

  city: z
    .string({
      message: "City must be a string",
    })
    .min(2, { message: "City must be at least 2 characters long" }),

  country: z
    .string({
      message: "Country must be a string",
    })
    .min(2, { message: "Country must be at least 2 characters long" }),
});

export const updateAddressZodSchema = createAddressZodSchema.partial();
