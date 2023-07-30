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
  UploadedFile,
} from '@nestjs/common';
import { MediaService } from './media.service';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

import { File } from 'multer';
import { Media } from './entities/media.entity';
import { Option } from 'src/utils/Option';
@Controller('media')
@ApiTags('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create(@UploadedFile() file: File, @Body() createMediaDto: CreateMediaDto) {
    const media = Object.assign(new Media(), createMediaDto);
    media.fileInfo = { ...file };
    return this.mediaService.create(media);
  }

  @Get()
  @ApiQuery({ type: Option })
  findAll(@Query() option: Option) {
    return this.mediaService.findAll(option as any);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mediaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMediaDto: UpdateMediaDto) {
    return this.mediaService.update(+id, updateMediaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mediaService.remove(+id);
  }
}
