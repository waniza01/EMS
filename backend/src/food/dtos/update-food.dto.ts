import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateFoodDto {
  @IsString()
  @IsOptional()
  name: String;

  @IsNumber()
  @IsOptional()
  cost: Number;

  image: { name: string; data: Buffer; contentType: string };
}
