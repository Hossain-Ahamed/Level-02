import { customError } from '../../../middlewares/globalErrorHandler';
import config from '../../config';
import { AcademicSemesterSchemaModel } from '../academicSemester/academicSemester.model';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUSer } from './user.interface';
import { User } from './user.model';
import { generateStudentID } from './user.utils';

const createStudentIntoDb = async (password: string, payload: TStudent) => {
  //create a user object
  const userData: Partial<TUSer> = {};
  userData.password = password || (config.default_password as string); //if password is not given use default pass
  userData.role = 'student'; //set student role --> as I received by route

  //find academic sesmster info
  const admissionSemester = await AcademicSemesterSchemaModel.findById(payload.admissionSemester);


  if (!admissionSemester) {
    throw customError(404, "Admission semester not found")
  }
  //generate student id 
  userData.id = await generateStudentID(admissionSemester);


  //create a user 
  const result = await User.create(userData);


  // Create a student
  try {

    
    if (result && Object.keys(result).length) {
      // Set id and _id in student payload
      payload.id = result.id; // Embedded id
      payload.user = result._id; // Reference _id
    }
    const newStudent = await Student.create(payload);
    return newStudent;


  } catch (error) {

    // If creating student fails, delete the previously created user
    if (result && result._id) {
      await User.findByIdAndDelete(result._id);
    }
    throw customError(409, "Error creating student");
  }
};

export const UserServices = {
  createStudentIntoDb,
};
