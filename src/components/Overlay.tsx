import { Team } from "../models";
// import * as data from '../data/tournament.json';
import { useContext, useEffect, useState } from "react";
import { Portrait } from "./Portrait";
import getData from "../utils/dataHelper";
import getTooltips from "../utils/tooltips";
import { PanelContext } from "../contexts/PanelContext";

const Overlay = () => {
  const { setToolTips } = useContext(PanelContext);
  const [teamOne, setTeamOne] = useState<Team>();
  const [teamTwo, setTeamTwo] = useState<Team>();
  // const [storedId, setStoredId] = useState<number>(0);

  useEffect(() => {    
    // TODO : react-query
    // If Winners.length === 8: Tournament is over, display "waiting" and wait a set time to call again and show teams
    const fetchData = async () => {
      const data = await getData();
      setTeamOne(data[0]);
      setTeamTwo(data[1]);
    }

    const getTips = async () => {
      const data = await getTooltips();
      setToolTips(data);
      // console.log(data);
    }

    setInterval(() => void fetchData(), 10000);

    void getTips();
    void fetchData(); // TODO
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  // TODO - teams array could just be one to iterate through, and first half float left
  return (
    // <div className='w-4/5 h-screen' style={{fontFamily: 'Altima', fontSize: '30px'}}>
    <div className={tailwindClasses.overlay} style={{fontFamily: 'Altima', fontSize: '30px'}}>
      {/* Will Need to find active teams */}
      <div className={tailwindClasses.panelLeft}>
        {teamOne && teamOne.Units.map((unit, index) => {
          return (
            <Portrait key={unit.Name} unit={unit} side={1} index={index}/>
          )
        })}
      </div>
      <div className={tailwindClasses.panelRight}>
        {teamTwo && teamTwo.Units.map((unit, index) => {
          return (
            <Portrait key={unit.Name} unit={unit} side={2} index={index}/>
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
  overlay: import.meta.env.PROD ? overlay : overlay,
  panelLeft: import.meta.env.PROD ? panelLeft : panelLeft,
  panelRight: import.meta.env.PROD ? panelRight : panelRight,
  // overlay: import.meta.env.PROD ? overlay : overlay + ' bg-red-100',
  // panelLeft: import.meta.env.PROD ? panelLeft : panelLeft + ' bg-blue-400',
  // panelRight: import.meta.env.PROD ? panelRight : panelRight + ' bg-blue-400',

}

export default Overlay;