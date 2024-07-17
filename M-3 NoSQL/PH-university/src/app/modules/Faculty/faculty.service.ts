import mongoose from 'mongoose';
import QueryBuilder from '../../builder/QueryBuilder';
import { FacultySearchableFields } from './faculty.constant';
import { TFaculty } from './faculty.interface';
import { FacultyModel } from './faculty.model';
import httpStatus from 'http-status';
import { User } from '../user/user.model';
import AppError from './../../errors/AppError';

const getAllFaculty = async (query: Record<string, unknown>) => {
  const facultyQuery = new QueryBuilder(
    FacultyModel.find().populate({
      path: 'AcademicDepartment',
      populate: {
        path: 'AcademicFaculty',
      },
    }),
    query,
  )
    .search(FacultySearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await facultyQuery.modelQuery;
  return result;
};

const getSingleFaculty = async (id: string) => {
  const result = await FacultyModel.findOne({ id })
    .populate('AcademicDepartment')
    .populate({
      path: 'AcademicDepartment',
      populate: {
        path: 'AcademicFaculty',
      },
    });

  return result;
};

const flattenNestedObject = (
  prefix: string,
  nestedObject: Record<string, unknown>,
) => {
  const flatObject: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(nestedObject)) {
    flatObject[`${prefix}.${key}`] = value;
  }
  return flatObject;
};

const updateFacultyInDB = async (id: string, payload: Partial<TFaculty>) => {
  const { name, ...remainingFacultyData } = payload;

  const modifiedData_ForDB: Record<string, unknown> = {
    ...remainingFacultyData,
  };

  if (name && Object.keys(name).length) {
    Object.assign(modifiedData_ForDB, flattenNestedObject('name', name));
  }

  const result = await FacultyModel.findOneAndUpdate(
    { id: id },
    modifiedData_ForDB,
    { new: true, runValidators: true },
  );
  return result;
};

const deleteFacultyFromDB = async (id: string) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    const deletedFaculty = await FacultyModel.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );

    if (!deletedFaculty) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete faculty');
    }

    const deletedUser = await User.findOneAndUpdate(
      { id: deletedFaculty.id },
      { isDeleted: true },
      { new: true, session },
    );
    if (!deletedUser) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete user');
    }

    await session.commitTransaction();
    await session.endSession();
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Failed to delete faculty',
      err,
    );
  }
};

export const FacultyServices = {
  getAllFaculty,
  getSingleFaculty,
  updateFacultyInDB,
  deleteFacultyFromDB,
};
