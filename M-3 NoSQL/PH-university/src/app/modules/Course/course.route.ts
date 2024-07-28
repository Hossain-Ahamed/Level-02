import express from "express"
import { validateRequest } from "../../../middlewares/validateRequest";
import { CourseValidations } from "./course.valiation";
import { CourseControllers } from "./course.controller";
const router = express.Router();

router.post('/create-course',validateRequest(CourseValidations.creteCourseValidationSchema),CourseControllers.createCourse);
router.get('/',CourseControllers.getAllCourses);
router.get('/:id',CourseControllers.getSingleCourse);
router.delete('/:id',CourseControllers.deleteCourse);

export const CourseRoutes = router;
