import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/User';
import { Post } from '../models/Post';
import { Comment } from '../models/Comment';
import * as dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USERNAME, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    dialect: 'mysql',
    timezone: '+09:00',
    seederStorage: 'sequelize',
    operatorsAliases: false
});

export default sequelize;
