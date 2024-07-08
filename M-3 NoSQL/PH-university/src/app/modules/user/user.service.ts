
import mongoose from 'mongoose';
import config from '../../config';
import AppError from '../../errors/AppError';
import { AcademicSemesterSchemaModel } from '../academicSemester/academicSemester.model';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUSer } from './user.interface';
import { User } from './user.model';
import { generateStudentID } from './user.utils';
import httpStatus from 'http-status';

const createStudentIntoDb = async (password: string, payload: TStudent) => {
  //create a user object
  const userData: Partial<TUSer> = {};
  userData.password = password || (config.default_password as string); //if password is not given use default pass
  userData.role = 'student'; //set student role --> as I received by route

  //find academic sesmster info
  const admissionSemester = await AcademicSemesterSchemaModel.findById(payload.admissionSemester);


  if (!admissionSemester) {
    throw new AppError(404, "Admission semester not found")
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
    throw new Error('failed to create')
  }
};

export const UserServices = {
  createStudentIntoDb,
};
