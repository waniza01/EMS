import { Injectable } from '@nestjs/common';
import { CreateFoodDto } from './dtos/create-food.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Food, FoodSchema } from 'src/schemas/food.schema';
import { Model } from 'mongoose';
import { UpdateFoodDto } from './dtos/update-food.dto';

@Injectable()
export class FoodService {
  constructor(@InjectModel(Food.name) private foodModel: Model<Food>) {}

  add(data: CreateFoodDto, file: Express.Multer.File) {
    const { name, cost } = data;
    const image = {
      name: file.originalname,
      contentType: file.mimetype,
      data: file.buffer,
    };
    return this.foodModel.create({ name, cost, image });
  }

  delete(id: string) {
    return this.foodModel.deleteOne({ _id: id });
  }

  async update(id: string, data: UpdateFoodDto, file: Express.Multer.File) {
    const image = {
      name: file?.originalname,
      contentType: file?.mimetype,
      data: file?.buffer,
    };
    let updateData = data;
    if (image.name) {
      updateData = { ...updateData, image };
    }
    return this.foodModel.updateOne({ _id: id }, updateData, { new: true });
  }

  getAll() {
    return this.foodModel.find();
  }

  getById(id: string): Promise<Food> {
    return this.foodModel.findById(id);
  }
}
