import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { verify } from 'jsonwebtoken';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private cs: ConfigService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    let user: { id: String; role: String };

    const token: string = request?.headers.authorization?.split(' ')[1];

    verify(
      token,
      this.cs.get('SECRET_KEY'),
      (err: Error, data: { id: String; role: String }) => {
        if (data) {
          user = data;
        }
      },
    );

    if (user?.id) {
      request.role = user.role;
      request.id = user.id;
      return true;
    }

    return false;
  }
}
