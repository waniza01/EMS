import { Inject, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  PasswordMatched,
  User,
  UserSchema,
  encryptPassword,
} from 'src/schemas/user.schema';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory: (configService: ConfigService) => {
          const schema = UserSchema;
          PasswordMatched();
          encryptPassword(configService.get('SALT'));
          return schema;
        },
        inject: [ConfigService],
      },
    ]),
  ],
  controllers: [UsersController, AuthController],
  providers: [UsersService, AuthService],
  exports: [UsersService],
})
export class UsersModule {}
