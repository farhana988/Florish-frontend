import { z } from "zod";

export const updateUserInfoSchema = z.object({
  name: z.string().optional(),
  file: z.any().optional(), // File check is handled in UI
});
