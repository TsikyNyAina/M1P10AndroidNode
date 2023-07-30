import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';
import { FindManyOptions, Repository, SelectQueryBuilder } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
const alias = 'event';
@Injectable()
export class EventService {
  #query: SelectQueryBuilder<Event>;
  get query() {
    return this.#query.clone();
  }
  constructor(
    @InjectRepository(Event) private readonly repository: Repository<Event>,
  ) {
    this.#query = this.repository.createQueryBuilder(alias);
  }

  create(createEventDto: CreateEventDto) {
    const event = Object.assign(new Event(), createEventDto);
    return this.repository.save(event);
  }

  findAll(option: FindManyOptions<Event>) {
    return this.repository.find(option);
  }

  findOne(id: number) {
    return this.repository.findOneOrFail({ where: { id } });
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    const event = Object.assign(new Event(), updateEventDto, { id });
    return this.repository.upsert(event, ['id']);
  }

  remove(id: number) {
    return this.repository.delete({ id });
  }
}
