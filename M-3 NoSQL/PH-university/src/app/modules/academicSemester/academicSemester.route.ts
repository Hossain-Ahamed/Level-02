
import express from 'express';
import { validateRequest } from '../../../middlewares/validateRequest';
import { AcademicSemesterValidations } from './academicSemester.validation';
import { AcademicSemsterControllers } from './academicSemester.controller';

const router = express.Router();

router.post('/create-academic-semester',validateRequest(AcademicSemesterValidations.createAcademicSemsterValidationSchema),AcademicSemsterControllers.createStudent)
export const AcademicSemesterRoutes = router;