
import express from 'express';
import { validateRequest } from '../../../middlewares/validateRequest';
import { AcademicSemesterValidations } from './academicSemester.validation';
import { AcademicSemsterControllers } from './academicSemester.controller';

const router = express.Router();
router.get('/',AcademicSemsterControllers.getAllAcademicSemesters);
router.get('/:semesterId',AcademicSemsterControllers.getSingleAcademicSemester);
router.patch('/:semesterId',validateRequest(AcademicSemesterValidations.updateAcademicSemesterValidationSchema),AcademicSemsterControllers.updateAcademicSemester);
router.post('/create-academic-semester', validateRequest(AcademicSemesterValidations.createAcademicSemsterValidationSchema), AcademicSemsterControllers.createAcademicSemster)
export const AcademicSemesterRoutes = router;