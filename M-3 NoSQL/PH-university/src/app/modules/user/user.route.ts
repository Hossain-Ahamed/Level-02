import express from 'express';
import { userControllers } from './user.controller';

import { studentValidations } from '../student/student.validation';
import { validateRequest } from '../../../middlewares/validateRequest';


const router = express.Router();


router.post('/create-student', validateRequest(studentValidations.create_studentValidationSchema), userControllers.createStudent)



export const UserRoutes = router;