"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const dotenv = require("dotenv");
dotenv.config();
exports.default = new typeorm_1.DataSource({
    type: 'mysql',
    host: process.env.MYSQL_HOST || 'localhost',
    port: Number(process.env.MYSQL_PORT) || 3306,
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'Qualisys1412',
    database: process.env.MYSQL_DB || 'auction_db',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
});
//# sourceMappingURL=ormconfig.js.map