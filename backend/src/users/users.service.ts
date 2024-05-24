import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async getById(id: String) {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException('User is not found');
    }

    return user;
  }
}
