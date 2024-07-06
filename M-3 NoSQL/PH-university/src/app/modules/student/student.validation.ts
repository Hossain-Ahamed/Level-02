import { z } from 'zod';

const userNameValidationSchema = z.object({
  firstName: z.string()
    .trim()
    .max(20, "name can't be greater than 20 characters")
    .refine(value => value === value.charAt(0).toUpperCase() + value.slice(1), {
      message: '{VALUE} is not in capitalize format',
    }),
  middleName: z.string().optional(),
  lastName: z.string()
    .refine(value => /^[A-Za-z]+$/.test(value), {
      message: '{VALUE} is not valid',
    })

});

const guardianValidationSchema = z.object({
  fatherName: z.string().nonempty(),
  fatherOccupation: z.string().nonempty(),
  fatherContactNo: z.string().nonempty(),
  motherName: z.string().nonempty(),
  motherOccupation: z.string().nonempty(),
  motherContactNo: z.string().nonempty(),
});

const localGuardianSchema = z.object({
  name: z.string().nonempty(),
  occupation: z.string().nonempty(),
  contactNo: z.string().nonempty(),
  address: z.string().nonempty(),
});

const create_studentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20),
    student: z.object({
      name: userNameValidationSchema,
      gender: z.enum(['male', 'female', 'others']),
      dateOfBirth: z.date().optional(),
      contactNo: z.string().nonempty('Contact Number is required'),
      emergencyContactNo: z.string().nonempty('Emergency Contact Number is required'),
      bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
      email: z.string()
        .email('{VALUE} is not a valid email')
        .nonempty('Email is required and must be unique'),
      presentAddress: z.string().nonempty('Present Address is required'),
      permanentAddress: z.string().nonempty('Permanent Address is required'),
      guardian: guardianValidationSchema,
      localGuardian: localGuardianSchema,
      profileImg: z.string().optional(),
    })
  })

})
export const studentValidations = {
  create_studentValidationSchema
};
