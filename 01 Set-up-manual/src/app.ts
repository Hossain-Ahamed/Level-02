/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Request, Response } from 'express';
import cors from 'cors';
// import { globalErrorHandler } from './middlewares/globalErrorHandler';
// import { logger } from './middlewares/logger';
// import { notFound } from './middlewares/notFound';
// import router from './routes';

const app = express();

//parser
app.use(express.json());
app.use(cors());

/*---------------- MIDDLEWARES -----------------------*/

// app.use(logger)

/*------------ APPLICATION ROUTES -------------------*/
// app.use('/api/v1', router);

/*------------ Test route -------------------*/
const test = (req: Request, res: Response) => {
  res.send('PH Unviersity server is RUNNIG !!! 😎😎😎');
};
app.get('/', test);

/**------------ GLOBAL ERROR HANDLER -------------------*/
// app.use(globalErrorHandler);

/** ------------ NOT FOUND URL ------------------- */
// app.use(notFound);
export default app;
