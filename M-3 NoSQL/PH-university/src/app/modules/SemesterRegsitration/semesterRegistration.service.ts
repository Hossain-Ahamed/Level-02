import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { AcademicSemesterModel } from "../academicSemester/academicSemester.model";
import { TSemesterRegsitration } from "./semesterRegistration.interface";
import { SemesterRegistrationModel } from "./semesterRegistration.model";
import QueryBuilder from "../../builder/QueryBuilder";


const createSemesterRegistrationIntoDB = async (payload: TSemesterRegsitration) => {
	const academicSemester = payload?.academicSemester

	// check if there any registered semester that doesnt ended 
	const isNotEndedSemesterExist = await SemesterRegistrationModel.findOne({
		$or : [
			{status : 'ONGOING'},
			{status : "UPCOMING"}
		]
	}).select('_id status');

	if(isNotEndedSemesterExist){
		throw new AppError(httpStatus.CONFLICT,`There is already a registered ${isNotEndedSemesterExist.status} semester `)
	}

	const isSemesterRegistationExists = await SemesterRegistrationModel.findOne({ academicSemester })

	if (isSemesterRegistationExists) {
		throw new AppError(httpStatus.CONFLICT, "This semester is already registered !")
	}

	//check if the semsester exist
	const isAcademicSemesterExist = await AcademicSemesterModel.findById(academicSemester);
	if (!isAcademicSemesterExist) {
		throw new AppError(httpStatus.NOT_FOUND, "This academic semester not found !")
	}

	const result = await SemesterRegistrationModel.create(payload);

	return result;
}


const updateSemesterRegistrationIntoDB = async (id: string, payload: Partial<TSemesterRegsitration>) => {
	const academicSemester = payload?.academicSemester

	const isSemesterRegistationExists = await SemesterRegistrationModel.findOne({ academicSemester })

	if (isSemesterRegistationExists) {
		throw new AppError(httpStatus.CONFLICT, "This semester is already registered !")
	}

	//check if the semsester exist
	const isAcademicSemesterExist = await AcademicSemesterModel.findById(academicSemester);
	if (!isAcademicSemesterExist) {
		throw new AppError(httpStatus.NOT_FOUND, "This academic semester not found !")
	}

	const result = await SemesterRegistrationModel.create(payload);

	return result;
}

const getAllSemesterRegistrationsFromDB = async (query: Record<string, unknown>) => {

	const semesterRegistrationQuery = new QueryBuilder(
		SemesterRegistrationModel
			.find()
			.populate('academicSemester'),
		query,
	)
		.filter()
		.sort()
		.paginate()
		.fields()

	const result = await semesterRegistrationQuery.modelQuery;
	return result;
}
const getSingleSemesterRegistrationsFromDB = async (id: string) => {

	const result = await SemesterRegistrationModel.findById(id).populate('academicSemester');
	return result;
}

export const SemesterRegistrationServices = {
	createSemesterRegistrationIntoDB,
	updateSemesterRegistrationIntoDB,
	getAllSemesterRegistrationsFromDB,
	getSingleSemesterRegistrationsFromDB,
}