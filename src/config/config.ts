import * as dotenv from 'dotenv'
dotenv.config()

export const config = {
    development: {
        username: process.env.MYSQL_USERNAME || 'root',
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE || 'it_blog',
        host: process.env.MYSQL_HOST || 'localhost',
        port: process.env.MYSQL_PORT || 3306,
        dialect: 'mysql'
    }
}