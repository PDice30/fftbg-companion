import { useContext } from "react";
import { Tooltip } from "@mui/material";

import { BASE_MUSTADIO_URL } from "../../../constants";
import { OverlayContext } from "../../../contexts/OverlayContext";


type SettingsPanelProps = {
  showSettingsPanel: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  setShowSettingsPanel: Function;
}

export const SettingsPanel = (props: SettingsPanelProps) => {

  const { allowNewTrackPopup, setAllowNewTrackPopup, alwaysShowStars, setAlwaysShowStars, isPanelTransparent, setIsPanelTransparent } = useContext(OverlayContext);

  const songPopupTitle = allowNewTrackPopup ? 'Hide new song popup' : 'Show new song popup';
  const compatibilityStarsTitle = alwaysShowStars ? 'Hide stars without hover' : 'Show stars without hover';
  const panelOpacityTitle = isPanelTransparent ? 'Make unit panel Opaque' : 'Make unit panel Transparent';

  const transparentClass = isPanelTransparent ? '0.5' : '1.0';

  const handleAllowNewTrackPopup = () => {
    setAllowNewTrackPopup(!allowNewTrackPopup);
  }

  const handleAlwaysShowStars = () => {
    setAlwaysShowStars(!alwaysShowStars);
  }

  const handleIsPanelTransparent = () => {
    setIsPanelTransparent(!isPanelTransparent);
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    <div onMouseLeave={() => props.setShowSettingsPanel(false)}>
      {props.showSettingsPanel &&
        <div className='absolute right-12 -bottom-0 w-36 h-12 bg-unit-panel border-unit-panel border-2 shadow-unit-panel'>
          <Tooltip title={songPopupTitle} arrow placement='bottom'>
            <button className='pt-1 pl-3' onClick={handleAllowNewTrackPopup}>
              <img 
                className='align-middle items-center' 
                src={BASE_MUSTADIO_URL + (allowNewTrackPopup ? 'items/Fairy Harp.png' : 'items/Bloody Strings.png')} 
              />
            </button>
          </Tooltip>
          <Tooltip title={compatibilityStarsTitle} arrow placement='bottom'>
            <button className='pt-1 pl-4' onClick={handleAlwaysShowStars}>
              <img 
                className='align-middle items-center' 
                src={BASE_MUSTADIO_URL + (alwaysShowStars ? 'zodiac/5star.png' : 'zodiac/1star.png')} 
              />
            </button>
          </Tooltip>
          <Tooltip title={panelOpacityTitle} arrow placement='bottom'>
            <button className='pt-1 pl-4' onClick={handleIsPanelTransparent}>
              <div style={{ opacity: transparentClass}}>
                <img 
                  className={'align-middle items-center'} 
                  src={BASE_MUSTADIO_URL + (isPanelTransparent ? 'items/Bracer.png' : 'items/Magic Gauntlet.png')} 
                />
              </div>
            </button>
          </Tooltip>
        </div>
      }
    </div>
  );
}
