import { z } from 'zod';

export const createUserSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
});

export const getUserSchema = z.object({
  id: z.string().regex(/^\d+$/, "ID must be a number"),
});