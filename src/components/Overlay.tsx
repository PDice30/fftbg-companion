import { Team, TeamName, Tournament, Unit } from "../models";
// import * as data from '../data/tournament.json';
import { useEffect, useState } from "react";
import { Panel } from "./Panel";

const Overlay = () => {
  const [tournament, setTournament] = useState<Tournament>();
  const [teamOne, setTeamOne] = useState<TeamName>('yellow');
  const [teamTwo, setTeamTwo] = useState<TeamName>('blue');

  useEffect(() => {
    const fetchData = async () => {
      // Will first need to query latest active tournament from Tournaments API
      // Then query single tournament Id from Tournament API
      const response = await fetch('https://fftbg.com/api/tournament/1581360864550');
      const data: Tournament = await response.json() as Tournament;

      console.log(data);

      setTournament(data);
      // console.log(tournament);
    }

    const res = fetchData(); // TODO

  }, []);

  // TODO - teams array could just be one to iterate through, and first half float left
  return (
    <div className='bg-red-100 w-3/4 h-screen'>
      {/* Will Need to find active teams */}
      <div className='grid grid-cols-1 h-screen w-1/6 float-left'>
        {tournament && tournament.Teams[`${teamOne}`].Units.map(unit => {
          return (
            <Panel key={unit.Name} unit={unit} side={1}/>
          )
        })}
      </div>
      <div className='grid grid-cols-1 h-screen w-1/6 float-right'>
        {tournament && tournament.Teams[`${teamTwo}`].Units.map(unit => {
          return (
            <Panel key={unit.Name} unit={unit} side={2}/>
          )
        })}
      </div>
    </div>
  )
}
export default Overlay;