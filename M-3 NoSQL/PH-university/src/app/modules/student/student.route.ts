import express from 'express';
import { StudentController } from './student.controller';
import { validateRequest } from './../../../middlewares/validateRequest';
import { studentValidations } from './student.validation';
import { auth } from '../../../middlewares/auth';

const router = express.Router();

// router.post('/create-student', StudentController.createStudent);
router.get('/',auth('admin','faculty'), StudentController.getAllStudents);
router.get('/:id',auth('admin','faculty'), StudentController.getSingleStudent);
router.patch(
  '/:studentId',
  auth('admin') ,
  validateRequest(studentValidations.update_studentValidationSchema),
  StudentController.updateStudent,
);
router.delete('/delete-student/:id', auth('admin') ,StudentController.deleteStudent);

export const StudentRoutes = router;
