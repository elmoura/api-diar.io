import { HttpStatus } from '../enums/http-status.enum';

export class InternalServerError {
  message: string;

  statusCode: number;

  constructor(message?: string) {
    this.message = message || 'Internal server error.';
    this.statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
  }
}
