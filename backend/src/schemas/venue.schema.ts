import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';

@Schema()
export class Venue {
  @Prop({ required: true })
  name: String;

  @Prop({ required: true })
  place: String;

  @Prop({ required: true })
  cost: Number;

  @Prop({ required: true })
  contact: Number;

  @Prop(raw({ name: String, data: Buffer, contentType: String }))
  image: Record<string, any>;
}

export const VenueSchema = SchemaFactory.createForClass(Venue);
