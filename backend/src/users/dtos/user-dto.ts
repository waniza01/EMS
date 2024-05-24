import { Exclude, Expose } from 'class-transformer';

export class UserDto {
  @Expose()
  _id: string;

  @Expose()
  name: string;

  @Expose()
  gender: string;

  @Expose()
  mobile: number;

  @Expose()
  address: string;

  @Expose()
  email: string;
}
