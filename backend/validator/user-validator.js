import { z } from "zod";

export const loginSchema = z.object({
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email" })
        .min(3, { message: "Email must be at least 3 characters" })
        .max(255, { message: "Email must not be more than 255 characters" }),

    password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(3, { message: "Password must be at least 3 characters" })
        .max(255, { message: "Password must not be more than 255 characters" }),
});

export const signupSchema = loginSchema.extend({
    username: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be at least 3 characters" })
        .max(255, { message: "Name must not be more than 255 characters" }),

   
});

export default { signupSchema, loginSchema };