import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare const Serialize: (dto: any) => MethodDecorator & ClassDecorator;
export declare class SeriliazeInterceptor implements NestInterceptor {
    private dto;
    constructor(dto: any);
    intercept(executionContext: ExecutionContext, callHandler: CallHandler): Observable<any>;
}
