import { z } from "zod";

export const createAddressZodSchema = z.object({
  street: z.string().min(2),
  city: z.string().min(2),
  country: z.string().min(2),
});

export const updateAddressZodSchema = z.object({
  street: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
});
