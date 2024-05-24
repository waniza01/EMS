import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user-dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, comparePassword, createToken } from 'src/schemas/user.schema';
import { Model } from 'mongoose';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(data: CreateUserDto) {
    const { name, address, email, password, confirmPassword, gender, mobile } =
      data;
    const user = await this.userModel.findOne({ email });

    if (user) {
      throw new BadRequestException('Email is already in use');
    }
    return this.userModel.create({
      name,
      address,
      email,
      password,
      confirmPassword,
      gender,
      mobile,
    });
  }

  async login(email: string, password: string) {
    if (!email || !password) {
      throw new NotFoundException('Please Provide Email and Password');
    }

    const user = await this.userModel.findOne({ email }).select('+password');

    if (!user) {
      throw new UnauthorizedException('Invalid Email and Password');
    }

    if (!(await comparePassword(password, user.password))) {
      throw new UnauthorizedException('Invalid Email and Password');
    }

    const token = createToken(
      { id: user._id, role: user.role },
      new ConfigService().get('SECRET_KEY'),
    );

    user.password = undefined;
    return { user, token };
  }
}
