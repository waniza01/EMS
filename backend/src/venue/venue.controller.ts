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
import { AuthGuard } from 'src/guards/AuthGuard';
import { VenueService } from './venue.service';
import { AdminGuard } from 'src/guards/AdminGuard';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateVenueDto } from './dtos/create-venue.dto';
import { isFile } from 'src/utils/validation';
import { UpdateVenueDto } from './dtos/update-venue.dto';

@Controller('venue')
@UseGuards(AuthGuard)
export class VenueController {
  constructor(private readonly vs: VenueService) {}

  @UseGuards(AdminGuard)
  @UseInterceptors(FileInterceptor('image'))
  @Post()
  add(@Body() body: CreateVenueDto, @UploadedFile() file: Express.Multer.File) {
    isFile(file);
    return this.vs.add(body, file);
  }

  @Get('/')
  getAll() {
    return this.vs.getAll();
  }

  @Get('/:id')
  getById(@Param('id') id: string) {
    return this.vs.getById(id);
  }

  @UseGuards(AdminGuard)
  @UseInterceptors(FileInterceptor('image'))
  @Patch('/:id')
  update(
    @Param('id') id: string,
    @Body() body: UpdateVenueDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.vs.update(id, body, file);
  }

  @UseGuards(AdminGuard)
  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.vs.delete(id);
  }
}
