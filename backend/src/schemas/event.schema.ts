import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Venue } from './venue.schema';

@Schema()
export class Event {
  @Prop({ required: true })
  type: String;

  @Prop({
    type: Object,
    required: true,
  })
  venue: Venue;

  @Prop({ required: true })
  venueType: String;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true, min: 1 })
  guests: Number;

  @Prop({ required: true })
  totalCost: Number;

  @Prop({
    type: [
      raw({
        _id: { type: String },
        name: { type: String },
        cost: { type: Number },
      }),
    ],
    required: true,
  })
  foods: Record<string, any>;

  @Prop({
    type: [
      raw({
        _id: { type: String },
        name: { type: String },
        cost: { type: Number },
      }),
    ],
    required: true,
  })
  equipments: Record<string, any>;

  @Prop({
    type: raw({
      _id: { type: String },
      name: { type: String },
    }),

    required: true,
  })
  user: Record<string, any>;
}

export const EventSchema = SchemaFactory.createForClass(Event);
