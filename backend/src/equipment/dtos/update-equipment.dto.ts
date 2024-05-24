import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateEquipmentDto {
  @IsString()
  @IsOptional()
  name: String;

  @IsNumber()
  @IsOptional()
  cost: Number;

  image: { name: string; data: Buffer; contentType: string };
}
