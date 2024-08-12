import dotenv from 'dotenv'
dotenv.config()// process.env로 값을 가져올 수 있게 됨

const config = {
    development: {
        username: 'MYSQL_USERNAME',
        password: 'MYSQL_PASSWORD',
        database: 'MYSQL_DATABASE',
        host: 'MYSQL_HOST',
        dialect: 'mysql',
    },
}

export default config