import { ParseStatus, z } from "zod";

export const registerSchema = z.object({
  userid: z.string({
    required_error: "Userid is required",
  }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password must be at least 6 characters",
    }),
  name: z.string({
    required_error: "Name is required",
  }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Invalid email",
    }),
  number_phone: z
    .string({
      required_error: "Number phone is required",
    })
    .min(10, {
      message: "Number phone must be at least 10 characters",
    }),
  role: z.string({
    required_error: "Role is required",
  }),
});

export const loginSchema = z.object({
  userid: z.string({
    required_error: "Userid is required",
  }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password must be at least 6 characters",
    }),
});