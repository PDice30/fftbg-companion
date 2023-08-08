import { BASE_API_URL } from "../constants";
import { Team, Tournament } from "../models";
import defaultTournament from "../data/tournament";
import determineMatchup from "./matchup";
// import fetchJSON from "./fetch";

// TODO: Once id is gotten and tournament is retrieved, only need first call to determine winners
const getData = async (): Promise<[Team, Team]> => {
  // const id = (await (await fetchJSON('https://fftbg.com/api/tournaments?limit=1')).json() as Tournament[])[0].ID.toString();
  try {
    const id = (await (await fetch(`${BASE_API_URL}tournaments?limit=1`)).json() as Tournament[])[0].ID.toString();
    const tournament = (await (await fetch(`${BASE_API_URL}tournament/${id}`)).json() as Tournament);

    const matchup = determineMatchup(tournament.Winners);

    if (matchup) return [tournament.Teams[`${matchup[0]}`], tournament.Teams[`${matchup[1]}`]];
    return [tournament.Teams.red, tournament.Teams.blue];
  } catch {
    // TODO: Better error message/handling
    return [defaultTournament.Teams.red, defaultTournament.Teams.blue];
  }
}

export default getData;

    