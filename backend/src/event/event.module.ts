import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { EventService } from './event.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Event, EventSchema } from 'src/schemas/event.schema';

import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Event.name,
        useFactory() {
          return EventSchema;
        },
      },
    ]),
    UsersModule,
  ],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
