import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student/student.interface';

const NameSchema = new Schema<UserName>({
  firstName: { type: String },
  middleName: { type: String },
  lastName: { type: String },
});

const GuardianScema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

const LocalGuardianScema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true },
  name: NameSchema,
  gender: ['male', 'female', 'others'],
  dateOfBirth: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  email: { type: String, required: true, unique: true },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: GuardianScema,
  localGuardian: LocalGuardianScema,
  profileImg: { type: String },
  isActive: { type: String, enum: ['active', 'inactive'], required: true },
});

export const StudentModel = model<Student>('Student', studentSchema);
