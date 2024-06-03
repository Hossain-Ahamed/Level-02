import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();

router.post('/create-student', StudentController.createStudent);
router.get('/get-all-students', StudentController.getAllStudents);
router.get('/get-single-student/:id', StudentController.getSingleStudent);

export const StudentRoutes = router;
