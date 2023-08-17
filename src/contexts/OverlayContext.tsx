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
});

export const OverlayProvider = (props: React.PropsWithChildren) => {
  const [unit, setUnit] = useState<Unit>(defaultUnit);
  const [examineText, setExamineText] = useState('');
  const [toolTips, setToolTips] = useState<ToolTips>({})
  const [toolTipType, setToolTipType] = useState<ToolTipType>('Ability');
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(false);
  const [allowOverlay, setAllowOverlay] = useState<boolean>(false);

  return (
    <OverlayContext.Provider
      value={{ 
        unit: unit, 
        setUnit: setUnit, 
        examineText: examineText,
        setExamineText: setExamineText,
        toolTips: toolTips,
        setToolTips: setToolTips,
        toolTipType: toolTipType,
        setToolTipType: setToolTipType,
        isButtonVisible: isButtonVisible,
        setIsButtonVisible: setIsButtonVisible,
        allowOverlay: allowOverlay,
        setAllowOverlay: setAllowOverlay
      }}
    >
      {props.children}
    </OverlayContext.Provider>
  );
};