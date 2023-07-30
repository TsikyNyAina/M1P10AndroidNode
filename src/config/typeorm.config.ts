import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { getDatabaseConfig } from './database.config';

config();

const configService = new ConfigService();

export default new DataSource({
  ...getDatabaseConfig(configService),
  type: 'mysql',
});
