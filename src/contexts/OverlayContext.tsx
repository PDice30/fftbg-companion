import { createContext, useState } from "react";
import { ToolTipType, ToolTips, Unit } from "../models";
import defaultUnit from "../data/defaultUnit";

type OverlayContextType = {
  unit: Unit,
  // eslint-disable-next-line @typescript-eslint/ban-types
  setUnit: Function,
  examineText: string,
  // eslint-disable-next-line @typescript-eslint/ban-types
  setExamineText: Function,
  toolTips: ToolTips,
  // eslint-disable-next-line @typescript-eslint/ban-types
  setToolTips: Function,
  toolTipType: ToolTipType,
  // eslint-disable-next-line @typescript-eslint/ban-types
  setToolTipType: Function,
  isButtonVisible: boolean,
  // eslint-disable-next-line @typescript-eslint/ban-types
  setIsButtonVisible: Function,
  allowOverlay: boolean,
  // eslint-disable-next-line @typescript-eslint/ban-types
  setAllowOverlay: Function,
  textSize: string,
  // eslint-disable-next-line @typescript-eslint/ban-types
  setTextSize: Function,
  isIntermission: boolean,
  // eslint-disable-next-line @typescript-eslint/ban-types
  setIsIntermission: Function,
  currentUnits: Unit[],
  // eslint-disable-next-line @typescript-eslint/ban-types
  setCurrentUnits: Function,
  mapId: string,
  // eslint-disable-next-line @typescript-eslint/ban-types
  setMapId: Function,
  track: string,
  // eslint-disable-next-line @typescript-eslint/ban-types
  setTrack: Function,
}

export const OverlayContext = createContext<OverlayContextType>({
  unit: defaultUnit,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUnit: () => {},
  examineText: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setExamineText: () => {},
  toolTips: { },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setToolTips: () => {},
  toolTipType: 'Ability',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setToolTipType: () => {},
  isButtonVisible: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIsButtonVisible: () => {},
  allowOverlay: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setAllowOverlay: () => {},
  textSize: 'text-2xl',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTextSize: () => {},
  isIntermission: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIsIntermission: () => {},
  currentUnits: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCurrentUnits: () => {},
  mapId: '1',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setMapId: () => {},
  track: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTrack: () => {},
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
  const [mapId, setMapId] = useState<string>('1');
  const [track, setTrack] = useState<string>('');

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
        mapId,
        setMapId,
        track,
        setTrack,
      }}
    >
      {props.children}
    </OverlayContext.Provider>
  );
};