import { Student } from '../student.model';
import { TStudent } from './student.interface';

const createStudentIntoDb = async (studentData: TStudent) => {
 

   //custom static method
   if( await Student.isUserExists(studentData.id)){
    throw new Error('User already exist')
  }


   //---------------built in static method
  const result = await Student.create(studentData);

 

  //-----------------built in instance method
  // const student = new Student(studentData); //creating an instance

  // if(await student.isUserExists(studentData.id)){
  //   throw new Error('User already exist')
  // }
  // const result = student.save();

  return result;
};

//get student
const getAllStudentFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getAStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};


const deleteStudentFromDB = async(id:string)=>{
  const result = await Student.updateOne({id},{
    isDeleted: true
  })
  return result;
}
export const StudentServices = {
  createStudentIntoDb,
  getAllStudentFromDB,
  getAStudentFromDB,
  deleteStudentFromDB
};
