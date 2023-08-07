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
import { Media } from './Media';
import { User } from './User'; 
  @Entity({ name: 'event' })
  export class Event {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
      nullable: true,
    })
    description: string;
    @Column({ nullable: false })
    titre: string;
    @Column({ nullable: false })
    lieu:string;
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
  