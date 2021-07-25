import { HttpStatus } from '../enums/http-status.enum';

export class BadRequestException {
  message: string;

  statusCode: number;

  constructor(message: string) {
    this.message = message;
    this.statusCode = HttpStatus.BAD_REQUEST;
  }
}
