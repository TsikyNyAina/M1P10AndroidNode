import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository, SelectQueryBuilder } from 'typeorm';
const alias = 'user';

@Injectable()
export class UserService {
  #query: SelectQueryBuilder<User>;
  get query() {
    return this.#query.clone();
  }
  constructor(
    @InjectRepository(User) private readonly repository: Repository<User>,
  ) {
    this.#query = this.repository.createQueryBuilder(alias);
  }

  create(createUserDto: CreateUserDto) {
    const user = Object.assign(new User(), createUserDto);
    return this.repository.save(user);
  }

  findAll(option: FindManyOptions<User>) {
    return this.repository.find(option);
  }

  findOne(id: number) {
    return this.repository.findOneOrFail({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = Object.assign(new User(), updateUserDto, { id });
    return this.repository.upsert(user, ['id']);
  }

  remove(id: number) {
    return this.repository.delete({ id });
  }
}
