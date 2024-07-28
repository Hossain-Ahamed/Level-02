import mongoose from 'mongoose';
import config from '../../config';
import AppError from '../../errors/AppError';
import { AcademicSemesterSchemaModel } from '../academicSemester/academicSemester.model';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUSer } from './user.interface';
import { User } from './user.model';
import {
  generateAdminId,
  generateFacultyID,
  generateStudentID,
} from './user.utils';
import httpStatus from 'http-status';
import { TFaculty } from '../Faculty/faculty.interface';
import { FacultyModel } from '../Faculty/faculty.model';
import { AcamdemicDepartmentModel } from '../academicDepartment/academicDepartment.model';
import { TAdmin } from '../admin/admin.interface';
import { AdminModel } from '../admin/admin.model';

const createStudentIntoDb = async (password: string, payload: TStudent) => {
  //create a user object
  const userData: Partial<TUSer> = {};
  userData.password = password || (config.default_password as string); //if password is not given use default pass
  userData.role = 'student'; //set student role --> as I received by route

  //find academic sesmster info
  const admissionSemester = await AcademicSemesterSchemaModel.findById(
    payload.admissionSemester,
  );

  if (!admissionSemester) {
    throw new AppError(404, 'Admission semester not found');
  }

  //create session  //13-9
  const session = await mongoose.startSession();

  try {
    //start session transaction
    session.startTransaction();

    //generate student id
    userData.id = await generateStudentID(admissionSemester);

    //create a user --> trasnsaction 1
    const newUser = await User.create([userData], { session });
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }

    // Set id and _id in student payload
    payload.id = newUser[0].id; // Embedded id
    payload.user = newUser[0]._id; // Reference _id

    //create a student ---------> transaction 2
    const newStudent = await Student.create([payload], { session });
    if (!newStudent.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create student');
    }

    //completed -->end
    await session.commitTransaction();
    await session.endSession();

    return newStudent;
  } catch (error) {
    //session error
    await session.abortTransaction();
    await session.endSession();
    throw new Error('failed to create');
  }
};

const createFacultyIntoDB = async (password: string, payload: TFaculty) => {
  const userData: Partial<TUSer> = {};

  userData.role = 'faculty';

  userData.password = password || config.default_password;

  const academicDepartment = await AcamdemicDepartmentModel.findById(
    payload.academicDepartment,
  );

  if (!academicDepartment) {
    throw new AppError(httpStatus.NOT_FOUND, 'Academic department not found');
  }

  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    userData.id = await generateFacultyID();

    //create user w transaction

    const newUser = await User.create([userData], { session });

    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create a user');
    }

    payload.id = newUser[0].id;
    payload.user = newUser[0]._id;

    const newFaculty = await FacultyModel.create([payload], { session });

    if (!newFaculty.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create a faculty');
    }

    await session.commitTransaction();
    await session.endSession();

    return newFaculty;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create', err?.stack);
  }
};

const createAdminIntoDB = async (password: string, payload: TAdmin) => {
  const userData: Partial<TUSer> = {};

  userData.password = password || (config.default_password as string);

  userData.role = 'admin';

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    //set  generated id
    userData.id = await generateAdminId();

    // create a user (transaction-1)
    const newUser = await User.create([userData], { session });

    //create a admin
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create admin');
    }
    // set id , _id as user
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id; //reference _id

    // create a admin (transaction-2)
    const newAdmin = await AdminModel.create([payload], { session });

    if (!newAdmin.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create admin');
    }

    await session.commitTransaction();
    await session.endSession();

    return newAdmin;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create', err?.stack);
  }
};

export const UserServices = {
  createStudentIntoDb,
  createFacultyIntoDB,
  createAdminIntoDB,
};
