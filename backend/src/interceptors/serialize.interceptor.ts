import {
  CallHandler,
  ExecutionContext,
  NestInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Observable, map } from 'rxjs';

export const Serialize = (dto: any) => {
  return UseInterceptors(new SeriliazeInterceptor(dto));
};

export class SeriliazeInterceptor implements NestInterceptor {
  constructor(private dto: any) {}
  intercept(
    executionContext: ExecutionContext,
    callHandler: CallHandler,
  ): Observable<any> {
    return callHandler.handle().pipe(
      map((data: any) => {
        return plainToClass(this.dto, data, {
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
