import { model, Schema } from "mongoose";
import { TAcademicSemester, } from "./academicSemester.interface";
import { AcademicSemesterCodes, AcademicSemsterNames, Months } from "./academicSemester.constant";
import { customError } from "../../../middlewares/globalErrorHandler";

// 12-6

const academicSemesterSchema = new Schema<TAcademicSemester>({
	name: {
		type: String,
		required: true,
		enum: AcademicSemsterNames
	},
	year: {
		type: String,
		required: true
	},
	code: {
		type: String,
		required: true,
		enum: AcademicSemesterCodes,
	},
	startMonth: {
		type: String,
		required: true,
		enum: Months
	},
	endMonth: {
		type: String,
		required: true,
		enum: Months
	},
}, {
	timestamps: true,

})

academicSemesterSchema.pre('save', async function (next) {
	const isSemExists = await AcademicSemesterSchemaModel.findOne({
		name: this.name,
		year: this.year,
	})
	if (isSemExists) {
		next(customError(409, "Semester already exists"))
	}
	next();
})

export const AcademicSemesterSchemaModel = model<TAcademicSemester>('AcademicSemester', academicSemesterSchema);