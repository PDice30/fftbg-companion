import { Router } from 'express';
import { getCurrentMatchup, getTournamentData } from '../controllers';

const router: Router = Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/tournament', getTournamentData)
// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/matchup', getCurrentMatchup);
// eslint-disable-next-line @typescript-eslint/no-misused-promises

export default router;