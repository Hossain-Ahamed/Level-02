import { z } from 'zod';

const preRequisiteCoursesValidationSchema = z.object({
  course: z.string(),
  isDeleted: z.boolean().optional(),
});

const createCourseValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    prefix: z.string(),
    code: z.number(),
    credits: z.number(),
    preRequisiteCourses: z
      .array(preRequisiteCoursesValidationSchema)
      .optional(),
    isDeleted: z.boolean().optional(),
  }),
});

const UpdatePreRequisiteCoursesValidationSchema = z.object({
  course: z.string(),
  isDeleted: z.boolean().optional(),
});

const UpdateCourseValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    prefix: z.string().optional(),
    code: z.number().optional(),
    credits: z.number().optional(),
    preRequisiteCourses: z
      .array(UpdatePreRequisiteCoursesValidationSchema)
      .optional(),
    isDeleted: z.boolean().optional(),
  }),
});

const FacultiesWithCourseValidationSchema = z.object({
  body: z.object({
    faculties: z.array(z.string()),
  }),
});

export const CourseValidations = {
  createCourseValidationSchema,
  UpdateCourseValidationSchema,
  FacultiesWithCourseValidationSchema,
};
