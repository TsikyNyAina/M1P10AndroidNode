import { ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import * as dotenv from 'dotenv';
dotenv.config();

export const databaseConfigValidator = Joi.object({
  DATABASE_HOST: Joi.string().default('localhost'),
  DATABASE_PORT: Joi.number().default(3306),
  DATABASE_USERNAME: Joi.string().required(),
  DATABASE_PASSWORD: Joi.string().allow(''),
  DATABASE_DB_NAME: Joi.string().required(),
  APP_URLS: Joi.string().required(),
});

export const getDatabaseConfig = (configService: ConfigService): any => ({
  type: 'mysql',
  host: configService.get('DATABASE_HOST'),
  port: configService.get('DATABASE_PORT') || 3306,
  username: configService.get('DATABASE_USERNAME'),
  password: configService.get('DATABASE_PASSWORD'),
  database: configService.get('DATABASE_DB_NAME'),
  logging: true, //configService.get<string>('DATABASE_LOGGING') === 'true' || false,
  synchronize: false,
  autoLoadEntities: true,
  entities: [__dirname + './../**/*.entity.ts'],
  migrations: [__dirname + './../**/database/migrations/**/*.ts'],
  seeds: [__dirname + './../**/database/seeds/**/*.ts'],
  charset: 'utf8mb4_unicode_ci',
});
