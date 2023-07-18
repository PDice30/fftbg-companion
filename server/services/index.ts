import { Tournament, TournamentData } from "../../src/models";


export const determineMatchup = (tournament: Tournament) => {
  console.log('determineMatchup');

  const tournamentData: TournamentData = {
    teamOne: tournament.Teams.red,
    teamTwo: tournament.Teams.blue
  }

  return tournamentData;
}