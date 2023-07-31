import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { json } from '../decorator';
import { ignore } from '../type';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @json(ignore)
  @Column()
  password: string;
}
