import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/guards/AuthGuard';
import { EventService } from './event.service';
import { CreateEventDto } from './dtos/create-event.dto';
import { MyRequest } from 'src/GlobalTypes/Request';

@Controller('event')
@UseGuards(AuthGuard)
export class EventController {
  constructor(private eventService: EventService) {}

  @Post()
  add(@Body() body: CreateEventDto, @Req() request: MyRequest) {
    return this.eventService.add(body, request.id);
  }

  @Get()
  getAll(@Req() request: MyRequest) {
    return this.eventService.getAll(request.id, request.role);
  }

  @Get('/:id')
  getbyId(@Param('id') id: String) {
    return this.eventService.getById(id);
  }
}
