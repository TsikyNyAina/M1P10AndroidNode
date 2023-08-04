import { FindManyOptions, Repository } from "typeorm";
import { Event, User } from "../entity";
import { datasource } from '../database';
import { sendNotif } from "../socket";
import { UserService } from "./UserService";
export class EventService{
    repository:Repository<Event>=datasource.getRepository(Event)
    private userService=new UserService;
    async create(event: Event) { 
        const eventRes=await this.repository.save(event);
        

        const user=await this.userService.findOne(event.userId)
        await sendNotif({
            title:"New Event",
            content:`An Event was published by ${user.username}!!`
        })
        
        return eventRes;
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