import { FoodEquipment } from 'src/GlobalTypes/Food_Equipment';
import { Venue } from 'src/GlobalTypes/Venue';
export declare class CreateEventDto {
    type: String;
    venue: Venue;
    venueType: String;
    totalCost: Number;
    guests: Number;
    date: Date;
    foods: Array<FoodEquipment>;
    equipments: Array<FoodEquipment>;
    user: Object;
}
