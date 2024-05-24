import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Equipment } from 'src/schemas/equipment.schema';
import { CreateEquipmentDto } from './dtos/create-equipment.dto';
import { UpdateEquipmentDto } from './dtos/update-equipment.dto';

@Injectable()
export class EquipmentService {
  constructor(
    @InjectModel(Equipment.name) private equipModel: Model<Equipment>,
  ) {}

  add(data: CreateEquipmentDto, file: Express.Multer.File) {
    const { name, cost } = data;
    const image = {
      name: file.originalname,
      contentType: file.mimetype,
      data: file.buffer,
    };
    return this.equipModel.create({ name, cost, image });
  }

  delete(id: string) {
    return this.equipModel.deleteOne({ _id: id });
  }

  async update(
    id: string,
    data: UpdateEquipmentDto,
    file: Express.Multer.File,
  ) {
    const image = {
      name: file?.originalname,
      contentType: file?.mimetype,
      data: file?.buffer,
    };
    let updateData = data;
    if (image.name) {
      updateData = { ...updateData, image };
    }
    return this.equipModel.updateOne({ _id: id }, updateData, { new: true });
  }

  getAll() {
    return this.equipModel.find();
  }

  getById(id: string): Promise<Equipment> {
    return this.equipModel.findById(id);
  }
}
