import express from 'express';
import { StudentController } from './student.controller';
import { validateRequest } from './../../../middlewares/validateRequest';
import { studentValidations } from './student.validation';

const router = express.Router();

// router.post('/create-student', StudentController.createStudent);
router.get('/', StudentController.getAllStudents);
router.get('/:id', StudentController.getSingleStudent);
router.patch(
  '/:studentId',
  validateRequest(studentValidations.update_studentValidationSchema),
  StudentController.updateStudent,
);
router.delete('/delete-student/:id', StudentController.deleteStudent);

export const StudentRoutes = router;
