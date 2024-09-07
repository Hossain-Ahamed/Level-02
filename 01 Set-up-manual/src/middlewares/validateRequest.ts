import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

export const validateRequest = (scheme: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // if everything ok then send to controller
      await scheme.parseAsync({ body: req.body }); //validation check
      next();
    } catch (error) {
      next(error); //creatting a ZOD error
    }
  };
};
