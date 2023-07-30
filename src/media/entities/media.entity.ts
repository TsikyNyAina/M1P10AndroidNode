import {
  ManyToOne,
  JoinColumn,
  Column,
  PrimaryGeneratedColumn,
  Entity,
} from 'typeorm';
import { Event } from '../../event/entities/event.entity';

@Entity({ name: 'media' })
export class Media {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  eventId: number;

  @Column({
    type: 'simple-json',
  })
  fileInfo: any;

  @ManyToOne(() => Event, (event) => event.media)
  @JoinColumn({ name: 'eventId' })
  event: Event;
}
