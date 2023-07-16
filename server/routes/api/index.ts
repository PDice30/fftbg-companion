import { Router, Request, Response } from "express";

const router = Router();

router.get('/hello', (req: Request, res: Response) => {
  console.log(req.baseUrl);
  res.send('hello!');
});


export default router;
