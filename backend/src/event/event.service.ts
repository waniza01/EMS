import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEventDto } from './dtos/create-event.dto';
import { UsersService } from 'src/users/users.service';
import { fileURLToPath } from 'url';

@Injectable()
export class EventService {
  constructor(
    @InjectModel(Event.name) private eventModel: Model<Event>,
    private userService: UsersService,
  ) {}

  async add(data: CreateEventDto, userId: String) {
    const previousEvent = await this.eventModel.findOne({
      date: data.date,
      'venue._id': data.venue._id,
    });

    if (previousEvent) {
      throw new BadRequestException('Venue is already booked at this date');
    }

    const user = await this.userService.getById(userId);
    data.user = user;
    return this.eventModel.create(data);
  }

  getAll(userID?: String, role?: String) {
    console.log(userID, '\n', role);
    let filterObject = {};
    if (role !== 'admin') {
      filterObject = { 'user._id': userID };
    }
    return this.eventModel.find(filterObject);
  }

  getById(id: String) {
    return this.eventModel.findById(id);
  }

  delete(id: String) {
    return this.eventModel.deleteOne({ _id: id });
  }
}
