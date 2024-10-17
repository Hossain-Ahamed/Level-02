import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { OfferedCourseModel } from "../OfferedCourse/OfferedCourse.model";
import { TEnrolledCourse } from "./enrolledCourse.interface"
import EnrolledCourseModel from "./enrolledCourse.model";
import { Student } from "../student/student.model";
import mongoose from "mongoose";
import { SemesterRegistrationModel } from "../SemesterRegsitration/semesterRegistration.model";


const createEnrolledCourseIntoDB = async (userId: string, payload: TEnrolledCourse) => {


	/**
	 * Check if offered course exist
	 * check if the student is already enrolled
	 * create an enrolled course 
	 * 
	 */

	const student = await Student.findOne({ id: userId }, { _id: 1 })
	if (!student) {
		throw new AppError(httpStatus.NOT_FOUND, "student not found")
	}
	const { offeredCourse } = payload;
	const isOfferedCourseExists = await OfferedCourseModel.findById(offeredCourse);

	if (!isOfferedCourseExists) {
		throw new AppError(httpStatus.NOT_FOUND, "Offered Course not found")
	}

	if (isOfferedCourseExists.maxCapacity <= 0) {
		throw new AppError(httpStatus.BAD_REQUEST, "Room capcity is full")
	}

	const isAlreadyEnrolled = await EnrolledCourseModel.findOne({
		semesterRegistration: isOfferedCourseExists?.semesterRegistration,
		offeredCourse,
		student: student._id
	})

	if (isAlreadyEnrolled) {
		throw new AppError(httpStatus.CONFLICT, "already enrolled")
	}

	//check total credit exceeds max credit or not
	const RegisteredSemesterData = await SemesterRegistrationModel.findById(isOfferedCourseExists.semesterRegistration).select('maxCredit');

	//total enrolled credits + new enrolled credits > maxCrdit ? 
		// 20-5
	const enrolledCourses = await EnrolledCourseModel.aggregate([
		{
			$match: {
				semesterRegistration: isOfferedCourseExists.semesterRegistration,
				student: student._id,

			}
		}
	])


	const session = await mongoose.startSession();
	try {
		session.startTransaction();

		const result = await EnrolledCourseModel.create([{
			semesterRegistration: isOfferedCourseExists.semesterRegistration,
			academicSemester: isOfferedCourseExists.academicSemester,
			academicFaculty: isOfferedCourseExists.academicFaculty,
			academicDepartment: isOfferedCourseExists.academicDepartment,
			offeredCourse: payload.offeredCourse,
			course: isOfferedCourseExists.course,
			student: student._id,
			faculty: isOfferedCourseExists.faculty,
			isEnrolled: true
		}], { session })

		if (!result) {
			throw new AppError(httpStatus.BAD_REQUEST, "Failed to enrol to this course");
		}

	
		// const maxCapacity = isOfferedCourseExists.maxCapacity;
		await OfferedCourseModel.findByIdAndUpdate(offeredCourse,
			{
				$inc: { maxCapacity: -1 }
			},
			{
				new: true,
				session,
			}
		);

		await session.commitTransaction();
		await session.endSession();


		return result;
	} catch (error) {
		await session.abortTransaction();
		await session.endSession();
		throw new AppError(httpStatus.BAD_REQUEST, (error as Error).message || 'An unknown error occurred', (error as Error)?.stack);
	}




}

export const EnrolledCourseServices = {
	createEnrolledCourseIntoDB
}