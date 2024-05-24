import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';

@Schema()
export class Equipment {
  @Prop({ required: true })
  name: String;

  @Prop({ required: true })
  cost: Number;

  @Prop(raw({ name: String, data: Buffer, contentType: String }))
  image: Record<string, any>;
}

export const EquipmentSchema = SchemaFactory.createForClass(Equipment);
