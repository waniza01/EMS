import { BadRequestException } from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, enum: ['male', 'female', 'other'] })
  gender: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  mobile: number;

  @Prop({ required: true, select: false })
  password: string;

  @Prop()
  confirmPassword: string;

  @Prop({ default: 'Manager' })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

export const comparePassword = async function (
  candidatePassword: string,
  encryptPassword: string,
) {
  return await compare(candidatePassword, encryptPassword);
};

export const createToken = (
  data: { id: Object; role: string },
  key: string,
) => {
  return sign(data, key);
};

export const PasswordMatched = () => {
  UserSchema.pre('save', function () {
    if (this.password !== this.confirmPassword) {
      throw new BadRequestException('Passwords are not matched');
    }

    this.confirmPassword = undefined;
  });
};

export const encryptPassword = (salt: string) => {
  UserSchema.pre('save', async function () {
    this.password = await hash(this.password, parseInt(salt));
  });
};
