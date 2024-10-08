import { MATCHUPS, TEAMS } from "../constants";
import { TeamName } from "../models";

// Based on Mustad.io: https://github.com/SirBraneDamuj/mustadio/blob/master/src/data/matchups.js
const DEFAULT_MATCHUP: TeamName[] = ['red', 'blue'];

// TODO: Honestly the whole Matchup const could be removed and just match the text from winners[]
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

const determineMatchupLosersAdvance = (winners: string[]) => {
  const matchNumber = winners.length;
  const finalFour = (TEAMS as string[]).filter(team => !winners.slice(0, 4).includes(team));

  if (matchNumber < 4) return MATCHUPS[matchNumber][0];

  if (matchNumber === 4) return [finalFour[0], finalFour[1]] as TeamName[];
  if (matchNumber === 5) return [finalFour[2], finalFour[3]] as TeamName[];

  const topTwo = (TEAMS as string[]).filter(team => !winners.slice(0, 6).includes(team));

  if (matchNumber === 6) return [topTwo[0], topTwo[1]] as TeamName[];

  const finalist = (TEAMS as string[]).filter(team => !winners.includes(team));

  if (matchNumber === 7) return [finalist[0], 'champion'] as TeamName[];

  if (matchNumber === 8) return [finalist[0], finalist[0]] as TeamName[];
}

export { determineMatchup, determineMatchupLosersAdvance };