import { RequestHandler } from 'express';
import { UserServices } from './user.service';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../../utils/catchAsync';
import AppError from '../../errors/AppError';
const createStudent: RequestHandler = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;

  //   const zodParseData = StudentZodValidationSchema.parse(studentData);

  const result = await UserServices.createStudentIntoDb(password, studentData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student created successfully',
    data: result,
  });
});

const createFaculty: RequestHandler = catchAsync(async (req, res) => {
  const { password, faculty } = req.body;

  const result = await UserServices.createFacultyIntoDB(password, faculty);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty created succcessfully',
    data: result,
  });
});

const createAdmin: RequestHandler = catchAsync(async (req, res) => {
  const { password, admin } = req.body;

  const result = await UserServices.createAdminIntoDB(password, admin);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty created succcessfully',
    data: result,
  });
});

const getMyProfile = catchAsync(async (req, res) => {

  const token = req.headers.authorization;

  if(!token){
    throw new AppError(httpStatus.FORBIDDEN,"Not authrozied")
  }
 

  const result = await UserServices.getMyProfile(token);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User data found succcessfully',
    data: result,
  });
});


export const userControllers = {
  createStudent,
  createFaculty,
  createAdmin,
  getMyProfile,
};
