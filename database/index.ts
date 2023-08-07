import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import * as entity from '../entity';

dotenv.config();

const db = new DataSource({
  type: 'mysql',
  host: process.env.DATABASE_HOST ?? 'localhost',
  port: +(process.env.DATABASE_PORT ?? 3306),
  username: process.env.DATABASE_USERNAME ?? 'root',
  password: process.env.DATABASE_PASSWORD ?? 'password',
  database: process.env.DATABASE_NAME ?? 'projetm1',
  entities: Object.values(entity),
  logging: false,
  synchronize: false,
});

export const datasource = db;
