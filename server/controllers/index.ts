import { Request, Response } from "express";
import { Tournament } from "../../src/models";

export const getTournamentData = async (req: Request, res: Response) => {
  console.log(req.baseUrl);
  // Could probably skip this first call if ID is passed from the request optionally
  const id = (await (await fetch('https://fftbg.com/api/tournaments?limit=1')).json() as Tournament[])[0].ID;
  const tournament = (await (await fetch(`https://fftbg.com/api/tournament/${id}`)).json() as Tournament);

  // move to service
  // Determine the map of the match based on the [winners]
  // Determine which team is team one and team two
  // return TournamentData object with teams filled in


  res.send(tournament);
  // res.send('ye');
}

export const getCurrentMatchup = async (req: Request, res: Response) => {
  console.log(req.baseUrl);
  const tournament: Tournament = await (await fetch('https://fftbg.com/api/tournaments?limit=1')).json() as Tournament;
  console.log(tournament);
  res.send(tournament);
  // res.send('ye');
}

