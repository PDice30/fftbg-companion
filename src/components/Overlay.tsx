import { Team, Tournament, TournamentData } from "../models";
// import * as data from '../data/tournament.json';
import { useEffect, useState } from "react";
import { Panel } from "./Panel";
import determineMatchup from "../utils";

const Overlay = () => {
  const [teamOne, setTeamOne] = useState<Team>();
  const [teamTwo, setTeamTwo] = useState<Team>();
  const [text, setText] = useState<string>('sdfsdf');

  useEffect(() => {    

    // TODO : react-query
    // If Winners.length === 8: Tournament is over, display "waiting" and wait a set time to call again and show teams
    const fetchData = async () => {
      // const response = await fetch(`http://localhost:3001/api/tournament`);
      // const data: TournamentData = await response.json() as TournamentData;

      const id = (await (await fetch('https://fftbg.com/api/tournaments?limit=1')).json() as Tournament[])[0].ID.toString();
      // TODO : Fix linting
      const tournament = (await (await fetch(`https://fftbg.com/api/tournament/${id}`)).json() as Tournament);
  
      const matchup = determineMatchup(tournament.Winners);
      console.log(matchup);
      if (matchup) {
        
        setTeamOne(tournament.Teams[`${matchup?.[0]}`])
        // setTeamOne();
        setTeamTwo(tournament.Teams[`${matchup?.[1]}`])
      }
      

      setText('asdf');
    }

    setInterval(() => void fetchData(), 10000);
    void fetchData(); // TODO
    

  }, []);
  

  // TODO - teams array could just be one to iterate through, and first half float left
  return (
    <div className='bg-red-100 w-3/4 h-screen'>
      {/* Will Need to find active teams */}
      <div className='grid grid-cols-1 h-screen w-1/6 float-left'>
        {teamOne && teamOne.Units.map(unit => {
          return (
            <Panel key={unit.Name} unit={unit} side={1}/>
          )
        })}
      </div>
      <div className='grid grid-cols-1 h-screen w-1/6 float-right'>
        {teamTwo && teamTwo.Units.map(unit => {
          return (
            <Panel key={unit.Name} unit={unit} side={2}/>
          )
        })}
      </div>
      <div>
       text = {text}
      </div>
    </div>
  )
}
export default Overlay;