import express from 'express';
import { userControllers } from './user.controller';

import { studentValidations } from '../student/student.validation';
import { validateRequest } from '../../../middlewares/validateRequest';
import { FacultyValidations } from '../Faculty/faculty.validation';
import { AdminValidations } from '../admin/admin.validation';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(studentValidations.create_studentValidationSchema),
  userControllers.createStudent,
);
router.post(
  '/create-faculty',
  validateRequest(FacultyValidations.Create_FacultyValidationSchema),
  userControllers.createFaculty,
);
router.post(
  '/create-admin',
  validateRequest(AdminValidations.createAdminValidationSchema),
  userControllers.createAdmin,
);

export const UserRoutes = router;
