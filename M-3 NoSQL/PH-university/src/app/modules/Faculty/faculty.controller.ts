import httpStatus from 'http-status';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { FacultyServices } from './faculty.service';

const getAllFaculty = catchAsync(async (req, res) => {
  const result = await FacultyServices.getAllFaculty(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty data found successfully',
    data: result,
  });
});

const getSingleFaculty = catchAsync(async (req, res) => {
  const result = await FacultyServices.getSingleFaculty(req.params.facultyID);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty data found successfully',
    data: result,
  });
});

const updateFaculty = catchAsync(async (req, res) => {
  const { faculty } = req.body;
  const result = await FacultyServices.updateFacultyInDB(
    req.params.facultyID,
    faculty,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'faculty data updated successfully',
    data: result,
  });
});

const deleteFaculty = catchAsync(async (req, res) => {
  const result = await FacultyServices.deleteFacultyFromDB(
    req.params.facultyID,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty  deleted successfully',
    data: result,
  });
});

export const FacultyControllers = {
  getAllFaculty,
  getSingleFaculty,
  updateFaculty,
  deleteFaculty,
};
