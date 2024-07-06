import { model, Schema } from "mongoose";
import { TAcademicSemester,} from "./academicSemester.interface";
import { AcademicSemesterCodes, AcademicSemsterNames, Months } from "./academicSemester.constant";
// 12-6

const academicSemesterSchema = new Schema<TAcademicSemester>({
	name: {
		type: String,
		required: true,
		enum : AcademicSemsterNames
	},
	year: {
		type: String,
		required: true
	},
	code: {
		type: String,
		required: true,
		enum : AcademicSemesterCodes,
	},
	startMonth : {
		type : String,
		required:true,
		enum : Months
	},
	endMonth : {
		type : String,
		required:true,
		enum : Months
	},
},{
	timestamps : true,
	
})

export const AcademicSemesterSchemaModel = model<TAcademicSemester>('AcademicSemester',academicSemesterSchema);