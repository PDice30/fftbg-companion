import { BASE_API_URL } from "../constants";
import { DataResponse, Team, Tournament } from "../models";
import defaultTournament from "../data/tournament";
import determineMatchup from "./matchup";
import getExtras, { getMap } from "./extrasHelper";
// import fetchJSON from "./fetch";

// TODO: Once id is gotten and tournament is retrieved, only need first call to determine winners
const getData = async (): Promise<DataResponse> => {
  // const id = (await (await fetchJSON('https://fftbg.com/api/tournaments?limit=1')).json() as Tournament[])[0].ID.toString();
  try {
    const id = (await (await fetch(`${BASE_API_URL}tournaments?limit=1`)).json() as Tournament[])[0].ID.toString();
    const tournament = (await (await fetch(`${BASE_API_URL}tournament/${id}`)).json() as Tournament);

    const matchup = determineMatchup(tournament.Winners);
    const map = getMap(tournament.Winners, tournament.Maps);

    const extras = await getExtras();
    console.log(extras.trackTitle);

    if (matchup) {
      const response: DataResponse = {
        teams: [tournament.Teams[`${matchup[0]}`], tournament.Teams[`${matchup[1]}`]],
        map,
        extras,
      }

      return response;
    }

    const response: DataResponse = {
      teams: [tournament.Teams.red, tournament.Teams.blue],
      map,
      extras,
    }
    
    return response;
  } catch {
    const extras = await getExtras();
    console.log(extras.trackTitle);

    const response: DataResponse = {
      teams: [defaultTournament.Teams.red, defaultTournament.Teams.blue],
      map: getMap(defaultTournament.Winners, defaultTournament.Maps),
      extras,
    }

    return response;
  }
}

export default getData;
