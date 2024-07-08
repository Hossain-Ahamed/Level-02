import { NextFunction, Request, Response } from 'express';
import config from '../app/config';
import AppError from '../app/errors/AppError';


// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
export const globalErrorHandler = (error: AppError, req: Request, res: Response, next: NextFunction) => {
	const statusCode = error.statusCode || 500;
	const message = error.message || 'An unexpected error occurred';

	return res.status(statusCode).json({
		success: false,
		message: message,
		error: {
			code: statusCode,
			description: error.message,
			stack: config.stack === 'production' ? null : error.stack,
		},
	});
}


