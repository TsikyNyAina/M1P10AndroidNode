import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { ApiPropertyOptional, ApiTags } from '@nestjs/swagger';
import { Event } from './entities/event.entity';
import { Transform, Type } from 'class-transformer';
import { IsOptional, IsArray } from 'class-validator';
import { ApiQuery } from '@nestjs/swagger';
import { Option } from 'src/utils/Option';

@Controller('event')
@ApiTags('event')
@UseInterceptors(ClassSerializerInterceptor)
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventService.create(createEventDto);
  }

  @Get()
  @ApiQuery({ type: Option })
  findAll(@Query() option: Option) {
    console.log(option);

    // return 200;
    return this.eventService.findAll(option as any);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventService.update(+id, updateEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventService.remove(+id);
  }
}
