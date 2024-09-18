import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import jwt from 'jsonwebtoken'
import config from "../../config";
const loginUser = async(payload : TLoginUser)=>{

	// check if the userExist 
	const user = await User.isUserExistsByCustomId(payload.id);

	if(!user){
		throw new AppError(httpStatus.NOT_FOUND, 'User not found');
	}

	// checking if the user is already deleted 
	const isDeleted = user?.isDeleted;
	if(isDeleted){
		throw new AppError(httpStatus.FORBIDDEN, 'User is already removed from system');
	}

	// checking if the user is blocked 
	const userStatus = user?.status;
	if(userStatus==="blocked"){
		throw new AppError(httpStatus.FORBIDDEN, 'User is blocked');
	}

	//access granted : send AccessToken, refreshToken

	//checking if the password is correct
	if(!await User.isPasswordMatched(payload.password,user?.password)){
		throw new AppError(httpStatus.FORBIDDEN, 'Password is not correct');
	}
	// create token and sent to the client 

	const jwtPayload = {
		userId : user.id,
		role : user.role
	}
	const accessToken = jwt.sign(jwtPayload, config.JWT_ACCESS_SECRET as string, { expiresIn: '10d' });
	return {
		accessToken,
		needsPasswordChange : user?.needsPasswordChange,
	}
}

export const AuthServices = {
	loginUser
}