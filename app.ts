import express, { Request, Response } from 'express';

const app = express();

type Data = {
    name: string;
    age: number;
    url: string;
};

const sendData: Data = {
    name: "name",
    age: 3,
    url: "tistory.com",
};

app.get('', (req: Request, res: Response) => {
    res.json(sendData);
});

app.listen(9999);