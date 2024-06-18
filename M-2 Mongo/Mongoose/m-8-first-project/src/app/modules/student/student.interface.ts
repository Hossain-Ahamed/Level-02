import { Model } from 'mongoose';

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};
export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};
export type UserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type TStudent = {
  id: string;
  name: UserName;
  password: string;
  gender: 'male' | 'female' | 'others';
  dateOfBirth: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  email: string;
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: LocalGuardian;
  profileImg?: string;
  isActive: 'active' | 'blocked';
  isDeleted : boolean;
};

//9-7--------------For creating static ------------------

export interface TStudentModel extends Model<TStudent>{
  isUserExists(id: string): Promise<TStudent |null>;
}

// 9-6  -------------------for creating instancne
// export type TStudentMethods = {
//   isUserExists(id: string): Promise<TStudent |null>;
// };

// // Create a new Model type that knows about IUserMethods...
// export type TStudentModel = Model<
//   TStudent,
//   Record<string, never>,
//   TStudentMethods
// >;
