import { Module } from '@nestjs/common';
import { FoodController } from './food.controller';
import { FoodService } from './food.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Food, FoodSchema } from 'src/schemas/food.schema';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Food.name,
        useFactory() {
          return FoodSchema;
        },
        inject: [ConfigService],
      },
    ]),
  ],
  controllers: [FoodController],
  providers: [FoodService],
})
export class FoodModule {}
