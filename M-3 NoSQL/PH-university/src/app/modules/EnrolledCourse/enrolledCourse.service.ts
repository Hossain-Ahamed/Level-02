import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { OfferedCourseModel } from "../OfferedCourse/OfferedCourse.model";
import { TEnrolledCourse } from "./enrolledCourse.interface"
import EnrolledCourseModel from "./enrolledCourse.model";
import { Student } from "../student/student.model";


const createEnrolledCourseIntoDB = async (userId:string, payload: TEnrolledCourse) =>{


	/**
	 * Check if offered course exist
	 * check if the student is already enrolled
	 * create an enrolled course
	 */

	const student = await Student.findOne({id: userId}).select('_id')
	if(!student){
		throw new AppError(httpStatus.NOT_FOUND, "student not found")
	}
	const {offeredCourse} = payload;
	const isOfferedCourseExists = await OfferedCourseModel.findById(offeredCourse);

	if(!isOfferedCourseExists){
		throw new AppError(httpStatus.NOT_FOUND, "Offered Course not found")
	}

	if(isOfferedCourseExists.maxCapacity<=0){
		throw new AppError(httpStatus.BAD_REQUEST, "Room capcity is full")
	}

	const isAlreadyEnrolled = await EnrolledCourseModel.findOne({
		semesterRegistration : isOfferedCourseExists?.semesterRegistration,
		offeredCourse,
		student : student._id
	})
	
	if(isAlreadyEnrolled){
		throw new AppError(httpStatus.CONFLICT, "already enrolled")
	}
}

export const EnrolledCourseServices = {
	createEnrolledCourseIntoDB
}