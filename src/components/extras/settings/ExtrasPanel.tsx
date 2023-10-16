import { Tooltip } from "@mui/material";
import { BASE_IMAGE_URL, BASE_MUSTADIO_URL } from "../../../constants";
import { useContext, useState } from "react";
import { OverlayContext } from "../../../contexts/OverlayContext";
import { getTrackUrl } from "../../../utils/extrasHelper";
import { SettingsPanel } from "./SettingsPanel";

export const ExtrasPanel = () => {
  const { track, map } = useContext(OverlayContext);
  const [mapOrientation, setMapOrientation] = useState<number>(1);
  const [showSettingsPanel, setShowSettingsPanel] = useState<boolean>(false);
  const [showSettingsTooltip, setShowSettingsTooltip] = useState<boolean>(false);

  const handleTrackClick = () => {
    window.open(getTrackUrl(track), '_blank');
  }

  const handleSettingsClick = () => {
    setShowSettingsTooltip(false);
    setShowSettingsPanel(!showSettingsPanel);
  }

  const handleSettingsTooltipMouseEnter = () => {
    setShowSettingsTooltip(!showSettingsPanel);
  }

  const handleMapOrientationClick = (iterator: number) => {
    if (mapOrientation + iterator === 0) setMapOrientation(4);
    else if (mapOrientation + iterator === 5) setMapOrientation(1);
    else setMapOrientation(mapOrientation + iterator);
  }
  
  return (
    <div
      className='absolute inset-y-0 right-6 w-12 h-36 bg-unit-panel border-unit-panel border-2 shadow-unit-panel'
      style={{ top: '70%' }}>
      <Tooltip
        title={
          <div className='max-w-96 max-h-96 min-w-96 min-h-96'>
            <span className='text-3xl'>{ map.fullMapName }</span>
            <img className='w-64 h-48' placeholder='' src={BASE_MUSTADIO_URL + `maps/${map.mapId}_${mapOrientation}.gif`}/>
            {/* For whatever reason with two buttons clicking one then the other, the tooltip disappears */}
            {/* <button className='absolute w-10 h-10 bottom-0 left-0' onClick={() => handleMapOrientationClick(-1)}>
              <img style={{ transform: 'scaleX(-1)' }} src={BASE_IMAGE_URL + 'support.png'}></img>
            </button> */}
            <button className='absolute w-8 h-8 bottom-1 right-1' onClick={() => handleMapOrientationClick(1)}>
              <img src={BASE_IMAGE_URL + 'support.png'}></img>
            </button>
          </div>
        } 
        arrow 
        placement='left'>
          <div className='pt-2 ml-2'>
            <img src={BASE_MUSTADIO_URL + 'items/Papyrus Codex.png' } />
          </div>
      </Tooltip>
      <Tooltip title={track} arrow placement='left'>
        <button className='pt-4 pl-3' onClick={handleTrackClick}>
          <img className='align-middle items-center' src={BASE_MUSTADIO_URL + 'items/Lamia Harp.png' } />
        </button>
      </Tooltip>
      <div> 
        <Tooltip 
          onMouseEnter={() => handleSettingsTooltipMouseEnter()} 
          onMouseLeave={() => setShowSettingsTooltip(false)}
          open={showSettingsTooltip} 
          title={'Settings and Options'} 
          arrow 
          placement='left'>
            <button onClick={handleSettingsClick}>
              <img className='px-2 py-3' src={BASE_MUSTADIO_URL + 'icons/status.png' } />
            </button>
        </Tooltip>
        <SettingsPanel showSettingsPanel={showSettingsPanel} setShowSettingsPanel={setShowSettingsPanel} />
      </div>
    </div>
  )
}