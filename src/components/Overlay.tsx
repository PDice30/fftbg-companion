import { Team } from "../models";
// import * as data from '../data/tournament.json';
import { useContext, useEffect, useState } from "react";
import { Portrait } from "./Portrait";
import getData from "../utils/dataHelper";
import getTooltips from "../utils/tooltips";
import { OverlayContext } from "../contexts/OverlayContext";
import { AllowButton } from "./AllowButton";
import { ExtrasPanel } from "./extras/settings/ExtrasPanel";
import { TrackPopup } from "./TrackPopup";

const Overlay = () => {
  const { setToolTips, isButtonVisible, setIsButtonVisible, isIntermission, setIsIntermission, setCurrentUnits, setTrack, setMap, allowNewTrackPopup, setIntervalId } = useContext(OverlayContext);
  const [teamOne, setTeamOne] = useState<Team>();
  const [teamTwo, setTeamTwo] = useState<Team>();
  // const [storedId, setStoredId] = useState<number>(0);

  useEffect(() => {    
    // TODO : react-query
    const fetchData = async () => {
      // setDataHasBeenFetched(true);
      const data = await getData();

      setTrack(data.extras.trackTitle);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      setMap(data.map);

      // TODO: Can be lag of still showing old champs as new tourney starts
      if (data.teams[0].Name === 'Champion Team' && data.teams[1].Name === 'Champion Team') {
        setIsIntermission(true);
      } else {
        setIsIntermission(false);
      }

      setTeamOne(data.teams[0]);
      setTeamTwo(data.teams[1]);

      setCurrentUnits([...data.teams[0].Units, ...data.teams[1].Units]);
    }

    const getTips = async () => {
      const data = await getTooltips();
      setToolTips(data);
    }

    setIntervalId(window.setInterval(() => void fetchData(), 5000));

    void getTips();
    void fetchData(); // TODO
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  // TODO - teams array could just be one to iterate through, and first half float left
  return (
    <div>
      <div className='w-screen h-screen'
        onMouseOver={() => { setIsButtonVisible(true); }}
        onMouseLeave={() => { setIsButtonVisible(false); }}>
        { isButtonVisible && 
          <>
            <AllowButton />
            <ExtrasPanel />
          </>
        }
        { !isIntermission && 
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
      { allowNewTrackPopup && 
        <TrackPopup />
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
  overlay: import.meta.env.PROD ? overlay : overlay + ' bg-red-500',
  panelLeft: import.meta.env.PROD ? panelLeft : panelLeft + ' bg-blue-400 + border-2',
  panelRight: import.meta.env.PROD ? panelRight : panelRight + ' bg-blue-400',

}

export default Overlay;