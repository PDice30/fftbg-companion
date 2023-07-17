import { Router, Request, Response } from 'express';
import { Tournament } from '../../src/models';

const router: Router = Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/hello', async (req: Request, res: Response) => {
  console.log(req.baseUrl);
  const tournament: Tournament = await (await fetch('https://fftbg.com/api/tournaments?limit=1')).json() as Tournament;
  console.log(tournament);
  res.send(tournament);
  // res.send('ye');
});

export default router;