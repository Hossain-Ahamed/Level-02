import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import StudentValidationSchema from './student.joi.validation';
import { z } from 'zod';
import StudentZodValidationSchema from './student.zod.validation';
//data validation using Joi

// const createStudent = async (req: Request, res: Response) => {
//   try {
//     const { student: studentData } = req.body;

//     const { error, value } = StudentValidationSchema.validate(studentData);

//     if (error) {
//       res.status(500).json({
//         success: false,
//         message: 'Error occured',
//         data: error,
//         error: error.details,
//       });
//     }

//     const result = await StudentServices.createStudentIntoDb(value);

//     res.status(200).json({
//       success: true,
//       message: 'Student created successfully',
//       data: result,
//     });
//   } catch (e) {
//     console.log(e);
//   }
// };

//validation using ZOD

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    const zodParseData = StudentZodValidationSchema.parse(studentData); 

    const result = await StudentServices.createStudentIntoDb(zodParseData);

    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (e : any) {
    res.status(500).json({
        success: false,
        message: e.message || 'Error occured',
        data: e,
      });
  }
};

//  valiation using valiation

// const createStudent = async (req: Request, res: Response) => {
//   try {
//     const { student: studentData } = req.body;

//     const result = await StudentServices.createStudentIntoDb(studentData);

//     res.status(200).json({
//       success: true,
//       message: 'Student created successfully',
//       data: result,
//     });
//   } catch (e) {
//     res.status(500).json({
//   success: false,
//   message: 'Error occured',
//   data: e,
// });
//   }
// };

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
    res.status(500).json({
      success: false,
      message: 'Error occured',
      data: e,
    });
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
    res.status(500).json({
      success: false,
      message: 'Error occured',
      data: e,
    });
  }
};

const deleteStudent = async(req:Request,res: Response)=>{
  try{
    const studentID = req.params.id;
    const result = await StudentServices.deleteStudentFromDB(studentID)
    res.status(200).json({
      success: true,
      message: 'Students data deleted successfully',
      data: result,
    });

  }catch(e){
    console.log(e);
    res.status(500).json({
      success: false,
      message: 'Error occured',
      data: e,
    });
  }
}

export const StudentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
