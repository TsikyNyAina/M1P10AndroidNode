import { FindManyOptions, Repository } from "typeorm";
import { User } from "../entity";
import { datasource } from '../database';
export class UserService{
    repository:Repository<User>=datasource.getRepository(User)
    create(user: User) { 
        return this.repository.save(user);
    } 
    findAll(option: FindManyOptions<User>) {
        return this.repository.find(option);
    } 
    findOne(id: number) {
        return this.repository.findOneOrFail({ where: { id } });
    }

    update(id: number, user: User) { 
        return this.repository.upsert({...user,id}, ['id']);
    }

    remove(id: number) {
        return this.repository.delete({ id });
    }
    login(username:string,password:string){
        return this.repository.findOneByOrFail({
            username,password
        })
    }
}