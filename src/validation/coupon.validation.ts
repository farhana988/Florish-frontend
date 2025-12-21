import { z } from "zod";

export const createCouponZodSchema = z.object({
  code: z
    .string({ message: "Coupon code must be a string" })
    .min(3, { message: "Coupon code must be at least 3 characters" })
    .max(20, { message: "Coupon code must be at most 20 characters" })
    .transform((val) => val.toUpperCase()),

  discountType: z
    .string({ message: "Discount type is required" })
    .refine((val) => val === "PERCENTAGE" || val === "FIXED", {
      message: "Discount type must be either PERCENTAGE or FIXED",
    }),

  discountValue: z
    .number({ message: "Discount value is required" })
    .min(1, { message: "Discount must be at least 1" })
    .max(90, { message: "Discount cannot be more than 90%" }),
  minOrderValue: z.number({ message: "Min order value must be a number" }),

  maxDiscount: z.number({ message: "Max discount must be a number" }),

  expiryDate: z.string({ message: "Expiry date must be a valid date" }).refine(
    (val) => {
      const [year, month, day] = val.split("-").map(Number);
      const selectedDate = new Date(year, month - 1, day); // month is 0-based
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    },
    {
      message: "Expiry date must be today or in the future",
    }
  ),

  isActive: z.boolean().optional(),
});
