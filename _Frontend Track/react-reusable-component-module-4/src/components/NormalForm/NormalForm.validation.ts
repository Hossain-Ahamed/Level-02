import { z } from "zod";

export const SignUpSchema = z.object({
  name: z.string().min(1, "name is required"),
  email: z.string().email().min(1, "email is required"),
  password: z
    .string({
      required_error: "Name is required",
    })
    .min(8, "too short"),
});

export type TNormalForm = z.infer<typeof SignUpSchema>;