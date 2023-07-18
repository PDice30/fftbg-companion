import { Request, Response } from "express";
import { Tournament, TournamentData } from "../../src/models";
import { determineMatchup } from "../services";

export const getTournamentData = async (req: Request, res: Response) => {
  let id = req.query.id;
  console.log(id);
  if (!id) {
    id = (await (await fetch('https://fftbg.com/api/tournaments?limit=1')).json() as Tournament[])[0].ID.toString();
    console.log(`id from tournaments: ${id}`);
  } 
  
  // TODO : Fix linting
  const tournament = (await (await fetch(`https://fftbg.com/api/tournament/${id}`)).json() as Tournament);

  // Determine the map of the match based on the [winners]
  // Determine which team is team one and team two
  // return TournamentData object with teams filled in
  const tournamentData: TournamentData = determineMatchup(tournament);


  res.send(tournamentData);
  // res.send('ye');
}

export const getCurrentMatchup = async (req: Request, res: Response) => {
  console.log(req.baseUrl);
  const tournament: Tournament = await (await fetch('https://fftbg.com/api/tournaments?limit=1')).json() as Tournament;
  console.log(tournament);
  res.send(tournament);
  // res.send('ye');
}

