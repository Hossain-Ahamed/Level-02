import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemesterSchemaModel } from "./academicSemester.model";


const createAcademicSemesterIntoDB = async (payLoad: TAcademicSemester) => {


	const result = await AcademicSemesterSchemaModel.create(payLoad);
	return result;
}


export const AcademicSemesterServices = {
	createAcademicSemesterIntoDB,
}