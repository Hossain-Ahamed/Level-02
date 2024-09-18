/* eslint-disable no-unused-vars */
import { Model } from "mongoose";

export interface TUser {
  id: string;
  password: string;
  needsPasswordChange: boolean;
  role: 'admin' | 'student' | 'faculty';
  status: string;
  isDeleted: boolean;
};


export interface UserModel extends Model<TUser> {
  isUserExistsByCustomId(id: string): Promise<TUser>;
  isPasswordMatched(plainTextPassword: string,hashPassword : string): Promise<boolean>;
}