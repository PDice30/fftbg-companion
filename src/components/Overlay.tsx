import { Team, TeamName, Tournament, Unit } from "../models";
// import * as data from '../data/tournament.json';
import { useEffect, useState } from "react";
import { Panel } from "./Panel";

const Overlay = () => {
  const [currentTournamentId, setCurrentTournamentId] = useState<number>(0);
  const [tournament, setTournament] = useState<Tournament>();
  const [teamOne, setTeamOne] = useState<TeamName>('yellow');
  const [teamTwo, setTeamTwo] = useState<TeamName>('blue');

  const [text, setText] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      // Will first need to query latest active tournament from Tournaments API
      // Then query single tournament Id from Tournament API

      // TODO: Implement better fetching/react-query
      const t = await (await fetch ('https://fftbg.com/api/tournaments?limit=1')).json() as Tournament[];
      console.log(t);
      
      const id = t[0].ID;
      setCurrentTournamentId(id);

      console.log(id);

      // Probably can consolidate these two calls
      const response = await fetch(`https://fftbg.com/api/tournament/${id}`);
      const data: Tournament = await response.json() as Tournament;

      console.log(data);
      setTournament(data);



      /*
      * Can just use [Winners] from the tournament API - Latest winner will be posted and can move on to next
      * match through a tournament mapping const schema
      * 
      * This is updated very soon after the match, and might make since to call from tournaments/limit=1 
      * as it's only 1kb
      * 
      * Will have to wait to start the panels because they move for ~40 seconds while betting is happening.
      * 
      * Could move Panes to the right always, the width % of the chat log
      */

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      // const res = await fetch(`http://fftbattleground.com/fftbg/champion.txt`, { 
      //   headers: {
      //     'Access-Control-Allow-Origin': '*',
      //     'Content-Type': 'text/plain',
      //   } 
      // });

      // const textArray = res.split('\n');

      // console.log(res.text());
      // console.log(res.size);
      // console.log(res);

      // console.log(res);

      // setText(res);
      // console.log(textArray);

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
      <div>
       text = {text}
      </div>
    </div>
  )
}
export default Overlay;