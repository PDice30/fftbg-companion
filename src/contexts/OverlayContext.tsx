import { Dispatch, SetStateAction, createContext, useState } from "react";
import { FFTMap, ToolTipType, ToolTips, Unit } from "../models";
import defaultUnit from "../data/defaultUnit";
import { defaultMap } from "../data/maps";

type OverlayContextType = {
  unit: Unit,
  setUnit:  Dispatch<SetStateAction<Unit>>,
  examineText: string,
  setExamineText:  Dispatch<SetStateAction<string>>,
  toolTips: ToolTips,
  setToolTips:  Dispatch<SetStateAction<ToolTips>>,
  toolTipType: ToolTipType,
  setToolTipType:  Dispatch<SetStateAction<ToolTipType>>,
  isButtonVisible: boolean,
  setIsButtonVisible:  Dispatch<SetStateAction<boolean>>,
  allowOverlay: boolean,
  setAllowOverlay:  Dispatch<SetStateAction<boolean>>,
  textSize: string,
  setTextSize:  Dispatch<SetStateAction<string>>,
  isIntermission: boolean,
  setIsIntermission:  Dispatch<SetStateAction<boolean>>,
  currentUnits: Unit[],
  setCurrentUnits:  Dispatch<SetStateAction<Unit[]>>,
  map: FFTMap,
  setMap: Dispatch<SetStateAction<FFTMap>>,
  track: string,
  setTrack:  Dispatch<SetStateAction<string>>,
  allowNewTrackPopup: boolean,
  setAllowNewTrackPopup: Dispatch<SetStateAction<boolean>>,
  alwaysShowStars: boolean,
  setAlwaysShowStars: Dispatch<SetStateAction<boolean>>,
  isPanelTransparent: boolean,
  setIsPanelTransparent: Dispatch<SetStateAction<boolean>>,
}

export const OverlayContext = createContext<OverlayContextType>({
  unit: defaultUnit,
  setUnit: () => { defaultUnit },
  examineText: '',
  setExamineText: () => { '' },
  toolTips: { },
  setToolTips: () => { { /* empty */ } },
  toolTipType: 'Ability',
  setToolTipType: () => { 'Ability' },
  isButtonVisible: false,
  setIsButtonVisible: () => { false },
  allowOverlay: false,
  setAllowOverlay: () => { false },
  textSize: 'text-2xl',
  setTextSize: () => { 'text-2xl' },
  isIntermission: false,
  setIsIntermission: () => { false },
  currentUnits: [],
  setCurrentUnits: () => { [] },
  map: defaultMap,
  setMap: () => { defaultMap },
  track: '',
  setTrack: () => { '' },
  allowNewTrackPopup: false,
  setAllowNewTrackPopup: () => { false },
  alwaysShowStars: false,
  setAlwaysShowStars: () => { false },
  isPanelTransparent: false,
  setIsPanelTransparent: () => { false },
});

export const OverlayProvider = (props: React.PropsWithChildren) => {
  const [unit, setUnit] = useState<Unit>(defaultUnit);
  const [examineText, setExamineText] = useState('');
  const [toolTips, setToolTips] = useState<ToolTips>({})
  const [toolTipType, setToolTipType] = useState<ToolTipType>('Ability');
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(false);
  const [allowOverlay, setAllowOverlay] = useState<boolean>(false);
  const [textSize, setTextSize] = useState<string>('text-2xl');
  const [isIntermission, setIsIntermission] = useState<boolean>(false);
  const [currentUnits, setCurrentUnits] = useState<Unit[]>([]);
  const [map, setMap] = useState<FFTMap>(defaultMap);
  const [track, setTrack] = useState<string>('');
  const [allowNewTrackPopup, setAllowNewTrackPopup] = useState<boolean>(false);
  const [alwaysShowStars, setAlwaysShowStars] = useState<boolean>(false);
  const [isPanelTransparent, setIsPanelTransparent] = useState<boolean>(false);

  return (
    <OverlayContext.Provider
      value={{ 
        unit, 
        setUnit, 
        examineText,
        setExamineText,
        toolTips,
        setToolTips,
        toolTipType,
        setToolTipType,
        isButtonVisible,
        setIsButtonVisible,
        allowOverlay,
        setAllowOverlay,
        textSize,
        setTextSize,
        isIntermission,
        setIsIntermission,
        currentUnits,
        setCurrentUnits,
        map,
        setMap,
        track,
        setTrack,
        allowNewTrackPopup,
        setAllowNewTrackPopup,
        alwaysShowStars,
        setAlwaysShowStars,
        isPanelTransparent,
        setIsPanelTransparent,
      }}
    >
      {props.children}
    </OverlayContext.Provider>
  );
};