import express, { Express, json } from "express";
import cors from 'cors';

import router from './router';

const app: Express = express();

const port = 8080; // default port to list

app.use(json());
app.use(cors());

app.use('/api', router);

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
});