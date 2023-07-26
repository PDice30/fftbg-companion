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
    // TODO : react-query
    // If Winners.length === 8: Tournament is over, display "waiting" and wait a set time to call again and show teams
    const fetchData = async () => {
      // const response = await fetch(`http://localhost:3001/api/tournament`);
      // const data: TournamentData = await response.json() as TournamentData;

      // Once id is gotten and tournament is retrieved, only need first call to determine winners

      // TODO: move to helper function
      const id = (await (await fetch('https://fftbg.com/api/tournaments?limit=1')).json() as Tournament[])[0].ID.toString();
      console.log(id);
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
    // <div className='w-4/5 h-screen' style={{fontFamily: 'Altima', fontSize: '30px'}}>
    <div className={tailwindClasses.overlay} style={{fontFamily: 'Altima', fontSize: '30px'}}>
      {/* Will Need to find active teams */}
      <div className={tailwindClasses.panelLeft}>
        {teamOne && teamOne.Units.map(unit => {
          return (
            <Portrait key={unit.Name} unit={unit} side={1}/>
          )
        })}
      </div>
      <div className={tailwindClasses.panelRight}>
        {teamTwo && teamTwo.Units.map(unit => {
          return (
            <Portrait key={unit.Name} unit={unit} side={2}/>
          )
        })}
      </div>
    </div>
  )
}

const overlay = 'w-4/5 h-screen';
const panelLeft = 'grid grid-cols-1 h-screen w-1/9 float-left';
const panelRight = 'grid grid-cols-1 h-screen w-1/9 float-right';

const tailwindClasses =  {
  overlay: import.meta.env.PROD ? overlay : overlay + ' bg-red-100',
  panelLeft: import.meta.env.PROD ? panelLeft : panelLeft + ' bg-blue-400',
  panelRight: import.meta.env.PROD ? panelRight : panelRight + ' bg-blue-400',

}

export default Overlay;