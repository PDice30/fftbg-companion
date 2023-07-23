import { Team, Tournament } from "../models";
// import * as data from '../data/tournament.json';
import { useEffect, useState } from "react";
import { Portrait } from "./Portrait";
import determineMatchup from "../utils";

const Overlay = () => {
  const [teamOne, setTeamOne] = useState<Team>();
  const [teamTwo, setTeamTwo] = useState<Team>();
  const [storedId, setStoredId] = useState<number>(0);

  useEffect(() => {    
    console.log(import.meta.env);
    // TODO : react-query
    // If Winners.length === 8: Tournament is over, display "waiting" and wait a set time to call again and show teams
    const fetchData = async () => {
      // const response = await fetch(`http://localhost:3001/api/tournament`);
      // const data: TournamentData = await response.json() as TournamentData;

      // Once id is gotten and tournament is retrieved, only need first call to determine winners

      // TODO: move to helper function
      const id = (await (await fetch('https://fftbg.com/api/tournaments?limit=1')).json() as Tournament[])[0].ID.toString();
      setStoredId(parseInt(id));
      // TODO : Fix linting
      const tournament = (await (await fetch(`https://fftbg.com/api/tournament/${id}`)).json() as Tournament);
  
      const matchup = determineMatchup(tournament.Winners);
      // console.log(matchup);
      if (matchup) {
        console.log(`Determined Matchup: ${matchup.toString()}`);
        
        setTeamOne(tournament.Teams[`${matchup[0]}`])
        // setTeamOne();
        setTeamTwo(tournament.Teams[`${matchup[1]}`])
      } else {
        setTeamOne(tournament.Teams.red);
        setTeamTwo(tournament.Teams.blue);
      }
      console.log(storedId);
    }

    setInterval(() => void fetchData(), 10000);
    void fetchData(); // TODO
    

  }, []);
  

  // TODO - teams array could just be one to iterate through, and first half float left
  return (
    <div className='w-4/5 h-screen' style={{fontFamily: 'Altima', fontSize: '30px'}}>
      {/* Will Need to find active teams */}
      <div className='grid grid-cols-1 h-screen w-1/9 float-left'>
        {teamOne && teamOne.Units.map(unit => {
          return (
            <Portrait key={unit.Name} unit={unit} side={1}/>
          )
        })}
      </div>
      <div className='grid grid-cols-1 h-screen w-1/9 float-right'>
        {teamTwo && teamTwo.Units.map(unit => {
          return (
            <Portrait key={unit.Name} unit={unit} side={2}/>
          )
        })}
      </div>
    </div>
  )
}
export default Overlay;