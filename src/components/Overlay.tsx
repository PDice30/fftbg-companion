import { Team, TeamName, Tournament } from "../models";
// import * as data from '../data/tournament.json';
import { useEffect, useState } from "react";
import { Panel } from "./Panel";

const Overlay = () => {
  // const [currentTournamentId, setCurrentTournamentId] = useState<number>(0);
  const [tournament, setTournament] = useState<Tournament>();
  const [teamOne, setTeamOne] = useState<Team>();
  const [teamTwo, setTeamTwo] = useState<Team>();
  const [teamOneName, setTeamNameOne] = useState<TeamName>('red');
  const [teamTwoName, setTeamNameTwo] = useState<TeamName>('blue');

  const [text, setText] = useState<string>('sdfsdf');

  useEffect(() => {    
    // TODO : react-query
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8080/api/tournament`);
      const data: Tournament = await response.json() as Tournament;

      console.log(data);
      setTournament(data);
      setTeamNameOne('red');
      setTeamNameTwo('blue');
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
        {tournament && tournament.Teams[`${teamOneName}`].Units.map(unit => {
          return (
            <Panel key={unit.Name} unit={unit} side={1}/>
          )
        })}
      </div>
      <div className='grid grid-cols-1 h-screen w-1/6 float-right'>
        {tournament && tournament.Teams[`${teamTwoName}`].Units.map(unit => {
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