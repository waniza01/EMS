import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateVenueDto {
  @IsOptional()
  _id: ObjectId;

  @IsString()
  @IsNotEmpty()
  name: String;

  @IsString()
  @IsNotEmpty()
  place: String;

  @IsNumber()
  @IsNotEmpty()
  cost: Number;

  @IsNumber()
  @IsNotEmpty()
  contact: Number;

  image: File;
}
