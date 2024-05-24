import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { FoodModule } from './food/food.module';
import { EquipmentModule } from './equipment/equipment.module';
import { VenueModule } from './venue/venue.module';
import { EventModule } from './event/event.module';

@Module({
  imports: [
    UsersModule,
    FoodModule,
    MongooseModule.forRoot('mongodb://localhost:27017/EMS'),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.development',
    }),
    EquipmentModule,
    VenueModule,
    EventModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
