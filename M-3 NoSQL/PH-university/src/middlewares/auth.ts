import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import AppError from '../app/errors/AppError';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from '../app/config';

export const auth = () => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
	const token = req.headers.authorization;
	//check if token exist
	if(!token){
		throw new AppError(httpStatus.UNAUTHORIZED, "Unauthrized access")
	}
	
	// check validity of token
	jwt.verify(token,config.JWT_ACCESS_SECRET as string,function(err,decoded){
		if(err){
			throw new AppError(httpStatus.UNAUTHORIZED, "Unauthrized access")
		}
		
		//merge all
		req.user =  decoded as JwtPayload;
		next();
	})
  
});
};
