import AppError from "../../errors/AppError";
import { academicSemsterCodeMappaer } from "./academicSemester.constant";
import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemesterSchemaModel } from "./academicSemester.model";


const createAcademicSemesterIntoDB = async (payLoad: TAcademicSemester) => {
	if (academicSemsterCodeMappaer[payLoad.name] !== payLoad.code) {
		throw new AppError(404,'Invalid semester code')
	}

	const result = await AcademicSemesterSchemaModel.create(payLoad);
	return result;
}

const updateAcademicSemesterIntoDB = async (
	id: string,
	payload: Partial<TAcademicSemester>,
) => {
	if (
		payload.name &&
		payload.code &&
		academicSemsterCodeMappaer[payload.name] !== payload.code
	) {
		throw new AppError(404,'Invalid Semester Code');
	}

	const result = await AcademicSemesterSchemaModel.findOneAndUpdate({ _id: id }, payload, {
		new: true,
	});
	return result;
};

const getAllSemesterFromDB = async () => {
	return await AcademicSemesterSchemaModel.find().sort({ _id: 1 })
}

const getSingleAcademicSemester = async (semesterID: string) => {
	const result = await AcademicSemesterSchemaModel.findById(semesterID);
	return result

}


export const AcademicSemesterServices = {
	createAcademicSemesterIntoDB,
	getAllSemesterFromDB,
	getSingleAcademicSemester,
	updateAcademicSemesterIntoDB
}