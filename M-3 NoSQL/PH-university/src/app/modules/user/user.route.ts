import express, { NextFunction, Request, Response } from 'express';
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
  (req:Request,res: Response,next:NextFunction)=>{
    req.body = JSON.parse(req.body?.data);
    next();
  },
  validateRequest(studentValidations.create_studentValidationSchema),
  userControllers.createStudent,
);
router.post(
  '/create-faculty',
  auth('admin'),
  upload.single('file'),
  (req:Request,res: Response,next:NextFunction)=>{
    req.body = JSON.parse(req.body?.data);
    next();
  },
  validateRequest(FacultyValidations.Create_FacultyValidationSchema),
  userControllers.createFaculty,
);
router.post(
  '/create-admin',
  // auth('admin'),
  upload.single('file'),
  (req:Request,res: Response,next:NextFunction)=>{
    req.body = JSON.parse(req.body?.data);
    next();
  },
  validateRequest(AdminValidations.createAdminValidationSchema),
  userControllers.createAdmin,
);

router.post('/change-status/:id',auth('admin'),validateRequest(UserValidation.changeUsersStatusValidationSchema),userControllers.changeStatus);
router.get('/me',auth('admin','student','faculty'),userControllers.getMyProfile)

export const UserRoutes = router;
