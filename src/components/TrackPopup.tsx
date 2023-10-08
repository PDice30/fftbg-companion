import { BASE_MUSTADIO_URL } from "../constants";
import { OverlayContext } from "../contexts/OverlayContext";
import { useContext } from "react";

export const TrackPopup = () => {
  const { track } = useContext(OverlayContext);

  const trimmedTrack = track.substring(0, 40);
  const trimmed = track.length > 40 ? '...' : '';

  return (
    <div style={{ left: '25%' }}className='track-popup absolute text-center overflow-hidden w-96 h-12 bg-unit-panel border-unit-panel border-2 shadow-unit-panel'>
      <img 
        className='absolute align-middle items-center left-0 bottom-0 pl-4 pt-2 pb-2' 
        src={BASE_MUSTADIO_URL + 'items/Fairy Harp.png'} 
      />
      <div className='align-middle text-center pt-1'>
        <span className='text-2xl'>{trimmedTrack}{trimmed}</span>
      </div>
      <img 
        className='absolute align-middle items-center right-0 bottom-0 pr-4 pt-2 pb-2' 
        src={BASE_MUSTADIO_URL + 'items/Fairy Harp.png'} 
      />
    </div>
  );
}