
import { Student } from './student.model';



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
  getAllStudentFromDB,
  getAStudentFromDB,
  deleteStudentFromDB
};
