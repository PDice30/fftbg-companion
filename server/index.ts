import express, { Express, json } from "express";
import cors from 'cors';

import apiRouter from './routes';

const app: Express = express();

const port = 3001; // default port to list

app.use(json());
app.use(cors());

app.use('/api', apiRouter);

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
});