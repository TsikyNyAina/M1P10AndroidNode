import { Media } from 'src/media/entities/media.entity';
import { User } from 'src/user/entities';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity({ name: 'event' })
export class Event {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    nullable: true,
  })
  description: string;
  @CreateDateColumn()
  createdAt: Date;
  @DeleteDateColumn()
  DeletedAt: number;
  @Column({ nullable: false })
  userId: number;
  @JoinColumn({ name: 'userId' })
  @ManyToOne(() => User)
  user: User;
  @OneToMany(() => Media, (media) => media.event)
  media: Media[];
}
