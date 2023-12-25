import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundException extends HttpException {
  constructor(
    message = 'Not Found',
    statusCode: HttpStatus = HttpStatus.NOT_FOUND,
  ) {
    super(message, statusCode);
  }
}
