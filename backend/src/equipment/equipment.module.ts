import { Module } from '@nestjs/common';
import { EquipmentController } from './equipment.controller';
import { EquipmentService } from './equipment.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Equipment, EquipmentSchema } from 'src/schemas/equipment.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Equipment.name,
        useFactory() {
          return EquipmentSchema;
        },
      },
    ]),
  ],
  controllers: [EquipmentController],
  providers: [EquipmentService],
})
export class EquipmentModule {}
