import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    const result = await StudentServices.createStudentIntoDb(studentData);

    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (e) {
    console.log(e);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();

    res.status(200).json({
      success: true,
      message: 'Students data found successfully',
      data: result,
    });
  } catch (e) {
    console.log(e);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const studentID = req.params.id;
    const result = await StudentServices.getAStudentFromDB(studentID);

    res.status(200).json({
      success: true,
      message: 'Students data found successfully',
      data: result,
    });
  } catch (e) {
    console.log(e);
  }
};

export const StudentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
