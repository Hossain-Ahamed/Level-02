import { Router } from "express";
import { StudentRoutes } from "../app/modules/student/student.route";
import { UserRoutes } from "../app/modules/user/user.route";
import { AcademicSemesterRoutes } from "../app/modules/academicSemester/academicSemester.route";
import { AcademicFacultyRouter } from "../app/modules/academicFaculty/academicFaculty.route";
import { AcademicDepartmentRouters } from "../app/modules/academicDepartment/academicDepartment.route";


const router = Router();


const moduleRoutes = [
	{
		path : '/users',
		route : UserRoutes
	},
	{
		path : '/students',
		route : StudentRoutes
	},
	{
		path : '/academic-semesters',
		route : AcademicSemesterRoutes
	},
	{
		path : '/academic-faculties',
		route : AcademicFacultyRouter
	},
	{
		path : '/academic-departments',
		route : AcademicDepartmentRouters
	},
]


moduleRoutes.forEach(route=>router.use(route.path,route.route))

export default router;