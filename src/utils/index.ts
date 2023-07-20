import { MATCHUPS, TEAMS } from "../constants";
import { TeamName } from "../models";

// Based on Mustad.io: https://github.com/SirBraneDamuj/mustadio/blob/master/src/data/matchups.js
const DEFAULT_MATCHUP: TeamName[] = ['red', 'blue'];

const determineMatchup = (winners: string[]) => {
  const matchNumber = winners.length;
  if (matchNumber < 4) {
    return MATCHUPS[matchNumber][0];
  }

  // TODO: logic is very scuffed
  if (matchNumber < 6) {
    console.log(`Winners: ${winners.toString()}`)
    const winnerOne = MATCHUPS[matchNumber].find(matchup => matchup[0] === winners[matchNumber === 4 ? 0 : 2])?.[0];
    console.log(`WinnerOne: ${winnerOne ? winnerOne : ''}`);
    const winnerTwo = MATCHUPS[matchNumber].find(matchup => matchup[1] === winners[matchNumber === 4 ? 1 : 3])?.[1];
    console.log(`WinnerTwo: ${winnerTwo ? winnerTwo : ''}`);
    if (winnerOne && winnerTwo) {
      return MATCHUPS[matchNumber].find(([teamOne, teamtwo]) => teamOne === winnerOne && teamtwo === winnerTwo);
    }
    return DEFAULT_MATCHUP;
  }

  if (matchNumber < 7) {
    console.log(`Winners: ${winners.toString()}`)
    const winnerOne = MATCHUPS[matchNumber].find(matchup => matchup[0] === winners[4])?.[0];
    console.log(`WinnerOne: ${winnerOne ? winnerOne : ''}`);
    const winnerTwo = MATCHUPS[matchNumber].find(matchup => matchup[1] === winners[5])?.[1];
    console.log(`WinnerTwo: ${winnerTwo ? winnerTwo : ''}`);
    if (winnerOne && winnerTwo) {
      return MATCHUPS[matchNumber].find(([teamOne, teamtwo]) => teamOne === winnerOne && teamtwo === winnerTwo);
    }
    return DEFAULT_MATCHUP;
  }

  const winner = TEAMS.find(team => team == winners[matchNumber]);
  console.log(`To face champ: ${winner ? winner : ''}`);

  if (winner) {
    return MATCHUPS[matchNumber][TEAMS.indexOf(winner)];
  }

  return DEFAULT_MATCHUP;
}

export default determineMatchup;