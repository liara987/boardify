import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("This email is invalid"),
  password: z.string().min(1, "Password is required"),
});
