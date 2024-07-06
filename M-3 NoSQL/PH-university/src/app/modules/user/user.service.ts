import config from '../../config';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUSer } from './user.interface';
import { User } from './user.model';

const createStudentIntoDb = async (password: string, studentData: TStudent) => {
  //create a user object
  const userData: Partial<TUSer> = {};
  userData.password = password || (config.default_password as string); //if password is not given use default pass
  userData.role = 'student'; //set student role --> as I received by route
  userData.id = '20300001'  //manually generated id


  //create a user 
  const result = await User.create(userData);

  //create a student 
  if(Object.keys(result).length){
    //set id , _id in student
    studentData.id = result.id; //embedded id
    studentData.user = result._id; //reference _id
  }
  const newStudent = await Student.create(studentData);
  return newStudent;
};

export const UserServices = {
  createStudentIntoDb,
};
