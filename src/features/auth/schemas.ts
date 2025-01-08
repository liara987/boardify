import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("This email is invalid"),
  password: z.string().min(1, "Password is required"),
});

export const registerSchema = z.object({
  name: z.string().trim().min(1, "User name is required"),
  email: z.string().email("This email is invalid"),
  password: z.string().min(8, "Minimum of 8 characters is required"),
});
