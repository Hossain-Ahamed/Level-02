/* eslint-disable no-unused-vars */
import { Model } from "mongoose";
import { USER_ROLE } from "./user.constant";

export interface TUser {
  id: string;
  password: string;
  needsPasswordChange: boolean;
  passwordChangedAt ?: Date,
  role: 'admin' | 'student' | 'faculty';
  status: string;
  isDeleted: boolean;
};


export interface UserModel extends Model<TUser> {
  isUserExistsByCustomId(id: string): Promise<TUser>;
  isPasswordMatched(plainTextPassword: string,hashPassword : string): Promise<boolean>;
  isJWTIssuedBeforePasswordChanged(passordChangeTimeStamp : Date, JwtIssuedTimeStamp : number) : boolean;
}




export type TUserRole = keyof typeof USER_ROLE