import QueryBuilder from "../../builder/QueryBuilder";
import { courseSearchableFields } from "./course.constant";
import { Tcourse } from "./course.interface";
import { CourseModel } from "./course.model"


const createCourseIntoDB = async (payload: Tcourse) => {
	const result = await CourseModel.create(payload);
	return result;
}

const getAllcoursesFromDB = async (query: Record<string, unknown>) => {

	const courseQuery = new QueryBuilder(CourseModel.find().populate('preRequisiteCourses.course'), query)
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

const updateCourseIntoDB = async (id: string, payload: Partial<Tcourse>) => {
	const { preRequisiteCourses, ...courseRemainingData } = payload;

	//step 1 : basic course info update

	const basicCourseInfo = await CourseModel.findByIdAndUpdate(
		id,
		courseRemainingData,
		{
			new: true,
			runValidators: true,
		}
	);

	if (preRequisiteCourses && Array.isArray(preRequisiteCourses) && preRequisiteCourses.length > 0) {

		//filter out the deleted fields and get the course id
		const deletedPrerequisites = preRequisiteCourses.filter(el => el.course && el.isDeleted).map(el => el.course);
		console.log(deletedPrerequisites)
		const deletedPrerequisiteCourses = await CourseModel.findByIdAndUpdate(id,
			{
				$pull: {
					preRequisiteCourses: { course: { $in: deletedPrerequisites } }
				}
			}
		)

		//filter out the new course fields and get the course id
		const newPrerequisiteCourse = preRequisiteCourses.filter(el => el.course && !el.isDeleted);

		const newPrerequisiteCourses = await CourseModel.findByIdAndUpdate(id,
			{ $addToSet: { preRequisiteCourses: { $each: newPrerequisiteCourse } } }
		)
	}

	const updatedData = await CourseModel.findById(id).populate('preRequisiteCourses.course');

	console.log(updatedData)
	return updatedData;
}


export const CourseServices = {
	createCourseIntoDB,
	getAllcoursesFromDB,
	getSinglecourseFromDB,
	updateCourseIntoDB,
	deleteCourseIntoDB,
}