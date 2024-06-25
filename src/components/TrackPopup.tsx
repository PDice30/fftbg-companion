import { getSizeUp } from "../utils/textHelper";
import { BASE_MUSTADIO_URL } from "../constants";
import { OverlayContext } from "../contexts/OverlayContext";
import { useContext } from "react";

export const TrackPopup = () => {
  const { track, textSize } = useContext(OverlayContext);

  const trimmedTrack = track.substring(0, 60);
  const trimmed = track.length > 60 ? '...' : '';

  if (track && track.length > 0) {
    return (
      <div key={track} style={{ left: '20%' }} className='w-2/5 h-12 track-popup absolute text-center overflow-hidden bg-unit-panel border-unit-panel border-2 shadow-unit-panel'>
        <img 
          className='absolute align-middle items-center left-0 bottom-0 pl-4 pt-2 pb-2' 
          src={BASE_MUSTADIO_URL + 'items/Fairy Harp.png'} 
        />
        <div className='align-middle text-center pt-1'>
          <span className={getSizeUp(textSize)}>{trimmedTrack}{trimmed}</span>
        </div>
        <img 
          className='absolute align-middle items-center right-0 bottom-0 pr-4 pt-2 pb-2' 
          src={BASE_MUSTADIO_URL + 'items/Fairy Harp.png'} 
        />
      </div>
    );
  } else {
    return <></>;
  }
}