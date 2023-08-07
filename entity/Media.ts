import {
    ManyToOne,
    JoinColumn,
    Column,
    PrimaryGeneratedColumn,
    Entity,
  } from 'typeorm'; 
import { Event } from './Event';
import { json, swaggerIgnore } from '../decorator';
import { ignore } from '../type';
  
  @Entity({ name: 'media' })
  export class Media {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    eventId: number;

    @Column()
    type: string;
  
    @Column({
      type: 'simple-json',
      nullable:true
    })
    fileInfo: any;
    @swaggerIgnore
    @ManyToOne(() => Event, (event) => event.media)
    @JoinColumn({ name: 'eventId' })
    event: Event;

    @Column ({nullable:true})
    webUrl:string;
  }
  