import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { ZodSchema } from 'zod';
import { emailSchema } from '@grober/api';
import { RegisterSchema, LoginSchema } from '../../../../../packages/api/src/schemas';

@Injectable()
export class ZodPipe<T> implements PipeTransform {
  constructor(private schema: ZodSchema<T>) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transform(value: any, metadata: ArgumentMetadata) {
    const result = this.schema.safeParse(value);
    if (!result.success) {
      console.log(result.error.message);
      throw new BadRequestException('Zod Validation failed');
    }
    return result.data;
  }
  static emailSchema = new ZodPipe(emailSchema);
  static RegisterSchema = new ZodPipe(RegisterSchema);
  static LoginSchema = new ZodPipe(LoginSchema);
}
