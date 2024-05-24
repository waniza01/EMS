import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateEquipmentDto {
  @IsString()
  @IsNotEmpty()
  name: String;

  @IsNumber()
  @IsNotEmpty()
  cost: Number;

  image: File;
}
