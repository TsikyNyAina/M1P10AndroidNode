import { FindManyOptions, Repository } from "typeorm";
import { Media } from "../entity";
import { datasource } from '../database';
export class MediaService{
    repository:Repository<Media>=datasource.getRepository(Media)
    create(media: Media) { 
        return this.repository.save(media);
    } 
    findAll(option: FindManyOptions<Media>) {
        return this.repository.find(option);
    } 
    findOne(id: number) {
        return this.repository.findOneOrFail({ where: { id } });
    }

    update(id: number, media: Media) { 
        return this.repository.upsert({...media,id}, ['id']);
    }

    remove(id: number) {
        return this.repository.delete({ id });
    }
}