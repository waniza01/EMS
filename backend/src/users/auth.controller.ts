import { Body, Controller, Post, Res } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user-dto';
import { AuthService } from './auth.service';
import { UserDto } from './dtos/user-dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { Response } from 'express';

@Controller('auth')
@Serialize(UserDto)
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  Signup(@Body() body: CreateUserDto) {
    return this.authService.create(body);
  }

  @Post('/signin')
  async Signin(
    @Body() body: Partial<CreateUserDto>,
    @Res() response: Response,
  ) {
    const res = await this.authService.login(body.email, body.password);

    return response.status(200).json(res);
  }
}
