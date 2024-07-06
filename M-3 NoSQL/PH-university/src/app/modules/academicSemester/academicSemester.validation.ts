import { z } from "zod";
import { AcademicSemesterCodes, AcademicSemsterNames, Months } from "./academicSemester.constant";



const createAcademicSemsterValidationSchema = z.object({
	body: z.object({
		name: z.enum([...AcademicSemsterNames] as [string,...string[]]),
		year: z.string(),
		code : z.enum([...AcademicSemesterCodes] as [string,...string[]] ),
		startMonth : z.enum([...Months] as [string,...string[]]),
		endMonth : z.enum([...Months] as [string,...string[]])
	})
})

export const AcademicSemesterValidations = {
	createAcademicSemsterValidationSchema,
}