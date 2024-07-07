import express from "express"
import { validateRequest } from "../../../middlewares/validateRequest";
import { academicFacultyValidation } from "./academicFaculty.validation";
import { AcademicFacultyControllers } from "./academicFaculty.controller";
const router = express.Router();

router.post('/create-academic-faculty', validateRequest(academicFacultyValidation.createacademicFacultyValidationSchema), AcademicFacultyControllers.createAcadmeicFaculty);
router.get('/', AcademicFacultyControllers.getAllAcademicFaculty);
router.get('/:facultyId', AcademicFacultyControllers.getsingleAcademicFaculty);
router.patch('/:facultyId',validateRequest(academicFacultyValidation.updatecademicFacultyValidationSchema),AcademicFacultyControllers.updateAcademicFaculty);

export const AcademicFacultyRouter= router;