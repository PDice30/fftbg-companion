import { Team, Tournament, Unit } from "../models";
import * as data from '../data/tournament.json';

const Overlay = () => {
  const tournament: Tournament = data;
  const redTeam = tournament.Teams.red;
  // const teams: Team[] = data.Teams;

  // const unit1Team1 = teams[0].units[0];

  console.log(redTeam.Units[0]);

  return (
    <div className='bg-red-100 w-3/4 h-screen'>
      
    </div>
  )
}
export default Overlay;