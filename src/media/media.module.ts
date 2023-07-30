import { Module } from '@nestjs/common';
import { MediaService } from './media.service';
import { MediaController } from './media.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Media } from './entities/media.entity';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  controllers: [MediaController],
  providers: [MediaService],
  imports: [
    TypeOrmModule.forFeature([Media]),
    MulterModule.register({
      dest: './uploads', // Specify the destination folder where the uploaded files will be stored
    }),
  ],
})
export class MediaModule {}
