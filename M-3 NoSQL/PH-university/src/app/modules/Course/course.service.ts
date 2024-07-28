import QueryBuilder from "../../builder/QueryBuilder";
import { courseSearchableFields } from "./course.constant";
import { Tcourse } from "./course.interface";
import { CourseModel } from "./course.model"


const createCourseIntoDB = async (payload: Tcourse) => {
	const result = await CourseModel.create(payload);
	return result;
}

const getAllcoursesFromDB = async (query : Record<string,unknown>) => {

	const courseQuery = new QueryBuilder(CourseModel.find().populate('preRequisiteCourses.course'),query)
	.search(courseSearchableFields)
	.filter()
	.sort()
	.paginate()
	.fields()
	
	const result = await courseQuery.modelQuery;
	return result;
}

const getSinglecourseFromDB = async (id: string) => {
	const result = await CourseModel.findById(id).populate('preRequisiteCourses.course');
	return result;
}

const deleteCourseIntoDB = async (id: string) => {
	const result = await CourseModel.findByIdAndUpdate(id, {
		isDeleted: true,
	}, { new: true });
	return result;
}


export const CourseServices = {
	createCourseIntoDB,
	getAllcoursesFromDB,
	getSinglecourseFromDB,
	deleteCourseIntoDB,
}