import { z } from "zod";

export const acadmeicSemesterSchema = z.object({
    name: z.string({ required_error: "Please select a name",  }),
    year: z.string({ required_error: "Please select a year" }),
    startMonth: z.string({ required_error: "Please select a Starting Month" }),
    endMonth: z.string({ required_error: "Please select a Ending Month" }),
  });