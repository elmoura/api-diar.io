import express, { Request, Response } from 'express';
import { errorHandler } from '@middlewares/error-handler.middleware';

const app = express();

app.use(errorHandler);

app.get('/', (request: Request, response: Response) =>
  response.status(200).json({ message: 'xesquedele' }),
);

export { app };
