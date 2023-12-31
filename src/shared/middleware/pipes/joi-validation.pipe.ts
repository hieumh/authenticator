import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { ObjectSchema } from 'joi';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private readonly schema: ObjectSchema) {}

  transform(value: any) {
    const { error, value: transformedValue } = this.schema.validate(value);

    if (error) {
      throw new BadRequestException('Validation Failed');
    }

    return transformedValue;
  }
}
