import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import { User } from "./user.model";


const findLastAdmittedStudentId = async () => {
	//todo : search by semesetr 
	const lastStudent = await User.findOne({
		role: 'student',
		
	}, {
		id: 1,
		_id: 0,
	}).sort({
		createdAt: -1
	}).lean();
	return lastStudent?.id
}
export const generateStudentID = async (payload: TAcademicSemester) => {

	let currentId: number | string = 0;

	const lastStudentId = await findLastAdmittedStudentId();

	const lastStudentYear = lastStudentId?.substring(0, 4) //2030
	const lastStudentSemesterCode = lastStudentId?.substring(4, 6) //2030
	const SelectedSession_SemeseterCode = payload.code;
	const SelectedSession_Year = payload.year;

	if (lastStudentId && lastStudentSemesterCode === SelectedSession_SemeseterCode && lastStudentYear === SelectedSession_Year) {
		currentId = lastStudentId.substring(6);
	}

	let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
	incrementId = `${payload.year}${payload.code}${incrementId}`;
	return incrementId

}


