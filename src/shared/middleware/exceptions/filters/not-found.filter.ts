import { Catch, HttpStatus, NotFoundException } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { NOT_FOUND_DATA } from 'src/shared/constants/common.const';

@Catch(NotFoundException)
export class NotFoundExceptionFilter extends BaseExceptionFilter {
  protected getStatus(statusCode: HttpStatus): HttpStatus {
    return statusCode || HttpStatus.NOT_FOUND;
  }

  protected getMessage(message: string) {
    return message || NOT_FOUND_DATA;
  }
}
