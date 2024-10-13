import express from 'express';
import { userControllers } from './user.controller';
import { studentValidations } from '../student/student.validation';
import { validateRequest } from '../../../middlewares/validateRequest';
import { FacultyValidations } from '../Faculty/faculty.validation';
import { AdminValidations } from '../admin/admin.validation';
import { auth } from '../../../middlewares/auth';
import { UserValidation } from './user.validation';
import { upload } from '../../../utils/sendImageToCloudinary';

const router = express.Router();

router.post(
  '/create-student',
  auth('admin'),
  upload.single('file'),
  // validateRequest(studentValidations.create_studentValidationSchema),
  userControllers.createStudent,
);
router.post(
  '/create-faculty',
  auth('admin'),
  validateRequest(FacultyValidations.Create_FacultyValidationSchema),
  userControllers.createFaculty,
);
router.post(
  '/create-admin',
  // auth('admin'),
  validateRequest(AdminValidations.createAdminValidationSchema),
  userControllers.createAdmin,
);

router.post('/change-status/:id',auth('admin'),validateRequest(UserValidation.changeUsersStatusValidationSchema),userControllers.changeStatus);
router.get('/me',auth('admin','student','faculty'),userControllers.getMyProfile)

export const UserRoutes = router;
