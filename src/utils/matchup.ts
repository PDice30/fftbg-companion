import { MATCHUPS, TEAMS } from "../constants";
import { TeamName } from "../models";

// Based on Mustad.io: https://github.com/SirBraneDamuj/mustadio/blob/master/src/data/matchups.js
const DEFAULT_MATCHUP: TeamName[] = ['red', 'blue'];

const determineMatchup = (winners: string[]) => {
  const matchNumber = winners.length;

  if (matchNumber === 8) return ['champion', 'champion'] as TeamName[];

  if (matchNumber < 4) return MATCHUPS[matchNumber][0];

  if (matchNumber < 6) {
    return MATCHUPS[matchNumber].find(([teamOne, teamTwo]) => 
      teamOne === winners[matchNumber === 4 ? 0 : 2] && 
      teamTwo === winners[matchNumber === 4 ? 1 : 3]
    );
  }

  if (matchNumber < 7) {
    return MATCHUPS[matchNumber].find(([teamOne, teamTwo]) => 
      teamOne === winners[4] && 
      teamTwo === winners[5]
    );
  }

  const winner = TEAMS.find(team => team.toString() === winners[matchNumber - 1]);

  if (winner) return MATCHUPS[matchNumber][TEAMS.indexOf(winner)];

  return DEFAULT_MATCHUP;
}

export default determineMatchup;