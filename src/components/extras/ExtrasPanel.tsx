import { Tooltip } from "@mui/material";
import { BASE_MUSTADIO_URL } from "../../constants";
import { useContext } from "react";
import { OverlayContext } from "../../contexts/OverlayContext";
import { getTrackUrl } from "../../utils/extrasHelper";

type ExtrasPanelProps = {
  extras: string;
}

export const ExtrasPanel = (props: ExtrasPanelProps) => {
  const { track, map } = useContext(OverlayContext);

  const handleMapClick = () => {
    window.open(`https://ffhacktics.com/wiki/MAP${map.mapId}_${map.parsedMapName}`, '_blank');
  }

  const handleTrackClick = () => {
    window.open(getTrackUrl(track), '_blank');
  }

  const handleSettingsClick = () => {
    window.open(getTrackUrl(track), '_blank');
  }

  return (
    <div
      className='absolute inset-y-0 right-6 w-12 h-36 bg-unit-panel border-unit-panel border-2 shadow-unit-panel'
      style={{ top: '70%' }}>
      <Tooltip title={
      <>
        <span>{ map.fullMapName }</span>
        <img src={BASE_MUSTADIO_URL + `maps/${map.mapId}_1.gif`}/>
      </>
      } arrow placement='left'>
        <button onClick={handleMapClick}>
          <img className='pt-2 pl-2' src={BASE_MUSTADIO_URL + 'items/Papyrus Codex.png' } />
        </button>
      </Tooltip>
      <Tooltip title={track} arrow placement='left'>
        <button onClick={handleTrackClick}>
          <img className='pt-2 pl-3' src={BASE_MUSTADIO_URL + 'items/Bloody Strings.png' } />
        </button>
      </Tooltip>
      <Tooltip title={'Settings and Options'} arrow placement='left'>
        <button onClick={handleSettingsClick}>
          <img className='p-2' src={BASE_MUSTADIO_URL + 'icons/status.png' } />
        </button>
      </Tooltip>
    </div>
  )
}