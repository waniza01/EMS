import {
  IsArray,
  IsDate,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsString,
} from 'class-validator';
import { FoodEquipment } from 'src/GlobalTypes/Food_Equipment';
import { Venue } from 'src/GlobalTypes/Venue';
import { Equipment } from 'src/schemas/equipment.schema';
import { Food } from 'src/schemas/food.schema';
import { CreateVenueDto } from 'src/venue/dtos/create-venue.dto';

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  type: String;

  @IsObject()
  @IsNotEmptyObject()
  venue: Venue;

  @IsString()
  @IsNotEmpty()
  venueType: String;

  @IsNumber()
  @IsNotEmpty()
  totalCost: Number;

  @IsNumber()
  @IsNotEmpty()
  guests: Number;

  @IsDate()
  @IsNotEmpty()
  date: Date;

  @IsArray()
  @IsNotEmpty()
  foods: Array<FoodEquipment>;

  @IsArray()
  @IsNotEmpty()
  equipments: Array<FoodEquipment>;

  user: Object;
}
