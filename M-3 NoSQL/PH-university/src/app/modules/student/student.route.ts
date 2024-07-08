import express from 'express';
import { StudentController } from './student.controller';
import { validateRequest } from './../../../middlewares/validateRequest';
import { studentValidations } from './student.validation';

const router = express.Router();

// router.post('/create-student', StudentController.createStudent);
router.get('/get-all-students', StudentController.getAllStudents);
router.get('/get-single-student/:id', StudentController.getSingleStudent);
router.patch('/:studentId',validateRequest(studentValidations.update_studentValidationSchema),StudentController.updateStudent);
router.delete('/delete-student/:id',StudentController.deleteStudent)

export const StudentRoutes = router;
