import { ObjectId } from 'mongoose';

export interface FoodEquipment {
  _id: ObjectId;
  name: String;
  cost: Number;
}
