import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';

@Schema()
export class Food {
  @Prop({ required: true })
  name: String;

  @Prop({ required: true })
  cost: Number;

  @Prop(raw({ name: String, data: Buffer, contentType: String }))
  image: Record<string, any>;
}

export const FoodSchema = SchemaFactory.createForClass(Food);
