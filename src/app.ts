import express, { Request, Response, NextFunction } from 'express'
import sequelize from './models'
import cors from "cors"

// // 각 router
// import movieRouter from "./routes/movie";
// import dramaRouter from "./routes/drama";
// import bookRouter from "./routes/book";

// 모든 에러를 처리하는 핸들러
import { errorHandler } from "./handler";

const app = express();
const port: number = 9999;

// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//     res.send('welcome!');
// })

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    console.log('This middleware runs first.');
    next(); // 다음 미들웨어로 제어를 전달
});

app.get('/', (req: Request, res: Response) => {
    console.log("눈빛");
    res.send('Welcome!');
});

app.listen(port, async () => {
    console.log(`
        ###########################################
            🛡️ Server listening on port: ${port}🛡️
        ###########################################
    `)
    await sequelize
        .authenticate()
        .then(async)
});