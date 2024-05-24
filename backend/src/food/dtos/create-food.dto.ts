import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateFoodDto {
  @IsString()
  @IsNotEmpty()
  name: String;

  @IsNumber()
  @IsNotEmpty()
  cost: Number;

  image: File;
}
