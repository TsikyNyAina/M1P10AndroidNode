import { Injectable } from '@nestjs/common';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SelectQueryBuilder, Repository, FindManyOptions } from 'typeorm';
import { Media } from './entities/media.entity';

const alias = 'media';
@Injectable()
export class MediaService {
  #query: SelectQueryBuilder<Media>;
  get query() {
    return this.#query.clone();
  }
  constructor(
    @InjectRepository(Media) private readonly repository: Repository<Media>,
  ) {
    this.#query = this.repository.createQueryBuilder(alias);
  }

  create(createMediaDto: CreateMediaDto) {
    const media = Object.assign(new Media(), createMediaDto);
    return this.repository.save(media);
  }

  findAll(option: FindManyOptions<Media>) {
    return this.repository.find(option);
  }

  findOne(id: number) {
    return this.repository.findOneOrFail({ where: { id } });
  }

  update(id: number, updateMediaDto: UpdateMediaDto) {
    const media = Object.assign(new Media(), updateMediaDto, { id });
    return this.repository.upsert(media, ['id']);
  }

  remove(id: number) {
    return this.repository.delete({ id });
  }
}
