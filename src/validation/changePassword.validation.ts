import z from "zod";

export const changePasswordZodSchema = z
  .object({
    oldPassword: z
      .string()
      .min(8, { message: "Old password must be at least 8 characters long" }),
    newPassword: z
      .string()
      .min(8, { message: "New password must be at least 8 characters long" })
      .regex(/^(?=.*[A-Z])/, {
        message: "Password must contain at least 1 uppercase letter",
      })
      .regex(/^(?=.*[!@#$%^&*])/, {
        message: "Password must contain at least 1 special character",
      })
      .regex(/^(?=.*\d)/, {
        message: "Password must contain at least 1 number",
      }),
    confirmNewPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    path: ["confirmNewPassword"],
    message: "Passwords do not match",
  });
