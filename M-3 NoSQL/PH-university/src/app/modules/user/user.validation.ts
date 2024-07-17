import { z } from 'zod';
const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'Password must be string',
    })
    .max(20, { message: 'Password cant be more than 20 character' })
    .min(6, { message: 'password must be at least 6 character' })
    .optional(),
});

export const UserValidation = {
  userValidationSchema,
};
