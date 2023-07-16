import express, { Express, json, Request, Response, Router } from "express";
import cors from 'cors';

import fetch from 'node-fetch';
import { Tournament } from "../src/models";

const app: Express = express();
const router: Router = Router();
const port = 8080; // default port to list

app.use(json());
app.use(cors());

app.use('/api', router);

// const client = axios.create({
//   url: 'https://fftbg.com/api/',
//   timeout: 1000,
//   headers: { Accept: 'text/html, application/json, text/plain, */*' }
// })


// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/hello', async (req: Request, res: Response) => {
  console.log(req.baseUrl);
  const tournament = await (await fetch('https://fftbg.com/api/tournaments?limit=1')).json() as Tournament;
  console.log(tournament);
  res.send(tournament);
  // res.send('ye');
});


// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
});