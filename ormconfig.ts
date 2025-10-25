import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

export default new DataSource({
  type: 'mysql',
  host: process.env.MYSQL_HOST || 'localhost',
  port: Number(process.env.MYSQL_PORT) || 3306,
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'Qualisys1412',
  database: process.env.MYSQL_DB || 'auction_db',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
});