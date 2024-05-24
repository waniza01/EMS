import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FoodService } from './food.service';
import { CreateFoodDto } from './dtos/create-food.dto';
import { UpdateFoodDto } from './dtos/update-food.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { isFile } from 'src/utils/validation';
import { AuthGuard } from 'src/guards/AuthGuard';
import { AdminGuard } from 'src/guards/AdminGuard';

@Controller('food')
@UseGuards(AuthGuard)
export class FoodController {
  constructor(private readonly fs: FoodService) {}

  @UseGuards(AdminGuard)
  @UseInterceptors(FileInterceptor('image'))
  @Post()
  add(@Body() body: CreateFoodDto, @UploadedFile() file: Express.Multer.File) {
    isFile(file);
    console.log(body);
    return this.fs.add(body, file);
  }

  @Get('/')
  getAll() {
    return this.fs.getAll();
  }

  @Get('/:id')
  getById(@Param('id') id: string) {
    return this.fs.getById(id);
  }

  @UseGuards(AdminGuard)
  @UseInterceptors(FileInterceptor('image'))
  @Patch('/:id')
  update(
    @Param('id') id: string,
    @Body() body: UpdateFoodDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.fs.update(id, body, file);
  }

  @UseGuards(AdminGuard)
  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.fs.delete(id);
  }
}
