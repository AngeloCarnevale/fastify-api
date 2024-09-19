import { z } from 'zod';

export const createUserSchema = z.object({
  password: z.string().min(6, { message: "Password is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  name: z.string().optional()
});
export const loginUserSchema = z.object({
  password: z.string().min(6, { message: "Password is required" }),
  email: z.string().email({ message: "Invalid email address" }),
});

export const getUserSchema = z.object({
  id: z.string().regex(/^\d+$/, "ID must be a number"),
});

export type CreateUserInput = z.infer<typeof createUserSchema>
export type LoginUserInput = z.infer<typeof createUserSchema>