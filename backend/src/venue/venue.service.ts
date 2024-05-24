import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Venue } from 'src/schemas/venue.schema';
import { CreateUserDto } from 'src/users/dtos/create-user-dto';
import { UpdateVenueDto } from './dtos/update-venue.dto';
import { CreateVenueDto } from './dtos/create-venue.dto';

@Injectable()
export class VenueService {
  constructor(@InjectModel(Venue.name) private venueModel: Model<Venue>) {}

  add(data: CreateVenueDto, file: Express.Multer.File) {
    const { name, cost, contact, place } = data;
    const image = {
      name: file.originalname,
      contentType: file.mimetype,
      data: file.buffer,
    };
    return this.venueModel.create({ name, cost, contact, place, image });
  }

  delete(id: string) {
    return this.venueModel.deleteOne({ _id: id });
  }

  async update(id: string, data: UpdateVenueDto, file: Express.Multer.File) {
    const image = {
      name: file?.originalname,
      contentType: file?.mimetype,
      data: file?.buffer,
    };
    let updateData = data;
    if (image.name) {
      updateData = { ...updateData, image };
    }
    return this.venueModel.updateOne({ _id: id }, updateData, { new: true });
  }

  getAll() {
    return this.venueModel.find();
  }

  getById(id: string): Promise<Venue> {
    return this.venueModel.findById(id);
  }
}
