import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateVenueDto {
  @IsString()
  @IsOptional()
  name: String;

  @IsNumber()
  @IsOptional()
  cost: Number;

  @IsNumber()
  @IsOptional()
  contact: Number;

  @IsNumber()
  @IsOptional()
  place: String;

  image: { name: string; data: Buffer; contentType: string };
}
