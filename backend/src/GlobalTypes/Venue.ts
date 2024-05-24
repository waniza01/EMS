import { ObjectId } from 'mongoose';

export interface Venue {
  _id: ObjectId;
  name: String;
  place: String;
  contact: Number;
  cost: Number;
  image: { data: Buffer; name: String; contentType: String };
}
