
import mongoose from 'mongoose';
import { Student } from './student.model';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { User } from '../user/user.model';
import { TStudent } from './student.interface';



//get student
const getAllStudentFromDB = async () => {
  const result = await Student.find()
    .populate('admissionSemester')
    .populate('academicDepartment')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty'
      }
    });
  return result;
};

const getAStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id }).populate('admissionSemester')
    .populate('academicDepartment')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty'
      }
    });;
  return result;
};

  const flattenNestedObject = (prefix:string, nestedObject: Record<string, unknown>) => {
    const flatObject : Record<string, unknown> = {};
    for (const [key, value] of Object.entries(nestedObject)) {
      flatObject[`${prefix}.${key}`] = value;
    }
    return flatObject;
  };

  const updateStudentIntoDB = async (id: string, payload : Partial<TStudent>) => {
    const { name, guardian, localGuardian, ...remainingStudentData } = payload;
    const modifiedData_ForDB : Record<string, unknown> = { ...remainingStudentData };

    if (name && Object.keys(name).length) {
      Object.assign(modifiedData_ForDB, flattenNestedObject('name', name));
    }
    if (guardian && Object.keys(guardian).length) {
      Object.assign(modifiedData_ForDB, flattenNestedObject('guardian', guardian));
    }
    if (localGuardian && Object.keys(localGuardian).length) {
      Object.assign(modifiedData_ForDB, flattenNestedObject('localGuardian', localGuardian));
    }

    const result = await Student.findOneAndUpdate({ id }, modifiedData_ForDB, { new: true });

    return result;
  };



const deleteStudentFromDB = async (id: string) => {

  const session = await mongoose.startSession();

  try {
    session.startTransaction();


    const deletedStudent = await Student.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session }
    )

    if (!deletedStudent) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to delete student")
    }

    const deletedUser = await User.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session }
    )
    if (!deletedUser) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to delete user")
    }

    await session.commitTransaction();
    await session.endSession();

    return deletedStudent;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(httpStatus.BAD_REQUEST, "Failed to delete")
  }

}
export const StudentServices = {
  getAllStudentFromDB,
  getAStudentFromDB,
  updateStudentIntoDB,
  deleteStudentFromDB
};