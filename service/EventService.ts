import { FindManyOptions, Repository } from "typeorm";
import { Event } from "../entity";
import { datasource } from '../database';
export class EventService{
    repository:Repository<Event>=datasource.getRepository(Event)
    create(event: Event) { 
        return this.repository.save(event);
    } 
    findAll(option: FindManyOptions<Event>) {
        return this.repository.find(option);
    } 
    findOne(id: number) {
        return this.repository.findOneOrFail({ where: { id } });
    }

    update(id: number, event: Event) { 
        return this.repository.upsert({...event,id}, ['id']);
    }

    remove(id: number) {
        return this.repository.delete({ id });
    }
}