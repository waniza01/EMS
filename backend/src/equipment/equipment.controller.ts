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
import { EquipmentService } from './equipment.service';
import { AuthGuard } from 'src/guards/AuthGuard';
import { AdminGuard } from 'src/guards/AdminGuard';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateEquipmentDto } from './dtos/create-equipment.dto';
import { isFile } from 'src/utils/validation';
import { UpdateEquipmentDto } from './dtos/update-equipment.dto';

@Controller('equipment')
@UseGuards(AuthGuard)
export class EquipmentController {
  constructor(private readonly equipService: EquipmentService) {}

  @UseGuards(AdminGuard)
  @UseInterceptors(FileInterceptor('image'))
  @Post()
  add(
    @Body() body: CreateEquipmentDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    isFile(file);
    return this.equipService.add(body, file);
  }

  @Get('/')
  getAll() {
    return this.equipService.getAll();
  }

  @Get('/:id')
  getById(@Param('id') id: string) {
    return this.equipService.getById(id);
  }

  @UseGuards(AdminGuard)
  @UseInterceptors(FileInterceptor('image'))
  @Patch('/:id')
  update(
    @Param('id') id: string,
    @Body() body: UpdateEquipmentDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.equipService.update(id, body, file);
  }

  @UseGuards(AdminGuard)
  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.equipService.delete(id);
  }
}
