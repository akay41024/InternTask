import express from 'express';
import cookieParser from 'cookie-parser';


const app = express();


app.use(cookieParser());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

import addUser from './routes/adduser.routes.js';

app.use('/api/v1/users', addUser);


app.get('/', (req, res) => {
    res.send('Hello from server');
})

export { app };