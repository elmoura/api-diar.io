import { Request, Response } from 'express';
import { HttpStatus } from '@shared/enums/http-status.enum';
import { InternalServerError } from '@errors/internal-server.error';

export const errorHandler = (
  error: any,
  request: Request,
  response: Response,
): Response => {
  if (error instanceof Error) {
    return response
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json(new InternalServerError());
  }

  console.error(error);

  return response.status(error.statusCode).send(error);
};
