import { Team } from "../models";
// import * as data from '../data/tournament.json';
import { useContext, useEffect, useState } from "react";
import { Portrait } from "./Portrait";
import getData from "../utils/dataHelper";
import getTooltips from "../utils/tooltips";
import { OverlayContext } from "../contexts/OverlayContext";
import { AllowButton } from "./AllowButton";

const Overlay = () => {
  const { setToolTips, isButtonVisible, setIsButtonVisible, isIntermission, setIsIntermission, setCurrentUnits } = useContext(OverlayContext);
  const [teamOne, setTeamOne] = useState<Team>();
  const [teamTwo, setTeamTwo] = useState<Team>();
  // const [storedId, setStoredId] = useState<number>(0);

  useEffect(() => {    
    // TODO : react-query
    // If Winners.length === 8: Tournament is over, display "waiting" and wait a set time to call again and show teams
    const fetchData = async () => {
      const data = await getData();

      if (data[0].Name === 'Champion Team' && data[1].Name === 'Champion Team') {
        setIsIntermission(true);
      } else {
        setIsIntermission(false);
      }

      setTeamOne(data[0]);
      setTeamTwo(data[1]);

      setCurrentUnits([...data[0].Units, ...data[1].Units]);
    }

    const getTips = async () => {
      const data = await getTooltips();
      setToolTips(data);
    }

    setInterval(() => void fetchData(), 5000);

    void getTips();
    void fetchData(); // TODO
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  // TODO - teams array could just be one to iterate through, and first half float left
  return (
    <div className='w-screen h-screen'
      onMouseOver={() => { setIsButtonVisible(true); }}
      onMouseLeave={() => { setIsButtonVisible(false); }}>
        { isButtonVisible && 
          <AllowButton />
        }
      {!isIntermission && 
        <div className={tailwindClasses.overlay} style={{fontFamily: 'Altima', fontSize: '30px'}} >
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
                <Portrait key={unit.Name} unit={unit} side={2} index={index + 4}/>
              )
            })}
          </div>
        </div>
      }
    </div>
  )
}

const overlay = 'w-4/5 h-screen';
const panelLeft = 'grid grid-cols-1 grid-rows-4 h-screen w-1/9 float-left';
const panelRight = 'grid grid-cols-1 grid-rows-4 h-screen w-1/9 float-right';

const tailwindClasses =  {
  // overlay: import.meta.env.PROD ? overlay : overlay,
  // panelLeft: import.meta.env.PROD ? panelLeft : panelLeft,
  // panelRight: import.meta.env.PROD ? panelRight : panelRight,
  overlay: import.meta.env.PROD ? overlay : overlay + ' bg-red-100',
  panelLeft: import.meta.env.PROD ? panelLeft : panelLeft + ' bg-blue-400 + border-2',
  panelRight: import.meta.env.PROD ? panelRight : panelRight + ' bg-blue-400',

}

export default Overlay;