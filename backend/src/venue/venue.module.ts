import { Module } from '@nestjs/common';
import { VenueService } from './venue.service';
import { VenueController } from './venue.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Venue, VenueSchema } from 'src/schemas/venue.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Venue.name,
        useFactory() {
          return VenueSchema;
        },
      },
    ]),
  ],
  providers: [VenueService],
  controllers: [VenueController],
})
export class VenueModule {}
