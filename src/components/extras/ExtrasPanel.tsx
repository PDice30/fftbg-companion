import { Tooltip } from "@mui/material";
import { BASE_MUSTADIO_URL } from "../../constants";
import { useContext } from "react";
import { OverlayContext } from "../../contexts/OverlayContext";
import { getTrackUrl } from "../../utils/extrasHelper";

type ExtrasPanelProps = {
  extras: string;
}

export const ExtrasPanel = (props: ExtrasPanelProps) => {
  const { track } = useContext(OverlayContext);

  const handleTrackClick = () => {
    window.open(getTrackUrl(track), '_blank');
  }

  return (
    <div
      className='absolute inset-y-0 right-6 w-12 h-36 bg-unit-panel border-unit-panel border-2 shadow-unit-panel'
      style={{ top: '70%' }}>
      <Tooltip title={track} arrow placement='left'>
        <button onClick={handleTrackClick}>
          <img className='p-2 mx-auto' src={BASE_MUSTADIO_URL + 'items/Bloody Strings.png' } />
        </button>
      </Tooltip>      
    </div>
  )
}